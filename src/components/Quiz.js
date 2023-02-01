import React, { useContext } from "react";
import { QuizContext } from "../contexts/quizContext";
import Question from "./Question";
import "../index.css";

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  console.log(quizState);

  return (
    <div className="quiz">
      {!quizState.showResults ? (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          {}

          <div
            className="next-button"
            onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          >
            {quizState.currentQuestionIndex ===
            quizState.questions.length - 1 ? (
              <div>Results</div>
            ) : (
              <div>Next</div>
            )}
          </div>
        </div>
      ) : (
        <div className="results">
          <div className="congratulations">Congratulations ! </div>
          <div className="results-info">
            <div>You have completed the quiz : </div>
            <div>
              {" "}
              You've got {quizState.correctAnswerCount} of{" "}
              {quizState.questions.length}
            </div>
            <div
              className="restart-button"
              onClick={() => dispatch({ type: "RESTART" })}
            >
              Restart
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
