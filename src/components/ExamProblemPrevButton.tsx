"use client";

import { getLocalizedText } from "@/utils/Localizations";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaChevronLeft } from "react-icons/fa";

type ExamProblemPrevProps = {
  onPrevProblem: () => void;
  disablePrevButton: boolean;
};

const buttonBaseStyle = `
  flex items-center justify-center px-4 py-2 rounded-md
  transition-all duration-200 ease-in-out
  focus:outline-none
`;

export default function ExamProblemPrevButton({
  onPrevProblem: onProblemPrev,
  disablePrevButton: disablePrevButton,
}: ExamProblemPrevProps) {
  const { language } = useLanguage();

  return (
    <button
      className={`${buttonBaseStyle} bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500`}
      onClick={onProblemPrev}
      disabled={disablePrevButton}
    >
      <FaChevronLeft className="mr-2" />
      {getLocalizedText("prevProblem", language)}
    </button>
  );
}
