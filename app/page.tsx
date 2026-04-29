import Link from "next/link";
import Typewriter from "@/components/ui/Typewriter";
import EquipmentSlider from "@/components/ui/EquipmentSlider";
import StatsCounter from "@/components/ui/StatsCounter";
import ProgramCarousel from "@/components/ui/ProgramCarousel";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-50/20 to-primary-50 pointer-events-none"></div>
        <div className="max-w-6xl mx-auto relative">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
              <Typewriter
                text="미래를 여는 코딩 교육"
                speed={100}
                hideCursorOnComplete={true}
              />
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 min-h-[4rem]">
              <Typewriter
                text="코딩스터디 협동조합은 학교와 지역사회가 함께, SW·AI로 디지털 미래를 준비합니다."
                delay={1500}
                speed={60}
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
              >
                조합 소개 자세히 보기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <StatsCounter />
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-primary-600 text-xs font-semibold uppercase tracking-widest">
              Programs
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-3">
              교육 프로그램
            </h2>
          </div>
          <ProgramCarousel />
          <div className="mt-8 text-center">
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm"
            >
              전체 프로그램 자세히 보기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <span className="text-primary-600 text-xs font-semibold uppercase tracking-widest">
              Equipment
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">
              보유 교구
            </h2>
          </div>
          <EquipmentSlider />
          <div className="mt-8 text-center">
            <Link
              href="/equipment"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm"
            >
              보유 교구 자세히 보기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            수업 의뢰 문의를 기다리고 있습니다
          </h2>
          <p className="text-slate-600 mb-8 max-w-xl mx-auto leading-relaxed">
            방과후 코딩 수업, 자유학기 AI 교육, 공공기관 체험 프로그램 — 어떤
            문의도 환영합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-3.5 rounded-xl border border-transparent transition-colors text-sm shadow-sm"
            >
              수업 의뢰하기
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
