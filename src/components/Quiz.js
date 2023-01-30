import React, { useContext, useState } from "react";
import { QuizContext } from "../contexts/quizContext";
import Question from "./Question";
import "../index.css";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);

  return (
    <div className="quiz">
      <div className="score">
        Question {quizState.currentQuestionIndex + 1}/
        {quizState.questions.length}
      </div>
      <Question />
      <div
        className="next-button"
        onClick={() => dispatch({ type: "NEXT_QUESTION" })}
      >
        Next question
      </div>
      <div
        className="next-button"
        onClick={() => dispatch({ type: "PREVIOUS_QUESTION" })}
      >
        Previous question
      </div>
    </div>
  );
};

export default Quiz;
