import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Metin2 Fantasy Landing Page',
  description: 'Starter layout inspired by a dark fantasy Metin2 homepage.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
