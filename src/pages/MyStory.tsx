import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PERSONAL_SITE_URL } from "@/seo/meta";
import { CASE_STUDY_PATH, DEMO_ARTICLE_PATH } from "@/data/site-content";

// Facts here come from Vinita's LinkedIn profile and her own account (claude.ai "Case study writing" chat, Oct 2026).
// Always say "design patent": an Indian design registration protects how the product looks, not how it works.
// The incubator is kept deliberately vague because the invitation email no longer exists.

const timeline: Array<[string, string]> = [
  ["2015–2017", "I paused my fashion degree to design a lightweight, dual-purpose VR headset."],
  ["2016–2017", "A startup programme abroad selected the headset. I couldn't relocate while finishing my degree, so I didn't take it up."],
  ["2018", "I filed the design with the Indian Patent Office as sole inventor."],
  ["2020", "Apress published my book, Deep Learning Projects Using TensorFlow 2."],
  ["2024", "Indian Design Patent IN 307907 was granted, six years after filing."],
  ["2025", "Independent AI consulting, a CPD-accredited course, and a Top 300 place out of 10,000+ entries in the AWS 10,000 AIdeas Competition."],
  ["Today", "I build EU AI Act tooling under the Aevoxis name, from Germany."],
];

const h2 = "text-2xl sm:text-3xl font-bold text-foreground mt-16 mb-6 tracking-tight";
const p = "text-lg text-muted-foreground leading-relaxed mb-5";
const link = "text-primary underline underline-offset-4 hover:text-accent";

export default function MyStoryPage() {
  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <article className="relative pt-36 pb-24 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">My story</p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6 tracking-tight">
            From a VR Headset to AI Governance
          </h1>
          <p className={p}>
            I've always started with a problem other people were working around. In 2015 it was VR headsets. Today
            it's AI systems that nobody can audit or stop.
          </p>

          <h2 className={h2}>Timeline</h2>
          <ol className="relative border-l-2 border-accent/40 ml-3 mb-6">
            {timeline.map(([year, text]) => (
              <li key={year + text} className="mb-8 ml-6">
                <span className="absolute -left-[9px] mt-1.5 h-4 w-4 rounded-full border-2 border-accent bg-background" />
                <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-1">{year}</p>
                <p className="text-lg text-muted-foreground leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>

          <h2 className={h2}>The VR headset</h2>
          <p className={p}>
            Early VR headsets were heavy, and wearing one for long was uncomfortable. Most people also wore a separate
            audio headset on top.
          </p>
          <p className={p}>
            My design combined the two: an audio headset with a retractable VR visor. You could use it as ordinary
            headphones and pull the visor down only when you needed it. The aim was a lighter headset you could wear
            for longer.
          </p>
          <p className={p}>
            I took two years out of my bachelor's to work on it. I filed the design in 2018, and the Indian Patent
            Office granted <strong className="text-foreground">Design Patent IN 307907</strong> in 2024, with me as
            the sole inventor. A design patent protects how a product looks, not how it works.
          </p>

          <h2 className={h2}>What it taught me</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-lg text-muted-foreground">
            <li>Start from the person using the product, not the technology.</li>
            <li>A formal review takes patience. The patent took six years from filing to grant.</li>
            <li>Get it right in the design, because fixing it later costs more.</li>
          </ul>
          <p className={p}>
            The last one is the idea behind Aevoxis. The{" "}
            <Link to={DEMO_ARTICLE_PATH} className={link}>
              Spec-Drift Chronometer
            </Link>{" "}
            builds logging and human oversight into an AI system's design instead of adding them after launch.
          </p>

          <h2 className={h2}>More of my work</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-lg text-muted-foreground">
            <li>
              <Link to={CASE_STUDY_PATH} className={link}>
                Scoping an in-house AI support chatbot
              </Link>
              , independent consulting from early 2025
            </li>
            <li>
              <a href={`${PERSONAL_SITE_URL}/case-study-cpd-course.html`} className={link}>
                Building a CPD-accredited course
              </a>
              , on my personal site
            </li>
          </ul>

          <div className="premium-card premium-card-cyan p-8 mt-16">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Let's talk</h2>
              <p className={p}>If you're building an AI system and want oversight designed in from the start, get in touch.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="rounded-2xl px-8">
                  <a href="mailto:info@aevoxis.de">
                    <Mail className="w-4 h-4 mr-2" />
                    info@aevoxis.de
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl px-8">
                  <Link to="/about">
                    About me
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
