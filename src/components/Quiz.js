import React, { useContext,  } from "react";
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
            {/* Next question */}
          </div>
          <div
            className="next-button"
            onClick={() => dispatch({ type: "PREVIOUS_QUESTION" })}
          >
            Previous question
          </div>
        </div>
      ) : (
        <div>Showing results</div>
      )}
    </div>
  );
};

export default Quiz;
