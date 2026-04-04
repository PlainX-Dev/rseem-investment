'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const AnimatedCounter = ({ target, duration = 2000 }: { target: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(target * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}</span>;
};

const Why = () => {
  const t = useTranslations('why');
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
    <section className="py-20 lg:py-32 bg-gradient-to-br from-rseem-dark via-rseem-navy to-rseem-dark relative overflow-hidden text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 -right-40 w-80 h-80 bg-rseem-teal/20 rounded-full filter blur-3xl"
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], scale: [1, 1.1, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 -left-40 w-80 h-80 bg-rseem-emerald/15 rounded-full filter blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-rseem-gold font-semibold">{t('subtitle')}</p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {t.raw('statistics').map((stat: any, idx: number) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="p-8 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-rseem-teal/50 transition-all group"
            >
              <div className="text-5xl md:text-6xl font-bold text-rseem-gold mb-2">
                <AnimatedCounter target={parseInt(stat.number)} duration={2500} />
                <span className="text-4xl ms-1">+</span>
              </div>
              <h3 className="text-lg font-bold mb-2 group-hover:text-rseem-teal transition-colors">
                {stat.label}
              </h3>
              <p className="text-sm text-gray-300">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
        >
          {/* Left - Benefits */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold font-display">What Sets Us Apart</h3>
            {[
              {
                title: 'Strategic Expertise',
                description: 'Deep market knowledge and proven investment strategies',
              },
              {
                title: 'Local Excellence',
                description: 'Unmatched understanding of the Saudi business ecosystem',
              },
              {
                title: 'Global Network',
                description: 'Strong international partnerships and resources',
              },
              {
                title: 'Long-term Vision',
                description: 'Committed to sustainable growth and Vision 2030 alignment',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.6 }}
                className="flex gap-4"
              >
                <div className="w-2 h-2 rounded-full bg-rseem-gold flex-shrink-0 mt-2" />
                <div>
                  <h4 className="font-bold mb-1">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right - Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rseem-teal/20 to-rseem-emerald/20 rounded-xl blur-2xl" />
            <div className="relative p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="space-y-4">
                {[
                  { label: 'Governance', value: '100%' },
                  { label: 'Transparency', value: '100%' },
                  { label: 'Quality', value: '98%' },
                  { label: 'Client Satisfaction', value: '98%' },
                ].map((metric, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{metric.label}</span>
                      <span className="text-rseem-gold">{metric.value}</span>
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: metric.value } : { width: 0 }}
                        transition={{ duration: 1.5, delay: 0.5 + idx * 0.1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-rseem-teal to-rseem-emerald rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-lg text-gray-200 mb-6">
            Ready to partner with a leader in Saudi investment?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rseem-gold to-rseem-gold/80 text-rseem-dark rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            {t('cta')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Why;
