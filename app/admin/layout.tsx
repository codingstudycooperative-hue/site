import type { Metadata } from "next";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "관리자 | 코딩스터디 협동조합",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
