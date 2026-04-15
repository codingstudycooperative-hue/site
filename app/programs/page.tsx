import PageBanner from "@/components/ui/PageBanner";

export default function Programs() {
  return (
    <main>
      <PageBanner title="Programs" subtitle="프로그램" />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 프로그램 1: 초등 방과후 코딩 */}
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] text-white p-8">
              <h2 className="text-2xl font-bold mb-2">초등 방과후 코딩</h2>
              <p className="text-slate-100">기초부터 심화까지</p>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <h3 className="font-bold text-slate-900 mb-2">대상</h3>
                <p className="text-slate-600">초등학교 3학년 ~ 6학년</p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-slate-900 mb-3">교육 내용</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• 블록 기반 프로그래밍 (엔트리, 스크래치)</li>
                  <li>• 아두이노를 활용한 피지컬 컴퓨팅</li>
                  <li>• 다양한 교구를 활용한 실습 프로젝트</li>
                  <li>• 문제 해결 능력 개발</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-3">특징</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>✓ 소그룹 맞춤형 교육</li>
                  <li>✓ 실습 중심의 프로젝트 학습</li>
                  <li>✓ 단계별 커리큘럼</li>
                  <li>✓ 창의력과 논리적 사고력 발전</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 프로그램 2: 중학교 AI 교육 */}
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-[#4f46e5] to-[#4338ca] text-white p-8">
              <h2 className="text-2xl font-bold mb-2">중학교 AI 교육</h2>
              <p className="text-slate-100">미래를 준비하는</p>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <h3 className="font-bold text-slate-900 mb-2">대상</h3>
                <p className="text-slate-600">중학교 1학년 ~ 3학년</p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-slate-900 mb-3">교육 내용</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• 인공지능의 기초 개념 이해</li>
                  <li>• 파이썬을 활용한 프로그래밍</li>
                  <li>• 머신러닝 실습 프로젝트</li>
                  <li>• 데이터 분석 입문</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-3">특징</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>✓ 실무 기반 커리큘럼</li>
                  <li>✓ 실전 AI 프로젝트 경험</li>
                  <li>✓ 단계적 난이도 조절</li>
                  <li>✓ 미래 진로 탐색</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 프로그램 3: 공공기관 체험 */}
          <div className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
            <div className="bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white p-8">
              <h2 className="text-2xl font-bold mb-2">공공기관 체험</h2>
              <p className="text-slate-100">맞춤형 프로그램</p>
            </div>
            <div className="p-8">
              <div className="mb-6">
                <h3 className="font-bold text-slate-900 mb-2">대상</h3>
                <p className="text-slate-600">
                  공공기관, 도서관, 문화센터, 지역사회 등
                </p>
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-slate-900 mb-3">교육 내용</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>• 기관의 요구에 맞춘 맞춤형 프로그램</li>
                  <li>• SW·AI 기초 이해</li>
                  <li>• 다양한 교구 체험</li>
                  <li>• 디지털 리터러시 교육</li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 mb-3">특징</h3>
                <ul className="text-slate-600 space-y-2">
                  <li>✓ 기관 맞춤형 설계</li>
                  <li>✓ 다양한 연령층 대응</li>
                  <li>✓ 유연한 교육 일정</li>
                  <li>✓ 지역사회 함께하는 교육</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 문의 섹션 */}
        <section className="mt-16 bg-slate-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            프로그램 신청 및 문의
          </h2>
          <p className="text-slate-600 mb-6">
            학교·기관의 특성과 요구에 맞춘 맞춤형 프로그램을 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0505-300-2452"
              className="inline-block bg-[#2563eb] text-white px-6 py-3 rounded font-medium hover:bg-[#1d4ed8] transition-colors"
            >
              📞 0505-300-2452
            </a>
            <a
              href="mailto:codingstudy0206@gmail.com"
              className="inline-block bg-[#4f46e5] text-white px-6 py-3 rounded font-medium hover:bg-[#4338ca] transition-colors"
            >
              📧 codingstudy0206@gmail.com
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
