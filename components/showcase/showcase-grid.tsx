'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { ShowcaseCard } from './showcase-card';
import { showcaseData } from '@/lib/showcase';
import { AddCard } from './add-card';

const GRID_INITIAL = { opacity: 0, y: 20 } as const;
const GRID_ANIMATE = { opacity: 1, y: 0 } as const;
const GRID_TRANSITION = { duration: 0.5 } as const;

function ShowcaseGridImpl() {
  return (
    <div className="space-y-8">
      {/* Showcase grid */}
      <motion.div
        initial={GRID_INITIAL}
        animate={GRID_ANIMATE}
        transition={GRID_TRANSITION}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {showcaseData.map((item, index) => (
          <ShowcaseCard key={item.name} item={item} index={index} />
        ))}
        <AddCard />
      </motion.div>
    </div>
  );
}

export const ShowcaseGrid = memo(ShowcaseGridImpl);
