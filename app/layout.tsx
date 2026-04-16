import type { Metadata } from "next";
import "./globals.css";
import PublicLayout from "@/components/layout/PublicLayout";

export const metadata: Metadata = {
  title: "코딩스터디 협동조합",
  description: "SW·AI교육 전문 협동조합",
  icons: {
    icon: "/assets/cs_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased text-slate-800">
        <PublicLayout>{children}</PublicLayout>
      </body>
    </html>
  );
}
