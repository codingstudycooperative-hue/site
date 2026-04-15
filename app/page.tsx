import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main>
      {/* 히어로 섹션 */}
      <section className="bg-slate-900 text-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            미래를 여는 코딩 교육
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            SW·AI 전문 협동조합으로 학교와 지역사회의 디지털 미래를 함께
            열어갑니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" href="/contact">
              수업 의뢰하기
            </Button>
            <Button variant="secondary" href="/equipment">
              보유 교구 보기
            </Button>
          </div>
        </div>
      </section>

      {/* 통계 섹션 */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#2563eb] mb-2">
                500+
              </div>
              <p className="text-slate-700">누적 수업시간</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#2563eb] mb-2">
                30+
              </div>
              <p className="text-slate-700">협력 학교·기관</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#2563eb] mb-2">
                10+
              </div>
              <p className="text-slate-700">보유 교구 종류</p>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-[#2563eb] mb-2">
                100%
              </div>
              <p className="text-slate-700">전문 자격 보유</p>
            </div>
          </div>
        </div>
      </section>

      {/* 프로그램 섹션 */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-900">
            우리의 프로그램
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                초등 방과후 코딩
              </h3>
              <p className="text-slate-600 mb-4">
                초등학생을 위한 기초 코딩 교육으로 논리적 사고력과 창의력을
                키워갑니다.
              </p>
              <Link
                href="/programs"
                className="text-[#2563eb] font-medium hover:underline"
              >
                자세히 보기 →
              </Link>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                중학교 AI 교육
              </h3>
              <p className="text-slate-600 mb-4">
                인공지능의 기초부터 응용까지 실습 중심의 교육으로 미래 역량을
                갖춥니다.
              </p>
              <Link
                href="/programs"
                className="text-[#2563eb] font-medium hover:underline"
              >
                자세히 보기 →
              </Link>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                공공기관 체험
              </h3>
              <p className="text-slate-600 mb-4">
                다양한 공공기관 대상 맞춤형 SW·AI 교육 체험 프로그램입니다.
              </p>
              <Link
                href="/programs"
                className="text-[#2563eb] font-medium hover:underline"
              >
                자세히 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 특징 섹션 */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-900">
            우리의 특징
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                협동조합 방식
              </h3>
              <p className="text-slate-600">
                지역사회와 함께하는 협동조합 구조로 투명하고 윤리적인 교육을
                제공합니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                현장 중심
              </h3>
              <p className="text-slate-600">
                학교와 기관의 요구를 반영한 맞춤형 프로그램으로 실질적 역량을
                키웁니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">전문성</h3>
              <p className="text-slate-600">
                SW·AI 분야 전문 자격을 갖춘 강사들이 최신 교육 트렌드를
                반영합니다.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">맞춤형</h3>
              <p className="text-slate-600">
                학교·기관의 특성과 학생 수준에 맞춘 유연한 교육 설계와
                운영입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 교구 미리보기 섹션 */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-slate-900">
            보유 교구
          </h2>
          <p className="text-center text-slate-600 mb-8">
            다양한 교구로 창의적이고 실습 중심의 교육을 제공합니다.
          </p>
          <div className="text-center">
            <Button variant="primary" href="/equipment">
              전체 교구 보기
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
