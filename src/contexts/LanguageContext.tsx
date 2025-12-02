"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "ko" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const LANGUAGE_STORAGE_KEY = "user_language_preference";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ko");
  const [isClient, setIsClient] = useState(false);

  // 클라이언트 사이드에서만 실행 (SSR 대응)
  useEffect(() => {
    setIsClient(true);

    // localStorage에서 언어 설정 불러오기
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) as Language;
    if (savedLanguage && (savedLanguage === "ko" || savedLanguage === "en")) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // 언어 변경 시 localStorage에 저장
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (isClient) {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    }
  };

  // 다른 탭에서 언어 변경 감지 (다중 탭 동기화)
  useEffect(() => {
    if (!isClient) return;

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === LANGUAGE_STORAGE_KEY && e.newValue) {
        const newLang = e.newValue as Language;
        if (newLang === "ko" || newLang === "en") {
          setLanguageState(newLang);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [isClient]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}