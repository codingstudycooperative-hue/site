"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/assets/cs_logo.webp"
            alt="코딩스터디 협동조합 로고"
            className="h-14 w-auto object-contain"
          />
          <span className="font-bold text-slate-900 text-lg tracking-tight whitespace-nowrap">
            코딩스터디 협동조합
          </span>
        </Link>

        {/* 데스크톱 메뉴 */}
        <nav className="hidden md:flex items-center gap-1.5 whitespace-nowrap ml-[100px]">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm px-3 py-2 rounded-lg font-medium transition-colors ${
                isActive(item.href)
                  ? "text-slate-900 bg-slate-50"
                  : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="ml-auto md:hidden p-2 text-slate-500 hover:text-slate-900 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12"></line>
            <line x1="4" x2="20" y1="6" y2="6"></line>
            <line x1="4" x2="20" y1="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* 모바일 하단 메뉴 (토글됨) */}
      {mobileMenuOpen && (
        <nav className="md:hidden px-6 pt-2 pb-4 bg-white border-t border-slate-100 shadow-lg">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                isActive(item.href)
                  ? "text-primary-600 bg-primary-50"
                  : "text-slate-600 hover:text-primary-600 hover:bg-slate-50"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
