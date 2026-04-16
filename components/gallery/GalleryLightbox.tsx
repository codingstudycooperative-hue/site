"use client";

import { useState, useEffect, useCallback } from "react";

interface Image {
  id: string;
  url: string;
}

interface Props {
  images: Image[];
  albumTitle: string;
}

export default function GalleryLightbox({ images, albumTitle }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const goPrev = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % images.length);
  }, [activeIndex, images.length]);

  // 키보드 네비게이션
  useEffect(() => {
    if (activeIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeIndex, goPrev, goNext]);

  // 팝업 열릴 때 스크롤 잠금
  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeIndex]);

  if (images.length === 0) {
    return (
      <div className="text-center py-24 bg-slate-50 rounded-2xl border border-slate-100">
        <div className="text-5xl mb-4">📷</div>
        <p className="text-slate-500 font-medium">이 앨범에는 아직 이미지가 없습니다.</p>
      </div>
    );
  }

  return (
    <>
      {/* 이미지 그리드 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, index) => (
          <button
            key={img.id}
            onClick={() => openLightbox(index)}
            className="relative aspect-video rounded-2xl overflow-hidden bg-slate-100 group focus:outline-none focus:ring-2 focus:ring-primary-500"
            aria-label={`${albumTitle} 이미지 ${index + 1} 크게 보기`}
          >
            <img
              src={img.url}
              alt={`${albumTitle} ${index + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* 호버 오버레이 */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <span className="text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg">🔍</span>
            </div>
          </button>
        ))}
      </div>

      {/* 라이트박스 팝업 */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* 닫기 버튼 */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
            aria-label="닫기"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>

          {/* 이전 버튼 */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              aria-label="이전 이미지"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6"/>
              </svg>
            </button>
          )}

          {/* 메인 이미지 */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[activeIndex].url}
              alt={`${albumTitle} ${activeIndex + 1}`}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl select-none"
              draggable={false}
            />
          </div>

          {/* 다음 버튼 */}
          {images.length > 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
              aria-label="다음 이미지"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </button>
          )}

          {/* 하단 인디케이터 */}
          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <span className="text-white/60 text-sm font-medium">
                {activeIndex + 1} / {images.length}
              </span>
            </div>
          )}
        </div>
      )}
    </>
  );
}
