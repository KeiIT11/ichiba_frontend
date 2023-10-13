import "@/app/_styles/globals.css";
import type { Metadata } from "next";
import { noto_sans_jp } from "@/app/_utils/fonts"

export const metadata: Metadata = {
  title: "Rakuten new life",
  description: "Start your new life with curated lists from Rakuten ichiba",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={noto_sans_jp.className}>
      {children}
    </html>
  );
}
