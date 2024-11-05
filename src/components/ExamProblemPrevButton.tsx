import {getLocalizedText} from "@/utils/Localizations";
import { FaChevronLeft } from "react-icons/fa";

const buttonBaseStyle = `
  flex items-center justify-center px-4 py-2 rounded-md
  transition-all duration-200 ease-in-out
  focus:outline-none focus:ring-2 focus:ring-offset-2
`;

export default function ExamProblemNextButton({language}: string) {
  return (
    <button className={`${buttonBaseStyle} bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500`}>
      <FaChevronLeft className="mr-2" />
      {getLocalizedText("prevProblem", language)}
    </button>);
}
