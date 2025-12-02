# 작업 내용

## 기능 설명
- 다국어 언어 지원을 language-selector 컴포넌트를 통해 구현.
- 다른 언어 선택 시, 문제 정보가 해당 언어로 리렌더링 되도록 구성.

## 컴포넌트 기능 설명
- language-selector 컴포넌트는 사용자가 선호하는 언어를 선택할 수 있는 드롭다운 메뉴를 제공.
- language-selector 는 KO, EN 두 가지 언어 옵션을 포함.
- 선택된 언어는 localStorage 에 저장하고, localstorage 에 저장된 언어가 변경될 경우 react context API 를 사용하여 문제 정보를 리렌더링하도록 구성

## 컴포넌트 배치 설명
- 컴포넌트는 @src/components/Header.tsx 의 navbar 가장 마지막 영역에 위치

---

# 작업 완료 내역

## 작업 일시
- 완료일: 2025-12-02

## 구현 파일

### 새로 생성된 파일
1. **src/contexts/LanguageContext.tsx**
   - React Context API 기반 언어 상태 관리
   - localStorage 연동 (키: "user_language_preference")
   - 다중 탭 동기화 (Storage Event)
   - SSR 대응 (isClient 체크)
   - useLanguage 커스텀 훅 제공

2. **src/components/LanguageSelector.tsx**
   - 드롭다운 셀렉트 UI 컴포넌트
   - 언어 옵션: "한국어" (ko), "English" (en)
   - useLanguage 훅으로 Context 접근

### 수정된 파일
1. **src/components/Header.tsx**
   - LanguageSelector import 추가
   - navbar 마지막에 LanguageSelector 컴포넌트 배치

2. **src/app/layout.tsx**
   - LanguageProvider import 추가
   - 전체 앱을 LanguageProvider로 래핑

## 주요 기능

### 1. 영속성 (Persistence)
- localStorage에 선택된 언어 저장
- 브라우저 종료 후에도 설정 유지
- 페이지 새로고침 시 자동 복원

### 2. 리액티브 (Reactive)
- Context API로 언어 상태 관리
- 언어 변경 시 모든 구독 컴포넌트 자동 리렌더링
- useEffect 의존성 배열에 language 추가 시 자동 재실행

### 3. 다중 탭 동기화
- Storage Event 리스너로 다른 탭의 변경사항 감지
- 한 탭에서 언어 변경 시 모든 탭 자동 업데이트

### 4. SSR 대응
- isClient 상태로 클라이언트/서버 구분
- localStorage 접근을 클라이언트 사이드로 제한
- Next.js SSR 환경에서 안전하게 작동

## 동작 흐름

### 언어 변경 시
```
1. 사용자가 드롭다운에서 언어 선택
   ↓
2. setLanguage('en') 호출
   ↓
3. Context 상태 업데이트 (language = 'en')
   ↓
4. 모든 구독 컴포넌트 자동 리렌더링
   ↓
5. localStorage.setItem('user_language_preference', 'en')
   ↓
6. 다른 탭에서도 자동 동기화
```

### 페이지 새로고침 시
```
1. LanguageProvider 마운트
   ↓
2. localStorage.getItem('user_language_preference')
   ↓
3. 저장된 언어 값 복원
   ↓
4. 해당 언어로 즉시 렌더링
```

## 사용 방법

### 컴포넌트에서 언어 사용
```typescript
import { useLanguage } from "@/contexts/LanguageContext";

function MyComponent() {
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    // language 변경 시 자동 재실행
    fetch(`/api/problems/${language}/1`)
      .then(res => res.json())
      .then(data => setData(data));
  }, [language]);

  return <div>{language === 'ko' ? '한국어' : 'English'}</div>;
}
```

## 테스트 결과

### 빌드 테스트
- ✅ npm run build 성공
- ✅ TypeScript 타입 체크 통과
- ✅ ESLint 경고 없음
- ✅ 9개 페이지 정적 생성 완료

### 기능 테스트 항목
- [ ] 언어 선택 시 드롭다운 정상 작동
- [ ] 언어 변경 시 즉시 리렌더링
- [ ] localStorage에 언어 설정 저장 확인
- [ ] 페이지 새로고침 후 언어 설정 유지 확인
- [ ] 다중 탭에서 언어 동기화 확인
- [ ] 브라우저 종료 후 재접속 시 언어 유지 확인

## 기술 스택
- React Context API
- localStorage API
- Storage Event API
- TypeScript
- Next.js 14 (App Router)
- Tailwind CSS

## 향후 개선 사항
- [ ] 언어 변경 시 애니메이션 효과 추가
- [ ] 더 많은 언어 옵션 추가 (일본어, 중국어 등)
- [ ] 언어별 번역 파일 분리 (i18n)
- [ ] 언어 변경 시 URL 파라미터 업데이트 검토

