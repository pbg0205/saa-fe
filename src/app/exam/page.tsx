"use client";

import Timer from "@/components/Timer";
import ExamProblemPrevButton from "@/components/ExamProblemPrevButton";
import ExamProblemNextButton from "@/components/ExamProblemNextButton";
import { useEffect, useState } from "react";
import { Problem } from "@/service/problems";
import { ProblemContent } from "@/components/ProblemContent";

export default function ExamPage() {
  const [currentProblemIdx, setCurrentProblemIdx] = useState<number>(0);
  const [problemData, setProblemData] = useState<Problem>();
  const [randomProblems, setRandomProblems] = useState<Problem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeProblems = async () => {
      setIsLoading(true);
      try {
        const problems = await fetchRandomProblems();
        setRandomProblems(problems);
        setProblemData(problems[currentProblemIdx]);
      } catch (error) {
        console.error("random api call 예외 발생:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeProblems();
  }, []);

  useEffect(() => {
    setProblemData(randomProblems[currentProblemIdx]);
  }, [currentProblemIdx]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  console.log(randomProblems);
  console.log(problemData);

  const nextProblem = () => {
    console.log("다음 버튼 클릭: " + randomProblems[currentProblemIdx]);
    setCurrentProblemIdx((prevIdx) => {
      const newIdx = prevIdx + 1;
      setProblemData(randomProblems[newIdx]);
      return newIdx;
    });
  };

  const prevProblem = () => {
    console.log("이전 버튼 클릭: " + randomProblems[currentProblemIdx]);
    setCurrentProblemIdx(Math.max(currentProblemIdx - 1, 0));
    setProblemData(randomProblems[currentProblemIdx]);
  };

  const disablePrevButton = currentProblemIdx === 0;
  const disableNextButton = currentProblemIdx === randomProblems.length - 1;

  return (
    <>
      <section className="flex justify-between items-center p-4 w-full">
        <div className="flex-1">
          <Timer timeInSeconds={600}></Timer>
        </div>
        <div className="flex gap-4">
          <ExamProblemPrevButton
            language="ko"
            onPrevProblem={prevProblem}
            disablePrevButton={disablePrevButton}
          ></ExamProblemPrevButton>
          <ExamProblemNextButton
            language="ko"
            onNextProblem={nextProblem}
            disableNextButton={disableNextButton}
          ></ExamProblemNextButton>
        </div>
      </section>

      <h2 className="text-xl font-bold mb-2">{currentProblemIdx + 1}번 문제</h2>
      <ProblemContent
        testNumber={problemData.testNumber}
        testPassage={problemData.testPassage}
        language={"ko"}
      />
    </>
  );
}

async function fetchRandomProblems(): Promise<Problem[]> {
  try {
    const response = await fetch(`/api/exam/random`);
    const data = await response.json();

    if (!response.ok) {
      console.error("데이터 가져오기 오류", data.error);
      throw new Error(data.error);
    }

    return data;
  } catch (error) {
    console.error("데이터 가져오기 중 예외 발생:", error);
    throw error;
  }
}
