"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { equipment } from "@/data/equipment";

const categories = [
  "전체",
  "피지컬 컴퓨팅",
  "로봇",
  "드론",
  "3D",
  "IoT",
  "IT 기기",
  "언플러그드",
];

export default function EquipmentPage() {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const filteredEquipment = useMemo(() => {
    if (selectedCategory === "전체") {
      return equipment;
    }
    return equipment.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main>
      <div className="pt-28 pb-14 px-6 bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <span className="text-primary-600 text-xs font-semibold uppercase tracking-widest">
            Equipment
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-3 mb-4 leading-tight">
            보유 교구
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl leading-relaxed">
            다양한 교구를 보유하여 별도 구매 없이 수업을 진행합니다. 교구 대여도
            가능합니다.
          </p>
        </div>
      </div>
      
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm font-medium px-4 py-2 rounded-full border transition-all ${
                  selectedCategory === category
                    ? "bg-primary-600 text-white border-primary-600"
                    : "bg-white text-slate-500 border-slate-200 hover:border-primary-300 hover:text-primary-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredEquipment.map((item) => (
              <Link
                key={item.slug}
                href={`/equipment/${item.slug}`}
                className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all block"
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <div className="mb-3">
                  <span className="text-xs bg-slate-50 text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>
                <h3 className="font-bold text-slate-900 mb-1.5 group-hover:text-primary-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-2">
                  {item.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span>{item.target}</span>
                  <span>·</span>
                  <span>최대 {item.maxHeadcount}명</span>
                </div>
              </Link>
            ))}
          </div>

          {filteredEquipment.length === 0 && (
            <div className="py-16 text-center text-gray-500">
              해당 카테고리의 교구가 없습니다.
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
