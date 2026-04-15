"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import AdminLayout from "@/components/admin/AdminLayout";
import type { Database } from "@/types/database";

type Inquiry = Database["public"]["Tables"]["inquiries"]["Row"];

export default function InquiryDetailPage() {
  const router = useRouter();
  const params = useParams();
  const id = typeof params.id === "string" ? params.id : "";

  const [inquiry, setInquiry] = useState<Inquiry | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fetchInquiry = async () => {
      try {
        const supabase = createClient();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const { data, error } = (await (supabase as any)
          .from("inquiries")
          .select("*")
          .eq("id", id)
          .single()) as {
          data: Inquiry | null;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          error: any;
        };

        if (error) throw error;

        setInquiry(data);

        // 자동으로 is_read = true 업데이트
        if (data && !data.is_read) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          await (supabase as any)
            .from("inquiries")
            .update({ is_read: true })
            .eq("id", id);
        }
      } catch (error) {
        console.error("문의 조회 에러:", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchInquiry();
    }
  }, [id]);

  const handleDelete = async () => {
    if (!confirm("이 문의를 삭제하시겠습니까?")) {
      return;
    }

    setIsDeleting(true);
    try {
      const supabase = createClient();
      const { error } = await supabase.from("inquiries").delete().eq("id", id);

      if (error) throw error;

      router.push("/admin/inquiries");
    } catch (error) {
      console.error("문의 삭제 에러:", error);
      alert("문의 삭제에 실패했습니다.");
      setIsDeleting(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (isLoading) {
    return (
      <AdminLayout title="문의 상세">
        <div className="text-center py-12">
          <p className="text-gray-500">로딩 중...</p>
        </div>
      </AdminLayout>
    );
  }

  if (!inquiry) {
    return (
      <AdminLayout title="문의 상세">
        <div className="text-center py-12">
          <p className="text-gray-500">문의를 찾을 수 없습니다.</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title={`문의 상세 - ${inquiry.org_name}`}>
      <div className="space-y-6">
        {/* 문의 정보 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-bold text-gray-800">기본 정보</h3>
          </div>

          <div className="p-6 space-y-4">
            {/* 기관명 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  기관명
                </label>
                <p className="text-gray-800 font-medium">{inquiry.org_name}</p>
              </div>

              {/* 담당자 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  담당자
                </label>
                <p className="text-gray-800 font-medium">{inquiry.manager}</p>
              </div>

              {/* 전화 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  전화
                </label>
                <p className="text-gray-800 font-medium">{inquiry.phone}</p>
              </div>

              {/* 이메일 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이메일
                </label>
                <p className="text-gray-800 font-medium">{inquiry.email}</p>
              </div>

              {/* 학교급 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  학교급
                </label>
                <p className="text-gray-800 font-medium">
                  {inquiry.grade || "-"}
                </p>
              </div>

              {/* 프로그램 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  프로그램
                </label>
                <p className="text-gray-800 font-medium">
                  {inquiry.program || "-"}
                </p>
              </div>

              {/* 인원수 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  인원수
                </label>
                <p className="text-gray-800 font-medium">
                  {inquiry.headcount || "-"}명
                </p>
              </div>

              {/* 희망일시 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  희망일시
                </label>
                <p className="text-gray-800 font-medium">
                  {inquiry.desired_date || "-"}
                </p>
              </div>
            </div>

            {/* 문의 내용 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                문의 내용
              </label>
              <p className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
                {inquiry.message}
              </p>
            </div>

            {/* 접수일 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                접수일
              </label>
              <p className="text-gray-800 font-medium">
                {formatDate(inquiry.created_at)}
              </p>
            </div>

            {/* 읽음 여부 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                상태
              </label>
              {inquiry.is_read ? (
                <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-gray-800">
                  확인됨
                </span>
              ) : (
                <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  미확인
                </span>
              )}
            </div>
          </div>
        </div>

        {/* 액션 버튼 */}
        <div className="flex gap-4">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold rounded-lg transition-colors"
          >
            뒤로가기
          </button>
          <button
            onClick={handleDelete}
            disabled={isDeleting}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold rounded-lg transition-colors"
          >
            {isDeleting ? "삭제 중..." : "삭제"}
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
