import { Link } from "react-router-dom";
import { ArrowRight, Shield, Cpu, Zap, Brain, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: "EU AI Act Compliance",
    description: "Technische Gap-Analyse, XAI-Implementierung und Human-in-the-Loop Design für die Deadline August 2026.",
    href: "/services#compliance",
    variant: "cyan" as const,
  },
  {
    icon: <Cpu className="w-7 h-7" />,
    title: "Souveräne KI",
    description: "Lokales LLM-Deployment und Datenarchitektur, die Ihre Daten innerhalb der deutschen Grenzen hält.",
    href: "/services#sovereign",
    variant: "teal" as const,
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: "Industrielle Effizienz",
    description: "Prädiktive Energieplanung und Digital Twin Retrofitting für messbare Einsparungen.",
    href: "/services#efficiency",
    variant: "blue" as const,
  },
  {
    icon: <Brain className="w-7 h-7" />,
    title: "Agentic Process Mining",
    description: "Digitalisierung impliziten Wissens und autonome Agenten für Ihre Geschäftsprozesse.",
    href: "/services#agentic",
    variant: "cyan" as const,
  },
  {
    icon: <FileText className="w-7 h-7" />,
    title: "Technical Media",
    description: "Technische Whitepaper, wissenschaftliche Medienstrategien und AI Defense Training.",
    href: "/services#media",
    variant: "blue" as const,
  },
];

const trustBadges = [
  { label: "Google Developer Expert", sublabel: "Machine Learning" },
  { label: "AWS Community Builder", sublabel: "Machine Learning" },
  { label: "DSGVO", sublabel: "Engineered for Alignment" },
  { label: "EU AI Act", sublabel: "Architected for Alignment" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-24 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -left-32 rotate-12 opacity-40" />
        <div className="glass-shape w-96 h-96 -bottom-48 -right-48 -rotate-12 opacity-30" />
        <div className="glass-shape w-48 h-48 top-1/4 right-1/4 rotate-45 opacity-20" />


        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-accent/20 mb-10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground">Ein Projekt der Smart eG, Berlin</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance mb-8 tracking-tight">
            Where Deep Research Meets
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Scalable AI
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-14 text-pretty">
            Aevoxis Solutions implementiert verifizierbare, rechtskonforme und industrielle KI-Intelligenz
            für den deutschen Mittelstand. Von EU AI Act Compliance bis zu souveränen KI-Ökosystemen.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <Button asChild size="lg" className="rounded-2xl px-10 py-7 text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all">
              <Link to="/contact">
                Projekt anfragen
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-2xl px-10 py-7 text-lg border-primary/20 hover:border-accent hover:bg-secondary/50 backdrop-blur-sm">
              <Link to="/services">Services entdecken</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="p-5 rounded-2xl bg-secondary/70 backdrop-blur-sm border border-border hover:border-accent/30 transition-all hover:shadow-lg hover:shadow-accent/10"
              >
                <p className="text-sm font-semibold text-foreground">{badge.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{badge.sublabel}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-7 h-12 rounded-full border-2 border-accent/40 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 rounded-full bg-gradient-to-b from-accent to-primary" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="glass-shape w-72 h-72 -left-36 top-1/2 -translate-y-1/2 opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
              UNSERE LEISTUNGEN
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground text-pretty">
              Von technischer Compliance bis zur vollständigen KI-Automatisierung –
              wir bauen Ökosysteme, keine isolierten Lösungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="glass-shape w-80 h-80 -right-40 top-0 opacity-20" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 text-primary text-sm font-medium mb-8">
                Die Gründerin
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
                Vinita Silaparasetty
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                MSc Data Science | Google Developer Expert (ML) | AWS Community Builder
              </p>
              <p className="text-muted-foreground mb-10 leading-relaxed">
                Vinita ist eine anerkannte Führungspersönlichkeit in der globalen KI-Community.
                Mit einem Master of Science in Data Science der Newcastle University bringt sie
                eine einzigartige, multidisziplinäre Perspektive in technische Herausforderungen ein.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Compliance First: DSGVO & EU AI Act 2026",
                  "Agentic Intelligence: Autonome Agenten mit n8n & LangChain",
                  "Human-in-the-Loop: KI mit kontrolliertem Risiko",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <Button asChild className="rounded-2xl px-8 py-6 shadow-lg shadow-primary/20">
                <Link to="/about">
                  Mehr über uns
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="premium-card premium-card-cyan p-10">
                <div className="relative z-10 space-y-6">
                  {[
                    { label: "Expertise", value: "Machine Learning & Agentic AI" },
                    { label: "Fokus", value: "EU AI Act Compliance" },
                    { label: "Standort", value: "Deutschland" },
                    { label: "Methodik", value: "Human-in-the-Loop" },
                  ].map((item) => (
                    <div key={item.label} className="p-5 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border">
                      <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                      <p className="text-foreground font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Bereit für die digitale Transformation?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam besprechen, wie Aevoxis Solutions Ihre KI-Strategie
            rechtskonform und zukunftssicher gestalten kann.
          </p>
          <Button asChild size="lg" className="rounded-2xl px-10 py-7 text-lg shadow-lg shadow-primary/20">
            <Link to="/contact">
              Jetzt Beratungsgespräch vereinbaren
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
