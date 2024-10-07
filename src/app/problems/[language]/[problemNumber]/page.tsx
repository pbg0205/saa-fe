import {
  ProblemNextButton,
  ProblemPrevButton,
} from "@/components/ProblemMoveButtons";
import { getProblemData } from "@/service/problems";

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
        <div>
          <ProblemPrevButton
            language={language}
            problemNumber={problemData.prev?.testNumber}
          ></ProblemPrevButton>
        </div>
        <div>
          <ProblemNextButton
            language={language}
            problemNumber={problemData.next?.testNumber}
          ></ProblemNextButton>
        </div>
      </section>
    </>
  );
}
