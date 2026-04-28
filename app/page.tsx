import Image from "next/image";
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
            <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-pulse"></span>
              협동조합이 운영하는 코딩 교육
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight tracking-tight mb-6">
              <Typewriter
                text="미래를 여는 코딩 교육"
                speed={100}
                hideCursorOnComplete={true}
              />
            </h1>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-xl min-h-[4rem]">
              <Typewriter
                text="SW·AI 전문 협동조합으로 학교와 지역사회의 디지털 미래를 함께 열어갑니다."
                delay={1500}
                speed={60}
              />
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors text-sm"
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
              <Link
                href="/equipment"
                className="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-700 font-semibold px-6 py-3.5 rounded-xl border border-slate-200 transition-colors text-sm"
              >
                보유 교구 보기
              </Link>
            </div>
          </div>
          <StatsCounter />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="text-primary-600 text-xs font-semibold uppercase tracking-widest">
              About
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-3 mb-5 leading-tight">
              코딩스터디 협동조합은 SW·AI 교육 경험을 갖춘 교육 전문가들이 지역
              교육 네트워크를 바탕으로 협력과 나눔의 가치를 실천하고 있습니다.
            </h2>
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 text-primary-600 hover:text-primary-700 font-semibold text-sm"
            >
              조합 소개 자세히 보기
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
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-100">
              <div className="mb-2">
                <Image
                  src="/assets/sw.webp"
                  alt="SW·AI 교육"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">
                SW·AI 교육 프로그램 운영
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                실습 중심의 다양한 SW·AI 교육 운영
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100">
              <div className="mb-2">
                <Image
                  src="/assets/bui.webp"
                  alt="교육 프로그램 개발"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">
                교육 프로그램 개발
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                맞춤형 SW·AI 커리큘럼 연구·개발
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100">
              <div className="mb-2">
                <Image
                  src="/assets/te.webp"
                  alt="SW교육 강사 양성"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">
                SW교육 강사 양성
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                지역 현장 전문 강사 육성 프로그램
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100">
              <div className="mb-2">
                <Image
                  src="/assets/bui.webp"
                  alt="교구 대여 사업"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">
                교구 대여 사업
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                최신 디지털 교육 교구 저렴하게 대여
              </p>
            </div>
          </div>
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
            <p className="text-slate-500 text-sm">
              각 기관의 상황에 맞게 커리큘럼을 조정합니다.
            </p>
          </div>
          <ProgramCarousel />
          <div className="mt-8 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold text-sm"
            >
              맞춤 프로그램 문의하기
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
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-primary-600 text-xs font-semibold uppercase tracking-widest">
                Equipment
              </span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">
                보유 교구
              </h2>
            </div>
            <Link
              href="/equipment"
              className="text-sm text-primary-600 font-semibold hidden sm:flex items-center gap-1"
            >
              전체 보기
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
          <EquipmentSlider />
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
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-black font-bold px-6 py-3.5 rounded-xl border border-slate-200 transition-colors text-sm shadow-sm"
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
            <Link
              href="/about"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-3.5 rounded-xl border border-transparent transition-colors text-sm shadow-sm"
            >
              조합 소개 보기
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
