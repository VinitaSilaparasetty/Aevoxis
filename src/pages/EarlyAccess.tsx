import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Mail, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WAITLIST_TALLY_FORM_ID, designPartner } from "@/data/site-content";

const benefits = [
  "First access to the beta: Article 50 disclosure and content marking, then the Articles 12–14 logging, transparency and oversight components",
  "A short call with me to map the tooling to your system",
  "A say in what gets built first",
];

const APPLY_MAILTO =
  "mailto:info@aevoxis.de?subject=Design%20partner%20place%20(Article%2050)&body=" +
  encodeURIComponent(
    "What the product does:\n\nWhere it talks to people or generates content:\n\nStack:\n\nWhen you need to be ready:\n",
  );

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

  const open = designPartner.places > 0;

  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      {/* Design-partner offer */}
      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent" />
            <span className="text-sm font-semibold text-foreground">
              {open ? `${designPartner.places} design-partner places open` : "Design-partner places are full"}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6 tracking-tight text-balance">
            Article 50, working in your product in {designPartner.weeks} weeks. Free.
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Article 50 has applied since 2 August 2026. If you ship a chatbot, a voice agent or anything that
            generates text, images, audio or video, the duties are live now. I'm taking{" "}
            {designPartner.places === 1 ? "one team" : `${designPartner.places} teams`} as design partners: I build
            the disclosure and the content marking into your codebase myself, at no cost, over{" "}
            {designPartner.weeks} weeks.
          </p>

          <div className="premium-card premium-card-blue p-8 sm:p-10 mb-10">
            <div className="relative z-10">
              <ol className="space-y-7">
                {designPartner.steps.map((step, i) => (
                  <li key={step.week} className="flex gap-5">
                    <span className="shrink-0 w-9 h-9 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center text-sm font-bold text-accent">
                      {i + 1}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">{step.week}</p>
                      <h2 className="font-bold text-foreground mb-1.5">{step.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl border border-border bg-secondary/60 p-6">
              <h2 className="font-bold text-foreground mb-4">What you get</h2>
              <ul className="space-y-3">
                {designPartner.youGet.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/60 p-6">
              <h2 className="font-bold text-foreground mb-4">What I ask in return</h2>
              <ul className="space-y-3">
                {designPartner.iGet.map((item) => (
                  <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {open && (
            <div className="text-center mb-6">
              <Button asChild size="lg" className="rounded-2xl px-8">
                <a href={APPLY_MAILTO}>
                  Apply for a place
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Tell me what your product does and where it talks to people. I'll reply within two working days,
                and I'll say so plainly if I think you don't need this yet.
              </p>
            </div>
          )}

          <p className="text-sm text-muted-foreground">
            I build the mechanisms. I'm not a law firm, and this isn't legal advice: whether and how Article 50
            applies to your system is a question for your legal advisers.
          </p>
        </div>
      </section>

      {/* General early-access list */}
      <section className="relative py-20 overflow-hidden border-t border-border">
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-6 tracking-tight">
            Not ready for a pilot? Join the early-access list
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Aevoxis is building drop-in components for the EU AI Act, starting with Article 50: telling people
            they're talking to AI and marking AI-generated content. The same components extend to the Articles 12,
            13 and 14 duties for high-risk systems. Here's what you get:
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
                    Send me a short email with your company, what your AI system does, and which is nearer for
                    you: Article 50 (a chatbot, voice agent or generated content) or Articles 12–14 (a high-risk
                    system). I'll add you to the list.
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
