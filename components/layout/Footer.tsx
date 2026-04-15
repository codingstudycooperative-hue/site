import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* 푸터 메인 컨텐츠 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* 프로그램 */}
          <div>
            <h3 className="font-bold text-lg mb-4">프로그램</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link
                  href="/programs"
                  className="hover:text-white transition-colors"
                >
                  초등 방과후 코딩
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-white transition-colors"
                >
                  중학교 AI 교육
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-white transition-colors"
                >
                  공공기관 체험
                </Link>
              </li>
            </ul>
          </div>

          {/* 안내 */}
          <div>
            <h3 className="font-bold text-lg mb-4">안내</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  조합 소개
                </Link>
              </li>
              <li>
                <Link
                  href="/equipment"
                  className="hover:text-white transition-colors"
                >
                  보유 교구
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>

          {/* 문의 */}
          <div>
            <h3 className="font-bold text-lg mb-4">문의</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a
                  href="tel:0505-300-2452"
                  className="hover:text-white transition-colors"
                >
                  0505-300-2452
                </a>
              </li>
              <li>
                <a
                  href="mailto:codingstudy0206@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  codingstudy0206@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-block bg-[#2563eb] text-white px-4 py-2 rounded font-medium hover:bg-[#1d4ed8] transition-colors"
                >
                  수업 의뢰하기
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 구분선 */}
        <div className="border-t border-slate-700 pt-8">
          {/* 저작권 */}
          <div className="text-sm text-slate-400 mb-3">
            © 2026 코딩스터디 협동조합 | 사업자등록번호: 117-86-01510
          </div>

          {/* 관리자 로그인 */}
          <div className="text-xs text-slate-500">
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
