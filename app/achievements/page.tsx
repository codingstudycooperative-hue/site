"use client";

import { useState } from "react";
import { achievements } from "@/data/achievements";

export default function AchievementsPage() {
  const [activeYear, setActiveYear] = useState<number>(
    achievements[0]?.year || new Date().getFullYear(),
  );

  const stats = [
    { label: "50건+", description: "총 실적 수" },
    { label: "6년", description: "운영 연수" },
    { label: "30곳+", description: "협력 기관" },
    { label: "초·중·고·일반·특수", description: "교육 대상" },
  ];

  const activeAchievement = achievements.find((a) => a.year === activeYear);

  return (
    <main>
      {/* Banner */}
      <div className="pt-28 pb-14 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary-600 text-xs font-semibold uppercase tracking-widest">
            Achievements
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4 leading-tight">
            주요실적
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
            2020년 설립 이후 꾸준히 쌓아온 교육 실적입니다.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <section className="py-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-5 text-center"
              >
                <p className="text-2xl font-black text-primary-600 mb-1">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500 font-medium">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Yearly Achievements Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Year Tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {achievements.map((achievement) => (
              <button
                key={achievement.year}
                onClick={() => setActiveYear(achievement.year)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all border shadow-sm ${
                  activeYear === achievement.year
                    ? "bg-primary-600 text-white border-primary-600"
                    : "bg-white text-slate-500 border-slate-200 hover:border-primary-300 hover:text-primary-600"
                }`}
              >
                {achievement.year}년
              </button>
            ))}
          </div>

          {/* Achievement Grid */}
          <div className="grid sm:grid-cols-2 gap-3">
            {activeAchievement?.items.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-primary-50 hover:border-primary-100 transition-all font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check w-5 h-5 text-primary-500 flex-shrink-0 mt-0.5"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span className="text-sm text-slate-700 leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
            
            {/* 엠프티 스테이트 (실적이 비어있을 경우) */}
            {(!activeAchievement || activeAchievement.items.length === 0) && (
              <div className="col-span-1 border border-slate-100 bg-slate-50 p-6 rounded-xl text-center text-slate-500 text-sm">
                해당 연도의 주요 실적이 없습니다.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
