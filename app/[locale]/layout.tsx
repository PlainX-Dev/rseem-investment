import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

const locales = ['en', 'ar'];

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({
    locale,
  }));
}

export const metadata: Metadata = {
  title: 'Rseem Investment Company | Venture Capital & Private Equity',
  description: 'Leading venture capital and private equity firm in Saudi Arabia, aligned with Vision 2030.',
};

export default async function LocaleLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  return (
    <>
      <Navbar locale={locale} />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer locale={locale} />
    </>
  );
}
