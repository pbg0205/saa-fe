import { getProblems, Problem } from "@/service/problems";
import Link from "next/link";

export default async function ProblemListPage() {
  const problems = await getProblems();
  return (
    <>
      <h1>문제 목록 페이지</h1>
      {problems.map((problem: Problem) => (
        <div key={problem.testNumber}>
          <Link
            key={problem.testNumber}
            href={`/problems/${problem.testNumber}`}
          >
            Question. {problem.testNumber}
          </Link>
        </div>
      ))}
    </>
  );
}
