import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github, ScrollText, Eye, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LogoStrip } from "@/components/LogoStrip";
import { FaqList } from "@/components/FaqList";
import { DEMO_ARTICLE_PATH, DEMO_REPO_URL, DEMO_URL, homeFaq, proofPoints } from "@/data/site-content";

const articles = [
  {
    icon: <ScrollText className="w-7 h-7" />,
    article: "Article 12",
    title: "Record-keeping",
    text: "Every input, output and decision is logged automatically while the system runs. Each record carries a SHA-256 hash, so any later edit is detectable.",
    variant: "cyan",
  },
  {
    icon: <Eye className="w-7 h-7" />,
    article: "Article 13",
    title: "Transparency",
    text: "Deployers see why an output was produced, in the interface they already use. Not in a log file nobody opens.",
    variant: "blue",
  },
  {
    icon: <UserCheck className="w-7 h-7" />,
    article: "Article 14",
    title: "Human oversight",
    text: "When outputs drift from the approved specification, a Justification Gate stops the system until a person records a reasoned decision.",
    variant: "teal",
  },
];

const useCases = [
  "Screening job applicants or ranking candidates",
  "Credit scoring and creditworthiness checks",
  "Scoring exams or steering access to education",
  "AI safety components in machinery and other regulated products",
];

export default function HomePage() {
  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -left-32 rotate-12 opacity-40" />
        <div className="glass-shape w-96 h-96 -bottom-48 -right-48 -rotate-12 opacity-30" />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-accent/20 mb-10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium text-foreground">EU AI Act · Articles 12, 13 and 14</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-8 tracking-tight">
            Compliance that runs{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              inside your AI system
            </span>
            , not beside it.
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 text-pretty">
            Aevoxis builds tooling for the engineering core of the EU AI Act: automatic logging (Article 12),
            transparency (Article 13) and human oversight (Article 14). It sits in your system's execution path,
            so every decision is recorded, explainable and stoppable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button asChild size="lg" className="rounded-2xl px-10 py-7 text-lg shadow-lg shadow-primary/20">
              <Link to="/early-access">
                Join early access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-2xl px-10 py-7 text-lg border-primary/20 hover:border-accent hover:bg-secondary/50">
              <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                Try the live demo
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <ul className="grid grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto text-left">
            {proofPoints.map((p) => {
              const body = (
                <>
                  <p className="text-sm font-semibold text-foreground">{p.value}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">{p.label}</p>
                </>
              );
              const cls =
                "block h-full p-5 rounded-2xl bg-secondary/70 backdrop-blur-sm border border-border hover:border-accent/30 transition-all";
              return (
                <li key={p.value}>
                  {p.href ? (
                    p.href.startsWith("/") ? (
                      <Link to={p.href} className={cls}>{body}</Link>
                    ) : (
                      <a href={p.href} target="_blank" rel="noopener noreferrer" className={cls}>{body}</a>
                    )
                  ) : (
                    <div className={cls}>{body}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* What it does */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Three obligations, built into the code path
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Most compliance work treats these articles as paperwork. That breaks down fast. Logs that were never
              captured can't be produced for an auditor, and an override button nobody is forced to use is not
              oversight. So Aevoxis builds each obligation into the system itself.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((a) => (
              <div key={a.article} className={`premium-card premium-card-${a.variant} p-8`}>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center mb-6 text-accent">
                    {a.icon}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">{a.article}</p>
                  <h3 className="text-xl font-bold text-foreground mb-3">{a.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{a.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof of concept */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="premium-card premium-card-blue p-8 sm:p-12">
            <div className="relative z-10 grid lg:grid-cols-[1.2fr,1fr] gap-10 items-start">
              <div>
                <p className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">Working prototype</p>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-5 tracking-tight">
                  The Spec-Drift Chronometer
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  It measures how far an AI system's output has drifted from a human-approved specification. Past the
                  threshold, the Justification Gate stops the system and asks a person to decide. A weak answer like
                  "it is fine" is rejected, and the rejection is logged too.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  It runs on AWS Lambda in Frankfurt (eu-central-1), with Amazon Bedrock for the reasoning step. It
                  was a Top 300 finalist out of more than 10,000 entries in the AWS 10,000 AIdeas Competition 2025.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  To be clear about what you'll see: the public demo uses scripted drift scenarios. The gate, the
                  audit trail and the specification vault are fully working.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="rounded-full px-6">
                    <a href={DEMO_URL} target="_blank" rel="noopener noreferrer">
                      Open the demo <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-full px-6">
                    <a href={DEMO_REPO_URL} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" /> Source code
                    </a>
                  </Button>
                  <Button asChild variant="ghost" className="rounded-full px-6">
                    <Link to={DEMO_ARTICLE_PATH}>
                      How it maps to Articles 12–14 <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
              <ol className="space-y-4">
                {[
                  ["Specify", "A person writes and approves the specification. The AI system can read it but never edit it."],
                  ["Measure", "Drift against the specification is checked every few seconds."],
                  ["Stop", "Past the threshold, the Justification Gate halts the system."],
                  ["Decide", "A person records a reasoned decision. Weak justifications are rejected."],
                  ["Prove", "Every step lands in a hash-verified audit trail you can export."],
                ].map(([step, text], i) => (
                  <li key={step} className="flex gap-4 p-4 rounded-2xl bg-secondary/60 border border-border">
                    <span className="w-8 h-8 shrink-0 rounded-full bg-accent/15 text-accent font-semibold flex items-center justify-center text-sm">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">{step}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">Who it's for</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Teams that build or deploy high-risk AI systems in the EU, in any industry. If your system makes or
              shapes decisions like these, Articles 12–14 apply to you:
            </p>
            <ul className="space-y-3">
              {useCases.map((u) => (
                <li key={u} className="flex gap-3 text-foreground">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {u}
                </li>
              ))}
            </ul>
          </div>
          <div className="premium-card premium-card-cyan p-8 sm:p-10">
            <div className="relative z-10">
              <p className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">Why now</p>
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Annex III obligations apply from 2 December 2027. That sounds far away, but logging can't be
                added afterwards: the data needed to reconstruct a decision has to be captured from the first day
                the system runs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Need it sooner? I take on a small number of{" "}
                <Link to="/services/eu-ai-act-engineering" className="text-primary underline underline-offset-4 hover:text-accent">
                  engineering engagements
                </Link>{" "}
                for Articles 12–14 while the product is in development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LogoStrip />

      {/* FAQ */}
      <section className="relative py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 tracking-tight">Questions</h2>
          <FaqList items={homeFaq} />
        </div>
      </section>

      {/* Founder + CTA */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
            Built by an engineer, not a policy team
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm Vinita Silaparasetty, an AI Governance Engineer and Google Developer Expert in Machine Learning.
            I started Aevoxis because most AI failures I see are architecture failures. They can be fixed in the
            design, long before they become legal problems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="rounded-2xl px-10 py-7 text-lg shadow-lg shadow-primary/20">
              <Link to="/early-access">
                Join early access
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-2xl px-10 py-7 text-lg border-primary/20">
              <Link to="/about">About the founder</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
