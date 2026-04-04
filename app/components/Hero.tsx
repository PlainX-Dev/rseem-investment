'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

const Hero = () => {
  const t = useTranslations('hero');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rseem-dark via-rseem-navy to-rseem-dark pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ 
            opacity: 0.45,
            scale: 1,
            y: [0, 10, 0],
          }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 -right-24 w-72 h-72 bg-rseem-teal/25 rounded-full filter blur-2xl"
        />
        <motion.div
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ 
            opacity: 0.4,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
          className="absolute bottom-20 -left-24 w-72 h-72 bg-rseem-emerald/20 rounded-full filter blur-2xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <motion.div variants={itemVariants} className="space-y-6 text-white">
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rseem-teal/10 border border-rseem-teal/30 w-fit"
            >
              <span className="w-2 h-2 bg-rseem-gold rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-rseem-gold">
                {t('badge')}
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-display"
              >
                {t('headline')}
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-xl md:text-2xl text-rseem-gold font-semibold"
              >
                {t('subheadline')}
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-200 leading-relaxed max-w-lg"
            >
              {t('description')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(27, 94, 92, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-rseem-teal to-rseem-emerald text-white rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  {t('cta')}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              <Link href="/sectors">
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(27, 94, 92, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-rseem-teal text-rseem-teal rounded-lg font-bold text-lg hover:bg-rseem-teal/10 transition-all"
                >
                  {t('explore')}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 pt-8 border-t border-rseem-teal/20"
            >
              {[
                { number: '15+', label: t('statsYears') },
                { number: '50+', label: t('statsInvestments') },
                { number: '200+', label: t('statsPartners') },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-rseem-gold">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            variants={itemVariants}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-xl h-[30rem]">
              <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
                <Image
                  src="/images/slide11.jpg"
                  alt="Rseem corporate visual"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rseem-dark/75 via-rseem-dark/25 to-transparent" />
              </div>

              {[
                { delay: 0, title: t('cardVenture'), image: '/images/flip2.jpg' },
                { delay: 0.2, title: t('cardPrivateEquity'), image: '/images/flip3.jpg' },
                { delay: 0.4, title: t('cardRealEstate'), image: '/images/flip4.jpg' },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20, rotateZ: -5 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    rotateZ: idx * -3,
                  }}
                  transition={{ delay: card.delay + 0.5, duration: 0.6 }}
                  whileHover={{ rotateZ: 0, y: -10 }}
                  className="absolute w-64 h-36 rounded-xl border border-white/20 overflow-hidden shadow-2xl"
                  style={{
                    top: `${idx * 74 + 30}px`,
                    right: `${idx * 24}px`,
                  }}
                >
                  <Image src={card.image} alt={card.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/35" />
                  <h3 className="absolute bottom-3 left-3 right-3 text-white font-bold text-base">{card.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-gray-400 text-sm font-medium">{t('scrollHint')}</span>
          <ArrowDown className="w-5 h-5 text-rseem-gold" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
