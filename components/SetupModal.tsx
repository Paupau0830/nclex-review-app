"use client";

import { useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SetupModal({ onStart }: any) {
  const [questions, setQuestions] = useState(20);
  const [time, setTime] = useState(20);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-4">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold text-center mb-6">
          Start New Exam
        </h1>

        {/* Question Count */}
        <label className="block text-sm mb-2">
          Number of Questions
        </label>
        <input
          type="number"
          value={questions}
          onChange={(e) => setQuestions(Number(e.target.value))}
          className="w-full mb-4 p-3 border rounded dark:bg-gray-800"
        />

        {/* Time */}
        <label className="block text-sm mb-2">
          Time Limit (minutes)
        </label>
        <input
          type="number"
          value={time}
          onChange={(e) => setTime(Number(e.target.value))}
          className="w-full mb-6 p-3 border rounded dark:bg-gray-800"
        />

        <button
          onClick={() => onStart(questions, time)}
          className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold"
        >
          Start Exam
        </button>
      </div>
    </div>
  );
}