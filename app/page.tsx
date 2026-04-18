import Link from "next/link";
import Typewriter from "@/components/ui/Typewriter";
import EquipmentSlider from "@/components/ui/EquipmentSlider";
import StatsCounter from "@/components/ui/StatsCounter";

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
              교육을 함께 만드는
              <br />
              협동조합입니다
            </h2>
            <p className="text-slate-500 leading-relaxed mb-5">
              코딩스터디 협동조합은 코딩 교육 전문가들이 모여 설립한 사회적경제
              조직입니다. 이윤보다 교육의 질을 우선하며, 조합원 모두가
              전문가이자 의사결정자로 함께 운영합니다.
            </p>
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
              <div className="text-2xl mb-2">🤝</div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">
                협동조합 방식
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                민주적 의사결정, 교육 품질 우선
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100">
              <div className="text-2xl mb-2">📚</div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">
                현장 중심 교육
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                학교 현장 경험 기반 커리큘럼
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100">
              <div className="text-2xl mb-2">🏆</div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">
                검증된 전문성
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                정식 자격증 보유 강사진
              </p>
            </div>
            <div className="bg-white p-5 rounded-2xl border border-slate-100">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold text-slate-900 text-sm mb-1">
                맞춤형 수업
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                기관 상황에 맞는 커스텀 설계
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
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-7 flex flex-col gap-4 border transition-all hover:shadow-md bg-white border-slate-100">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full w-fit bg-green-50 text-green-700">
                초등학교
              </span>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  방과후 코딩 교실
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  스크래치, 엔트리 블록 코딩부터 텍스트 코딩 입문까지. 놀이처럼
                  배우는 코딩 수업.
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary-400"></span>
                  블록 코딩 (스크래치·엔트리)
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary-400"></span>
                  피지컬 컴퓨팅 (마이크로비트)
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary-400"></span>
                  게임 만들기 프로젝트
                </li>
              </ul>
              <div className="mt-auto pt-4 border-t text-xs border-slate-100 text-slate-400">
                대상: 초등 1~6학년
              </div>
            </div>
            <div className="rounded-2xl p-7 flex flex-col gap-4 border transition-all hover:shadow-md bg-primary-600 border-primary-600">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full w-fit bg-white/20 text-white">
                중학교
              </span>
              <div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  자유학기·AI 교육
                </h3>
                <p className="text-sm leading-relaxed text-blue-100">
                  자유학기제 진로 연계 코딩 수업. 파이썬 기초부터 AI 원리
                  체험까지.
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-sm text-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-300"></span>
                  파이썬 기초 프로그래밍
                </li>
                <li className="flex items-center gap-2 text-sm text-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-300"></span>
                  AI·머신러닝 원리 체험
                </li>
                <li className="flex items-center gap-2 text-sm text-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-300"></span>
                  자유학기 연계 프로젝트
                </li>
              </ul>
              <div className="mt-auto pt-4 border-t text-xs border-white/20 text-blue-200">
                대상: 중학교 1~3학년
              </div>
            </div>
            <div className="rounded-2xl p-7 flex flex-col gap-4 border transition-all hover:shadow-md bg-white border-slate-100">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full w-fit bg-purple-50 text-purple-700">
                공공기관
              </span>
              <div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  체험 프로그램
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">
                  도서관, 주민센터, 복지관 등 공공기관 대상 단기 체험 프로그램.
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary-400"></span>
                  드론·코딩 체험
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary-400"></span>
                  VR·AR 콘텐츠 체험
                </li>
                <li className="flex items-center gap-2 text-sm text-slate-600">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary-400"></span>
                  3D 프린팅 체험
                </li>
              </ul>
              <div className="mt-auto pt-4 border-t text-xs border-slate-100 text-slate-400">
                대상: 아동·청소년·성인
              </div>
            </div>
          </div>
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
