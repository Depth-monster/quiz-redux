import React from "react";

const Answer = ({
  answerText,
  index,
  onSelectAnswer,
  currentAnswer,
  correctAnswer,
}) => {
  const letters = ["A", "B", "C", "D"];

  const isCorrect = currentAnswer && answerText === correctAnswer;
  const isWrong = currentAnswer === answerText && currentAnswer !== correctAnswer;

  const correctAnswerClass = isCorrect ? "correct-answer" : "";
  const wrongAnswerClass = isWrong ? "wrong-answer" : "";
  const disabledClass = currentAnswer ? "disabled-answer" : "";

  return (
    <div
      className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}
      onClick={() => onSelectAnswer(answerText)}
    >
      <div className="answer-letter">{letters[index]}</div>
      <div className="answer-text">{answerText}</div>
    </div>
  );
};

export default Answer;
