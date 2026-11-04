import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AI_USE_CHECKER_PATH, JOB_AID_PDF_PATH, HIRING_REDESIGN_PATH } from "@/data/site-content";

// Learning-design case study for "AI Literacy at Work", a 20-minute Articulate Rise course.
// Self-initiated, not client work, and not yet run with learners: the page says so and claims no results.
// Source: the "AI Literacy at Work: Rise Module Storyboard" Claude Doc, 4 Nov 2026.
// The Digital Omnibus wording on Article 4 comes from secondary summaries; confirm against EUR-Lex.

const atAGlance: string[][] = [
  ["Course", "AI Literacy at Work: Using AI Tools Safely under the EU AI Act"],
  ["Audience", "Office staff in EU organisations that use tools like ChatGPT or Copilot; no technical background"],
  ["Length", "About 20 minutes: four lessons and a final quiz"],
  ["Format", "Articulate Rise, responsive, works on phone and desktop"],
  ["Assessment", "Six-question quiz, pass mark 80%, retakes allowed"],
  ["My role", "Needs analysis, learning objectives, storyboard and all screen text, interaction design, assessment"],
  ["Status", "Self-initiated portfolio course, not client work. Fully storyboarded; not yet run with learners"],
];

const objectives: string[][] = [
  ["1", "Explain in plain words how generative AI produces answers and why it makes mistakes", "Lesson 1 knowledge check; quiz Q1"],
  ["2", "Describe the AI Act's four risk levels and their employer's AI-literacy duty", "Lesson 2 sorting activity; quiz Q2–Q4"],
  ["3", "Apply five safe-use rules: protect data, check outputs, be open, keep a human in charge, speak up", "Lesson 3 knowledge check; quiz Q5"],
  ["4", "Choose the safe action in three realistic workplace scenarios", "Lesson 4 scenarios; quiz Q6"],
];

const structure: string[][] = [
  ["1. What AI tools really do", "4 min", "AI predicts likely text; it doesn't look up the truth", "Myth-and-reality flashcards, a four-step process, a knowledge check"],
  ["2. The EU AI Act in plain language", "6 min", "The Act sorts AI by risk, and employers must support AI literacy", "Risk-level tabs, a drag-to-sort activity, a timeline"],
  ["3. Five rules for using AI at work", "4 min", "Five habits cover most everyday risk", "An accordion of the five rules, a \"before you hit Enter\" checklist, a knowledge check"],
  ["4. Practice with real situations", "4 min", "Apply the rules where it matters", "Three branching scenarios with Mia, an operations coordinator, and her manager Tom"],
  ["Final quiz", "2 min", "Show it stuck", "Six questions, feedback after each"],
];

const choices: Array<[string, string]> = [
  [
    "Start from what people already believe.",
    "Non-technical staff arrive with confident but wrong ideas: AI looks answers up, sounds sure so it is right, is neutral, keeps what you type private. Lesson 1 opens with those four myths as flip cards, so each one is named and corrected before any rule is taught.",
  ],
  [
    "Explain the mechanism, so the rules follow from it.",
    "A four-step process shows how a chatbot answers, and the last step is always \"You check the result\". Once learners see that AI predicts likely words, \"check before you use\" isn't an order to follow; it's the obvious thing to do.",
  ],
  [
    "Make the law a sorting task, not a reading task.",
    "Learners drag familiar tools (a spam filter, a website chatbot, a tool that ranks job applicants, a system that scores staff from their social media) onto the four risk levels. They use the categories instead of reading a definition of them.",
  ],
  [
    "Five rules, short enough to remember.",
    "Protect data, check, be open, a human decides, speak up. Each rule is one line with a reason, and the lesson ends with a three-question checklist people can run in ten seconds before they press Enter.",
  ],
  [
    "Scenarios with a third, \"safe but not best\" answer.",
    "Real choices are rarely right against wrong. Each scenario has a risky option, a best option and an over-cautious one, such as not using AI at all. The cautious answer gets gentle feedback instead of a cross, because the goal is to use AI well, not to stop using it. Every piece of feedback names the rule it comes from, and learners return to the decision until they find the best answer.",
  ],
  [
    "Assessment that matches the objectives.",
    "Every objective is practised in its lesson and checked again in the final quiz. The pass mark is 80% with retakes allowed, and the correct answer is explained after each question, so the quiz teaches as well as tests.",
  ],
  [
    "Honest about the law and about policy.",
    "The course says it is general guidance, not legal advice, puts the organisation's own AI policy first, and ends with an \"information correct as of\" date, because the rules are still changing.",
  ],
  [
    "Built for phones and for everyone.",
    "Rise is responsive, so the course works on a phone between meetings. Every image gets alt text and the build checklist includes contrast checks and a preview at phone size.",
  ],
];

const scenarios: Array<{ title: string; setup: string; rows: string[][] }> = [
  {
    title: "A: The angry customer email",
    setup:
      "Mia gets a long complaint and wants AI to summarise it. The email includes the customer's name, address and order history. Tom: \"Can you get me the gist in five minutes?\"",
    rows: [
      ["Paste the whole email into a free public chatbot", "Risky", "That shares personal data with an unapproved tool. Rule 1: protect data."],
      ["Remove the personal details, then use the company's approved AI tool", "Best", "Approved tool, no personal data, and Mia still reads the summary against the original."],
      ["Don't use AI; read it herself", "Safe, not best", "Safe, but not necessary. AI can help here when used properly."],
    ],
  },
  {
    title: "B: The impressive statistic",
    setup: "AI drafts a market update for Tom that says \"78% of competitors already use AI agents\", with a link.",
    rows: [
      ["Send it; the source is linked", "Risky", "AI can invent sources. Rule 2: check before you use."],
      ["Open the link and confirm the figure before sending", "Best", "If the page doesn't say it, the figure goes."],
      ["Delete every number from the draft to be safe", "Safe, not best", "Safe, but you lose useful information. Verifying is better than deleting."],
    ],
  },
  {
    title: "C: 200 CVs",
    setup: "Tom: \"Let's have AI rank the 200 applications and auto-reject the bottom half.\"",
    rows: [
      ["Set it up as asked", "Risky", "Hiring is a high-risk use under the AI Act, and GDPR already limits fully automated decisions about people. Rule 4: a human decides."],
      ["Suggest AI helps sort, a person reviews every application, and HR or legal confirms the process first", "Best", "AI supports; people decide, and the process is checked before it touches real candidates."],
      ["Refuse to use AI for hiring at all", "Safe, not best", "Cautious, and sometimes right. But AI can assist hiring if humans stay in control and the rules are followed."],
    ],
  },
];

const h2 = "text-2xl sm:text-3xl font-bold text-foreground mt-16 mb-6 tracking-tight";
const h3 = "text-xl font-bold text-foreground mt-10 mb-3 tracking-tight";
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

export default function AiLiteracyCoursePage() {
  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <article className="relative pt-36 pb-24 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
            Learning design · Self-initiated course
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-4 tracking-tight">
            AI Literacy at Work: Designing a 20-Minute Course for Non-Technical Staff
          </h1>
          <p className="text-xl text-foreground/80 italic mb-8">
            Who the course is for, what it teaches, and why each screen is built the way it is
          </p>

          <div className="rounded-2xl border border-accent/60 bg-secondary/60 p-5 mb-8">
            <p className="text-foreground font-semibold mb-2">Please read this first</p>
            <p className="text-muted-foreground leading-relaxed">
              This is a course I designed on my own initiative to show my learning-design process. It is not client
              work and has not yet been run with learners, so this page describes the design, not results. The course
              explains the rules for learning purposes and is not legal advice.
            </p>
          </div>

          <p className={p}>
            Most AI training for office staff is either a tool demo or a slide deck about the law. Neither changes
            what people do at their desks. This course aims at the moment that matters: just before someone pastes
            something into a chatbot, or uses what it gives back.
          </p>

          <h2 className={h2}>At a glance</h2>
          <Table head={["", "Details"]} rows={atAGlance} />

          <h2 className={h2}>Why this course</h2>
          <p className={p}>
            Since 2 February 2025, Article 4 of the EU AI Act has required organisations that use AI to act on their
            staff's AI literacy. The Digital Omnibus on AI (Regulation (EU) 2026/1744) changed the wording to
            "take measures to support" it rather than guarantee a set level, but an organisation that does nothing
            still doesn't comply. Any company using ChatGPT, Copilot or an AI feature in its software counts as a
            deployer, so the duty reaches far beyond tech firms.
          </p>
          <p className={p}>
            That makes short, practical training a real need for ordinary teams, and it has to work for people who
            will never read the regulation.
          </p>

          <h2 className={h2}>Who it's for</h2>
          <p className={p}>
            Office staff in EU organisations: operations, sales, HR, customer service. They already use AI tools, or
            soon will, and have no technical background. They have little time, may take the course on a phone, and
            their real questions are practical: "Can I paste this?", "Can I trust this?", "Am I allowed to do this?"
          </p>
          <p className={p}>
            So the course is short, uses workplace situations rather than technical ones, and every lesson ends with
            something the learner does, not just something they read.
          </p>

          <h2 className={h2}>Learning objectives</h2>
          <p className={p}>By the end, learners can do four things. Each one is practised and then assessed.</p>
          <Table head={["#", "Objective", "Practised and assessed in"]} rows={objectives} />

          <h2 className={h2}>Course structure</h2>
          <Table head={["Lesson", "Time", "The point", "Main interaction"]} rows={structure} />

          <h2 className={h2}>Design choices</h2>
          <ul className="space-y-5 mb-6 text-lg text-muted-foreground">
            {choices.map(([b, rest]) => (
              <li key={b}>
                <strong className="text-foreground">{b}</strong> {rest}
              </li>
            ))}
          </ul>

          <h2 className={h2}>The scenarios</h2>
          <p className={p}>
            Lesson 4 follows Mia, an operations coordinator, and her manager Tom through three everyday decisions. Each
            choice shows its feedback, then returns to the decision until the best answer is chosen.
          </p>
          {scenarios.map((s) => (
            <section key={s.title}>
              <h3 className={h3}>{s.title}</h3>
              <p className={p}>{s.setup}</p>
              <Table head={["Choice", "Result", "Feedback"]} rows={s.rows} />
            </section>
          ))}
          <p className={p}>
            Scenario C deliberately touches a high-risk use. For how I'd design a hiring process that keeps people in
            charge, see{" "}
            <Link to={HIRING_REDESIGN_PATH} className={link}>
              my redesign of a real 2017 hiring round
            </Link>
            .
          </p>

          <h2 className={h2}>Beyond the course</h2>
          <p className={p}>
            A course is over in 20 minutes; the decisions happen every day after it. Two tools take Lesson 3 back to
            the desk.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="rounded-2xl border border-border bg-secondary/40 p-5">
              <p className="text-foreground font-semibold mb-2">One-page job aid</p>
              <p className="text-muted-foreground mb-4">
                "Five rules before you hit Enter": the ten-second check, the five rules and what's safe to paste, on
                one printable A4 page.
              </p>
              <Button asChild variant="outline" className="rounded-2xl">
                <a href={JOB_AID_PDF_PATH} download>
                  <Download className="w-4 h-4 mr-2" />
                  Download the PDF
                </a>
              </Button>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 p-5">
              <p className="text-foreground font-semibold mb-2">"Is this AI use OK?" checker</p>
              <p className="text-muted-foreground mb-4">
                Answer five questions about what you're about to do and get a go, fix-first or stop, with the rule
                behind it.
              </p>
              <Button asChild variant="outline" className="rounded-2xl">
                <Link to={AI_USE_CHECKER_PATH}>
                  Try the checker
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>

          <h2 className={h2}>Limitations</h2>
          <p className={p}>
            The course has not yet been run with learners, so there is no completion, quiz or behaviour data. The
            natural next step is a pilot with one team, measuring quiz results and asking a month later which rules
            people actually use. The AI Act is still changing, so the course ends with an "information correct as of"
            date, and its dates need confirming against the official text before each release.
          </p>

          <div className="premium-card premium-card-cyan p-8 mt-16">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                Need AI-literacy training for your team?
              </h2>
              <p className={p}>
                I design short, practical courses that help people use AI well and meet the AI Act's literacy duty. If
                you'd like one adapted to your tools and your AI policy, I'd be glad to talk.
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
