"use client";

import AnswerButton from "@/components/AnswerButton";
import { ChoiceList } from "@/components/ChoiceList";
import { ProblemContent } from "@/components/ProblemContent";
import { answerIndices } from "@/service/answer";
import { getLocalizedText } from "@/utils/Localizations";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState, useEffect, useCallback } from "react";
import { RandomProblemNextButton } from "../../../../components/RandomProblemNextButton";
export type RandomProblem = {
  testNumber: number;
  testPassage: string;
  choices: string[];
  answer: string;
};

export default function ProblemDetailPage() {
  const { language } = useLanguage();

  const [randomProblem, setRandomProblem] = useState<RandomProblem | null>(
    null
  );
  const [answersIndex, setAnswersIndex] = useState<number[]>([]);
  const [choicesIndex, setSelectedChoicesIndex] = useState<number[]>([]);

  const [isLoading, setIsLoading] = useState(true);
  const [showAnswer, setShowAnswer] = useState(false);

  const fetchProblemData = useCallback(async () => {
    setIsLoading(true);
    const problemSize = 780;
    const randomNumber = Math.floor(Math.random() * problemSize);

    try {
      const response = await fetch(`/api/problems/${randomNumber}?language=${language}`);
      const data = await response.json();

      if (response.ok) {
        setRandomProblem(data);
        setShowAnswer(false);
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

    setAnswersIndex(answerIndices(randomProblem.answer));
    setSelectedChoicesIndex([]);
  }, [randomProblem]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (!randomProblem) {
    return <div>문제를 찾을 수 없습니다</div>;
  }

  const { testNumber, testPassage, choices, answer } = randomProblem;

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleNextRandomProblem = () => {
    fetchProblemData();
  };

  const handleAnswerSelect = (choicesIndex: number[]) => {
    setSelectedChoicesIndex(choicesIndex);
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
        selectedChoicesIndex={choicesIndex}
        answersIndex={answersIndex}
        showAnswer={showAnswer}
        onAnswerSelect={handleAnswerSelect}
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
