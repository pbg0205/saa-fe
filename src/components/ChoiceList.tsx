import { useState, useEffect } from "react";

type ChoiceListProps = {
  choices: string[];
  correctAnswerIndices: number[] | undefined;
  showAnswer: boolean;
  onCheckAnswer: (isCorrect: boolean) => void;
};

export function ChoiceList({
  choices,
  correctAnswerIndices = [],
  showAnswer,
  onCheckAnswer,
}: ChoiceListProps) {
  const [selectedChoices, setSelectedChoices] = useState<number[]>([]);
  const [answerChecked, setAnswerChecked] = useState(false);

  useEffect(() => {
    if (showAnswer && !answerChecked) {
      const isCorrect = arraysEqual(
        selectedChoices.sort(),
        correctAnswerIndices.sort()
      );
      onCheckAnswer(isCorrect);
      setAnswerChecked(true);
    }
  }, [
    showAnswer,
    selectedChoices,
    correctAnswerIndices,
    answerChecked,
    onCheckAnswer,
  ]);

  const toggleChoice = (index: number) => {
    if (!showAnswer) {
      setSelectedChoices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
      setAnswerChecked(false);
    }
  };

  const isCorrect = (index: number) => {
    return showAnswer && correctAnswerIndices.includes(index);
  };

  const arraysEqual = (a: number[], b: number[]) => {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  };

  return (
    <ul className="mb-6">
      {choices.map((choice: string, index: number) => (
        <li
          key={index}
          className={`mb-2 cursor-pointer ${
            selectedChoices.includes(index) ? "font-bold" : ""
          } ${isCorrect(index) ? "border-2 border-sky-500" : ""}`}
          onClick={() => toggleChoice(index)}
        >
          {choice}
        </li>
      ))}
    </ul>
  );
}
