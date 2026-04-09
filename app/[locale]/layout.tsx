import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import SmoothScrollProvider from '@/app/components/SmoothScrollProvider';

const locales = ['en', 'ar'];

interface Props {
  children: React.ReactNode;
  params: { locale: string };
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
  const { locale } = params;

  if (!locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <SmoothScrollProvider>
        <Navbar locale={locale} />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer locale={locale} />
      </SmoothScrollProvider>
    </NextIntlClientProvider>
  );
}
