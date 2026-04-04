'use client';

import { motion } from 'framer-motion';
import Contact from '@/app/components/Contact';

const ContactHero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-fit flex items-center justify-center overflow-hidden bg-gradient-to-br from-rseem-dark via-rseem-navy to-rseem-dark pt-20 pb-20">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <motion.div
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/3 -right-32 w-96 h-96 bg-rseem-teal/30 rounded-full filter blur-3xl"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-1/3 -left-32 w-96 h-96 bg-rseem-emerald/20 rounded-full filter blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rseem-teal/10 border border-rseem-teal/30 w-fit mx-auto"
            >
              <span className="w-2 h-2 bg-rseem-gold rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-rseem-gold">Get In Touch</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-display"
            >
              Contact Rseem
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-rseem-gold font-semibold"
            >
              We're Ready to Partner
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto"
            >
              Have questions about our investment opportunities? Our team is ready to discuss how Rseem can support your growth and vision.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <Contact />
    </>
  );
};

export default ContactHero;
