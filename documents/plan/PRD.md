# Product Requirements Document (PRD)
# SAA - AWS Solutions Architect Associate 학습 플랫폼

## 1. 제품 개요

### 1.1 제품명
SAA (AWS Solutions Architect Associate) 학습 플랫폼

### 1.2 제품 목적
AWS Solutions Architect Associate 자격증 준비를 위한 온라인 학습 및 모의시험 플랫폼으로, 사용자가 효과적으로 문제를 학습하고 시험 형식에 익숙해질 수 있도록 지원합니다.

### 1.3 기술 스택
- **프레임워크**: Next.js 15.0.3 (React 18.3.1)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS
- **배포**: Vercel
- **패키지 관리**: Yarn

---

## 2. 주요 기능

### 2.1 홈 페이지 (/)
**목적**: 사용자에게 플랫폼의 주요 기능과 메뉴를 안내

**기능**:
- 5가지 주요 메뉴 소개
  - KO - 한국어 문제: 한국어 버전 문제 풀이
  - EN - 영어 문제: 영어 버전 문제 풀이
  - ANSWER - 정답: 전체 문제 정답 조회
  - RANDOM - 랜덤 문제: 랜덤 문제 풀이
  - EXAM - 시험 모드: 실전 모의시험 (10분 제한)

**구현 파일**: `src/app/page.tsx`

---

### 2.2 문제 목록 페이지 (/problems/[language])
**목적**: 특정 언어의 전체 문제 목록을 확인하고 개별 문제로 이동

**기능**:
- 언어별 문제 목록 표시 (ko/en)
- 문제 번호 클릭 시 해당 문제 상세 페이지로 이동
- 동적 라우팅을 통한 언어 선택

**데이터 소스**: `data/problems_${language}.json`

**구현 파일**: `src/app/problems/[language]/page.tsx`

---

### 2.3 문제 상세 페이지 (/problems/[language]/[problemNumber])
**목적**: 개별 문제를 풀고 정답을 확인

**주요 기능**:
1. **문제 표시**
   - 문제 번호 및 지문 표시
   - 객관식 선택지 표시

2. **답안 선택**
   - 단일/복수 선택 지원
   - 선택한 항목 시각적 표시 (bold)
   - 정답 확인 전까지 자유롭게 변경 가능

3. **정답 확인**
   - "정답 확인" 버튼 클릭 시 정답 표시
   - 정답 항목에 파란색 테두리 표시
   - 사용자 선택 정답 여부 표시 (정답입니다! / 정답이 아닙니다!)

4. **네비게이션**
   - 이전/다음 문제 이동 버튼
   - 첫 문제에서 이전 버튼 비활성화
   - 마지막 문제에서 다음 버튼 비활성화

5. **다국어 지원**
   - 한국어(ko) / 영어(en) UI 텍스트 자동 변환
   - Localization 시스템 적용

**구현 파일**:
- `src/app/problems/[language]/[problemNumber]/page.tsx`
- `src/components/ProblemContent.tsx`
- `src/components/ChoiceList.tsx`
- `src/components/AnswerButton.tsx`
- `src/components/ProblemMoveButtons.tsx`

---

### 2.4 정답 보기 페이지 (/problems/answers)
**목적**: 모든 문제의 정답을 한눈에 확인

**기능**:
- 한국어 문제 전체 목록 표시
- 각 문제의 문제 번호와 정답 표시
- 빠른 정답 참조용

**구현 파일**: `src/app/problems/answers/page.tsx`

---

### 2.5 랜덤 문제 페이지 (/problems/random-number)
**목적**: 무작위로 선택된 문제를 통해 다양한 문제 풀이 경험 제공

**기능**:
- 랜덤하게 선택된 문제 표시
- 문제 상세 페이지와 동일한 UI/UX
- 다음 랜덤 문제로 이동 가능

**구현 파일**: `src/app/problems/random-number/page.tsx`

---

### 2.6 시험 모드 (/exam)
**목적**: 실제 시험과 유사한 환경에서 모의시험 응시

**주요 기능**:

1. **시험 구성**
   - 10개의 랜덤 문제 출제
   - API를 통한 문제 데이터 로드 (`/api/exam/random`)

2. **타이머 기능**
   - 10분 카운트다운 타이머
   - 시간 종료 시 자동 결과 모달 표시
   - MM:SS 형식으로 표시

3. **답안 선택**
   - 문제별 답안 선택 가능
   - 선택한 답안 실시간 저장
   - 문제 간 이동 시 선택한 답안 유지

4. **문제 네비게이션**
   - 이전/다음 문제 이동 버튼
   - 현재 문제 번호 표시 (예: 1번 문제)

5. **제출 기능**
   - "제출하기" 버튼을 통한 수동 제출
   - 제출 시 결과 모달 표시

6. **결과 모달**
   - 총점 표시 (100점 만점)
   - 문항별 정오 표시
   - 각 문제의 정답 및 사용자가 선택한 답안 표시
   - 정답: ✅ 표시
   - 오답: ❌ 표시
   - 알파벳(A, B, C, D) 형식으로 답안 표시
   - 메인 페이지 이동 버튼

**구현 파일**:
- `src/app/exam/page.tsx`
- `src/components/Timer.tsx`
- `src/components/ExamProblemPrevButton.tsx`
- `src/components/ExamProblemNextButton.tsx`
- `src/components/ExamSubmitButton.tsx`
- `src/components/ResultModal.tsx`
- `src/app/api/exam/random/route.ts`

---

## 3. 데이터 구조

### 3.1 데이터 저장
- JSON 파일 기반 데이터 관리
- 언어별 분리: `data/problems_ko.json`, `data/problems_en.json`
- 서버 사이드에서 파일 시스템을 통해 데이터 로드

---

## 4. API 엔드포인트

### 4.1 문제 조회 API
**엔드포인트**: `/api/problems/[language]/[problemNumber]`
- **메서드**: GET
- **파라미터**:
  - `language`: 언어 코드 (ko/en)
  - `problemNumber`: 문제 번호
- **응답**: ProblemData 객체
- **구현 파일**: `src/app/api/problems/[language]/[problemNumber]/route.ts`

### 4.2 랜덤 문제 생성 API
**엔드포인트**: `/api/exam/random`
- **메서드**: GET
- **기능**: 10개의 랜덤 문제 반환
- **응답**: Problem[] 배열
- **구현 파일**: `src/app/api/exam/random/route.ts`

---

## 5. 서비스 레이어

### 5.1 Problems Service (`src/service/problems.ts`)
**주요 함수**:
1. `fetchAllProblems(language: string)`: 전체 문제 조회
2. `getProblemData(id: number, language: string)`: 특정 문제 조회 (이전/다음 포함)
3. `getRandomProblems(language: string, count: number)`: 랜덤 문제 생성

### 5.2 Answer Service (`src/service/answer.ts`)
**주요 함수**:
1. `answerIndices(answer: string)`: 답안 문자열을 인덱스 배열로 변환
   - 예: "A, B" → [0, 1]

---

## 6. UI/UX 구성요소

### 6.1 공통 컴포넌트
1. **Header** (`src/components/Header.tsx`)
   - 로고: "SAA" (홈으로 링크)
   - 네비게이션 메뉴: KO, EN, answers, random, exam

2. **Timer** (`src/components/Timer.tsx`)
   - 시간 표시: MM:SS 형식
   - 자동 카운트다운
   - 시간 종료 시 콜백 실행

3. **ChoiceList** (`src/components/ChoiceList.tsx`)
   - 선택지 목록 표시
   - 클릭을 통한 답안 선택
   - 정답 확인 시 정답 하이라이트

4. **ResultModal** (`src/components/ResultModal.tsx`)
   - 시험 결과 표시
   - 점수 계산 및 표시
   - 문항별 정오 분석

### 6.2 네비게이션 컴포넌트
- `ProblemMoveButtons.tsx`: 일반 문제 이동 버튼
- `ExamProblemPrevButton.tsx`: 시험 모드 이전 버튼
- `ExamProblemNextButton.tsx`: 시험 모드 다음 버튼
- `ProblemMoveButton.tsx`: 개별 이동 버튼 컴포넌트

### 6.3 액션 컴포넌트
- `AnswerButton.tsx`: 정답 확인 버튼
- `ExamSubmitButton.tsx`: 시험 제출 버튼

---

## 7. 다국어 지원

### 7.1 지원 언어
- 한국어 (ko)
- 영어 (en)

### 7.2 Localization 시스템
**파일**: `src/utils/Localizations.tsx`

**지원 텍스트**:
- showAnswer: 정답 확인
- checkAnswer: 답 확인하기
- nextProblem: 다음
- prevProblem: 이전
- correct: 정답입니다!
- incorrect: 정답이 아닙니다!
- 등

**함수**:
- `getLocalizedText(key, language)`: 키와 언어에 따른 텍스트 반환
- `getSupportedLanguages()`: 지원 언어 목록 반환

---

## 8. 레이아웃 구조

### 8.1 루트 레이아웃 (`src/app/layout.tsx`)
- 전체 페이지 공통 레이아웃
- Header 컴포넌트 포함
- Tailwind CSS 스타일 적용

### 8.2 Exam 레이아웃 (`src/app/exam/layout.tsx`)
- 시험 모드 전용 레이아웃
- 특정 페이지 스타일링

### 8.3 문제 상세 레이아웃 (`src/app/problems/[language]/[problemNumber]/layout.tsx`)
- 문제 풀이 페이지 전용 레이아웃

---

## 9. 사용자 플로우

### 9.1 일반 문제 풀이 플로우
1. 홈 페이지 접속
2. KO 또는 EN 메뉴 선택
3. 문제 목록에서 특정 문제 선택
4. 문제 읽고 답안 선택
5. "정답 확인" 버튼 클릭
6. 정답 여부 확인
7. 이전/다음 버튼으로 다른 문제 이동

### 9.2 시험 모드 플로우
1. 홈 페이지에서 "EXAM" 선택
2. 10개의 랜덤 문제 로드
3. 타이머 시작 (10분)
4. 문제 풀이 및 답안 선택
5. 이전/다음 버튼으로 문제 간 이동
6. "제출하기" 버튼 클릭 또는 시간 종료
7. 결과 모달에서 점수 및 정오 확인
8. 메인 페이지로 이동

### 9.3 정답 조회 플로우
1. 홈 페이지에서 "ANSWER" 선택
2. 전체 문제의 정답 목록 확인

---

## 10. 주요 비즈니스 로직

### 10.1 답안 검증 로직
- 선택한 답안과 정답 배열 비교
- 배열 길이 일치 여부 확인
- 정렬 후 요소별 비교
- 다중 선택 문제 지원

### 10.2 점수 계산 로직
- 정답 개수 / 전체 문제 수 * 100
- 각 문제당 동일한 배점
- 부분 점수 없음 (완전 일치만 정답)

### 10.3 랜덤 문제 선택 로직
- Set을 사용한 중복 없는 랜덤 인덱스 생성
- 지정된 개수만큼 문제 선택
- 한국어 문제 기본 사용

---

## 11. 디자인 및 스타일링

디자인 시스템 및 UI/UX 가이드는 별도 문서에서 관리합니다.
상세 내용은 [DESIGN_GUIDE.md](../design/DESIGN_GUIDE.md)를 참고하세요.

**주요 내용**:
- Tailwind CSS 기반 스타일링
- 색상 시스템 및 타이포그래피
- 컴포넌트별 디자인 가이드
- 반응형 디자인 및 접근성

---

## 12. 배포 및 인프라

### 12.1 배포 방식
- Vercel 플랫폼 사용
- GitHub 연동을 통한 자동 배포
- 프로덕션 및 프리뷰 환경 지원

### 12.2 환경 설정
- 개발: `yarn dev`
- 빌드: `next build`
- 로컬 실행: `yarn start`

---

## 13. 향후 개선 사항

향후 개선 계획 및 아이디어는 별도 문서에서 관리합니다.
상세 내용은 [IMPROVEMENTS.md](../IMPROVEMENTS.md)를 참고하세요.

---

## 14. 요약

SAA 학습 플랫폼은 AWS Solutions Architect Associate 자격증 준비생을 위한 웹 기반 학습 도구입니다.
Next.js 기반으로 구축되어 서버 사이드 렌더링과 정적 생성의 이점을 활용하며,
다국어 지원을 통해 한국어와 영어 사용자 모두에게 학습 기회를 제공합니다.

주요 기능으로는 일반 문제 풀이, 랜덤 문제 연습, 10분 제한의 실전 모의시험 모드가 있으며,
직관적인 UI와 즉각적인 피드백을 통해 효과적인 학습 경험을 제공합니다.
