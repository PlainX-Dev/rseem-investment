'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import MagneticButton from '@/app/components/ui/MagneticButton';

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const AnimatedStat = ({ value, suffix = '+', label, delay = 0 }: AnimatedStatProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const duration = 1800;
    let start: number | null = null;

    const tick = (time: number) => {
      if (start === null) start = time;
      const progress = Math.min((time - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(value * eased));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
    };
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.65, delay }}
      className="group relative overflow-hidden rounded-2xl p-[1px]"
    >
      <span className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(130deg,rgba(34,183,255,0.55),rgba(0,169,142,0.48),rgba(211,178,108,0.56),rgba(34,183,255,0.55))] bg-[length:240%_240%] animate-border-shift" />
      <div className="glass-panel relative flex min-h-[8.8rem] flex-col justify-between rounded-2xl p-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: [0, 0.45, 0], scale: [0.6, 1.5, 1] }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.2 + delay }}
          className="pointer-events-none absolute left-1/2 top-5 h-24 w-24 -translate-x-1/2 rounded-full radial-glow-cyan blur-2xl"
        />

        <div className="relative z-10 text-4xl font-bold leading-none text-zinc-50 sm:text-5xl">
          {count}
          <span className="ml-1 text-3xl text-luxury-gold/95">{suffix}</span>
        </div>

        <p className="relative z-10 mt-4 text-sm text-zinc-300 sm:text-base">{label}</p>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const t = useTranslations('hero');
  const locale = useLocale();
  const [activeImage, setActiveImage] = useState(0);
  const [activeCardOffset, setActiveCardOffset] = useState(0);

  const title = locale === 'ar' ? t('headline') : 'Venture Capital & Private Equity Leadership';
  const secondCta = locale === 'ar' ? 'ابدأ شراكتك معنا' : 'Begin Your Partnership';
  const contactHref = `/${locale}/contact`;

  const showcaseImages = ['/images/slide11.jpg', '/images/slider2.jpg', '/images/slider5.jpg', '/images/service.jpg'];

  const showcaseCards = [
    { title: t('cardVenture'), image: '/images/flip2.jpg' },
    { title: t('cardPrivateEquity'), image: '/images/flip3.jpg' },
    { title: t('cardRealEstate'), image: '/images/flip4.jpg' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((index) => (index + 1) % showcaseImages.length);
      setActiveCardOffset((index) => (index + 1) % showcaseCards.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [showcaseImages.length, showcaseCards.length]);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-28 sm:pt-32">
      <motion.div
        aria-hidden
        initial={{ opacity: 0.2, scale: 0.8 }}
        animate={{ opacity: [0.22, 0.48, 0.26], scale: [0.88, 1.12, 0.95] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-36 right-[-7rem] h-[26rem] w-[26rem] rounded-full radial-glow-emerald blur-3xl"
      />
      <motion.div
        aria-hidden
        initial={{ opacity: 0.24, scale: 0.9 }}
        animate={{ opacity: [0.2, 0.44, 0.24], scale: [0.9, 1.15, 0.98] }}
        transition={{ duration: 9.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="pointer-events-none absolute -bottom-36 left-[-9rem] h-[28rem] w-[28rem] rounded-full radial-glow-cyan blur-3xl"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-14 sm:px-8 md:gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 xl:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-9"
        >
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="glass-panel inline-flex items-center gap-2.5 rounded-full px-5 py-2.5"
            style={{ filter: 'url(#liquid-goo)' }}
          >
            <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-luxury-gold" />
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-luxury-silver/90 sm:text-sm">
              {t('badge')}
            </span>
          </motion.div>

          <div className="space-y-6">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.15 }}
              className="luxury-title max-w-3xl font-display text-[2.2rem] font-extrabold leading-[1.03] text-zinc-50 text-glow-soft sm:text-[3rem] md:text-[3.5rem] xl:text-[4.2rem]"
            >
              {title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.22 }}
              className="max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg"
            >
              {t('description')}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.28 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <MagneticButton href={contactHref} icon={<ArrowUpRight className="h-4 w-4" />}>
              {t('cta')}
            </MagneticButton>

            <MagneticButton
              href={contactHref}
              variant="glass"
              icon={<ArrowUpRight className="h-4 w-4" />}
              className="shadow-[0_16px_46px_rgba(4,7,17,0.32)]"
            >
              {secondCta}
            </MagneticButton>
          </motion.div>

          <div className="grid max-w-3xl grid-cols-1 gap-4 pt-6 sm:grid-cols-3">
            <AnimatedStat value={15} label={t('statsYears')} />
            <AnimatedStat value={50} label={t('statsInvestments')} delay={0.08} />
            <AnimatedStat value={200} label={t('statsPartners')} delay={0.16} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="relative hidden lg:block"
        >
          <div className="glass-panel-strong liquid-border rounded-[2rem] p-4 sm:p-5">
            <div className="relative h-[30rem] w-full max-w-[34rem]">
              <div className="pointer-events-none absolute -left-8 top-10 h-44 w-44 rounded-full radial-glow-cyan blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 right-2 h-44 w-44 rounded-full radial-glow-emerald blur-3xl" />

              <div className="absolute inset-0 overflow-hidden rounded-[1.45rem] border border-white/18 shadow-[0_30px_80px_rgba(2,6,15,0.55)]">
                {showcaseImages.map((image, index) => (
                  <motion.div
                    key={image}
                    initial={false}
                    animate={{
                      opacity: activeImage === index ? 1 : 0,
                      scale: activeImage === index ? 1 : 1.03,
                    }}
                    transition={{ duration: 1.1, ease: 'easeInOut' }}
                    className="absolute inset-0"
                  >
                    <Image src={image} alt="Rseem Investment visual" fill className="object-cover" priority={index === 0} />
                  </motion.div>
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(3,8,16,0.8)] via-[rgba(7,15,29,0.28)] to-[rgba(8,16,29,0.06)]" />
              </div>

              {[
                { top: 26, right: 14, rotate: -4 },
                { top: 122, right: 36, rotate: -8 },
                { top: 216, right: 58, rotate: -12 },
              ].map((position, index) => {
                const card = showcaseCards[(index + activeCardOffset) % showcaseCards.length];

                return (
                  <motion.div
                    key={`${card.title}-${card.image}-${index}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0, rotate: position.rotate }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    whileHover={{ rotate: 0, y: -8, scale: 1.02 }}
                    className="glass-panel absolute h-28 w-56 overflow-hidden rounded-xl border-white/20"
                    style={{ top: position.top, right: position.right }}
                  >
                    <Image src={card.image} alt={card.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/15" />
                    <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-zinc-100">{card.title}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 7, 0] }}
        transition={{ opacity: { duration: 0.55, delay: 0.55 }, y: { duration: 2, repeat: Infinity } }}
        className="pointer-events-none absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1.5 md:flex"
      >
        <span className="text-xs uppercase tracking-[0.22em] text-zinc-400">{t('scrollHint')}</span>
        <ArrowDown className="h-4 w-4 text-luxury-gold" />
      </motion.div>
    </section>
  );
};

export default Hero;
