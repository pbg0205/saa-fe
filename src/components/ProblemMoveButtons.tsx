"use client";

import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { getLocalizedText } from "@/utils/Localizations";
import { useLanguage } from "@/contexts/LanguageContext";

type ButtonProps = {
  problemNumber?: number | null;
};

const buttonBaseStyle = `
  flex items-center justify-center px-4 py-2 rounded-md
  transition-all duration-200 ease-in-out
  focus:outline-none focus:ring-2 focus:ring-offset-2
`;

export function ProblemPrevButton({ problemNumber }: ButtonProps) {
  const router = useRouter();
  const { language } = useLanguage();

  if (problemNumber == null) {
    return null;
  }

  const handleClick = () => {
    router.push(`/problems/${problemNumber}`);
  };

  return (
    <button
      className={`${buttonBaseStyle}
        bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500`}
      onClick={handleClick}
    >
      <FaChevronLeft className="mr-2" />
      {getLocalizedText("prevProblem", language)}
    </button>
  );
}

export function ProblemNextButton({ problemNumber }: ButtonProps) {
  const router = useRouter();
  const { language } = useLanguage();

  if (problemNumber == null) {
    return null;
  }

  const handleClick = () => {
    router.push(`/problems/${problemNumber}`);
  };

  return (
    <button
      className={`${buttonBaseStyle}
        bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500`}
      onClick={handleClick}
    >
      {getLocalizedText("nextProblem", language)}
      <FaChevronRight className="ml-2" />
    </button>
  );
}
