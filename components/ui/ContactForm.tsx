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

      const { error } = await supabase.from("inquiries").insert({
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

      setSuccessMessage("문의가 성공적으로 접수되었습니다.");
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
      // Supabase 오류 메시지 추출
      const errMsg =
        typeof error === "object" && error !== null && "message" in error
          ? (error as { message: string }).message
          : "알 수 없는 오류";
      setErrorMessage(`문의 접수 중 오류가 발생했습니다. (${errMsg})`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto text-base">
      {/* 성공 팝업 모달 */}
      {successMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl p-10 max-w-sm w-full mx-4 text-center animate-in fade-in zoom-in-95 duration-200">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              문의 접수 완료!
            </h3>
            <p className="text-slate-500 leading-relaxed mb-8">
              문의가 성공적으로 접수되었습니다.
              <br />
              담당자가 빠르게 답변 드리겠습니다.
            </p>
            <button
              type="button"
              onClick={() => setSuccessMessage("")}
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 rounded-xl transition-colors"
            >
              확인
            </button>
          </div>
        </div>
      )}

      {errorMessage && (
        <div className="mb-6 px-4 py-3 bg-red-50 border border-red-200 rounded-lg text-red-700 font-medium text-sm flex items-center gap-2">
          <span>⚠</span> {errorMessage}
        </div>
      )}

      {/* 기관명 */}
      <div className="mb-6">
        <label
          htmlFor="org_name"
          className="block text-sm font-bold text-slate-700 mb-2"
        >
          기관명 <span className="text-primary-600">*</span>
        </label>
        <input
          type="text"
          id="org_name"
          name="org_name"
          value={formData.org_name}
          onChange={handleChange}
          placeholder="소속 기관명을 입력해주세요"
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
          required
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 담당자명 */}
        <div className="mb-6">
          <label
            htmlFor="manager"
            className="block text-sm font-bold text-slate-700 mb-2"
          >
            담당자 성함 <span className="text-primary-600">*</span>
          </label>
          <input
            type="text"
            id="manager"
            name="manager"
            value={formData.manager}
            onChange={handleChange}
            placeholder="성함을 입력해주세요"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
            required
          />
        </div>

        {/* 연락처 */}
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block text-sm font-bold text-slate-700 mb-2"
          >
            연락처 <span className="text-primary-600">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="010-0000-0000"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* 이메일 */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-bold text-slate-700 mb-2"
          >
            이메일 <span className="text-primary-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@email.com"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
            required
          />
        </div>

        {/* 대상 학년 */}
        <div className="mb-6">
          <label
            htmlFor="grade"
            className="block text-sm font-bold text-slate-700 mb-2"
          >
            교육 대상
          </label>
          <select
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors appearance-none"
          >
            <option value="">대상을 선택해주세요</option>
            <option value="초등학교">초등학교</option>
            <option value="중학교">중학교</option>
            <option value="고등학교">고등학교</option>
            <option value="특수교육">특수교육</option>
            <option value="공공/일반">공공/일반</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-6">
        {/* 희망 프로그램 */}
        <div className="mb-6">
          <label
            htmlFor="program"
            className="block text-sm font-bold text-slate-700 mb-2"
          >
            요청 프로그램
          </label>
          <input
            type="text"
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            placeholder="원하시는 과목이나 활동을 작성해주세요"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
          />
        </div>

        {/* 예상 인원 */}
        <div className="mb-6">
          <label
            htmlFor="headcount"
            className="block text-sm font-bold text-slate-700 mb-2"
          >
            예상 인원
          </label>
          <input
            type="number"
            id="headcount"
            name="headcount"
            value={formData.headcount}
            onChange={handleChange}
            placeholder="단위: 명"
            min="0"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
          />
        </div>

        {/* 희망 일정 */}
        <div className="mb-6">
          <label
            htmlFor="desired_date"
            className="block text-sm font-bold text-slate-700 mb-2"
          >
            희망 시작일
          </label>
          <input
            type="date"
            id="desired_date"
            name="desired_date"
            value={formData.desired_date}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* 문의 내용 */}
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-bold text-slate-700 mb-2"
        >
          문의 및 요청사항 <span className="text-primary-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="교육 목표, 예산 범위 등 추가 요청사항을 자유롭게 적어주세요."
          rows={5}
          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white transition-colors resize-none mb-1"
          required
        />
      </div>

      {/* 개인정보 수집·이용 동의 */}
      <div className="mb-8 p-4 bg-slate-50 rounded-xl border border-slate-100">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="pt-0.5">
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              className="w-4 h-4 text-primary-600 bg-white border-slate-300 rounded focus:ring-primary-500 focus:ring-2 cursor-pointer transition-colors"
              required
            />
          </div>
          <span className="text-sm text-slate-600 group-hover:text-slate-900 transition-colors cursor-pointer">
            수집된 개인정보는 작성해주신 문의에 대한 답변을 드리기 위해서만
            이용되며, 이를 제외한 다른 목적으로 이용되지 않습니다. 개인정보 수집
            및 이용에 동의합니다.{" "}
            <span className="text-primary-600 font-bold">*</span>
          </span>
        </label>
      </div>

      {/* 제출 버튼 */}
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-[2] bg-primary-600 text-white py-4 rounded-xl font-bold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
        >
          {isSubmitting ? "접수 진행 중..." : "문의 접수 완료하기"}
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
          className="flex-1 bg-white border border-slate-200 text-slate-600 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors"
        >
          초기화
        </button>
      </div>
    </form>
  );
}
