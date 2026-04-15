"use client";

import { useState } from "react";
import PageBanner from "@/components/ui/PageBanner";
import { achievements } from "@/data/achievements";

export default function AchievementsPage() {
  const [expandedYear, setExpandedYear] = useState<number | null>(
    achievements[0]?.year || null,
  );

  const stats = [
    { label: "50건+", description: "교육사업" },
    { label: "6년", description: "운영경험" },
    { label: "30곳+", description: "협력기관" },
    { label: "초·중·고·일반·특수", description: "교육대상" },
  ];

  return (
    <main>
      <PageBanner title="Achievements" subtitle="주요실적" />

      <div className="container mx-auto px-4 py-16">
        {/* 통계 카드 */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="rounded-lg border border-blue-200 bg-blue-50 p-8 text-center"
            >
              <div className="text-3xl font-bold text-blue-600">
                {stat.label}
              </div>
              <div className="mt-2 text-gray-700">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* 연도별 실적 */}
        <div className="max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold text-gray-800">
            연도별 운영 실적
          </h2>

          <div className="space-y-3">
            {achievements.map((achievement) => (
              <div
                key={achievement.year}
                className="overflow-hidden rounded-lg border border-gray-200"
              >
                <button
                  onClick={() =>
                    setExpandedYear(
                      expandedYear === achievement.year
                        ? null
                        : achievement.year,
                    )
                  }
                  className="w-full bg-gray-50 px-6 py-4 text-left hover:bg-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-800">
                      {achievement.year}년
                    </h3>
                    <span
                      className={`text-xl text-gray-600 transition-transform ${
                        expandedYear === achievement.year ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </div>
                </button>

                {expandedYear === achievement.year && (
                  <div className="border-t border-gray-200 bg-white px-6 py-4">
                    <ul className="space-y-3">
                      {achievement.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start text-gray-700"
                        >
                          <span className="mr-3 text-blue-600">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
