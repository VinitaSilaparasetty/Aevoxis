import { Link } from "react-router-dom";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CASE_STUDY_PATH, DEMO_REPO_URL } from "@/data/site-content";

// Worked examples of how an Aevoxis engagement would run. None of these is a client engagement:
// the companies are invented and every scenario is labelled as illustrative, on the page and in its metadata.
// Keep it that way. Never add results, quotes or logos that could read as real client work.

type Scenario = {
  id: string;
  label: string;
  title: string;
  company: string;
  articles: string;
  situation: string[];
  steps: Array<[string, string]>;
  deliverables: string[];
  watchFor: string;
};

const scenarios: Scenario[] = [
  {
    id: "support-chatbot-disclosure",
    label: "Article 50(1)",
    title: "A support chatbot that never says it's an AI",
    company: "An invented 40-person SaaS company in Berlin with a Claude-based support chat on its website and in its app",
    articles: "Article 50(1): people must be told they are interacting with an AI system",
    situation: [
      "The chat widget greets customers with a friendly name and a photo. Nothing tells them it's an AI system.",
      "The team also has no record of what each customer was shown. If a regulator or a customer asks, they can't prove a disclosure ever appeared.",
    ],
    steps: [
      ["Step 1: Map every entry point.", "I list each place a person can reach the AI: the web widget, the in-app chat, email replies drafted by the model and the handover to a human agent."],
      ["Step 2: Put the disclosure in the product.", "The disclosure appears at the start of each conversation, in the same language as the conversation, before the first AI reply. It's part of the code path, so a design change can't drop it silently."],
      ["Step 3: Log that it was shown.", "Each conversation stores a disclosure event: the text version, the channel, the language and a timestamp. The log is append-only."],
      ["Step 4: Test it.", "Automated tests fail the build if any entry point can return an AI reply without a disclosure event first."],
    ],
    deliverables: [
      "Disclosure built into every entry point, with tests that keep it there",
      "An append-only disclosure log the team can query",
      "A one-page note for the legal team on what was built and where",
    ],
    watchFor:
      "Human handover. When a person takes over, the customer should be able to tell. When the conversation goes back to the AI, the disclosure should come back too.",
  },
  {
    id: "generated-content-marking",
    label: "Article 50(2) and 50(4)",
    title: "Marketing images that leave the building unmarked",
    company: "An invented e-commerce retailer that generates product images and short videos with a third-party model API",
    articles:
      "Article 50(2): machine-readable marking of synthetic content. Article 50(4): disclosure of deepfakes by deployers",
    situation: [
      "The team generates hundreds of images a week. They are resized, compressed and uploaded to the shop and social channels.",
      "Whatever marking the model provider adds is often stripped by the time the image goes live. Some videos show realistic people who don't exist.",
    ],
    steps: [
      ["Step 1: Trace the content pipeline.", "I follow one image from generation to publication and note every step that rewrites the file: editing, resizing, compression and upload."],
      ["Step 2: Mark at generation time.", "The marking is applied as soon as the content is generated, using provenance metadata plus a watermark where the format supports it, so one stripped layer doesn't remove all of it."],
      ["Step 3: Check before publishing.", "A publishing gate checks the marking is still present and blocks the upload if it isn't."],
      ["Step 4: Add the deepfake disclosure.", "Content showing realistic people gets a visible label in the publishing flow, so the decision is made once, by a person, and recorded."],
    ],
    deliverables: [
      "Marking applied at generation time, with a gate before publication",
      "A visible-label step for realistic depictions of people",
      "A record for each published file: when it was generated, how it was marked and who approved the label",
    ],
    watchFor:
      "Third-party tools in the middle of the pipeline. A single image editor that re-saves files can strip metadata without anyone noticing, which is why the check runs just before publishing.",
  },
  {
    id: "hiring-tool-oversight",
    label: "Articles 12–14",
    title: "A CV-screening model nobody can explain afterwards",
    company: "An invented HR-tech provider whose model ranks job applicants for its customers' recruiters",
    articles:
      "Annex III, point 4 (employment) makes this a high-risk system. Article 12: automatic logging. Article 13: transparency to deployers. Article 14: human oversight",
    situation: [
      "Recruiters see a ranked shortlist and a score. They don't see why a candidate scored low, and the system keeps no record of which model version produced which ranking.",
      "The provider has updated the model twice this year. Nobody checked whether its behaviour drifted from the documented specification after each update.",
    ],
    steps: [
      ["Step 1: Define what must be reconstructable.", "With the team, I list what an auditor would need to rebuild one decision: the input, the model version, the score, the threshold and who acted on it."],
      ["Step 2: Log events automatically.", "Each ranking writes a structured, tamper-evident event with those fields. This is the Article 12 layer."],
      ["Step 3: Show recruiters what they need.", "The shortlist shows the main factors behind each score and the system's known limits, in plain language. This supports Article 13."],
      ["Step 4: Add a decision point.", "When the model's behaviour drifts past an agreed threshold, a justification gate stops automatic ranking until a named person approves, overrides or pauses the system. This is the Article 14 layer, and it's the pattern the Spec-Drift Chronometer demonstrates."],
    ],
    deliverables: [
      "Event logging that can rebuild any ranking after the fact",
      "Plain-language explanations for recruiters",
      "A drift threshold and a human decision point, with every decision recorded",
    ],
    watchFor:
      "Oversight that exists only on paper. If recruiters approve every shortlist in two seconds, the gate isn't oversight. The logs should show how long reviews take, so the team can see whether people are really reviewing.",
  },
];

const h2 = "text-2xl sm:text-3xl font-bold text-foreground mt-16 mb-4 tracking-tight";
const h3 = "text-lg font-bold text-foreground mt-8 mb-3";
const p = "text-lg text-muted-foreground leading-relaxed mb-5";
const link = "text-primary underline underline-offset-4 hover:text-accent";

function IllustrativeBadge() {
  return (
    <p className="inline-block rounded-full border border-dashed border-accent/70 px-3 py-1 text-sm font-semibold text-accent mb-4">
      Illustrative scenario, not a client engagement
    </p>
  );
}

export default function IllustrativeScenariosPage() {
  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <article className="relative pt-36 pb-24 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
            Illustrative scenarios · EU AI Act engineering
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-6 tracking-tight">
            How an Engagement Would Work
          </h1>

          <div className="rounded-2xl border border-accent/60 bg-secondary/60 p-5 mb-8">
            <p className="text-foreground font-semibold mb-2">Please read this first</p>
            <p className="text-muted-foreground leading-relaxed">
              These are worked examples, not client case studies. The companies are invented, and nothing here
              describes real results. I wrote them to show how I would approach common EU AI Act engineering
              problems. For real work I've done, see the{" "}
              <Link to={CASE_STUDY_PATH} className={link}>
                in-house chatbot case study
              </Link>
              . Whether a duty applies to your system is a question for your legal advisers.
            </p>
          </div>

          <p className={p}>Each scenario follows the same shape: the situation, the steps I'd take, what you'd get and one thing to watch for.</p>
          <ul className="list-disc pl-6 space-y-1 mb-5 text-lg text-muted-foreground">
            {scenarios.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`} className={link}>
                  {s.title}
                </a>{" "}
                ({s.label})
              </li>
            ))}
          </ul>

          {scenarios.map((s) => (
            <section key={s.id} id={s.id} className="scroll-mt-32">
              <h2 className={h2}>{s.title}</h2>
              <IllustrativeBadge />
              <p className="text-muted-foreground mb-2">
                <strong className="text-foreground">Company:</strong> {s.company}
              </p>
              <p className="text-muted-foreground mb-6">
                <strong className="text-foreground">Relevant duties:</strong> {s.articles}
              </p>

              <h3 className={h3}>The situation</h3>
              {s.situation.map((x) => (
                <p key={x} className={p}>
                  {x}
                </p>
              ))}

              <h3 className={h3}>What I would do</h3>
              <ol className="space-y-3 mb-6 text-lg text-muted-foreground">
                {s.steps.map(([b, rest]) => (
                  <li key={b}>
                    <strong className="text-foreground">{b}</strong> {rest}
                  </li>
                ))}
              </ol>

              <h3 className={h3}>What you would get</h3>
              <ul className="list-disc pl-6 space-y-1 mb-6 text-lg text-muted-foreground">
                {s.deliverables.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>

              <p className="rounded-2xl border border-border bg-secondary/40 p-4 text-muted-foreground mb-5">
                <strong className="text-foreground">Watch for:</strong> {s.watchFor}
              </p>
            </section>
          ))}

          <p className={p + " mt-12"}>
            The decision point in the third scenario is the pattern behind the{" "}
            <a href={DEMO_REPO_URL} target="_blank" rel="noopener noreferrer" className={link}>
              Spec-Drift Chronometer
            </a>
            , my open-source proof of concept.
          </p>

          <div className="premium-card premium-card-cyan p-8 mt-12">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Facing one of these?</h2>
              <p className={p}>
                If your team recognises one of these situations, I'd be glad to talk it through. I usually start with
                a short diagnosis of where the gaps are.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="rounded-2xl px-8">
                  <a href="mailto:info@aevoxis.de">
                    <Mail className="w-4 h-4 mr-2" />
                    info@aevoxis.de
                  </a>
                </Button>
                <Button asChild variant="outline" className="rounded-2xl px-8">
                  <Link to="/services/eu-ai-act-engineering">
                    EU AI Act engineering
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
