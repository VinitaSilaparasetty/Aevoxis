import { ChevronDown } from "lucide-react";

// Native <details>: answers stay in the HTML when collapsed, so search engines
// and AI crawlers can read them without running JavaScript.
export function FaqList({ items }: { items: Array<{ question: string; answer: string }> }) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <details key={item.question} className="group rounded-2xl border border-border bg-secondary/40 overflow-hidden">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-4 text-left text-sm sm:text-base font-semibold text-foreground hover:text-primary transition-colors [&::-webkit-details-marker]:hidden">
            <span>{item.question}</span>
            <ChevronDown className="w-4 h-4 shrink-0 text-accent transition-transform group-open:rotate-180" />
          </summary>
          <div className="px-6 pb-5 pt-4 text-sm sm:text-base text-muted-foreground leading-relaxed border-t border-border">
            {item.answer}
          </div>
        </details>
      ))}
    </div>
  );
}
