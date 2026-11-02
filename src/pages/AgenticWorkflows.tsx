import { Link } from "react-router-dom";
import { ArrowRight, Workflow, Search, Bot, UserCheck, PackageCheck, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqList } from "@/components/FaqList";
import { InstallCommand } from "@/components/InstallCommand";
import { agenticFaq, article50Papers, openSourcePackages, CASE_STUDY_PATH, HIRING_REDESIGN_PATH } from "@/data/site-content";

const services = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "Workflow scoping",
    description:
      "We pick one process that costs your team time today and work out whether an agent should do it at all. I map the steps, the systems involved, where a mistake would be expensive and where a person must stay in charge.",
    deliverable: "You get a written design: what the agent does, what it never does alone, the tools it connects to and one metric for success.",
    variant: "cyan" as const,
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Agent development",
    description:
      "I build the workflow in Python with LangGraph, LangChain or CrewAI, on AWS Bedrock or self-hosted models, and connect it to the tools your team already uses through their APIs.",
    deliverable: "You get a working workflow running in your environment, tested against real examples from your process.",
    variant: "blue" as const,
  },
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "Oversight built in from day one",
    description:
      "Every step is logged, the agent's permissions are limited to what the task needs, and anything consequential waits for a person to approve it. If the EU AI Act applies, the same components cover Article 50 disclosure and the Articles 12–14 duties.",
    deliverable: "You get an agent you can explain, audit and stop, not a black box.",
    variant: "cyan" as const,
  },
  {
    icon: <PackageCheck className="w-8 h-8" />,
    title: "Handover",
    description:
      "The code is yours. I document how the workflow works, how to change its prompts and limits, and how to read its logs, then walk your team through it.",
    deliverable: "You get the code, documentation and a handover session so your team can run and extend it.",
    variant: "blue" as const,
  },
];

export default function AgenticWorkflowsPage() {
  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -right-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-accent/20 mb-10">
            <Workflow className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">Agentic AI workflows</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 tracking-tight text-balance">
            AI agents that do the work,{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              with people in charge
            </span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed text-pretty">
            I design and build agentic AI workflows for small and mid-sized teams: agents that handle a real process
            inside your tools, log every step and hand consequential decisions to a person. Because I also do EU AI
            Act engineering, the oversight is part of the design, not added later.
          </p>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const borderColor = service.variant === "cyan" ? "border-accent/30" : "border-primary/30";
              const iconColor = service.variant === "cyan" ? "text-accent" : "text-primary";
              const iconBg = service.variant === "cyan" ? "from-accent/20 to-accent/5" : "from-primary/20 to-primary/5";
              return (
                <div key={service.title} className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconBg} flex items-center justify-center mb-8 ${iconColor}`}>
                      {service.icon}
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">{service.title}</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  </div>
                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className={`p-8 rounded-2xl bg-secondary/60 backdrop-blur-sm border ${borderColor}`}>
                      <div className="flex items-start gap-4">
                        <CheckCircle className={`w-5 h-5 ${iconColor} shrink-0 mt-1`} />
                        <p className="text-foreground leading-relaxed">{service.deliverable}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="premium-card premium-card-blue p-10 sm:p-14">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight">Work you can check</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Two of my agentic projects are published as open-source Python packages:
              </p>
              <ul className="space-y-3 mb-6">
                {openSourcePackages.map((pkg) => (
                  <li key={pkg.name}>
                    <a href={pkg.pypi} className="text-primary underline underline-offset-4 hover:text-accent">
                      {pkg.name}
                    </a>
                    <InstallCommand command={pkg.install} />
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I've also published research on what the EU AI Act means for agents:{" "}
                <a href={article50Papers[1].href} className="text-primary underline underline-offset-4 hover:text-accent">
                  {article50Papers[1].title}
                </a>
                .
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For an AI workflow designed so people make every decision, see{" "}
                <Link to={HIRING_REDESIGN_PATH} className="text-primary underline underline-offset-4 hover:text-accent">
                  Then and now: keeping people in charge of hiring
                </Link>{" "}
                (an illustrative redesign, not client work).
              </p>
              <p className="text-muted-foreground leading-relaxed">
                For how I scope an AI project with a client, read{" "}
                <Link to={CASE_STUDY_PATH} className="text-primary underline underline-offset-4 hover:text-accent">
                  the in-house support chatbot case study
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="premium-card premium-card-cyan p-10 sm:p-14">
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 tracking-tight">Who I work with</h2>
              <p className="text-muted-foreground leading-relaxed">
                Small and mid-sized companies and scale-ups in Germany and the EU that want to automate a specific
                process with AI but don't have an in-house team to build it. Engagements are remote. I'm one engineer,
                so I take on a small number at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8 tracking-tight">Questions</h2>
          <FaqList items={agenticFaq} />
        </div>
      </section>

      <section className="relative pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 tracking-tight">Tell me about the process</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Describe the task your team wants off its plate and the tools involved. I'll tell you honestly whether an
            agent is the right answer.
          </p>
          <Button asChild size="lg" className="rounded-2xl px-10 py-7 text-lg shadow-lg shadow-primary/20">
            <Link to="/contact">
              Get in touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
