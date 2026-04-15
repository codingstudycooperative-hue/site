"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 스크롤 이벤트 리스너 등록
  if (typeof window !== "undefined") {
    if (!scrolled) {
      window.addEventListener("scroll", () => {
        setScrolled(window.scrollY > 0);
      });
    }
  }

  const menuItems = [
    { label: "조합소개", href: "/about" },
    { label: "주요실적", href: "/achievements" },
    { label: "프로그램", href: "/programs" },
    { label: "보유교구", href: "/equipment" },
    { label: "갤러리", href: "/gallery" },
    { label: "수업의뢰 및 문의", href: "/contact" },
  ];

  const isActive = (href: string) => {
    return pathname === href;
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <Link
            href="/"
            className="text-xl font-bold text-slate-900 hover:text-slate-700"
          >
            코딩스터디협동조합
          </Link>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-[#2563eb]"
                    : "text-slate-700 hover:text-[#2563eb]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden flex flex-col space-y-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-0.5 bg-slate-900"></div>
            <div className="w-6 h-0.5 bg-slate-900"></div>
            <div className="w-6 h-0.5 bg-slate-900"></div>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-4 border-t border-slate-200">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 px-0 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-[#2563eb]"
                    : "text-slate-700 hover:text-[#2563eb]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
