# 작업 내용

- 현재 staging area 에 있는 파일들의 변경 사항을 커밋하기.

# 세부 내용
- 커밋 메시지에는 author claude 에 관한 내용은 미포함.
- 커밋 메시지는 명사형으로 작성.


# 커밋 메시지 포맷

```text
<타입>[적용 범위(선택 사항)]: <설명>경 사항 요약]

[본문(선택 사항)]

[꼬리말(선택 사항)]
```

# 커밋 타입 예시

- build: 시스템 또는 외부 종속성에 영향을 미치는 변경사항 (npm, gulp, yarn 레벨)
- ci: ci구성파일 및 스크립트 변경
- chore: 패키지 매니저 설정할 경우, 코드 수정 없이 설정을 변경
- docs: documentation 변경
- feat: 새로운 기능
- fix: 버그 수정
- perf: 성능 개선
- refactor: 버그를 수정하거나 기능을 추가하지 않는 코드 변경, 리팩토링
- style: 코드 의미에 영향을 주지 않는 변경사항 ( white space, formatting, colons )
- test: 누락된 테스트 추가 또는 기존 테스트 수정
- revert: 작업 되돌리기
