# 작업 내용

- GitHub Actions workflow 제거
- Vercel 배포 환경으로 전환
- SST 관련 설정 제거
- 배포 자동화 간소화

# 작업 순서

1. 현재 배포 환경 문제 분석
2. 적절한 배포 전략 선택
3. GitHub Actions workflow 제거
4. Vercel 배포 가이드 작성

# TO-DO-LIST

1. 현재 배포 환경 문제 분석
   - [x] GitHub Actions 오류 원인 파악
   - [x] `out` 디렉토리 미생성 문제 확인
   - [x] API Routes와 Static Export 호환성 검토
   - [x] 현재 사용 중인 배포 방식 확인 (SST 미사용)

2. 적절한 배포 전략 선택
   - [x] GitHub Pages vs Vercel vs 기타 호스팅 비교
   - [x] API Routes 지원 여부 확인
   - [x] Vercel 선택 (Zero Config, API Routes 지원)

3. GitHub Actions workflow 제거
   - [x] `.github/workflows/nextjs.yml` 삭제
   - [x] 변경사항 커밋

4. Vercel 배포 가이드 작성
   - [x] Vercel 계정 생성 방법
   - [x] 프로젝트 Import 방법
   - [x] 자동 배포 설정 확인

# 참고 파일

- `.github/workflows/nextjs.yml` (삭제됨)
- `next.config.mjs`
- `src/app/api/**/*.ts` (API Routes - 그대로 유지)

---

# 작업 완료 내역

## 1차 작업 (2025-12-03)

### 문제 상황
- GitHub Actions workflow 실행 시 오류 발생
- `actions/upload-pages-artifact@v3`에서 `out` 디렉토리를 찾을 수 없음
- 오류 메시지: `tar: out: Cannot open: No such file or directory`
- AWS SST는 사용하지 않지만 workflow에 deploy job이 포함되어 있음

### 원인 분석

1. **GitHub Pages 설정 문제**
   - Next.js 기본 빌드는 `.next` 디렉토리에 출력 생성
   - GitHub Pages 배포를 위해서는 `out` 디렉토리가 필요 (static export)
   - `next.config.mjs`에 `output: 'export'` 설정이 없음

2. **API Routes와 Static Export 비호환**
   - 프로젝트가 API Routes를 사용 중 (`/api/problems`, `/api/exam/random`)
   - Static Export는 API Routes를 지원하지 않음
   - GitHub Pages는 정적 사이트 호스팅만 가능

3. **불필요한 Workflow Job**
   - `build` job: GitHub Pages 배포용 (오류 발생)
   - `deploy` job: AWS SST 배포용 (사용하지 않음)

### 개선 작업

#### 1. 배포 전략 재평가
**검토한 옵션:**
- **옵션 A: GitHub Pages**
  - ❌ API Routes 제거 필요 (대규모 코드 수정)
  - ✅ 무료 호스팅

- **옵션 B: Vercel** ⭐ (선택)
  - ✅ API Routes 완벽 지원
  - ✅ Zero Configuration
  - ✅ 자동 빌드/배포
  - ✅ 무료 티어 (개인 프로젝트)
  - ✅ GitHub 자동 연동

#### 2. GitHub Actions Workflow 제거
```bash
# 파일 삭제
rm .github/workflows/nextjs.yml

# 변경사항 커밋
git add .github/workflows/nextjs.yml
git commit -m "chore: GitHub Actions workflow 제거 (Vercel 배포로 전환)"
```

**이유:**
- Vercel이 GitHub 연동 시 자동으로 빌드/배포 처리
- 별도 CI/CD 설정 불필요
- 코드 수정 없이 현재 구조 그대로 사용 가능

#### 3. Vercel 배포 가이드 작성
**배포 방법:**
1. [vercel.com](https://vercel.com) 가입 (GitHub 계정 연동)
2. 프로젝트 Import
3. 자동 설정 확인 후 Deploy

**자동 배포 프로세스:**
- `main` 브랜치 push → 자동 프로덕션 배포
- PR 생성 → 자동 프리뷰 배포
- API Routes 정상 작동
- 환경 변수 설정 가능

### 결과

- ✅ GitHub Actions workflow 제거 완료
- ✅ 코드 수정 없이 현재 구조 유지
- ✅ API Routes 그대로 사용 가능
- ✅ 배포 프로세스 간소화
- ✅ 자동 빌드/배포 환경 구축 준비 완료

### 다음 단계

1. **Vercel 프로젝트 생성**
   - Vercel 계정 생성 및 GitHub 연동
   - `ssa-fe` 레포지토리 Import
   - 자동 배포 설정 확인

2. **배포 확인**
   - 프로덕션 URL 확인
   - API Routes 동작 테스트
   - 각 페이지 정상 작동 확인

3. **도메인 설정 (선택사항)**
   - 커스텀 도메인 연결
   - SSL 인증서 자동 적용
