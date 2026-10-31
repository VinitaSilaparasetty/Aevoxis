// Shared copy used by pages and by their structured data (src/seo/meta.ts),
// so the FAQ markup always matches the visible text.

export const DEMO_URL = "https://spec-drift-chronometer.aevoxis.de";
export const DEMO_REPO_URL = "https://github.com/VinitaSilaparasetty/spec-drift_chronometer";
export const DEMO_ARTICLE_PATH = "/blog/eu-ai-act-articles-12-13-14-technical-implementation";
export const GITHUB_PROFILE_URL = "https://github.com/VinitaSilaparasetty";

// Tally form ID for the early-access list. Leave empty until the form exists;
// the early-access page then falls back to email.
export const WAITLIST_TALLY_FORM_ID = "";

// Published research behind the Article 50 work. Linked, not claimed as endorsement.
// Abstract IDs confirmed by Vinita, 2026-10-29.
export const article50Papers = [
  {
    title: "Article 50 compliance for generative AI systems: six open implementation questions",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6933339",
  },
  {
    title: "Article 50 compliance for agentic AI: nine unresolved engineering questions",
    href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6874778",
  },
];

// Install proof for developers. Deliberately no download counts: PyPI totals
// include mirrors and automated downloads, so they overstate real users.
export const openSourcePackages = [
  { name: "pr-automation-agent", install: "pip install pr-automation-agent", pypi: "https://pypi.org/project/pr-automation-agent/" },
  { name: "agentic-web3-rag", install: "pip install agentic-web3-rag", pypi: "https://pypi.org/project/agentic-web3-rag/" },
];

// 60–90 second founder video for the About page. Leave the ID empty and the
// section doesn't render at all, so the page is never published with a gap.
//
// This is for a video made for Aevoxis: the Article 50 problem, what the
// Justification Gate does, who it's for. The existing speaker reel belongs on
// the personal site instead — it sells speaking engagements, which is a
// different offer from compliance engineering.
export const founderVideo = {
  youtubeId: "",
  title: "Why I built Aevoxis",
  caption: "90 seconds on what Article 50 asks for and why it belongs in the code.",
};

// The design-partner offer. PLACES is the number still open — change the number
// here and it updates the page, the meta description and llms.txt together.
// When it reaches 0, the page shows a closed state instead of the call to action.
export const designPartner = {
  places: 5,
  weeks: 4,
  steps: [
    {
      week: "Week 1",
      title: "Find every place Article 50 bites",
      text: "I go through your product and list where it talks to people, where it generates content, and where either is published. You get that list whether or not we continue.",
    },
    {
      week: "Week 2",
      title: "Build the interaction disclosure",
      text: "Art. 50(1): people are told they're talking to AI, in the product rather than in a policy page, with a record that the disclosure was shown.",
    },
    {
      week: "Week 3",
      title: "Mark the generated content",
      text: "Art. 50(2): machine-readable marking applied to synthetic text, images, audio or video at generation time, not bolted on afterwards.",
    },
    {
      week: "Week 4",
      title: "Hand over",
      text: "The code is yours, in your repository, with a written note of what it covers and what it deliberately doesn't. No lock-in and no retainer.",
    },
  ],
  youGet: [
    "Four weeks of my time, free",
    "Article 50(1) and 50(2) working in your product, in your own codebase",
    "A written gap note you can hand to your legal advisers",
  ],
  iGet: [
    "Honest feedback on what's clumsy, so the product gets built against a real system",
    "Permission to describe the work as a case study, anonymised if you prefer",
  ],
};

// Dated build log. Every entry is something a reader can open and check, so
// nothing goes in here without a public artefact behind it.
//
// `date` is ISO. Use `precision: "month"` or `"year"` when the exact day isn't
// the point; the page formats accordingly and sorts on the ISO value either way.
//
// TODO(Vinita): four entries are missing because I couldn't verify the dates.
// Send me these and I'll add them: the SSRN posting date of each Article 50
// preprint, the date the AWS 10,000 AIdeas Top 300 result was announced, and
// the date the IEEE Software paper was submitted.
export type ShippedKind = "release" | "writing" | "research" | "recognition" | "product";

export interface ShippedEntry {
  date: string;
  precision?: "day" | "month" | "year";
  kind: ShippedKind;
  title: string;
  detail: string;
  href?: string;
}

export const shippedLog: ShippedEntry[] = [
  {
    date: "2026-07-07",
    kind: "release",
    title: "governed-agentic-kg-rag",
    detail:
      "Knowledge-graph-augmented multi-agent RAG for industrial fault diagnosis, with a query dispatcher, Neo4j property graph and a human oversight step. Open source.",
    href: "https://github.com/VinitaSilaparasetty/governed-agentic-kg-rag",
  },
  {
    date: "2026-07-02",
    kind: "release",
    title: "agentic-web3-rag v0.1.0 on PyPI",
    detail:
      "Consent-gated semantic search over Web3 documentation: nothing is indexed without the maintainer's explicit opt-in, and every answer carries an Article 50 AI-generated marker. Alpha.",
    href: "https://pypi.org/project/agentic-web3-rag/",
  },
  {
    date: "2026-07-01",
    kind: "release",
    title: "pr-automation-agent v0.1.2 on PyPI",
    detail:
      "Autonomous pull-request generation with governance instrumentation: every automated change is logged with the input that triggered it. Beta.",
    href: "https://pypi.org/project/pr-automation-agent/",
  },
  {
    date: "2026-06-30",
    kind: "release",
    title: "pr-automation-agent, first release",
    detail: "First public version, built out of the Protocol Labs Dev Guild cohort.",
    href: "https://github.com/VinitaSilaparasetty/pr-automation-agent",
  },
  {
    date: "2026-06-17",
    kind: "writing",
    title: "Wiring Article 14 into a production LangChain RAG chatbot",
    detail: "A working implementation guide, with the oversight step in the execution path rather than beside it.",
    href: "/blog/eu-ai-act-langchain-rag-integration",
  },
  {
    date: "2026-06-16",
    kind: "writing",
    title: "EU AI Act Articles 12, 13 and 14: a technical implementation guide",
    detail: "Logging, transparency and human oversight as architecture, demonstrated on the Spec-Drift Chronometer.",
    href: "/blog/eu-ai-act-articles-12-13-14-technical-implementation",
  },
  {
    date: "2026-02-17",
    kind: "product",
    title: "Spec-Drift Chronometer, first commit",
    detail:
      "Drift measurement against a human-approved specification, the Justification Gate, and a hash-verified audit trail. Built for the AWS 10,000 AIdeas Competition on Lambda in eu-central-1 with Bedrock; the public demo now runs on Render.",
    href: DEMO_REPO_URL,
  },
  {
    date: "2026-02-07",
    kind: "product",
    title: "multi-agent-audit-poc",
    detail:
      "The first proof that Article 14 oversight can be an interrupt in a LangGraph execution path, not a review meeting afterwards.",
    href: "https://github.com/VinitaSilaparasetty/multi-agent-audit-poc",
  },
];

export const proofPoints = [
  { value: "Top 300", label: "of 10,000+ entries, AWS 10,000 AIdeas Competition 2025", href: DEMO_ARTICLE_PATH },
  { value: "Google Developer Expert", label: "Machine Learning", href: "https://g.dev/vinitasilaparasetty" },
  { value: "AWS Community Builder", label: "Machine Learning" },
  { value: "Apress author", label: "Deep Learning Projects Using TensorFlow 2 (2020)", href: "https://link.springer.com/book/10.1007/978-1-4842-5802-6" },
  { value: "Open source", label: "Prototype code on GitHub", href: DEMO_REPO_URL },
];

export const homeFaq = [
  {
    question: "Does Article 50 apply to companies outside the EU?",
    answer:
      "Generally yes. The Act follows the market rather than the company's address, so Article 50 can apply when an AI system is placed on the EU market or when its output is used in the EU, even if the provider is based elsewhere. Whether it applies to your specific setup is a question for your legal advisers.",
  },
  {
    question: "What does Article 50 of the EU AI Act require?",
    answer:
      "Article 50 sets transparency duties for AI that interacts with people or generates content. People must be told when they are interacting with an AI system, synthetic text, images, audio and video must carry a machine-readable marking, and deployers must disclose AI-generated or manipulated content that appears authentic. These rules have applied since 2 August 2026.",
  },
  {
    question: "What do Articles 12, 13 and 14 of the EU AI Act require?",
    answer:
      "Article 12 requires high-risk AI systems to log events automatically so their behaviour can be audited later. Article 13 requires enough transparency for deployers to understand and correctly use the system's outputs. Article 14 requires that people can effectively oversee the system while it runs, including deciding not to use it, intervening and overriding its outputs. These rules apply from 2 December 2027.",
  },
  {
    question: "Why build this into the system instead of writing a policy?",
    answer:
      "Logs that were never captured can't be produced later, and an override button nobody is forced to use is not oversight. Article 14 expects oversight measures to be built into the system by the provider where technically feasible. Aevoxis puts logging, explanations and a human decision point in the execution path itself.",
  },
  {
    question: "Is Aevoxis a law firm?",
    answer:
      "No. Aevoxis does the engineering. Your legal advisers decide whether and how the Act applies to your system; Aevoxis builds the logging, transparency and oversight mechanisms that let you prove compliance.",
  },
];

export const engagementFaq = [
  {
    question: "What does an engagement start with?",
    answer:
      "A gap analysis. I go through your system's architecture and map what it does today against Articles 12, 13 and 14. You get a written list of gaps, ranked by risk and effort.",
  },
  {
    question: "Do you work on existing systems or only new ones?",
    answer:
      "Both. Most teams already have a system in production. Logging and oversight can be added to it, but some decisions are cheaper to change early, so the gap analysis also says what to fix first.",
  },
  {
    question: "Which tech stacks do you work with?",
    answer:
      "Python-based AI systems, including LangChain, LangGraph and CrewAI pipelines, on AWS (Lambda, Bedrock) or self-hosted open-source models. Other stacks are possible; ask.",
  },
  {
    question: "How are engagements invoiced?",
    answer:
      "Through SMartDE eG, a cooperative for self-employed professionals in Germany. Its details are in the Impressum.",
  },
];
