"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

interface InquiryActionsProps {
  id: string;
  isRead: boolean;
}

export default function InquiryActions({ id, isRead }: InquiryActionsProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMarkingRead, setIsMarkingRead] = useState(false);
  const [localIsRead, setLocalIsRead] = useState(isRead);

  const handleMarkRead = async () => {
    if (localIsRead) return;
    setIsMarkingRead(true);
    try {
      const supabase = createClient();
      const { error } = await supabase
        .from("inquiries")
        .update({ is_read: true })
        .eq("id", id);
      if (error) throw error;
      setLocalIsRead(true);
      router.refresh();
    } catch (error) {
      console.error("확인 처리 에러:", error);
      alert("확인 처리에 실패했습니다.");
    } finally {
      setIsMarkingRead(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("이 문의를 삭제하시겠습니까?")) return;
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

  return (
    <div className="flex items-center gap-3">
      <Link
        href="/admin/inquiries"
        className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition-colors"
      >
        ← 뒤로가기
      </Link>

      {!localIsRead && (
        <button
          onClick={handleMarkRead}
          disabled={isMarkingRead}
          className="px-6 py-2 bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold rounded-lg transition-colors"
        >
          {isMarkingRead ? "처리 중..." : "✓ 확인"}
        </button>
      )}

      <div className="flex-1" />

      <button
        onClick={handleDelete}
        disabled={isDeleting}
        className="px-6 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold rounded-lg transition-colors"
      >
        {isDeleting ? "삭제 중..." : "삭제"}
      </button>
    </div>
  );
}
