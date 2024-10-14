import { useState } from "react";

type ChoiceListProps = {
  choices: string[];
  correctAnswerIndices: number[] | undefined;
  showAnswer: boolean;
};

export function ChoiceList({
  choices,
  correctAnswerIndices = [],
  showAnswer,
}: ChoiceListProps) {
  const [selectedChoices, setSelectedChoices] = useState<number[]>([]);

  const toggleChoice = (index: number) => {
    setSelectedChoices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const isCorrect = (index: number) => {
    return showAnswer && correctAnswerIndices.includes(index);
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
