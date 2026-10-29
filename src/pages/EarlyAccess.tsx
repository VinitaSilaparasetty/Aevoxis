import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WAITLIST_TALLY_FORM_ID } from "@/data/site-content";

const benefits = [
  "First access to the beta of the Aevoxis logging, transparency and oversight components",
  "A short call with me to map the tooling to your system",
  "A say in what gets built first",
];

export default function EarlyAccessPage() {
  useEffect(() => {
    if (!WAITLIST_TALLY_FORM_ID) return;
    if (typeof (window as any).Tally !== "undefined") {
      (window as any).Tally.loadEmbeds();
    } else {
      document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((el: any) => {
        el.src = el.dataset.tallySrc;
      });
    }
  }, []);

  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <section className="relative pt-36 pb-32 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6 tracking-tight">
            Early access to Aevoxis
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Aevoxis is building drop-in components for EU AI Act Articles 12, 13 and 14. If your team builds or
            deploys a high-risk AI system, join the list. Here's what you get:
          </p>
          <ul className="space-y-3 mb-12">
            {benefits.map((b) => (
              <li key={b} className="flex gap-3 text-foreground">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>

          <div className="premium-card premium-card-blue p-8">
            <div className="relative z-10">
              {WAITLIST_TALLY_FORM_ID ? (
                <iframe
                  data-tally-src={`https://tally.so/embed/${WAITLIST_TALLY_FORM_ID}?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1`}
                  loading="lazy"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Early access"
                />
              ) : (
                <div className="text-center">
                  <p className="text-foreground mb-6">
                    Send me a short email with your company and what your AI system does. I'll add you to the list.
                  </p>
                  <Button asChild size="lg" className="rounded-2xl px-8">
                    <a href="mailto:info@aevoxis.de?subject=Early%20access%20to%20Aevoxis">
                      <Mail className="w-5 h-5 mr-2" />
                      info@aevoxis.de
                    </a>
                  </Button>
                </div>
              )}
            </div>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            I'll only use your details to contact you about early access. You can ask me to delete them at any time.
            See the{" "}
            <Link to="/datenschutz" className="underline underline-offset-4 hover:text-primary">
              Datenschutzerklärung (privacy policy)
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
