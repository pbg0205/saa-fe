import React from "react";

interface ExamSubmitButtonProps {
  onSubmit: () => void;
}

const ExamSubmitButton: React.FC<ExamSubmitButtonProps> = ({ onSubmit }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded"
      onClick={onSubmit}
    >
      제출하기
    </button>
  );
};

export default ExamSubmitButton;
