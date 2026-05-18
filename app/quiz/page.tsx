"use client";

import { useState } from "react";
import { questions } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const dailyQuestions = questions.slice(0, 85);
  

  const nextQuestion = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  if (currentIndex >= dailyQuestions.length) {
    return <h1 className="text-xl">🎉 You finished the set for today!</h1>;
  }

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-xl mb-4">
        Question {currentIndex + 1} / 85
      </h1>

      <QuestionCard
        questionData={dailyQuestions[currentIndex]}
        onNext={nextQuestion}
      />
    </div>
  );
}