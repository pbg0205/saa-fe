import { getAllProblems, Problem } from "@/service/problems";

export default async function ProblemAnswerPage() {
  const language = "ko";
  const problems = await getAllProblems(language);
  return (
    <>
      <h1>문제 정답 페이지</h1>
      {problems.map((problem: Problem) => (
        <div key={problem.testNumber}>
          Question{problem.testNumber}. {problem.answer}
        </div>
      ))}
    </>
  );
}
