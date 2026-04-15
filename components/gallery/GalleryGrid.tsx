"use client";

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
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {albums.map((album) => (
        <div
          key={album.id}
          className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow cursor-pointer"
        >
          {/* 썸네일 이미지 또는 플레이스홀더 */}
          <div className="relative h-64 bg-slate-200 overflow-hidden">
            {album.thumbnailUrl ? (
              <img
                src={album.thumbnailUrl}
                alt={album.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-slate-300">
                <span className="text-slate-500 text-sm">이미지 없음</span>
              </div>
            )}
          </div>

          {/* 카드 정보 */}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 line-clamp-2">
              {album.title}
            </h3>

            <div className="flex items-center justify-between text-sm text-slate-600 mb-3">
              <span className="px-2 py-1 bg-blue-50 text-blue-700 rounded">
                {album.category}
              </span>
              <span>{album.year}년</span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-500">{album.imageCount}개 사진</span>
              <span className="text-blue-600 group-hover:translate-x-1 transition-transform">
                →
              </span>
            </div>
          </div>

          {/* 추후 구현 표시 */}
          <div className="px-4 pb-4 pt-2 border-t border-slate-200 text-xs text-slate-500">
            라이트박스는 추후 구현 예정입니다.
          </div>
        </div>
      ))}
    </div>
  );
}
