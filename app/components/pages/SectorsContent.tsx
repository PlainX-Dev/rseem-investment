'use client';

import { useLocale, useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Rocket, Building2, TrendingUp, Compass, ChevronDown } from 'lucide-react';

const iconMap = {
  'rocket': Rocket,
  'building-2': Building2,
  'trending-up': TrendingUp,
  'compass': Compass,
};

const SectorsContent = () => {
  const t = useTranslations('sectors');
  const locale = useLocale();
  const { ref, inView } = useInView({ threshold: 0, triggerOnce: true, rootMargin: '0px 0px 180px 0px' });
  const [expandedSector, setExpandedSector] = useState<string | null>(null);

  return (
    <section className="py-20 lg:py-32 bg-rseem-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Detailed Sectors */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="space-y-8"
        >
          {t.raw('sectors_list').map((sector: any, idx: number) => {
            const Icon = iconMap[sector.icon as keyof typeof iconMap];
            const isExpanded = expandedSector === sector.id;

            return (
              <motion.div
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group"
              >
                <motion.button
                  onClick={() => setExpandedSector(isExpanded ? null : sector.id)}
                  className="w-full text-left p-8 rounded-xl bg-white border border-rseem-border/50 shadow-lg hover:shadow-xl hover:border-rseem-teal/50 transition-all"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-rseem-teal to-rseem-emerald flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-2xl font-bold text-rseem-dark">{sector.title}</h3>
                        <p className="text-rseem-gray mt-2">{sector.description}</p>
                      </div>
                    </div>
                    <ChevronDown
                      className={`w-6 h-6 text-rseem-teal flex-shrink-0 transition-transform ${
                        isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </motion.button>

                {/* Expanded Services */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: isExpanded ? 1 : 0,
                    height: isExpanded ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-8 bg-gradient-to-br from-rseem-teal/5 to-rseem-emerald/5 border-x border-b border-rseem-border/50">
                    <h4 className="text-lg font-bold text-rseem-dark mb-6">{locale === 'ar' ? 'خدماتنا' : 'Our Services'}</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {sector.services.map((service: string, serviceIdx: number) => (
                        <motion.div
                          key={serviceIdx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: serviceIdx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-rseem-teal flex-shrink-0 mt-2" />
                          <span className="text-rseem-gray">{service}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
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
          className="text-center mt-20 pt-16 border-t border-rseem-border"
        >
          <p className="text-lg text-rseem-gray mb-6">
            {t('partnershipPrompt')}
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-rseem-teal to-rseem-emerald text-white rounded-lg font-bold shadow-lg hover:shadow-xl transition-all"
          >
            {t('consultationCta')}
            <ChevronDown className="w-5 h-5 -rotate-90" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SectorsContent;
