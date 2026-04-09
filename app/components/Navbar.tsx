'use client';

import { useEffect, useMemo, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Globe, Menu, X } from 'lucide-react';
import MagneticButton from '@/app/components/ui/MagneticButton';

interface NavbarProps {
  locale: string;
}

const Navbar = ({ locale }: NavbarProps) => {
  const t = useTranslations('nav');
  const currentLocale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const localizedPath = (href: string) => {
    if (href === '/') return `/${currentLocale}`;
    return `/${currentLocale}${href}`;
  };

  const navLinks = useMemo(
    () => [
      { href: localizedPath('/'), label: t('home') },
      { href: localizedPath('/about'), label: t('about') },
      { href: localizedPath('/sectors'), label: t('sectors') },
      { href: localizedPath('/contact'), label: t('contact') },
    ],
    [t, currentLocale],
  );

  const toggleLanguage = () => {
    const targetLocale = currentLocale === 'en' ? 'ar' : 'en';
    const segments = pathname.split('/').filter(Boolean);

    if (segments.length > 0) {
      if (segments[0] === 'en' || segments[0] === 'ar') {
        segments[0] = targetLocale;
      } else {
        segments.unshift(targetLocale);
      }
    } else {
      segments.push(targetLocale);
    }

    router.push(`/${segments.join('/')}`);
  };

  const shellClass = isScrolled
    ? 'glass-panel-strong border-white/20 shadow-[0_12px_40px_rgba(2,8,19,0.45)]'
    : 'border-white/8 bg-[rgba(7,13,24,0.34)] backdrop-blur-xl';

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <motion.nav
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border px-3 py-2 transition-all duration-300 sm:px-5 sm:py-3 ${shellClass}`}
      >
        <Link href={localizedPath('/')} className="group flex items-center gap-3 rounded-xl px-2 py-1">
          <div className="glass-panel flex items-center rounded-xl px-2 py-1">
            <Image src="/images/slogo.png" alt="Rseem Investment" width={132} height={36} className="h-8 w-auto sm:h-9" priority />
          </div>
          <div className="hidden sm:block">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.26em] text-zinc-300 group-hover:text-zinc-100">
              {locale === 'ar' ? 'رَسِيمْ' : 'RSEEM'}
            </p>
            <p className="text-xs tracking-[0.17em] text-zinc-400">Investment Company</p>
          </div>
        </Link>

        <div className="hidden items-center gap-1.5 lg:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all ${
                  active ? 'text-zinc-100' : 'text-zinc-300 hover:text-zinc-50'
                }`}
              >
                {active ? (
                  <span className="pointer-events-none absolute inset-0 rounded-full bg-[linear-gradient(120deg,rgba(34,183,255,0.22),rgba(0,169,142,0.14),rgba(211,178,108,0.22))]" />
                ) : null}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleLanguage}
            className="glass-panel inline-flex min-h-[2.7rem] items-center justify-center gap-1.5 rounded-full px-3 text-xs font-semibold tracking-wide text-zinc-100 sm:px-4 sm:text-sm"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4 text-luxury-cyan" />
            <span>{currentLocale === 'en' ? 'العربية' : 'English'}</span>
          </button>

          <div className="hidden md:block">
            <MagneticButton href={localizedPath('/contact')} className="scale-[0.92]" variant="primary">
              {t('partnerWithUs')}
            </MagneticButton>
          </div>

          <button
            onClick={() => setIsOpen((value) => !value)}
            className="glass-panel inline-flex h-[2.7rem] w-[2.7rem] items-center justify-center rounded-full text-zinc-100 lg:hidden"
            aria-label="Toggle mobile menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
            className="mx-auto mt-2 w-full max-w-7xl overflow-hidden rounded-2xl border border-white/15 glass-panel-strong lg:hidden"
          >
            <div className="space-y-1.5 p-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium tracking-wide text-zinc-200 transition-colors hover:bg-white/10 hover:text-zinc-50"
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-2">
                <MagneticButton href={localizedPath('/contact')} className="w-full" variant="primary">
                  {t('partnerWithUs')}
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
