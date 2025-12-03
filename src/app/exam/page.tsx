"use client";

import Timer from "@/components/Timer";
import ExamProblemPrevButton from "@/components/ExamProblemPrevButton";
import ExamProblemNextButton from "@/components/ExamProblemNextButton";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Problem } from "@/service/problems";
import { ChoiceList } from "@/components/ChoiceList";
import ExamSubmitButton from "@/components/ExamSubmitButton";
import ResultModal from "@/components/ResultModal";

export default function ExamPage() {
  const { language } = useLanguage();
  const [currentProblemIdx, setCurrentProblemIdx] = useState<number>(0);
  const [problemData, setProblemData] = useState<Problem>();
  const [randomProblems, setRandomProblems] = useState<Problem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: number[];
  }>({});
  const [correctAnswers, setCorrectAnswers] = useState<{
    [key: number]: number[];
  }>({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const initializeProblems = async () => {
      setIsLoading(true);
      try {
        const problems = await fetchRandomProblems(language);
        setRandomProblems(problems);
        setProblemData(problems[0]);

        const answers = getCorrectAnswers(problems);
        console.log("정답 설정:", answers);
        setCorrectAnswers(answers);
      } catch (error) {
        console.error("random api call 예외 발생:", error);
      } finally {
        setIsLoading(false);
      }
    };
    initializeProblems();
  }, [language]);

  useEffect(() => {
    if (randomProblems.length > 0) {
      setProblemData(randomProblems[currentProblemIdx]);
      console.log("change problem selectedAnswers: ", selectedAnswers);
    }
  }, [currentProblemIdx, randomProblems, selectedAnswers]);

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

  const handleSubmit = () => {
    setShowModal(true);
  };

  return (
    <>
      <section className="flex justify-between items-center p-4 w-full">
        <div className="flex-1">
          <Timer onTimeEnd={() => setShowModal(true)} />
        </div>
        <div className="flex gap-4">
          <ExamProblemPrevButton
            onPrevProblem={onClickPrevProblem}
            disablePrevButton={disablePrevButton}
          ></ExamProblemPrevButton>
          <ExamProblemNextButton
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
          answersIndex={
            problemData?.answer
              ? problemData.answer
                  .trim()
                  .split(", ")
                  .map((ans) => ans.charCodeAt(0) - "A".charCodeAt(0))
              : []
          }
          showAnswer={false}
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
            correctAnswers={correctAnswers}
            selectedAnswers={selectedAnswers}
          />
        )}
      </div>
    </>
  );
}

async function fetchRandomProblems(language: string): Promise<Problem[]> {
  try {
    const response = await fetch(`/api/exam/random?language=${language}`);
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

function getCorrectAnswers(problems: Problem[]): { [key: number]: number[] } {
  return problems.reduce((acc, problem, index) => {
    acc[index] = problem.answer
      .trim()
      .split(", ")
      .map((ans) => ans.charCodeAt(0) - "A".charCodeAt(0));
    return acc;
  }, {} as { [key: number]: number[] });
}
