import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import type { ReactNode } from 'react';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Sectors from '@/app/components/Sectors';
import Why from '@/app/components/Why';
import Contact from '@/app/components/Contact';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'ar' 
      ? 'شركة رَسِيمْ - رأس المال الجريء والأسهم الخاصة'
      : 'Rseem Investment - Venture Capital & Private Equity',
    description: locale === 'ar'
      ? 'شركة رَسِيمْ للاستثمار - شركة استثمارية رائدة متخصصة في رأس المال الجريء والأسهم الخاصة، موافقة لرؤية السعودية 2030'
      : 'Rseem Investment Company - Leading venture capital and private equity firm aligned with Saudi Vision 2030',
    openGraph: {
      title: locale === 'ar'
        ? 'شركة رَسِيمْ للاستثمار'
        : 'Rseem Investment Company',
      description: locale === 'ar'
        ? 'استثمار الأموال والعلاقات والمواهب في مشاريع ريادية غير تقليدية'
        : 'Investing capital, relationships, and talent in non-traditional entrepreneurial ventures',
    },
  };
}

export default function HomePage() {
  const t = useTranslations();

  return (
    <>
      <Hero />
      <About />
      <Sectors />
      <Why />
      <Contact />
    </>
  );
}
