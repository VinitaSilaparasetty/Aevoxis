import { cn } from "@/lib/utils";

import gdeLogo from "@/assets/logo-gde.png.asset.json";
import courseraLogo from "@/assets/logo-coursera.png.asset.json";
import wtmLogo from "@/assets/logo-wtm.png.asset.json";
import ieeeLogo from "@/assets/logo-ieee.png.asset.json";
import elsevierLogo from "@/assets/logo-elsevier.png.asset.json";
import apressLogo from "@/assets/logo-apress.png.asset.json";

interface LogoItem {
  src: string;
  alt: string;
  href?: string;
}

const logos: LogoItem[] = [
  {
    src: gdeLogo.url,
    alt: "Google Developer Expert badge",
    href: "https://g.dev/vinitasilaparasetty",
  },
  {
    src: courseraLogo.url,
    alt: "Coursera",
    href: "https://www.coursera.org/",
  },
  {
    src: wtmLogo.url,
    alt: "Google Women Techmakers",
    href: "https://www.womentechmakers.com/",
  },
  {
    src: ieeeLogo.url,
    alt: "IEEE",
  },
  {
    src: elsevierLogo.url,
    alt: "Elsevier",
  },
  {
    src: apressLogo.url,
    alt: "Apress",
    href: "https://www.apress.com/gp/book/9781484260926",
  },
];

interface LogoStripProps {
  className?: string;
  heading?: string;
}

export function LogoStrip({ className, heading = "Credentials and Professional Affiliations" }: LogoStripProps) {
  return (
    <div className={cn("border-t border-border", className)}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
          {heading}
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-10 md:gap-x-12 gap-y-10 items-center justify-items-center">
          {logos.map((logo) => {
            const img = (
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-16 md:h-[68px] w-auto object-contain grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            );
            return logo.href ? (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-5"
              >
                {img}
              </a>
            ) : (
              <div key={logo.alt} className="flex items-center justify-center p-5">
                {img}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
