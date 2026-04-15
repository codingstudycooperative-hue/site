import PageBanner from "@/components/ui/PageBanner";

export default function About() {
  return (
    <main>
      <PageBanner title="About" subtitle="조합소개" />

      <div className="max-w-7xl mx-auto px-4 py-16 sm:py-24 sm:px-6 lg:px-8">
        {/* 기본정보 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">기본정보</h2>
          <div className="bg-slate-50 rounded-lg p-8 space-y-4">
            <div className="flex items-start gap-4">
              <span className="font-bold text-slate-700 min-w-fit">
                설립일:
              </span>
              <span className="text-slate-600">2020년 3월 9일</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-bold text-slate-700 min-w-fit">지위:</span>
              <span className="text-slate-600">예비사회적기업</span>
            </div>
            <div className="flex items-start gap-4">
              <span className="font-bold text-slate-700 min-w-fit">
                사업자등록번호:
              </span>
              <span className="text-slate-600">117-86-01510</span>
            </div>
          </div>
        </section>

        {/* 조합 목표 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            조합의 목표
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 border-l-4 border-[#2563eb] rounded-lg p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">배움</h3>
              <p className="text-slate-600">
                SW·AI 교육을 통해 학생들의 논리적 사고력과 창의력을 개발합니다.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#2563eb] rounded-lg p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">나눔</h3>
              <p className="text-slate-600">
                지역사회와 학교의 요구에 응하여 교육 기회를 나누고 공유합니다.
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-[#2563eb] rounded-lg p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-3">이룸</h3>
              <p className="text-slate-600">
                협동조합 구조로 함께 성장하고 지속 가능한 미래를 만들어갑니다.
              </p>
            </div>
          </div>
        </section>

        {/* 조합 목적 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">
            조합의 목적
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#2563eb] text-white font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  SW·AI 교육의 전문화
                </h3>
                <p className="text-slate-600">
                  최신 교육 트렌드를 반영하여 체계적이고 실질적인
                  소프트웨어·인공지능 교육을 제공합니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#2563eb] text-white font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  학교·지역사회의 교육 기회 확대
                </h3>
                <p className="text-slate-600">
                  다양한 학교와 기관의 요구를 반영한 맞춤형 프로그램으로 교육
                  기회를 확대합니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#2563eb] text-white font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  협동조합 운동의 실현
                </h3>
                <p className="text-slate-600">
                  투명하고 윤리적인 협동조합 방식으로 지역사회와 함께 성장하고
                  지속 가능한 교육을 구현합니다.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-md bg-[#2563eb] text-white font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  미래 인재 양성
                </h3>
                <p className="text-slate-600">
                  디지털 리터러시와 문제 해결 능력을 갖춘 미래 세대를 함께
                  만들어갑니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
