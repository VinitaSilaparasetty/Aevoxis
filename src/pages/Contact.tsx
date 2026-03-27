import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  useEffect(() => {
    const loadTally = () => {
      if (typeof (window as any).Tally !== "undefined") {
        (window as any).Tally.loadEmbeds();
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((el: any) => {
          el.src = el.dataset.tallySrc;
        });
      }
    };
    loadTally();
  }, []);
  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <section className="relative pt-36 pb-32 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 tracking-tight">
            Kontakt aufnehmen
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-16">
            Lassen Sie uns gemeinsam besprechen, wie Aevoxis Solutions Ihre KI-Strategie unterstützen kann.
          </p>

          <div className="grid sm:grid-cols-3 gap-8">
            <div className="premium-card premium-card-cyan p-8">
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 mx-auto text-accent">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">E-Mail</h3>
                <a href="mailto:info@aevoxis.de" className="text-muted-foreground hover:text-primary transition-colors">info@aevoxis.de</a>
              </div>
            </div>
            <div className="premium-card premium-card-blue p-8">
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 mx-auto text-primary">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Telefon</h3>
                <a href="tel:+4915153752713" className="text-muted-foreground hover:text-primary transition-colors">+49 151 5375 2713</a>
              </div>
            </div>
            <div className="premium-card premium-card-cyan p-8">
              <div className="relative z-10 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 mx-auto text-accent">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Standort</h3>
                <p className="text-muted-foreground">Mehringplatz 10, 10969 Berlin</p>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">Schreiben Sie uns</h2>
            <div className="premium-card premium-card-blue p-8">
              <div className="relative z-10">
                <iframe
                  data-tally-src="https://tally.so/embed/gDL9AO?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  loading="lazy"
                  width="100%"
                  height="1017"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Kontakt"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
