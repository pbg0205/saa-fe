"use client";

import Timer from "@/components/Timer";
import ExamProblemPrevButton from "@/components/ExamProblemPrevButton";
import ExamProblemNextButton from "@/components/ExamProblemNextButton";
import { useEffect, useState } from "react";
import { Problem } from "@/service/problems";
import { ChoiceList } from "@/components/ChoiceList";
import ExamSubmitButton from "@/components/ExamSubmitButton";
import ResultModal from "@/components/ResultModal";

export default function ExamPage() {
  const [currentProblemIdx, setCurrentProblemIdx] = useState<number>(0);
  const [problemData, setProblemData] = useState<Problem>();
  const [randomProblems, setRandomProblems] = useState<Problem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number[];
  }>({});
  const [showModal, setShowModal] = useState(false);
  const [score, setScore] = useState(0);

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
    console.log("selectedAnswers: ", selectedAnswers);
  }, [currentProblemIdx]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  console.log(randomProblems);
  console.log(problemData);

  const onClickNextProblem = () => {
    console.log("다음 버튼 클릭: " + randomProblems[currentProblemIdx]);
    setCurrentProblemIdx((prevIdx) => {
      const newIdx = prevIdx + 1;
      setProblemData(randomProblems[newIdx]);
      return newIdx;
    });
  };

  const onClickPrevProblem = () => {
    console.log("이전 버튼 클릭: " + randomProblems[currentProblemIdx]);
    setCurrentProblemIdx(Math.max(currentProblemIdx - 1, 0));
    setProblemData(randomProblems[currentProblemIdx]);
  };

  const disablePrevButton = currentProblemIdx === 0;
  const disableNextButton = currentProblemIdx === randomProblems.length - 1;

  const handleAnswerSelect = (
    problemIndex: number,
    selectedChoices: number[]
  ) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [problemIndex]: selectedChoices,
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    randomProblems.forEach((problem, index) => {
      const userAnswers = selectedAnswers[index] || [];
      const correctAnswers = problem.answer
        .trim()
        .split(", ")
        .map((ans) => ans.charCodeAt(0) - "A".charCodeAt(0));

      if (
        JSON.stringify(userAnswers.sort()) ===
        JSON.stringify(correctAnswers.sort())
      ) {
        totalScore += 1;
      }
    });
    setScore(totalScore);
  };

  const handleSubmit = () => {
    calculateScore();
    setShowModal(true);
  };

  return (
    <>
      <section className="flex justify-between items-center p-4 w-full">
        <div className="flex-1">
          <Timer timeInSeconds={600}></Timer>
        </div>
        <div className="flex gap-4">
          <ExamProblemPrevButton
            language="ko"
            onPrevProblem={onClickPrevProblem}
            disablePrevButton={disablePrevButton}
          ></ExamProblemPrevButton>
          <ExamProblemNextButton
            language="ko"
            onNextProblem={onClickNextProblem}
            disableNextButton={disableNextButton}
          ></ExamProblemNextButton>
        </div>
      </section>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-2">
          {currentProblemIdx + 1}번 문제
        </h2>
        <p className="mb-2">
          <strong>문제 {problemData?.testNumber}</strong>
        </p>
        <p className="mb-4">{problemData?.testPassage}</p>

        <ChoiceList
          choices={problemData?.choices || []}
          answersIndex={problemData?.correctAnswerIndices || []}
          showAnswer={false}
          onCheckAnswer={(isCorrect) => console.log("정답 체크:", isCorrect)}
          selectedChoicesIndex={selectedAnswers[currentProblemIdx] || []}
          onAnswerSelect={(choices) =>
            handleAnswerSelect(currentProblemIdx, choices)
          }
        />
        <div className="flex justify-end mt-4">
          <ExamSubmitButton onSubmit={handleSubmit} />
        </div>

        {showModal && (
          <ResultModal
            score={score}
            total={randomProblems.length}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
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
