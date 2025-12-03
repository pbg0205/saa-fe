"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Problem } from "@/service/problems";
import Link from "next/link";

export default function ProblemListPage() {
  const { language } = useLanguage();
  const [problems, setProblems] = useState<Problem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await fetch(`/api/problems?language=${language}`);
        const data = await response.json();
        if (response.ok) {
          setProblems(data);
        }
      } catch (error) {
        console.error("문제 목록 가져오기 오류:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProblems();
  }, [language]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <h1>문제 목록 페이지({language})</h1>
      {problems.map((problem: Problem) => (
        <div key={problem.testNumber}>
          <Link
            key={problem.testNumber}
            href={`/problems/${problem.testNumber}`}
          >
            Question. {problem.testNumber}
          </Link>
        </div>
      ))}
    </>
  );
}