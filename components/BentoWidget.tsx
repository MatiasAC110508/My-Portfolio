'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface BentoWidgetProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  isDark?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function BentoWidget({
  children,
  className = '',
  delay = 0,
  isDark = true,
  onMouseEnter,
  onMouseLeave,
}: BentoWidgetProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOver={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = isDark
          ? '0 0 0 1px rgba(168,85,247,0.35), 0 8px 32px rgba(139,92,246,0.18)'
          : '0 0 0 1px rgba(167,139,250,0.45), 0 8px 32px rgba(100,80,200,0.12)';
      }}
      onMouseOut={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = isDark
          ? '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)'
          : '0 2px 16px rgba(100,80,200,0.08), inset 0 1px 0 rgba(255,255,255,0.9)';
      }}
      className={`relative overflow-hidden rounded-3xl p-6 backdrop-blur-2xl ${className}`}
      style={{
        background: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.52)',
        border: isDark ? '1px solid rgba(255,255,255,0.10)' : '1px solid rgba(255,255,255,0.70)',
        boxShadow: isDark
          ? '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)'
          : '0 2px 16px rgba(100,80,200,0.08), inset 0 1px 0 rgba(255,255,255,0.9)',
        transition: 'box-shadow 250ms ease',
      }}
    >
      <div
        className="absolute inset-x-0 top-0 h-px pointer-events-none rounded-t-3xl"
        style={{
          background: isDark
            ? 'linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)'
            : 'linear-gradient(90deg, transparent, rgba(255,255,255,1), transparent)',
        }}
      />
      {children}
    </motion.div>
  );
}