import { Link } from "react-router-dom";
import { ArrowRight, Package, PenLine, FlaskConical, Award, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { shippedLog, type ShippedKind } from "@/data/site-content";

const kindLabel: Record<ShippedKind, string> = {
  release: "Release",
  writing: "Writing",
  research: "Research",
  recognition: "Recognition",
  product: "Product",
};

const kindIcon: Record<ShippedKind, JSX.Element> = {
  release: <Package className="w-4 h-4" />,
  writing: <PenLine className="w-4 h-4" />,
  research: <FlaskConical className="w-4 h-4" />,
  recognition: <Award className="w-4 h-4" />,
  product: <Wrench className="w-4 h-4" />,
};

function formatDate(date: string, precision: "day" | "month" | "year" = "day") {
  const d = new Date(`${date}T00:00:00Z`);
  const opts: Intl.DateTimeFormatOptions =
    precision === "year"
      ? { year: "numeric", timeZone: "UTC" }
      : precision === "month"
        ? { month: "long", year: "numeric", timeZone: "UTC" }
        : { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" };
  return new Intl.DateTimeFormat("en-GB", opts).format(d);
}

export default function ShippedPage() {
  const entries = [...shippedLog].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Shipped</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6 tracking-tight">
            What has actually shipped, and when
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Compliance tooling is easy to describe and hard to build. This is the dated record of what exists:
            packages you can install, code you can read, and writing you can check. Every entry links to the thing
            itself.
          </p>
        </div>
      </section>

      <section className="relative pb-24 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ol className="relative border-l border-border ml-3 sm:ml-4">
            {entries.map((entry) => {
              const external = entry.href?.startsWith("http");
              const title = entry.href ? (
                external ? (
                  <a
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-border hover:text-accent hover:decoration-accent"
                  >
                    {entry.title}
                  </a>
                ) : (
                  <Link
                    to={entry.href}
                    className="underline underline-offset-4 decoration-border hover:text-accent hover:decoration-accent"
                  >
                    {entry.title}
                  </Link>
                )
              ) : (
                entry.title
              );

              return (
                <li key={`${entry.date}-${entry.title}`} className="relative pl-6 sm:pl-8 pb-10 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-background"
                  />
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-2">
                    <time dateTime={entry.date} className="text-sm font-medium text-muted-foreground">
                      {formatDate(entry.date, entry.precision)}
                    </time>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
                      {kindIcon[entry.kind]}
                      {kindLabel[entry.kind]}
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-foreground mb-2 tracking-tight">{title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{entry.detail}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden border-t border-border">
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 tracking-tight">
            The next thing on this list is the Article 50 beta
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Five teams get it first, free, as design partners. If your product talks to people or generates
            content, that could be you.
          </p>
          <Button asChild size="lg" className="rounded-2xl px-8">
            <Link to="/early-access">
              See the design-partner places
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
