"use client";

import AnswerButton from "@/components/AnswerButton";
import { ChoiceList } from "@/components/ChoiceList";
import { ProblemContent } from "@/components/ProblemContent";
import { answerIndices } from "@/service/answer";
import { getLocalizedText } from "@/utils/Localizations";
import { useState, useEffect, useCallback } from "react";
import { RandomProblemNextButton } from "../../../../components/RandomProblemNextButton";
export type RandomProblem = {
  testNumber: number;
  testPassage: string;
  choices: string[];
  answer: string;
};

export default function ProblemDetailPage() {
  const language = "ko";

  const [randomProblem, setRandomProblem] = useState<RandomProblem | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);
  const [correctAnswerIndices, setCorrectAnswerIndices] = useState<number[]>(
    []
  );
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const fetchProblemData = useCallback(async () => {
    setIsLoading(true);
    const problemSize = 780;
    const randomNumber = Math.floor(Math.random() * problemSize);

    try {
      const response = await fetch(`/api/problems/${language}/${randomNumber}`);
      const data = await response.json();

      if (response.ok) {
        setRandomProblem(data);
        setShowAnswer(false);
        setIsCorrect(false);
      } else {
        console.error("데이터 가져오기 오류:", data.error);
      }
    } catch (error) {
      console.error("데이터 가져오기 중 예외 발생:", error);
    } finally {
      setIsLoading(false);
    }
  }, [language]);

  useEffect(() => {
    fetchProblemData();
  }, [fetchProblemData]);

  useEffect(() => {
    if (randomProblem === null || randomProblem.answer === null) {
      return;
    }

    setCorrectAnswerIndices(answerIndices(randomProblem.answer));
  }, [randomProblem]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (!randomProblem) {
    return <div>문제를 찾을 수 없습니다</div>;
  }

  const { testNumber, testPassage, choices, answer } = randomProblem;
  const handleCheckAnswer = (correct: boolean): void => {
    setIsCorrect(correct);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleNextRandomProblem = () => {
    fetchProblemData();
  };

  return (
    <>
      <section className="flex justify-between items-center p-4 w-full">
        <div className="flex-1 flex justify-end">
          <RandomProblemNextButton
            onNextRandomProblem={handleNextRandomProblem}
            language={language}
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
        answersIndex={correctAnswerIndices}
        showAnswer={showAnswer}
        onAnswerSelect={() => {}}
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
            isCorrect ? "text-blue-500" : "text-red-500"
          }`}
        >
          {isCorrect
            ? getLocalizedText("correct", language)
            : getLocalizedText("incorrect", language)}
        </p>
      )}
    </>
  );
}
