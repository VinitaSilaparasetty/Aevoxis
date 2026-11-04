import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, AlertTriangle, OctagonX, Info, Download, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AI_LITERACY_COURSE_PATH, JOB_AID_PDF_PATH } from "@/data/site-content";

// "Is this AI use OK?": an interactive check built on the five rules from Lesson 3 of the
// AI Literacy at Work course. Everything runs in the browser; nothing is sent or stored.

type Option = { value: string; label: string };
type Question = { id: QuestionId; legend: string; hint?: string; options: Option[] };
type QuestionId = "tool" | "input" | "people" | "check" | "audience";
type Answers = Partial<Record<QuestionId, string>>;
type Level = "go" | "caution" | "fix" | "stop";
type Finding = { level: Level; rule: string; text: string };

const questions: Question[] = [
  {
    id: "tool",
    legend: "Which AI tool are you using?",
    options: [
      { value: "approved", label: "One my organisation has approved" },
      { value: "unapproved", label: "A free or personal tool my organisation hasn't approved" },
      { value: "unsure", label: "I'm not sure" },
    ],
  },
  {
    id: "input",
    legend: "What are you putting into it?",
    hint: "Pick the most sensitive thing in your prompt or upload.",
    options: [
      { value: "public", label: "Only public information or a generic question" },
      { value: "personal", label: "Personal data: names, contact details, health, HR or customer records" },
      { value: "confidential", label: "Confidential business information: plans, deals, prices, unreleased results" },
      { value: "unsure", label: "I'm not sure" },
    ],
  },
  {
    id: "people",
    legend: "Will the result be used to decide something about a person?",
    hint: "For example hiring, performance, a customer complaint or credit.",
    options: [
      { value: "no", label: "No" },
      { value: "suggests", label: "Yes, the AI suggests and a person decides" },
      { value: "decides", label: "Yes, the AI decides, ranks or filters on its own" },
    ],
  },
  {
    id: "check",
    legend: "Will you check the output before you use it?",
    hint: "Facts, figures, quotes and links, and every source it gives you.",
    options: [
      { value: "yes", label: "Yes, I'll verify it" },
      { value: "none", label: "There's nothing to check: no facts, figures or sources" },
      { value: "no", label: "No, it looks right" },
    ],
  },
  {
    id: "audience",
    legend: "Who will see or rely on the result?",
    options: [
      { value: "me", label: "Only me" },
      { value: "open", label: "Colleagues, customers or the public, and I'll say AI helped" },
      { value: "hidden", label: "Colleagues, customers or the public, without saying AI was used" },
    ],
  },
];

const examples: Array<{ name: string; story: string; answers: Required<Answers> }> = [
  {
    name: "The angry customer email",
    story: "Summarise a complaint that includes the customer's name, address and order history, in a free chatbot.",
    answers: { tool: "unapproved", input: "personal", people: "no", check: "yes", audience: "me" },
  },
  {
    name: "The impressive statistic",
    story: "Send Tom an AI-drafted market update with a linked figure you haven't opened.",
    answers: { tool: "approved", input: "public", people: "no", check: "no", audience: "open" },
  },
  {
    name: "200 CVs",
    story: "Have AI rank 200 applications and auto-reject the bottom half.",
    answers: { tool: "approved", input: "personal", people: "decides", check: "yes", audience: "me" },
  },
];

const rank: Record<Level, number> = { go: 0, caution: 1, fix: 2, stop: 3 };

function assess(a: Required<Answers>): Finding[] {
  const f: Finding[] = [];
  const sensitive = a.input !== "public";
  const unapproved = a.tool !== "approved";

  if (unapproved && sensitive) {
    f.push({
      level: "stop",
      rule: "Rule 1: Protect data",
      text:
        a.input === "unsure"
          ? "If you're not sure what's in it, treat it as confidential. Don't paste it into a tool your organisation hasn't approved."
          : "Don't paste this into a tool your organisation hasn't approved. Use an approved tool, or remove the personal and confidential details first. GDPR still applies when you use AI.",
    });
  } else if (unapproved) {
    f.push({
      level: "caution",
      rule: "Rule 1: Protect data",
      text: "Public information and generic questions are low-risk. Still, check your organisation's AI policy on which tools you may use.",
    });
  } else if (sensitive) {
    f.push({
      level: "caution",
      rule: "Rule 1: Protect data",
      text: "An approved tool is the right place for this. Share only what the task needs, and follow your organisation's policy for this kind of data.",
    });
  } else {
    f.push({ level: "go", rule: "Rule 1: Protect data", text: "Approved tool and nothing sensitive: no data concerns." });
  }

  if (a.people === "decides") {
    f.push({
      level: "stop",
      rule: "Rule 4: A human decides",
      text: "AI must not make decisions about people on its own. Uses like hiring and credit are high-risk under the EU AI Act, and GDPR already limits fully automated decisions about people. Let AI suggest; a person reviews every case, decides and is accountable.",
    });
  } else if (a.people === "suggests") {
    f.push({
      level: "caution",
      rule: "Rule 4: A human decides",
      text: "Fine if a person really reviews every case and can overrule the AI. For hiring, performance or credit, ask HR or legal to confirm the process before it touches real people.",
    });
  }

  if (a.check === "no") {
    f.push({
      level: "fix",
      rule: "Rule 2: Check before you use",
      text: "AI predicts likely words; it can invent facts, figures, quotes and sources that look real. Open every source and confirm it says what the AI claims. If it doesn't, it goes.",
    });
  } else if (a.check === "yes") {
    f.push({ level: "go", rule: "Rule 2: Check before you use", text: "Good. Treat the output as a draft until you've verified it." });
  }

  if (a.audience === "hidden") {
    f.push({
      level: "fix",
      rule: "Rule 3: Be open",
      text: "Say when content was made or heavily shaped by AI, especially if people will rely on it or could mistake it for real.",
    });
  } else if (a.audience === "open") {
    f.push({ level: "go", rule: "Rule 3: Be open", text: "Good. Saying AI helped lets people judge the content fairly." });
  }

  return f.sort((x, y) => rank[y.level] - rank[x.level]);
}

const verdicts: Record<Level, { title: string; body: string; icon: typeof CheckCircle2; tone: string }> = {
  stop: {
    title: "Stop: don't do this as planned",
    body: "At least one part of this could harm people or break the rules. Change the plan first, or ask your manager or AI contact.",
    icon: OctagonX,
    tone: "border-red-500/70 bg-red-500/10",
  },
  fix: {
    title: "Fix this first",
    body: "You can use AI here, but not yet. Sort out the points below before you send or publish anything.",
    icon: AlertTriangle,
    tone: "border-amber-500/70 bg-amber-500/10",
  },
  caution: {
    title: "Go ahead, with care",
    body: "This looks reasonable. Keep the points below in mind.",
    icon: Info,
    tone: "border-accent/70 bg-accent/10",
  },
  go: {
    title: "Looks OK",
    body: "Nothing here breaks the five rules. Your organisation's own AI policy still comes first.",
    icon: CheckCircle2,
    tone: "border-emerald-500/70 bg-emerald-500/10",
  },
};

const levelLabel: Record<Level, string> = { stop: "Stop", fix: "Fix first", caution: "Take care", go: "OK" };

const h2 = "text-2xl sm:text-3xl font-bold text-foreground mt-16 mb-6 tracking-tight";
const p = "text-lg text-muted-foreground leading-relaxed mb-5";
const link = "text-primary underline underline-offset-4 hover:text-accent";

export default function AiUseCheckerPage() {
  const [answers, setAnswers] = useState<Answers>({});
  const [example, setExample] = useState<string | null>(null);
  const answered = questions.filter((q) => answers[q.id]).length;
  const complete = answered === questions.length;
  const findings = complete ? assess(answers as Required<Answers>) : [];
  const overall: Level = findings.reduce<Level>((w, f) => (rank[f.level] > rank[w] ? f.level : w), "go");
  const verdict = verdicts[overall];
  const VerdictIcon = verdict.icon;

  const choose = (id: QuestionId, value: string) => {
    setExample(null);
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <article className="relative pt-36 pb-24 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
            Interactive tool · From the AI Literacy at Work course
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4 tracking-tight">
            Is this AI use OK?
          </h1>
          <p className="text-xl text-foreground/80 italic mb-8">
            Five quick questions about what you're about to do, checked against five simple rules
          </p>

          <p className={p}>
            Answer each question about the task in front of you, or load one of the course scenarios to see how it
            works. Your answers stay in your browser: nothing is sent or saved.
          </p>

          <div className="mb-10">
            <p className="text-foreground font-semibold mb-3">Try a scenario from the course</p>
            <div className="grid sm:grid-cols-3 gap-3">
              {examples.map((ex) => (
                <button
                  key={ex.name}
                  type="button"
                  onClick={() => {
                    setAnswers(ex.answers);
                    setExample(ex.name);
                  }}
                  aria-pressed={example === ex.name}
                  className={`text-left rounded-2xl border p-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    example === ex.name ? "border-accent bg-accent/10" : "border-border bg-secondary/40 hover:border-accent/60"
                  }`}
                >
                  <span className="block font-semibold text-foreground mb-1">{ex.name}</span>
                  <span className="block text-sm text-muted-foreground">{ex.story}</span>
                </button>
              ))}
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
            {questions.map((q, qi) => (
              <fieldset key={q.id} className="rounded-2xl border border-border bg-secondary/40 p-5 sm:p-6">
                <legend className="float-left w-full text-lg font-semibold text-foreground">
                  <span className="text-accent mr-2">{qi + 1}.</span>
                  {q.legend}
                </legend>
                {q.hint && <p className="clear-left text-sm text-muted-foreground pt-1">{q.hint}</p>}
                <div className="clear-left pt-4 space-y-2">
                  {q.options.map((o) => {
                    const id = `${q.id}-${o.value}`;
                    const checked = answers[q.id] === o.value;
                    return (
                      <label
                        key={o.value}
                        htmlFor={id}
                        className={`flex items-start gap-3 rounded-xl border p-3 cursor-pointer transition-colors ${
                          checked ? "border-accent bg-accent/10" : "border-border hover:border-accent/60"
                        }`}
                      >
                        <input
                          id={id}
                          type="radio"
                          name={q.id}
                          value={o.value}
                          checked={checked}
                          onChange={() => choose(q.id, o.value)}
                          className="mt-1 h-4 w-4 accent-[hsl(var(--primary))]"
                        />
                        <span className="text-muted-foreground">{o.label}</span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}
          </form>

          <section aria-live="polite" className="mt-10">
            {!complete ? (
              <p className="rounded-2xl border border-dashed border-border p-5 text-muted-foreground">
                {answered} of {questions.length} answered. Your result appears here once all five are done.
              </p>
            ) : (
              <div className={`rounded-2xl border-2 p-6 ${verdict.tone}`}>
                <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground tracking-tight mb-2">
                  <VerdictIcon className="w-7 h-7 shrink-0" aria-hidden="true" />
                  {verdict.title}
                </h2>
                <p className="text-muted-foreground mb-5">{verdict.body}</p>
                <ul className="space-y-3">
                  {findings.map((f) => (
                    <li key={f.rule} className="rounded-xl bg-background/70 border border-border p-4">
                      <p className="text-sm font-semibold text-foreground mb-1">
                        {f.rule} · <span className="text-muted-foreground">{levelLabel[f.level]}</span>
                      </p>
                      <p className="text-muted-foreground">{f.text}</p>
                    </li>
                  ))}
                  <li className="rounded-xl bg-background/70 border border-border p-4">
                    <p className="text-sm font-semibold text-foreground mb-1">Rule 5: Speak up</p>
                    <p className="text-muted-foreground">
                      If the AI gives a biased, harmful or badly wrong result, report it. Mistakes caught early are cheap.
                    </p>
                  </li>
                </ul>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-2xl mt-5"
                  onClick={() => {
                    setAnswers({});
                    setExample(null);
                  }}
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Start again
                </Button>
              </div>
            )}
          </section>

          <p className="text-sm text-muted-foreground mt-6">
            This checker is general guidance for everyday office use, not legal advice. Your organisation's own AI
            policy always comes first.
          </p>

          <h2 className={h2}>The five rules behind it</h2>
          <ol className="list-decimal pl-6 space-y-2 mb-6 text-lg text-muted-foreground">
            <li><strong className="text-foreground">Protect data.</strong> No personal or confidential information in tools your organisation hasn't approved.</li>
            <li><strong className="text-foreground">Check before you use.</strong> Verify facts, figures, quotes and links.</li>
            <li><strong className="text-foreground">Be open.</strong> Say when content was made or heavily shaped by AI.</li>
            <li><strong className="text-foreground">A human decides.</strong> AI can suggest; a person decides about people.</li>
            <li><strong className="text-foreground">Speak up.</strong> Report biased, harmful or badly wrong results.</li>
          </ol>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="outline" className="rounded-2xl px-6">
              <a href={JOB_AID_PDF_PATH} download>
                <Download className="w-4 h-4 mr-2" />
                One-page job aid (PDF)
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-2xl px-6">
              <Link to={AI_LITERACY_COURSE_PATH}>
                How the course was designed
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <p className={`${p} mt-8`}>
            The checker and the rules come from{" "}
            <Link to={AI_LITERACY_COURSE_PATH} className={link}>
              AI Literacy at Work
            </Link>
            , a 20-minute course I designed for non-technical staff.
          </p>
        </div>
      </article>

      <Footer />
    </main>
  );
}
