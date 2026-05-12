import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "주요 실적",
  description:
    "코딩스터디 협동조합의 연도별 SW·AI 교육 운영 실적. 인천테크노파크, 서구 마을공동체, 삼성꿈장학재단 등 30곳 이상의 협력 기관과 함께해왔습니다.",
  keywords: [
    "코딩스터디 실적",
    "SW교육 운영 실적",
    "인천 코딩 교육",
    "협력 기관",
  ],
  alternates: { canonical: "/achievements" },
  openGraph: {
    url: "https://codingstudy.kr/achievements",
    title: "주요 실적 | 코딩스터디 협동조합",
    description: "연도별 SW·AI 교육 운영 실적과 협력 기관을 확인하세요.",
  },
};

export default function AchievementsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
