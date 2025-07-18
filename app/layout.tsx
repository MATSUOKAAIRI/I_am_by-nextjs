import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'rii_3112',
  description: 'portfolio',
  openGraph: {
    images: '/アイコン.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-noto-sans">{children}</body>
    </html>
  );
}
