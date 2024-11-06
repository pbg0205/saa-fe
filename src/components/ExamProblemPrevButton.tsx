"use client";

import { getLocalizedText } from "@/utils/Localizations";
import { FaChevronLeft } from "react-icons/fa";

type ExamProblemPrevProps = {
  language: string;
  onPrevProblem: () => void;
  disablePrevButton: boolean;
};

const buttonBaseStyle = `
  flex items-center justify-center px-4 py-2 rounded-md
  transition-all duration-200 ease-in-out
  focus:outline-none focus:ring-2 focus:ring-offset-2
`;

export default function ExamProblemPrevButton({
  language,
  onPrevProblem: onProblemPrev,
  disablePrevButton: disablePrevButton,
}: ExamProblemPrevProps) {
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
