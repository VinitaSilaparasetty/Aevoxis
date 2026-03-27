import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navigation = [
  { name: "Startseite", href: "/" },
  { name: "Leistungen", href: "/services" },
  { name: "Über uns", href: "/about" },
  { name: "Impressum", href: "/impressum" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between py-3 mt-4 sm:mt-6 px-4 sm:px-8 rounded-full bg-secondary/70 backdrop-blur-xl border border-border shadow-sm">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Aevoxis Solutions Logo" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
            <span className="text-lg sm:text-xl font-semibold text-foreground hidden sm:block">Aevoxis Solutions</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button asChild className="rounded-full px-6 shadow-lg shadow-primary/20">
              <Link to="/contact">Kontakt</Link>
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-foreground rounded-full hover:bg-secondary/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-6 rounded-3xl bg-secondary/90 backdrop-blur-xl border border-border shadow-lg">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <Link key={item.name} to={item.href} className="text-foreground hover:text-primary transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-border">
                <Button asChild className="w-full rounded-full shadow-lg shadow-primary/20">
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Kontakt aufnehmen</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
