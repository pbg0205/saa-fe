import { useEffect } from "react";

type ChoiceListProps = {
  choices: string[];
  correctAnswerIndices: number[];
  showAnswer: boolean;
  onCheckAnswer: (isCorrect: boolean) => void;
  selectedChoices?: number[];
  onAnswerSelect: (choices: number[]) => void;
};

export function ChoiceList({
  choices,
  correctAnswerIndices = [],
  showAnswer,
  onCheckAnswer,
  selectedChoices = [],
  onAnswerSelect,
}: ChoiceListProps) {
  useEffect(() => {
    if (!showAnswer) {
      return;
    }

    onCheckAnswer(
      arraysEqual(selectedChoices.sort(), correctAnswerIndices.sort())
    );
  }, [showAnswer, selectedChoices, correctAnswerIndices, onCheckAnswer]);

  const toggleChoice = (index: number) => {
    if (showAnswer) {
      return;
    }
    const newSelectedChoices = selectedChoices.includes(index)
      ? selectedChoices.filter((i) => i !== index)
      : [...selectedChoices, index];

    onAnswerSelect(newSelectedChoices);
  };

  const isChoiceEqualsAnswer = (index: number) => {
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
          } 
          ${isChoiceEqualsAnswer(index) ? "border-2 border-sky-500" : ""}`}
          onClick={() => toggleChoice(index)}
        >
          {choice}
        </li>
      ))}
    </ul>
  );
}
