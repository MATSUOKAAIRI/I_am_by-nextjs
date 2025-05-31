import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "rii_3112",
  description: "portfolio",
  openGraph: {
  images: '/アイコン.jpg'},
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
       <head>
  <link
  href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=Zen+Kaku+Gothic+New&family=Fira+Code&family=Inter&display=swap"
  rel="stylesheet"
/>
</head>
      <body>
        {children}
      </body>
    </html>
  );
}
