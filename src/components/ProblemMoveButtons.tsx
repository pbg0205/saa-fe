import ProblemMoveButton from "./ProblemMoveButton";
type ButtonProps = {
  language: string;
  problemNumber?: number | null;
};

export function ProblemPrevButton({ language, problemNumber }: ButtonProps) {
  if (problemNumber == null) {
    return null;
  }

  return (
    <ProblemMoveButton
      href={`/problems/${language}/${problemNumber}`}
      name="prev"
    />
  );
}

export function ProblemNextButton({ language, problemNumber }: ButtonProps) {
  if (problemNumber == null) {
    return null;
  }

  return (
    <ProblemMoveButton
      href={`/problems/${language}/${problemNumber}`}
      name="next"
    />
  );
}
