import { getProblem } from "@/service/problems";

type ProblemDetailPageProps = {
  params: {
    language: string;
    problemNumber: string;
  };
};

export default async function ProblemDetailPage({
  params,
}: ProblemDetailPageProps) {
  const { language, problemNumber } = params;
  const problem = await getProblem(parseInt(problemNumber), language);
  return (
    <>
      <section></section>
      <h1>Question No.{problem?.testNumber}</h1>
      <div>Description : {problem?.testPassage}</div>
      <br />
      <ul>
        {problem?.choices.map((value: string, index: number) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  );
}
