'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface FooterProps {
  locale: string;
}

const Footer = ({ locale }: FooterProps) => {
  const t = useTranslations('footer');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-rseem-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-rseem-teal to-rseem-emerald rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">R</span>
              </div>
              <span className="text-lg font-bold">Rseem</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              {t('about')}
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-bold">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              {[
                { label: 'Home', href: '/' },
                { label: 'About Us', href: '/about' },
                { label: 'Sectors', href: '/sectors' },
                { label: 'Contact', href: '/contact' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.span
                      whileHover={{ x: 4 }}
                      className="text-gray-400 hover:text-rseem-gold transition-colors flex items-center gap-1"
                    >
                      → {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-bold">{t('legal')}</h4>
            <ul className="space-y-2">
              {[
                { label: t('privacy'), href: '#' },
                { label: t('disclaimer'), href: '#' },
                { label: t('terms'), href: '#' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <motion.span
                      whileHover={{ x: 4 }}
                      className="text-gray-400 hover:text-rseem-gold transition-colors flex items-center gap-1"
                    >
                      → {link.label}
                    </motion.span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-lg font-bold">Stay Updated</h4>
            <p className="text-gray-400 text-sm">
              Subscribe to our newsletter for the latest investment insights.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-rseem-teal focus:outline-none text-white placeholder-gray-500 text-sm"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-rseem-teal rounded-lg text-sm font-bold hover:bg-rseem-emerald transition-colors"
              >
                →
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8" />

        {/* Bottom Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400"
        >
          <p>
            {t('rights')} © {new Date().getFullYear()} {' '}
            <span className="text-rseem-gold font-bold">Rseem Investment Company</span>
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://twitter.com/RSEEMInvest"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rseem-gold transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com/company/rseem-investment"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-rseem-gold transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
