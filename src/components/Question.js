import React, { useContext } from "react";
import { QuizContext } from "../contexts/quizContext";

const Question = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  return <div className="question">{currentQuestion.question}</div>;
};

export default Question;
