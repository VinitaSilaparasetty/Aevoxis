import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CASE_STUDY_PATH, SCENARIOS_PATH } from "@/data/site-content";

// "Then and now": a real 2017 hiring round Vinita ran by hand for her mother's tutoring business,
// redesigned as an EU-compliant AI workflow. The redesign has not been built or used, so the page is
// labelled an illustrative redesign and never a case study or client work. No applicant data appears.
// Source: claude.ai "Case study writing" chat and its Claude Doc, 31 Oct 2026.

const atAGlance: Array<[string, string]> = [
  ["The business", "A small, family-run tutoring business"],
  ["Roles hired", "A Commerce teacher, an IB/IGCSE teacher and a statistical analyst"],
  ["Then (2017, real)", "I advertised three roles on Indeed and read, compared and sorted every application by hand"],
  ["Now (2026, illustrative)", "The same hiring round, redesigned as an AI workflow for a small business in Germany today"],
  ["My role", "Then: I ran the hiring for the family business. Now: AI governance engineer, designing the workflow and its compliance"],
  ["Rules applied", "EU AI Act, GDPR, German anti-discrimination law (AGG)"],
  ["Outcome", "A hiring workflow where AI saves time on reading and admin, and people make every decision"],
  ["Status", "Illustrative redesign, not yet used in a live hiring round"],
];

const painPoints: Array<[string, string]> = [
  ["Time:", "reading every CV in full, even clearly unsuitable ones."],
  ["Inconsistency:", "without written criteria, each application was judged slightly differently."],
  ["Hidden bias:", "names, photos and personal details were visible during screening."],
  ["Data left behind:", "applications, including CVs from people who weren't hired, stayed in the inbox for years."],
];

const rules: string[][] = [
  ["AI Act, Annex III point 4", "AI used to recruit or select people, for example to place targeted job ads, analyse and filter applications, or evaluate candidates, is high-risk", "2 Dec 2027"],
  ["AI Act, Art. 6(3)", "An Annex III system is not high-risk if it only does a narrow procedural or preparatory task and doesn't materially influence the decision, but never if it profiles people", "2 Dec 2027"],
  ["AI Act, Art. 5", "Emotion recognition in the workplace is banned", "Since Feb 2025"],
  ["GDPR, Art. 22", "People have the right not to be subject to a decision based solely on automated processing that significantly affects them", "Since 2018"],
  ["GDPR, Art. 35", "A data protection impact assessment is needed for high-risk processing, such as new technology used on applicants' data", "Since 2018"],
  ["AGG", "Applicants must not be disadvantaged because of gender, ethnic origin, religion, disability, age or sexual identity; rejected applicants can claim within two months", "In force"],
];

const aiMayMayNot: string[][] = [
  ["Draft the job ad text for the owner to edit", "Decide who sees the job ad (targeted ad placement is high-risk)"],
  ["Remove names, photos, age and other personal markers from CVs", "Score, rank or shortlist candidates"],
  ["Extract facts into fixed fields: subjects, curricula, years of teaching, qualifications, availability", "Recommend who to interview or reject"],
  ["Draft interview invitations and polite rejection emails for a person to send", "Analyse video, voice or facial expressions in interviews"],
  ["Log what it did, for review", "Send any decision to a candidate on its own"],
];

const stages: Array<{ name: string; detail: string; ai: boolean }> = [
  { name: "1  Job ad written", detail: "The owner writes the criteria first; AI drafts the ad text, the owner edits it · Mistral", ai: true },
  { name: "2  Applications arrive", detail: "Form with a privacy notice that explains the AI step; talent pool only with consent · n8n", ai: false },
  { name: "3  Personal details removed", detail: "Names, photos, age and addresses removed before anyone screens the CV · Presidio", ai: true },
  { name: "4  Facts extracted", detail: "Subjects, curricula, years of teaching, qualifications; no scores or rankings · Flowise, Mistral EU", ai: true },
  { name: "5  The owner screens every application", detail: "Against the written criteria, with the anonymised summary and the original CV side by side", ai: false },
  { name: "6  Interviews", detail: "Run by people; no AI video or voice analysis (emotion recognition at work is banned, Art. 5)", ai: false },
  { name: "7  Decision and reply", detail: "A person decides; AI may draft the email, a person checks and sends it", ai: true },
  { name: "8  Data deleted after 6 months", detail: "Rejected applicants' data removed once the claim period is over · scheduled n8n job", ai: false },
  { name: "9  Logged and reviewed monthly", detail: "Every AI step recorded; checked for errors and unfair patterns · Langfuse", ai: false },
];

const thenNow: string[][] = [
  ["Time: reading every CV in full", "AI turns each CV into a short summary with the same fields; the owner still reads every application, just faster", "3, 4"],
  ["Inconsistency: no written criteria", "Criteria are written down before the job ad goes out, and every summary uses the same fields", "1, 4"],
  ["Hidden bias: names, photos and personal details visible", "Names, photos, age and other personal markers are removed before anyone screens", "3"],
  ["Data left behind: CVs kept in the inbox for years", "Rejected applicants' data is deleted 6 months after the rejection; a talent pool only with consent", "8"],
];

const complianceMap: string[][] = [
  ["AI Act Annex III / Art. 6(3): stay out of high-risk", "AI only drafts, anonymises and extracts facts; no scoring, ranking or recommending; assessment documented and registered (Art. 6(4), 49(2))", "1, 3, 4"],
  ["AI Act Art. 5: no emotion recognition at work", "Interviews are run by people, with no video or voice analysis", "6"],
  ["AI Act Art. 4: AI literacy", "The owner gets short training on what the AI does and doesn't do, recorded in a simple training log", "Set-up"],
  ["GDPR Art. 6: lawful basis", "Steps taken at the applicant's request before a possible contract (Art. 6(1)(b))", "2"],
  ["GDPR Art. 13: transparency", "The application form explains how data is used, including the AI extraction step, and for how long it's kept", "2"],
  ["GDPR Art. 22: no solely automated decisions", "A person reviews every application and makes every decision; the AI cannot reject anyone", "5, 7"],
  ["GDPR Art. 28 and Chapter V: processors", "Mistral API through its EU endpoint, data processing agreement in the terms, training on inputs switched off", "3, 4"],
  ["GDPR Art. 35: impact assessment", "A data protection impact assessment is carried out before launch, as AI is used on applicants' data", "Set-up"],
  ["AGG: no discrimination", "Screening uses anonymised summaries; criteria are written down before the job ad goes out", "1, 3, 5"],
  ["GDPR Art. 5(1)(e) and AGG § 15(4): retention", "Rejected applicants' data is deleted 6 months after the rejection (the 2-month claim period plus 3 months to sue under § 61b ArbGG, plus a buffer); a talent pool only with separate, active consent", "8"],
  ["Oversight and accountability", "Every AI step is logged; the owner reviews the log monthly for errors or unfair patterns", "9"],
];

const ifItRanks: string[][] = [
  ["Risk management system (Art. 9)", "Use it according to its instructions (Art. 26(1))"],
  ["Data governance and bias checks on the data (Art. 10)", "Human oversight by trained, competent people (Art. 26(2))"],
  ["Technical documentation (Art. 11)", "Make sure input data is relevant and representative (Art. 26(4))"],
  ["Automatic logging (Art. 12)", "Keep the logs for at least six months (Art. 26(6))"],
  ["Instructions and transparency for deployers (Art. 13)", "Tell candidates a high-risk AI system is used in decisions about them (Art. 26(11))"],
  ["Built-in human oversight (Art. 14)", "Give an explanation of the decision on request (Art. 86)"],
  ["Accuracy, robustness and cybersecurity (Art. 15)", ""],
  ["Quality management system (Art. 17), conformity assessment and EU database registration", ""],
];

const takeaways: Array<[string, string]> = [
  ["Hands-on experience shapes the design.", "Having screened every application myself, I knew where the time actually went, which is why the AI takes on reading and admin, not judgement."],
  ["Compliance is an architecture decision.", "Where the AI sits in the workflow decides which rules apply. Choosing that early is cheaper than fixing it later."],
  ["The hard cases are where the value is.", "Hiring is high-risk, so getting it right shows how to handle any sensitive workflow."],
  ["Small businesses can use AI safely,", "with free, open-source tools and a clear line between what the AI does and what people decide."],
];

const h2 = "text-2xl sm:text-3xl font-bold text-foreground mt-16 mb-6 tracking-tight";
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

function Workflow() {
  return (
    <figure className="my-8">
      <div className="premium-card premium-card-blue p-6 sm:p-8">
        <div className="relative z-10 max-w-xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded border-2 border-accent bg-accent/15" aria-hidden="true" />
              AI assists
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-4 h-4 rounded border border-border" aria-hidden="true" />
              No AI: people or a fixed rule
            </span>
          </div>
          <ol>
            {stages.map((s, i) => (
              <li key={s.name}>
                {i > 0 && <ArrowDown className="w-5 h-5 mx-auto my-2 text-accent" aria-hidden="true" />}
                <div
                  className={
                    s.ai
                      ? "rounded-2xl border-2 border-accent bg-accent/10 p-4"
                      : "rounded-2xl border border-border bg-secondary/70 p-4"
                  }
                >
                  <p className="font-semibold text-foreground">
                    {s.name}
                    {s.ai && <span className="sr-only"> (AI assists)</span>}
                  </p>
                  <p className="text-sm text-muted-foreground">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
      <figcaption className="text-sm text-muted-foreground mt-3 text-center">
        The redesigned workflow: nine stages, AI at four of them, people make every decision.
      </figcaption>
    </figure>
  );
}

export default function HiringRedesignPage() {
  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <article className="relative pt-36 pb-24 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
            Illustrative redesign · A real 2017 hiring round, rebuilt for 2026
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4 tracking-tight">
            Then and Now: Redesigning a Real Hiring Round as an EU-Compliant AI Workflow
          </h1>
          <p className="text-xl text-foreground/80 italic mb-8">
            How I'd rebuild a hiring round I once ran by hand, with AI doing the reading and people making every
            decision
          </p>

          <div className="rounded-2xl border border-accent/60 bg-secondary/60 p-5 mb-8">
            <p className="text-foreground font-semibold mb-2">Please read this first</p>
            <p className="text-muted-foreground leading-relaxed">
              The 2017 hiring round is real. The AI workflow is a design study: it has not been built or used in a
              live hiring round, and it is not client work. No applicant names or details appear here. This page
              explains the rules for learning purposes and is not legal advice.
            </p>
          </div>

          <p className={p}>
            In 2017 I ran the hiring for my mother's tutoring business, advertising three roles and sorting every
            application by hand. Here I take that real hiring round and redesign it as an AI-assisted workflow that
            would comply with the EU AI Act and GDPR if the business operated in Germany today.
          </p>
          <p className={p}>
            The 2017 round shows where the time and the risks really were. The redesign shows how to fix them within
            the rules. The key design decision is to keep the AI out of the hiring decision, which can keep a small
            business out of the AI Act's high-risk category.
          </p>

          <h2 className={h2}>At a glance</h2>
          <Table head={["", "Details"]} rows={atAGlance} />

          <h2 className={h2}>Then: hiring by hand in 2017</h2>
          <p className={p}>
            A small business owner hiring for several roles at once spends most of their time reading applications,
            and very little choosing between good candidates.
          </p>
          <p className={p}>
            We advertised three roles on Indeed. Applications arrived as email notifications with CVs attached in
            different formats (PDF and Word). Each one had to be opened, read and compared by hand against what the
            role needed: subject knowledge, curriculum experience such as IB or IGCSE, and location.
          </p>
          <p className="text-lg text-foreground font-semibold mb-3">The pain points:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-lg text-muted-foreground">
            {painPoints.map(([b, rest]) => (
              <li key={b}>
                <strong className="text-foreground">{b}</strong> {rest}
              </li>
            ))}
          </ul>
          <p className={p}>
            Today, the obvious fix would be to let an AI tool read and rank the CVs. In the EU, that is exactly where
            the legal difficulty starts.
          </p>

          <h2 className={h2}>Now: why AI in hiring is a hard case</h2>
          <p className={p}>
            Hiring is one of the few everyday business uses that the EU AI Act treats as{" "}
            <strong className="text-foreground">high-risk</strong>, because decisions about who gets a job deeply
            affect people's lives.
          </p>
          <Table head={["Rule", "What it says", "Applies from"]} rows={rules} />
          <p className={p}>
            <strong className="text-foreground">Why this matters now:</strong> after the Digital Omnibus on AI
            (Regulation (EU) 2026/1744), the high-risk rules for hiring apply from 2 December 2027. Any business
            planning to use AI in recruitment needs to decide over the coming year where the AI sits in its process,
            because that decision sets which rules apply.
          </p>
          <p className={p}>
            <strong className="text-foreground">What this means for a small business:</strong> an AI tool that
            scores, ranks or rejects candidates makes it a deployer of a high-risk AI system. If the owner builds the
            tool themselves, they also become its <em>provider</em>, with the heaviest set of obligations in the Act.
            For a tutoring business hiring a few teachers a year, that burden is out of proportion.
          </p>

          <h2 className={h2}>The key design decision: keep the AI out of the decision</h2>
          <p className={p}>
            The workflow lets AI do the reading and admin, and leaves every judgement about a person to a person.
            That keeps it within the AI Act's Art. 6(3) exemption for preparatory tasks, while still saving most of
            the time.
          </p>
          <Table head={["AI may", "AI may not"]} rows={aiMayMayNot} />
          <p className={p}>
            <strong className="text-foreground">Why the line sits here.</strong> Extracting facts that a candidate
            wrote is a preparatory task. Evaluating whether those facts make someone a good teacher is profiling, and
            profiling removes the exemption. The extraction prompt therefore reports facts only, with no ratings,
            adjectives or comparisons, and the owner always sees the original CV alongside the summary.
          </p>
          <p className={p}>
            <strong className="text-foreground">Documenting it.</strong> A provider who relies on the Art. 6(3)
            exemption must document the assessment (Art. 6(4)) and register the system in the EU database (Art.
            49(2)). The Omnibus simplified what that registration must contain but kept the duty. The assessment
            should be checked by a lawyer, because where "fact extraction" ends and "evaluation" begins is not yet
            settled.
          </p>

          <h2 className={h2}>The redesigned workflow</h2>
          <p className={p}>
            The workflow has nine stages. AI helps at four of them, always with reading or writing, and people make
            every decision about a candidate.
          </p>
          <Workflow />
          <p className={p}>
            The AI never sees a candidate's name or photo, and never produces a score. The owner still reads every
            application, but from a short, consistent summary instead of a stack of CVs in different formats.
          </p>

          <h2 className={h2}>Then and now, side by side</h2>
          <p className={p}>Each pain point from the 2017 round maps to a specific fix in the redesign.</p>
          <Table head={["Then: the 2017 pain point", "Now: how the redesign handles it", "Stage"]} rows={thenNow} />

          <h2 className={h2}>Compliance map</h2>
          <p className={p}>
            Every requirement maps to a specific stage of the workflow, so compliance is part of the design rather
            than a document written afterwards.
          </p>
          <Table head={["Requirement", "How the workflow meets it", "Stage"]} rows={complianceMap} />
          <p className={p}>
            The workflow uses open-source, EU-friendly tools: n8n to run it, Microsoft Presidio to remove personal
            details, Flowise with the Mistral API for the extraction, and Langfuse for the log.
          </p>

          <h2 className={h2}>What changes if the AI ranks candidates</h2>
          <p className={p}>
            One extra feature, letting the AI score or shortlist applicants, would turn this into a high-risk AI
            system, and the obligations multiply. From 2 December 2027:
          </p>
          <Table
            head={["As the provider (whoever builds it)", "As the deployer (the business using it)"]}
            rows={ifItRanks}
          />
          <p className={p}>
            For a small tutoring business, that is a compliance project in its own right. The design decision here
            avoids it while keeping most of the time saved. For what the high-risk route looks like when it can't be
            avoided, see the CV-screening scenario in my{" "}
            <Link to={`${SCENARIOS_PATH}#hiring-tool-oversight`} className={link}>
              illustrative scenarios
            </Link>
            .
          </p>

          <h2 className={h2}>What this shows</h2>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-lg text-muted-foreground">
            {takeaways.map(([b, rest]) => (
              <li key={b}>
                <strong className="text-foreground">{b}</strong> {rest}
              </li>
            ))}
          </ul>
          <p className={p}>
            <strong className="text-foreground">Limitations.</strong> This is a design study based on a real hiring
            process in India in 2017, re-imagined in Germany today. It has not yet been built or used in a live
            hiring round. The natural next step is a pilot on the business's next hiring round, which would turn it
            into a measured, real-world case study. Whether fact extraction counts as a preparatory task under Art.
            6(3) is a judgement that should be checked by a lawyer before use.
          </p>
          <p className={p}>
            For real client work, see the{" "}
            <Link to={CASE_STUDY_PATH} className={link}>
              in-house AI support chatbot case study
            </Link>
            .
          </p>

          <div className="premium-card premium-card-cyan p-8 mt-16">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">Planning AI in your hiring?</h2>
              <p className={p}>
                The high-risk rules for recruitment apply from December 2027. If you want to work out where AI can sit
                in your process, and which rules that brings, I'd be glad to talk.
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
