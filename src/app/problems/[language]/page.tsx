import { getAllProblems, Problem } from "@/service/problems";
import Link from "next/link";

type ProblemListProps = {
  params: {
    language: string;
  };
};

export default async function ProblemListPage({ params }: ProblemListProps) {
  const language = params.language;
  const problems = await getAllProblems(language);
  return (
    <>
      <h1>문제 목록 페이지({language})</h1>
      {problems.map((problem: Problem) => (
        <div key={problem.testNumber}>
          <Link
            key={problem.testNumber}
            href={`/problems/${language}/${problem.testNumber}`}
          >
            Question. {problem.testNumber}
          </Link>
        </div>
      ))}
    </>
  );
}
