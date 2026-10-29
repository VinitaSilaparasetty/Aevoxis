import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, FileSearch, ScrollText, Eye, UserCheck, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqList } from "@/components/FaqList";
import { engagementFaq } from "@/data/site-content";

const services = [
  {
    icon: <FileSearch className="w-8 h-8" />,
    title: "Gap analysis for Articles 12–14",
    description:
      "I go through your AI system's architecture and check it against the three engineering obligations. Where does logging stop? What can a deployer actually see? Can a person stop the system, or only watch it?",
    deliverable: "You get a written gap analysis mapped to specific articles, ranked by risk and effort.",
    variant: "cyan" as const,
  },
  {
    icon: <ScrollText className="w-8 h-8" />,
    title: "Automatic logging (Article 12)",
    description:
      "I design and build event logging into the execution path: the input that triggered a decision, the decision, the model version and enough context to reconstruct it later. Records are hashed, so tampering is detectable.",
    deliverable: "You get an audit trail an assessor can follow, produced by the system itself.",
    variant: "blue" as const,
  },
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Transparency for deployers (Article 13)",
    description:
      "I surface how an output was produced in the interface your users already work in, so a non-technical person can judge whether to rely on it.",
    deliverable: "You get explanations where decisions happen, plus the instructions for use the article requires.",
    variant: "cyan" as const,
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Human oversight (Article 14)",
    description:
      "I build oversight into the critical path: thresholds that stop the system, a decision point a person can't skip, and override that actually overrides.",
    deliverable: "You get working oversight that holds up when someone asks you to demonstrate it.",
    variant: "blue" as const,
  },
];

const credentials = [
  { label: "Google Developer Expert", sublabel: "Machine Learning" },
  { label: "AWS Community Builder", sublabel: "Machine Learning" },
  { label: "AWS AIdeas 2025", sublabel: "Top 300 of 10,000+ entries" },
  { label: "M.Sc. Data Science", sublabel: "Newcastle University" },
  { label: "IEEE and Elsevier", sublabel: "Invited peer reviewer" },
  { label: "Published author", sublabel: "Apress" },
];

export default function EuAiActEngineeringPage() {
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

      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-accent/20 mb-10">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Engineering engagements</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 tracking-tight text-balance">
            Articles 12–14, built into{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              your system
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed text-pretty">
            Legal advice tells you what the EU AI Act requires. It doesn't build the logging, transparency and
            oversight into your code. That's the part I do, while the Aevoxis product is in development.
          </p>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
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

      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="premium-card premium-card-blue p-10 sm:p-14">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight">Who I work with</h2>
              <p className="text-muted-foreground leading-relaxed">
                Small and mid-sized companies and scale-ups in Germany and the EU that build or deploy high-risk AI,
                in any industry. Engagements are remote. I'm one engineer, so I take on a small number at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 items-stretch">
            {credentials.map((c) => (
              <li key={c.label} className="p-5 rounded-2xl bg-secondary/70 backdrop-blur-sm border border-border">
                <p className="text-sm font-semibold text-foreground">{c.label}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{c.sublabel}</p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-sm text-muted-foreground">References available on request.</p>
        </div>
      </section>

      <section className="relative pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 tracking-tight">Questions</h2>
          <FaqList items={engagementFaq} />
        </div>
      </section>

      <section className="relative pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight text-center">
            Not sure where your system stands?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 text-center max-w-2xl mx-auto leading-relaxed">
            Answer this five-question technical check. I'll review your answers personally within 24 hours.
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
                title="EU AI Act readiness check"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">Tell me about your system</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Describe what it does and when you need to be ready. I'll tell you honestly what to tackle first.
          </p>
          <Button asChild size="lg" className="rounded-2xl px-10 py-7 text-lg shadow-lg shadow-primary/20">
            <Link to="/contact">
              Get in touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
