"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface ResultModalProps {
  correctAnswers: { [key: number]: number[] };
  selectedAnswers: { [key: number]: number[] };
}

const ResultModal: React.FC<ResultModalProps> = ({
  correctAnswers,
  selectedAnswers,
}) => {
  //router
  const router = useRouter();
  const handleGoToMain = () => {
    router.push("/"); // 메인 페이지 경로로 이동
  };

  //useState
  const [score, setScore] = useState(0);
  const total = Object.keys(correctAnswers).length;

  //useEffect
  useEffect(() => {
    setScore(countCorrectAnswers(correctAnswers, selectedAnswers));
    console.log("correctAnswers: ", correctAnswers);
    console.log("selectedAnswers: ", selectedAnswers);
  }, [correctAnswers, selectedAnswers]);

  // 숫자를 알파벳으로 변환하는 헬퍼 함수 추가
  const numberToAlphabet = (num: number): string => {
    return String.fromCharCode(65 + num); // 65는 'A'의 ASCII 코드
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">시험 결과</h2>
        <p className="mb-4">
          당신의 점수는 <strong>{(score / total) * 100}</strong>점 입니다.
        </p>

        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">문항별 결과</h3>
          {Object.keys(correctAnswers).map((keyStr) => {
            const questionNum = Number(keyStr);
            const correct = correctAnswers[questionNum];
            const selected = selectedAnswers[questionNum] || [];
            const isCorrect = checkAnswerCorrect(correct, selected);

            return (
              <div key={questionNum} className="border-b py-2">
                <div className="flex items-center gap-2">
                  <span className="font-bold">문제 {questionNum + 1}</span>
                  {isCorrect ? (
                    <span className="text-green-500">✅ 정답</span>
                  ) : (
                    <span className="text-red-500">❌ 오답</span>
                  )}
                </div>
                <div className="ml-4">
                  <p>
                    정답:{" "}
                    {correct.map((num) => numberToAlphabet(num)).join(", ")}
                  </p>
                  <p>
                    선택한 답:{" "}
                    {selected.length
                      ? selected.map((num) => numberToAlphabet(num)).join(", ")
                      : "미선택"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={handleGoToMain}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            메인 페이지로 이동
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;

const countCorrectAnswers = (
  correctAnswers: { [key: number]: number[] },
  selectedAnswers: { [key: number]: number[] }
) => {
  let correctCount = 0;

  Object.keys(correctAnswers).forEach((keyStr) => {
    const key = Number(keyStr);

    // selectedAnswers에 해당 키가 없는 경우 처리
    if (!selectedAnswers[key] || !Array.isArray(selectedAnswers[key])) {
      return;
    }

    // 배열 길이가 다르면 틀린 답
    if (correctAnswers[key].length !== selectedAnswers[key].length) {
      return;
    }

    // 정렬 후 배열 비교
    const sortedCorrect = [...correctAnswers[key]].sort((a, b) => a - b);
    const sortedSelected = [...selectedAnswers[key]].sort((a, b) => a - b);

    const isCorrect = sortedCorrect.every(
      (value, index) => value === sortedSelected[index]
    );

    if (isCorrect) {
      correctCount += 1;
    }
  });

  return correctCount;
};

const checkAnswerCorrect = (correct: number[], selected: number[]): boolean => {
  if (!selected || correct.length !== selected.length) return false;

  const sortedCorrect = [...correct].sort((a, b) => a - b);
  const sortedSelected = [...selected].sort((a, b) => a - b);

  return sortedCorrect.every((value, index) => value === sortedSelected[index]);
};
