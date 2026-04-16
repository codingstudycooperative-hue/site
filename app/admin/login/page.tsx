"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const supabase = createClient();
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        setError("이메일 또는 비밀번호가 올바르지 않습니다.");
        setIsLoading(false);
        return;
      }

      router.push("/admin/dashboard");
    } catch (err) {
      console.error("로그인 에러:", err);
      setError("이메일 또는 비밀번호가 올바르지 않습니다.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="w-full max-w-md">
        {/* 로고 */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            코딩스터디협동조합
          </h1>
          <p className="text-slate-500">관리자</p>
        </div>

        {/* 로그인 박스 */}
        <div className="bg-white rounded-lg shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            로그인
          </h2>

          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 이메일 입력 */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                이메일
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="you@example.com"
              />
            </div>

            {/* 비밀번호 입력 */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                비밀번호
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="••••••••"
              />
            </div>

            {/* 로그인 버튼 */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-primary-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors mt-6"
            >
              {isLoading ? "로그인 중..." : "로그인"}
            </button>
          </form>

          {/* 홈 링크 */}
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="text-black hover:text-slate-700 text-sm font-medium"
            >
              ← 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
