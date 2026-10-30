import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteShell } from "@/components/site-shell";
import { Analytics } from "@vercel/analytics/next";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://belintony.com"),
  title: {
    default: "BELINTONY | Timeless Art. Enduring Value.",
    template: "%s | BELINTONY",
  },
  description:
    "BELINTONY is a global partnership buying and selling antiques and valuable paintings for collectors in the United States and worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang='en'
      data-scroll-behavior='smooth'
      className={`${displayFont.variable} ${bodyFont.variable} h-full antialiased`}
    >
      <body className='min-h-full bg-[#f3efe7] text-[#171512]'>
        <Analytics />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
