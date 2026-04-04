import { Metadata } from 'next';
import SectorsHero from '@/app/components/pages/SectorsHero';
import SectorsContent from '@/app/components/pages/SectorsContent';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'ar'
      ? 'قطاعات الاستثمار - شركة رَسِيمْ'
      : 'Investment Sectors - Rseem',
    description: locale === 'ar'
      ? 'اكتشف قطاعات استثمارنا: رأس المال الجريء، العقارات، الأسهم الخاصة والخدمات الاستشارية'
      : 'Explore our investment sectors: Venture Capital, Real Estate, Private Equity & Advisory Services',
  };
}

export default function SectorsPage() {
  return (
    <>
      <SectorsHero />
      <SectorsContent />
    </>
  );
}
