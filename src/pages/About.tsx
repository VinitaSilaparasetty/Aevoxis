import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const credentials = [
  { label: "Google Developer Expert", institution: "Machine Learning" },
  { label: "Published Author", institution: "Apress" },
  { label: "M.Sc. Data Science", institution: "Newcastle University (Russell Group)" },
  { label: "IEEE und Elsevier Peer Reviewer", institution: "" },
  { label: "AWS Community Builder", institution: "Machine Learning" },
  { label: "Indian Design Patent", institution: "IN 307907" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      {/* Hero */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="glass-shape w-48 h-48 top-1/2 -left-24 opacity-20" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-accent/20 mb-10">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Über mich</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8 text-balance tracking-tight">
                Ich bin der Überzeugung, dass die meisten KI-Fehler Architekturfehler sind. Keine Modellfehler, keine Rechtsfehler. Architekturfehler. Von Anfang an falsch gebaut.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Ich bin Vinita Silaparasetty, KI-Compliance-Engineerin und technische Autorin mit Sitz in Deutschland. Ich entwerfe und entwickle generative KI-Systeme, bei denen EU AI Act- und DSGVO-Konformität vom ersten Tag an eingebaut ist, und ich erstelle professionelle KI-Curricula für EdTech-Plattformen und technische Verlage. Ich arbeite eigenständig unter dem Dach der Smart eG.
              </p>

              <Button asChild className="rounded-2xl px-8 py-6 shadow-lg shadow-primary/20">
                <Link to="/contact">
                  Kontakt aufnehmen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative lg:mt-12">
              <div className="premium-card premium-card-blue p-10">
                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 mx-auto mb-6 flex items-center justify-center border border-border">
                      <span className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">VS</span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Vinita Silaparasetty</h2>
                    <p className="text-primary font-medium">Gründerin & Applied AI Scientist</p>
                  </div>

                  <div className="space-y-4">
                    {credentials.map((cred) => (
                      <div key={cred.label} className="p-4 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border">
                        <p className="text-sm font-semibold text-foreground">{cred.label}</p>
                        {cred.institution && (
                          <p className="text-xs text-muted-foreground">{cred.institution}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Working Style */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Mein Ansatz</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight">
                Architektur zuerst
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Von einem patentierten VR-Headset bis hin zu EU AI Act-konformen Produktionssystemen – ich habe schon immer Lösungen entwickelt, bevor der Markt wusste, dass er sie braucht. Genau dieses Denkmuster bringe ich in jedes Projekt ein: das Erkennen des architektonischen Problems, bevor es zu einem rechtlichen oder operativen wird.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Arbeitsweise</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight">
                Direkt und unkompliziert
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sie arbeiten direkt mit mir. Keine Account Manager, keine Junior-Weitergaben, kein Agentur-Overhead. Jedes Stück Arbeit, das ich abliefere, erstelle ich selbst – das bedeutet schnellere Entscheidungen, sauberere Kommunikation und volle Verantwortlichkeit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden border-t border-border">
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-8 h-8 text-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed">
            Wenn Sie wissen möchten, ob ich die richtige Person für Ihr Projekt bin, ist der schnellste Weg, mir direkt eine E-Mail zu schreiben:{" "}
            <a
              href="mailto:info@aevoxis.de"
              className="text-accent hover:text-primary font-medium underline underline-offset-4 transition-colors"
            >
              info@aevoxis.de
            </a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
