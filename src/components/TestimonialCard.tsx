interface TestimonialCardProps {
  quote: string;
  name: string;
  title?: string;
}

export function TestimonialCard({ quote, name, title }: TestimonialCardProps) {
  return (
    <figure className="h-full p-6 sm:p-7 rounded-2xl bg-secondary/70 backdrop-blur-sm border border-border hover:border-accent/30 transition-all flex flex-col">
      <blockquote className="text-foreground/90 leading-relaxed mb-5 flex-1">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-auto">
        <p className="font-bold text-foreground">{name}</p>
        {title && <p className="text-xs text-muted-foreground mt-0.5">{title}</p>}
      </figcaption>
    </figure>
  );
}