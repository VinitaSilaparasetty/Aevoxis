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
  metaDescription: string;
  canonicalPath: string;
  author: string;
  authorRole: string;
  publishedDate: string;
  readingTime: string;
  excerpt: string;
  tags: string[];
  liveDemo?: { label: string; href: string };
  sourceCode?: { label: string; href: string };
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: `eu-ai-act-articles-12-13-14-technical-implementation`,
    title: `EU AI Act Articles 12, 13 and 14: A Technical Implementation Guide`,
    metaDescription: `A working implementation of EU AI Act human oversight and logging requirements using real-time drift detection, a Justification Gate, and a cryptographically verifiable audit trail. Live demo included.`,
    canonicalPath: `/blog/eu-ai-act-articles-12-13-14-technical-implementation`,
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
        text: `Vinita Silaparasetty is an AI Governance Engineer and founder of Aevoxis Solutions, operating under SMartDe eG, Germany. Published author (Apress), Google Developer Expert (ML), M.Sc. Data Science Newcastle University (Russell Group). The Spec-Drift Chronometer was developed as an entry for the AWS 10,000 AIdeas Competition 2025, Top 300 Finalist from over 10,000 global submissions.`,
        disclosure: `Parts of this article were written with AI writing assistance (Claude, Anthropic). All technical concepts, system architecture, implementation decisions, and intellectual content are original work by the author. The Spec-Drift Chronometer was designed, built, and documented by Vinita Silaparasetty.`,
      },
    ],
  },
];
