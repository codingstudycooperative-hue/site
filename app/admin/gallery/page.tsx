"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import type { Database } from "@/types/database";

type Album = Database["public"]["Tables"]["gallery_albums"]["Row"];

interface AlbumWithImageCount extends Album {
  imageCount: number;
}

export default function GalleryPage() {
  const router = useRouter();
  const [albums, setAlbums] = useState<AlbumWithImageCount[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showNewAlbumForm, setShowNewAlbumForm] = useState(false);
  const [newAlbumTitle, setNewAlbumTitle] = useState("");
  const [newAlbumCategory, setNewAlbumCategory] = useState("");
  const [newAlbumYear, setNewAlbumYear] = useState(
    new Date().getFullYear().toString(),
  );
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const supabase = createClient();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { data: albumData, error: albumError } = (await (supabase as any)
          .from("gallery_albums")
          .select("*")
          .order("created_at", { ascending: false })) as {
          data: Album[] | null;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          error: any;
        };

        if (albumError) throw albumError;

        // 각 앨범의 이미지 수 조회
        const albumsWithCounts: AlbumWithImageCount[] = [];
        for (const album of albumData || []) {
          const { count } = await supabase
            .from("gallery_images")
            .select("*", { count: "exact", head: true })
            .eq("album_id", album.id);

          albumsWithCounts.push({
            ...album,
            imageCount: count || 0,
          });
        }

        setAlbums(albumsWithCounts);
      } catch (error) {
        console.error("앨범 조회 에러:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  const handleCreateAlbum = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newAlbumTitle.trim() || !newAlbumCategory.trim()) {
      alert("제목과 카테고리를 입력해주세요.");
      return;
    }

    setIsCreating(true);
    try {
      const supabase = createClient();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data, error } = (await (supabase as any)
        .from("gallery_albums")
        .insert({
          title: newAlbumTitle,
          category: newAlbumCategory,
          year: parseInt(newAlbumYear),
        })
        .select()
        .single()) as {
        data: Album | null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        error: any;
      };

      if (error) throw error;

      // 새 앨범 추가
      if (data) {
        setAlbums([
          {
            ...data,
            imageCount: 0,
          },
          ...albums,
        ]);
      }

      // 폼 초기화
      setNewAlbumTitle("");
      setNewAlbumCategory("");
      setNewAlbumYear(new Date().getFullYear().toString());
      setShowNewAlbumForm(false);
    } catch (error) {
      console.error("앨범 생성 에러:", error);
      alert("앨범 생성에 실패했습니다.");
    } finally {
      setIsCreating(false);
    }
  };

  const handleDeleteAlbum = async (albumId: string, albumTitle: string) => {
    if (
      !confirm(
        `"${albumTitle}" 앨범을 삭제하시겠습니까? 포함된 이미지도 함께 삭제됩니다.`,
      )
    ) {
      return;
    }

    try {
      const supabase = createClient();

      // 앨범의 모든 이미지 삭제
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { data: images, error: imageError } = (await (supabase as any)
        .from("gallery_images")
        .select("storage_path")
        .eq("album_id", albumId)) as {
        data: Array<{ storage_path: string }> | null;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        error: any;
      };

      if (imageError) throw imageError;

      // Storage에서 이미지 파일 삭제
      if (images && images.length > 0) {
        const paths = images.map((img) => img.storage_path);
        const { error: storageError } = await supabase.storage
          .from("gallery-images")
          .remove(paths);

        if (
          storageError &&
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (storageError as any).statusCode !== 404
        ) {
          console.error("Storage 파일 삭제 에러:", storageError);
        }
      }

      // 데이터베이스에서 이미지 레코드 삭제
      const { error: dbImageError } = await supabase
        .from("gallery_images")
        .delete()
        .eq("album_id", albumId);

      if (dbImageError) throw dbImageError;

      // 앨범 삭제
      const { error: albumError } = await supabase
        .from("gallery_albums")
        .delete()
        .eq("id", albumId);

      if (albumError) throw albumError;

      // UI에서 앨범 제거
      setAlbums(albums.filter((album) => album.id !== albumId));
    } catch (error) {
      console.error("앨범 삭제 에러:", error);
      alert("앨범 삭제에 실패했습니다.");
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="갤러리 관리">
        <div className="text-center py-12">
          <p className="text-gray-500">로딩 중...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="갤러리 관리">
      <div className="space-y-6">
        {/* 액션 버튼 */}
        <div className="flex gap-4 flex-wrap">
          <button
            onClick={() => setShowNewAlbumForm(!showNewAlbumForm)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors"
          >
            {showNewAlbumForm ? "폼 닫기" : "+ 새 앨범 추가"}
          </button>
          <button
            onClick={() => router.push("/admin/gallery/upload")}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
          >
            🖼️ 이미지 업로드
          </button>
        </div>

        {/* 새 앨범 생성 폼 */}
        {showNewAlbumForm && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              새 앨범 추가
            </h3>
            <form onSubmit={handleCreateAlbum} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  제목
                </label>
                <input
                  type="text"
                  value={newAlbumTitle}
                  onChange={(e) => setNewAlbumTitle(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="앨범 제목"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    카테고리
                  </label>
                  <input
                    type="text"
                    value={newAlbumCategory}
                    onChange={(e) => setNewAlbumCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    placeholder="예: 세미나, 워크숍"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    연도
                  </label>
                  <input
                    type="number"
                    value={newAlbumYear}
                    onChange={(e) => setNewAlbumYear(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isCreating}
                className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                {isCreating ? "생성 중..." : "앨범 생성"}
              </button>
            </form>
          </div>
        )}

        {/* 앨범 목록 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {albums.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      제목
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      카테고리
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      연도
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      이미지 수
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      액션
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {albums.map((album) => (
                    <tr
                      key={album.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">
                        {album.title}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {album.category}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {album.year}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">
                        {album.imageCount}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <button
                          onClick={() =>
                            handleDeleteAlbum(album.id, album.title)
                          }
                          className="px-3 py-1 bg-red-100 hover:bg-red-200 text-red-800 font-medium rounded transition-colors"
                        >
                          삭제
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              앨범이 없습니다. 새 앨범을 추가해주세요.
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
