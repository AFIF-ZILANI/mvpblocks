'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { type CSSProperties, type ElementType, memo, useMemo } from 'react';

export type ShimmerProps = {
  children: string;
  as?: ElementType;
  className?: string;
  duration?: number;
  spread?: number;
  style?: CSSProperties;
};

/**
 * Shimmer — animated text shimmer for loading / progressive-reveal states.
 * Polymorphic via `as`. Memoized.
 */
export const Shimmer = memo(function Shimmer({
  children,
  as = 'span',
  className,
  duration = 2,
  spread = 2,
  style,
}: ShimmerProps) {
  const MotionComponent = useMemo(
    () => motion.create(as as keyof HTMLElementTagNameMap),
    [as],
  );

  const dynamicSpread = useMemo(
    () => Math.max(children.length * spread, 80),
    [children.length, spread],
  );

  return (
    <MotionComponent
      className={cn(
        'relative inline-block bg-clip-text text-transparent',
        className,
      )}
      initial={{ backgroundPosition: `${dynamicSpread}px 0` }}
      animate={{ backgroundPosition: `-${dynamicSpread}px 0` }}
      transition={{
        repeat: Infinity,
        duration,
        ease: 'linear',
      }}
      style={{
        backgroundImage:
          'linear-gradient(90deg, var(--shimmer-base, hsl(var(--muted-foreground) / 0.55)) 40%, var(--shimmer-highlight, hsl(var(--foreground))) 50%, var(--shimmer-base, hsl(var(--muted-foreground) / 0.55)) 60%)',
        backgroundSize: `${dynamicSpread * 2}px 100%`,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        ...style,
      }}
    >
      {children}
    </MotionComponent>
  );
});

Shimmer.displayName = 'Shimmer';
