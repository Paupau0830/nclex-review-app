"use client";

import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function QuestionCard({ questionData, onNext, onAnswer }: any) {
  const [selected, setSelected] = useState<number[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);

  const isSATA = questionData.type === "sata";

  const handleSelect = (index: number) => {
    if (isSATA) {
      setSelected((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setSelected([index]); // ✅ radio behavior
    }
  };

  const isCorrect = () => {
    return (
      JSON.stringify([...selected].sort()) ===
      JSON.stringify([...questionData.answer].sort())
    );
  };

  const getOptionStyle = (index: number) => {
    if (!showAnswer) {
      return selected.includes(index)
        ? "border-blue-500 bg-blue-500/10"
        : "border-gray-300 dark:border-gray-700";
    }

    const isAnswer = questionData.answer.includes(index);
    const isSelected = selected.includes(index);

    if (isAnswer) return "border-green-500 bg-green-500/10";
    if (isSelected && !isAnswer) return "border-red-500 bg-red-500/10";

    return "border-gray-200 dark:border-gray-700";
  };

  const handleSubmit = () => {
    setShowAnswer(true);
    onAnswer(isCorrect());
  };

  return (
    <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl shadow-md">
      {/* Question */}
      <h2 className="text-lg font-semibold leading-relaxed text-gray-900 dark:text-gray-100">
        {questionData.question}
      </h2>

      {/* Instruction */}
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
        {isSATA
          ? "Select all that apply."
          : "Select the best answer."}
      </p>

      {/* Options */}
      <div className="mt-5 space-y-3">
        {questionData.options.map((opt: string, index: number) => {
          const isSelected = selected.includes(index);

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              className={`w-full text-left p-4 rounded-xl border transition flex items-center gap-3
              ${getOptionStyle(index)}`}
            >
              {/* Radio / Checkbox UI */}
              <div
                className={`w-5 h-5 flex items-center justify-center border rounded-full
                ${
                  isSelected
                    ? "bg-blue-600 border-blue-600 text-white"
                    : "border-gray-400 dark:border-gray-600"
                }`}
              >
                {isSATA ? (
                  isSelected ? "✓" : ""
                ) : (
                  isSelected ? "●" : ""
                )}
              </div>

              <span className="text-gray-800 dark:text-gray-200">
                <span className="font-medium mr-1">
                  {String.fromCharCode(65 + index)}.
                </span>
                {opt}
              </span>
            </button>
          );
        })}
      </div>

      {/* Action */}
      {!showAnswer ? (
        <button
          onClick={handleSubmit}
          disabled={selected.length === 0}
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl font-semibold disabled:bg-gray-400"
        >
          Submit Answer
        </button>
      ) : (
        <div className="mt-6">
          <p
            className={`text-lg font-semibold ${
              isCorrect()
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {isCorrect() ? "Correct" : "Incorrect"}
          </p>

          <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">
            {questionData.rationale}
          </p>

          <button
            onClick={() => {
              setSelected([]);
              setShowAnswer(false);
              onNext();
            }}
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl font-semibold"
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}