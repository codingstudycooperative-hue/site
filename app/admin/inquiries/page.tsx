import React from "react";
import { createClient } from "@/lib/supabase/server";
import AdminLayout from "@/components/admin/AdminLayout";
import Link from "next/link";
export default async function InquiriesPage() {
  const supabase = await createClient();

  const { data: inquiries } = await supabase
    .from("inquiries")
    .select("id, org_name, manager, phone, created_at, is_read")
    .order("created_at", { ascending: false })
    .limit(100);

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
    <AdminLayout title="문의 목록">
      <div className="space-y-4">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          {inquiries && inquiries.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-12">
                      번호
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      기관명
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      담당자
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      연락처
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
                  {inquiries.map((inquiry, index) => (
                    <tr
                      key={inquiry.id}
                      className="hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {inquiries.length - index}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-800">
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
                        {inquiry.phone}
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
