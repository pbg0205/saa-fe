"use client";

import Timer from "@/components/Timer";
import ExamProblemPrevButton from "@/components/ExamProblemPrevButton";
import ExamProblemNextButton from "@/components/ExamProblemNextButton";

export default function ExamPage() {
  return (
    <>
      <section className="flex justify-between items-center p-4 w-full">
        <div className="flex-1">
          <Timer timeInSeconds={600}></Timer>
        </div>
        <div className="flex gap-4">
          <ExamProblemPrevButton laguage="ko"></ExamProblemPrevButton>
          <ExamProblemNextButton laguage="ko"></ExamProblemNextButton>
        </div>
      </section>
    </>
  );
}
