"use client";

import { useEffect, useState } from "react";

interface LightboxImage {
  id: string;
  url: string;
}

interface Props {
  images: LightboxImage[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, onClose }: Props) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // ESC 키로 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, onClose]);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
      {/* 이미지 표시 */}
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <img
          src={currentImage.url}
          alt={`Image ${currentIndex + 1}`}
          className="max-w-full max-h-full object-contain"
        />

        {/* 이전 버튼 */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black rounded-full p-3 transition-all"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* 다음 버튼 */}
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 text-black rounded-full p-3 transition-all"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-75 text-black rounded-full p-3 transition-all"
          aria-label="Close lightbox"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* 이미지 카운터 */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-50 backdrop-blur px-4 py-2 rounded text-black text-sm font-medium">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
