import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrushCleaning,
  Landmark,
  Palette,
  Sparkles,
} from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "cn";

const leadership = [
  { name: "Belinda Smith", role: "Founder" },
  { name: "Anthony Jannette", role: "CEO" },
];

export default function Home() {
  return (
    <div className='mx-auto w-full max-w-6xl px-4 pb-10 pt-10 sm:px-6 lg:px-8'>
      <section className='relative overflow-hidden rounded-[2rem] border border-[#d5c6a4] bg-[#1a1715] shadow-[0_28px_80px_rgba(29,23,18,0.34)]'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,158,95,0.25),transparent_38%),linear-gradient(90deg,rgba(16,15,14,0.88),rgba(16,15,14,0.6))]' />
        <div className='relative grid items-center gap-8 px-5 py-8 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-10'>
          <div className='max-w-xl text-[#f6f0e8]'>
            <div className='mb-5 flex items-center gap-2 text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#d7c69e]'>
              <Sparkles className='size-4' />
              Curated acquisitions
            </div>
            <h1 className='max-w-lg text-5xl leading-[0.9] text-balance sm:text-6xl lg:text-7xl'>
              Timeless Art. Enduring Value.
            </h1>
            <p className='mt-5 max-w-lg text-base leading-7 text-[#e8dfd2] sm:text-lg'>
              BELINTONY is a partnership devoted to the thoughtful acquisition
              and sale of antiques and valuable paintings, bringing refined
              taste and enduring value to each collection.
            </p>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <Button
                nativeButton={false}
                render={
                  <Link
                    href='/paintings'
                    className='inline-flex items-center gap-2'
                  />
                }
                size='lg'
                className='bg-[#d9bf87] text-[#201b17] hover:bg-[#d1b26f]'
              >
                Explore collections
                <ArrowRight className='size-4' />
              </Button>
              <Button
                nativeButton={false}
                render={
                  <Link href='/about' className='inline-flex items-center' />
                }
                variant='secondary'
                size='lg'
                className='border border-[#d8c7a4] bg-[#221f1c] text-[#f7efe8] hover:bg-[#2d2824]'
              >
                Meet the partnership
              </Button>
            </div>
          </div>

          <div className='relative overflow-hidden rounded-[1.6rem] border border-[#c7b48a]/60 bg-[#2d2926] shadow-[0_30px_80px_rgba(0,0,0,0.2)]'>
            <div className='relative h-105 sm:h-125'>
              <Image
                src='https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=1200&q=80'
                alt='An elegant gallery interior displaying refined artwork'
                fill
                priority
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      <section className='mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start'>
        <div className='space-y-6'>
          <div className='inline-flex items-center gap-2 rounded-full border border-[#cabd9d] bg-[#f3ebdb] px-3 py-1.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[#4d4138]'>
            <Palette className='size-3.5' />
            BELINTONY
          </div>
          <h2 className='max-w-md text-4xl leading-none text-[#1c1a18] sm:text-5xl'>
            A distinct perspective on art and antiquities.
          </h2>
        </div>
        <div className='space-y-6'>
          <p className='max-w-2xl text-lg leading-8 text-[#4d4742]'>
            BELINTONY partners with collectors, sellers, and discerning clients
            seeking works of enduring beauty. Our focus remains deliberate:
            exceptional paintings, valuable objects, and the quiet confidence of
            provenance and taste.
          </p>
          <div className='flex flex-wrap gap-4 text-sm uppercase tracking-[0.2em] text-[#675d54]'>
            <span className='rounded-full border border-[#d8c29f] bg-[#f3ebdf] px-3 py-2'>
              Paintings
            </span>
            <span className='rounded-full border border-[#d8c29f] bg-[#f3ebdf] px-3 py-2'>
              Antiques
            </span>
            <span className='rounded-full border border-[#d8c29f] bg-[#f3ebdf] px-3 py-2'>
              Collecting
            </span>
          </div>
        </div>
      </section>

      <section className='mt-16 grid gap-6 md:grid-cols-3'>
        <Card className='border-[#d9c8a7] bg-[#f8f3eb] shadow-[0_12px_35px_rgba(36,31,26,0.06)]'>
          <CardHeader className='pb-3'>
            <div className='mb-3 inline-flex size-10 items-center justify-center rounded-full bg-[#e7dcc0] text-[#3d332d]'>
              <BrushCleaning className='size-5' />
            </div>
            <CardTitle className='text-2xl text-[#221d19]'>
              Curated selection
            </CardTitle>
          </CardHeader>
          <CardContent className='text-base leading-7 text-[#504840]'>
            Thoughtfully sourced works with a focus on character, period, and
            long-term significance.
          </CardContent>
        </Card>

        <Card className='border-[#d9c8a7] bg-[#f8f3eb] shadow-[0_12px_35px_rgba(36,31,26,0.06)]'>
          <CardHeader className='pb-3'>
            <div className='mb-3 inline-flex size-10 items-center justify-center rounded-full bg-[#e7dcc0] text-[#3d332d]'>
              <Landmark className='size-5' />
            </div>
            <CardTitle className='text-2xl text-[#221d19]'>
              Considered counsel
            </CardTitle>
          </CardHeader>
          <CardContent className='text-base leading-7 text-[#504840]'>
            A measured, client-centered approach to buying, selling, and
            identifying works of enduring value.
          </CardContent>
        </Card>

        <Card className='border-[#d9c8a7] bg-[#f8f3eb] shadow-[0_12px_35px_rgba(36,31,26,0.06)]'>
          <CardHeader className='pb-3'>
            <div className='mb-3 inline-flex size-10 items-center justify-center rounded-full bg-[#e7dcc0] text-[#3d332d]'>
              <Sparkles className='size-5' />
            </div>
            <CardTitle className='text-2xl text-[#221d19]'>
              Lasting value
            </CardTitle>
          </CardHeader>
          <CardContent className='text-base leading-7 text-[#504840]'>
            We appreciate the relationship between beauty, provenance, and
            stewardship across time.
          </CardContent>
        </Card>
      </section>

      <section className='mt-20 rounded-[2rem] border border-[#d8c8a4] bg-[#f6f1e7] p-6 sm:p-8 lg:p-10'>
        <div className='mb-8 flex items-center justify-between gap-4'>
          <div>
            <p className='text-[0.72rem] font-medium uppercase tracking-[0.28em] text-[#5d5249]'>
              Leadership
            </p>
            <h2 className='mt-2 text-4xl text-[#201b18] sm:text-5xl max-md:text-center'>
              The partnership behind BELINTONY.
            </h2>
          </div>
          {/* <Button
            render={<a href='/about' className='inline-flex items-center' />}
            variant='outline'
            className='hidden border-[#d3b680] bg-[#fbf6ef] text-[#1d1a17] hover:bg-[#f0e4cf] sm:inline-flex max-md:hidden'
          >
            Our story
          </Button> */}

          <Link
            href='/about'
            className={cn(
              buttonVariants({ variant: "outline" }),
              "inline-flex items-center hidden border-[#d3b680] bg-[#fbf6ef] text-[#1d1a17] hover:bg-[#f0e4cf] sm:inline-flex max-md:hidden",
            )}
          >
            Our story
          </Link>
        </div>

        <div className='grid gap-5 md:grid-cols-2'>
          {leadership.map((person) => (
            <div
              key={person.name}
              className='rounded-[1.5rem] border border-[#d7c5a2] bg-[#f4efe8] p-5 shadow-[0_16px_40px_rgba(32,27,23,0.05)]'
            >
              <div className='mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-[#d1b68d] bg-[#efe0c4] text-lg font-semibold text-[#352f2a]'>
                {person.name
                  .split(" ")
                  .map((part) => part[0])
                  .join("")
                  .slice(0, 2)}
              </div>
              <h3 className='mt-3 text-3xl leading-none text-[#1b1815]'>
                {person.name}
              </h3>
              <p className='text-[0.72rem] uppercase tracking-[0.24em] text-[#7a6d62]'>
                {person.role}
              </p>
              <Separator className='my-4 bg-[#e1d3b1]' />
              <p className='text-base leading-7 text-[#504941]'>
                A partnership devoted to the thoughtful acquisition and sale of
                antiques and valuable paintings.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
