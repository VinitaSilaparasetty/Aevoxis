import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LogoStrip } from "@/components/LogoStrip";
import { PERSONAL_SITE_URL } from "@/seo/meta";
import { DEMO_ARTICLE_PATH, CASE_STUDY_PATH, SCENARIOS_PATH } from "@/data/site-content";

const credentials = [
  { label: "Google Developer Expert", institution: "Machine Learning" },
  { label: "AWS Community Builder", institution: "Machine Learning" },
  { label: "AWS 10,000 AIdeas Competition 2025", institution: "Top 300 finalist of 10,000+ entries" },
  { label: "Published author", institution: "Apress, 2020" },
  { label: "M.Sc. Data Science", institution: "Newcastle University (Russell Group)" },
  { label: "IEEE and Elsevier", institution: "Invited peer reviewer" },
  { label: "Indian Design Patent", institution: "IN 307907" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="glass-shape w-48 h-48 top-1/2 -left-24 opacity-20" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-accent/20 mb-10">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">About me</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-8 text-balance tracking-tight">
                Most AI failures are architecture failures. Not model failures, not legal failures.
              </h1>

              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed mb-10">
                <p>
                  I'm Vinita Silaparasetty, an AI Governance Engineer based in Germany. Aevoxis is the name I work
                  under.
                </p>
                <p>
                  I've built AI systems for a long time, from a patented VR headset to production machine learning.
                  The same pattern keeps showing up. A team builds the system first and thinks about oversight later.
                  By then, the logs they need were never captured and nobody can actually stop the system.
                </p>
                <p>
                  Aevoxis exists to fix that in the design. The{" "}
                  <Link to={DEMO_ARTICLE_PATH} className="text-primary underline underline-offset-4 hover:text-accent">
                    Spec-Drift Chronometer
                  </Link>{" "}
                  is the first working version: logging, transparency and a human decision point built into the
                  execution path.
                </p>
                <p>
                  Aevoxis is a brand, not a registered company. I work as a member of SMartDE eG, a cooperative for
                  self-employed professionals in Germany, and engineering engagements are invoiced through it.
                </p>
                <p>
                  Before I worked under the Aevoxis name, I took on independent consulting projects. One of them is
                  written up as a case study:{" "}
                  <Link to={CASE_STUDY_PATH} className="text-primary underline underline-offset-4 hover:text-accent">
                    scoping an in-house AI support chatbot
                  </Link>
                  . To show how I'd approach EU AI Act work, I've also written up some{" "}
                  <Link to={SCENARIOS_PATH} className="text-primary underline underline-offset-4 hover:text-accent">
                    illustrative scenarios
                  </Link>
                  . They use invented companies and are not client work.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button asChild className="rounded-2xl px-8 py-6 shadow-lg shadow-primary/20">
                  <Link to="/contact">
                    Get in touch
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl px-8 py-6">
                  <a href="https://www.linkedin.com/in/vinita-silaparasetty" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative lg:mt-12">
              <div className="premium-card premium-card-blue p-10">
                <div className="relative z-10">
                  <div className="text-center mb-10">
                    {/* Replace with a photo: <img src="/vinita.jpg" alt="Vinita Silaparasetty" className="w-28 h-28 rounded-full mx-auto mb-6 object-cover" /> */}
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 mx-auto mb-6 flex items-center justify-center border border-border">
                      <span className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">VS</span>
                    </div>
                    <h2 className="text-2xl font-bold text-foreground mb-2">Vinita Silaparasetty</h2>
                    <p className="text-primary font-medium">AI Governance Engineer</p>
                  </div>

                  <ul className="space-y-4">
                    {credentials.map((cred) => (
                      <li key={cred.label} className="p-4 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border">
                        <p className="text-sm font-semibold text-foreground">{cred.label}</p>
                        <p className="text-xs text-muted-foreground">{cred.institution}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LogoStrip />

      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">How I work</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight">Architecture first</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I look for the architectural problem before it turns into a legal or operational one. In practice
                that means asking early where decisions are logged, what a user sees and who can stop the system.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">Working with me</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight">Direct</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                You work with me. No account managers, no hand-offs to juniors. That means faster decisions and one
                person accountable for the result.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 overflow-hidden border-t border-border">
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-8 h-8 text-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            The quickest way to find out if I can help is to email me:{" "}
            <a href="mailto:info@aevoxis.de" className="text-accent hover:text-primary font-medium underline underline-offset-4 transition-colors">
              info@aevoxis.de
            </a>
          </p>
          <p className="text-muted-foreground">
            My book, courses and teaching work are on{" "}
            <a href={PERSONAL_SITE_URL} className="text-primary underline underline-offset-4 hover:text-accent">
              my personal site
            </a>
            .
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
