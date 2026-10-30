import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DEMO_REPO_URL } from "@/data/site-content";

// Independent consulting work from early 2025, written up under NDA with the client anonymised.
// It predates the Aevoxis name, so the page says so and never presents it as Aevoxis client work.

const atAGlance: Array<[string, string]> = [
  ["Client", "Venture-backed South American professional services company serving more than ten thousand small-business customers"],
  ["When", "Early 2025"],
  ["Turnaround", "Diagnosis and pilot proposal delivered within three days of first contact"],
  ["Delivery", "Fully remote, with the client on another continent"],
  ["Challenge", "A vendor-managed support chatbot that escalated too many conversations and gave the team no control to fix it"],
  ["My role", "Independent consultant: diagnostic analysis, solution design and pilot scoping"],
  ["Deliverables", "Diagnostic report with a target solution; four-week pilot proposal with success metrics"],
  ["Scope", "Discovery and pilot design"],
];

const diagnosis: Array<[string, string, string]> = [
  ["Control", "No access to prompts, slow knowledge base updates, no say over infrastructure", "Every fix depended on the vendor's roadmap and timeline"],
  ["Capability", "No handling of email attachments, limited integration with internal systems", "Common customer requests could never be resolved by the bot"],
  ["Quality", "Hallucinated and repeated answers; only part of conversations were reviewed", "Customers lost trust, and problems surfaced late"],
];

const solutionParts: Array<[string, string]> = [
  ["Retrieval-augmented generation (RAG)", "over a restructured, expanded knowledge base, so answers come from approved content."],
  ["Integrations", "for customer-specific data and document processing (OCR for email attachments)."],
  ["Prompt engineering", "designed to reduce hallucinations, refined continuously from escalations and feedback."],
  ["A tiered escalation flow", "that hands complex cases to people without breaking the customer's trust."],
  ["Full audit coverage", "using automated review, with tracking of response time, resolution and satisfaction."],
  ["Multi-channel reach", "across messaging, website chat and email, with analytics dashboards."],
];

const whyRasa: Array<[string, string, string]> = [
  ["Predictable answers in a regulated domain", "Business logic lives in defined conversation flows, with the LLM handling language", "Agent frameworks let the LLM decide more of the next step, the behaviour the client wanted less of"],
  ["Reliable multi-turn conversations", "Dialogue management is built in", "LangChain and LlamaIndex supply the building blocks; dialogue state has to be built and maintained on top"],
  ["Messaging channels from day one", "Ready-made channel connectors, including WhatsApp", "Channel handling must be written and maintained separately"],
  ["Full ownership after leaving a vendor", "Open source and self-hosted, so prompts, data and infrastructure stay in-house", "Comparable, but more of the surrounding platform must be assembled by the team"],
  ["Costs that fit the client's budget", "No licence fees, and less custom code to build and maintain", "Also free to use, but the extra build work for dialogue and channels adds cost"],
];

const pilotScope: Array<[string, string]> = [
  ["Multi-turn conversations", "Knowledge graph and automated data ingestion"],
  ["RAG over a curated knowledge base", "Legacy system integrations and attachment processing"],
  ["One channel, chosen by customer usage", "Additional channels"],
  ["Prompt engineering and a feedback loop", "Tiered escalation model (direct handover instead)"],
  ["Clear fallbacks and smooth human handover", "Real-time analytics dashboards"],
  ["Basic analytics and a 20% manual audit", "Full automated audit coverage"],
];

const timeline: Array<[string, string]> = [
  ["Week 1, setup:", "build and configure the bot on the curated knowledge base and connect one channel."],
  ["Week 2, controlled launch:", "release to internal testers or a small group of customers and log every gap."],
  ["Week 3, optimization:", "refine prompts, answers and Q&A pairs from what the logs show."],
  ["Week 4, pilot launch:", "open to the wider customer base and track resolution, escalations and feedback."],
];

const risks: Array<[string, string]> = [
  ["Disruption while moving away from the vendor", "Phased approach: the pilot runs on one channel before any migration"],
  ["Knowledge base goes stale", "Scheduled audits now; automated ingestion in the full build"],
  ["Slow integrations with older systems", "Modular design, with critical features first and the rest added in stages"],
  ["Prompts need skilled upkeep", "Team training and a feedback loop from escalations"],
  ["Bot-to-human handover feels abrupt", "A/B testing and real-time feedback on handover messages"],
  ["Monitoring adds overhead", "Automated review in place of manual checks over time"],
];

const principles = [
  "I looked for the cause behind the symptoms. Hallucinations and escalations were symptoms, the lack of control was the cause, and that shaped the recommendation.",
  "I chose tools for the client's needs and budget. The stack was picked for predictable answers, ready-made channels and low running costs, and the pilot let the client test the idea for far less than the full build.",
  "I built oversight into the design from the start. The pilot audited a sample of conversations, the full build audited all of them, and the team owned the prompts and knowledge base.",
  "I listed a drawback and a mitigation for every component, so the client could judge the trade-offs for themselves.",
  "I kept the pilot narrow, with one channel, a curated knowledge base and one success metric.",
  "I defined success before any building started, using a formula the client could check without me.",
];

const h2 = "text-2xl sm:text-3xl font-bold text-foreground mt-16 mb-6 tracking-tight";
const h3 = "text-xl font-bold text-foreground mt-10 mb-4";
const p = "text-lg text-muted-foreground leading-relaxed mb-5";
const th = "text-left font-semibold text-foreground p-3 border-b border-border align-top";
const td = "p-3 border-b border-border text-muted-foreground align-top";
const link = "text-primary underline underline-offset-4 hover:text-accent";

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto mb-6 rounded-2xl border border-border bg-secondary/40">
      <table className="w-full text-sm sm:text-base">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} scope="col" className={th}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r[0]}>
              {r.map((c, i) =>
                i === 0 ? (
                  <th key={i} scope="row" className={th}>
                    {c}
                  </th>
                ) : (
                  <td key={i} className={td}>
                    {c}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Architecture() {
  const box = "rounded-2xl border border-border bg-secondary/70 p-4 text-center";
  const arrow = <ArrowDown className="w-5 h-5 mx-auto my-2 text-accent" aria-hidden="true" />;
  return (
    <figure className="my-8">
      <div className="premium-card premium-card-blue p-6 sm:p-8">
        <div className="relative z-10 max-w-md mx-auto">
          <div className={box}>
            <p className="font-semibold text-foreground">Customer channels</p>
            <p className="text-sm text-muted-foreground">Messaging, website chat, email</p>
          </div>
          {arrow}
          <div className={box}>
            <p className="font-semibold text-foreground">Rasa</p>
            <p className="text-sm text-muted-foreground">Conversation flows and business rules</p>
          </div>
          {arrow}
          <div className={box}>
            <p className="font-semibold text-foreground">Claude with RAG</p>
            <p className="text-sm text-muted-foreground">Answers only from the approved knowledge base</p>
          </div>
          {arrow}
          <div className="grid grid-cols-2 gap-3">
            <div className={box}>
              <p className="font-semibold text-foreground">Answer</p>
              <p className="text-sm text-muted-foreground">When confident</p>
            </div>
            <div className={box}>
              <p className="font-semibold text-foreground">Human agent</p>
              <p className="text-sm text-muted-foreground">Anything uncertain</p>
            </div>
          </div>
          <div className="mt-4 rounded-2xl border border-dashed border-accent/60 p-3 text-center text-sm text-foreground">
            Audit layer: every conversation is logged and reviewed
          </div>
        </div>
      </div>
      <figcaption className="text-sm text-muted-foreground mt-3 text-center">
        Recommended architecture: four stages, human handover and an audit layer.
      </figcaption>
    </figure>
  );
}

export default function CaseStudyChatbotPage() {
  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <article className="relative pt-36 pb-24 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
            Case study · Independent consulting, early 2025
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4 tracking-tight">
            Scoping an In-House AI Support Chatbot
          </h1>
          <p className="text-xl text-foreground/80 italic mb-8">
            Replacing a vendor chatbot, starting with a four-week pilot
          </p>
          <p className={p}>
            The Head of Product at a venture-backed company approached me about its customer support chatbot, which
            an outside vendor ran for them. I worked out why it was falling short and designed a four-week pilot to
            test an in-house replacement before any larger investment.
          </p>

          <h2 className={h2}>At a glance</h2>
          <Table head={["Engagement", "Details"]} rows={atAGlance} />
          <p className="text-sm text-muted-foreground italic mb-5">
            Completed under a non-disclosure agreement as an independent consultant, before I began working under
            the Aevoxis name. Client details have been withheld.
          </p>

          <h2 className={h2}>The situation</h2>
          <p className={p}>
            The company had grown fast, and its customer support had to grow with it. A third-party chatbot handled
            first-line questions, integrated with the team's helpdesk.
          </p>
          <p className={p}>
            The bot did its job, but too many conversations still ended up with a human agent, and the team had a
            clear internal target for how many the bot should resolve on its own. They were also willing to spend
            more to get there.
          </p>
          <p className={p}>
            So I was asked two things: should the company build its own chatbot, and how could it test that without
            putting its whole support operation at risk?
          </p>

          <h2 className={h2}>Diagnosis: the team had no control over the bot</h2>
          <p className={p}>
            Most of the bot's problems came from one cause. The team could see what was going wrong but had no way
            to fix it themselves. I grouped the issues into three areas.
          </p>
          <Table head={["Area", "What the team experienced", "Why it mattered"]} rows={diagnosis} />
          <p className={p}>
            Tuning the existing setup would not have helped much, because the parts that needed tuning were out of
            the team's reach.
          </p>
          <p className={p}>
            Looked at as a governance problem, the gaps were serious. The company could not see or change how its AI
            answered customers, and most of those answers were never checked. Customers acted on what the bot told
            them, so this was a business risk as well as a service problem.
          </p>

          <h2 className={h2}>Recommendation: an in-house chatbot</h2>
          <p className={p}>
            I recommended replacing the vendor with an in-house platform built on Rasa, an open-source conversation
            framework, with Anthropic's Claude as the large language model. With its own setup, the team could
            change prompts, knowledge and integrations directly.
          </p>
          <p className={p}>The target solution had six parts:</p>
          <ol className="list-decimal pl-6 space-y-2 mb-6 text-lg text-muted-foreground">
            {solutionParts.map(([b, rest]) => (
              <li key={b}>
                <strong className="text-foreground">{b}</strong> {rest}
              </li>
            ))}
          </ol>
          <Architecture />
          <p className={p}>
            Business rules live in Rasa, Claude answers only from approved content, anything uncertain goes to a
            person, and every conversation is logged.
          </p>
          <p className={p}>
            For each part I listed the main drawback and how to reduce it, so the team could see the trade-offs up
            front.
          </p>

          <h3 className={h3}>Why Rasa, and not LangChain, LangGraph or LlamaIndex</h3>
          <p className={p}>
            I considered these frameworks, and they are strong choices for LLM applications, retrieval pipelines and
            agent workflows. This client's main problem, though, was a support bot that made things up and that the
            team could not control.
          </p>
          <Table head={["What the client needed", "Why Rasa fit", "Where the usual options fall short"]} rows={whyRasa} />
          <p className={p}>
            So I chose a platform built for customer conversations, with Claude handling the language understanding.
          </p>

          <h2 className={h2}>Designing the pilot</h2>
          <p className={p}>
            Moving everything at once would have been risky with an untested system, so I scoped a four-week pilot
            on a single channel. Its goal was to beat the current bot's resolution rate by a measurable margin before
            the company paid for the full build.
          </p>

          <h3 className={h3}>What stayed in and what came out</h3>
          <Table head={["Kept for the pilot", "Deferred to the full build"]} rows={pilotScope} />
          <p className={p}>
            I kept whatever directly affected the resolution rate and postponed whatever only mattered at a larger
            scale.
          </p>

          <h3 className={h3}>Starting with the right data</h3>
          <p className={p}>
            The pilot opened with a two-to-three-day audit of the existing knowledge base. If it was clean, it would
            be used whole. If not, I would apply the Pareto principle and select the smallest set of Q&amp;A pairs
            covering about 80% of incoming questions, prioritized by:
          </p>
          <ul className="list-disc pl-6 space-y-1 mb-5 text-lg text-muted-foreground">
            <li>How often a question is asked</li>
            <li>How often it currently leads to escalation</li>
            <li>How strongly it affects customer satisfaction</li>
          </ul>
          <p className={p}>
            The selected pairs would then be grouped by theme, such as account setup, billing and troubleshooting.
          </p>

          <h3 className={h3}>Four-week timeline</h3>
          <ol className="list-decimal pl-6 space-y-2 mb-6 text-lg text-muted-foreground">
            {timeline.map(([b, rest]) => (
              <li key={b}>
                <strong className="text-foreground">{b}</strong> {rest}
              </li>
            ))}
          </ol>

          <h3 className={h3}>Measuring success</h3>
          <p className={p}>
            Success came down to one number the team could check themselves, the share of conversations the bot
            resolves without a human.
          </p>
          <div className="rounded-2xl border border-border bg-secondary/60 p-5 mb-5 text-center text-foreground">
            Resolution rate = (queries resolved by the chatbot ÷ total queries received) × 100
          </div>
          <p className={p}>
            The current bot's rate served as the baseline. Early trends would appear in weeks 2 to 3, stable figures
            in weeks 3 to 4, and a clear go or no-go answer by the end of week 4.
          </p>

          <h2 className={h2}>Risks and how the plan handled them</h2>
          <Table head={["Risk", "Mitigation"]} rows={risks} />

          <h2 className={h2}>Outcome and takeaways</h2>
          <p className={p}>
            The company received a diagnosis, a costed target solution and a ready-to-run pilot plan with clear
            success criteria. This case study covers the analysis and planning rather than implementation results.
          </p>
          <p className={p}>A few principles guided the work:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-lg text-muted-foreground">
            {principles.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>

          <h2 className={h2}>Related work</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-lg text-muted-foreground">
            <li>
              <a
                href="https://www.coursera.org/learn/designing-a-customer-support-chatbot-using-flowise"
                target="_blank"
                rel="noopener noreferrer"
                className={link}
              >
                Designing a Customer Support Chatbot Using Flowise
              </a>
              , a Coursera guided project I created and teach, taken by more than 2,500 learners
            </li>
            <li>
              <a href={DEMO_REPO_URL} target="_blank" rel="noopener noreferrer" className={link}>
                Spec-Drift Chronometer
              </a>
              , my open-source governance tool for EU AI Act oversight, a Top 300 finalist in the AWS 10,000 AIdeas
              Competition 2025
            </li>
          </ul>

          <div className="premium-card premium-card-cyan p-8 mt-16">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Work with me</h2>
              <p className={p}>
                I help growing companies decide whether and how to use AI in their operations, and how to keep it
                accountable once it is running. I usually start with a diagnosis and a small pilot that shows early on
                whether the idea works. If your team is facing a similar decision, I'd be glad to talk.
              </p>
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
              <p className="text-sm text-muted-foreground mt-6">Vinita Silaparasetty, AI Governance Engineer</p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
