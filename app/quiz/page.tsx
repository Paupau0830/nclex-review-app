"use client";

import { useEffect, useState } from "react";
import { questions } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";

type Theme = "light" | "dark" | "system";

export default function QuizPage() {
  // ================= CONSTANTS =================
  const [totalQuestions, setTotalQuestions] = useState<number | null>(null);
  const [examTime, setExamTime] = useState<number | null>(null);

  // ================= ATTEMPTS =================
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [attempts, setAttempts] = useState<any[]>([]);

  const totalAttempts = attempts.length;

  const bestScore = totalAttempts
    ? Math.max(...attempts.map((a) => a.score))
    : 0;

  const averageScore = totalAttempts
    ? Math.round(
        attempts.reduce((sum, a) => sum + a.score, 0) / totalAttempts
      )
    : 0;

  const bestTime = totalAttempts
    ? Math.min(...attempts.map((a) => a.duration))
    : 0;

  const averageTime = totalAttempts
    ? Math.floor(
        attempts.reduce((sum, a) => sum + a.duration, 0) / totalAttempts
      )
    : 0;

  const passRate = totalAttempts
    ? Math.round(
        (attempts.filter((a) => a.score >= 0.75 * a.total).length /
          totalAttempts) *
          100
      )
    : 0;

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}m ${s}s`;
  };

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("attempts") || "[]");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setAttempts(saved);
  }, []);

  const saveAttempt = (duration: number) => {
    const attempt = {
      score,
      total: dailyQuestions.length,
      duration,
      timedOut: timeLeft === 0,
      date: new Date().toISOString(),
    };

    setAttempts((prev) => {
      const updated = [...prev, attempt];
      localStorage.setItem("attempts", JSON.stringify(updated));
      return updated;
    });
  };

  // ================= STATE =================
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [dailyQuestions, setDailyQuestions] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState<number | null>(null); // ← null means exam not started
  const [isPaused, setIsPaused] = useState(false);
  const [hasSavedAttempt, setHasSavedAttempt] = useState(false);
  const [isExamActive, setIsExamActive] = useState(false); // ← new flag

  const [theme, setTheme] = useState<Theme>("system");

  const [startTime, setStartTime] = useState<number | null>(null);

  // ================= THEME =================
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(savedTheme || "system");
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (mode: Theme) => {
      if (mode === "dark") root.classList.add("dark");
      else if (mode === "light") root.classList.remove("dark");
      else {
        const isDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        root.classList.toggle("dark", isDark);
      }
    };

    applyTheme(theme);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const listener = () => theme === "system" && applyTheme("system");

    media.addEventListener("change", listener);
    localStorage.setItem("theme", theme);

    return () => media.removeEventListener("change", listener);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "light" ? "dark" : prev === "dark" ? "system" : "light"
    );
  };

  const getThemeIcon = () => {
    if (theme === "light") return "☀️";
    if (theme === "dark") return "🌙";
    return "💻";
  };

  // ================= EXAM LOGIC =================
  const generateExam = () => {
    if (!totalQuestions || totalQuestions < 1 || !examTime) return;

    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, totalQuestions);

    setDailyQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setIsPaused(false);
    setStartTime(Date.now());
    setHasSavedAttempt(false);
    setIsExamActive(true); // ← mark exam as active before setting time
    setTimeLeft(examTime); // ← set time last so timeLeft === 0 never fires prematurely

    localStorage.setItem("dailyQuestions", JSON.stringify(selected));
    localStorage.setItem("progress", "0");
    localStorage.setItem("score", "0");
  };

  const bestPercent =
    totalAttempts && dailyQuestions.length
      ? Math.round((bestScore / dailyQuestions.length) * 100)
      : 0;

  const handleStartExam = () => {
    if (!totalQuestions || !examTime) return;
    generateExam();
  };

  useEffect(() => {
    const savedIndex = localStorage.getItem("progress");
    const savedScore = localStorage.getItem("score");

    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedIndex) setCurrentIndex(Number(savedIndex));
    if (savedScore) setScore(Number(savedScore));
  }, []);

  useEffect(() => {
    if (!isExamActive) return;
    localStorage.setItem("progress", currentIndex.toString());
    localStorage.setItem("score", score.toString());
  }, [currentIndex, score, isExamActive]);

  // ✅ Timer — only runs when exam is active and not paused
  useEffect(() => {
    if (!isExamActive || isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 1) return 0;
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isExamActive, isPaused]);

  const nextQuestion = () => setCurrentIndex((prev) => prev + 1);

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore((prev) => prev + 1);
  };

  // ✅ Reset
  const resetExam = () => {
    const confirmReset = confirm("Reset exam?");
    if (!confirmReset) return;

    localStorage.clear();
    setTotalQuestions(null);
    setExamTime(null);
    setDailyQuestions([]);
    setIsExamActive(false);
    setTimeLeft(null);
    setCurrentIndex(0);
    setScore(0);
    setHasSavedAttempt(false);
  };

  // ✅ Pause
  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  const clearHistory = () => {
    const confirmClear = confirm("Clear all history?");
    if (!confirmClear) return;

    localStorage.removeItem("attempts");
    setAttempts([]);
  };

  // ================= FINISH =================
  useEffect(() => {
    // Only trigger finish logic if exam is active and not already saved
    if (!isExamActive || hasSavedAttempt || !startTime) return;

    const allAnswered = currentIndex >= dailyQuestions.length && dailyQuestions.length > 0;
    const timedOut = timeLeft === 0;

    if (!allAnswered && !timedOut) return;

    const duration = Math.floor((Date.now() - startTime) / 1000);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    saveAttempt(duration);
    setHasSavedAttempt(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, timeLeft, hasSavedAttempt, startTime, dailyQuestions.length, isExamActive]);

  // ================= UI =================

  // Setup screen — show when exam is not active
  if (!isExamActive) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md w-full max-w-sm">
          <h1 className="text-xl font-bold mb-4 text-center">Start Exam</h1>

          <label className="block mb-2 text-sm">Questions</label>
          <input
            type="number"
            min={1}
            max={questions.length}
            className="w-full mb-4 p-2 border rounded"
            placeholder={`Max ${questions.length}`}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value > questions.length) {
                setTotalQuestions(questions.length);
              } else {
                setTotalQuestions(value || null);
              }
            }}
          />
          <p className="text-xs text-gray-500 mb-2">
            Max available: {questions.length}
          </p>

          <label className="block mb-2 text-sm">Time (minutes)</label>
          <input
            type="number"
            className="w-full mb-4 p-2 border rounded"
            placeholder="e.g. 60"
            onChange={(e) =>
              setExamTime(Number(e.target.value) * 60 || null)
            }
          />

          <button
            disabled={!totalQuestions || !examTime}
            onClick={handleStartExam}
            className="w-full bg-blue-600 text-white py-2 rounded disabled:opacity-50"
          >
            Start
          </button>
        </div>
      </div>
    );
  }

  // Loading guard — exam is active but questions not ready yet
  if (dailyQuestions.length === 0) return <p>Loading...</p>;

  // Finish screen
  if (
    isExamActive &&
    (currentIndex >= dailyQuestions.length || timeLeft === 0)
  ) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100 dark:bg-gray-950">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md w-full max-w-md text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            Exam Finished
          </h1>

          <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
            Score: {score} / {dailyQuestions.length}
          </p>

          <button
            onClick={resetExam}
            className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold"
          >
            Retake Exam
          </button>

          {/* ANALYTICS */}
          {totalAttempts > 0 && (
            <div className="mt-6 text-left">
              <h2 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                Analytics
              </h2>

              <div className="text-sm space-y-1">
                <p>Attempts: {totalAttempts}</p>
                <p>
                  Best Score: {bestScore} / {dailyQuestions.length}
                </p>
                <p>
                  Average Score: {averageScore} / {dailyQuestions.length}
                </p>
                <p>Fastest Time: {formatTime(bestTime)}</p>
                <p>Average Time: {formatTime(averageTime)}</p>
                <p>Best percentage: {bestPercent}%</p>
                <p>Pass rate: {passRate}%</p>
              </div>
            </div>
          )}

          {/* HISTORY */}
          <div className="mt-6 text-left">
            <h2 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
              History
            </h2>

            {[...attempts].reverse().map((a) => (
              <div key={a.date} className="text-sm mb-2">
                <p>
                  {a.score}/{a.total} • {formatTime(a.duration)}
                  <span
                    className={`ml-2 text-xs font-semibold ${
                      a.timedOut ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {a.timedOut ? "Timed Out" : "Completed"}
                  </span>
                </p>
                <p className="text-xs opacity-70">
                  {new Date(a.date).toLocaleString()}
                </p>
              </div>
            ))}
          </div>

          {attempts.length > 0 && (
            <button
              onClick={clearHistory}
              className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold"
            >
              Clear History
            </button>
          )}
        </div>
      </div>
    );
  }

  // Quiz screen
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      {/* Header */}
      <div className="sticky top-0 bg-white dark:bg-gray-900 shadow-sm p-4 z-10">
        <div className="flex justify-between items-center text-sm text-gray-700 dark:text-gray-300">
          <span>
            Q {currentIndex + 1} / {dailyQuestions.length}
          </span>

          <div className="flex items-center gap-3">
            <span className="font-semibold">
              {Math.floor((timeLeft ?? 0) / 60)}:
              {((timeLeft ?? 0) % 60).toString().padStart(2, "0")}
            </span>

            <button
              onClick={togglePause}
              className="text-xs px-2 py-1 border rounded"
            >
              {isPaused ? "▶️" : "⏸"}
            </button>

            <button
              onClick={resetExam}
              className="text-xs px-2 py-1 border rounded text-red-500 border-red-400"
            >
              Reset
            </button>

            <button
              onClick={toggleTheme}
              className="text-xs px-2 py-1 border rounded"
            >
              {getThemeIcon()}
            </button>
          </div>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-800 h-2 rounded mt-2">
          <div
            className="bg-blue-500 h-2 rounded"
            style={{
              width: `${(currentIndex / dailyQuestions.length) * 100}%`,
            }}
          />
        </div>
      </div>

      {isPaused && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-xl text-center">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
              Exam Paused
            </h2>
            <button
              onClick={togglePause}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
            >
              Resume
            </button>
          </div>
        </div>
      )}

      <div className="p-4 max-w-xl mx-auto">
        <QuestionCard
          key={currentIndex}
          questionData={dailyQuestions[currentIndex]}
          onNext={nextQuestion}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}