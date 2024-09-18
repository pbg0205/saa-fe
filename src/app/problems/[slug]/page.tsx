import { getProblem } from "@/service/problems";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProblemDetailPage({ params }: Props) {
  const problem = await getProblem(parseInt(params.slug));
  return (
    <>
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
