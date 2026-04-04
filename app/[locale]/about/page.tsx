import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import AboutHero from '@/app/components/pages/AboutHero';
import AboutContent from '@/app/components/pages/AboutContent';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'ar'
      ? 'من نحن - شركة رَسِيمْ للاستثمار'
      : 'About Us - Rseem Investment',
    description: locale === 'ar'
      ? 'تعرف على شركة رَسِيمْ للاستثمار، رسالتنا وقيمنا الأساسية'
      : 'Learn about Rseem Investment Company, our mission and core values',
  };
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutContent />
    </>
  );
}
