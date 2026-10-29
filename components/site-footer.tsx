import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function SiteFooter() {
  return (
    <footer className='border-t border-[#d9cbb1] bg-[#efe9df]'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
        <div>
          <p className='font-display text-3xl tracking-[0.2em] text-[#1a1714] uppercase'>
            BELINTONY
          </p>
          <p className='mt-2 max-w-md text-sm leading-6 text-[#4d453d]'>
            Serving collectors in the United States and worldwide, buying and
            selling antiques and valuable paintings with a refined, considered
            approach.
          </p>
        </div>

        <div className='flex items-center gap-3 text-sm uppercase tracking-[0.14em] text-[#4a4038]'>
          <Link
            href='/paintings'
            className='transition-opacity hover:opacity-80'
          >
            Paintings
          </Link>
          <span className='text-[#8d7a60]'>/</span>
          <Link
            href='/antiques'
            className='transition-opacity hover:opacity-80'
          >
            Antiques
          </Link>
          <span className='text-[#8d7a60]'>/</span>
          <Link href='/about' className='transition-opacity hover:opacity-80'>
            About
          </Link>
        </div>

        <Button
          nativeButton={false}
          render={
            <Link
              href='/paintings'
              className='inline-flex items-center gap-2'
            />
          }
          variant='outline'
          className='border-[#c9b287] bg-[#f6f0e6] text-[#1b1916] hover:bg-[#eae0cf]'
        >
          View collections
          <ArrowRight className='size-4' />
        </Button>
      </div>
    </footer>
  );
}
