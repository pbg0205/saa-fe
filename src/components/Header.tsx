"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSelector from "@/components/LanguageSelector";
import "../app/globals.css";

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (pathname === path) return true;

    // /problems의 경우 하위 경로도 active로 처리
    if (path === "/problems" && pathname?.startsWith("/problems")) return true;

    return false;
  };

  return (
    <header className="sticky top-0 z-[100] flex justify-between items-center min-h-[60px] h-[60px] px-4 bg-white border-b border-gray-200 shadow-sm md:px-8">
      <h1 className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors md:text-3xl">
        <Link href="/">SAA</Link>
      </h1>
      <nav className="flex gap-3 items-center md:gap-6">
        <Link
          href="/problems"
          className={`font-bold text-xs md:text-base whitespace-nowrap transition-colors pb-0.5 ${
            isActive("/problems") ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          problems
        </Link>
        <Link
          href="/problems/answers"
          className={`font-bold text-xs md:text-base whitespace-nowrap transition-colors pb-0.5 ${
            isActive("/problems/answers") ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          answers
        </Link>
        <Link
          href="/problems/random-number"
          className={`font-bold text-xs md:text-base whitespace-nowrap transition-colors pb-0.5 ${
            isActive("/problems/random-number") ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          random
        </Link>
        <Link
          href="/exam"
          className={`font-bold text-xs md:text-base whitespace-nowrap transition-colors pb-0.5 ${
            isActive("/exam") ? "text-gray-900 border-b-2 border-gray-900" : "text-gray-500 hover:text-gray-900"
          }`}
        >
          exam
        </Link>
        <LanguageSelector />
      </nav>
    </header>
  );
}
