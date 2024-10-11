type ProblemContentProps = {
  testNumber: number;
  testPassage: string;
  localizedText: (key: string) => string;
};

export function ProblemContent({
  testNumber,
  testPassage,
  localizedText,
}: ProblemContentProps) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold mb-2">
        {localizedText("problemNumber")}: {testNumber}
      </h1>
      <p className="text-m">
        {localizedText("description")}: {testPassage}
      </p>
    </div>
  );
}
