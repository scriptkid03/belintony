"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/paintings", label: "Paintings" },
  { href: "/antiques", label: "Antiques" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  function isActive(href: string) {
    return href === "/"
      ? pathname === href
      : pathname === href || pathname.startsWith(`${href}/`);
  }

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
            <NavigationMenuList className='gap-1 rounded-full border border-[#d1c3a7] bg-[#f4efe7]/80 py-1.5 shadow-[0_8px_30px_rgba(28,26,24,0.05)] max-md:mt-2'>
              {navItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <NavigationMenuItem key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`rounded-full px-3 py-2 text-sm font-medium tracking-[0.12em] uppercase transition-colors ${
                        active
                          ? "bg-[#e7d8b8] text-[#211a13] shadow-[inset_0_0_0_1px_rgba(169,137,82,0.45)]"
                          : "text-[#514840] hover:bg-[#e3d8ba]/60 hover:text-[#1b1916]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className='flex items-center gap-3 md:hidden'>
          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              render={
                <Button
                  variant='outline'
                  size='sm'
                  className='h-10 gap-2 border-[#cabd9d] bg-[#f8f2ea] px-3 text-[#201d1a] shadow-sm hover:bg-[#efe3ca]'
                  aria-label={
                    menuOpen ? "Close navigation menu" : "Open navigation menu"
                  }
                />
              }
            >
              <Menu className='size-5' />
              <span className='text-xs font-semibold tracking-[0.12em] uppercase'>
                Menu
              </span>
            </SheetTrigger>
            <SheetContent
              side='right'
              className='w-[min(88vw,25rem)] max-w-sm border-[#554936] bg-[#1f1c1a] px-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-12 text-[#f4efe7] shadow-[-24px_0_70px_rgba(0,0,0,0.28)]'
            >
              <div className='mb-5 flex items-center gap-3 pr-9'>
                <span className='inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-[#b99862]/60 bg-[#342d21] text-[#d8bd83]'>
                  <Sparkles className='size-4' />
                </span>
                <div>
                  <SheetTitle className='font-display text-xl tracking-[0.18em] text-[#f5efe5] uppercase'>
                    BELINTONY
                  </SheetTitle>
                  <SheetDescription className='mt-1 text-xs tracking-[0.08em] text-[#c5b9a7]'>
                    Explore the collections
                  </SheetDescription>
                </div>
              </div>

              <nav
                aria-label='Mobile navigation'
                className='flex flex-col gap-2'
              >
                {navItems.map((item) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`group flex min-h-14 items-center justify-between rounded-xl border px-4 py-3 text-base font-medium tracking-[0.12em] uppercase transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d8bd83] ${
                        active
                          ? "border-[#d2b573]/65 bg-[#342d21] text-[#e4c98f]"
                          : "border-transparent text-[#f5f0e8] hover:border-[#d2b573]/45 hover:bg-[#2b2721]"
                      }`}
                    >
                      {item.label}
                      <span className='flex items-center gap-3'>
                        {active && (
                          <span className='text-[0.62rem] tracking-[0.14em] text-[#cfb77f] uppercase'>
                            Current
                          </span>
                        )}
                        <ArrowRight
                          aria-hidden='true'
                          className={`size-4 transition-transform ${
                            active
                              ? "text-[#d8bd83]"
                              : "text-[#a99c8b] group-hover:translate-x-1 group-hover:text-[#e4d6bb]"
                          }`}
                        />
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div className='mt-auto border-t border-[#514635] pt-5'>
                <p className='mb-3 text-xs leading-5 text-[#c5b9a7]'>
                  Buying and selling antiques and valuable paintings.
                </p>
                <Link
                  href='/paintings'
                  onClick={() => setMenuOpen(false)}
                  className='flex min-h-12 items-center justify-between rounded-full bg-[#d7bc81] px-5 text-sm font-semibold tracking-[0.08em] text-[#211b14] transition-colors hover:bg-[#e5cc96] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e5cc96]'
                >
                  Browse paintings
                  <ArrowRight aria-hidden='true' className='size-4' />
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
