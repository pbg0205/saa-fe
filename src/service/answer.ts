const answerAlphabet = ["A", "B", "C", "D", "E", "F"];

export const answerIndices: (answer: string) => number[] = (answer: string) => {
  return answer
    .trim()
    .split(" ")
    .map((ans) => {
      return answerAlphabet.indexOf(ans);
    });
};
