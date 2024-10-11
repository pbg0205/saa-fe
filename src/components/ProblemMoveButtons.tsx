"use client";

import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type ButtonProps = {
  language: string;
  problemNumber?: number | null;
};

const buttonBaseStyle = `
  flex items-center justify-center px-4 py-2 rounded-md
  transition-all duration-200 ease-in-out
  focus:outline-none focus:ring-2 focus:ring-offset-2
`;

const prevButtonText = (language: string) => {
  switch (language.toLocaleLowerCase()) {
    case "ko":
      return "이전";
    case "en":
      return "Previous";
  }
};

const nextButtonText = (language: string) => {
  switch (language.toLocaleLowerCase()) {
    case "ko":
      return "다음";
    case "en":
      return "Next";
  }
};

export function ProblemPrevButton({ language, problemNumber }: ButtonProps) {
  const router = useRouter();
  if (problemNumber == null) {
    return null;
  }

  const handleClick = () => {
    router.push(`/problems/${language}/${problemNumber}`);
  };

  return (
    <button
      className={`${buttonBaseStyle}
        bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500`}
      onClick={handleClick}
    >
      <FaChevronLeft className="mr-2" />
      {prevButtonText(language)}
    </button>
  );
}

export function ProblemNextButton({ language, problemNumber }: ButtonProps) {
  const router = useRouter();
  if (problemNumber == null) {
    return null;
  }

  const handleClick = () => {
    router.push(`/problems/${language}/${problemNumber}`);
  };

  return (
    <button
      className={`${buttonBaseStyle}
        bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500`}
      onClick={handleClick}
    >
      {nextButtonText(language)}
      <FaChevronRight className="ml-2" />
    </button>
  );
}
