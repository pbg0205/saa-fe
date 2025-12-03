"use client";

import { getLocalizedText } from "@/utils/Localizations";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaChevronRight } from "react-icons/fa";

type ExamProblemNextProps = {
  onNextProblem: () => void;
  disableNextButton: boolean;
};

const buttonBaseStyle = `
  flex items-center justify-center px-4 py-2 rounded-md
  transition-all duration-200 ease-in-out
  focus:outline-none
`;

export default function ExamProblemNextButton({
  onNextProblem: onProblemNext,
  disableNextButton: disableNextButton,
}: ExamProblemNextProps) {
  const { language } = useLanguage();

  return (
    <button
      className={`${buttonBaseStyle} bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500`}
      onClick={onProblemNext}
      disabled={disableNextButton}
    >
      {getLocalizedText("nextProblem", language)}
      <FaChevronRight className="ml-2" />
    </button>
  );
}
