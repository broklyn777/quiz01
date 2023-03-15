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
   {
    question: "Vad heter Esters syster?",
    options: ["Gudrun", "Emma", "Lisa", "Hanna"],
    correctAnswer: 3,
  },
   {
    question: "Vad heter Hannas syster?",
    options: ["Ronja", "Elsa", "Ester", "Ulla"],
    correctAnswer: 2,
  },
  // Lägg till fler frågor här...
];

export const Quiz: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswer = (selectedOption: number) => {
    setSelectedOption(selectedOption);
    if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setSelectedOption(null);
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
  };

  if (currentQuestionIndex === questions.length) {
    return (
      <div className="bg-gray-100 p-8 rounded-lg">
        <h2 className="text-xl mb-4">Sammanfattning</h2>
        <p>
          Du fick {score} av {questions.length} rätt ({Math.round((score / questions.length) * 100)}%).
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4" onClick={restartQuiz}>
          Starta om frågesporten
        </button>
      </div>
    );
  }

  const isCorrect = selectedOption === questions[currentQuestionIndex].correctAnswer;

  return (
    <div className="bg-gray-100 p-8 rounded-lg">
      <h2 className="text-xl mb-4">{questions[currentQuestionIndex].question}</h2>
      <ul>
        {questions[currentQuestionIndex].options.map((option, index) => (
          <li key={index} className="mb-2">
            <button
              className={`py-2 px-4 rounded ${
                selectedOption === index
                  ? isCorrect
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                  : "bg-white border border-gray-300 text-gray-700"
              }`}
              onClick={() => handleAnswer(index)}
            >
              {option}
            </button>
          </li>
        ))}
      </ul>
      {selectedOption !== null && (
        <div className="mt-4">
          <p>{isCorrect ? "Rätt svar!" : "Fel svar."}</p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded mt-2"
            onClick={nextQuestion}
          >
            Nästa fråga
          </button>
        </div>
      )}
    </div>
  );
};
