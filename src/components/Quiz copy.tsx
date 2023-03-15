// components/Quiz.tsx
import React, { useState } from "react";

type Question = {
  question: string;
  options: string[];
  correctAnswer: number;
};

const questions: Question[] = [
  {
    question: "Vad är huvudstaden i Sverige?",
    options: ["Stockholm", "Göteborg", "Malmö", "Uppsala"],
    correctAnswer: 0,
  },
  // Lägg till fler frågor här...
];

export const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  // components/Quiz.tsx
return (
  <div className="bg-gray-100 p-8 rounded-lg">
    <h2 className="text-xl mb-4">{questions[currentQuestionIndex].question}</h2>
    <ul>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <li key={index} className="mb-2">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => handleAnswer(index)}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  </div>
);

};
