import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  href?: string;
  variant?: "cyan" | "blue" | "teal";
}

export function ServiceCard({ icon, title, description, href, variant = "cyan" }: ServiceCardProps) {
  const cardClass = `premium-card premium-card-${variant}`;
  const iconColor = variant === "cyan" ? "text-accent" : variant === "teal" ? "text-accent" : "text-primary";
  const iconBg =
    variant === "cyan"
      ? "from-accent/20 to-accent/5"
      : variant === "teal"
      ? "from-accent/20 to-accent/5"
      : "from-primary/20 to-primary/5";

  const content = (
    <div className={`${cardClass} p-8 h-full`}>
      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${iconBg} flex items-center justify-center mb-6 ${iconColor}`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{description}</p>
        {href && (
          <div className="flex items-center gap-2 text-primary font-medium">
            <span>Mehr erfahren</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        )}
      </div>
    </div>
  );

  if (href) {
    return <Link to={href}>{content}</Link>;
  }

  return content;
}

export function TallServiceCard({ icon, title, description, variant = "cyan" }: ServiceCardProps) {
  const cardClass = `premium-card premium-card-${variant}`;
  const iconColor = variant === "cyan" ? "text-accent" : "text-primary";

  return (
    <div className={`${cardClass} p-12 min-h-[300px] flex flex-col justify-center items-center text-center`}>
      <div className="relative z-10">
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/20 to-primary/10 flex items-center justify-center mb-8 mx-auto ${iconColor}`}>
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
