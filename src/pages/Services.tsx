import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Cpu, Zap, Brain, FileText, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TallServiceCard } from "@/components/ServiceCard";

const heroServices = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: "ALIGNMENT",
    description: "EU AI Act ausgerichtete Systeme mit technischer Gap-Analyse.",
    variant: "cyan" as const,
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "SOVEREIGN AI",
    description: "Lokale KI-Ökosysteme innerhalb deutscher Grenzen.",
    variant: "blue" as const,
  },
];

const services = [
  {
    id: "alignment",
    icon: <Shield className="w-8 h-8" />,
    title: "Technisches Alignment & Auditierung nach dem EU AI Act",
    subtitle: "Die Deadline im August 2026 ist da.",
    description: 'Vinita hilft deutschen Unternehmen dabei, ihre "Hochrisiko-KI-Systeme" von einem rechtlichen Risiko in zertifizierte Vermögenswerte zu verwandeln.',
    variant: "cyan",
    features: [
      { title: "Technische Gap-Analyse", description: "Prüfung bestehender Modellarchitekturen zur Identifizierung von Verstößen gegen die Standards der BNetzA." },
      { title: "Implementierung von Explainability (XAI)", description: "Nachrüstung komplexer Modelle mit Transparenzebenen, damit Ihre Stakeholder jede Entscheidung der KI verstehen." },
      { title: "Human-in-the-Loop (HITL) Design", description: "Entwicklung technischer Schnittstellen, die die obligatorische menschliche Aufsicht bei sensiblen automatisierten Prozessen gewährleisten." },
    ],
  },
  {
    id: "sovereign",
    icon: <Cpu className="w-8 h-8" />,
    title: "Souveräne KI & lokales Modell-Feintuning",
    subtitle: "Unabhängigkeit von der US-Cloud.",
    description: "Vinita baut private KI-Ökosysteme, die Ihre proprietären Daten innerhalb der deutschen Grenzen halten.",
    variant: "blue",
    features: [
      { title: "Lokales LLM-Deployment", description: "Feintuning von Open-Source-Modellen auf Ihren lokalen Datensätzen unter Nutzung von QLoRA für maximale Effizienz." },
      { title: "Architektur für Datensouveränität", description: "Umstellung Ihrer Workflows weg von Drittanbieter-APIs hin zu lokal gehosteter, privater Infrastruktur." },
      { title: "Optimierung für den deutschen Kontext", description: "Anpassung von Modellen an spezifische deutsche Geschäftsnuancen, Rechtsterminologie und industrielle Fachsprachen." },
    ],
  },
  {
    id: "efficiency",
    icon: <Zap className="w-8 h-8" />,
    title: 'Industrielle Effizienz & "Energy-Gain"-Automatisierung',
    subtitle: "Überleben durch Optimierung.",
    description: "In einer Ära hoher Energiekosten verwandelt Vinita Ihre Betriebsdaten in ein wettbewerbsfähiges Schutzschild.",
    variant: "cyan",
    features: [
      { title: "Prädiktive Energieplanung", description: "Integration von Agentic AI mit IoT-Fabriksensoren zur Vorhersage lokaler Energielasten." },
      { title: "Digital Twin Retrofitting", description: "Erstellung hochpräziser virtueller Simulationen von Bestandsmaschinen zur Verlängerung der Betriebsdauer." },
      { title: "Gain-Share-Integration", description: "Erfolgsbasierte Modelle – der Erfolg ist direkt an die messbaren Energieeinsparungen gekoppelt." },
    ],
  },
  {
    id: "agentic",
    icon: <Brain className="w-8 h-8" />,
    title: "Agentic Process Mining & Wissenssicherung",
    subtitle: "Lösungen für den demografischen Wandel.",
    description: 'Wenn Ihre erfahrenen Experten in den Ruhestand gehen, digitalisiert Vinita deren "implizites Wissen" in aktive digitale Mitarbeiter.',
    variant: "blue",
    features: [
      { title: "Knowledge Capture Agents", description: "Autonome Agenten, die erfahrene Ingenieure begleiten, um komplexe Entscheidungslogiken zu digitalisieren." },
      { title: "ERP-Automatisierung (SAP/Oracle)", description: "KI-Verknüpfung mit Ihren internen Protokollen zur Identifizierung von Lieferkettenengpässen." },
      { title: "LkSG 2.0 Risk Scoring", description: "KI-gestützte Überwachung globaler Lieferketten zur Einhaltung des Lieferkettensorgfaltspflichtengesetzes." },
    ],
  },
  {
    id: "media",
    icon: <FileText className="w-8 h-8" />,
    title: "Technical Media Engineering & Autorenschaft",
    subtitle: "Authority-as-a-Service.",
    description: "Vinita übersetzt komplexe technische Durchbrüche in marktführenden Einfluss.",
    variant: "cyan",
    features: [
      { title: "Technische Whitepaper", description: "Erstellung tiefgreifender Dokumentationen, die Ihre Marke als Vordenker im KI-Bereich etablieren." },
      { title: "Wissenschaftliche Medienstrategie", description: "Skripterstellung und technische Leitung für hochwertige Podcasts und YouTube-Kanäle." },
      { title: "Adversarial AI Defense Training", description: "Unternehmens-Workshops zu Red-Teaming und zur Abwehr von KI-industrialisiertem Phishing und Deepfakes." },
    ],
  },
];

const trustPremium = [
  "Entwickelt für DSGVO-Alignment.",
  "Skalierbar über moderne Cloud- oder On-Prem-Architekturen.",
  "Verifizierbar durch eine lückenlose technische Dokumentation.",
];

export default function ServicesPage() {
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).Tally) {
      (window as any).Tally.loadEmbeds();
    } else {
      document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((el) => {
        (el as HTMLIFrameElement).src = (el as HTMLIFrameElement).dataset.tallySrc || "";
      });
    }
  }, []);

  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 tracking-tight">
              UNSERE LEISTUNGEN
            </h1>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {heroServices.map((service) => (
              <TallServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-accent/20 mb-8">
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-foreground">Vollständiges Leistungsportfolio</span>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Bei Aevoxis Solutions implementieren wir nicht einfach nur KI – wir bauen verifizierbare,
              rechtskonforme und auf Industriestandards ausgerichtete Intelligenz.
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service, index) => {
              const borderColor = service.variant === "cyan" ? "border-accent/30 hover:border-accent" : "border-primary/30 hover:border-primary";
              const iconColor = service.variant === "cyan" ? "text-accent" : "text-primary";
              const iconBg = service.variant === "cyan" ? "from-accent/20 to-accent/5" : "from-primary/20 to-primary/5";

              return (
                <div key={service.id} id={service.id} className="scroll-mt-32">
                  <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconBg} flex items-center justify-center mb-8 ${iconColor}`}>
                        {service.icon}
                      </div>
                      <p className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">{service.subtitle}</p>
                      <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">{service.title}</h2>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-8">{service.description}</p>
                      <Button asChild className="rounded-2xl px-8 py-6 shadow-lg shadow-primary/20">
                        <Link to="/contact">
                          Projekt anfragen
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </div>
                    <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                      <div className="space-y-6">
                        {service.features.map((feature) => (
                          <div key={feature.title} className={`p-6 rounded-2xl bg-secondary/60 backdrop-blur-sm border ${borderColor} transition-all`}>
                            <div className="flex items-start gap-4">
                              <CheckCircle className={`w-5 h-5 ${iconColor} shrink-0 mt-1`} />
                              <div>
                                <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Solution Card with Contact Form */}
      <section className="relative py-32">
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="premium-card premium-card-cyan p-10 sm:p-14">
            <div className="relative z-10">
              <div className="text-center mb-10">
                <Sparkles className="w-8 h-8 text-accent mx-auto mb-4" />
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 tracking-tight">
                  Individuelle Lösung gesucht?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Sie haben eine spezielle Anforderung, die nicht in unsere Standardleistungen passt?
                  Beschreiben Sie Ihr Projekt und wir entwickeln eine maßgeschneiderte KI-Lösung für Sie.
                </p>
              </div>

              <div className="space-y-4 mb-10 max-w-md mx-auto">
                {trustPremium.map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-background/50 backdrop-blur-sm border border-border p-6">
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

      <section className="relative pb-12">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs text-muted-foreground text-center leading-relaxed italic">
            Aevoxis Solutions bietet technische Architektur- und Engineering-Dienstleistungen an, die auf die Standards des EU AI Act und der DSGVO abgestimmt sind. Unser Fokus liegt auf der technischen Umsetzung von Transparenz und Datensouveränität; die formale rechtliche Zertifizierung obliegt der Rechtsberatung des Kunden.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
