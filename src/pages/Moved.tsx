import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

// A page that now lives elsewhere. The pre-rendered HTML also carries a
// meta refresh and a canonical link to the new address.
export default function Moved({ to, label }: { to: string; label: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />
      <section className="relative pt-40 pb-32">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">This page has moved</h1>
          <p className="text-lg text-muted-foreground">
            It's now on <a href={to} className="text-primary underline underline-offset-4">{label}</a>.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
