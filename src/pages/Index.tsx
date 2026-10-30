import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, Github, MessageSquare, ScanFace, ScrollText, Stamp, Eye, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqList } from "@/components/FaqList";
import { InstallCommand } from "@/components/InstallCommand";
import justificationGate from "@/assets/spec-drift-justification-gate.png";
import {
  DEMO_ARTICLE_PATH,
  DEMO_REPO_URL,
  DEMO_URL,
  GITHUB_PROFILE_URL,
  article50Papers,
  homeFaq,
  openSourcePackages,
  proofPoints,
} from "@/data/site-content";

const transparencyDuties = [
  {
    icon: <MessageSquare className="w-7 h-7" />,
    article: "Art. 50(1)",
    title: "Tell people it's AI",
    text: "People must be told when they're interacting with an AI system, such as a chatbot or voice agent. Aevoxis adds the disclosure in the product and logs that it was shown.",
    variant: "cyan",
  },
  {
    icon: <Stamp className="w-7 h-7" />,
    article: "Art. 50(2)",
    title: "Mark AI-generated content",
    text: "Synthetic text, images, audio and video must carry a machine-readable marking. Aevoxis applies it at generation time and records it.",
    variant: "blue",
  },
  {
    icon: <ScanFace className="w-7 h-7" />,
    article: "Art. 50(4)",
    title: "Disclose deepfakes",
    text: "Deployers must disclose AI-generated or manipulated content that looks real. Aevoxis makes the disclosure part of the publishing flow.",
    variant: "teal",
  },
];

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

const highRiskUseCases = [
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
            <span className="text-sm font-medium text-foreground">EU AI Act · Article 50 now, Articles 12–14 next</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance mb-8 tracking-tight">
            Compliance that runs{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              inside your AI system
            </span>
            , not beside it.
          </h1>

          <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 text-pretty">
            Aevoxis builds the engineering layer of the EU AI Act. Start with Article 50: tell people when they're
            talking to AI and mark AI-generated content, which has applied since August 2026. Then extend the same
            components to the high-risk duties of Articles 12–14 (logging, transparency, human oversight) before
            December 2027.
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

      {/* Article 50: applies today */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Article 50: transparency, required today
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Article 50 has applied since 2 August 2026. If your product talks to people or generates content, these
              duties are live now, and each one is a change in the product rather than a page in a policy document.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {transparencyDuties.map((d) => (
              <div key={d.article} className={`premium-card premium-card-${d.variant} p-8`}>
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center mb-6 text-accent">
                    {d.icon}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-2">{d.article}</p>
                  <h3 className="text-xl font-bold text-foreground mb-3">{d.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{d.text}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
            Built on Vinita's published research on implementing Article 50 (two SSRN preprints):{" "}
            {article50Papers.map((paper, i) => (
              <span key={paper.href}>
                <a
                  href={paper.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-accent"
                >
                  {paper.title}
                </a>
                {i < article50Papers.length - 1 ? "; " : "."}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* Next: high-risk duties */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
              Next: high-risk duties in the code path (Articles 12–14)
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              The same logging and oversight components extend to the high-risk obligations that apply from
              2 December 2027.
            </p>
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
            <div className="relative z-10">
            <div className="grid lg:grid-cols-[1.2fr,1fr] gap-10 items-start">
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
                  It was built for the AWS 10,000 AIdeas Competition 2025 on AWS Lambda in Frankfurt
                  (eu-central-1), with Amazon Bedrock for the reasoning step, and placed in the Top 300 out of more
                  than 10,000 entries. The public demo now runs on Render; the AWS path stays in the code for
                  production deployments.
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

            <figure className="mt-12 w-full max-w-[670px] mx-auto">
              <img
                src={justificationGate}
                alt="Spec-Drift Chronometer Justification Gate: drift above threshold, an approved decision and the reasoning trace"
                width={1376}
                height={1276}
                loading="lazy"
                className="w-full h-auto rounded-2xl border border-border"
              />
              <figcaption className="mt-3 text-xs text-muted-foreground text-center">Live demo, scripted scenarios</figcaption>
            </figure>
            </div>
          </div>
        </div>
      </section>

      {/* Open-source tools */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="premium-card premium-card-teal p-8 sm:p-10">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-foreground mb-3 tracking-tight">Try the open-source tools</h2>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                Two of the building blocks are on PyPI, so you can install them and read the source before talking to
                anyone.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                {openSourcePackages.map((pkg) => (
                  <div key={pkg.name} className="rounded-2xl bg-secondary/60 border border-border p-5">
                    <p className="font-semibold text-foreground mb-3">{pkg.name}</p>
                    <InstallCommand command={pkg.install} />
                    <a
                      href={pkg.pypi}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-3 text-sm text-primary underline underline-offset-4 hover:text-accent"
                    >
                      View on PyPI <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ))}
              </div>

              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                <Github className="w-4 h-4" /> All repositories on GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="relative py-24 overflow-hidden">
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 tracking-tight">Who it's for</h2>

            <div className="mb-10">
              <h3 className="text-lg font-bold text-foreground mb-3">Article 50, today</h3>
              <p className="text-muted-foreground leading-relaxed">
                Any company offering a chatbot, voice agent or AI-generated content to people in the EU, including
                companies based outside the EU.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Articles 12–14, from December 2027</h3>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Teams that build or deploy high-risk AI systems in the EU, in any industry. If your system makes or
                shapes decisions like these, Articles 12–14 apply to you:
              </p>
              <ul className="space-y-3">
                {highRiskUseCases.map((u) => (
                  <li key={u} className="flex gap-3 text-foreground">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="premium-card premium-card-cyan p-8 sm:p-10">
            <div className="relative z-10">
              <p className="text-sm font-semibold text-accent mb-3 uppercase tracking-wider">Why now</p>
              <ul className="space-y-2 mb-5 text-sm sm:text-base">
                {[
                  ["2 Aug 2026", "Transparency rules (Article 50) apply and enforcement starts"],
                  ["2 Dec 2026", "Deadline for AI systems already generating synthetic content (Article 50(2))"],
                  ["2 Dec 2027", "High-risk rules (Annex III) apply, including Articles 12–14"],
                  ["2 Aug 2028", "High-risk AI in regulated products (Annex I) follows"],
                ].map(([date, text]) => (
                  <li key={date} className="flex gap-3">
                    <span className="font-semibold text-foreground whitespace-nowrap w-24 shrink-0">{date}</span>
                    <span className="text-muted-foreground">{text}</span>
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mb-5">
                Source:{" "}
                <a
                  href="https://ai-act-service-desk.ec.europa.eu/en/ai-act/timeline/timeline-implementation-eu-ai-act"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-accent"
                >
                  European Commission, AI Act Service Desk
                </a>{" "}
                (dates after the Digital Omnibus on AI)
              </p>
              <p className="text-foreground text-lg leading-relaxed mb-4">
                Logging can't be added afterwards. The data needed to reconstruct a decision has to be captured
                from the first day the system runs, so the earlier it's built in, the cheaper it is.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Need it sooner? I take on a small number of{" "}
                <Link to="/services/eu-ai-act-engineering" className="text-primary underline underline-offset-4 hover:text-accent">
                  engineering engagements
                </Link>{" "}
                for Article 50 and Articles 12–14 while the product is in development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10 tracking-tight">Questions</h2>
          <FaqList items={homeFaq} />
        </div>
      </section>

      {/* About me + CTA */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">
            Built by an engineer, not a policy team
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            I'm Vinita Silaparasetty, an AI Governance Engineer and Google Developer Expert in Machine Learning.
            I build Aevoxis because most AI failures I see are architecture failures. They can be fixed in the
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
              <Link to="/about">About me</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
