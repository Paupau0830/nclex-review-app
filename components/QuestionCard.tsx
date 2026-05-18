"use client";

import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function QuestionCard({ questionData, onNext }: any) {
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleSubmit = () => {
    setShowAnswer(true);
  };

  return (
    <div className="p-4 border rounded-xl shadow">
      <h2 className="text-lg font-semibold">{questionData.question}</h2>

      <div className="mt-4 space-y-2">
        {questionData.options.map((opt: string, index: number) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`block w-full p-2 border rounded 
              ${selected === index ? "bg-blue-200" : ""}`}
          >
            {opt}
          </button>
        ))}
      </div>

      {!showAnswer ? (
        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
      ) : (
        <div className="mt-4">
          <p>
            {selected === questionData.answer
              ? "✅ Correct!"
              : "❌ Incorrect"}
          </p>
          <p className="text-sm mt-2">{questionData.rationale}</p>

          <button
            onClick={onNext}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
          >
            Next Question
          </button>
        </div>
      )}
    </div>
  );
}