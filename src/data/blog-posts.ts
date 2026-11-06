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
    metaDescription: `A working implementation of EU AI Act human oversight and logging requirements using real-time drift detection, a Justification Gate and a cryptographically verifiable audit trail. Live demo included.`,
    canonicalPath: `/blog/eu-ai-act-articles-12-13-14-technical-implementation`,
    datePublishedISO: `2026-06-16`,
    dateModifiedISO: `2026-11-06`,
    author: `Vinita Silaparasetty`,
    authorRole: `AI Governance Engineer, Aevoxis Solutions`,
    publishedDate: `June 2026`,
    readingTime: `10 minutes`,
    excerpt: `Most discussions of EU AI Act compliance treat Articles 12, 13 and 14 as documentation work. I treat them as architecture: governance logic built into the execution path of the system itself. Here is a working example.`,
    tags: [`EU AI Act`, `AI Governance`, `Compliance Engineering`, `AWS`],
    liveDemo: { label: `spec-drift-chronometer.aevoxis.de`, href: `https://spec-drift-chronometer.aevoxis.de` },
    sourceCode: { label: `GitHub`, href: `https://github.com/VinitaSilaparasetty/spec-drift_chronometer` },
    content: [
      {
        type: `paragraph`,
        text: `Most discussions of EU AI Act compliance treat Articles 12, 13 and 14 as documentation work. Write a risk management policy. Keep logs. Put a human somewhere in the process. Tick the boxes.`,
      },
      {
        type: `paragraph`,
        text: `I see it differently. I treat compliance as architecture: governance logic built into the execution path of the system, not a policy layer sitting on top of a generative AI system.`,
      },
      {
        type: `paragraph`,
        text: `The Spec-Drift Chronometer shows what that looks like in practice. It is a working, open-source demonstration, built for the August 2, 2026 applicability deadline.`,
      },
      {
        type: `paragraph`,
        text: `Update, November 2026: When this article was written, the high-risk rules were due to apply on August 2, 2026. The Digital Omnibus on AI (Regulation (EU) 2026/1744, in force since 27 July 2026) moved them. Articles 12, 13 and 14 now apply from 2 December 2027 for Annex III high-risk systems. For high-risk AI in products covered by Annex I, they apply from 2 August 2028. The architecture described below is unchanged.`,
      },
      {
        type: `h2`,
        text: `What Is Spec-Drift and Why Does It Matter for EU AI Act Compliance?`,
      },
      {
        type: `paragraph`,
        text: `An autonomous AI system that generates outputs over time does something predictable. Its outputs start to move away from the original human-approved specification.`,
      },
      {
        type: `paragraph`,
        text: `Nothing is broken when this happens. Any system that sits between human intent and probabilistic inference behaves this way.`,
      },
      {
        type: `paragraph`,
        text: `I call this Spec-Drift: the measurable gap between what a human architect specified and what an autonomous system actually produces.`,
      },
      {
        type: `paragraph`,
        text: `In traditional software, code review, testing and deployment pipelines catch this kind of deviation. An autonomous AI system running in real time has none of those checks.`,
      },
      {
        type: `paragraph`,
        text: `It makes decisions, takes actions and changes state without a human seeing each output. By the time someone notices the drift, it has often compounded into something much harder to fix.`,
      },
      {
        type: `paragraph`,
        text: `This is exactly the scenario EU AI Act Article 14 was written for. The Article requires that AI systems allow human oversight to intervene, prevent, correct and override outputs.`,
      },
      {
        type: `paragraph`,
        text: `The regulation does not answer the technical question, though. How do you intervene in a system that runs faster than human review cycles?`,
      },
      {
        type: `paragraph`,
        text: `The Spec-Drift Chronometer is my answer to that question.`,
      },
      {
        type: `h2`,
        text: `What Do EU AI Act Articles 12, 13 and 14 Actually Require Technically?`,
      },
      {
        type: `paragraph`,
        text: `Most commentary on these articles stays at the policy level. Let's take a look at what they mean at the implementation level.`,
      },
      {
        type: `h3`,
        text: `What does EU AI Act Article 12 require?`,
      },
      {
        type: `paragraph`,
        text: `Article 12 requires high-risk AI systems to log events automatically throughout their operation. The logging must be good enough to audit the system's behavior after the fact.`,
      },
      {
        type: `paragraph`,
        text: `Article 12 asks for automatic logs over the system's lifetime, detailed enough to trace how it works (Art. 12(1) and (2)). It lists specific fields only for remote biometric identification systems (Art. 12(3)). In practice, I recommend logging the input that triggered a decision, the decision itself and enough context for a reviewer to reconstruct what happened and why.`,
      },
      {
        type: `paragraph`,
        text: `Why is it important? If logging is added after the system is built, the data needed to reconstruct a decision often does not exist. It was never retained.`,
      },
      {
        type: `paragraph`,
        text: `So design logging into the system architecture from the beginning. Logging cannot be an afterthought.`,
      },
      {
        type: `h3`,
        text: `What does EU AI Act Article 13 require?`,
      },
      {
        type: `paragraph`,
        text: `Article 13 requires high-risk AI systems to be transparent enough for deployers to interpret the output and use it appropriately (Art. 13(1)).`,
      },
      {
        type: `paragraph`,
        text: `In practice, I recommend giving more than an output. Give enough context about how that output was produced for the person overseeing the system to evaluate it.`,
      },
      {
        type: `paragraph`,
        text: `Note: Transparency has to show up in the interface, not only in technical files. A reasoning trace in a log file nobody reads is not transparency in the Article 13 sense.`,
      },
      {
        type: `h3`,
        text: `What does EU AI Act Article 14 require?`,
      },
      {
        type: `paragraph`,
        text: `Article 14 requires high-risk AI systems to be designed so that natural persons can effectively oversee them during operation.`,
      },
      {
        type: `paragraph`,
        text: `In particular, humans must be able to decide not to use the system in a particular situation, intervene in its operation and override its outputs.`,
      },
      {
        type: `paragraph`,
        text: `Note: Human oversight cannot be a passive capability. An override button that exists but is never triggered does not satisfy Article 14 in spirit.`,
      },
      {
        type: `paragraph`,
        text: `The oversight mechanism must be active. It has to sit in the critical path of the system's operation, not in a bypass lane beside it.`,
      },
      {
        type: `paragraph`,
        text: `Now that you know what the three articles ask for, you are ready to see how the Chronometer implements them.`,
      },
      {
        type: `h2`,
        text: `How Does the Spec-Drift Chronometer Implement These Requirements?`,
      },
      {
        type: `paragraph`,
        text: `The system covers all three articles with one architectural pattern: the Governance Loop.`,
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
        text: `Every component in this loop maps to a specific regulatory obligation. That is on purpose. The architecture was designed around the obligations, not the other way around.`,
      },
      {
        type: `h2`,
        text: `How Is the Human-Approved Specification Stored and Protected?`,
      },
      {
        type: `paragraph`,
        text: `The foundation of the system is the Sovereign Spec Vault: a set of human-authored specification files stored in .kiro/steering/.`,
      },
      {
        type: `paragraph`,
        text: `These files define the approved boundaries the autonomous system is allowed to operate within.`,
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
        text: `The drift threshold of 0.0075 is the value that matters most. When the measured gap between the system's current output and the approved specification goes above it, the Justification Gate activates.`,
      },
      {
        type: `paragraph`,
        text: `The vault is human-authored and version-controlled. The autonomous system cannot modify it.`,
      },
      {
        type: `paragraph`,
        text: `Why is it important? The specification is read-only for the AI system but editable by the human architect. That constraint is the structural foundation of Article 14 compliance.`,
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
        text: `This response powers the real-time dashboard. A non-technical stakeholder can see:`,
      },
      {
        type: `unordered-list`,
        items: [
          `the current drift index as a number`,
          `whether it is within the approved threshold`,
          `the system health status in plain language`,
          `the Warden's current operational state`,
        ],
      },
      {
        type: `paragraph`,
        text: `They do not need to understand how drift is calculated. The interface is designed so that people can make governance decisions without technical knowledge.`,
      },
      {
        type: `paragraph`,
        text: `This is Article 13 transparency surfaced through the interface, not buried in a log file.`,
      },
      {
        type: `h2`,
        text: `How Does the Justification Gate Enforce Article 14 Human Oversight?`,
      },
      {
        type: `paragraph`,
        text: `When drift exceeds the sovereign threshold, the system does not take corrective action on its own. It stops and asks for a human decision. This is the Justification Gate.`,
      },
      {
        type: `paragraph`,
        text: `The gate shows the human:`,
      },
      {
        type: `unordered-list`,
        items: [
          `the drift value and how far it exceeds the threshold`,
          `the exact specification clause that was violated`,
          `the AI model that produced the non-compliant output`,
          `a text field for a written justification, which is required before the system proceeds`,
        ],
      },
      {
        type: `paragraph`,
        text: `The Warden Agent then evaluates the justification against three criteria:`,
      },
      {
        type: `unordered-list`,
        items: [
          `Semantic relevance: Does the justification address the type of drift detected? A justification about database schema changes does not cover a drift in content generation behavior.`,
          `Specification cross-reference: Is the justification consistent with the specification clause that was violated?`,
          `Article 14 guardrails: Does the justification show that a human actually understood the deviation and made a conscious governance decision?`,
        ],
      },
      {
        type: `paragraph`,
        text: `Example: A weak justification such as "it is fine" or "I approved this" scores below the acceptance threshold. The Warden rejects it.`,
      },
      {
        type: `paragraph`,
        text: `The rejection is logged too, with the full reasoning trace. That gives you an Article 12-compliant record of the failed oversight attempt.`,
      },
      {
        type: `paragraph`,
        text: `A strong justification names the technical reason for the deviation and connects it to a legitimate architectural decision. The Warden approves it and updates the specification to reflect the new approved boundary.`,
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
        text: `The SHA-256 hash of the specification at the time of the audit makes any later change to the specification detectable.`,
      },
      {
        type: `paragraph`,
        text: `Why is it important? A governance system whose records can be changed after the fact gives you no real compliance assurance.`,
      },
      {
        type: `paragraph`,
        text: `This goes beyond what Article 12 strictly requires. However, it is a practical concern that any serious compliance buyer should raise.`,
      },
      {
        type: `paragraph`,
        text: `The audit trail also includes the model version used for evaluation, the human justification word for word and the Warden's decision with full reasoning.`,
      },
      {
        type: `paragraph`,
        text: `In production deployments, the simulated Warden evaluation is replaced with live Amazon Bedrock Nova Pro reasoning in eu-central-1.`,
      },
      {
        type: `h2`,
        text: `What Are the Current Limitations of This Implementation?`,
      },
      {
        type: `paragraph`,
        text: `Honest documentation of a governance system has to include its limits. Here are the current ones.`,
      },
      {
        type: `h3`,
        text: `Drift measurement is simulated in the demo`,
      },
      {
        type: `paragraph`,
        text: `The live demo uses pre-scripted drift scenarios. It does not measure actual semantic deviation in a real AI system's outputs.`,
      },
      {
        type: `paragraph`,
        text: `The governance logic, the Justification Gate, the audit trail and the spec vault are fully functional. A production deployment connects the drift measurement endpoint to the output stream of the AI system being governed.`,
      },
      {
        type: `h3`,
        text: `The specification vault requires manual maintenance`,
      },
      {
        type: `paragraph`,
        text: `A human architect has to write the initial specification by hand. This is the set of human-approved boundaries that defines what counts as drift.`,
      },
      {
        type: `paragraph`,
        text: `In the Article 14 sense, this is a feature: the human is the source of the specification. But it also means the system cannot govern itself into existence.`,
      },
      {
        type: `h3`,
        text: `Rejection does not force-halt external systems in all scenarios`,
      },
      {
        type: `paragraph`,
        text: `When the Justification Gate rejects a justification, it logs the rejection and returns control to the dashboard.`,
      },
      {
        type: `paragraph`,
        text: `A hard stop on rejection needs integration with the live autonomous system. That design depends on the system being governed, so it is marked as Phase 2 in the roadmap.`,
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
        text: `Open http://localhost:3000. You do not need AWS credentials in demo mode.`,
      },
      {
        type: `paragraph`,
        text: `The live demo is available at spec-drift-chronometer.aevoxis.de. For a production deployment with Amazon Bedrock and AWS Lambda eu-central-1, see the README in the repository.`,
      },
      {
        type: `paragraph`,
        text: `Now that the demo is running, you are ready for the next step: wiring the same gate into a production LangChain RAG chatbot. That is the next article: aevoxis.de/insights/eu-ai-act-langchain-rag-integration.`,
      },
      {
        type: `faq`,
        items: [
          {
            question: `Does the Spec-Drift Chronometer make an AI system fully EU AI Act compliant?`,
            answer: `No. It demonstrates a technical approach to the human oversight and logging requirements of Articles 12, 13 and 14 for autonomous AI systems. Full EU AI Act compliance for a high-risk system involves more. Depending on the system category, that includes risk management documentation, data governance, technical documentation and conformity assessment.`,
          },
          {
            question: `Which types of AI systems does this governance pattern apply to?`,
            answer: `The Governance Loop pattern fits any autonomous AI system that generates outputs continuously without a human reviewing each output. This includes AI coding assistants, autonomous content generation systems, AI-driven process automation and agentic AI workflows. The implementation will vary by system. The pattern itself carries over across implementation languages and cloud providers: a human-authored specification vault, real-time drift measurement, a mandatory human checkpoint and a verifiable audit trail.`,
          },
          {
            question: `Is the Justification Gate a hard block or can it be bypassed?`,
            answer: `In the current implementation the Justification Gate is a soft block. It requires a human justification before the system records the governance decision. It does not force-halt an external autonomous system. A hard block that stops a system until a valid justification arrives is marked as Phase 2. It would be necessary for production deployment in a high-risk AI system context.`,
          },
          {
            question: `What is the difference between Article 14 human oversight and simply having a human approve outputs?`,
            answer: `Article 14 requires the human oversight mechanism to be effective, not merely present. A human who nominally approves outputs without meaningful information about what they are approving is not effective oversight. The Justification Gate asks for a documented rationale. The Warden evaluates it for semantic relevance to the specific drift detected. A rubber-stamp approval is rejected.`,
          },
          {
            question: `Does the system store personal data?`,
            answer: `In demo mode the system stores no personal data. The audit trail captures the justification text the user enters, and in a production deployment that text may contain personal data. Production deployments should include a GDPR-compliant data retention policy for audit trail records and a data subject erasure endpoint. The production architecture includes that endpoint.`,
          },
          {
            question: `Can this be adapted for non-AWS infrastructure?`,
            answer: `Yes. The Warden Engine is a FastAPI application, so it runs on any infrastructure that can run Python. You can replace the Bedrock integration for production Warden evaluation with any LLM provider API. The spec vault uses plain Markdown and JSON files that are infrastructure-agnostic. The audit trail is a generated text file with no cloud dependency.`,
          },
        ],
      },
      {
        type: `cta`,
        heading: `Is Your Generative AI System Ready for December 2, 2027?`,
        body: `EU AI Act Article 14 applies to Annex III high-risk AI systems from December 2, 2027, following the Digital Omnibus on AI. If you deploy autonomous AI systems in Annex III high-risk categories, you need to demonstrate human oversight capability before that date. These categories include systems used in employment, education, credit, biometric identification or critical infrastructure. If you are assessing your organization's autonomous AI systems for Article 14 compliance and want a technical second opinion on your architecture, try the EU AI Act Technical Readiness Assessment at aevoxis.de. It takes about five minutes. You get a personalized response within 24 hours.`,
        linkText: `Start the Assessment`,
        linkHref: `/contact`,
      },
      {
        type: `author-bio`,
        text: `Vinita Silaparasetty is an AI Governance Engineer working under the Aevoxis Solutions name as a member of SMartDE eG, Germany. Published author (Apress), Google Developer Expert (ML), M.Sc. Data Science Newcastle University (Russell Group). The Spec-Drift Chronometer was developed as an entry for the AWS 10,000 AIdeas Competition 2025, Top 300 Finalist from over 10,000 global submissions.`,
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
    dateModifiedISO: `2026-11-06`,
    canonicalUrl: `https://aevoxis.de/insights/eu-ai-act-langchain-rag-integration`,
    author: `Vinita Silaparasetty`,
    authorRole: `AI Governance Engineer, Aevoxis Solutions`,
    publishedDate: `June 2026`,
    readingTime: `12 minutes`,
    excerpt: `Enterprise teams building AI systems in 2026 have two conversations going on in the same company, and they almost never happen in the same room. This article closes the gap between compliance documents and production code with a working LangChain RAG integration that enforces EU AI Act Article 14 human oversight at execution time.`,
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
          text: `Install langchain-core, langchain-community, faiss-cpu and requests in the integrations/langchain_rag directory using pip install -r requirements.txt. You do not need any new AI frameworks.`,
        },
        {
          name: `Configure the Warden client`,
          text: `Create a WardenClient instance pointing to your Warden Engine API URL. The client polls the /drift endpoint and returns a typed DriftStatus object with the current drift index and gate status.`,
        },
        {
          name: `Add the LangChain EU AI Act callback handler`,
          text: `Implement WardenCallbackHandler extending BaseCallbackHandler. Override on_chain_start to call get_drift() and raise WardenGateBlockedException when the gate status is TRIGGERED or PENDING.`,
        },
        {
          name: `Wire the handler into your LangChain chain`,
          text: `Pass the handler to any LCEL chain, LangGraph graph or LangChain agent using with_config(callbacks=[handler]). The chain itself is unchanged. The Warden observes it from outside.`,
        },
      ],
    },
    content: [
      {
        type: `paragraph`,
        text: `This article is about the production integration with LangChain RAG systems. For how the Spec-Drift Chronometer implements EU AI Act Articles 12, 13 and 14 at the architecture level, see the full technical deep dive at aevoxis.de/insights/eu-ai-act-articles-12-13-14-technical-implementation.`,
      },
      {
        type: `h2`,
        text: `Why Compliance Documents and Production Code Do Not Connect`,
      },
      {
        type: `paragraph`,
        text: `Enterprise teams building AI systems in 2026 have two conversations going on in the same company. They almost never happen in the same room.`,
      },
      {
        type: `paragraph`,
        text: `The compliance team maps obligations from EU AI Act Articles 12, 13, 14 and 50. They produce gap analyses, risk registers and conformity frameworks. They know exactly what human oversight must look like on paper.`,
      },
      {
        type: `paragraph`,
        text: `The engineering team runs a LangChain RAG chatbot in production. It handles customer queries, internal knowledge retrieval or document summarization at scale. It is the AI system the regulation actually applies to.`,
      },
      {
        type: `paragraph`,
        text: `Nobody has documented how to connect the governance framework to the running system. The compliance artifacts describe what must happen. The chatbot is what is happening.`,
      },
      {
        type: `paragraph`,
        text: `Between those two things there is usually a process document, a ticketing workflow and a lot of trust.`,
      },
      {
        type: `paragraph`,
        text: `Let's take the example of Company A (a fictional company). Its compliance team has a signed-off oversight policy. One Friday, an engineer changes the chatbot's system prompt to widen its scope. Nobody outside engineering finds out.`,
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
        text: `Article 14 of the EU AI Act requires human oversight over high-risk AI systems. In particular, humans must be able to:`,
      },
      {
        type: `unordered-list`,
        items: [
          `Duly monitor the AI system's operation, including detecting anomalies, dysfunctions and unexpected performance`,
          `Understand the system's outputs and their significance`,
          `Override, interrupt or halt the system when necessary`,
          `Detect and address failures, including unexpected behavior`,
        ],
      },
      {
        type: `paragraph`,
        text: `The key words are "identified and built, when technically feasible, into the high-risk AI system by the provider" (Art. 14(3)(a)). For those measures, that makes it an engineering requirement, not a governance document requirement.`,
      },
      {
        type: `paragraph`,
        text: `The oversight mechanism must be built into how the system executes. It cannot be bolted on afterwards through a process.`,
      },
      {
        type: `paragraph`,
        text: `For a LangChain RAG chatbot, this means the human oversight gate lives inside the chain execution path. A spreadsheet that someone reviews monthly is not the place for it.`,
      },
      {
        type: `h2`,
        text: `The Architecture: Warden as Governance Sidecar`,
      },
      {
        type: `paragraph`,
        text: `The Spec-Drift Chronometer does this with a governance sidecar. The chatbot does not check its own compliance. Instead, it consults an independent Warden Engine on every execution.`,
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
        text: `The Warden Engine monitors the divergence between the production codebase and the human-authored specification files stored in .kiro/steering/.`,
      },
      {
        type: `paragraph`,
        text: `Say a developer changes the chatbot's system prompt, swaps out the embedding model or modifies retrieval parameters without governance sign-off. The drift index rises.`,
      },
      {
        type: `paragraph`,
        text: `When it crosses the sovereign threshold, the gate triggers. Every chain execution after that is blocked until a human completes the justification workflow.`,
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
        text: `Before the integration, let's take a look at what the Warden actually measures.`,
      },
      {
        type: `paragraph`,
        text: `The drift score is the fraction of meaningful tokens in the latest code change that are absent from the vocabulary of the human-authored spec files.`,
      },
      {
        type: `paragraph`,
        text: `A change that introduces new architectural concepts not covered by the approved spec scores higher. A refactor that only uses terms already in the spec scores lower.`,
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
          `Performance optimizations using the same approved approach`,
        ],
      },
      {
        type: `paragraph`,
        text: `Company A's Friday prompt change is in the first list. It gives the chatbot a different scope, so it would typically need human sign-off.`,
      },
      {
        type: `paragraph`,
        text: `Note: You do not have to list these categories by hand. The Warden reads your spec files, reads the git diff and computes the divergence. The human-authored specs in .kiro/steering/ are the source of truth.`,
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
        text: `The dependencies are langchain-core, langchain-community, faiss-cpu and requests. You do not need any new AI frameworks.`,
      },
      {
        type: `h3`,
        text: `Step 2: The Warden client`,
      },
      {
        type: `paragraph`,
        text: `warden_client.py is a 50-line HTTP wrapper. It polls the Warden Engine's /drift endpoint and returns a typed DriftStatus object.`,
      },
      {
        type: `paragraph`,
        text: `It also exposes submit_justification for programmatic approval workflows.`,
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
        text: `warden_callback.py implements BaseCallbackHandler. The one method that matters is on_chain_start. It fires before every chain execution and checks the gate.`,
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
        text: `The full implementation also handles connectivity failures, warning-only mode and structured error messages. Those messages tell the operator exactly what to do.`,
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
        text: `The with_config(callbacks=[handler]) pattern works with any LCEL chain, LangGraph graph or LangChain agent. The chain itself does not change. The Warden observes it from outside.`,
      },
      {
        type: `paragraph`,
        text: `Protip: skip_on_warden_unavailable=True keeps the chatbot running if the Warden is down. For high-risk systems, read the deployment section below before you go live.`,
      },
      {
        type: `h2`,
        text: `What the Operator Sees When the Gate Triggers`,
      },
      {
        type: `paragraph`,
        text: `Back to Company A. The engineer commits the unapproved prompt change and the drift crosses the sovereign threshold. The next API call to the chatbot returns this instead of a generated answer:`,
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
        text: `The operator opens the dashboard and sees the drift chart. The Warden activity log shows which file changed. The operator then submits a justification that explains the change.`,
      },
      {
        type: `paragraph`,
        text: `The Warden Agent evaluates the justification against the spec files and returns an Intent Alignment Score.`,
      },
      {
        type: `paragraph`,
        text: `Example: A substantive justification such as "Migrating from GPT-3.5 to GPT-4o-mini, approved by architecture review board 2026-06-10, ticket ARCH-291" scores 91/100 and is APPROVED. A weak one ("updated model") scores 29/100 and is REJECTED.`,
      },
      {
        type: `paragraph`,
        text: `Once a justification is APPROVED, the gate clears. The chatbot accepts queries again on the next execution.`,
      },
      {
        type: `paragraph`,
        text: `Every gate event is written to .kiro/audit/last_sync.audit: the justification text, drift value, Warden decision, reasoning trace and SHA-256 verification hash. You can download the file directly from the dashboard. This is the Article 12 record-keeping artifact.`,
      },
      {
        type: `h2`,
        text: `Running the Full Example`,
      },
      {
        type: `paragraph`,
        text: `The repository includes a complete working RAG chatbot with a FAISS vector store. The Warden integration is already wired in.`,
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
        text: `Run python check.py from the integrations/langchain_rag/ directory before anything else. It checks every dependency and prints a specific fix for each failure. The cases below match what it reports.`,
      },
      {
        type: `h3`,
        text: `[FAIL] .env file present`,
      },
      {
        type: `paragraph`,
        text: `You have not copied the example file yet. Run cp .env.example .env. Then open .env and fill in your OPENAI_API_KEY.`,
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
        text: `OpenAI rejected the key. There may be a typo, the key may have been revoked or you may have copied the wrong value. Generate a new key at platform.openai.com and paste it into .env.`,
      },
      {
        type: `h3`,
        text: `[FAIL] gpt-4o-mini accessible`,
      },
      {
        type: `paragraph`,
        text: `Your account cannot access gpt-4o-mini. This model requires a paid OpenAI account with a positive credit balance.`,
      },
      {
        type: `paragraph`,
        text: `If you are on a free tier, change the model in rag_chatbot.py and langgraph_example.py to one your account can access. Check the model list in your OpenAI account settings.`,
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
        text: `The chatbot still runs, but governance checks are skipped. To enable the full governance demo, first start the Warden Engine from the repository root with DEMO_MODE=true ./dev.sh`,
      },
      {
        type: `paragraph`,
        text: `Then re-run python check.py and confirm the Warden is reachable before you start the chatbot.`,
      },
      {
        type: `h2`,
        text: `Enterprise AI Governance: Deployment Considerations`,
      },
      {
        type: `paragraph`,
        text: `Warden API availability: The skip_on_warden_unavailable=True default lets the chatbot continue if the Warden is unreachable. For high-risk systems, set it to False to enforce strict mode. Any loss of connectivity then halts execution.`,
      },
      {
        type: `paragraph`,
        text: `Latency: The /drift poll adds one HTTP round trip per chain invocation. The Warden API is designed to respond within 200 ms. For high-throughput systems, cache the gate status with a short TTL of 5 to 10 seconds instead of polling on every call.`,
      },
      {
        type: `paragraph`,
        text: `Multi-tenant deployments: Give each project its own Warden instance and its own .kiro/steering/ spec vault. The spec files define what sovereign looks like for that one system. If you share them across products, the drift scores become meaningless.`,
      },
      {
        type: `paragraph`,
        text: `DynamoDB audit trail: In production, set DYNAMODB_TABLE_NAME and AWS credentials. Every gate event is then stored in DynamoDB with a configurable retention TTL. That gives you a durable, queryable audit trail for regulatory inspections and incident reviews.`,
      },
      {
        type: `h2`,
        text: `The Compliance Argument to Your Legal Team`,
      },
      {
        type: `paragraph`,
        text: `Your legal team may ask what Article 14 evidence you can produce for a conformity assessment. With this integration, the answer is:`,
      },
      {
        type: `unordered-list`,
        items: [
          `Gate log: A timestamped record of every execution that was blocked, the justification submitted, the Warden reasoning trace and the APPROVED or REJECTED decision.`,
          `Audit trail: A downloadable SHA-256-verified file covering every governance event in the session.`,
          `Architecture documentation: The Warden callback is in the production code path, not in a process document. Human oversight is enforced at execution, not at review.`,
          `Spec vault: The human-authored specifications that define compliant behavior are version-controlled, timestamped and referenced in every Warden decision.`,
        ],
      },
      {
        type: `paragraph`,
        text: `I recommend one simple rule: count an oversight check as Article 14 evidence only if it sits in the code path and can block execution.`,
      },
      {
        type: `faq`,
        items: [
          {
            question: `Does this work with LangGraph as well as standard LangChain chains?`,
            answer: `Yes. The with_config(callbacks=[handler]) pattern is supported across LCEL chains, LangGraph graphs and LangChain agents. The Warden callback fires on chain start regardless of the graph structure. The repository includes a LangGraph example.`,
          },
          {
            question: `What happens if the Warden Engine is unavailable?`,
            answer: `By default, skip_on_warden_unavailable=True means the chatbot keeps running if the Warden cannot be reached. That suits systems where availability is the main concern. For high-risk systems where oversight is mandatory, set skip_on_warden_unavailable=False. The chatbot will then refuse to execute until the Warden is reachable.`,
          },
          {
            question: `Does this integration satisfy Article 14 on its own or are additional measures needed?`,
            answer: `This integration covers the technical enforcement side of Article 14. It makes sure human sign-off is required before architectural changes take effect in production. It does not cover the full scope of Article 14, which also asks for human-machine interface tools that let people oversee the system (Art. 14(1)). Deployers must also give oversight to people with the necessary competence, training and authority (Art. 26(2)). Risk management is a separate obligation (Art. 9). For high-risk AI systems under Annex III, this integration is one part of a broader compliance program.`,
          },
          {
            question: `What is the performance overhead of the Warden callback?`,
            answer: `One HTTP round trip per chain invocation. That is typically under 200 ms in a local deployment and under 50 ms when the Warden is co-located in the same cloud region. For high-throughput systems above 100 requests per second, cache the gate status with a 5 to 10 second TTL. That reduces the overhead and still keeps the oversight granular enough to mean something.`,
          },
          {
            question: `Can this be used with non-LangChain AI frameworks?`,
            answer: `The Warden Engine exposes a standard REST API. Any framework that can make an HTTP GET request before executing an AI chain can integrate with it. The LangChain callback is the reference implementation. Integrations for LlamaIndex and direct OpenAI API usage are on the roadmap.`,
          },
          {
            question: `Does the integration store any personal data from chatbot queries?`,
            answer: `The gate log records drift values, justification text and Warden decisions. By default, it does not record user queries or chatbot responses. If your production deployment processes personal data, apply your standard GDPR data minimization and retention policies to the DynamoDB audit table.`,
          },
        ],
      },
      {
        type: `cta`,
        heading: `Ready to Wire Compliance Into Your LangChain System?`,
        body: `The full integration code is in integrations/langchain_rag/ on GitHub. Try the live demo at spec-drift-chronometer.aevoxis.de to watch the full governance cycle in real time. For commercial deployment, enterprise licensing or a technical readiness assessment, get in touch with me.`,
        linkText: `Get in Touch`,
        linkHref: `/contact`,
      },
      {
        type: `author-bio`,
        text: `Vinita Silaparasetty is an AI Governance Engineer working under the Aevoxis Solutions name (aevoxis.de) as a member of SMartDE eG, Germany. She specializes in EU AI Act compliance architecture for enterprise AI deployments. Published author (Apress), Google Developer Expert (ML), M.Sc. Data Science Newcastle University. The Spec-Drift Chronometer is a Top 300 finalist in the AWS 10,000 AIdeas Competition 2025.`,
        disclosure: `Parts of this article were written with AI writing assistance (Claude, Anthropic). All technical concepts, integration architecture, code examples, and intellectual content are original work by the author. This article does not constitute legal advice.`,
      },
    ],
  },
];
