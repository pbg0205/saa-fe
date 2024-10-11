"use client";

import { useRouter } from "next/navigation";

export type ProblemMoveButtonProps = {
  href: string;
  name: string;
};

export default function ProblemMoveButton({
  href,
  name,
}: ProblemMoveButtonProps) {
  const router = useRouter();

  const moveProblem = () => {
    router.push(href); // 이동할 페이지 경로
  };

  return (
    <button onClick={moveProblem} className="bg-blue-500 text-white px-4 py-2">
      {name}
    </button>
  );
}
