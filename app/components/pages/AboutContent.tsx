'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Star, Zap, Brain, Users, Target } from 'lucide-react';

const iconMap = {
  shield: Shield,
  star: Star,
  zap: Zap,
  brain: Brain,
  handshake: Users,
  target: Target,
};

const AboutContent = () => {
  const t = useTranslations('about');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-20 lg:py-32 bg-rseem-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission & Vision Section */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-rseem-dark">
              {t('mission.title')}
            </h2>
            <p className="text-lg text-rseem-gray leading-relaxed">
              {t('mission.description')}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-display text-rseem-dark">
              {t('vision.title')}
            </h2>
            <p className="text-lg text-rseem-gray leading-relaxed">
              {t('vision.description')}
            </p>
          </motion.div>
        </motion.div>

        {/* Core Values Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display text-center text-rseem-dark mb-16">
            Core Values & Strengths
          </h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 },
              },
            }}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {t.raw('values').map((value: any, idx: number) => {
              const Icon = iconMap[value.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="p-8 rounded-xl bg-white border border-rseem-border/50 shadow-lg hover:shadow-xl hover:border-rseem-teal/50 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-rseem-teal to-rseem-emerald flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-rseem-dark">{value.title}</h3>
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

export default AboutContent;
