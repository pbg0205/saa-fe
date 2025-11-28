import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#E5F9F1] to-white py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            SSA 시험 준비의 새로운 기준
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            체계적인 문제 풀이와 실전 모의고사로 SSA 시험을 완벽하게 준비하세요.
            한국어와 영어 문제를 모두 지원합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/problems/random-number" className="btn-primary inline-flex items-center">
              랜덤 문제
            </Link>
            <Link href="/exam" className="btn-secondary inline-flex items-center">
              10분 시험
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            주요 기능
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature Card 1 */}
            <div className="card">
              <div className="w-12 h-12 bg-[#E5F9F1] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00C471]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">한국어 & 영어 문제</h3>
              <p className="text-gray-600">
                한국어와 영어로 제공되는 다양한 문제를 통해 언어에 구애받지 않고 학습할 수 있습니다.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="card">
              <div className="w-12 h-12 bg-[#E5F9F1] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00C471]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">실전 시험 모드</h3>
              <p className="text-gray-600">
                10분 타이머와 함께 실전과 동일한 환경에서 모의고사를 진행할 수 있습니다.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="card">
              <div className="w-12 h-12 bg-[#E5F9F1] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00C471]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">즉시 피드백</h3>
              <p className="text-gray-600">
                정답을 클릭하면 즉시 정답 여부를 확인하고 학습 효율을 높일 수 있습니다.
              </p>
            </div>

            {/* Feature Card 4 */}
            <div className="card">
              <div className="w-12 h-12 bg-[#E5F9F1] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00C471]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">랜덤 문제</h3>
              <p className="text-gray-600">
                매번 다른 순서로 제공되는 랜덤 문제를 통해 반복 학습 효과를 극대화할 수 있습니다.
              </p>
            </div>

            {/* Feature Card 5 */}
            <div className="card">
              <div className="w-12 h-12 bg-[#E5F9F1] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00C471]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">정답 확인</h3>
              <p className="text-gray-600">
                모든 문제의 정답을 한눈에 확인하고 틀린 문제를 빠르게 복습할 수 있습니다.
              </p>
            </div>

            {/* Feature Card 6 */}
            <div className="card">
              <div className="w-12 h-12 bg-[#E5F9F1] rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-[#00C471]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">모바일 최적화</h3>
              <p className="text-gray-600">
                언제 어디서나 PC와 모바일에서 편리하게 문제를 풀이할 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Study Modes Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            학습 모드
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* KO Mode */}
            <Link href="/problems/ko" className="group">
              <div className="card h-full hover:border-2 hover:border-[#00C471] transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#E5F9F1] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00C471] transition-colors">
                    <span className="text-2xl font-bold text-[#00C471] group-hover:text-white">KO</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">한국어 문제</h3>
                    <p className="text-gray-600 mb-4">
                      한국어 버전의 문제를 풀이해 볼 수 있습니다. 지문을 클릭하고 정답을 선택하면 즉시 정답 여부를 확인할 수 있습니다.
                    </p>
                    <span className="text-[#00C471] font-bold group-hover:underline">시작하기 →</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* EN Mode */}
            <Link href="problems/en" className="group">
              <div className="card h-full hover:border-2 hover:border-[#00C471] transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#E5F9F1] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00C471] transition-colors">
                    <span className="text-2xl font-bold text-[#00C471] group-hover:text-white">EN</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">영어 문제</h3>
                    <p className="text-gray-600 mb-4">
                      영어 버전의 문제를 풀이해 볼 수 있습니다. 지문을 클릭하고 정답을 선택하면 즉시 정답 여부를 확인할 수 있습니다.
                    </p>
                    <span className="text-[#00C471] font-bold group-hover:underline">시작하기 →</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Random Mode */}
            <Link href="problems/random-number" className="group">
              <div className="card h-full hover:border-2 hover:border-[#00C471] transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#E5F9F1] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00C471] transition-colors">
                    <svg className="w-8 h-8 text-[#00C471] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">랜덤 문제</h3>
                    <p className="text-gray-600 mb-4">
                      랜덤으로 섞인 문제를 풀이해 볼 수 있습니다. 매번 다른 순서로 문제가 제공되어 효과적인 학습이 가능합니다.
                    </p>
                    <span className="text-[#00C471] font-bold group-hover:underline">시작하기 →</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Exam Mode */}
            <Link href="/exam" className="group">
              <div className="card h-full hover:border-2 hover:border-[#00C471] transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#E5F9F1] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00C471] transition-colors">
                    <svg className="w-8 h-8 text-[#00C471] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">시험 모드</h3>
                    <p className="text-gray-600 mb-4">
                      10분의 제한 시간 동안 실전과 동일한 환경에서 문제를 풀 수 있습니다. 제출 후 답안을 확인할 수 있습니다.
                    </p>
                    <span className="text-[#00C471] font-bold group-hover:underline">시작하기 →</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Answer Mode */}
          <div className="mt-8">
            <Link href="problems/answer" className="group block">
              <div className="card hover:border-2 hover:border-[#00C471] transition-all duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-[#E5F9F1] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#00C471] transition-colors">
                    <svg className="w-8 h-8 text-[#00C471] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">정답 확인</h3>
                    <p className="text-gray-600 mb-4">
                      모든 문제의 정답을 한눈에 확인할 수 있습니다. 틀린 문제를 빠르게 찾아 복습하세요.
                    </p>
                    <span className="text-[#00C471] font-bold group-hover:underline">확인하기 →</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 bg-gradient-to-br from-[#00C471] to-[#00A760]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            체계적인 학습으로 SSA 시험을 완벽하게 준비할 수 있습니다.
          </p>
          <Link href="/ko" className="inline-flex items-center bg-white text-[#00C471] font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors duration-200">
            무료로 시작하기
          </Link>
        </div>
      </section>
    </div>
  );
}
