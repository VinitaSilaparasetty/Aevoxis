import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";
import { PERSONAL_SITE_URL } from "@/seo/meta";

const footerLinks = {
  product: [
    { name: "Early access", href: "/early-access" },
    { name: "Articles 12–14 engineering", href: "/services/eu-ai-act-engineering" },
    { name: "Services", href: "/services" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Insights", href: "/blog" },
    { name: "Contact", href: "/contact" },
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
  ],
};

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="relative z-10 bg-secondary/60 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-3 mb-8">
                <img src={logo} alt="" width={40} height={40} className="w-10 h-10 object-contain" />
                <span className="text-xl font-semibold text-foreground">Aevoxis Solutions</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8">
                Tooling for the EU AI Act: Article 50 today, Articles 12–14 next. Member of SMartDE e. G., Berlin.
              </p>
              <div className="flex flex-col gap-4 text-sm text-muted-foreground">
                <a href="mailto:info@aevoxis.de" className="flex items-center gap-3 hover:text-accent transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  info@aevoxis.de
                </a>
                <a href="tel:+4915679836401" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  +49 15679 836401
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <span>Franz-Mehring-Platz 1, 10243 Berlin</span>
                </div>
                <a
                  href="https://www.linkedin.com/company/aevoxis-solutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-accent transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Linkedin className="w-4 h-4 text-accent" />
                  </div>
                  Follow on LinkedIn
                </a>
              </div>
            </div>

            <nav aria-label="Product">
              <h2 className="font-semibold text-foreground mb-6 tracking-wide text-base">PRODUCT</h2>
              <ul className="space-y-4">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Company">
              <h2 className="font-semibold text-foreground mb-6 tracking-wide text-base">COMPANY</h2>
              <ul className="space-y-4">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <a href={PERSONAL_SITE_URL} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Vinita Silaparasetty (personal site)
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-20 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Aevoxis Solutions, member of SMartDE e. G., Berlin.
            </p>
            <div className="flex items-center gap-8 text-sm text-muted-foreground">
              <Link to="/impressum" className="hover:text-primary transition-colors">Impressum</Link>
              <Link to="/datenschutz" className="hover:text-primary transition-colors">Datenschutz</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
