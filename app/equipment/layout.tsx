import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "보유 교구",
  description:
    "마이크로비트, 로봇, 드론, 3D 프린터, 아두이노 등 SW·AI 교육에 활용하는 코딩스터디 협동조합의 보유 교구를 안내합니다.",
  keywords: [
    "교구 대여",
    "마이크로비트",
    "교육용 드론",
    "3D 프린터",
    "아두이노",
    "라즈베리파이",
    "레고 스파이크",
  ],
  alternates: { canonical: "/equipment" },
  openGraph: {
    url: "https://codingstudy.kr/equipment",
    title: "보유 교구 | 코딩스터디 협동조합",
    description: "SW·AI 교육에 활용하는 다양한 교구를 카테고리별로 확인하세요.",
  },
};

export default function EquipmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
