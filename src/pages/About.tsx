import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Award, Users, Shield, Sparkles, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const methodology = [
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Alignment im Fokus",
    description: "Mit Standort in Deutschland basiert jeder von Vinita entwickelte Workflow auf der DSGVO und dem EU AI Act. Vinita priorisiert Datenresidenz und ethische Transparenz.",
    variant: "cyan",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Agentic Intelligence",
    description: 'Vinita geht über einfache Chatbots hinaus. Sie entwickelt autonome Agenten, die "denken", "schlussfolgern" und komplexe Geschäftslogiken ausführen können.',
    variant: "blue",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Human-in-the-Loop",
    description: 'Vinita setzt sich für KI mit "begrenztem Risiko" ein. Ihre Systeme sind darauf ausgelegt, intelligente Vorschläge zu liefern, während die Entscheidungsgewalt in menschlichen Händen bleibt.',
    variant: "teal",
  },
];

const whyAevoxis = [
  {
    icon: <Award className="w-6 h-6" />,
    title: "Geprüfte Expertise",
    description: "Geleitet von einer GDE und AWS Community Builder mit nachweislicher Erfahrung in veröffentlichter Forschung und technischer Ausbildung.",
    variant: "cyan",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Agil & Exklusiv",
    description: "Sie arbeiten direkt mit der Expertin zusammen. Keine Agentur-Hierarchien, keine Kommunikationsfehler – stattdessen technische Umsetzung mit höchster Geschwindigkeit.",
    variant: "blue",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Integrierte Lösungen",
    description: "Von der initialen Forschung bis zur vollständigen Automatisierung kümmert sich Vinita um das technische Fundament, damit Sie sich auf Ihr Wachstum konzentrieren können.",
    variant: "teal",
  },
];

const credentials = [
  { label: "MSc Data Science", institution: "Newcastle University" },
  { label: "Google Developer Expert", institution: "Machine Learning" },
  { label: "AWS Community Builder", institution: "Machine Learning" },
  { label: "Published Author", institution: "Tech & AI Publications" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="glass-shape w-48 h-48 top-1/2 -left-24 opacity-20" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-accent/20 mb-10">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">Über Aevoxis Solutions</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 text-balance tracking-tight">
                Where Deep Research Meets
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"> Scalable AI</span>
              </h1>

             <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Aevoxis Solutions wurde von Vinita gegründet, um die Lücke zwischen "experimenteller KI" und
                "produktionsreifer Intelligenz" zu schließen.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-10">
                Mit Sitz in Deutschland und unter dem professionellen Dach der Smart eG bietet
                Aevoxis Solutions spezialisierte KI-Workflows, maßgeschneiderte Automatisierungslösungen
                und strategische Forschung und Entwicklung (F&E) für zukunftsorientierte Unternehmen.
              </p>

              <Button asChild className="rounded-2xl px-8 py-6 shadow-lg shadow-primary/20">
                <Link to="/contact">
                  Kontakt aufnehmen
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="premium-card premium-card-blue p-10">
                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 mx-auto mb-6 flex items-center justify-center border border-border">
                      <span className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">VS</span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Vinita Silaparasetty</h2>
                    <p className="text-primary font-medium"><p className="text-primary font-medium">Gründerin & Applied AI Scientist</p></p>
                  </div>

                  <div className="space-y-4">
                    {credentials.map((cred) => (
                      <div key={cred.label} className="p-4 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border">
                        <p className="text-sm font-semibold text-foreground">{cred.label}</p>
                        <p className="text-xs text-muted-foreground">{cred.institution}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Die Gründerin</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Vinita Silaparasetty
            </h2>
            <p className="text-xl text-primary font-medium mb-8">
              MSc Data Science | Google Developer Expert (ML) | AWS Community Builder
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Vinita ist eine anerkannte Führungspersönlichkeit in der globalen KI-Community.
              Mit einem Master of Science in Data Science der Newcastle University und einem
              Hintergrund in FashionTech bringt sie eine einzigartige Perspektive in technische
              Herausforderungen ein.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Als Google Developer Expert für Machine Learning agiert Vinita an vorderster Front
              der Generativen KI und agentenbasierter Systeme. Ihre Mission mit Aevoxis Solutions ist es,
              die Komplexität der KI zu entschlüsseln und sie zu einem funktionalen, rechtskonformen
              Werkzeug für Unternehmen jeder Größe zu machen.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="relative py-32 overflow-hidden">
        <div className="glass-shape w-72 h-72 -left-36 top-1/2 -translate-y-1/2 opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Die Aevoxis Solutions-Methodik
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Wir implementieren KI nicht einfach nur – wir entwerfen Ökosysteme.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodology.map((item) => {
              const iconColor = item.variant === "cyan" ? "text-accent" : item.variant === "teal" ? "text-accent" : "text-primary";
              const iconBg = item.variant === "cyan" ? "from-accent/20 to-accent/5" : item.variant === "teal" ? "from-accent/20 to-accent/5" : "from-primary/20 to-primary/5";

              return (
                <div key={item.title} className={`premium-card premium-card-${item.variant} p-10`}>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconBg} flex items-center justify-center mb-8 ${iconColor}`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Aevoxis */}
      <section className="relative py-32 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              Warum Aevoxis Solutions?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyAevoxis.map((item) => {
              const iconColor = item.variant === "cyan" ? "text-accent" : item.variant === "teal" ? "text-accent" : "text-primary";
              const iconBg = item.variant === "cyan" ? "from-accent/20 to-accent/5" : item.variant === "teal" ? "from-accent/20 to-accent/5" : "from-primary/20 to-primary/5";

              return (
                <div key={item.title} className={`premium-card premium-card-${item.variant} p-10`}>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconBg} flex items-center justify-center mb-8 ${iconColor}`}>
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
