import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const footerLinks = {
  services: [
    { name: "EU AI Act Alignment", href: "/services#alignment" },
    { name: "Souveräne KI", href: "/services#sovereign" },
    { name: "Industrielle Effizienz", href: "/services#efficiency" },
    { name: "Agentic Process Mining", href: "/services#agentic" },
  ],
  company: [
    { name: "Über uns", href: "/about" },
    { name: "Kontakt", href: "/contact" },
    { name: "Impressum", href: "/impressum" },
  ],
};

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="relative z-10 bg-secondary/60 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-8">
                <img src={logo} alt="Aevoxis Solutions Logo" className="w-10 h-10 object-contain" />
                <span className="text-xl font-semibold text-foreground">Aevoxis Solutions</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Aevoxis Solutions – Spezialisierte KI-Workflows für deutsche KMU. Ein Projekt der Smart eG, Berlin.
              </p>
              <div className="flex flex-col gap-4 text-sm text-muted-foreground">
                <a href="mailto:info@aevoxis.de" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  info@aevoxis.de
                </a>
                <a href="tel:+4915153752713" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  +49 151 5375 2713
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span>Mehringplatz 10, 10969 Berlin</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-6 tracking-wide">SERVICES</h3>
              <ul className="space-y-4">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-6 tracking-wide">UNTERNEHMEN</h3>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-6 tracking-wide">EXPERTISE</h3>
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-secondary/80 backdrop-blur-sm border border-accent/20 hover:border-accent/50 transition-colors">
                  <p className="text-xs font-semibold text-accent mb-1">Google Developer Expert</p>
                  <p className="text-xs text-muted-foreground">Machine Learning</p>
                </div>
                <div className="p-4 rounded-2xl bg-secondary/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-colors">
                  <p className="text-xs font-semibold text-primary mb-1">AWS Community Builder</p>
                  <p className="text-xs text-muted-foreground">Machine Learning</p>
                </div>
                <div className="p-4 rounded-2xl bg-secondary/80 backdrop-blur-sm border border-primary/20 hover:border-primary/50 transition-colors">
                  <p className="text-xs font-semibold text-primary mb-1">DSGVO & EU AI Act</p>
                  <p className="text-xs text-muted-foreground">Architected for Alignment</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Aevoxis Solutions – Ein Projekt der Smart eG, Berlin. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
