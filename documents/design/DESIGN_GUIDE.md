# Design Guide
# SAA 학습 플랫폼 디자인 가이드

## 1. 디자인 시스템 개요

### 1.1 디자인 철학
- **단순성**: 학습에 집중할 수 있는 깔끔한 인터페이스
- **일관성**: 모든 페이지에서 동일한 디자인 패턴 적용
- **접근성**: 누구나 쉽게 사용할 수 있는 직관적인 UI

### 1.2 기술 스택
- **스타일링 프레임워크**: Tailwind CSS
- **방법론**: 유틸리티 클래스 기반 스타일링
- **반응형**: Mobile-first 접근 방식

---

## 2. 색상 시스템

### 2.1 주요 색상 팔레트

#### 브랜드 색상
- **Primary**: 검은색 (`#000000`)
- **Background**: 흰색 (`#FFFFFF`)

#### 기능적 색상
```css
/* 정답 관련 */
--color-correct-primary: #3B82F6;    /* blue-500 */
--color-correct-border: #0EA5E9;     /* sky-500 */
--color-correct-success: #22C55E;    /* green-500 */

/* 오답 관련 */
--color-incorrect: #EF4444;          /* red-500 */

/* 중립 색상 */
--color-text-primary: #000000;       /* black */
--color-text-secondary: #6B7280;     /* gray-500 */
--color-border: #E5E7EB;             /* gray-200 */
```

### 2.2 색상 사용 가이드

#### 정답 표시
- **정답 확인 후 하이라이트**: `border-sky-500` (파란색 테두리)
- **정답입니다 텍스트**: `text-blue-500`
- **결과 모달 정답 표시**: `text-green-500` + ✅ 이모지

#### 오답 표시
- **정답이 아닙니다 텍스트**: `text-red-500`
- **결과 모달 오답 표시**: `text-red-500` + ❌ 이모지

#### 인터랙션 색상
- **선택된 항목**: `font-bold` (색상 변경 없이 굵기로 구분)
- **버튼 배경**: `bg-green-500` (제출 버튼)

---

## 3. 타이포그래피

### 3.1 폰트 체계
- **기본 폰트**: 시스템 폰트 스택 (Tailwind 기본값)
- **폰트 렌더링**: 최적화된 안티앨리어싱

### 3.2 텍스트 크기

```css
/* 제목 */
--text-3xl: 1.875rem;  /* 30px - 메인 헤더 */
--text-2xl: 1.5rem;    /* 24px - 페이지 제목 */
--text-xl: 1.25rem;    /* 20px - 섹션 제목 */

/* 본문 */
--text-lg: 1.125rem;   /* 18px - 설명 텍스트 */
--text-base: 1rem;     /* 16px - 기본 텍스트 */

/* 특수 */
--text-4xl: 2.25rem;   /* 36px - 타이머 */
```

### 3.3 텍스트 스타일 적용

#### Header
- 로고: `text-3xl font-bold`
- 네비게이션 링크: `text-base`

#### 문제 페이지
- 문제 번호: `text-xl font-bold`
- 문제 지문: `text-base`
- 선택지: `text-base` (선택 시 `font-bold`)

#### 타이머
- 시간 표시: `text-4xl`

---

## 4. 레이아웃

### 4.1 간격(Spacing) 시스템

```css
/* Padding */
--spacing-2: 0.5rem;   /* 8px */
--spacing-4: 1rem;     /* 16px */
--spacing-6: 1.5rem;   /* 24px */

/* Margin */
--spacing-mb-2: 0.5rem;  /* 8px - 작은 요소 간격 */
--spacing-mb-4: 1rem;    /* 16px - 중간 요소 간격 */
--spacing-mb-6: 1.5rem;  /* 24px - 큰 요소 간격 */
```

### 4.2 컨테이너

#### Header
```css
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;  /* p-4 */
}
```

#### 문제 네비게이션 섹션
```css
.problem-navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
}
```

### 4.3 그리드 시스템
- **네비게이션 버튼**: `flex gap-4`
- **선택지 리스트**: 수직 스택 (`mb-2` 간격)

---

## 5. 컴포넌트 스타일

### 5.1 버튼

#### 기본 버튼
```css
.button {
  background-color: #22C55E;  /* bg-green-500 */
  color: white;
  padding: 0.5rem 1rem;       /* px-4 py-2 */
  border-radius: 0.25rem;     /* rounded */
}
```

#### 비활성화 버튼
```css
.button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
```

#### 버튼 타입별 스타일
- **이전/다음 버튼**: 기본 스타일
- **제출 버튼**: `bg-green-500 text-white px-4 py-2 rounded`
- **메인 페이지 이동**: `bg-green-500 text-white px-4 py-2 rounded`

### 5.2 선택지 리스트

#### 기본 상태
```css
.choice-item {
  margin-bottom: 0.5rem;  /* mb-2 */
  cursor: pointer;
}
```

#### 선택된 상태
```css
.choice-item.selected {
  font-weight: bold;
}
```

#### 정답 표시 상태
```css
.choice-item.answer {
  border: 2px solid #0EA5E9;  /* border-2 border-sky-500 */
}
```

### 5.3 타이머

```css
.timer {
  background-color: white;
  border: 2px solid black;     /* border-black border-2 */
  color: black;
  border-radius: 0.25rem;      /* rounded */
  width: 10rem;                /* w-40 */
  height: 7.5rem;              /* h-30 */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.25rem;          /* text-4xl */
}
```

### 5.4 모달

#### 결과 모달
```css
.modal-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);  /* bg-black bg-opacity-50 */
}

.modal-content {
  background-color: white;
  padding: 1.5rem;                        /* p-6 */
  border-radius: 0.5rem;                  /* rounded */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);  /* shadow-lg */
  max-width: 42rem;                       /* max-w-2xl */
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
}
```

---

## 6. 인터랙티브 요소

### 6.1 Hover 효과

#### 링크
```css
.link:hover {
  text-decoration: underline;
}
```

#### 버튼
```css
.button:hover {
  opacity: 0.9;
}
```

#### 선택지
```css
.choice-item:hover {
  opacity: 0.8;
}
```

### 6.2 Focus 상태
```css
.interactive-element:focus {
  outline: 2px solid #3B82F6;
  outline-offset: 2px;
}
```

### 6.3 Active 상태
```css
.button:active {
  transform: scale(0.98);
}
```

---

## 7. 반응형 디자인

### 7.1 브레이크포인트
```css
/* Tailwind 기본 브레이크포인트 */
--screen-sm: 640px;   /* 모바일 */
--screen-md: 768px;   /* 태블릿 */
--screen-lg: 1024px;  /* 데스크톱 */
--screen-xl: 1280px;  /* 대형 데스크톱 */
```

### 7.2 모바일 우선 설계
- 기본 스타일: 모바일 최적화
- 태블릿/데스크톱: 추가 스타일 적용

### 7.3 반응형 컴포넌트

#### Header 네비게이션
- 모바일: 간격 `gap-2`
- 데스크톱: 간격 `gap-4`

#### 모달
- 모바일: 전체 너비 (`w-full`)
- 데스크톱: 최대 너비 제한 (`max-w-2xl`)

---

## 8. 아이콘 및 이미지

### 8.1 아이콘 시스템
- **라이브러리**: React Icons (react-icons)
- **사용 예시**: 체크마크, 엑스 마크

### 8.2 아이콘 사용
- **정답 표시**: ✅ 이모지
- **오답 표시**: ❌ 이모지

---

## 9. 애니메이션

### 9.1 현재 애니메이션
- 현재 별도의 애니메이션 없음
- 기본 CSS transition 활용

### 9.2 향후 고려사항
- 페이지 전환 애니메이션
- 모달 fade-in/out
- 버튼 클릭 피드백
- 정답/오답 표시 애니메이션

---

## 10. 접근성(Accessibility)

### 10.1 색상 대비
- 텍스트와 배경: 최소 4.5:1 대비율
- 정답/오답: 색상 외에 아이콘 병행 사용

### 10.2 포커스 관리
- 키보드 네비게이션 지원
- 명확한 포커스 표시

### 10.3 시맨틱 HTML
- 적절한 HTML 태그 사용
- `<header>`, `<nav>`, `<section>` 활용

---

## 11. 다크 모드 (향후 계획)

### 11.1 다크 모드 색상 팔레트 (계획)
```css
/* 다크 모드 색상 - 미구현 */
--dark-bg-primary: #1F2937;      /* gray-800 */
--dark-bg-secondary: #111827;     /* gray-900 */
--dark-text-primary: #F9FAFB;     /* gray-50 */
--dark-text-secondary: #D1D5DB;   /* gray-300 */
```

### 11.2 다크 모드 전환
- 시스템 설정 감지
- 수동 토글 버튼
- 사용자 선택 저장 (localStorage)

---

## 12. 디자인 토큰 (향후)

### 12.1 CSS 변수로 관리
```css
:root {
  /* Spacing */
  --space-unit: 0.25rem;
  --space-xs: calc(var(--space-unit) * 2);   /* 8px */
  --space-sm: calc(var(--space-unit) * 4);   /* 16px */
  --space-md: calc(var(--space-unit) * 6);   /* 24px */
  --space-lg: calc(var(--space-unit) * 8);   /* 32px */

  /* Border Radius */
  --radius-sm: 0.25rem;  /* 4px */
  --radius-md: 0.5rem;   /* 8px */
  --radius-lg: 1rem;     /* 16px */

  /* Shadow */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

---

## 13. 컴포넌트별 스타일 가이드

### 13.1 Header 컴포넌트
- **배경**: 투명 또는 흰색
- **로고**: `text-3xl font-bold`, 검은색
- **네비게이션**: `flex gap-4`, 기본 텍스트 크기
- **패딩**: `p-4`

### 13.2 ChoiceList 컴포넌트
- **리스트**: `mb-6` (전체 여백)
- **항목**: `mb-2` (항목 간 간격)
- **선택 표시**: `font-bold`
- **정답 표시**: `border-2 border-sky-500`
- **커서**: `cursor-pointer`

### 13.3 Timer 컴포넌트
- **크기**: `w-40` (160px)
- **배경**: 흰색
- **테두리**: `border-2 border-black`
- **텍스트**: `text-4xl`, 검은색
- **정렬**: flex center

### 13.4 ResultModal 컴포넌트
- **오버레이**: 반투명 검은색 배경
- **콘텐츠**: 흰색 배경, 그림자
- **최대 너비**: `max-w-2xl`
- **최대 높이**: `max-h-[80vh]`
- **스크롤**: `overflow-y-auto`
- **제목**: `text-2xl font-bold`
- **점수**: `font-bold`
- **정답**: `text-green-500`
- **오답**: `text-red-500`

### 13.5 Button 컴포넌트
- **제출 버튼**: `bg-green-500 text-white px-4 py-2 rounded`
- **이전/다음**: 기본 스타일
- **비활성화**: `opacity-50 cursor-not-allowed`

---

## 14. 스타일 관리 모범 사례

### 14.1 Tailwind 사용 원칙
1. 유틸리티 클래스 우선 사용
2. 반복되는 패턴은 컴포넌트화
3. 커스텀 CSS는 최소화
4. 일관된 간격 시스템 사용

### 14.2 파일 구조
```
src/
  app/
    globals.css        # 전역 스타일
  components/
    *.tsx              # 컴포넌트별 인라인 스타일
```

### 14.3 네이밍 컨벤션
- Tailwind 클래스 사용 시: 공식 클래스명 사용
- 커스텀 클래스: BEM 또는 camelCase

---

## 15. 참고 자료

### 15.1 Tailwind CSS
- 공식 문서: https://tailwindcss.com/docs
- 색상 팔레트: https://tailwindcss.com/docs/customizing-colors

### 15.2 디자인 시스템 예시
- Material Design
- Ant Design
- Chakra UI

### 15.3 접근성 가이드라인
- WCAG 2.1 AA 준수 목표
- WAI-ARIA 패턴 참고
