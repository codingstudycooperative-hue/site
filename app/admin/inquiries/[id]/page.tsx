import React from "react";
import { createClient } from "@/lib/supabase/server";
import AdminLayout from "@/components/admin/AdminLayout";
import InquiryActions from "./InquiryActions";

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

export default async function InquiryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: inquiry } = await supabase
    .from("inquiries")
    .select("*")
    .eq("id", id)
    .single();

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  기관명
                </label>
                <p className="text-gray-800 font-medium">{inquiry.org_name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  담당자
                </label>
                <p className="text-gray-800 font-medium">{inquiry.manager}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  전화
                </label>
                <p className="text-gray-800 font-medium">{inquiry.phone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  이메일
                </label>
                <p className="text-gray-800 font-medium">{inquiry.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  학교급
                </label>
                <p className="text-gray-800 font-medium">
                  {inquiry.grade || "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  프로그램
                </label>
                <p className="text-gray-800 font-medium">
                  {inquiry.program || "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  인원수
                </label>
                <p className="text-gray-800 font-medium">
                  {inquiry.headcount ? `${inquiry.headcount}명` : "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  희망일시
                </label>
                <p className="text-gray-800 font-medium">
                  {inquiry.desired_date || "-"}
                </p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                문의 내용
              </label>
              <p className="text-gray-700 whitespace-pre-wrap bg-gray-50 p-4 rounded-lg">
                {inquiry.message}
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                접수일
              </label>
              <p className="text-gray-800 font-medium">
                {formatDate(inquiry.created_at)}
              </p>
            </div>

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
        <InquiryActions id={id} isRead={inquiry.is_read} />
      </div>
    </AdminLayout>
  );
}
