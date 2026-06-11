import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, FileSearch, Layers, Users, FileText, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import apressBook from "@/assets/apress-book.webp.asset.json";

const services = [
  {
    icon: <FileSearch className="w-8 h-8" />,
    title: "EU AI Act Compliance-Assessment",
    description:
      "Eine strukturierte technische Prüfung Ihres generativen KI-Systems, abgebildet auf die Pflichten des EU AI Act. Vinita identifiziert genau, an welchen Stellen Ihr System unzureichend ist und was sich architektonisch ändern muss, bevor daraus eine rechtliche Belastung wird.",
    deliverable:
      "Sie erhalten: eine schriftliche Gap-Analyse, abgebildet auf konkrete Artikel des EU AI Act, priorisiert nach Risiko und Dringlichkeit.",
    variant: "cyan" as const,
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Compliance-integriertes Systemdesign",
    description:
      "Vinita gestaltet oder rüstet Ihre generative KI-Architektur so um, dass sie die Anforderungen des EU AI Act von Grund auf erfüllt. Dazu gehören Transparenzebenen, Audit-Trails und Mechanismen menschlicher Aufsicht, die direkt im System verankert sind – nicht nachträglich ergänzt.",
    deliverable:
      "Sie erhalten: ein produktionsreifes System, in dem Compliance konstruktiv eingebaut und nicht aufgesetzt ist.",
    variant: "blue" as const,
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Human-in-the-Loop-Architektur",
    description:
      "Für KI-Systeme mit hohem Risiko oder Transparenzpflicht entwickelt und implementiert Vinita die Schnittstellen menschlicher Aufsicht, die Artikel 14 des EU AI Act erfüllen. Ihr Team behält die echte Kontrolle über automatisierte Entscheidungen – ohne Verlust an operativer Effizienz.",
    deliverable:
      "Sie erhalten: eine funktionierende Aufsichtsinfrastruktur, die regulatorische Anforderungen erfüllt und einer Prüfung standhält.",
    variant: "cyan" as const,
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Technische Whitepaper & Compliance-Dokumentation",
    description:
      "Vinita übersetzt Architektur und Compliance-Maßnahmen Ihres KI-Systems in klare, nachprüfbare technische Dokumentation. Diese dient sowohl der internen Governance als auch externen regulatorischen Anforderungen.",
    deliverable:
      "Sie erhalten: professionelle Dokumentation, die Compliance gegenüber Aufsichtsbehörden, Kunden und Beschaffungsabteilungen nachweist.",
    variant: "blue" as const,
  },
];

const trustBadges = [
  { label: "Google Developer Expert", sublabel: "Machine Learning" },
  { label: "AWS Community Builder", sublabel: "Machine Learning" },
  { label: "DSGVO & EU AI Act", sublabel: "Architected for Alignment" },
];

export default function EuAiActEngineeringPage() {
  useEffect(() => {
    document.title = "EU AI Act Engineering – Aevoxis Solutions";
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

      <div className="bg-[#0f1c2e] border-b border-accent/10 text-center py-2.5 text-sm text-foreground/90">
        <span className="font-medium">August 2, 2026: EU AI Act high-risk system obligations are now in force.</span>
      </div>

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-accent/20 mb-10">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">EU AI Act Engineering</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 tracking-tight text-balance">
            Generatives KI-Compliance-Engineering für den{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              EU AI Act
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed text-pretty">
            Die meisten Unternehmen, die generative KI einsetzen, haben Compliance-Pflichten,
            die sie allein mit Rechtsberatung nicht erfüllen können. Vinita liefert das
            technische Engineering, um genau diese Lücke zu schließen.
          </p>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => {
              const borderColor = service.variant === "cyan" ? "border-accent/30" : "border-primary/30";
              const iconColor = service.variant === "cyan" ? "text-accent" : "text-primary";
              const iconBg = service.variant === "cyan" ? "from-accent/20 to-accent/5" : "from-primary/20 to-primary/5";
              return (
                <div key={service.title} className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconBg} flex items-center justify-center mb-8 ${iconColor}`}>
                      {service.icon}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className={`p-8 rounded-2xl bg-secondary/60 backdrop-blur-sm border ${borderColor}`}>
                      <div className="flex items-start gap-4">
                        <CheckCircle className={`w-5 h-5 ${iconColor} shrink-0 mt-1`} />
                        <p className="text-foreground leading-relaxed">{service.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="premium-card premium-card-blue p-10 sm:p-14">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight">
                Mit wem Vinita arbeitet
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Vinita arbeitet mit KMU und Scale-ups in Deutschland und Europa, die generative
                KI-Systeme im Einsatz haben und ihre Pflichten aus dem EU AI Act erfüllen müssen,
                bevor Aufsichtsbehörden nachfragen. Großunternehmen mit Bedarf an
                teamgrößen-Engagements gehören ausdrücklich nicht zur Zielgruppe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="p-5 rounded-2xl bg-secondary/70 backdrop-blur-sm border border-border hover:border-accent/30 transition-all"
              >
                <p className="text-sm font-semibold text-foreground">{badge.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{badge.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight text-center">
            Sie sind unsicher, wo Ihr System steht?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-center max-w-2xl mx-auto leading-relaxed">
            Beantworten Sie diesen 5-Fragen-Technik-Check und ich werde Ihre Antworten persönlich innerhalb von 24 Stunden prüfen.
          </p>
          <div className="premium-card premium-card-blue p-8">
            <div className="relative z-10">
              <iframe
                data-tally-src="https://tally.so/embed/KYGb2k?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="EU AI Act Readiness Check"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-8 h-8 text-accent mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
            Unsicher, welche Leistung Sie brauchen?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Beschreiben Sie Ihr System und Ihre Deadline. Vinita sagt Ihnen ehrlich,
            welche Priorität zuerst angegangen werden sollte.
          </p>
          <Button asChild size="lg" className="rounded-2xl px-10 py-7 text-lg shadow-lg shadow-primary/20">
            <Link to="/contact">
              Kontakt aufnehmen
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}