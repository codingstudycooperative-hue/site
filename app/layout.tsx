import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import PublicLayout from "@/components/layout/PublicLayout";

const SITE_URL = "https://codingstudy.kr";
const SITE_NAME = "코딩스터디 협동조합";
const SITE_DESCRIPTION =
  "코딩스터디 협동조합은 학교와 지역사회가 함께하는 SW·AI 교육 전문 협동조합입니다. 초·중·고 방과후 코딩, 자유학기 AI 교육, 공공기관 디지털 체험 프로그램을 운영합니다.";
const SITE_KEYWORDS = [
  "코딩스터디",
  "코딩스터디 협동조합",
  "SW교육",
  "AI교육",
  "코딩교육",
  "방과후 코딩",
  "자유학기 AI",
  "초등 코딩 교육",
  "중학교 AI 교육",
  "인천 코딩 교육",
  "교구 대여",
  "마이크로비트",
  "교육 협동조합",
];
const OG_IMAGE = "/assets/cs_logo.webp";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | SW·AI 교육 전문 협동조합`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | SW·AI 교육 전문 협동조합`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} 로고`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | SW·AI 교육 전문 협동조합`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/cs_logo.png",
    shortcut: "/assets/cs_logo.png",
    apple: "/assets/cs_logo.png",
  },
  verification: {
    // 구글 서치 콘솔 / 네이버 웹마스터도구 인증 토큰을 발급받으면 아래에 입력하세요.
    // google: "your-google-site-verification-token",
    // other: { "naver-site-verification": "your-naver-token" },
  },
};

export const viewport: Viewport = {
  themeColor: "#2563eb",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  alternateName: "Coding Study Cooperative",
  url: SITE_URL,
  logo: `${SITE_URL}/assets/cs_logo.png`,
  description: SITE_DESCRIPTION,
  address: {
    "@type": "PostalAddress",
    streetAddress: "수변로 56 코워킹룸 103호",
    addressLocality: "부평구",
    addressRegion: "인천광역시",
    addressCountry: "KR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+82-505-300-2452",
    contactType: "customer service",
    email: "codingstudy0206@gmail.com",
    areaServed: "KR",
    availableLanguage: ["Korean"],
  },
  sameAs: [SITE_URL],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased text-slate-800">
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <PublicLayout>{children}</PublicLayout>
      </body>
    </html>
  );
}
