export const shuffleAnswers = (question) => {
  const unShuffled = [question.correctAnswer, ...question.incorrectAnswers];
  return unShuffled
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};
