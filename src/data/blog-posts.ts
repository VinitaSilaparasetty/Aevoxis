export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'code'; language: string; code: string }
  | { type: 'preformatted'; content: string }
  | { type: 'unordered-list'; items: string[] }
  | { type: 'faq'; items: Array<{ question: string; answer: string }> }
  | { type: 'cta'; heading: string; body: string; linkText: string; linkHref: string }
  | { type: 'author-bio'; text: string; disclosure: string };

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle?: string;
  metaDescription: string;
  canonicalPath: string;
  canonicalUrl?: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  datePublishedISO?: string;
  dateModifiedISO?: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
  keywords?: string[];
  liveDemo?: { label: string; href: string };
  sourceCode?: { label: string; href: string };
  howTo?: { name: string; steps: Array<{ name: string; text: string }> };
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: `eu-ai-act-articles-12-13-14-technical-implementation`,
    title: `EU AI Act Articles 12, 13 and 14: A Technical Implementation Guide`,
    metaDescription: `A working implementation of EU AI Act human oversight and logging requirements using real-time drift detection, a Justification Gate, and a cryptographically verifiable audit trail. Live demo included.`,
    canonicalPath: `/blog/eu-ai-act-articles-12-13-14-technical-implementation`,
    datePublishedISO: `2026-06-16`,
    author: `Vinita Silaparasetty`,
    authorRole: `AI Governance Engineer, Aevoxis Solutions`,
    publishedDate: `June 2026`,
    readingTime: `10 minutes`,
    excerpt: `Most discussions of EU AI Act compliance treat Articles 12, 13, and 14 as documentation requirements. This article argues for a different approach: EU AI Act compliance as architecture — governance logic built into the execution path of the system itself.`,
    tags: [`EU AI Act`, `AI Governance`, `Compliance Engineering`, `AWS`],
    liveDemo: { label: `spec-drift-chronometer.aevoxis.de`, href: `https://spec-drift-chronometer.aevoxis.de` },
    sourceCode: { label: `GitHub`, href: `https://github.com/VinitaSilaparasetty/spec-drift_chronometer` },
    content: [
      {
        type: `paragraph`,
        text: `Most discussions of EU AI Act compliance treat Articles 12, 13, and 14 as documentation requirements. Write a risk management policy. Keep logs. Have a human somewhere in the process. Tick the boxes.`,
      },
      {
        type: `paragraph`,
        text: `This article argues for a different approach: EU AI Act compliance as architecture. Not a policy layer sitting on top of a generative AI system, but governance logic built into the execution path of the system itself. The Spec-Drift Chronometer is a working, open-source demonstration of what that looks like in practice, built for the August 2, 2026 applicability deadline.`,
      },
      {
        type: `h2`,
        text: `What Is Spec-Drift and Why Does It Matter for EU AI Act Compliance?`,
      },
      {
        type: `paragraph`,
        text: `When an autonomous AI system generates outputs over time, something predictable happens. The outputs begin to deviate from the original human-approved specification. This is not a failure mode — it is the natural behaviour of any system operating at the boundary between human intent and probabilistic inference.`,
      },
      {
        type: `paragraph`,
        text: `I call this Spec-Drift: the measurable delta between what a human architect specified and what an autonomous system actually produces.`,
      },
      {
        type: `paragraph`,
        text: `In a traditional software system, this kind of deviation is caught by code review, testing, and deployment pipelines. In an autonomous AI system operating in real time, none of those mechanisms exist. The system makes decisions, takes actions, and modifies state without a human seeing each individual output. By the time drift is noticed, it has often compounded into something much harder to remediate.`,
      },
      {
        type: `paragraph`,
        text: `From a regulatory perspective, this is precisely the scenario EU AI Act Article 14 was written to address. The Article requires that AI systems allow human oversight to intervene, prevent, correct, and override outputs. But the technical question the regulation does not answer is: how do you intervene in a system that operates faster than human review cycles?`,
      },
      {
        type: `paragraph`,
        text: `The Spec-Drift Chronometer is my answer to that question.`,
      },
      {
        type: `h2`,
        text: `What Do EU AI Act Articles 12, 13, and 14 Actually Require Technically?`,
      },
      {
        type: `paragraph`,
        text: `Most commentary on these articles stays at the policy level. Here is what they require at the technical implementation level.`,
      },
      {
        type: `h3`,
        text: `What does EU AI Act Article 12 require?`,
      },
      {
        type: `paragraph`,
        text: `Article 12 requires that high-risk AI systems automatically log events throughout their operation to a degree that enables post-hoc auditing of system behaviour. The logs must capture the data that triggered the system's decision, the decision itself, and enough context for a human reviewer to reconstruct what happened and why.`,
      },
      {
        type: `paragraph`,
        text: `The technical implication is that logging cannot be an afterthought. If logging is added after a system is built, the data needed to reconstruct a decision often does not exist because it was never retained. Article 12 compliance requires logging to be designed into the system architecture from the beginning.`,
      },
      {
        type: `h3`,
        text: `What does EU AI Act Article 13 require?`,
      },
      {
        type: `paragraph`,
        text: `Article 13 requires that AI systems provide sufficient transparency to allow deployers and users to interpret outputs and use the system appropriately. This means the system must provide not just an output but enough context about how that output was produced for a non-technical stakeholder to evaluate it.`,
      },
      {
        type: `paragraph`,
        text: `The technical implication is that transparency must be surfaced through the interface, not just documented in technical files. A reasoning trace that lives in a log file nobody reads is not transparency in the Article 13 sense.`,
      },
      {
        type: `h3`,
        text: `What does EU AI Act Article 14 require?`,
      },
      {
        type: `paragraph`,
        text: `Article 14 requires that high-risk AI systems be designed to allow natural persons to effectively oversee the system during operation. Specifically, the system must allow humans to decide not to use the system in a particular situation, to intervene in its operation, and to override its outputs.`,
      },
      {
        type: `paragraph`,
        text: `The technical implication is that human oversight cannot be a passive capability. Building an override button that exists but is never triggered does not satisfy Article 14 in spirit. The oversight mechanism must be active — it must be in the critical path of the system's operation, not a bypass lane beside it.`,
      },
      {
        type: `h2`,
        text: `How Does the Spec-Drift Chronometer Implement These Requirements?`,
      },
      {
        type: `paragraph`,
        text: `The system implements all three articles through a single architectural pattern: the Governance Loop.`,
      },
      {
        type: `preformatted`,
        content: `Human Architect
      |
      v
Sovereign Spec Vault (.kiro/steering/)
      |
      v
Warden Engine (FastAPI, AWS Lambda eu-central-1)
      |
      v
Drift Detection (every 3 seconds)
      |
   [below threshold]          [above threshold]
      |                               |
      v                               v
Audit Log                    Justification Gate
(Article 12)                 (Article 14)
                                      |
                             Human provides justification
                                      |
                             Warden evaluates against spec
                                      |
                      [approved]                [rejected]
                           |                        |
                    Spec updated             Event logged
                    Audit trail              Audit trail
                    (Article 12)             (Article 12)
                    Reasoning trace          Reasoning trace
                    (Article 13)             (Article 13)`,
      },
      {
        type: `paragraph`,
        text: `Every component in this loop maps to a specific regulatory obligation. This is not coincidence — the architecture was designed around the obligations, not the other way around.`,
      },
      {
        type: `h2`,
        text: `How Is the Human-Approved Specification Stored and Protected?`,
      },
      {
        type: `paragraph`,
        text: `The foundation of the system is the Sovereign Spec Vault: a set of human-authored specification files stored in .kiro/steering/. These files define the approved boundaries within which the autonomous system is permitted to operate.`,
      },
      {
        type: `preformatted`,
        content: `.kiro/steering/
├── governance.md          # Warden persona and protocol
├── tech.md                # Technology constraints
├── product.md             # Vision and strategic boundaries
├── human-intent-specs.md  # Explicit architect declarations
└── spec.json              # Machine-readable thresholds`,
      },
      {
        type: `paragraph`,
        text: `The spec.json file is the machine-readable source of truth:`,
      },
      {
        type: `code`,
        language: `json`,
        code: `{
  "control_parameters": {
    "semantic_drift_threshold": 0.0075,
    "max_latency_ms": 200,
    "primary_model": "amazon.nova-pro-v1:0",
    "audit_trail_active": true
  },
  "sovereign_region": "eu-central-1"
}`,
      },
      {
        type: `paragraph`,
        text: `The drift threshold of 0.0075 is the critical value. When measured deviation between the system's current output and the approved specification exceeds this value, the Justification Gate activates.`,
      },
      {
        type: `paragraph`,
        text: `The vault is human-authored and version-controlled. It cannot be modified by the autonomous system. This technical constraint — the specification is read-only for the AI system but editable by the human architect — is the structural foundation of Article 14 compliance.`,
      },
      {
        type: `h2`,
        text: `How Does Real-Time Drift Detection Satisfy Article 13?`,
      },
      {
        type: `paragraph`,
        text: `The Warden Engine polls a drift measurement endpoint every 3 seconds. The FastAPI backend exposes the drift state:`,
      },
      {
        type: `code`,
        language: `python`,
        code: `@app.get("/drift")
async def get_drift_state():
    drift_value = calculate_drift()
    threshold = load_spec()["control_parameters"]["semantic_drift_threshold"]

    return {
        "drift_index": drift_value,
        "sovereign_threshold": threshold,
        "excess_delta": drift_value - threshold,
        "spec_compliance": "BREACH" if drift_value > threshold else "100%",
        "system_health": "CRITICAL_DRIFT" if drift_value > threshold else "SOVEREIGN",
        "warden_status": "GATE_ACTIVE" if drift_value > threshold else "Observing"
    }`,
      },
      {
        type: `paragraph`,
        text: `This response powers the real-time dashboard display. A non-technical stakeholder can see the current drift index as a number, whether it is within the approved threshold, the system health status in plain language, and the warden's current operational state — without needing to understand how drift is calculated. The interface is designed to make governance decisions possible without technical knowledge. This is Article 13 transparency surfaced through the interface, not buried in a log file.`,
      },
      {
        type: `h2`,
        text: `How Does the Justification Gate Enforce Article 14 Human Oversight?`,
      },
      {
        type: `paragraph`,
        text: `When drift exceeds the sovereign threshold, the system does not automatically take corrective action. It stops and requires a human decision. This is the Justification Gate.`,
      },
      {
        type: `paragraph`,
        text: `The gate presents the human with the specific drift value and how far it exceeds the threshold, the exact specification clause that was violated, the AI model that produced the non-compliant output, and a text field requiring a written justification before the system proceeds.`,
      },
      {
        type: `paragraph`,
        text: `The Warden Agent then evaluates the justification against three criteria:`,
      },
      {
        type: `unordered-list`,
        items: [
          `Semantic relevance: Does the justification address the type of drift detected? A justification about database schema changes does not satisfy a drift in content generation behaviour.`,
          `Specification cross-reference: Is the justification consistent with the specific specification clause that was violated?`,
          `Article 14 guardrails: Does the justification demonstrate that a human genuinely understood the deviation and made a conscious governance decision?`,
        ],
      },
      {
        type: `paragraph`,
        text: `A weak justification — "it is fine" or "I approved this" — scores below the acceptance threshold and is rejected. The rejection itself is logged with the full reasoning trace, creating an Article 12-compliant record of the failed oversight attempt.`,
      },
      {
        type: `paragraph`,
        text: `A strong justification — one that references the specific technical reason for the deviation and connects it to a legitimate architectural decision — is approved, and the specification is updated to reflect the new approved boundary.`,
      },
      {
        type: `h2`,
        text: `What Does an Article 12-Compliant Audit Trail Look Like?`,
      },
      {
        type: `paragraph`,
        text: `Every event in the Governance Loop is logged to a downloadable audit trail with a SHA-256 verification hash:`,
      },
      {
        type: `preformatted`,
        content: `╔══════════════════════════════════════════════════════════════╗
║      SPEC-DRIFT CHRONOMETER — SOVEREIGN AUDIT TRAIL         ║
╚══════════════════════════════════════════════════════════════╝

Timestamp:          2026-06-14 15:24:15 UTC
Drift Index:        0.0082
Threshold:          0.0075
Gate Status:        RESOLVED
Spec Hash:          bf40efdc39297d64
Run Hash:           cdfa7ff9a941820f

── GOVERNANCE COMPLIANCE ──────────────────────────────────────
EU AI Act Article 14 (Human Oversight):   VERIFIED
EU AI Act Article 12 (Transparency):      VERIFIED
Sovereign Region:                          eu-central-1 (Frankfurt)
System Integrity:                          100%

── ACTIVE SPECIFICATIONS (.kiro/steering/spec.json) ───────────
Semantic Drift Threshold:  0.15
Max Latency (ms):          200
Primary Model:             amazon.nova-pro-v1:0
Audit Trail Active:        true

── JUSTIFICATION GATE RECORD ──────────────────────────────────
Decision:         APPROVED
Justification:    Migrating auth layer to OAuth2 to satisfy GDPR
                  Article 7 compliance requirements signed off
                  by legal team on 2026-06-10.

══════════════════════════════════════════════════════════════`,
      },
      {
        type: `paragraph`,
        text: `The SHA-256 hash of the specification at the time of the audit means any post-hoc modification of the specification is detectable. A governance system whose records can be retroactively altered provides no real compliance assurance. This goes beyond what Article 12 strictly requires but addresses a practical concern that any serious compliance buyer should raise.`,
      },
      {
        type: `paragraph`,
        text: `The audit trail includes the model version used for evaluation, the human justification verbatim, and the Warden's decision with full reasoning. Production deployments replace the simulated Warden evaluation with live Amazon Bedrock Nova Pro reasoning in eu-central-1.`,
      },
      {
        type: `h2`,
        text: `What Are the Current Limitations of This Implementation?`,
      },
      {
        type: `paragraph`,
        text: `Honest documentation of a governance system must include its limitations.`,
      },
      {
        type: `h3`,
        text: `Drift measurement is simulated in the demo`,
      },
      {
        type: `paragraph`,
        text: `The live demo uses pre-scripted drift scenarios rather than measuring actual semantic deviation from a real AI system's outputs. The governance logic, the Justification Gate, the audit trail, and the spec vault are fully functional. A production deployment connects the drift measurement endpoint to the output stream of the AI system being governed.`,
      },
      {
        type: `h3`,
        text: `The specification vault requires manual maintenance`,
      },
      {
        type: `paragraph`,
        text: `The initial specification — the human-approved boundaries that define what counts as drift — must be authored manually by a human architect. This is a feature in the Article 14 sense: the human is the source of the specification. But it means the system cannot govern itself into existence.`,
      },
      {
        type: `h3`,
        text: `Rejection does not force-halt external systems in all scenarios`,
      },
      {
        type: `paragraph`,
        text: `When the Justification Gate rejects a justification, it logs the rejection and returns control to the dashboard. Integrating with a live autonomous system to enforce a hard stop on rejection is an architectural decision that depends on the specific system being governed and is marked as Phase 2 in the roadmap.`,
      },
      {
        type: `h2`,
        text: `How to Run the Demo`,
      },
      {
        type: `code`,
        language: `bash`,
        code: `git clone https://github.com/VinitaSilaparasetty/spec-drift_chronometer.git
cd spec-drift_chronometer
DEMO_MODE=true ./dev.sh`,
      },
      {
        type: `paragraph`,
        text: `Open http://localhost:3000. No AWS credentials required in demo mode.`,
      },
      {
        type: `paragraph`,
        text: `The live demo is available at spec-drift-chronometer.aevoxis.de. For production deployment connecting to Amazon Bedrock and AWS Lambda eu-central-1, see the README in the repository.`,
      },
      {
        type: `faq`,
        items: [
          {
            question: `Does the Spec-Drift Chronometer make an AI system fully EU AI Act compliant?`,
            answer: `No. It demonstrates a technical approach to satisfying the human oversight and logging requirements of Articles 12, 13, and 14 for autonomous AI systems. Full EU AI Act compliance for a high-risk system involves additional requirements including risk management documentation, data governance, technical documentation, and conformity assessment depending on the system category.`,
          },
          {
            question: `Which types of AI systems does this governance pattern apply to?`,
            answer: `The Governance Loop pattern is applicable to any autonomous AI system that generates outputs continuously without human review of each individual output. This includes AI coding assistants, autonomous content generation systems, AI-driven process automation, and agentic AI workflows. The specific implementation will vary by system but the architectural pattern — a human-authored specification vault, real-time drift measurement, mandatory human checkpoint, and verifiable audit trail — is transferable across implementation languages and cloud providers.`,
          },
          {
            question: `Is the Justification Gate a hard block or can it be bypassed?`,
            answer: `In the current implementation the Justification Gate is a soft block — it requires a human justification before the system records the governance decision, but it does not force-halt an external autonomous system. A hard block implementation that prevents a system from continuing until a valid justification is received is marked as Phase 2 and would be necessary for production deployment in a high-risk AI system context.`,
          },
          {
            question: `What is the difference between Article 14 human oversight and simply having a human approve outputs?`,
            answer: `Article 14 requires that the human oversight mechanism be effective, not merely present. A human who nominally approves outputs without meaningful information about what they are approving does not constitute effective oversight. The Justification Gate addresses this by requiring a documented rationale that the Warden evaluates for semantic relevance to the specific drift detected. A rubber-stamp approval is rejected.`,
          },
          {
            question: `Does the system store personal data?`,
            answer: `In demo mode the system stores no personal data. The audit trail captures justification text entered by the user, which may contain personal data in a production deployment. Production deployments should include a GDPR-compliant data retention policy for audit trail records and a data subject erasure endpoint, which is included in the production architecture.`,
          },
          {
            question: `Can this be adapted for non-AWS infrastructure?`,
            answer: `Yes. The Warden Engine is a FastAPI application that can run on any Python-capable infrastructure. The Bedrock integration for production Warden evaluation can be replaced with any LLM provider API. The spec vault uses plain Markdown and JSON files that are infrastructure-agnostic. The audit trail is a generated text file with no cloud dependency.`,
          },
        ],
      },
      {
        type: `cta`,
        heading: `Is Your Generative AI System Ready for August 2, 2026?`,
        body: `EU AI Act Article 14 becomes fully applicable on August 2, 2026 for high-risk AI systems. Enterprises deploying autonomous AI systems that fall within Annex III high-risk categories — including systems used in employment, education, credit, biometric identification, or critical infrastructure — need to demonstrate human oversight capability before that date. If you are assessing your organisation's autonomous AI systems for Article 14 compliance and want a technical second opinion on your architecture, the EU AI Act Technical Readiness Assessment at aevoxis.de takes approximately five minutes and results in a personalised response within 24 hours.`,
        linkText: `Start the Assessment`,
        linkHref: `/contact`,
      },
      {
        type: `author-bio`,
        text: `Vinita Silaparasetty is an AI Governance Engineer and founder of Aevoxis Solutions, operating under SMartDE eG, Germany. Published author (Apress), Google Developer Expert (ML), M.Sc. Data Science Newcastle University (Russell Group). The Spec-Drift Chronometer was developed as an entry for the AWS 10,000 AIdeas Competition 2025, Top 300 Finalist from over 10,000 global submissions.`,
        disclosure: `Parts of this article were written with AI writing assistance (Claude, Anthropic). All technical concepts, system architecture, implementation decisions, and intellectual content are original work by the author. The Spec-Drift Chronometer was designed, built, and documented by Vinita Silaparasetty.`,
      },
    ],
  },
  {
    slug: `eu-ai-act-langchain-rag-integration`,
    title: `How to Wire EU AI Act Article 14 Compliance Into a Production LangChain RAG Chatbot`,
    metaTitle: `EU AI Act Article 14 Compliance for LangChain RAG Chatbots: A Working Integration Guide`,
    metaDescription: `Step-by-step guide to wiring EU AI Act Article 14 human oversight into a production LangChain RAG chatbot using the Spec-Drift Chronometer open-source governance framework. Includes working code and a live demo.`,
    canonicalPath: `/insights/eu-ai-act-langchain-rag-integration`,
    datePublishedISO: `2026-06-17`,
    canonicalUrl: `https://aevoxis.de/insights/eu-ai-act-langchain-rag-integration`,
    author: `Vinita Silaparasetty`,
    authorRole: `AI Governance Engineer, Aevoxis Solutions`,
    publishedDate: `June 2026`,
    readingTime: `12 minutes`,
    excerpt: `Enterprise teams building AI systems in 2026 have two parallel conversations happening in the same company and almost never in the same room. This article closes the gap between compliance documents and production code with a working LangChain RAG integration that enforces EU AI Act Article 14 human oversight at execution time.`,
    tags: [`EU AI Act`, `LangChain`, `RAG`, `AI Governance`],
    keywords: [
      `EU AI Act compliance LangChain`,
      `LangChain human oversight`,
      `RAG chatbot governance`,
      `Article 14 AI compliance`,
      `AI governance integration`,
      `LangChain callback EU AI Act`,
      `enterprise AI governance Python`,
    ],
    liveDemo: { label: `spec-drift-chronometer.aevoxis.de`, href: `https://spec-drift-chronometer.aevoxis.de` },
    sourceCode: { label: `GitHub`, href: `https://github.com/VinitaSilaparasetty/spec-drift_chronometer` },
    howTo: {
      name: `How to Wire EU AI Act Article 14 Compliance Into a Production LangChain RAG Chatbot`,
      steps: [
        {
          name: `Install dependencies`,
          text: `Install langchain-core, langchain-community, faiss-cpu, and requests in the integrations/langchain_rag directory using pip install -r requirements.txt. No new AI frameworks are required.`,
        },
        {
          name: `Configure the Warden client`,
          text: `Create a WardenClient instance pointing to your Warden Engine API URL. The client polls the /drift endpoint and returns a typed DriftStatus object containing the current drift index and gate status.`,
        },
        {
          name: `Add the LangChain EU AI Act callback handler`,
          text: `Implement WardenCallbackHandler extending BaseCallbackHandler. Override on_chain_start to call get_drift() and raise WardenGateBlockedException when the gate status is TRIGGERED or PENDING.`,
        },
        {
          name: `Wire the handler into your LangChain chain`,
          text: `Pass the handler to any LCEL chain, LangGraph graph, or LangChain agent using with_config(callbacks=[handler]). The chain itself is unchanged — the Warden observes it from outside.`,
        },
      ],
    },
    content: [
      {
        type: `paragraph`,
        text: `For context on how the Spec-Drift Chronometer implements EU AI Act Articles 12, 13, and 14 architecturally, see the full technical deep dive at aevoxis.de/insights/eu-ai-act-articles-12-13-14-technical-implementation. This article focuses specifically on the production integration with LangChain RAG systems.`,
      },
      {
        type: `h2`,
        text: `Why Compliance Documents and Production Code Do Not Connect`,
      },
      {
        type: `paragraph`,
        text: `Enterprise teams building AI systems in 2026 have two parallel conversations happening in the same company and almost never in the same room.`,
      },
      {
        type: `paragraph`,
        text: `The compliance team is mapping obligations from EU AI Act Articles 12, 13, 14, and 50. They are producing gap analyses, risk registers, and conformity frameworks. They know exactly what human oversight must look like on paper.`,
      },
      {
        type: `paragraph`,
        text: `The engineering team is running a LangChain RAG chatbot in production. It handles customer queries, internal knowledge retrieval, or document summarisation at scale. It is the AI system the regulation actually applies to.`,
      },
      {
        type: `paragraph`,
        text: `The gap is that nobody has documented how to connect the governance framework to the running system. The compliance artefacts describe what must happen. The chatbot is what is happening. Between those two things is usually a process document, a ticketing workflow, and a lot of trust.`,
      },
      {
        type: `paragraph`,
        text: `This article closes that gap with a working integration.`,
      },
      {
        type: `h2`,
        text: `What EU AI Act Article 14 Actually Requires`,
      },
      {
        type: `paragraph`,
        text: `Article 14 of the EU AI Act mandates human oversight over high-risk AI systems. Specifically, it requires that humans be able to:`,
      },
      {
        type: `unordered-list`,
        items: [
          `Monitor the AI system's operation in real time`,
          `Understand the system's outputs and their significance`,
          `Override, interrupt, or halt the system when necessary`,
          `Detect and address failures, including unexpected behaviour`,
        ],
      },
      {
        type: `paragraph`,
        text: `The key phrase is "implemented into the AI system by the provider." This is not a governance document requirement. It is an engineering requirement. The oversight mechanism must be built into how the system executes, not bolted on afterwards via process.`,
      },
      {
        type: `paragraph`,
        text: `For a LangChain RAG chatbot, this means the human oversight gate must live inside the chain execution path, not in a spreadsheet that someone reviews monthly.`,
      },
      {
        type: `h2`,
        text: `The Architecture: Warden as Governance Sidecar`,
      },
      {
        type: `paragraph`,
        text: `The Spec-Drift Chronometer implements this as a governance sidecar. The chatbot does not check its own compliance — instead it consults an independent Warden Engine on every execution.`,
      },
      {
        type: `paragraph`,
        text: `Here is how the data flows:`,
      },
      {
        type: `preformatted`,
        content: `User query
    │
    ▼
LangChain RAG chain
    │
    ├── WardenCallbackHandler fires before execution
    │         │
    │         ▼
    │     GET /drift → Warden Engine returns drift index + gate status
    │         │
    │         ├── gate = CLEAR    → execution proceeds
    │         └── gate = TRIGGERED → execution blocked (Article 14)
    │                               operator must open dashboard, submit
    │                               justification, receive Warden approval
    ▼
Retrieval → Generation → Response`,
      },
      {
        type: `paragraph`,
        text: `The Warden Engine monitors the divergence between the production codebase and the human-authored specification files stored in .kiro/steering/. When a developer changes the chatbot's system prompt, swaps out the embedding model, or modifies retrieval parameters without governance sign-off, the drift index rises. When it crosses the sovereign threshold, the gate triggers and every subsequent chain execution is blocked until a human completes the justification workflow.`,
      },
      {
        type: `paragraph`,
        text: `This is Article 14 implemented in code, not documented in a process.`,
      },
      {
        type: `h2`,
        text: `What Causes Drift in a RAG Chatbot?`,
      },
      {
        type: `paragraph`,
        text: `Before showing the integration, it helps to understand what the Warden is actually measuring.`,
      },
      {
        type: `paragraph`,
        text: `The drift score is the fraction of meaningful tokens in the latest code change that are absent from the vocabulary of the human-authored spec files. A change that introduces new architectural concepts not covered by the approved spec scores higher. A refactor that uses only terms already present in the spec scores lower.`,
      },
      {
        type: `h3`,
        text: `High-drift changes (typically require human sign-off)`,
      },
      {
        type: `unordered-list`,
        items: [
          `Changing the system prompt to give the AI a different persona or scope`,
          `Switching to a more capable or different family of model`,
          `Modifying the retrieval strategy (chunk size, overlap, top-k, similarity threshold)`,
          `Adding tool use or agent capabilities not in the original specification`,
          `Changing the data sources indexed in the vector store`,
        ],
      },
      {
        type: `h3`,
        text: `Low-drift changes (typically within sovereign bounds)`,
      },
      {
        type: `unordered-list`,
        items: [
          `Dependency version bumps that do not change API surface`,
          `Logging and observability additions`,
          `Fixing a spelling error in a document`,
          `Performance optimisations using the same approved approach`,
        ],
      },
      {
        type: `paragraph`,
        text: `The Warden does not require you to enumerate these categories manually. It reads your spec files, reads the git diff, and computes the divergence. The human-authored specs in .kiro/steering/ are the source of truth.`,
      },
      {
        type: `h2`,
        text: `The LangChain RAG Integration: Three Python Files`,
      },
      {
        type: `h3`,
        text: `Step 1: Install dependencies`,
      },
      {
        type: `code`,
        language: `bash`,
        code: `cd integrations/langchain_rag
pip install -r requirements.txt`,
      },
      {
        type: `paragraph`,
        text: `The dependencies are langchain-core, langchain-community, faiss-cpu, and requests. No new AI frameworks are required.`,
      },
      {
        type: `h3`,
        text: `Step 2: The Warden client`,
      },
      {
        type: `paragraph`,
        text: `warden_client.py is a 50-line HTTP wrapper. It polls the Warden Engine's /drift endpoint and returns a typed DriftStatus object. It also exposes submit_justification for programmatic approval workflows.`,
      },
      {
        type: `code`,
        language: `python`,
        code: `from warden_client import WardenClient
warden = WardenClient(base_url="https://your-warden-api.example.com")
status = warden.get_drift()
print(status.drift)   # 0.0082
print(status.gate)    # "TRIGGERED"`,
      },
      {
        type: `h3`,
        text: `Step 3: The LangChain EU AI Act Callback Handler`,
      },
      {
        type: `paragraph`,
        text: `warden_callback.py implements BaseCallbackHandler. The one method that matters is on_chain_start — it fires before every chain execution and checks the gate.`,
      },
      {
        type: `code`,
        language: `python`,
        code: `from langchain_core.callbacks import BaseCallbackHandler
class WardenCallbackHandler(BaseCallbackHandler):
    def on_chain_start(self, serialized, inputs, *, run_id, **kwargs):
        status = self.client.get_drift()
        if status.gate in ("TRIGGERED", "PENDING"):
            raise WardenGateBlockedException(status, self.dashboard_url)`,
      },
      {
        type: `paragraph`,
        text: `The full implementation handles connectivity failures, warning-only mode, and structured error messages that tell the operator exactly what to do.`,
      },
      {
        type: `h3`,
        text: `Step 4: Wire it into your chain`,
      },
      {
        type: `paragraph`,
        text: `This is the only change to your existing chatbot:`,
      },
      {
        type: `code`,
        language: `python`,
        code: `from warden_client import WardenClient
from warden_callback import WardenCallbackHandler
warden = WardenClient(base_url="https://your-warden-api.example.com")
handler = WardenCallbackHandler(
    client=warden,
    dashboard_url="https://your-dashboard.example.com",
    raise_on_gate=True,
    skip_on_warden_unavailable=True,   # degrade gracefully if Warden is down
)
# Your existing chain — unchanged except for this one line
rag_chain = (your_existing_rag_chain).with_config(callbacks=[handler])`,
      },
      {
        type: `paragraph`,
        text: `The with_config(callbacks=[handler]) pattern works with any LCEL chain, LangGraph graph, or LangChain agent. The chain itself does not change. The Warden observes it from outside.`,
      },
      {
        type: `h2`,
        text: `What the Operator Sees When the Gate Triggers`,
      },
      {
        type: `paragraph`,
        text: `When a developer commits an unapproved change and the drift crosses the sovereign threshold, the next API call to the chatbot returns this instead of a generated answer:`,
      },
      {
        type: `preformatted`,
        content: `╔══════════════════════════════════════════════════════════╗
║  WARDEN GATE BLOCKED — Execution halted (Article 14)    ║
╚══════════════════════════════════════════════════════════╝
  Drift index : 0.0091
  Threshold   : 0.0075
  Gate status : TRIGGERED
  Action required: open the governance dashboard and submit
  a justification to the Warden Agent before retrying.
  Dashboard → https://spec-drift-chronometer.aevoxis.de`,
      },
      {
        type: `paragraph`,
        text: `The operator opens the dashboard, sees the drift chart, reads the Warden activity log showing which file changed, and submits a justification explaining the change. The Warden Agent evaluates the justification against the spec files and returns an Intent Alignment Score. A substantive justification — for example: "Migrating from GPT-3.5 to GPT-4o-mini, approved by architecture review board 2026-06-10, ticket ARCH-291" — scores 91/100 and is APPROVED. A weak one ("updated model") scores 29/100 and is REJECTED.`,
      },
      {
        type: `paragraph`,
        text: `Once APPROVED, the gate clears. The chatbot resumes accepting queries on the next execution.`,
      },
      {
        type: `paragraph`,
        text: `Every gate event — justification text, drift value, Warden decision, reasoning trace, SHA-256 verification hash — is written to .kiro/audit/last_sync.audit and can be downloaded directly from the dashboard. This is the Article 12 record-keeping artefact.`,
      },
      {
        type: `h2`,
        text: `Running the Full Example`,
      },
      {
        type: `paragraph`,
        text: `The repository includes a complete working RAG chatbot with FAISS vector store and the Warden integration pre-wired.`,
      },
      {
        type: `code`,
        language: `bash`,
        code: `# Clone the repository
git clone https://github.com/VinitaSilaparasetty/spec-drift_chronometer.git
cd spec-drift_chronometer
# Start the Warden Engine (demo mode — no AWS credentials needed)
DEMO_MODE=true ./dev.sh
# In a second terminal: set up and verify the integration
cd integrations/langchain_rag
cp .env.example .env
# Open .env and set OPENAI_API_KEY=sk-...
pip install -r requirements.txt
python check.py
# Once all checks pass, run the chatbot
python rag_chatbot.py`,
      },
      {
        type: `h2`,
        text: `Troubleshooting`,
      },
      {
        type: `paragraph`,
        text: `Run python check.py from the integrations/langchain_rag/ directory before anything else. It checks every dependency and prints a specific fix for each failure. The scenarios below map to what it reports.`,
      },
      {
        type: `h3`,
        text: `[FAIL] .env file present`,
      },
      {
        type: `paragraph`,
        text: `You have not copied the example file yet. Run cp .env.example .env — then open .env and fill in your OPENAI_API_KEY.`,
      },
      {
        type: `h3`,
        text: `[FAIL] OPENAI_API_KEY is set`,
      },
      {
        type: `paragraph`,
        text: `The .env file exists but the key line is still blank. Open .env and set OPENAI_API_KEY=sk-...`,
      },
      {
        type: `h3`,
        text: `[FAIL] API key is valid`,
      },
      {
        type: `paragraph`,
        text: `OpenAI rejected the key. Either there is a typo, the key has been revoked, or you copied the wrong value. Generate a new key at platform.openai.com and paste it into .env.`,
      },
      {
        type: `h3`,
        text: `[FAIL] gpt-4o-mini accessible`,
      },
      {
        type: `paragraph`,
        text: `Your account cannot access gpt-4o-mini. This model requires a paid OpenAI account with a positive credit balance. If you are on a free tier, change the model in rag_chatbot.py and langgraph_example.py to one your account can access — gpt-3.5-turbo is a common alternative.`,
      },
      {
        type: `h3`,
        text: `[FAIL] faiss-cpu or any other package`,
      },
      {
        type: `paragraph`,
        text: `The install step was skipped or failed silently. Run pip install -r requirements.txt. If faiss-cpu fails on Apple Silicon, try pip install faiss-cpu --no-cache-dir`,
      },
      {
        type: `h3`,
        text: `[WARN] Warden not reachable`,
      },
      {
        type: `paragraph`,
        text: `The chatbot will still run but governance checks will be skipped. To enable the full governance demo, start the Warden Engine first from the repository root: DEMO_MODE=true ./dev.sh — then re-run python check.py to confirm it is reachable before starting the chatbot.`,
      },
      {
        type: `h2`,
        text: `Enterprise AI Governance: Deployment Considerations`,
      },
      {
        type: `paragraph`,
        text: `Warden API availability. The skip_on_warden_unavailable=True default allows the chatbot to continue if the Warden is unreachable. For high-risk systems, set this to False to enforce strict mode — any connectivity loss halts execution.`,
      },
      {
        type: `paragraph`,
        text: `Latency. The /drift poll adds one HTTP round trip per chain invocation. The Warden API is designed to respond within 200 ms. For high-throughput systems, cache the gate status with a short TTL of 5 to 10 seconds rather than polling on every call.`,
      },
      {
        type: `paragraph`,
        text: `Multi-tenant deployments. Each project should have its own Warden instance and its own .kiro/steering/ spec vault. The spec files define what sovereign looks like for that specific system, so sharing them across products produces meaningless drift scores.`,
      },
      {
        type: `paragraph`,
        text: `DynamoDB audit trail. In production, set DYNAMODB_TABLE_NAME and AWS credentials to persist every gate event to DynamoDB with a configurable retention TTL. This produces a durable, queryable audit trail useful for regulatory inspections and incident reviews.`,
      },
      {
        type: `h2`,
        text: `The Compliance Argument to Your Legal Team`,
      },
      {
        type: `paragraph`,
        text: `If your legal team asks what Article 14 evidence you can produce for a conformity assessment, the answer with this integration is:`,
      },
      {
        type: `unordered-list`,
        items: [
          `Gate log. A timestamped record of every execution that was blocked, the justification submitted, the Warden reasoning trace, and the APPROVED or REJECTED decision.`,
          `Audit trail. A downloadable SHA-256-verified file covering every governance event in the session.`,
          `Architecture documentation. The Warden callback is in the production code path, not a process document. Human oversight is enforced at execution, not at review.`,
          `Spec vault. The human-authored specifications that define what compliant behaviour looks like are version-controlled, timestamped, and referenced in every Warden decision.`,
        ],
      },
      {
        type: `paragraph`,
        text: `This is the difference between documenting compliance and engineering it.`,
      },
      {
        type: `faq`,
        items: [
          {
            question: `Does this work with LangGraph as well as standard LangChain chains?`,
            answer: `Yes. The with_config(callbacks=[handler]) pattern is supported across LCEL chains, LangGraph graphs, and LangChain agents. The Warden callback fires on chain start regardless of the graph structure. See the repository for a LangGraph example.`,
          },
          {
            question: `What happens if the Warden Engine is unavailable?`,
            answer: `By default, skip_on_warden_unavailable=True means the chatbot continues operating if the Warden cannot be reached. This is appropriate for systems where availability is the primary concern. For high-risk systems where oversight is mandatory, set skip_on_warden_unavailable=False — the chatbot will refuse to execute until the Warden is reachable.`,
          },
          {
            question: `Does this integration satisfy Article 14 on its own or are additional measures needed?`,
            answer: `This integration addresses the technical enforcement dimension of Article 14 — ensuring human sign-off is required before architectural changes take effect in production. It does not address the full scope of Article 14, which also includes risk management documentation, user interface oversight tools, and operator training. For high-risk AI systems under Annex III, this integration is one component of a broader compliance programme.`,
          },
          {
            question: `What is the performance overhead of the Warden callback?`,
            answer: `One HTTP round trip per chain invocation, typically under 200 ms in a local deployment and under 50 ms when the Warden is co-located in the same cloud region. For high-throughput systems exceeding 100 requests per second, cache the gate status with a 5 to 10 second TTL to reduce overhead while maintaining meaningful oversight granularity.`,
          },
          {
            question: `Can this be used with non-LangChain AI frameworks?`,
            answer: `The Warden Engine exposes a standard REST API. Any framework capable of making an HTTP GET request before executing an AI chain can integrate with it. The LangChain callback is the reference implementation. Integrations for LlamaIndex and direct OpenAI API usage are on the roadmap.`,
          },
          {
            question: `Does the integration store any personal data from chatbot queries?`,
            answer: `The gate log records drift values, justification text, and Warden decisions. It does not record user queries or chatbot responses by default. In production deployments processing personal data, apply your standard GDPR data minimisation and retention policies to the DynamoDB audit table.`,
          },
        ],
      },
      {
        type: `cta`,
        heading: `Ready to Wire Compliance Into Your LangChain System?`,
        body: `The full integration code is in integrations/langchain_rag/ on GitHub. Try the live demo at spec-drift-chronometer.aevoxis.de to observe the full governance cycle in real time. For commercial deployment, enterprise licensing, or a technical readiness assessment, contact the Aevoxis team.`,
        linkText: `Get in Touch`,
        linkHref: `/contact`,
      },
      {
        type: `author-bio`,
        text: `Vinita Silaparasetty is an AI Governance Engineer at Aevoxis Solutions (aevoxis.de), specialising in EU AI Act compliance architecture for enterprise AI deployments. Published author (Apress), Google Developer Expert (ML), M.Sc. Data Science Newcastle University. The Spec-Drift Chronometer is a Top 300 finalist in the AWS 10,000 AIdeas Competition 2025.`,
        disclosure: `Parts of this article were written with AI writing assistance (Claude, Anthropic). All technical concepts, integration architecture, code examples, and intellectual content are original work by the author. This article does not constitute legal advice.`,
      },
    ],
  },
  {
    slug: `how-to-mark-ai-generated-content-in-code`,
    title: `How to Mark AI-Generated Content in Code: EU AI Act Article 50(2)`,
    metaDescription: `A practical guide to machine-readable marking of AI-generated output under EU AI Act Article 50(2): C2PA Content Credentials, the IPTC digital source type, why metadata alone fails, and what to log so you can prove the marking happened.`,
    canonicalPath: `/blog/how-to-mark-ai-generated-content-in-code`,
    datePublishedISO: `2026-10-29`,
    author: `Vinita Silaparasetty`,
    authorRole: `AI Governance Engineer, Aevoxis Solutions`,
    publishedDate: `October 2026`,
    readingTime: `12 minutes`,
    excerpt: `Article 50(2) says AI-generated output must be marked in a machine-readable format. It does not say how. This is the engineering answer: what to attach, where it survives, where it gets stripped, and what you need to keep in order to show an auditor that you did it.`,
    tags: [`EU AI Act`, `Article 50`, `C2PA`, `Content Provenance`, `Compliance Engineering`],
    keywords: [
      `EU AI Act Article 50(2)`,
      `machine-readable marking AI content`,
      `C2PA Content Credentials Python`,
      `mark AI-generated images in code`,
      `trainedAlgorithmicMedia`,
      `AI content watermarking EU`,
    ],
    howTo: {
      name: `How to mark AI-generated content for EU AI Act Article 50(2)`,
      steps: [
        {
          name: `Find every generation point`,
          text: `List every place your system returns model output to a user or writes it to storage: the chat endpoint, the image route, the batch job, the retry path. Marking has to happen at each of them, because anything you miss ships unmarked.`,
        },
        {
          name: `Attach a signed C2PA manifest`,
          text: `At generation time, attach a C2PA manifest recording a c2pa.created action with the IPTC digital source type trainedAlgorithmicMedia, signed with a certificate that identifies you as the provider. Use the c2pa-python library for images, audio and video.`,
        },
        {
          name: `Add a second marking layer`,
          text: `Metadata is removed by most social platforms on upload. Add an invisible watermark carried in the pixels or samples so the marking survives re-encoding, screenshotting and stripping. The Commission's Code of Practice asks for at least two layers where one is not enough on its own.`,
        },
        {
          name: `Log that the marking happened`,
          text: `Write an immutable record for each generation: what was produced, which marking layers were applied, the manifest identifier and the model version. Without it you can state that you mark content but you cannot show it.`,
        },
        {
          name: `Verify in CI`,
          text: `Add a test that generates one asset of each media type through the real path, reads the manifest back, and fails the build if the digital source type is missing. Marking that is not tested quietly stops working.`,
        },
      ],
    },
    content: [
      {
        type: `paragraph`,
        text: `EU AI Act Article 50(2) is four lines long and contains an entire engineering project. Providers of AI systems that generate synthetic audio, image, video or text must ensure the outputs are marked in a machine-readable format and detectable as artificially generated or manipulated. The marking has to be effective, interoperable, robust and reliable, as far as that is technically feasible.`,
      },
      {
        type: `paragraph`,
        text: `Those four adjectives are the whole problem. Effective and interoperable push you towards an open standard that someone else's software can read. Robust and reliable push you towards something that survives the internet, where files are re-encoded, cropped and stripped of metadata as a matter of routine. No single technique gives you all four, which is why a compliant implementation is a stack rather than a function call.`,
      },
      {
        type: `paragraph`,
        text: `This article is the implementation. It assumes you already generate content in production and need to add marking to it without rewriting the system.`,
      },
      {
        type: `h2`,
        text: `What the law actually asks for, and when`,
      },
      {
        type: `paragraph`,
        text: `Article 50 has applied since 2 August 2026. For AI systems that were already placed on the market before that date and generate synthetic content, the machine-readable marking duty bites on 2 December 2026. If your system is live today, that is the deadline that matters.`,
      },
      {
        type: `paragraph`,
        text: `The Act names no standard. In June 2026 the European Commission published the final Code of Practice on Transparency of AI-generated Content, which fills that gap. It is voluntary, and signing it is not the same as complying with the Act, but it is the clearest statement available of what regulators consider adequate. Two things in it change how you build.`,
      },
      {
        type: `unordered-list`,
        items: [
          `It splits the duties by role. Providers mark and make content detectable. Deployers label deepfakes and AI-generated text published on matters of public interest. If you build the model service and someone else publishes with it, you are each on the hook for a different half.`,
          `It asks for at least two layers of machine-readable marking where one layer is not enough on its own, for example metadata combined with a watermark. This is the sentence that rules out the one-line fix.`,
        ],
      },
      {
        type: `paragraph`,
        text: `The reason for two layers is not bureaucratic. It is that the two available techniques fail in opposite directions, and a marking scheme that fails silently is worse than none, because you will report compliance you do not have.`,
      },
      {
        type: `h2`,
        text: `Why metadata alone fails`,
      },
      {
        type: `paragraph`,
        text: `The natural first implementation is to write something into the file's metadata. It is cheap, it is readable by any tool that understands the container, and it carries arbitrary structured detail. It is also the first thing to be destroyed.`,
      },
      {
        type: `paragraph`,
        text: `Most social platforms re-encode uploaded media and discard metadata they do not recognise. Screenshotting destroys it completely. Many image pipelines strip it deliberately, because metadata is also where location data and camera serial numbers live, so removing it is a privacy measure. Your marking is collateral damage in someone else's correct decision.`,
      },
      {
        type: `paragraph`,
        text: `So metadata gives you interoperable and effective, and fails at robust. A watermark carried in the pixels or the audio samples gives you robust, and is weaker on interoperable, because reading it generally requires the detector that matches the embedder. Hence the stack: metadata as the rich, readable layer, watermark as the layer that survives.`,
      },
      {
        type: `h2`,
        text: `Layer one: a signed C2PA manifest`,
      },
      {
        type: `paragraph`,
        text: `C2PA, from the Coalition for Content Provenance and Authenticity, is the standard the Code of Practice treats as the reference for the metadata layer, and it is what the major model providers have adopted. It is worth understanding what it actually is, because "C2PA metadata" undersells it.`,
      },
      {
        type: `paragraph`,
        text: `A C2PA manifest is a cryptographically signed statement about an asset. It records a set of assertions (what happened to this file) and is signed with a certificate that identifies who is making the claim. The signature covers a hash of the asset, so if someone edits the pixels and leaves the manifest in place, verification fails rather than passing with a lie. That is the difference between provenance and a comment field.`,
      },
      {
        type: `paragraph`,
        text: `The assertion that does the Article 50(2) work is a c2pa.created action carrying an IPTC digital source type. For fully model-generated content the value is trainedAlgorithmicMedia. This is the machine-readable flag an auditor's tool, a platform's ingest pipeline or a browser extension reads to decide that the asset is synthetic.`,
      },
      {
        type: `code`,
        language: `python`,
        code: `# pip install c2pa-python
import c2pa

TRAINED_ALGORITHMIC_MEDIA = (
    "http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia"
)

def manifest_for(model_id: str, media_type: str) -> dict:
    """The provenance claim attached to every asset this service generates."""
    return {
        "claim_generator_info": [
            {"name": "aevoxis-image-service", "version": "1.4.0"}
        ],
        "format": media_type,
        "title": "AI-generated image",
        "assertions": [
            {
                "label": "c2pa.actions",
                "data": {
                    "actions": [
                        {
                            "action": "c2pa.created",
                            # The Article 50(2) flag: this asset is model output.
                            "digitalSourceType": TRAINED_ALGORITHMIC_MEDIA,
                            "softwareAgent": {"name": model_id},
                        }
                    ]
                },
            }
        ],
    }`,
      },
      {
        type: `paragraph`,
        text: `Signing it attaches the manifest to the file. The signer wraps a private key and the certificate chain that identifies you as the provider; the builder writes a new file with the manifest embedded.`,
      },
      {
        type: `code`,
        language: `python`,
        code: `def mark(raw_path: str, signed_path: str, model_id: str, media_type: str) -> None:
    definition = manifest_for(model_id, media_type)
    with c2pa.Builder(definition, context) as builder:
        builder.sign_file(raw_path, signed_path, signer)`,
      },
      {
        type: `paragraph`,
        text: `The exact constructor shape for the context and the signer moves between releases of the library, so take those from the signing example in the contentauth/c2pa-python repository rather than from here. The manifest definition above is the part that encodes the regulatory requirement, and that is stable.`,
      },
      {
        type: `h3`,
        text: `Where to put the call`,
      },
      {
        type: `paragraph`,
        text: `Put it at the point of generation, not at the point of publication. Three reasons, in increasing order of how much they will cost you if you get it wrong.`,
      },
      {
        type: `unordered-list`,
        items: [
          `Publication is not the only exit. Content leaves through downloads, APIs, webhooks, internal tools and support exports. Marking at publication marks one of those paths.`,
          `Article 50(2) is a duty on the provider of the generating system, so the claim belongs where the generation happened and where you can sign for it honestly.`,
          `If marking is a separate pipeline step, it will one day be skipped by a retry, a cache hit or a code path added by someone who did not know it existed. Unmarked content then exists in your system and you have no way to find it.`,
        ],
      },
      {
        type: `paragraph`,
        text: `The architectural version of this point: generation should not be able to return an unmarked asset. If the only way to get bytes out of the image service is through a function that marks them, the failure mode disappears rather than being documented.`,
      },
      {
        type: `h2`,
        text: `Layer two: the watermark that survives`,
      },
      {
        type: `paragraph`,
        text: `The second layer is an imperceptible signal embedded in the content itself, so it travels through re-encoding, resizing, cropping and screenshotting. For images and video the mark lives in the pixels; for audio, in the waveform.`,
      },
      {
        type: `paragraph`,
        text: `What you use depends on your generation stack. Some model providers emit a watermark themselves, in which case your job is to verify it is switched on and that your pipeline does not re-encode it away. Otherwise you embed one. Whichever route you take, two properties decide whether it is worth anything: how much distortion it survives, and whether anyone other than you can detect it.`,
      },
      {
        type: `paragraph`,
        text: `Be honest in your documentation about the second one. A watermark only you can read is still useful: it lets you answer the question "did we generate this?" when a regulator or a journalist asks. But it is weaker on the interoperability the Act asks for than a published, signed manifest, which is exactly why neither layer replaces the other.`,
      },
      {
        type: `h2`,
        text: `Marking text`,
      },
      {
        type: `paragraph`,
        text: `Text is the hard case and deserves plain speaking rather than a confident answer. A paragraph of prose has nowhere to hide a signature: there is no metadata container that survives a copy and paste into a text box, and statistical watermarking of token choices degrades as soon as the text is edited, translated or summarised, which is what people do to generated text.`,
      },
      {
        type: `paragraph`,
        text: `What works in practice is marking at the boundary of the system rather than in the words. Attach provenance to the document, the API response or the file that carries the text, keep a server-side record of what you generated, and make the visible disclosure carry the weight where the machine-readable layer cannot. The Act recognises the limit: the obligation extends as far as it is technically feasible. Document where that line sits for your system and why, because "we concluded it was not feasible" is a defensible position and "we did not think about it" is not.`,
      },
      {
        type: `paragraph`,
        text: `Note also that text generated and published on matters of public interest carries a separate labelling duty that falls on the deployer, and that one is about a human-visible label rather than a machine-readable mark. If you both generate and publish, you owe both.`,
      },
      {
        type: `h2`,
        text: `The part everyone forgets: proving it`,
      },
      {
        type: `paragraph`,
        text: `Suppose you do all of the above. An auditor asks you to show that the image someone complained about last March was marked when it left your system. What do you produce?`,
      },
      {
        type: `paragraph`,
        text: `The asset itself is not proof: it has been through three platforms since and the metadata is long gone. The code is not proof either; it shows what the system does now, not what it did in March. What answers the question is a record written at generation time and never edited since.`,
      },
      {
        type: `code`,
        language: `python`,
        code: `import hashlib, json
from datetime import datetime, timezone

def record_marking(asset_bytes: bytes, manifest_id: str, model_id: str,
                   layers: list[str]) -> dict:
    """Written once per generated asset, append-only, never updated."""
    entry = {
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "asset_sha256": hashlib.sha256(asset_bytes).hexdigest(),
        "manifest_id": manifest_id,
        "model": model_id,
        "marking_layers": layers,          # e.g. ["c2pa", "watermark"]
        "article": "50(2)",
    }
    entry["entry_sha256"] = hashlib.sha256(
        json.dumps(entry, sort_keys=True).encode()
    ).hexdigest()
    return entry`,
      },
      {
        type: `paragraph`,
        text: `This is the same move as Article 12 logging for high-risk systems, which is the point: the record-keeping component you build for Article 50 today is the one you extend for Articles 12 to 14 when the high-risk duties apply in December 2027. Teams that treat the two as separate projects build the same thing twice.`,
      },
      {
        type: `paragraph`,
        text: `Hashing the entry is cheap and makes later tampering detectable. Storing the asset hash rather than the asset keeps the log small and keeps you out of a second problem: an archive of every image you ever generated is a data protection liability you probably do not want.`,
      },
      {
        type: `h2`,
        text: `Test it, or it will rot`,
      },
      {
        type: `paragraph`,
        text: `Marking is invisible by design, which means it can stop working for months without anyone noticing. A library upgrade changes a default. An optimisation re-encodes images on upload and strips the manifest. A new endpoint returns raw model output because its author did not know the marking helper existed.`,
      },
      {
        type: `paragraph`,
        text: `One integration test catches all three: generate an asset through the real production path, read the manifest back out, assert the digital source type is present, and fail the build if it is not.`,
      },
      {
        type: `code`,
        language: `python`,
        code: `def test_generated_images_carry_the_article_50_marking(client):
    asset = client.post("/generate", json={"prompt": "a quiet street"}).content

    reader = c2pa.Reader.from_bytes("image/png", asset)
    actions = [
        a
        for m in reader.json()["manifests"].values()
        for s in m["assertions"]
        if s["label"] == "c2pa.actions"
        for a in s["data"]["actions"]
    ]

    assert any(
        a.get("digitalSourceType") == TRAINED_ALGORITHMIC_MEDIA
        for a in actions
    ), "generated image left the service without Article 50(2) marking"`,
      },
      {
        type: `paragraph`,
        text: `Run it against every media type you generate and every route that returns generated content. The test is also the cheapest compliance artefact you will ever produce: a named, dated, version-controlled check that the obligation is met, which is considerably more persuasive than a policy document asserting the same thing.`,
      },
      {
        type: `h2`,
        text: `A four-week order of work`,
      },
      {
        type: `paragraph`,
        text: `If your system is live and 2 December 2026 is the date you are working to, this is the order that gets the most risk off the table first.`,
      },
      {
        type: `unordered-list`,
        items: [
          `Week one: inventory. Every route, job and worker that returns or stores model output. This is the step teams skip and the one that determines whether the rest is complete or merely present.`,
          `Week two: C2PA manifests on images, audio and video at generation time, with the digital source type set and the certificate chain sorted out. Certificates take longer to obtain than the code takes to write, so start them on day one.`,
          `Week three: second layer where the content will be redistributed, plus the generation log.`,
          `Week four: the CI test, and a written note of what is covered, what is not, and why. Hand that note to your legal advisers; it is what they need in order to tell you whether you are done.`,
        ],
      },
      {
        type: `paragraph`,
        text: `Four weeks is realistic for a system that already has a clean generation boundary. It is optimistic for one where model calls are scattered across the codebase, which is itself a useful thing to discover in week one rather than in week four.`,
      },
      {
        type: `faq`,
        items: [
          {
            question: `Does Article 50(2) apply to my system if I use someone else's model via an API?`,
            answer: `It depends on whether you are acting as a provider of an AI system that generates synthetic content, which can be true even when the model is not yours. Many teams building on a hosted model are providers of their own system for the purposes of the Act. Treat the question as one for your legal advisers, and in the meantime build the marking, because the engineering is the same either way and you cannot retrofit marking onto content you have already shipped.`,
          },
          {
            question: `Is C2PA legally required?`,
            answer: `No. The AI Act names no standard. It requires marking that is machine-readable, effective, interoperable, robust and reliable. C2PA is the reference the Commission's Code of Practice points to and what the major providers have implemented, which makes it the pragmatic choice, but the obligation is to the properties, not the format.`,
          },
          {
            question: `What if the marking gets stripped after my content leaves?`,
            answer: `The duty is on you to mark the output, not to control what third parties do with it afterwards. That is precisely why the second layer matters: a watermark that survives re-encoding means the content is still detectable as synthetic when the metadata is gone, and your generation log means you can still demonstrate that you marked it at the point it left your system.`,
          },
          {
            question: `Do I need to mark content a human has edited?`,
            answer: `C2PA has assertions for that case, and the IPTC vocabulary distinguishes fully generated media from media that has been algorithmically modified. Where the output is a mix, record the actions rather than picking one label: a manifest that says what the model did and what the human did afterwards is both more honest and more useful than a single flag.`,
          },
          {
            question: `We generate content only for internal use. Does this apply?`,
            answer: `Scope is a legal question, and the answer turns on whether the system is placed on the market or put into service and whether the output reaches people. The engineering advice is the same regardless: internal content escapes, through exports, screenshots and support tickets, and marking it costs little once the generation boundary is clean.`,
          },
        ],
      },
      {
        type: `cta`,
        heading: `Want this built into your product?`,
        body: `I'm taking five teams as design partners: Article 50 disclosure and content marking working in your own codebase, in four weeks, free. If you ship a chatbot, a voice agent or anything that generates content, apply for a place.`,
        linkText: `See the design-partner places`,
        linkHref: `/early-access`,
      },
      {
        type: `author-bio`,
        text: `Vinita Silaparasetty is an AI Governance Engineer and founder of Aevoxis Solutions, operating under SMartDE eG, Germany. She has published two SSRN preprints on implementing Article 50, covering generative and agentic systems, and has an empirical paper under review at IEEE Software documenting twelve failure modes found by stress-testing a live governance system. Google Developer Expert (ML), Google Women Techmakers Ambassador, AWS Community Builder, Apress author, M.Sc. Data Science, Newcastle University (Russell Group).`,
        disclosure: `Parts of this article were written with AI writing assistance (Claude, Anthropic). All technical concepts, architecture, code examples and intellectual content are original work by the author. This article is engineering guidance and does not constitute legal advice: whether and how Article 50 applies to your system is a question for your legal advisers.`,
      },
    ],
  },
];
