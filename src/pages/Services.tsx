import { Link } from "react-router-dom";
import { ArrowRight, Shield, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { PERSONAL_SITE_URL } from "@/seo/meta";

const Services = () => (
  <div className="min-h-screen bg-background">
    <Header />

    <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 backdrop-blur-md border border-border mb-8">
          <span className="text-xs font-medium text-accent tracking-wide">SERVICES</span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
          Two ways to meet{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">the EU AI Act</span>
        </h1>
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Article 50 transparency applies today and the Articles 12–14 high-risk duties follow in December 2027.
          The Aevoxis product is in development; until it's ready, I build the same mechanisms directly into your
          system.
        </p>
      </div>
    </section>

    <section className="px-4 sm:px-6 lg:px-8 pb-20">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <ServiceCard
          icon={<Rocket className="w-7 h-7" />}
          title="Aevoxis tooling (early access)"
          description="AI disclosure, content marking, logging, transparency and human-oversight components you add to your AI system. Join the early-access list to try the beta and shape what it does."
          href="/early-access"
          variant="cyan"
        />
        <ServiceCard
          icon={<Shield className="w-7 h-7" />}
          title="Article 50 and Articles 12–14 engineering"
          description="A gap analysis of your system, then hands-on implementation: Article 50 disclosure and content marking now, audit logging, transparency and oversight in your own code for what follows."
          href="/services/eu-ai-act-engineering"
          variant="blue"
        />
      </div>
    </section>

    <section className="px-4 sm:px-6 lg:px-8 pb-20">
      <div className="mx-auto max-w-4xl">
        <div className="premium-card p-10 text-center">
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Looking for AI curriculum development, training programmes or technical writing? I offer those
            personally. You'll find them on{" "}
            <a href={`${PERSONAL_SITE_URL}/services.html`} className="text-primary underline underline-offset-4 hover:text-accent">
              my personal site
            </a>
            .
          </p>
        </div>
      </div>
    </section>

    <section className="px-4 sm:px-6 lg:px-8 pb-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">Not sure which fits?</h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Tell me what your system does and your deadline. I'll point you in the right direction.
        </p>
        <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
          <Link to="/contact">
            Get in touch <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </div>
    </section>

    <Footer />
  </div>
);

export default Services;
