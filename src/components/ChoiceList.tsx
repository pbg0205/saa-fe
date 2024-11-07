import { useState } from "react";

type ChoiceListProps = {
  choices: string[];
  answersIndex: number[];
  showAnswer: boolean;
  selectedChoicesIndex?: number[];
  onAnswerSelect: (choices: number[]) => void;
};

export function ChoiceList({
  choices,
  selectedChoicesIndex = [],
  answersIndex = [],
  showAnswer,
  onAnswerSelect,
}: ChoiceListProps) {
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
