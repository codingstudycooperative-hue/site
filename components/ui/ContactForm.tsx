"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface FormData {
  org_name: string;
  manager: string;
  phone: string;
  email: string;
  grade: string;
  program: string;
  headcount: string;
  desired_date: string;
  message: string;
  agree: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    org_name: "",
    manager: "",
    phone: "",
    email: "",
    grade: "",
    program: "",
    headcount: "",
    desired_date: "",
    message: "",
    agree: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, type, value } = e.target;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    // 필수 필드 검증
    if (
      !formData.org_name ||
      !formData.manager ||
      !formData.phone ||
      !formData.email ||
      !formData.message ||
      !formData.agree
    ) {
      setErrorMessage("필수 항목을 모두 입력해주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      const supabase = createClient();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { error } = await (supabase as any).from("inquiries").insert({
        org_name: formData.org_name,
        manager: formData.manager,
        phone: formData.phone,
        email: formData.email,
        grade: formData.grade || null,
        program: formData.program || null,
        headcount: formData.headcount ? parseInt(formData.headcount) : null,
        desired_date: formData.desired_date || null,
        message: formData.message,
      });

      if (error) {
        throw error;
      }

      setSuccessMessage("문의가 접수되었습니다.");
      setFormData({
        org_name: "",
        manager: "",
        phone: "",
        email: "",
        grade: "",
        program: "",
        headcount: "",
        desired_date: "",
        message: "",
        agree: false,
      });

      // 3초 후 메시지 제거
      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (error) {
      console.error("문의 접수 오류:", error);
      setErrorMessage("문의 접수 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {successMessage && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded text-green-700">
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded text-red-700">
          {errorMessage}
        </div>
      )}

      {/* 기관명 */}
      <div className="mb-6">
        <label htmlFor="org_name" className="block text-sm font-medium mb-2">
          기관명 <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="org_name"
          name="org_name"
          value={formData.org_name}
          onChange={handleChange}
          placeholder="기관명을 입력해주세요"
          className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* 담당자명 */}
      <div className="mb-6">
        <label htmlFor="manager" className="block text-sm font-medium mb-2">
          담당자명 <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="manager"
          name="manager"
          value={formData.manager}
          onChange={handleChange}
          placeholder="담당자명을 입력해주세요"
          className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* 연락처 */}
      <div className="mb-6">
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          연락처 <span className="text-red-600">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="010-0000-0000"
          className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* 이메일 */}
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          이메일 <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="example@email.com"
          className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* 대상 학년 */}
      <div className="mb-6">
        <label htmlFor="grade" className="block text-sm font-medium mb-2">
          대상 학년
        </label>
        <select
          id="grade"
          name="grade"
          value={formData.grade}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">선택해주세요</option>
          <option value="전체">전체</option>
          <option value="초등1-2학년">초등 1~2학년</option>
          <option value="초등3-4학년">초등 3~4학년</option>
          <option value="초등5-6학년">초등 5~6학년</option>
          <option value="중학교1-3학년">중학교 1~3학년</option>
          <option value="고등학교">고등학교</option>
        </select>
      </div>

      {/* 희망 프로그램 */}
      <div className="mb-6">
        <label htmlFor="program" className="block text-sm font-medium mb-2">
          희망 프로그램
        </label>
        <select
          id="program"
          name="program"
          value={formData.program}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">선택해주세요</option>
          <option value="초등 방과후 코딩">초등 방과후 코딩</option>
          <option value="중학교 AI 교육">중학교 AI 교육</option>
          <option value="공공기관 체험">공공기관 체험</option>
        </select>
      </div>

      {/* 예상 인원 */}
      <div className="mb-6">
        <label htmlFor="headcount" className="block text-sm font-medium mb-2">
          예상 인원
        </label>
        <input
          type="number"
          id="headcount"
          name="headcount"
          value={formData.headcount}
          onChange={handleChange}
          placeholder="인원수"
          min="0"
          className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 희망 일정 */}
      <div className="mb-6">
        <label
          htmlFor="desired_date"
          className="block text-sm font-medium mb-2"
        >
          희망 일정
        </label>
        <input
          type="date"
          id="desired_date"
          name="desired_date"
          value={formData.desired_date}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* 문의 내용 */}
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          문의 내용 <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="문의 내용을 입력해주세요"
          rows={5}
          className="w-full px-4 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          required
        />
      </div>

      {/* 개인정보 수집·이용 동의 */}
      <div className="mb-8">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            className="mt-1 w-4 h-4 border border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
            required
          />
          <span className="text-sm text-slate-700">
            개인정보 수집 및 이용에 동의합니다.{" "}
            <span className="text-red-600">*</span>
          </span>
        </label>
      </div>

      {/* 제출 버튼 */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-blue-600 text-white py-3 rounded font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "전송 중..." : "문의 접수"}
        </button>
        <button
          type="reset"
          onClick={() => {
            setFormData({
              org_name: "",
              manager: "",
              phone: "",
              email: "",
              grade: "",
              program: "",
              headcount: "",
              desired_date: "",
              message: "",
              agree: false,
            });
            setSuccessMessage("");
            setErrorMessage("");
          }}
          className="flex-1 border border-slate-300 text-slate-700 py-3 rounded font-medium hover:bg-slate-50 transition-colors"
        >
          초기화
        </button>
      </div>
    </form>
  );
}
