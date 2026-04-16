import PageBanner from "@/components/ui/PageBanner";
import Link from "next/link";
import { ORGANIZATION_INFO } from "@/lib/constants";

export default function Programs() {
  return (
    <main>
      <PageBanner
        title="Programs"
        subtitle="교육 프로그램"
        description="다양한 교구와 실습 중심 수업을 바탕으로, 학교급과 대상 특성에 맞는 SW·AI 교육 프로그램을 운영합니다."
      />

      <div className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* 초등학교 */}
          <div className="bg-white rounded-3xl border border-slate-100 p-8 lg:p-10 hover:shadow-md hover:border-primary-200 transition-all">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 font-bold rounded-full text-sm mb-4">
                  <span>🧸</span> 초등학교
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  기초 코딩부터 메이커 프로젝트까지 쉽고 즐겁게 확장
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  놀이와 탐구를 바탕으로 컴퓨팅 사고력의 기초를 다지는 성장형
                  프로그램입니다.
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
                    대상 및 운영
                  </h4>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    초등학생 대상(저학년/고학년 수준별 맞춤) <br />
                    <span className="text-slate-500 font-normal">
                      정규수업, 늘봄학교, 방과후, 창체, 단기 특강 등
                    </span>
                  </p>
                </div>
              </div>

              <div className="lg:w-2/3 lg:border-l lg:border-slate-100 lg:pl-10">
                <h4 className="text-sm font-bold text-slate-700 mb-4">
                  주요 프로그램 예시
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "마이크로비트 기초 탐험",
                    "카미봇·핑퐁로봇 이동 및 명령",
                    "레트로 게임 만들기",
                    "지니어스 키트 스마트 프로젝트",
                    "레고 스파이크 프라임 챌린지",
                    "생성형 AI 디지털 그림책 만들기",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100"
                    >
                      <span className="text-primary-500 font-bold mt-0.5">
                        ·
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {[
                    "#기초코딩",
                    "#로봇활동",
                    "#센서활동",
                    "#피지컬컴퓨팅",
                    "#메이커교육",
                    "#AI창작",
                    "#프로젝트수업",
                    "#디지털표현",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-slate-100 text-slate-500 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 중학교 */}
          <div className="bg-white rounded-3xl border border-slate-100 p-8 lg:p-10 hover:shadow-md hover:border-primary-200 transition-all">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 font-bold rounded-full text-sm mb-4">
                  <span>🎒</span> 중학교
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  생활 속 문제를 직접 해결해보는 기술 탐구
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  기술의 원리를 이해하고, 데이터·AI·로봇을 활용해 스스로
                  해결책을 기획하는 프로젝트형 프로그램입니다.
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
                    대상 및 운영
                  </h4>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    중학생 대상 <br />
                    <span className="text-slate-500 font-normal">
                      자유학기제, 정규수업, 동아리, 캠프, 프로젝트형
                    </span>
                  </p>
                </div>
              </div>

              <div className="lg:w-2/3 lg:border-l lg:border-slate-100 lg:pl-10">
                <h4 className="text-sm font-bold text-slate-700 mb-4">
                  주요 프로그램 예시
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "스마트 IoT 프로젝트",
                    "데이터 분석 탐구",
                    "생성형 AI 맞춤형 웹·앱 제작",
                    "AI 디지털 스토리텔링",
                    "스마트 시티 로봇 챌린지",
                    "인터랙티브 게임 창작",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100"
                    >
                      <span className="text-primary-500 font-bold mt-0.5">
                        ·
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {[
                    "#프로젝트수업",
                    "#데이터탐구",
                    "#생성형AI",
                    "#로봇공학",
                    "#스마트시티",
                    "#웹앱제작",
                    "#문제해결",
                    "#융합형수업",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-slate-100 text-slate-500 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 고등학교 */}
          <div className="bg-white rounded-3xl border border-slate-100 p-8 lg:p-10 hover:shadow-md hover:border-primary-200 transition-all">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 font-bold rounded-full text-sm mb-4">
                  <span>🎓</span> 고등학교
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                  진로와 기술을 연결하는 심화형 시스템 설계
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6">
                  데이터·AI·IoT·로봇을 실제 서비스로 구현하고 탐구해 나아가는
                  진로밀착형 프로그램입니다.
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
                    대상 및 운영
                  </h4>
                  <p className="text-sm text-slate-700 font-medium leading-relaxed">
                    고등학생 대상 <br />
                    <span className="text-slate-500 font-normal">
                      선택과목 연계, 진로집중 동아리, 단기 캠프 특강
                    </span>
                  </p>
                </div>
              </div>

              <div className="lg:w-2/3 lg:border-l lg:border-slate-100 lg:pl-10">
                <h4 className="text-sm font-bold text-slate-700 mb-4">
                  주요 프로그램 예시
                </h4>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Python 데이터 분석 프로젝트",
                    "생성형 AI 웹·앱 제작",
                    "IoT 피지컬 AI 시스템 설계",
                    "스마트 시티·로봇공학 프로젝트",
                    "AI 디지털 콘텐츠 제작",
                    "문제 해결형 서비스 기획",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100"
                    >
                      <span className="text-primary-500 font-bold mt-0.5">
                        ·
                      </span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {[
                    "#진로연계",
                    "#심화탐구",
                    "#데이터분석",
                    "#생성형AI",
                    "#IoT프로젝트",
                    "#로봇공학",
                    "#서비스기획",
                    "#융합교육",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-slate-100 text-slate-500 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 특수교육 & 기타 반반 그리드 */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 특수교육 */}
            <div className="bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-md hover:border-primary-200 transition-all flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 font-bold rounded-full text-sm mb-4 w-fit">
                <span>🧩</span> 특수교육
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                참여 중심 SW·AI 프로그램
              </h3>
              <p className="text-sm text-slate-500 mb-6 flex-1">
                학생의 발달 수준과 표현 방식을 고려해 보고·누르고·움직이며
                즉각적인 반응을 확인합니다.
              </p>
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
                  주요 프로그램
                </h4>
                <ul className="space-y-2">
                  {[
                    "AI·미래기술 체험",
                    "움직이며 배우는 로봇 활동",
                    "그림과 이야기로 만드는 AI",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-sm text-slate-600 flex items-center gap-2"
                    >
                      <span className="text-primary-500 font-bold">·</span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                {["#개별화교육", "#참여중심수업", "#즉각적피드백"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>

            {/* 기타/일반 */}
            <div className="bg-white rounded-3xl border border-slate-100 p-8 hover:shadow-md hover:border-primary-200 transition-all flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 font-bold rounded-full text-sm mb-4 w-fit">
                <span>🏢</span> 공공/일반
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                유연한 맞춤형 프로그램
              </h3>
              <p className="text-sm text-slate-500 mb-6 flex-1">
                공공기관, 복지기관의 목적과 대상에 맞춰 기술을 쉽고 재미있게
                체험할 수 있도록 구성합니다.
              </p>
              <div className="mb-6">
                <h4 className="text-xs font-bold text-slate-400 mb-2 uppercase tracking-wide">
                  주요 프로그램
                </h4>
                <ul className="space-y-2">
                  {[
                    "가족 참여 메이커 교실",
                    "미래기술 체험 및 데이터 탐구",
                    "디지털 시민성 및 리터러시",
                  ].map((item) => (
                    <li
                      key={item}
                      className="text-sm text-slate-600 flex items-center gap-2"
                    >
                      <span className="text-primary-500 font-bold">·</span>{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-50">
                {["#기관연계", "#미래기술체험", "#디지털리터러시"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-slate-100 text-slate-500 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>

        {/* 문의 섹션 */}
        <div className="max-w-6xl mx-auto mt-16 pb-16">
          <section className="bg-slate-50 border border-slate-100 rounded-3xl p-12 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              맞춤형 프로그램 문의
            </h2>
            <p className="text-slate-600 mb-8 max-w-lg mx-auto leading-relaxed text-sm lg:text-base">
              학교와 기관의 특성과 예산, 요구사항에 맞춘 커리큘럼을 제안해
              드립니다. 전화 또는 온라인 문의로 상세한 상담을 받아보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${ORGANIZATION_INFO.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 bg-white border border-slate-200 text-slate-700 px-8 py-3.5 rounded-full font-bold hover:border-primary-300 hover:text-primary-600 transition-colors shadow-sm"
              >
                <span className="text-xl">📞</span> {ORGANIZATION_INFO.phone}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-primary-700 transition-colors shadow-sm"
              >
                <span className="text-xl">✍️</span> 온라인 문의 접수
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
