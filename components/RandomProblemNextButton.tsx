"use client";

import { getLocalizedText } from "@/utils/Localizations";
import { FaChevronRight } from "react-icons/fa";

const buttonBaseStyle = `
  flex items-center justify-center px-4 py-2 rounded-md
  transition-all duration-200 ease-in-out
  focus:outline-none focus:ring-2 focus:ring-offset-2
`;

export function RandomProblemNextButton({
  onNextRandomProblem: onNextRandomProblem,
  language,
}: {
  onNextRandomProblem: () => void;
  language: string;
}) {
  return (
    <button
      className={`${buttonBaseStyle}
  bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500`}
      onClick={onNextRandomProblem}
    >
      {getLocalizedText("nextRandomProblem", language)}
      <FaChevronRight className="ml-2" />
    </button>
  );
}
