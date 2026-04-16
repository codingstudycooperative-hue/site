import React from "react";
import { createClient } from "@/lib/supabase/server";
import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";

export default async function DashboardPage() {
  const supabase = await createClient();

  const [
    { count: totalInquiries },
    { count: unreadInquiries },
    { count: totalAlbums },
    { count: totalImages },
    { data: recentInquiries },
  ] = await Promise.all([
    supabase.from("inquiries").select("*", { count: "exact", head: true }),
    supabase
      .from("inquiries")
      .select("*", { count: "exact", head: true })
      .eq("is_read", false),
    supabase.from("gallery_albums").select("*", { count: "exact", head: true }),
    supabase.from("gallery_images").select("*", { count: "exact", head: true }),
    supabase
      .from("inquiries")
      .select("id, org_name, manager, created_at, is_read")
      .order("created_at", { ascending: false })
      .limit(5),
  ]);

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

  return (
    <AdminLayout title="대시보드">
      <div className="space-y-6">
        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* 전체 문의 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">전체 문의</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">
                  {totalInquiries || 0}
                </p>
              </div>
              <div className="text-4xl">📧</div>
            </div>
          </div>

          {/* 미확인 문의 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">미확인 문의</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">
                  {unreadInquiries || 0}
                </p>
              </div>
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100">
                <span className="text-xl font-bold text-red-600">!</span>
              </div>
            </div>
          </div>

          {/* 갤러리 앨범 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">갤러리 앨범</p>
                <p className="text-3xl font-bold text-gray-800 mt-2">
                  {totalAlbums || 0}
                </p>
              </div>
              <div className="text-4xl">📁</div>
            </div>
          </div>

          {/* 갤러리 이미지 */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">
                  갤러리 이미지
                </p>
                <p className="text-3xl font-bold text-gray-800 mt-2">
                  {totalImages || 0}
                </p>
              </div>
              <div className="text-4xl">🖼️</div>
            </div>
          </div>
        </div>

        {/* 최근 문의 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200 flex items-center justify-between">
            <h3 className="text-lg font-bold text-gray-800">최근 문의</h3>
            <Link
              href="/admin/inquiries"
              className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
            >
              전체 보기 →
            </Link>
          </div>

          {recentInquiries && recentInquiries.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      기관명
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      담당자
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      접수일
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      상태
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentInquiries.map((inquiry) => (
                    <tr
                      key={inquiry.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                        <Link
                          href={`/admin/inquiries/${inquiry.id}`}
                          className="hover:text-indigo-600"
                        >
                          {inquiry.org_name}
                        </Link>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {inquiry.manager}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {formatDate(inquiry.created_at)}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        {inquiry.is_read ? (
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-200 text-gray-800">
                            확인
                          </span>
                        ) : (
                          <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                            미확인
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-6 text-center text-gray-500">
              문의 데이터가 없습니다.
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
