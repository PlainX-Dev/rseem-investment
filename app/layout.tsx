import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../styles/globals.css';

const locales = ['en', 'ar'];

export const metadata: Metadata = {
  title: 'Rseem Investment Company | Venture Capital & Private Equity',
  description: 'Leading venture capital and private equity firm driving innovation and growth aligned with Saudi Vision 2030.',
  keywords: 'venture capital, private equity, Saudi Arabia, investment, Vision 2030',
  openGraph: {
    title: 'Rseem Investment Company',
    description: 'Venture Capital & Private Equity Excellence in Saudi Arabia',
    url: 'https://rseem.com',
    siteName: 'Rseem Investment',
    images: [
      {
        url: 'https://rseem.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ar_SA',
    alternateLocale: ['en_US'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rseem Investment Company',
    description: 'Venture Capital & Private Equity Excellence',
    creator: '@RSEEMInvest',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Props) {
  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&family=Poppins:wght@300;400;600;700;800&family=Inter:wght@300;400;600;700&display=swap" rel="stylesheet" />
        {/* SEO Meta tags */}
        <meta name="theme-color" content="#0F1419" />
        <link rel="canonical" href={`https://rseem.com/${locale}`} />
        <meta name="robots" content="index, follow" />
        {locale === 'ar' && (
          <link rel="alternate" hrefLang="en" href="https://rseem.com/en" />
        )}
        {locale === 'en' && (
          <link rel="alternate" hrefLang="ar" href="https://rseem.com/ar" />
        )}
      </head>
      <body className="bg-rseem-light font-body text-rseem-dark overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
