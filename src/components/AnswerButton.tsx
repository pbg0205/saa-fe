import { useState } from "react";

type AnswerButtonProps = {
  answer: string;
  language: string;
};

export default function AnswerButton({ answer, language }: AnswerButtonProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const localizedText = (key: string) => {
    const texts: { [key: string]: { [lang: string]: string } } = {
      showAnswer: {
        ko: "정답 보기",
        en: "Show Answer",
      },
      answer: {
        ko: "정답",
        en: "Answer",
      },
    };

    return texts[key][language] || texts[key]["en"];
  };

  return (
    <>
      <button
        onClick={() => setShowAnswer(!showAnswer)}
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {localizedText("showAnswer")}
      </button>

      {showAnswer && (
        <div className="mt-4">
          <strong>{localizedText("answer")}:</strong> {answer}
        </div>
      )}
    </>
  );
}
