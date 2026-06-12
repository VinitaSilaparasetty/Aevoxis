import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, FileText, GraduationCap, ClipboardCheck, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TestimonialCard } from "@/components/TestimonialCard";
import apressBook from "@/assets/apress-book.webp.asset.json";

const services = [
  {
    icon: <BookOpen className="w-8 h-8" />,
    title: "Technische Kurs- und Curriculum-Entwicklung",
    description:
      "Vinita konzipiert und entwickelt vollständige Curricula im Bereich KI und Data Science für ein professionelles Publikum. Jedes Modul orientiert sich an echten industriellen Workflows, nicht an akademischen Übungen – damit Lernende mit Fähigkeiten abschließen, die sie sofort anwenden können.",
    deliverable:
      "Sie erhalten: vollständige Curriculum-Module mit Lernzielen, strukturierten Inhalten, Übungen und Assessments – geliefert nach Ihren Vorgaben und Ihrem Zeitplan.",
    variant: "cyan" as const,
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Technische Whitepaper-Autorenschaft",
    description:
      "Vinita recherchiert und schreibt tiefgehende technische Whitepaper, die Ihre Plattform oder Organisation als glaubwürdige Stimme im KI-Bereich etablieren – mit der Genauigkeit einer publizierten Autorin und der Klarheit einer erfahrenen technischen Pädagogin.",
    deliverable:
      "Sie erhalten: ein professionell geschriebenes, technisch präzises Whitepaper, publikationsfertig und an Ihre Markenrichtlinien angepasst.",
    variant: "blue" as const,
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Konzeption von KI-Trainingsprogrammen",
    description:
      "Vinita entwickelt strukturierte professionelle Trainingsprogramme für Organisationen, die ihre Teams in generativer KI, Machine Learning oder im Bewusstsein für EU AI Act-Compliance weiterbilden möchten – aufgebaut auf Ihren Tools, Workflows und Lernzielen.",
    deliverable:
      "Sie erhalten: ein vollständiges Trainingsprogramm inklusive Session-Struktur, Trainer-Leitfaden, Teilnehmermaterial und praktischen Übungen.",
    variant: "cyan" as const,
  },
  {
    icon: <ClipboardCheck className="w-8 h-8" />,
    title: "Review und Auditierung technischer Inhalte",
    description:
      "Vinita prüft bestehende Curricula im Bereich KI und Data Science sowie technische Dokumentation auf Korrektheit, Klarheit und praktische Relevanz – besonders wertvoll für Plattformen, die ihre Inhaltsbibliothek skalieren und eine Expertenvalidierung benötigen.",
    deliverable:
      "Sie erhalten: einen strukturierten Review-Bericht mit konkreten Empfehlungen sowie korrigierten Inhalt, sofern erforderlich.",
    variant: "blue" as const,
  },
];

const trustBadges = [
  { label: "Published Author", sublabel: "Apress" },
  { label: "14 akkreditierte Kurse", sublabel: "Coursera Project Network" },
  { label: "Google Developer Expert", sublabel: "Machine Learning" },
  { label: "M.Sc. Data Science", sublabel: "Newcastle University (Russell Group)" },
];

const testimonials = [
  { quote: "Vinita is constantly achieving NPS scores between 8 and 10 with an overall average of 8.71, which puts her in the world-class category.", name: "Jeanette Wood", title: "Quality and Curriculum Manager, JustIT" },
  { quote: "Thank you Vinita for putting together an excellent course with challenging exercises.", name: "Dr. Ravi Tahilramani", title: "VP Vertical Management Energy Middle East, Siemens" },
  { quote: "Really helpful in understanding how AI analyses content, suggests visuals and recommends layouts. Elevating presentations to the next level.", name: "Meher Asees Pampana", title: "Senior Specialist, Novartis" },
  { quote: "Vinita's expertise in Data Science reflects in her comprehensive training approach.", name: "Dewank Mahajan", title: "Senior Data Analytics Consultant, FINRA" },
  { quote: "I was able to build a Covid-19 Dashboard and deploy it on an AWS EC2 instance as well as Heroku, thanks to Vinita's course on Coursera.", name: "Ashaab Rizvi", title: "Data Engineering Analyst, Accenture" },
  { quote: "Vinita's graphic on unstructured vs structured datatypes is amazing. I am constantly trying to figure out how to convey data concepts to my end users and this might be the best analogy I have found.", name: "Christopher Hockey", title: "Manager, Alvarez and Marsal" },
  { quote: "Vinita's expertise in her domain is reflected in the way her projects are conducted.", name: "Arya Shah", title: "Business Technology Solutions Associate, ZS" },
  { quote: "Vinita's expertise in Data Science reflects in her comprehensive training approach.", name: "Shatrughna Ojha", title: "HR Analytics Manager, Angel One" },
  { quote: "The technical part of Data Analysis taught by Vinita was well prepared, clear and gives you a very good basis to start your discovery journey in the Data field.", name: "Maria Carmen Ruiz-Valdepeñas García" },
];

export default function TechnicalWritingPage() {
  useEffect(() => {
    document.title = "Technical Writing & Curriculum Development – Aevoxis Solutions";
  }, []);

  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -left-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-primary/20 mb-10">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Technical Writing & Curriculum Development</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 tracking-tight text-balance">
            KI-Expertise, die{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              sich selbst lehrt
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed text-pretty">
            Vinita übersetzt komplexe KI-Konzepte und regulatorische Rahmenwerke in strukturierte,
            professionelle Lerninhalte für EdTech-Plattformen, technische Verlage und betriebliche
            Weiterbildungsprogramme.
          </p>
        </div>
      </section>

      {/* Apress Book Feature */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="premium-card premium-card-blue p-8 sm:p-12">
            <div className="relative z-10 grid md:grid-cols-[auto,1fr] gap-10 items-center">
              <div className="flex justify-center">
                <img
                  src={apressBook.url}
                  alt="Deep Learning Projects Using TensorFlow 2 – Buchcover, publiziert bei Apress"
                  loading="lazy"
                  className="w-56 sm:w-64 h-auto rounded-md shadow-2xl"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">
                  Publiziert bei Apress
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 tracking-tight">
                  Deep Learning Projects Using TensorFlow 2
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Im Auftrag von Apress als Autorin eines projektbasierten Fachbuchs zu Deep Learning
                  engagiert – dieselbe Sorgfalt bringe ich in jedes Curriculum-Engagement ein.
                </p>
              </div>
            </div>
          </div>
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
          <div className="premium-card premium-card-cyan p-10 sm:p-14">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight">
                Warum diese Arbeit anders ist
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Dies sind keine Inhalte von einer Generalistin, die sich erst letzte Woche mit KI
                beschäftigt hat. Jedes Curriculum und jeder technische Text stammt von jemandem,
                der produktive KI-Systeme gebaut hat, bei Apress publiziert wurde, 14 akkreditierte
                Kurse auf Coursera entwickelt und mehr als 100 Fachkräfte in Großbritannien und
                Indien unterrichtet hat.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Das Ergebnis sind Inhalte, die technisch korrekt, didaktisch fundiert und sofort
                einsetzbar sind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
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

      <section className="relative py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="premium-card premium-card-blue p-10 sm:p-14">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight">
                Mit wem Vinita arbeitet
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Vinita arbeitet mit EdTech-Plattformen, die ihren Katalog an KI-Kursen ausbauen,
                mit technischen Verlagen, die spezialisierte Autorinnen suchen, sowie mit
                Unternehmen, die interne KI-Trainingsprogramme aufbauen. Engagements erfolgen
                remote und sind europaweit verfügbar.
              </p>
              <div className="p-6 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border">
                <p className="text-foreground leading-relaxed">
                  Sie sind eine EdTech-Plattform mit einem generativen KI-Produkt, das
                  zusätzlich Pflichten aus dem EU AI Act unterliegt? Vinita arbeitet mit
                  Bildungstechnologie-Unternehmen sowohl an Curriculum-Entwicklung als auch an
                  Compliance-Engineering.{" "}
                  <Link to="/services/eu-ai-act-engineering" className="text-primary hover:text-accent underline underline-offset-4">
                    Zu den EU AI Act Engineering Leistungen
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 tracking-tight text-center">
            Was Fachleute sagen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <Sparkles className="w-8 h-8 text-accent mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
            Sie haben ein Content-Projekt im Kopf?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Teilen Sie das Briefing und Vinita sagt Ihnen ehrlich, ob und wann sie es liefern kann.
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