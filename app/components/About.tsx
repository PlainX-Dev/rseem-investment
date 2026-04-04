'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Star, Zap, Brain, Handshake, Target } from 'lucide-react';

const iconMap = {
  shield: Shield,
  star: Star,
  zap: Zap,
  brain: Brain,
  handshake: Handshake,
  target: Target,
};

const About = () => {
  const t = useTranslations('about');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-20 lg:py-32 bg-rseem-light relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rseem-teal/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 ltr:left-0 rtl:right-0 w-96 h-96 bg-rseem-emerald/5 rounded-full filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-rseem-dark mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-rseem-gray font-semibold mb-6">{t('subtitle')}</p>
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20"
        >
          {/* Mission */}
          <motion.div
            variants={itemVariants}
            className="p-8 lg:p-10 rounded-xl bg-white border border-rseem-border/50 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-rseem-teal mb-4">
              {t('mission.title')}
            </h3>
            <p className="text-rseem-gray leading-relaxed text-lg">
              {t('mission.description')}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={itemVariants}
            className="p-8 lg:p-10 rounded-xl bg-white border border-rseem-border/50 shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-2xl font-bold text-rseem-emerald mb-4">
              {t('vision.title')}
            </h3>
            <p className="text-rseem-gray leading-relaxed text-lg">
              {t('vision.description')}
            </p>
          </motion.div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold font-display text-center text-rseem-dark mb-12">
            Core Values & Strengths
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {t.raw('values').map((value: any, idx: number) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-xl bg-white border border-rseem-border/50 shadow-lg hover:shadow-xl transition-all hover:border-rseem-teal/50"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rseem-teal to-rseem-emerald flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-rseem-dark">{value.title}</h4>
                  </div>
                  <p className="text-rseem-gray leading-relaxed">{value.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
