"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import type { Database } from "@/types/database";

type Album = Database["public"]["Tables"]["gallery_albums"]["Row"];

interface FileWithPreview extends File {
  preview: string;
}

interface UploadProgress {
  [key: string]: number;
}

export default function GalleryUploadPage() {
  const router = useRouter();
  const [albums, setAlbums] = useState<Album[]>([]);
  const [selectedAlbum, setSelectedAlbum] = useState("");
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState<UploadProgress>({});
  const [uploadMessage, setUploadMessage] = useState("");

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const supabase = createClient();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { data, error } = (await (supabase as any)
          .from("gallery_albums")
          .select("*")
          .order("created_at", { ascending: false })) as {
          data: Album[] | null;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          error: any;
        };

        if (error) throw error;

        setAlbums(data || []);
        if (data && data.length > 0) {
          setSelectedAlbum(data[0].id);
        }
      } catch (error) {
        console.error("앨범 조회 에러:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    const newFiles: FileWithPreview[] = selectedFiles.map((file) => {
      const preview = URL.createObjectURL(file);
      return Object.assign(file, { preview }) as FileWithPreview;
    });

    setFiles([...files, ...newFiles]);
  };

  const removeFile = (index: number) => {
    const newFiles = [...files];
    URL.revokeObjectURL(newFiles[index].preview);
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  const handleUpload = async () => {
    if (!selectedAlbum) {
      alert("앨범을 선택해주세요.");
      return;
    }

    if (files.length === 0) {
      alert("이미지를 선택해주세요.");
      return;
    }

    setIsUploading(true);
    setUploadMessage("");

    try {
      const supabase = createClient();

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = `${Date.now()}-${i}-${file.name}`;
        const filePath = `${selectedAlbum}/${fileName}`;

        try {
          // Storage에 파일 업로드
          const { error: uploadError } = await supabase.storage
            .from("gallery-images")
            .upload(filePath, file);

          if (uploadError) throw uploadError;

          // 데이터베이스에 레코드 추가
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const { error: dbError } = await (supabase as any)
            .from("gallery_images")
            .insert({
              album_id: selectedAlbum,
              storage_path: filePath,
              order_num: i + 1,
            });

          if (dbError) throw dbError;

          // 진행률 업데이트
          setUploadProgress((prev) => ({
            ...prev,
            [file.name]: 100,
          }));
        } catch (error) {
          console.error(`파일 업로드 에러 (${file.name}):`, error);
          setUploadProgress((prev) => ({
            ...prev,
            [file.name]: -1,
          }));
        }
      }

      const successCount =
        Object.values(uploadProgress).filter((p) => p === 100).length + 1;
      setUploadMessage(
        `업로드 완료! ${successCount}개의 이미지가 추가되었습니다.`,
      );

      // 파일 초기화
      setTimeout(() => {
        setFiles([]);
        setUploadProgress({});
        setUploadMessage("");
        setIsUploading(false);
      }, 2000);
    } catch (error) {
      console.error("업로드 에러:", error);
      setUploadMessage("업로드 중 오류가 발생했습니다.");
      setIsUploading(false);
    }
  };

  if (isLoading) {
    return (
      <AdminLayout title="이미지 업로드">
        <div className="text-center py-12">
          <p className="text-gray-500">로딩 중...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="갤러리 이미지 업로드">
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow p-6">
          {/* 앨범 선택 */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              앨범 선택
            </label>
            {albums.length > 0 ? (
              <select
                value={selectedAlbum}
                onChange={(e) => setSelectedAlbum(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {albums.map((album) => (
                  <option key={album.id} value={album.id}>
                    {album.title} ({album.year})
                  </option>
                ))}
              </select>
            ) : (
              <p className="text-gray-500 text-sm">
                사용 가능한 앨범이 없습니다.{" "}
                <button
                  onClick={() => router.push("/admin/gallery")}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  앨범 생성하기
                </button>
              </p>
            )}
          </div>

          {/* 파일 입력 */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              이미지 선택
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-indigo-500 transition-colors">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileSelect}
                className="hidden"
                id="file-input"
                disabled={isUploading}
              />
              <label htmlFor="file-input" className="cursor-pointer block">
                <p className="text-gray-600 font-medium mb-2">
                  파일을 여기로 드래그하거나 클릭하여 선택하세요
                </p>
                <p className="text-gray-500 text-sm">
                  (JPG, PNG, GIF, WebP 등의 이미지 형식 지원)
                </p>
              </label>
            </div>
          </div>

          {/* 선택된 파일 미리보기 */}
          {files.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-medium text-gray-700 mb-4">
                선택된 이미지 ({files.length}개)
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {files.map((file, index) => (
                  <div key={`${file.name}-${index}`} className="relative group">
                    <img
                      src={file.preview}
                      alt={file.name}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ✕
                    </button>
                    <p className="text-xs text-gray-600 mt-2 truncate">
                      {file.name}
                    </p>
                    {uploadProgress[file.name] !== undefined && (
                      <div className="mt-2 bg-gray-200 rounded-full h-2">
                        <div
                          className={`h-full rounded-full transition-all ${
                            uploadProgress[file.name] === 100
                              ? "bg-green-500"
                              : uploadProgress[file.name] === -1
                                ? "bg-red-500"
                                : "bg-blue-500"
                          }`}
                          style={{
                            width: `${Math.max(uploadProgress[file.name], 0)}%`,
                          }}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 메시지 */}
          {uploadMessage && (
            <div
              className={`mb-6 p-4 rounded-lg ${
                uploadMessage.includes("완료")
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {uploadMessage}
            </div>
          )}

          {/* 업로드 버튼 */}
          {files.length > 0 && (
            <button
              onClick={handleUpload}
              disabled={isUploading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            >
              {isUploading ? "업로드 중..." : "이미지 업로드"}
            </button>
          )}
        </div>

        {/* 뒤로가기 버튼 */}
        <div>
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-lg transition-colors"
          >
            뒤로가기
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
