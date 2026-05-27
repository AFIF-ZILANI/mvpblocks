'use client';

import { Heart } from 'lucide-react';
import { NavbarButton } from '@/components/ui/resizable-navbar';
import { redirect } from 'next/navigation';
import { memo } from 'react';

const goToSponsor = () =>
  redirect('https://github.com/sponsors/subhadeeproy3902');

export const SponsorButton = memo(function SponsorButton() {
  return (
    <NavbarButton
      variant="gradient"
      className="flex w-full items-center justify-center gap-1 bg-secondary/50 hover:bg-secondary/60 hover:translate-0!"
      onClick={goToSponsor}
    >
      <Heart className="inline-block h-4 w-4 fill-primary text-primary" />
      Sponsor
    </NavbarButton>
  );
});
