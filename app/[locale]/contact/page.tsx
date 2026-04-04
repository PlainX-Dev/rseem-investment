import { Metadata } from 'next';
import ContactHero from '@/app/components/pages/ContactHero';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  
  return {
    title: locale === 'ar'
      ? 'اتصل بنا - شركة رَسِيمْ'
      : 'Contact Us - Rseem',
    description: locale === 'ar'
      ? 'تواصل مع فريق رَسِيمْ للاستثمار - نحن هنا للإجابة على استفسارات'
      : 'Contact our investment team at Rseem - we\'re here to help',
  };
}

export default function ContactPage() {
  return <ContactHero />;
}
