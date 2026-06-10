import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";

const Services = () => {
  useEffect(() => {
    document.title = "Leistungen – Aevoxis Solutions";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="relative pt-40 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 backdrop-blur-md border border-border mb-8">
            <span className="text-xs font-medium text-accent tracking-wide">LEISTUNGEN</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            Zwei spezialisierte Leistungen an der Schnittstelle von{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              KI-Engineering und technischer Kommunikation
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Vinita bietet zwei spezialisierte Leistungen an der Schnittstelle von KI-Engineering
            und technischer Kommunikation.
          </p>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
          <ServiceCard
            icon={<Shield className="w-7 h-7" />}
            title="EU AI Act Engineering"
            description="Technisches Compliance-Engineering für Unternehmen, die generative KI-Systeme unter den Pflichten des EU AI Act betreiben."
            href="/services/eu-ai-act-engineering"
            variant="cyan"
          />
          <ServiceCard
            icon={<BookOpen className="w-7 h-7" />}
            title="Curriculum-Entwicklung & Technical Writing"
            description="Professionelle KI-Curricula und technische Inhalte für EdTech-Plattformen, Verlage und unternehmensinterne Schulungsprogramme."
            href="/services/technical-writing-curriculum"
            variant="blue"
          />
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="premium-card p-10 text-center">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Beide Leistungen werden remote in ganz Deutschland und Europa von{" "}
              <span className="text-foreground font-medium">Vinita Silaparasetty</span> erbracht –
              Google Developer Expert (ML) und veröffentlichte Autorin (Apress), tätig als
              eigenständige Projektverantwortliche unter der Smart eG.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 lg:px-8 pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Unsicher, welche Leistung zu Ihrem Anliegen passt?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Nehmen Sie Kontakt auf – Vinita weist Ihnen die passende Richtung.
          </p>
          <Button asChild size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
            <Link to="/contact">
              Kontakt aufnehmen <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;