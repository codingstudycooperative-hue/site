"use client";

import { useRouter } from "next/navigation";

interface GalleryCard {
  id: string;
  title: string;
  category: string;
  year: number;
  thumbnailUrl?: string;
  imageCount: number;
}

interface Props {
  albums: GalleryCard[];
}

export default function GalleryGrid({ albums }: Props) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {albums.map((album) => (
        <div
          key={album.id}
          onClick={() => router.push(`/gallery/${album.id}`)}
          className="group bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md hover:border-primary-200 transition-all cursor-pointer flex flex-col"
        >
          {/* 썸네일 이미지 또는 플레이스홀더 */}
          <div className="relative h-60 bg-slate-100 overflow-hidden">
            {album.thumbnailUrl ? (
              <img
                src={album.thumbnailUrl}
                alt={album.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50">
                <span className="text-3xl mb-2 grayscale opacity-50">📷</span>
                <span className="text-slate-400 text-sm font-medium">이미지 없음</span>
              </div>
            )}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary-700 text-xs font-bold rounded-full shadow-sm">
                {album.category}
              </span>
            </div>
            <div className="absolute bottom-4 right-4 bg-slate-900/70 backdrop-blur-sm text-white px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1.5">
              <span>{album.imageCount}장</span>
            </div>
          </div>

          {/* 카드 정보 */}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 leading-snug group-hover:text-primary-600 transition-colors">
              {album.title}
            </h3>

            <div className="flex items-center justify-between text-sm text-slate-500 mt-auto pt-4 border-t border-slate-50">
              <span className="font-medium text-slate-400">{album.year}년</span>
              <span className="text-primary-600 font-bold group-hover:translate-x-1 transition-transform">
                보러가기 →
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
