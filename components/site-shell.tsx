import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, Menu, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/paintings", label: "Paintings" },
  { href: "/antiques", label: "Antiques" },
  { href: "/about", label: "About" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen bg-[#f3efe7] text-[#1c1a18]'>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className='sticky top-0 z-50 border-b border-[#d7c9ad]/80 bg-[#f5f1ea]/85 backdrop-blur-xl'>
      <div className='mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8'>
        <Link href='/' className='flex items-center gap-2 text-[#171512]'>
          <span className='inline-flex size-8 items-center justify-center rounded-full border border-[#b99862]/60 bg-[#efe6d5] text-[#5f4a36] shadow-sm'>
            <Sparkles className='size-4' />
          </span>
          <span className='font-display text-2xl tracking-[0.28em] text-[#181512] uppercase'>
            BELINTONY
          </span>
        </Link>

        <div className='hidden md:flex md:items-center md:justify-center'>
          <NavigationMenu>
            <NavigationMenuList className='gap-1 rounded-full border border-[#d1c3a7] bg-[#f4efe7]/80 py-1.5 shadow-[0_8px_30px_rgba(28,26,24,0.05)]'>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-full px-3 py-2 text-sm font-medium tracking-[0.12em] text-[#2e2a27] uppercase transition-colors hover:bg-[#e3d8ba]/60 hover:text-[#1b1916] ${
                      item.href === "/" ? "bg-[#efe4cb]" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className='flex items-center gap-3 md:hidden'>
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant='outline'
                  size='icon'
                  className='border-[#cabd9d] bg-[#f8f2ea] text-[#201d1a] shadow-sm hover:bg-[#efe3ca]'
                  aria-label='Open navigation menu'
                />
              }
            >
              <Menu className='size-5' />
            </SheetTrigger>
            <SheetContent
              side='right'
              className='w-[84vw] max-w-sm border-[#d9ceb3] bg-[#1f1c1a] text-[#f4efe7]'
            >
              <SheetTitle className='sr-only'>Navigation</SheetTitle>
              <div className='mt-8 flex flex-col gap-2'>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className='rounded-xl border border-transparent px-3 py-3 text-base font-medium tracking-[0.14em] text-[#f5f0e8] uppercase transition-colors hover:border-[#d2b573]/60 hover:bg-[#312d24]'
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className='border-t border-[#d9cbb1] bg-[#efe9df]'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
        <div>
          <p className='font-display text-3xl tracking-[0.2em] text-[#1a1714] uppercase'>
            BELINTONY
          </p>
          <p className='mt-2 max-w-md text-sm leading-6 text-[#4d453d]'>
            Buying and selling antiques and valuable paintings with a refined,
            considered approach.
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
