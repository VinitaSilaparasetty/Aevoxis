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
