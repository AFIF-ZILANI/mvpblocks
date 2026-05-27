'use client';

import { memo, useMemo, useRef, useEffect, useState } from 'react';
import { Compare } from '../ui/compare';
import { useTheme } from 'next-themes';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';
import { geist } from '@/lib/fonts';
import Keyboard from './keyboard';

// Hoisted motion constants
const HEADER_HIDDEN = { opacity: 0, y: 50 } as const;
const HEADER_VISIBLE = { opacity: 1, y: 0 } as const;
const HEADER_TRANSITION = { duration: 0.5, delay: 0 } as const;
const IN_VIEW_OPTIONS = { once: true, amount: 0.3 } as const;

const DARK_FIRST = 'https://i.postimg.cc/K89v24wd/abt2.webp';
const LIGHT_FIRST = 'https://i.postimg.cc/CKzMLSVd/abt2-dark.webp';
const DARK_SECOND = 'https://i.postimg.cc/7YnZKKVP/abt1-dark.webp';
const LIGHT_SECOND = 'https://i.postimg.cc/SKN26Bbp/abt1.webp';

function HowToUse() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, IN_VIEW_OPTIONS);

  useEffect(() => {
    setMounted(true);
  }, []);

  const animateProp = isInView ? HEADER_VISIBLE : HEADER_HIDDEN;

  const isDark = theme === 'dark';
  const firstImage = useMemo(
    () => (isDark ? DARK_FIRST : LIGHT_FIRST),
    [isDark],
  );
  const secondImage = useMemo(
    () => (isDark ? DARK_SECOND : LIGHT_SECOND),
    [isDark],
  );

  return (
    <div className="relative md:mb-20 xl:mb-28">
      <motion.div
        ref={ref}
        initial={HEADER_HIDDEN}
        animate={animateProp}
        transition={HEADER_TRANSITION}
        className="flex max-w-[540px] flex-col items-start justify-start text-left md:mb-8"
      >
        <h2
          className={cn(
            'from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 mt-5 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent md:text-[54px] md:leading-[60px]',
            geist.className,
          )}
        >
          How to use
        </h2>
        <p className="mt-5 text-lg text-zinc-500">
          Just Ctrl C + Ctrl V and you are ready to go. You can use our
          components in your own projects.
        </p>
      </motion.div>
      <div className="relative mx-auto h-full max-w-5xl flex-col items-center justify-start md:flex-row xl:mb-8 xl:flex xl:h-[400px]">
        <Keyboard />
        {mounted && (
          <Compare
            firstImage={firstImage}
            secondImage={secondImage}
            firstImageClassName="object-cover object-left-top w-full"
            secondImageClassname="object-cover object-left-top w-full"
            className="absolute -top-16 -right-32 z-0 hidden rounded-[22px] md:rounded-lg xl:block"
            slideMode="hover"
            autoplay={true}
          />
        )}
      </div>
    </div>
  );
}

export default memo(HowToUse);
