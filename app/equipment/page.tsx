"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import PageBanner from "@/components/ui/PageBanner";
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
      <PageBanner title="Equipment" subtitle="보유교구" />

      <div className="container mx-auto px-4 py-16">
        {/* 카테고리 필터 탭 */}
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 교구 카드 그리드 */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {filteredEquipment.map((item) => (
            <Link key={item.slug} href={`/equipment/${item.slug}`}>
              <div className="h-full cursor-pointer rounded-lg border border-gray-200 p-5 transition-shadow hover:shadow-lg">
                <h3 className="mb-3 text-lg font-bold text-gray-800">
                  {item.name}
                </h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>
                    <span className="font-semibold">카테고리:</span>{" "}
                    {item.category}
                  </p>
                  <p>
                    <span className="font-semibold">대상:</span> {item.target}
                  </p>
                  <p>
                    <span className="font-semibold">최대인원:</span>{" "}
                    {item.maxHeadcount}명
                  </p>
                </div>
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
    </main>
  );
}
