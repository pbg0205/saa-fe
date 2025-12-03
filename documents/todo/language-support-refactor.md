# 작업 내용

1. /problems/ko/[problemNumber], /problems/en/[problemNumber] -> /problems/[problemNumber] path 변경
2. 헤더 메뉴 통합 리팩토링 : KO, EN 버튼 -> problems 메뉴로 통합
   - problems 메뉴 클릭 시 problems
3. 문제 언어 선택 설정 방식 변경
   - AS-IS
     - 문제 언어를 url path 로 파악
   - TO-BE
     - 언어 선택은 context api 에 저장된 language 값을 파악
     - 문제 조회는 context api 에 저장된 language 를 파악해 @data/problems_[language].json 에서 문제를 조회

---

# 완료된 작업 내용

## 1. 라우팅 구조 변경
- `/problems/[language]/page.tsx` → `/problems/page.tsx` 생성
- `/problems/[language]/[problemNumber]/page.tsx` → `/problems/[problemNumber]/page.tsx` 생성
- `/problems/[language]/[problemNumber]/layout.tsx` → `/problems/[problemNumber]/layout.tsx` 이동
- 기존 `/problems/[language]` 폴더 삭제

## 2. API 라우트 변경
- `/api/problems/route.ts` 생성 (전체 문제 목록 조회, query parameter로 language 전달)
- `/api/problems/[problemNumber]/route.ts` 생성 (개별 문제 조회, query parameter로 language 전달)
- `/api/exam/random/route.ts` 수정 (query parameter로 language 전달)
- 기존 `/api/problems/[language]` 폴더 삭제

## 3. 헤더 컴포넌트 수정
- `src/components/Header.tsx`
  - KO, EN 버튼 제거
  - problems 메뉴 추가 (경로: `/problems`)
  - isActive 로직 수정 (`/problems` 하위 경로 감지)

## 4. Context API 기반으로 언어 선택 방식 변경
- 모든 페이지에서 `useLanguage()` 훅 사용
  - `src/app/problems/page.tsx`
  - `src/app/problems/[problemNumber]/page.tsx`
  - `src/app/problems/answers/page.tsx`
  - `src/app/problems/random-number/page.tsx`
  - `src/app/exam/page.tsx`
- 모든 컴포넌트에서 `useLanguage()` 훅 사용
  - `src/components/ProblemMoveButtons.tsx`
  - `src/components/ExamProblemPrevButton.tsx`
  - `src/components/ExamProblemNextButton.tsx`

## 5. 홈페이지 UI 개선
- `src/app/page.tsx`
  - KO Mode, EN Mode 두 개의 카드 → 문제 목록 하나의 카드로 통합
  - 링크 경로: `/problems/ko`, `/problems/en` → `/problems`
  - 정답 확인 카드를 그리드 안으로 이동 (다른 항목들과 동일한 스타일)
  - 모든 링크 경로를 절대 경로로 수정
  - CTA 섹션의 "무료로 시작하기" 버튼 경로: `/ko` → `/problems`

## 6. 빌드 테스트
- ✅ 빌드 성공 확인
- ✅ 타입 체크 통과
- ✅ 모든 페이지 정상 생성 확인

