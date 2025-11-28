# Inflearn 디자인 시스템 분석

인프런(Inflearn) 웹사이트의 디자인 시스템을 분석한 문서입니다. 이 디자인 시스템은 **Mantine UI 프레임워크**를 기반으로 하고 있습니다.

---

## 1. 컬러 시스템 (Color Palette)

### Primary Colors (주요 색상)
```css
--primary-green: #00C471;        /* 메인 브랜드 컬러 */
--primary-green-dark: #00A760;   /* 호버 상태 */
--primary-green-light: #E5F9F1;  /* 배경용 연한 그린 */
```

### Gray Scale (회색 계열)
```css
--gray-50: #F8F9FA;   /* 배경 */
--gray-100: #f1f3f5;  /* 밝은 배경 */
--gray-200: #dee2e6;  /* 보더 */
--gray-300: #adb5bd;  /* 비활성 텍스트 */
--gray-400: #868e96;  /* 서브 텍스트 */
--gray-500: #495057;  /* 일반 텍스트 */
--gray-900: #212529;  /* 진한 텍스트 */
```

### Semantic Colors (의미 색상)
```css
--color-alert: #fa5252;   /* 경고, 뱃지 */
--color-white: #fff;      /* 배경 */
--color-black: #000;      /* 기본 텍스트 */
```

### Mantine 커스텀 변수
```css
--mantine-color-infgreen-6: #00C471;
```

---

## 2. 타이포그래피 (Typography)

### Font Family (폰트 패밀리)
```css
font-family: "Pretendard", -apple-system, BlinkMacSystemFont, system-ui, Roboto,
             "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
             "Noto Sans KR", "Malgun Gothic", sans-serif;
```

### Font Sizes (폰트 크기)
```css
--font-size-h1: 2.125rem;    /* 34px */
--font-size-h2: 1.625rem;    /* 26px */
--font-size-h3: 1.375rem;    /* 22px */
--font-size-h4: 1.125rem;    /* 18px */
--font-size-base: 1rem;      /* 16px - 기본 */
--font-size-small: 0.875rem; /* 14px */
--font-size-xs: 0.75rem;     /* 12px */
```

### Font Weights (폰트 굵기)
```css
--font-weight-regular: 400;
--font-weight-bold: 700;
```

### Line Heights (줄 간격)
```css
--line-height-tight: 1.3;
--line-height-normal: 1.5;
```

---

## 3. 간격 시스템 (Spacing System)

### Spacing Tokens
```css
--spacing-xs: 0.625rem;  /* 10px */
--spacing-sm: 0.75rem;   /* 12px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.25rem;   /* 20px */
--spacing-xl: 1.5rem;    /* 24px */
```

### Padding (패딩)
```css
--padding-desktop: 32px;
--padding-mobile: 16px;
```

### Gap (간격)
```css
--gap-sm: 0.25rem;   /* 4px */
--gap-md: 0.5rem;    /* 8px */
--gap-lg: 1rem;      /* 16px */
```

### Mantine 간격 변수
```css
--mantine-spacing-md: 1rem;
```

---

## 4. 보더 & 그림자 (Borders & Shadows)

### Border Radius (모서리 둥글기)
```css
--radius-xs: 0.125rem;      /* 2px */
--radius-sm: 0.25rem;       /* 4px */
--radius-md: 0.5rem;        /* 8px */
--radius-lg: 1rem;          /* 16px */
--radius-xl: 2rem;          /* 32px */
--radius-pill: 62.4375rem;  /* 완전 둥근 버튼 */
--radius-full: 50%;         /* 원형 */
```

### Mantine 반지름 변수
```css
--mantine-radius-xl: 2rem;
```

### Shadows (그림자)
```css
--shadow-sm: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05);
--shadow-md: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.04);
```

---

## 5. 레이아웃 구조 (Layout Structure)

### Header (헤더)
```css
height: 65px;           /* 데스크탑 */
height: 50px;           /* 모바일 */
position: sticky;
top: 0;
z-index: 100;
```

### Container (컨테이너)
```css
max-width: 1440px;
margin: 0 auto;
padding: 32px;          /* 데스크탑 */
padding: 16px;          /* 모바일 */
```

### Grid System (그리드 시스템)
- 반응형 그리드: 2열 → 3열 → 4열 → 5열
- Gap: 16px ~ 40px

---

## 6. 버튼 스타일 (Button Styles)

### Primary Button (주요 버튼)
```css
.btn-primary {
  background-color: #00C471;
  color: #fff;
  height: 2.625rem;           /* 42px */
  border-radius: 62.4375rem;  /* 완전 둥근 pill 형태 */
  padding: 0 1.5rem;
  font-weight: 700;
  transition: background-color 0.2s;
}

.btn-primary:hover {
  background-color: #00A760;
}
```

### Secondary Button (보조 버튼)
```css
.btn-secondary {
  background-color: rgba(248, 249, 250, 1);
  color: #495057;
  height: 2.625rem;
  border-radius: 62.4375rem;
  padding: 0 1.5rem;
  font-weight: 700;
}
```

---

## 7. 카드 컴포넌트 (Card Components)

```css
.card {
  background: #fff;
  border-radius: 0.5rem;
  padding: 16px;
  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.05);
}

.card-grid {
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

/* 모바일 */
@media (max-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

---

## 8. 폼 요소 (Form Elements)

### Input / Select
```css
input, select {
  border: 1px solid #dee2e6;
  border-radius: 50px;
  height: 58px;
  padding: 0 1.5rem;
  font-size: 1rem;
  font-family: inherit;
}

input:focus {
  border-color: #00C471;
  outline: none;
}
```

### Search Bar
```css
.search-bar {
  height: 58px;
  border-radius: 50px;
  border: 1px solid #dee2e6;
  padding: 0 24px;
}
```

---

## 9. 네비게이션 (Navigation)

### Menu Items
```css
.nav-menu {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.nav-item {
  color: #495057;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-item:hover,
.nav-item.active {
  color: #00A760;
}
```

### Responsive Navigation
```css
/* 모바일에서 숨김 */
@media (max-width: 768px) {
  .nav-menu {
    display: none;
  }
}
```

---

## 10. 반응형 브레이크포인트 (Responsive Breakpoints)

```css
--breakpoint-xs: 576px;
--breakpoint-sm: 768px;
--breakpoint-md: 992px;
--breakpoint-lg: 1200px;
--breakpoint-xl: 1440px;
```

---

## 11. CSS 변수 (CSS Variables)

Mantine UI 기반 커스텀 프로퍼티:

```css
:root {
  /* Colors */
  --mantine-color-infgreen-6: #00C471;

  /* Spacing */
  --mantine-spacing-xs: 0.625rem;
  --mantine-spacing-sm: 0.75rem;
  --mantine-spacing-md: 1rem;
  --mantine-spacing-lg: 1.25rem;
  --mantine-spacing-xl: 1.5rem;

  /* Radius */
  --mantine-radius-xs: 0.125rem;
  --mantine-radius-sm: 0.25rem;
  --mantine-radius-md: 0.5rem;
  --mantine-radius-lg: 1rem;
  --mantine-radius-xl: 2rem;
}
```

---

## 12. 디자인 원칙 (Design Principles)

1. **일관성 (Consistency)**: Mantine UI 프레임워크 기반의 일관된 디자인 시스템
2. **접근성 (Accessibility)**: 시맨틱 HTML 및 ARIA 속성 활용
3. **반응형 (Responsive)**: 모바일 우선 반응형 디자인
4. **성능 (Performance)**: 최적화된 CSS 및 컴포넌트 구조

---

## 적용 방법 (Implementation Guide)

### 1. Mantine UI 설치
```bash
npm install @mantine/core @mantine/hooks
# or
yarn add @mantine/core @mantine/hooks
```

### 2. 커스텀 테마 설정
```typescript
import { MantineProvider, createTheme } from '@mantine/core';

const theme = createTheme({
  colors: {
    infgreen: ['#E5F9F1', '#B8EDDB', '#8BE1C5', '#5DD5AF', '#00C471', '#00A760', '#008A51', '#006D41', '#005031', '#003321'],
  },
  primaryColor: 'infgreen',
  fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif',
  spacing: {
    xs: '0.625rem',
    sm: '0.75rem',
    md: '1rem',
    lg: '1.25rem',
    xl: '1.5rem',
  },
  radius: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '2rem',
  },
});
```

### 3. 글로벌 스타일 적용
```css
/* globals.css */
@import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

:root {
  --color-primary: #00C471;
  --color-primary-dark: #00A760;
  --color-primary-light: #E5F9F1;
}

body {
  font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #212529;
}
```

---

## 참고 사항

- 이 디자인 시스템은 2025년 1월 기준 인프런 웹사이트 분석 결과입니다.
- Mantine UI v7 기준으로 작성되었습니다.
- 실제 적용 시 프로젝트 요구사항에 맞게 조정이 필요할 수 있습니다.
