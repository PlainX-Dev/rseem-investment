'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Rocket, Building2, TrendingUp, Compass, ChevronRight } from 'lucide-react';

const iconMap = {
  'rocket': Rocket,
  'building-2': Building2,
  'trending-up': TrendingUp,
  'compass': Compass,
};

const Sectors = () => {
  const t = useTranslations('sectors');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [expandedSector, setExpandedSector] = React.useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 -translate-y-1/2 ltr:right-0 rtl:left-0 w-96 h-96 bg-rseem-teal/5 rounded-full filter blur-3xl" />

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
          <p className="text-lg text-rseem-gray max-w-3xl mx-auto">{t('description')}</p>
        </motion.div>

        {/* Sectors Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          {t.raw('sectors_list').map((sector: any, idx: number) => {
            const Icon = iconMap[sector.icon as keyof typeof iconMap];
            const isExpanded = expandedSector === sector.id;

            return (
              <motion.div
                key={sector.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setExpandedSector(isExpanded ? null : sector.id)}
              >
                <motion.div
                  className="relative overflow-hidden rounded-xl border border-rseem-border/50 bg-gradient-to-br from-white to-rseem-light p-8 shadow-lg hover:shadow-xl transition-all h-full flex flex-col"
                >
                  {/* Background accent */}
                  <div className="absolute top-0 ltr:right-0 rtl:left-0 w-32 h-32 bg-rseem-teal/5 rounded-full -translate-y-1/2 group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10 flex-1">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-lg bg-gradient-to-br from-rseem-teal to-rseem-emerald flex items-center justify-center mb-4"
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-rseem-dark mb-2">
                      {sector.title}
                    </h3>

                    {/* Description */}
                    <p className="text-rseem-gray leading-relaxed mb-6">
                      {sector.description}
                    </p>

                    {/* Services List - Expandable */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{
                        opacity: isExpanded ? 1 : 0,
                        height: isExpanded ? 'auto' : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2 mb-6"
                    >
                      {sector.services.map((service: string, serviceIdx: number) => (
                        <motion.div
                          key={serviceIdx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: serviceIdx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <ChevronRight className="w-5 h-5 text-rseem-teal flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-rseem-gray">{service}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-2 text-rseem-teal font-semibold text-sm group/btn"
                  >
                    Learn More
                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center pt-12 border-t border-rseem-border"
        >
          <p className="text-lg text-rseem-gray mb-6">
            Ready to explore partnership opportunities?
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-rseem-teal to-rseem-emerald text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
          >
            Schedule Your Consultation
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

import React from 'react';
export default Sectors;
