import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Math By Step',
  description: 'Learn math step by step',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
