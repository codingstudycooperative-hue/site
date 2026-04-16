"use client";

import React, { useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import type { Database } from "@/types/database";

type Album = Database["public"]["Tables"]["gallery_albums"]["Row"];

interface AlbumWithImageCount extends Album {
  imageCount: number;
}

interface FileWithPreview extends File {
  preview: string;
}

export default function GalleryPage() {
  const [albums, setAlbums] = useState<AlbumWithImageCount[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // 새 앨범 폼
  const [showNewAlbumForm, setShowNewAlbumForm] = useState(false);
  const [newAlbumTitle, setNewAlbumTitle] = useState("");
  const [newAlbumCategory, setNewAlbumCategory] = useState("");
  const [newAlbumYear, setNewAlbumYear] = useState(
    new Date().getFullYear().toString(),
  );
  const [newAlbumDescription, setNewAlbumDescription] = useState("");
  const [newAlbumFiles, setNewAlbumFiles] = useState<FileWithPreview[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [createMessage, setCreateMessage] = useState("");

  // 기존 앨범 이미지 추가
  const [expandedAlbumId, setExpandedAlbumId] = useState<string | null>(null);
  const [uploadFiles, setUploadFiles] = useState<FileWithPreview[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    fetchAlbums();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const fetchAlbums = async () => {
    try {
      const supabase = createClient();
      const { data: albumData, error: albumError } = await supabase
        .from("gallery_albums")
        .select("*")
        .order("created_at", { ascending: false });

      if (albumError) throw albumError;

      const albumsWithCounts: AlbumWithImageCount[] = await Promise.all(
        (albumData || []).map(async (album) => {
          const { count } = await supabase
            .from("gallery_images")
            .select("*", { count: "exact", head: true })
            .eq("album_id", album.id);
          return { ...album, imageCount: count || 0 };
        }),
      );

      setAlbums(albumsWithCounts);
    } catch (error) {
      console.error("앨범 조회 에러:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // 파일 선택 (새 앨범용)
  const handleNewAlbumFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []).map((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) }),
    ) as FileWithPreview[];
    setNewAlbumFiles((prev) => [...prev, ...selected]);
    e.target.value = "";
  };

  const removeNewAlbumFile = (index: number) => {
    setNewAlbumFiles((prev) => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  const moveNewAlbumFile = (index: number, direction: "up" | "down") => {
    setNewAlbumFiles((prev) => {
      const next = [...prev];
      const target = direction === "up" ? index - 1 : index + 1;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  // 새 앨범 생성 + 이미지 업로드
  const handleCreateAlbum = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAlbumTitle.trim() || !newAlbumCategory.trim()) {
      setCreateMessage("제목과 카테고리를 입력해주세요.");
      return;
    }

    setIsCreating(true);
    setCreateMessage("");

    try {
      const supabase = createClient();

      // 앨범 생성
      const { data: albumData, error: albumError } = await supabase
        .from("gallery_albums")
        .insert({
          title: newAlbumTitle,
          category: newAlbumCategory,
          year: parseInt(newAlbumYear),
          description: newAlbumDescription.trim() || null,
        })
        .select()
        .single();

      if (albumError) throw albumError;

      // 이미지 업로드 (선택한 파일이 있을 경우)
      let uploadedCount = 0;
      if (newAlbumFiles.length > 0) {
        await Promise.all(
          newAlbumFiles.map(async (file, i) => {
            const filePath = `${albumData.id}/${Date.now()}-${i}-${file.name}`;
            const { error: uploadError } = await supabase.storage
              .from("gallery-images")
              .upload(filePath, file);
            if (uploadError) {
              console.error(`파일 업로드 에러 (${file.name}):`, uploadError);
              return;
            }
            await supabase.from("gallery_images").insert({
              album_id: albumData.id,
              storage_path: filePath,
              order_num: i + 1,
            });
            uploadedCount++;
          }),
        );
      }

      // 미리보기 URL 해제
      newAlbumFiles.forEach((f) => URL.revokeObjectURL(f.preview));

      // 목록 갱신
      setAlbums((prev) => [
        { ...albumData, imageCount: uploadedCount },
        ...prev,
      ]);

      // 폼 초기화
      setNewAlbumTitle("");
      setNewAlbumCategory("");
      setNewAlbumYear(new Date().getFullYear().toString());
      setNewAlbumDescription("");
      setNewAlbumFiles([]);
      setShowNewAlbumForm(false);
      setCreateMessage("");
    } catch (error) {
      console.error("앨범 생성 에러:", error);
      setCreateMessage("앨범 생성에 실패했습니다.");
    } finally {
      setIsCreating(false);
    }
  };

  // 기존 앨범 이미지 추가용 파일 선택
  const handleUploadFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = Array.from(e.target.files || []).map((file) =>
      Object.assign(file, { preview: URL.createObjectURL(file) }),
    ) as FileWithPreview[];
    setUploadFiles((prev) => [...prev, ...selected]);
    e.target.value = "";
  };

  const removeUploadFile = (index: number) => {
    setUploadFiles((prev) => {
      URL.revokeObjectURL(prev[index].preview);
      return prev.filter((_, i) => i !== index);
    });
  };

  const moveUploadFile = (index: number, direction: "up" | "down") => {
    setUploadFiles((prev) => {
      const next = [...prev];
      const target = direction === "up" ? index - 1 : index + 1;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  };

  const toggleAlbumUpload = (albumId: string) => {
    if (expandedAlbumId === albumId) {
      // 닫기: 미리보기 URL 정리
      uploadFiles.forEach((f) => URL.revokeObjectURL(f.preview));
      setUploadFiles([]);
      setUploadMessage("");
      setExpandedAlbumId(null);
    } else {
      uploadFiles.forEach((f) => URL.revokeObjectURL(f.preview));
      setUploadFiles([]);
      setUploadMessage("");
      setExpandedAlbumId(albumId);
    }
  };

  // 기존 앨범에 이미지 업로드
  const handleUploadImages = async (albumId: string) => {
    if (uploadFiles.length === 0) {
      setUploadMessage("이미지를 선택해주세요.");
      return;
    }

    setIsUploading(true);
    setUploadMessage("");

    try {
      const supabase = createClient();
      let uploadedCount = 0;

      await Promise.all(
        uploadFiles.map(async (file, i) => {
          const filePath = `${albumId}/${Date.now()}-${i}-${file.name}`;
          const { error: uploadError } = await supabase.storage
            .from("gallery-images")
            .upload(filePath, file);
          if (uploadError) {
            console.error(`파일 업로드 에러 (${file.name}):`, uploadError);
            return;
          }
          await supabase.from("gallery_images").insert({
            album_id: albumId,
            storage_path: filePath,
            order_num: i + 1,
          });
          uploadedCount++;
        }),
      );

      uploadFiles.forEach((f) => URL.revokeObjectURL(f.preview));

      // 이미지 수 업데이트
      setAlbums((prev) =>
        prev.map((a) =>
          a.id === albumId
            ? { ...a, imageCount: a.imageCount + uploadedCount }
            : a,
        ),
      );

      setUploadMessage(`${uploadedCount}개 이미지가 추가되었습니다.`);
      setUploadFiles([]);

      timerRef.current = setTimeout(() => {
        setUploadMessage("");
        setExpandedAlbumId(null);
      }, 2000);
    } catch (error) {
      console.error("업로드 에러:", error);
      setUploadMessage("업로드 중 오류가 발생했습니다.");
    } finally {
      setIsUploading(false);
    }
  };

  // 앨범 삭제
  const handleDeleteAlbum = async (albumId: string, albumTitle: string) => {
    if (
      !confirm(
        `"${albumTitle}" 앨범을 삭제하시겠습니까? 포함된 이미지도 함께 삭제됩니다.`,
      )
    )
      return;

    try {
      const supabase = createClient();

      const { data: images, error: imageError } = await supabase
        .from("gallery_images")
        .select("storage_path")
        .eq("album_id", albumId);

      if (imageError) throw imageError;

      if (images && images.length > 0) {
        const { error: storageError } = await supabase.storage
          .from("gallery-images")
          .remove(images.map((img) => img.storage_path));
        if (storageError && storageError.message !== "Not Found") {
          console.error("Storage 파일 삭제 에러:", storageError);
        }
      }

      const { error: dbImageError } = await supabase
        .from("gallery_images")
        .delete()
        .eq("album_id", albumId);
      if (dbImageError) throw dbImageError;

      const { error: albumError } = await supabase
        .from("gallery_albums")
        .delete()
        .eq("id", albumId);
      if (albumError) throw albumError;

      if (expandedAlbumId === albumId) setExpandedAlbumId(null);
      setAlbums((prev) => prev.filter((a) => a.id !== albumId));
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
        {/* 새 앨범 추가 버튼 */}
        <div>
          <button
            onClick={() => {
              setShowNewAlbumForm(!showNewAlbumForm);
              setCreateMessage("");
            }}
            className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            {showNewAlbumForm ? "✕ 닫기" : "+ 새 앨범 추가"}
          </button>
        </div>

        {/* 새 앨범 생성 폼 */}
        {showNewAlbumForm && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              새 앨범 추가
            </h3>
            <form onSubmit={handleCreateAlbum} className="space-y-5">
              {/* 앨범 정보 */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    앨범 제목 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={newAlbumTitle}
                    onChange={(e) => setNewAlbumTitle(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="앨범 제목"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    카테고리 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={newAlbumCategory}
                    onChange={(e) => setNewAlbumCategory(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>

              {/* 앨범 내용 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  내용{" "}
                  <span className="text-gray-400 font-normal">(선택사항)</span>
                </label>
                <textarea
                  value={newAlbumDescription}
                  onChange={(e) => setNewAlbumDescription(e.target.value)}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
                  placeholder="앨범 설명이나 행사 내용을 입력하세요"
                />
              </div>

              {/* 이미지 선택 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이미지 추가{" "}
                  <span className="text-gray-400 font-normal">(선택사항)</span>
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary-500 transition-colors">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleNewAlbumFileSelect}
                    className="hidden"
                    id="new-album-file-input"
                  />
                  <label
                    htmlFor="new-album-file-input"
                    className="cursor-pointer block"
                  >
                    <p className="text-gray-500 text-sm">
                      클릭하여 이미지 선택 (JPG, PNG, WebP 등)
                    </p>
                  </label>
                </div>

                {newAlbumFiles.length > 0 && (
                  <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mt-3">
                    {newAlbumFiles.map((file, index) => (
                      <div
                        key={`${file.name}-${index}`}
                        className="relative group flex flex-col gap-1"
                      >
                        <div className="relative">
                          <img
                            src={file.preview}
                            alt={file.name}
                            className="w-full h-20 object-cover rounded-lg"
                          />
                          <span className="absolute top-1 left-1 bg-black/60 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => removeNewAlbumFile(index)}
                            className="absolute top-1 right-1 bg-red-500 hover:bg-red-600 text-white w-5 h-5 rounded-full text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            ✕
                          </button>
                        </div>
                        <div className="flex gap-1">
                          <button
                            type="button"
                            onClick={() => moveNewAlbumFile(index, "up")}
                            disabled={index === 0}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 disabled:opacity-30 text-gray-700 text-xs py-0.5 rounded"
                          >
                            ◀
                          </button>
                          <button
                            type="button"
                            onClick={() => moveNewAlbumFile(index, "down")}
                            disabled={index === newAlbumFiles.length - 1}
                            className="flex-1 bg-gray-100 hover:bg-gray-200 disabled:opacity-30 text-gray-700 text-xs py-0.5 rounded"
                          >
                            ▶
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {createMessage && (
                <p className="text-red-600 text-sm">{createMessage}</p>
              )}

              <div className="flex gap-3">
                <button
                  type="submit"
                  disabled={isCreating}
                  className="px-6 py-2 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold rounded-lg transition-colors"
                >
                  {isCreating
                    ? "생성 중..."
                    : newAlbumFiles.length > 0
                      ? `앨범 생성 + 이미지 ${newAlbumFiles.length}장 업로드`
                      : "앨범 생성"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    newAlbumFiles.forEach((f) =>
                      URL.revokeObjectURL(f.preview),
                    );
                    setNewAlbumFiles([]);
                    setNewAlbumTitle("");
                    setNewAlbumCategory("");
                    setNewAlbumYear(new Date().getFullYear().toString());
                    setNewAlbumDescription("");
                    setCreateMessage("");
                  }}
                  className="px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-lg transition-colors"
                >
                  초기화
                </button>
              </div>
            </form>
          </div>
        )}

        {/* 앨범 목록 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {albums.length > 0 ? (
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
                  <React.Fragment key={album.id}>
                    {/* 앨범 행 */}
                    <tr className="hover:bg-gray-50 transition-colors">
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
                        {album.imageCount}장
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex gap-2">
                          <button
                            onClick={() => toggleAlbumUpload(album.id)}
                            className={`px-3 py-1 font-medium rounded transition-colors text-xs ${
                              expandedAlbumId === album.id
                                ? "bg-gray-200 hover:bg-gray-300 text-gray-700"
                                : "bg-primary-100 hover:bg-primary-200 text-primary-800"
                            }`}
                          >
                            {expandedAlbumId === album.id
                              ? "닫기"
                              : "+ 이미지 추가"}
                          </button>
                          <button
                            onClick={() =>
                              handleDeleteAlbum(album.id, album.title)
                            }
                            className="px-3 py-1 bg-red-100 hover:bg-red-200 text-red-800 font-medium rounded transition-colors text-xs"
                          >
                            삭제
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* 이미지 업로드 인라인 영역 */}
                    {expandedAlbumId === album.id && (
                      <tr>
                        <td
                          colSpan={5}
                          className="px-6 py-4 bg-gray-50 border-t border-gray-100"
                        >
                          <div className="space-y-4">
                            <p className="text-sm font-medium text-gray-700">
                              <span className="text-primary-700">
                                {album.title}
                              </span>{" "}
                              앨범에 이미지 추가
                            </p>

                            {/* 파일 선택 */}
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-5 text-center hover:border-primary-500 transition-colors">
                              <input
                                type="file"
                                multiple
                                accept="image/*"
                                onChange={handleUploadFileSelect}
                                className="hidden"
                                id={`upload-input-${album.id}`}
                                disabled={isUploading}
                              />
                              <label
                                htmlFor={`upload-input-${album.id}`}
                                className="cursor-pointer block text-sm text-gray-500"
                              >
                                클릭하여 이미지 선택
                              </label>
                            </div>

                            {/* 미리보기 */}
                            {uploadFiles.length > 0 && (
                              <div className="grid grid-cols-3 md:grid-cols-8 gap-2">
                                {uploadFiles.map((file, index) => (
                                  <div
                                    key={`${file.name}-${index}`}
                                    className="relative group flex flex-col gap-1"
                                  >
                                    <div className="relative">
                                      <img
                                        src={file.preview}
                                        alt={file.name}
                                        className="w-full h-16 object-cover rounded"
                                      />
                                      <span className="absolute top-0.5 left-0.5 bg-black/60 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                        {index + 1}
                                      </span>
                                      <button
                                        type="button"
                                        onClick={() => removeUploadFile(index)}
                                        className="absolute top-0.5 right-0.5 bg-red-500 hover:bg-red-600 text-white w-4 h-4 rounded-full text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                      >
                                        ✕
                                      </button>
                                    </div>
                                    <div className="flex gap-0.5">
                                      <button
                                        type="button"
                                        onClick={() =>
                                          moveUploadFile(index, "up")
                                        }
                                        disabled={index === 0}
                                        className="flex-1 bg-gray-100 hover:bg-gray-200 disabled:opacity-30 text-gray-700 text-xs py-0.5 rounded"
                                      >
                                        ◀
                                      </button>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          moveUploadFile(index, "down")
                                        }
                                        disabled={
                                          index === uploadFiles.length - 1
                                        }
                                        className="flex-1 bg-gray-100 hover:bg-gray-200 disabled:opacity-30 text-gray-700 text-xs py-0.5 rounded"
                                      >
                                        ▶
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* 메시지 */}
                            {uploadMessage && (
                              <p
                                className={`text-sm font-medium ${
                                  uploadMessage.includes("추가")
                                    ? "text-green-600"
                                    : "text-red-600"
                                }`}
                              >
                                {uploadMessage}
                              </p>
                            )}

                            {/* 업로드 버튼 */}
                            <div className="flex gap-2">
                              <button
                                onClick={() => handleUploadImages(album.id)}
                                disabled={
                                  isUploading || uploadFiles.length === 0
                                }
                                className="px-4 py-2 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white text-sm font-semibold rounded-lg transition-colors"
                              >
                                {isUploading
                                  ? "업로드 중..."
                                  : `이미지 ${uploadFiles.length}장 업로드`}
                              </button>
                              <button
                                type="button"
                                onClick={() => {
                                  uploadFiles.forEach((f) =>
                                    URL.revokeObjectURL(f.preview),
                                  );
                                  setUploadFiles([]);
                                  setUploadMessage("");
                                }}
                                disabled={isUploading}
                                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm font-semibold rounded-lg transition-colors"
                              >
                                초기화
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
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
