# Vercel 배포 설정 가이드

## 📋 개요

이 문서는 SSA-FE 프로젝트를 Vercel에 배포하는 방법을 안내합니다.

---

## 🔧 Submodule 설정

### 문제 상황
- 프로젝트가 `data` submodule을 사용 (ssa-data 레포지토리)
- Vercel 빌드 시 submodule이 자동으로 초기화되지 않음
- data 디렉토리가 비어있어 빌드 실패

### 해결 방법

#### 1. 자동 초기화 스크립트
- `scripts/init-submodules.sh`: Submodule 자동 초기화 스크립트
- `package.json`의 `postinstall` 스크립트로 자동 실행
- npm/yarn install 시 자동으로 submodule 초기화

#### 2. 스크립트 동작 방식
```bash
# 1. data/problems_ko.json 파일 존재 확인
# 2. 없으면 submodule 초기화 실행
# 3. 파일 검증
```

---

## 🚀 Vercel 배포 설정

### 1단계: 프로젝트 Import

1. [vercel.com](https://vercel.com) 접속
2. **"Add New..."** → **"Project"** 클릭
3. GitHub 레포지토리에서 `ssa-fe` 선택
4. **"Import"** 클릭

### 2단계: 프로젝트 설정

**Framework Preset**: Next.js (자동 감지)

**Build & Development Settings**:
- Build Command: (기본값 사용)
  ```
  npm run build
  ```
- Install Command: (기본값 사용)
  ```
  npm install
  ```
- Output Directory: `.next` (기본값)

### 3단계: 환경 변수 설정 (Private Submodule인 경우)

⚠️ **주의**: ssa-data가 **private 레포지토리**인 경우에만 필요합니다.

1. Vercel 프로젝트 Settings → Environment Variables
2. 다음 환경 변수 추가:

| Name | Value | Description |
|------|-------|-------------|
| `GITHUB_ACCESS_TOKEN` | `ghp_xxxxxxxxxxxx` | GitHub Personal Access Token |

**GitHub Access Token 생성 방법:**
1. GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. "Generate new token (classic)" 클릭
3. 권한 선택:
   - ✅ `repo` (Full control of private repositories)
4. Token 생성 후 복사하여 Vercel에 추가

### 4단계: 배포

**"Deploy"** 클릭 → 2-3분 후 배포 완료!

---

## ✅ 배포 확인 사항

### 필수 확인 항목

- [ ] 빌드 로그에서 "Initializing submodules..." 메시지 확인
- [ ] "Verified: problems_ko.json exists" 메시지 확인
- [ ] 배포 완료 후 사이트 접속 테스트
- [ ] `/problems` 페이지에서 문제 목록 정상 표시 확인
- [ ] API Routes 정상 작동 확인 (`/api/problems`)

### 디버깅

**빌드 실패 시:**
1. Vercel 빌드 로그 확인
2. Submodule 초기화 오류 메시지 확인
3. `GITHUB_ACCESS_TOKEN` 환경 변수 설정 확인 (private repo인 경우)

**데이터 로드 실패 시:**
1. 브라우저 개발자 도구 → Network 탭 확인
2. `/api/problems` 응답 확인
3. 빌드 로그에서 파일 검증 메시지 확인

---

## 🔄 자동 배포

### Main 브랜치 Push
- `main` 브랜치에 push하면 자동으로 프로덕션 배포
- 빌드 → 테스트 → 배포 자동 실행

### Pull Request
- PR 생성 시 자동으로 Preview 배포 생성
- PR URL을 통해 변경사항 미리 확인 가능

---

## 📝 참고 사항

### Submodule 레포지토리
- **URL**: https://github.com/pbg0205/ssa-data
- **포함 파일**:
  - `problems_ko.json`: 한국어 문제 데이터
  - `problems_en.json`: 영어 문제 데이터

### 관련 파일
- `.gitmodules`: Submodule 설정
- `scripts/init-submodules.sh`: Submodule 초기화 스크립트
- `vercel.json`: Vercel 빌드 설정
- `package.json`: postinstall 스크립트

---

## 🆘 문제 해결

### "Data files not found" 오류
**원인**: Submodule 초기화 실패

**해결**:
1. 로컬에서 테스트:
   ```bash
   rm -rf data
   npm install
   ```
2. Private repo인 경우 `GITHUB_ACCESS_TOKEN` 확인
3. Submodule URL 확인 (`.gitmodules`)

### 빌드 시간 초과
**원인**: Submodule 크기가 큰 경우

**해결**:
1. `vercel.json`에서 빌드 타임아웃 증가
2. Shallow clone 사용 검토

### 기타 문제
- Vercel 공식 문서: https://vercel.com/docs
- GitHub Submodules: https://git-scm.com/book/en/v2/Git-Tools-Submodules
