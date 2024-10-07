import './globals.css';
import type { Metadata } from 'next';
import { Lexend } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';

const lexend = Lexend({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matthew J Peters - Full-Stack Developer Portfolio',
  description: 'Full-stack developer portfolio showcasing Soundlink, AppCat, and other projects',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={lexend.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}