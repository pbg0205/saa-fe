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
  const [correctAnswerIndices, setCorrectAnswerIndices] = useState<number[]>(
    []
  );

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
    if (problemData && problemData.answer) {
      const indices = problemData.answer
        .trim()
        .split(" ")
        .map((ans) => {
          const index = "ABCDEF".indexOf(ans);
          return index !== -1 ? index : -1;
        })
        .filter((index) => index !== -1);
      setCorrectAnswerIndices(indices);
    }
  }, [problemData]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (!problemData) {
    return <div>문제를 찾을 수 없습니다</div>;
  }

  const { testNumber, testPassage, choices, prev, next, answer } = problemData;

  const localizedText = (key: string) => {
    const texts: { [key: string]: { [lang: string]: string } } = {
      problemNumber: {
        ko: "문제 번호",
        en: "Question No",
      },
      description: {
        ko: "설명",
        en: "Description",
      },
      showAnswer: {
        ko: "정답 보기",
        en: "Show Answer",
      },
      answer: {
        ko: "정답",
        en: "Answer",
      },
    };

    return texts[key][language] || texts[key]["en"];
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
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
        localizedText={localizedText}
      />

      <ChoiceList
        choices={choices}
        correctAnswerIndices={correctAnswerIndices}
        showAnswer={showAnswer}
      />

      <AnswerButton
        answer={answer}
        language={language}
        onToggleAnswer={toggleAnswer}
      />
    </>
  );
}
