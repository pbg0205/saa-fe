import { getLocalizedText } from "../utils/Localizations";

type AnswerButtonProps = {
  answer: string;
  language: string;
  onToggleAnswer: () => void;
};

export default function AnswerButton({
  language,
  onToggleAnswer,
}: AnswerButtonProps) {
  return (
    <button
      onClick={onToggleAnswer}
      className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      {getLocalizedText("showAnswer", language)}
    </button>
  );
}
