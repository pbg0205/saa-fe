import { getLocalizedText } from "@/utils/Localizations";

type ProblemContentProps = {
  testNumber: number;
  testPassage: string;
  language: string;
};

export function ProblemContent({
  testNumber,
  testPassage,
  language,
}: ProblemContentProps) {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-2">
        {getLocalizedText("problemNumber", language)} {testNumber}
      </h2>
      <p className="mb-2">
        <strong>{getLocalizedText("description", language)}:</strong>
      </p>
      <p>{testPassage}</p>
    </div>
  );
}
