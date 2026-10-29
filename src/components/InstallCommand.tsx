import { useState } from "react";
import { Check, Copy } from "lucide-react";

// Monospace command with a copy button. The command is rendered as plain text,
// so it stays readable (and pre-renders) even if the clipboard API is unavailable.
export function InstallCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (insecure context or denied permission): the command
      // is still on screen for manual selection, so there is nothing to recover.
    }
  };

  return (
    <div className="flex items-center gap-2 rounded-xl border border-border bg-background/70 px-3 py-2.5">
      <code className="flex-1 min-w-0 overflow-x-auto font-mono text-xs sm:text-sm text-foreground whitespace-nowrap">
        {command}
      </code>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy "${command}" to clipboard`}
        className="shrink-0 p-1.5 rounded-lg text-muted-foreground hover:text-accent hover:bg-secondary transition-colors"
      >
        {copied ? <Check className="w-4 h-4 text-accent" /> : <Copy className="w-4 h-4" />}
        <span className="sr-only" role="status" aria-live="polite">{copied ? "Copied" : ""}</span>
      </button>
    </div>
  );
}
