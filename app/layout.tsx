import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import '../styles/globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-body',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Rseem Investment Company | Venture Capital & Private Equity Leadership',
  description:
    'Ultra-premium venture capital and private equity experience for Saudi Arabia, blending strategic rigor with visionary execution aligned to Vision 2030.',
  keywords: 'venture capital, private equity, Saudi Arabia, investment, Vision 2030',
  openGraph: {
    title: 'Rseem Investment Company',
    description: 'Venture Capital & Private Equity Leadership in Saudi Arabia',
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
  themeColor: '#05070D',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#05070D" />
        <link rel="canonical" href="https://rseem.com" />
        <meta name="robots" content="index, follow" />
        <link rel="alternate" hrefLang="en" href="https://rseem.com/en" />
        <link rel="alternate" hrefLang="ar" href="https://rseem.com/ar" />
      </head>
      <body className={`${inter.variable} ${plusJakarta.variable} bg-luxury-950 font-body text-zinc-100 antialiased`}>
        <svg className="pointer-events-none fixed h-0 w-0" aria-hidden="true">
          <defs>
            <filter id="liquid-goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <div aria-hidden className="pointer-events-none fixed inset-0 -z-30 luxury-grid opacity-30" />
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_14%_20%,rgba(0,196,167,0.16),transparent_35%),radial-gradient(circle_at_85%_16%,rgba(44,188,255,0.18),transparent_34%),radial-gradient(circle_at_52%_87%,rgba(255,199,94,0.1),transparent_33%),linear-gradient(180deg,#04060d_0%,#070a12_45%,#0a0e18_100%)]"
        />

        <div className="relative z-10 min-h-screen overflow-x-clip">{children}</div>
      </body>
    </html>
  );
}
