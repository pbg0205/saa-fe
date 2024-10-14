type LocalizationKey =
  | "showAnswer"
  | "checkAnswer"
  | "nextProblem"
  | "prevProblem"
  | "problemNumber"
  | "description"
  | "answer"
  | "correct"
  | "incorrect";

type LocalizationTexts = {
  [key in LocalizationKey]: {
    [lang: string]: string;
  };
};

const localizationTexts: LocalizationTexts = {
  showAnswer: {
    ko: "정답 확인",
    en: "Check Answer",
  },
  checkAnswer: {
    ko: "답 확인하기",
    en: "Check Your Answer",
  },
  nextProblem: {
    ko: "다음 문제",
    en: "Next",
  },
  prevProblem: {
    ko: "이전 문제",
    en: "Previous",
  },
  problemNumber: {
    ko: "문제 번호",
    en: "Question No",
  },
  description: {
    ko: "설명",
    en: "Description",
  },
  answer: {
    ko: "정답",
    en: "Answer",
  },
  correct: {
    ko: "정답입니다!",
    en: "Correct!",
  },
  incorrect: {
    ko: "정답이 아닙니다!",
    en: "Incorrect!",
  },
};

export function getLocalizedText(
  key: LocalizationKey,
  language: string
): string {
  if (localizationTexts[key] && localizationTexts[key][language]) {
    return localizationTexts[key][language];
  }

  // 요청된 언어가 없을 경우 영어를 기본값으로 사용
  return localizationTexts[key]["en"] || key;
}

export function getSupportedLanguages(): string[] {
  // 지원되는 모든 언어 코드를 반환
  return Object.keys(localizationTexts.showAnswer);
}
