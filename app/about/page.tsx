import type { Metadata } from "next";

import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about BELINTONY and the partnership behind its antique and painting business.",
};

export default function AboutPage() {
  return (
    <div className='mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8'>
      <section className='rounded-[2rem] border border-[#d9c9a5] bg-[#f8f3ea] p-6 shadow-[0_22px_60px_rgba(53,45,37,0.06)] sm:p-8 lg:p-12'>
        <p className='text-[0.72rem] font-medium uppercase tracking-[0.26em] text-[#695d54]'>
          BELINTONY
        </p>
        <h1 className='mt-4 max-w-2xl text-5xl leading-none text-[#1a1714] sm:text-6xl'>
          The partnership behind a considered collection.
        </h1>
        <p className='mt-6 max-w-3xl text-lg leading-8 text-[#4f4742]'>
          BELINTONY is a partnership of two people engaged in buying and selling
          antiques and valuable paintings. Our approach is deliberate, refined,
          and grounded in trust, taste, and an enduring appreciation for objects
          of significance.
        </p>
      </section>

      <div className='mt-12 grid gap-8 lg:grid-cols-2'>
        <Card className='border-[#d8c9a8] bg-[#f7f1e6]'>
          <CardContent className='p-7 sm:p-8'>
            <h2 className='mt-4 text-4xl text-[#191613]'>Belinda Smith</h2>
            <p className='text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[#5e5349]'>
              Founder
            </p>
            <Separator className='my-5 bg-[#e0ceb0]' />
            <p className='text-base leading-7 text-[#514a44]'>
              BELINTONY is a partnership of two people engaged in buying and
              selling antiques and valuable paintings.
            </p>
          </CardContent>
        </Card>

        <Card className='border-[#d8c9a8] bg-[#f7f1e6]'>
          <CardContent className='p-7 sm:p-8'>
            <h2 className='mt-4 text-4xl text-[#191613]'>Anthony Jannette</h2>
            <p className='text-[0.72rem] font-medium uppercase tracking-[0.24em] text-[#5e5349]'>
              CEO
            </p>
            <Separator className='my-5 bg-[#e0ceb0]' />
            <p className='text-base leading-7 text-[#514a44]'>
              BELINTONY is a partnership of two people engaged in buying and
              selling antiques and valuable paintings.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
