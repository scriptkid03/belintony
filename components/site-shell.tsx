import type { ReactNode } from "react";
import { SiteHeader } from "@/components/site-header";
import SiteFooter from "@/components/site-footer";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen bg-[#f3efe7] text-[#1c1a18]'>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
