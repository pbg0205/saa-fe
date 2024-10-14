import { useState } from "react";

type AnswerButtonProps = {
  answer: string;
  language: string;
  onToggleAnswer: () => void;
};

export default function AnswerButton({
  answer,
  language,
  onToggleAnswer,
}: AnswerButtonProps) {
  const localizedText = (key: string) => {
    const texts: { [key: string]: { [lang: string]: string } } = {
      showAnswer: {
        ko: "정답 확인",
        en: "Check Answer",
      },
    };

    return texts[key][language] || texts[key]["en"];
  };

  return (
    <button
      onClick={onToggleAnswer}
      className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {localizedText("showAnswer")}
    </button>
  );
}
