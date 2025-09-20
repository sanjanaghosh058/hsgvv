import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Subhrajit Mukherjee - Full-Stack Developer | AI Automation | MERN & Next.js Specialist',
  description: 'Professional portfolio of Subhrajit Mukherjee, a Full-Stack Developer specializing in MERN stack, Next.js, AI automation, and SaaS development. Available for freelance projects.',
  keywords: 'Full-Stack Developer, MERN Stack, Next.js, AI Automation, SaaS Development, Freelancer, Web Development',
  authors: [{ name: 'Subhrajit Mukherjee' }],
  openGraph: {
    title: 'Subhrajit Mukherjee - Full-Stack Developer',
    description: 'Professional portfolio showcasing expertise in MERN stack, Next.js, AI automation, and modern web development.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subhrajit Mukherjee - Full-Stack Developer',
    description: 'Professional portfolio showcasing expertise in MERN stack, Next.js, AI automation, and modern web development.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}