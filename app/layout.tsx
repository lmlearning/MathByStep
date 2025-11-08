import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Math By Step - Learn Mathematical Proofs Interactively',
  description: 'Master mathematical proofs and problem-solving through interactive, step-by-step guided learning. Choose from algebra, calculus, and geometry problems.',
  keywords: ['math', 'mathematics', 'proofs', 'learning', 'education', 'step-by-step', 'calculus', 'algebra', 'geometry'],
  authors: [{ name: 'Math By Step' }],
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
