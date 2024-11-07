"use client";

import { useState, useEffect } from "react";
import {
  ProblemNextButton,
  ProblemPrevButton,
} from "@/components/ProblemMoveButtons";
import AnswerButton from "@/components/AnswerButton";
import { ProblemContent } from "@/components/ProblemContent";
import { ChoiceList } from "@/components/ChoiceList";
import { ProblemData } from "@/service/problems";
import { getLocalizedText } from "@/utils/Localizations";
import { answerIndices } from "@/service/answer";

type ProblemDetailPageProps = {
  params: {
    language: string;
    problemNumber: string;
  };
};

export default function ProblemDetailPage({ params }: ProblemDetailPageProps) {
  const { language, problemNumber } = params;
  const [problemData, setProblemData] = useState<ProblemData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answersIndex, setCorrectAnswerIndices] = useState<number[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [choicesIndex, setSelectedChoicesIndex] = useState<number[]>([]);

  useEffect(() => {
    const fetchProblemData = async () => {
      try {
        const response = await fetch(
          `/api/problems/${language}/${problemNumber}`
        );
        const data = await response.json();

        if (response.ok) {
          setProblemData(data);
        } else {
          console.error("데이터 가져오기 오류:", data.error);
        }
      } catch (error) {
        console.error("데이터 가져오기 중 예외 발생:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProblemData();
  }, [language, problemNumber]);

  useEffect(() => {
    if (problemData === null || problemData.answer === null) {
      return;
    }

    setCorrectAnswerIndices(answerIndices(problemData.answer));
  }, [problemData]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (!problemData) {
    return <div>문제를 찾을 수 없습니다</div>;
  }

  const { testNumber, testPassage, choices, prev, next, answer } = problemData;

  const handleCheckAnswer = (correct: boolean): void => {
    setIsCorrect(correct);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleAnswerSelect = (choicesIndex: number[]) => {
    setSelectedChoicesIndex(choicesIndex);
  };

  return (
    <>
      <section className="flex justify-between items-center p-4 w-full">
        <div className="flex-1">
          <ProblemPrevButton
            language={language}
            problemNumber={prev?.testNumber}
          />
        </div>
        <div className="flex-1 flex justify-end">
          <ProblemNextButton
            language={language}
            problemNumber={next?.testNumber}
          />
        </div>
      </section>

      <ProblemContent
        testNumber={testNumber}
        testPassage={testPassage}
        language={language}
      />

      <ChoiceList
        choices={choices}
        answersIndex={answersIndex}
        showAnswer={showAnswer}
        onAnswerSelect={handleAnswerSelect}
        selectedChoicesIndex={choicesIndex}
        onCheckAnswer={handleCheckAnswer}
      />

      <AnswerButton
        answer={answer}
        language={language}
        onToggleAnswer={toggleAnswer}
      />

      {showAnswer && (
        <p
          className={`mt-4 font-bold ${
            selectedChoiceCorrect(choicesIndex, answersIndex)
              ? "text-blue-500"
              : "text-red-500"
          }`}
        >
          {selectedChoiceCorrect(choicesIndex, answersIndex)
            ? getLocalizedText("correct", language)
            : getLocalizedText("incorrect", language)}
        </p>
      )}
    </>
  );
}

const selectedChoiceCorrect = (
  selectedChoiceIndex: number[],
  correctAnswerIndex: number[]
) => {
  if (selectedChoiceIndex.length !== correctAnswerIndex.length) {
    return false;
  }

  for (let i = 0; i < selectedChoiceIndex.length; i++) {
    if (selectedChoiceIndex[i] !== correctAnswerIndex[i]) return false;
  }

  return true;
};
