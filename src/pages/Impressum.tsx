import { Building2, Users, Mail, Phone, Globe, Sparkles, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function ImpressumPage() {
  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -left-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-primary/20 mb-10">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Rechtliches</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 tracking-tight">
            Impressum
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">Angaben gemäß § 5 DDG</p>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="premium-card premium-card-cyan p-8">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-accent">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Unternehmensangaben</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground text-lg">Aevoxis Solutions</p>
                    <p>Mitglied von:</p>
                  </div>
                  <div>
                    <p>SMartDE e. G.</p>
                    <p>Franz-Mehring-Platz 1</p>
                    <p>10243 Berlin</p>
                    <p>Deutschland</p>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p><strong className="text-foreground">Genossenschaftsregister:</strong> GnR 791B</p>
                    <p><strong className="text-foreground">Registergericht:</strong> Amtsgericht Berlin (Charlottenburg)</p>
                    <p><strong className="text-foreground">Zuständiger Prüfverband:</strong> Prüfungsverband der kleinen und mittelständischen Genossenschaften e.V.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card premium-card-blue p-8">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary">
                    <Users className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Vertreten durch</h2>
                </div>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <p>Magdalena Ziomek, Alicja Möltner</p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Aufsichtsrat</p>
                    <p>Norbert Kunz, Sébastien Paule, Marie Reiter, Céline Viardot, Prof. Dr. Dominika Wruk (Vorsitzende)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card premium-card-cyan p-8">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-accent">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Kontakt für dieses Projekt</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border">
                    <p className="font-semibold text-foreground">Vinita Silaparasetty</p>
                    <p className="text-muted-foreground">Projektleitung Aevoxis Solutions</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/40 backdrop-blur-sm">
                      <Mail className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-xs text-muted-foreground">E-Mail (Rechtlich)</p>
                        <a href="mailto:legal@aevoxis.de" className="text-foreground hover:text-primary transition-colors">legal@aevoxis.de</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/40 backdrop-blur-sm">
                      <Mail className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">E-Mail (Allgemein)</p>
                        <a href="mailto:info@aevoxis.de" className="text-foreground hover:text-primary transition-colors">info@aevoxis.de</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/40 backdrop-blur-sm">
                      <Phone className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">Telefon</p>
                        <a href="tel:+4915679836401" className="text-foreground hover:text-primary transition-colors">+49 15679 836401</a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/40 backdrop-blur-sm">
                      <Globe className="w-5 h-5 text-accent" />
                      <div>
                        <p className="text-xs text-muted-foreground">Website</p>
                        <a href="https://aevoxis.de" className="text-foreground hover:text-primary transition-colors">https://aevoxis.de</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card premium-card-blue p-8">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-foreground mb-6">Verantwortlich für den Inhalt</h2>
                <p className="text-muted-foreground mb-4">nach § 18 Abs. 2 MStV:</p>
                <div className="p-5 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border">
                  <p className="font-semibold text-foreground">Vinita Silaparasetty</p>
                  <p className="text-muted-foreground">Franz-Mehring-Platz 1, 10243 Berlin, Deutschland</p>
                </div>
              </div>
            </div>

            <div className="premium-card premium-card-cyan p-8">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-foreground mb-6">Umsatzsteuer-ID</h2>
                <p className="text-muted-foreground mb-4">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                </p>
                <p className="text-2xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">DE302421357</p>
              </div>
            </div>

            <div className="premium-card premium-card-blue p-8">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-foreground mb-6">Angaben zur Berufshaftpflichtversicherung</h2>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground">Name und Sitz des Versicherers</p>
                    <p>VBG</p>
                    <p>Massaquoipassage 1</p>
                    <p>22305 Hamburg</p>
                    <p>Tel. 040 – 5146-0</p>
                    <p>Fax 040 – 5146-2146</p>
                    <p>
                      E-Mail:{" "}
                      <a href="mailto:kundendialog@vbg.de" className="text-foreground hover:text-primary transition-colors">kundendialog@vbg.de</a>
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Geltungsraum der Versicherung</p>
                    <p>Deutschland, EU</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card premium-card-cyan p-8">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-accent">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Datenschutz</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Informationen zur Verarbeitung personenbezogener Daten, zu Ihren Rechten als betroffene Person
                  sowie zu den von uns eingesetzten Diensten (Google Analytics, Tally.so, GitHub Pages) finden
                  Sie in unserer{" "}
                  <Link to="/datenschutz" className="text-accent hover:text-primary transition-colors underline">
                    Datenschutzerklärung
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="premium-card premium-card-blue p-8">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-foreground mb-6">Verbraucherstreitbeilegung</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Wir sind nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen, da wir ausschließlich im B2B-Bereich
                    (Geschäftskunden) tätig sind.
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-card premium-card-cyan p-8">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-foreground mb-6">Haftungsausschluss</h2>
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Haftung für Inhalte</h3>
                    <p className="leading-relaxed">
                      Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit
                      und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir
                      gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Haftung für Links</h3>
                    <p className="leading-relaxed">
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                      Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Urheberrecht</h3>
                    <p className="leading-relaxed">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                      deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                      außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors
                      bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
