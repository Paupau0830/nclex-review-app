"use client";

import { useEffect, useState } from "react";
import { questions } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";

type Theme = "light" | "dark" | "system";

export default function QuizPage() {
  // ================= CONSTANTS =================
  const TOTAL_QUESTIONS = 43;
  const EXAM_TIME = 60 * 60;

  // ================= ATTEMPTS =================
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [attempts, setAttempts] = useState<any[]>([]);

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
  const [timeLeft, setTimeLeft] = useState(EXAM_TIME);
  const [isPaused, setIsPaused] = useState(false);
  const [hasSavedAttempt, setHasSavedAttempt] = useState(false);

  const [theme, setTheme] = useState<Theme>("system");

  // Track actual time spent
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
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
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
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, TOTAL_QUESTIONS);

    setDailyQuestions(selected);
    setCurrentIndex(0);
    setScore(0);
    setTimeLeft(EXAM_TIME);
    setIsPaused(false);
    setStartTime(Date.now());
    setHasSavedAttempt(false);

    localStorage.setItem("dailyQuestions", JSON.stringify(selected));
    localStorage.setItem("progress", "0");
    localStorage.setItem("score", "0");
  };

  useEffect(() => {
    const saved = localStorage.getItem("dailyQuestions");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (saved) setDailyQuestions(JSON.parse(saved));
    else generateExam();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const savedIndex = localStorage.getItem("progress");
    const savedScore = localStorage.getItem("score");

    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedIndex) setCurrentIndex(Number(savedIndex));
    if (savedScore) setScore(Number(savedScore));
  }, []);

  useEffect(() => {
    localStorage.setItem("progress", currentIndex.toString());
    localStorage.setItem("score", score.toString());
  }, [currentIndex, score]);

  // ✅ Timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const nextQuestion = () => setCurrentIndex((prev) => prev + 1);

  const handleAnswer = (correct: boolean) => {
    if (correct) setScore((prev) => prev + 1);
  };

  // ✅ Reset
  const resetExam = () => {
    const confirmReset = confirm("Reset exam?");
    if (!confirmReset) return;

    localStorage.clear();
    generateExam();
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
  const isFinished =
    currentIndex >= dailyQuestions.length || timeLeft === 0;

  if (!isFinished || !startTime || hasSavedAttempt) return;

  const duration = Math.floor((Date.now() - startTime) / 1000);

  // eslint-disable-next-line react-hooks/set-state-in-effect
  saveAttempt(duration);
  setHasSavedAttempt(true);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [currentIndex, timeLeft, hasSavedAttempt, startTime, dailyQuestions.length]);

  // ================= UI =================
  if (dailyQuestions.length === 0) return <p>Loading...</p>;

  if (currentIndex >= dailyQuestions.length || timeLeft === 0) {
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

          {/* HISTORY */}
          <div className="mt-6 text-left">
            <h2 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
              History
            </h2>

            {attempts.map((a, i) => (
              <div key={i} className="text-sm mb-2">
                <p>
                  {a.score}/{a.total} • {Math.floor(a.duration / 60)} min
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
              className="mt-3 w-full text-sm bg-gray-700 text-white py-2 rounded"
            >
              Clear History
            </button>
          )}
        </div>
      </div>
    );
  }

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
              {Math.floor(timeLeft / 60)}:
              {(timeLeft % 60).toString().padStart(2, "0")}
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
          questionData={dailyQuestions[currentIndex]}
          onNext={nextQuestion}
          onAnswer={handleAnswer}
        />
      </div>
    </div>
  );
}