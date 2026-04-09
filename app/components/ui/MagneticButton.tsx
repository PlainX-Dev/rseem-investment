'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';

interface MagneticButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'glass';
  className?: string;
}

const join = (...classNames: Array<string | undefined>) => classNames.filter(Boolean).join(' ');

const MagneticButton = ({
  href,
  children,
  icon,
  variant = 'primary',
  className,
}: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const motionX = useMotionValue(0);
  const motionY = useMotionValue(0);

  const springX = useSpring(motionX, { stiffness: 220, damping: 20, mass: 0.6 });
  const springY = useSpring(motionY, { stiffness: 220, damping: 20, mass: 0.6 });

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = event.clientX - centerX;
    const deltaY = event.clientY - centerY;

    motionX.set(deltaX * 0.16);
    motionY.set(deltaY * 0.16);
  };

  const handleMouseLeave = () => {
    motionX.set(0);
    motionY.set(0);
  };

  const baseShell =
    variant === 'primary'
      ? 'bg-[linear-gradient(115deg,rgba(34,183,255,0.95),rgba(0,169,142,0.85),rgba(211,178,108,0.85),rgba(34,183,255,0.95))] bg-[length:220%_220%] animate-border-shift shadow-[0_22px_60px_rgba(0,169,142,0.35)]'
      : 'bg-[linear-gradient(115deg,rgba(34,183,255,0.5),rgba(211,178,108,0.42),rgba(0,169,142,0.45),rgba(34,183,255,0.5))] bg-[length:220%_220%] animate-border-shift';

  const innerShell =
    variant === 'primary'
      ? 'bg-[linear-gradient(180deg,rgba(10,16,28,0.9),rgba(11,20,33,0.84))] text-zinc-100'
      : 'glass-panel text-zinc-100';

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={join('group relative inline-flex rounded-full p-[1px]', baseShell, className)}
    >
      <Link
        href={href}
        className={join(
          'relative inline-flex min-h-[3.2rem] items-center justify-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-colors sm:text-base',
          innerShell,
        )}
      >
        <span className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="absolute -left-1/3 top-[-170%] h-[430%] w-1/3 -rotate-[18deg] bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm group-hover:animate-shine-sweep" />
        </span>

        <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70 radial-glow-cyan" />

        <span className="relative z-10">{children}</span>
        {icon ? <span className="relative z-10">{icon}</span> : null}
      </Link>
    </motion.div>
  );
};

export default MagneticButton;
