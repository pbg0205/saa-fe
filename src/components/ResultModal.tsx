"use client";

import { useRouter } from "next/navigation";

interface ResultModalProps {
  score: number;
  total: number;
  onClose: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({ score, total, onClose }) => {
  const router = useRouter();

  const handleGoToMain = () => {
    router.push("/"); // 메인 페이지 경로로 이동
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-2xl font-bold mb-4">시험 결과</h2>
        <p className="mb-4">
          당신의 점수는 <strong>{(score / total) * 100} </strong>점 입니다.
        </p>
        <div className="flex justify-end gap-2">
          <button
            onClick={handleGoToMain}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            메인 페이지로 이동
          </button>
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;
