"use client";

import { useState, useMemo } from "react";
import GalleryGrid from "./GalleryGrid";

interface Album {
  id: string;
  title: string;
  category: string;
  year: number;
  thumbnailUrl?: string;
  imageCount: number;
}

interface Props {
  albums: Album[];
  categories: string[];
  years: number[];
}

export default function GalleryFilter({ albums, categories, years }: Props) {
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // 필터링된 앨범 계산
  const filteredAlbums = useMemo(() => {
    return albums.filter((album) => {
      const yearMatch = selectedYear === null || album.year === selectedYear;
      const categoryMatch =
        selectedCategory === null || album.category === selectedCategory;
      return yearMatch && categoryMatch;
    });
  }, [albums, selectedYear, selectedCategory]);

  // 연도 정렬 (최신순)
  const sortedYears = useMemo(() => {
    return [...years].sort((a, b) => b - a);
  }, [years]);

  return (
    <div>
      {/* 필터 섹션 */}
      <div className="mb-10 space-y-6">
        {/* 연도 필터 */}
        <div>
          <h3 className="text-sm font-semibold text-slate-700 mb-3">연도</h3>
          <select
            value={selectedYear === null ? "" : selectedYear}
            onChange={(e) =>
              setSelectedYear(
                e.target.value === "" ? null : parseInt(e.target.value),
              )
            }
            className="w-full md:w-64 px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">전체</option>
            {sortedYears.map((year) => (
              <option key={year} value={year}>
                {year}년
              </option>
            ))}
          </select>
        </div>

        {/* 카테고리 필터 (탭) */}
        {categories.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-3">
              카테고리
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded font-medium transition-colors ${
                  selectedCategory === null
                    ? "bg-blue-600 text-white"
                    : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                }`}
              >
                전체
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 검색 결과 */}
      <div className="mb-6">
        <p className="text-slate-600">
          총 <span className="font-semibold">{filteredAlbums.length}</span>개의
          앨범
        </p>
      </div>

      {/* 갤러리 그리드 */}
      {filteredAlbums.length > 0 ? (
        <GalleryGrid albums={filteredAlbums} />
      ) : (
        <div className="text-center py-12">
          <p className="text-slate-500">
            검색 결과가 없습니다. 필터를 변경해주세요.
          </p>
        </div>
      )}
    </div>
  );
}
