"use client";

import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";

interface AdminLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function AdminLayout({ children, title }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      const supabase = createClient();
      await supabase.auth.signOut();
      router.push("/");
    } catch (error) {
      console.error("로그아웃 에러:", error);
      setIsLoggingOut(false);
    }
  };

  const menuItems = [
    {
      label: "대시보드",
      href: "/admin/dashboard",
      icon: "📊",
    },
    {
      label: "문의 목록",
      href: "/admin/inquiries",
      icon: "📧",
    },
    {
      label: "갤러리 관리",
      href: "/admin/gallery",
      icon: "🖼️",
    },
  ];

  const isMenuItemActive = (href: string) => {
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 사이드바 */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } md:block w-full md:w-64 bg-primary-900 text-white flex flex-col fixed md:static top-0 left-0 z-40 h-screen md:h-auto`}
      >
        {/* 로고/제목 */}
        <div className="p-6 border-b border-primary-800">
          <h1 className="text-2xl font-bold">관리자</h1>
          <p className="text-primary-300 text-sm mt-1">코딩스터디협동조합</p>
        </div>

        {/* 메뉴 */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block w-full px-4 py-3 rounded-lg transition-colors ${
                isMenuItemActive(item.href)
                  ? "bg-primary-700 text-white font-semibold"
                  : "text-primary-100 hover:bg-primary-800"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 로그아웃 버튼 */}
        <div className="p-4 border-t border-primary-800">
          <button
            onClick={handleLogout}
            disabled={isLoggingOut}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            {isLoggingOut ? "로그아웃 중..." : "로그아웃"}
          </button>
        </div>

        {/* 모바일 메뉴 닫기 버튼 */}
        <div className="md:hidden p-4">
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full bg-primary-800 text-white py-2 px-4 rounded-lg"
          >
            메뉴 닫기
          </button>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 헤더 */}
        <header className="bg-white border-b border-gray-200 p-4 md:p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          {/* 모바일 메뉴 버튼 */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden bg-primary-900 text-white px-4 py-2 rounded-lg"
          >
            ☰ 메뉴
          </button>
        </header>

        {/* 콘텐츠 */}
        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>

      {/* 모바일 오버레이 */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
