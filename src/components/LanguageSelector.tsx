"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageSelector() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as "ko" | "en";
    setLanguage(newLang);
  };

  return (
    <select
      value={language}
      onChange={handleLanguageChange}
      className="px-3 py-1 text-xs md:text-sm font-bold text-gray-900 bg-white border-2 border-gray-300 rounded-lg hover:border-gray-400 focus:outline-none focus:border-gray-900 transition-colors cursor-pointer"
    >
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>
  );
}
