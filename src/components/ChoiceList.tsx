import { useEffect } from "react";

type ChoiceListProps = {
  choices: string[];
  answersIndex: number[];
  showAnswer: boolean;
  onCheckAnswer: (isCorrect: boolean) => void;
  selectedChoicesIndex?: number[];
  onAnswerSelect: (choices: number[]) => void;
};

export function ChoiceList({
  choices,
  selectedChoicesIndex = [],
  answersIndex = [],
  showAnswer,
  onCheckAnswer,
  onAnswerSelect,
}: ChoiceListProps) {
  useEffect(() => {
    if (!showAnswer) {
      return;
    }

    onCheckAnswer(
      arraysEqual(selectedChoicesIndex.sort(), answersIndex.sort())
    );
  }, [showAnswer, selectedChoicesIndex, answersIndex, onCheckAnswer]);

  const toggleChoice = (index: number) => {
    if (showAnswer) {
      return;
    }
    const newSelectedChoices = selectedChoicesIndex.includes(index)
      ? selectedChoicesIndex.filter((i) => i !== index)
      : [...selectedChoicesIndex, index];

    onAnswerSelect(newSelectedChoices);
  };

  const isChoiceEqualsAnswer = (index: number) => {
    return showAnswer && answersIndex.includes(index);
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
            selectedChoicesIndex.includes(index) ? "font-bold" : ""
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
