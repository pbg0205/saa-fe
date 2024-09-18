import { getProblem } from "@/service/problems";

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProblemDetailPage({ params }: Props) {
  const product = await getProblem(parseInt(params.slug));
  return (
    <>
      <h1>Question No.{product?.testNumber}</h1>
      <div>Description : {product?.testPassage}</div>
      <br />
      <ul>
        {product?.choices.map((value: string, index: number) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  );
}
