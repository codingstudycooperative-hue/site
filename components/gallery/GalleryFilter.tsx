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
        <div className="flex flex-col sm:flex-row gap-6">
          {/* 연도 필터 */}
          <div className="flex-shrink-0">
            <h3 className="text-sm font-bold text-slate-700 mb-3">
              연도별
            </h3>
            <select
              value={selectedYear === null ? "" : selectedYear}
              onChange={(e) =>
                setSelectedYear(
                  e.target.value === "" ? null : parseInt(e.target.value),
                )
              }
              className="w-full sm:w-40 px-4 py-2 border border-slate-200 bg-slate-50 rounded-lg focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 font-medium text-slate-700 transition-colors"
            >
              <option value="">전체 기록</option>
              {sortedYears.map((year) => (
                <option key={year} value={year}>
                  {year}년
                </option>
              ))}
            </select>
          </div>

          {/* 카테고리 필터 (탭) */}
          {categories.length > 0 && (
            <div className="flex-1">
              <h3 className="text-sm font-bold text-slate-700 mb-3">
                활동 분야
              </h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all border shadow-sm ${
                    selectedCategory === null
                      ? "bg-primary-600 text-white border-primary-600"
                      : "bg-white text-slate-500 border-slate-200 hover:border-primary-300 hover:text-primary-600"
                  }`}
                >
                  전체
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all border shadow-sm ${
                      selectedCategory === category
                        ? "bg-primary-600 text-white border-primary-600"
                        : "bg-white text-slate-500 border-slate-200 hover:border-primary-300 hover:text-primary-600"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 검색 결과 */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
        <div className="w-1 h-5 bg-primary-600 rounded-full"></div>
        <p className="font-bold text-slate-800">
          총 <span className="text-primary-600">{filteredAlbums.length}</span>개의 앨범이 있습니다
        </p>
      </div>

      {/* 갤러리 그리드 */}
      {filteredAlbums.length > 0 ? (
        <GalleryGrid albums={filteredAlbums} />
      ) : (
        <div className="text-center py-20 bg-slate-50 border border-slate-100 rounded-2xl">
          <div className="text-4xl mb-4">📭</div>
          <p className="text-slate-500 font-medium">
            해당 조건의 갤러리 앨범이 아직 등록되지 않았습니다.
          </p>
        </div>
      )}
    </div>
  );
}
