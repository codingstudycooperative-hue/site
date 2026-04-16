import Image from "next/image";
import Link from "next/link";
import { ORGANIZATION_INFO, CURRENT_YEAR } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="pb-8 border-b border-slate-800">
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/assets/cs_logo.png"
              alt="코딩스터디 협동조합 로고"
              width={56}
              height={56}
              className="h-14 w-auto object-contain"
            />
            <span className="font-bold text-white text-lg">
              코딩스터디 협동조합
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 text-sm leading-relaxed text-slate-400 max-w-4xl tracking-wide">
            {/* 상호 / 사업자번호 */}
            <div className="flex">
              <span className="text-slate-200 font-medium w-14 shrink-0">
                상호
              </span>
              <span className="text-slate-300">코딩스터디 협동조합</span>
            </div>
            <div className="flex">
              <span className="text-slate-200 font-medium w-[76px] shrink-0">
                사업자번호
              </span>
              <span className="text-slate-300">
                {ORGANIZATION_INFO.businessNumber}
              </span>
            </div>

            {/* 대표자 / 회사 주소 */}
            <div className="flex">
              <span className="text-slate-200 font-medium w-14 shrink-0">
                대표자
              </span>
              <span className="text-slate-300">
                {ORGANIZATION_INFO.representativeName}
              </span>
            </div>
            <div className="flex">
              <span className="text-slate-200 font-medium w-[76px] shrink-0">
                회사 주소
              </span>
              <span className="text-slate-300">
                {ORGANIZATION_INFO.address}
              </span>
            </div>

            {/* 번호 */}
            <div className="flex">
              <span className="text-slate-200 font-medium w-14 shrink-0">
                번호
              </span>
              <span className="text-slate-300">{ORGANIZATION_INFO.phone}</span>
            </div>
            <div className="hidden md:block"></div>

            {/* 메일 */}
            <div className="flex md:col-span-2">
              <span className="text-slate-200 font-medium w-14 shrink-0">
                메일
              </span>
              <span className="text-slate-300">{ORGANIZATION_INFO.email}</span>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between gap-3 text-xs items-center text-slate-500">
          <p>© {CURRENT_YEAR} 코딩스터디 협동조합. All rights reserved.</p>
          <div className="flex">
            <Link
              href="/admin/login"
              className="hover:text-slate-300 transition-colors"
            >
              관리자 로그인 →
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
