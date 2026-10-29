import { cn } from "@/lib/utils";

interface CredentialItem {
  title: string;
  detail: string;
  href?: string;
}

// Plain-text credentials. Third-party logos (IEEE, Elsevier, etc.) were removed on purpose:
// a logo suggests an official affiliation or endorsement, while these are roles and recognitions.
const credentials: CredentialItem[] = [
  {
    title: "Google Developer Expert",
    detail: "Machine Learning",
    href: "https://g.dev/vinitasilaparasetty",
  },
  {
    title: "Google Women Techmakers",
    detail: "Community member", // TODO(Vinita): replace with your exact role, e.g. "Ambassador"
    href: "https://www.womentechmakers.com/",
  },
  {
    title: "Peer reviewer",
    detail: "IEEE and Elsevier reviewer pools",
  },
  {
    title: "Apress author",
    detail: "Deep Learning Projects Using TensorFlow 2",
    href: "https://link.springer.com/book/10.1007/978-1-4842-5802-6",
  },
];

interface LogoStripProps {
  className?: string;
  heading?: string;
}

export function LogoStrip({ className, heading = "Credentials" }: LogoStripProps) {
  return (
    <div className={cn("relative z-10 border-t border-border", className)}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-8">
          {heading}
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {credentials.map((c) => {
            const body = (
              <>
                <span className="block font-semibold text-foreground">{c.title}</span>
                <span className="block text-sm text-muted-foreground mt-1">{c.detail}</span>
              </>
            );
            return (
              <li key={c.title} className="rounded-2xl border border-border bg-secondary/60 p-5 text-center">
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
                    {body}
                  </a>
                ) : (
                  body
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
