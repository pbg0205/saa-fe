import ProblemMoveButton from "@/components/ProblemMoveButton";
import { getProblemData } from "@/service/problems";
import Link from "next/link";

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
  const problemData = await getProblemData(parseInt(problemNumber), language);

  return (
    <>
      <h1>Question No.{problemData?.testNumber}</h1>
      <div>Description : {problemData?.testPassage}</div>
      <br />
      <ul>
        {problemData?.choices.map((value: string, index: number) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <section className="flex justify-between items-center p-4">
        <ProblemMoveButton
          href={`/problems/${language}/${problemData.prev?.testNumber}`}
          name="prev"
        />
        <ProblemMoveButton
          href={`/problems/${language}/${problemData.next?.testNumber}`}
          name="next"
        />
      </section>
    </>
  );
}
