import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Paintings",
  description: "BELINTONY paintings collection.",
};

export default function PaintingsPage() {
  return (
    <div className='mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8'>
      <section className='rounded-[2rem] border border-[#d8c9ab] bg-[#f7f1e7] p-6 shadow-[0_22px_60px_rgba(53,45,37,0.05)] sm:p-8 lg:p-12'>
        <p className='text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#61574f]'>
          Collection
        </p>
        <h1 className='mt-4 text-5xl leading-none text-[#191613] sm:text-6xl'>
          Paintings
        </h1>
      </section>

      <div className='mt-10'>
        <Card className='border-dashed border-[#d4be93] bg-[#f4efe7]'>
          <CardContent className='flex min-h-55 flex-col items-center justify-center gap-4 p-10 text-center'>
            <p className='text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[#6e6258]'>
              No works listed
            </p>
            <p className='max-w-md text-base leading-7 text-[#504840]'>
              The BELINTONY paintings collection is currently empty and will be
              updated as works are available.
            </p>
            <Button
              nativeButton={false}
              render={<Link href='/' className='inline-flex items-center' />}
              variant='outline'
              className='border-[#d2b77c] bg-[#f9f4ec] text-[#1d1916] hover:bg-[#efe1c7]'
            >
              Return home
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
