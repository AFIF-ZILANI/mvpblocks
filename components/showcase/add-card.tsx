import { memo } from 'react';
import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ADD_INITIAL = { opacity: 0 } as const;
const ADD_ANIMATE = { opacity: 1 } as const;
const ADD_TRANSITION = { duration: 0.5, delay: 0.2 } as const;

function AddCardImpl() {
  return (
    <motion.div
      initial={ADD_INITIAL}
      animate={ADD_ANIMATE}
      transition={ADD_TRANSITION}
      className="relative flex h-full flex-col items-center justify-center rounded-lg border-2 border-dashed border-zinc-300 text-center dark:border-zinc-800"
    >
      <Link
        prefetch={false}
        href="https://github.com/subhadeeproy3902/mvpblocks/discussions/19"
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-full w-full cursor-pointer flex-col items-center justify-center"
      >
        <PlusCircle className="text-primary mb-4 h-12 w-12 opacity-70" />
        <h3 className="mb-2 text-xl font-semibold">Add yours</h3>
      </Link>
    </motion.div>
  );
}

export const AddCard = memo(AddCardImpl);
