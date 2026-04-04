'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X, Globe } from 'lucide-react';

interface NavbarProps {
  locale: string;
}

const Navbar = ({ locale }: NavbarProps) => {
  const t = useTranslations('nav');
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Language switching logic
  const toggleLanguage = () => {
    const newLocale = currentLocale === 'en' ? 'ar' : 'en';
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  // Navigation links
  const navLinks = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/sectors', label: t('sectors') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-white/80 border-b border-rseem-border/40 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/" className="flex items-center group">
              <div className="flex items-center gap-2 rounded-xl bg-white/90 border border-rseem-border/60 px-2 py-1 shadow-sm">
                <Image
                  src="/images/slogo.png"
                  alt="Rseem Investment"
                  width={140}
                  height={40}
                  className="h-10 w-auto"
                  priority
                />
                <div className="text-lg font-bold text-rseem-navy group-hover:text-rseem-teal transition-colors hidden sm:block">
                  {locale === 'ar' ? 'رَسِيمْ' : 'Rseem'}
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 text-sm font-medium text-rseem-dark hover:text-rseem-teal transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 inset-x-0 h-0.5 bg-rseem-teal scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.button>
              </Link>
            ))}
          </div>

          {/* Right Section: Language Switcher & CTA */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-rseem-teal/10 transition-colors border border-rseem-teal/30 hover:border-rseem-teal"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 text-rseem-teal" />
              <span className="text-sm font-medium text-rseem-dark">
                {currentLocale === 'en' ? 'العربية' : 'English'}
              </span>
            </motion.button>

            {/* Primary CTA */}
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden sm:flex items-center px-6 py-2.5 bg-gradient-to-r from-rseem-teal to-rseem-emerald text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              >
                {t('partnerWithUs')}
              </motion.button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-rseem-teal/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-rseem-dark" />
              ) : (
                <Menu className="w-6 h-6 text-rseem-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-4 space-y-2 border-t border-rseem-border/20">
            {navLinks.map((link, idx) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link href={link.href}>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-rseem-dark hover:bg-rseem-teal/10 hover:text-rseem-teal transition-colors"
                  >
                    {link.label}
                  </button>
                </Link>
              </motion.div>
            ))}

            <div className="flex gap-2 pt-4 border-t border-rseem-border/20">
              <button
                onClick={toggleLanguage}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-rseem-teal/10 text-rseem-teal border border-rseem-teal/30"
              >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">
                  {currentLocale === 'en' ? 'العربية' : 'English'}
                </span>
              </button>
              <Link href="/contact" className="flex-1">
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full px-3 py-2 bg-rseem-teal text-white rounded-lg font-semibold text-sm"
                >
                  {t('partnerWithUs')}
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
