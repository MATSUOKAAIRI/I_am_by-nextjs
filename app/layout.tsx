import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "自己紹介",
  description: "こんにちは",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        {children}
      </body>
    </html>
  );
}
