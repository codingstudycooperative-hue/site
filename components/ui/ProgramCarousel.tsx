"use client";

const PROGRAMS = [
  {
    emoji: "🧸",
    badge: "초등학교",
    badgeClass: "bg-blue-50 text-blue-700",
    title: "기초 코딩부터 메이커 프로젝트까지",
    desc: "놀이와 탐구를 바탕으로 컴퓨팅 사고력의 기초를 다지는 성장형 프로그램입니다.",
    items: [
      "마이크로비트 기초 탐험",
      "카미봇·핑퐁로봇 이동 및 명령",
      "레트로 게임 만들기",
      "생성형 AI 디지털 그림책 만들기",
    ],
    target: "초등학생 대상 (저/고학년 수준별 맞춤)",
  },
  {
    emoji: "🎒",
    badge: "중학교",
    badgeClass: "bg-green-50 text-green-700",
    title: "생활 속 문제를 직접 해결해보는 기술 탐구",
    desc: "기술의 원리를 이해하고, 데이터·AI·로봇을 활용해 스스로 해결책을 기획하는 프로젝트형 프로그램입니다.",
    items: [
      "스마트 IoT 프로젝트",
      "데이터 분석 탐구",
      "생성형 AI 웹·앱 제작",
      "스마트 시티 로봇 챌린지",
    ],
    target: "중학생 대상",
  },
  {
    emoji: "🎓",
    badge: "고등학교",
    badgeClass: "bg-indigo-50 text-indigo-700",
    title: "진로와 기술을 연결하는 심화형 시스템 설계",
    desc: "데이터·AI·IoT·로봇을 실제 서비스로 구현하고 탐구해 나아가는 진로밀착형 프로그램입니다.",
    items: [
      "Python 데이터 분석 프로젝트",
      "생성형 AI 웹·앱 제작",
      "IoT 피지컬 AI 시스템 설계",
      "문제 해결형 서비스 기획",
    ],
    target: "고등학생 대상",
  },
  {
    emoji: "🧩",
    badge: "특수교육",
    badgeClass: "bg-amber-50 text-amber-700",
    title: "참여 중심 SW·AI 프로그램",
    desc: "학생의 발달 수준과 표현 방식을 고려해 보고·누르고·움직이며 즉각적인 반응을 확인합니다.",
    items: [
      "AI·미래기술 체험",
      "움직이며 배우는 로봇 활동",
      "그림과 이야기로 만드는 AI",
    ],
    target: "특수교육 대상",
  },
  {
    emoji: "🏢",
    badge: "공공/일반",
    badgeClass: "bg-purple-50 text-purple-700",
    title: "유연한 맞춤형 프로그램",
    desc: "공공기관, 복지기관의 목적과 대상에 맞춰 기술을 쉽고 재미있게 체험할 수 있도록 구성합니다.",
    items: [
      "가족 참여 메이커 교실",
      "미래기술 체험 및 데이터 탐구",
      "디지털 시민성 및 리터러시",
    ],
    target: "아동·청소년·성인",
  },
];

export default function ProgramCarousel() {
  return (
    <div className="overflow-hidden relative w-full -mx-6 px-6 sm:mx-0 sm:px-0">
      <div
        className="flex gap-6 w-max animate-infinite-scroll hover:[animation-play-state:paused] pb-2 pt-1"
        style={{ animationDuration: "20s" }}
      >
        {[1, 2].map((group) => (
          <div key={group} className="flex gap-6" aria-hidden={group === 2}>
            {PROGRAMS.map((program, idx) => (
              <div
                key={idx}
                className="flex-none w-[340px] rounded-2xl p-7 flex flex-col gap-4 border bg-white border-slate-100 hover:border-primary-200 hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{program.emoji}</span>
                  <span
                    className={`text-xs font-semibold px-2.5 py-1 rounded-full ${program.badgeClass}`}
                  >
                    {program.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold mb-2 text-slate-900 leading-snug">
                    {program.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-500">
                    {program.desc}
                  </p>
                </div>
                <ul className="flex flex-col gap-2">
                  {program.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-primary-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-4 border-t text-xs border-slate-100 text-slate-400">
                  {program.target}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
