import { Shield, Cookie, Database, Globe, Mail, Lock, AlertCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen frosted-glass-bg">
      <Header />

      <section className="relative pt-36 pb-16 overflow-hidden">
        <div className="glass-shape w-64 h-64 -top-32 -left-32 rotate-12 opacity-30" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 backdrop-blur-sm border border-primary/20 mb-10">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Rechtliches</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-8 tracking-tight">
            Datenschutzerklärung
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Informationen zur Verarbeitung personenbezogener Daten gemäß Art. 13, 14 DSGVO — Stand: Juni 2026
          </p>
        </div>
      </section>

      <section className="relative pb-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">

            {/* 1. Verantwortlicher */}
            <div className="premium-card premium-card-cyan p-8">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-accent">
                    <Users className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">1. Verantwortlicher</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Verantwortliche Stelle im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
                  </p>
                  <div className="p-5 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border">
                    <p className="font-semibold text-foreground">Smart eG</p>
                    <p>(handelnd als Aevoxis Solutions)</p>
                    <p>Mehringplatz 10</p>
                    <p>10969 Berlin, Deutschland</p>
                    <p className="mt-3">
                      <strong className="text-foreground">E-Mail:</strong>{" "}
                      <a href="mailto:legal@aevoxis.de" className="text-accent hover:text-primary transition-colors">
                        legal@aevoxis.de
                      </a>
                    </p>
                    <p>
                      <strong className="text-foreground">Telefon:</strong>{" "}
                      <a href="tel:+4915153752713" className="hover:text-primary transition-colors">
                        +49 151 5375 2713
                      </a>
                    </p>
                  </div>
                  <p className="text-sm">
                    Ein Datenschutzbeauftragter ist gemäß Art. 37 DSGVO i. V. m. § 38 BDSG nicht verpflichtend zu
                    bestellen, da keiner der dort genannten Tatbestände (Art. 37 Abs. 1 DSGVO) vorliegt. Bei
                    Datenschutzanfragen wenden Sie sich bitte direkt an die oben genannte Kontaktadresse.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Allgemeine Informationen */}
            <div className="premium-card premium-card-blue p-8">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary">
                    <Database className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">2. Allgemeines zur Datenverarbeitung</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst und behandeln Ihre
                    personenbezogenen Daten vertraulich und entsprechend den gesetzlichen
                    Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                  </p>
                  <p>
                    Die Nutzung unserer Website ist in der Regel ohne Angabe personenbezogener Daten möglich.
                    Soweit auf unseren Seiten personenbezogene Daten erhoben werden, erfolgt dies stets auf
                    freiwilliger Basis und wird ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben,
                    soweit dies nicht gesetzlich zulässig oder geboten ist.
                  </p>
                  <p>
                    Wir weisen darauf hin, dass die Datenübertragung im Internet Sicherheitslücken aufweisen kann.
                    Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Hosting */}
            <div className="premium-card premium-card-cyan p-8">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-accent">
                    <Globe className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">3. Hosting (GitHub Pages)</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Diese Website wird über <strong className="text-foreground">GitHub Pages</strong> gehostet,
                    einem Dienst der Microsoft Corporation (One Microsoft Way, Redmond, WA 98052-6399, USA).
                    Beim Abruf unserer Seiten werden technisch bedingt folgende Server-Logfile-Daten verarbeitet:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>IP-Adresse des anfragenden Rechners</li>
                    <li>Datum und Uhrzeit des Abrufs</li>
                    <li>Name und URL der abgerufenen Datei</li>
                    <li>HTTP-Statuscode</li>
                    <li>Webbrowser und Betriebssystem</li>
                    <li>Referrer-URL (zuvor besuchte Seite)</li>
                  </ul>
                  <p>
                    <strong className="text-foreground">Zweck:</strong> Technischer Betrieb und Sicherheit der Website.
                  </p>
                  <p>
                    <strong className="text-foreground">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
                    (berechtigtes Interesse am sicheren und funktionsfähigen Betrieb der Website).
                  </p>
                  <p>
                    Die Verarbeitung erfolgt auf Basis eines Auftragsverarbeitungsvertrags gemäß Art. 28 DSGVO.
                    Microsoft ist unter dem EU-US Data Privacy Framework zertifiziert (Art. 45 DSGVO). Weitere
                    Informationen:{" "}
                    <a
                      href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-primary transition-colors underline"
                    >
                      GitHub Datenschutzrichtlinie
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 4. SSL */}
            <div className="premium-card premium-card-blue p-8">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">4. SSL/TLS-Verschlüsselung</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte
                  eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie am
                  „https://"-Präfix in der Browserzeile sowie am Schloss-Symbol. Übermittelte Daten können von
                  Dritten nicht mitgelesen werden.
                </p>
              </div>
            </div>

            {/* 5. Cookies */}
            <div className="premium-card premium-card-cyan p-8">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-accent">
                    <Cookie className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">5. Cookies und Einwilligungsverwaltung</h2>
                </div>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die Ihr Browser auf Ihrem
                    Endgerät speichert. Gemäß § 25 TDDDG dürfen nicht technisch notwendige Cookies erst nach
                    Ihrer Einwilligung gesetzt werden. Ihre Einwilligung ist freiwillig und kann jederzeit über
                    das Cookie-Symbol unten links auf der Seite widerrufen werden.
                  </p>

                  <div className="p-5 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border">
                    <h3 className="font-semibold text-foreground mb-3">5.1 Technisch notwendige Cookies</h3>
                    <p>
                      Diese Cookies sind für den ordnungsgemäßen Betrieb der Website technisch erforderlich und
                      können nicht deaktiviert werden (§ 25 Abs. 2 Nr. 2 TDDDG). Sie ermöglichen
                      Basisfunktionen wie die Speicherung Ihrer Datenschutzpräferenzen.
                    </p>
                    <p className="mt-3 text-sm">
                      <strong className="text-foreground">Rechtsgrundlage:</strong> § 25 Abs. 2 TDDDG (keine
                      Einwilligung erforderlich). Keine Weitergabe an Dritte.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border">
                    <h3 className="font-semibold text-foreground mb-3">5.2 Einwilligungsverwaltung — Silktide Cookie Consent Manager</h3>
                    <p>
                      Zur Verwaltung und zum Nachweis Ihrer Cookie-Einwilligungen setzen wir den{" "}
                      <strong className="text-foreground">Silktide Cookie Consent Manager</strong> ein. Dieser
                      speichert Ihre Präferenzen als technisch notwendiges Cookie lokal in Ihrem Browser. Es
                      werden keine Einwilligungsdaten an externe Server übertragen.
                    </p>
                    <p className="mt-3 text-sm">
                      <strong className="text-foreground">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. c DSGVO
                      i. V. m. Art. 7 Abs. 1 DSGVO (Nachweispflicht für Einwilligungen).
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border">
                    <h3 className="font-semibold text-foreground mb-3">5.3 Analyse-Cookies — Google Analytics 4 (nur mit Einwilligung)</h3>
                    <p>
                      Mit Ihrer Einwilligung setzen wir <strong className="text-foreground">Google Analytics 4</strong> ein,
                      einen Webanalysedienst der Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
                      Irland. Google Analytics verwendet Cookies, um uns zu helfen, die Nutzung der Website zu
                      analysieren und zu verbessern.
                    </p>
                    <ul className="list-disc list-inside space-y-1 mt-3 ml-4 text-sm">
                      <li><strong className="text-foreground">Verarbeitete Daten:</strong> IP-Adresse (anonymisiert/gekürzt), Browsertyp, Betriebssystem, Referrer-URL, besuchte Seiten, Verweildauer</li>
                      <li><strong className="text-foreground">Speicherdauer:</strong> bis zu 14 Monate (gemäß Google-Einstellung)</li>
                      <li><strong className="text-foreground">Datenübertragung:</strong> EU-Server mit möglicher Verarbeitung in den USA (siehe Abschnitt 9)</li>
                    </ul>
                    <p className="mt-3 text-sm">
                      <strong className="text-foreground">Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
                      und § 25 Abs. 1 TDDDG (Einwilligung). Sie können Ihre Einwilligung jederzeit durch Klick
                      auf das Cookie-Symbol unten links widerrufen.
                    </p>
                    <p className="mt-3 text-sm">
                      Alternativ können Sie die Erfassung durch das Browser-Add-on{" "}
                      <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary transition-colors underline"
                      >
                        tools.google.com/dlpage/gaoptout
                      </a>{" "}
                      dauerhaft verhindern. Weitere Informationen:{" "}
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent hover:text-primary transition-colors underline"
                      >
                        Google Datenschutzerklärung
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Kontaktformulare */}
            <div className="premium-card premium-card-blue p-8">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">6. Kontaktformulare (Tally.so)</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Auf unserer Website bieten wir Kontaktformulare an, die über den Dienst{" "}
                    <strong className="text-foreground">Tally</strong> (Tally Solutions BV, Kolenmarkt 1,
                    1000 Brüssel, Belgien) bereitgestellt werden. Wenn Sie uns per Kontaktformular eine Anfrage
                    zusenden, werden Ihre Angaben einschließlich der von Ihnen angegebenen Kontaktdaten zwecks
                    Bearbeitung der Anfrage und für etwaige Rückfragen bei uns gespeichert.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mt-2">
                    <div className="p-4 rounded-xl bg-secondary/40 backdrop-blur-sm border border-border text-sm">
                      <p className="font-semibold text-foreground mb-1">Verarbeitete Daten</p>
                      <p>Name, E-Mail-Adresse, Nachrichteninhalt sowie weitere von Ihnen freiwillig eingetragene Informationen</p>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/40 backdrop-blur-sm border border-border text-sm">
                      <p className="font-semibold text-foreground mb-1">Zweck</p>
                      <p>Bearbeitung Ihrer Anfrage und Anbahnung einer Geschäftsbeziehung</p>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/40 backdrop-blur-sm border border-border text-sm">
                      <p className="font-semibold text-foreground mb-1">Rechtsgrundlage</p>
                      <p>Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) und Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)</p>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/40 backdrop-blur-sm border border-border text-sm">
                      <p className="font-semibold text-foreground mb-1">Speicherdauer</p>
                      <p>Bis zum Wegfall des Zwecks, spätestens nach 6 Jahren (§ 257 HGB) bzw. 10 Jahren (§ 147 AO)</p>
                    </div>
                  </div>
                  <p className="text-sm">
                    Tally verarbeitet Daten auf Servern innerhalb der Europäischen Union. Es besteht ein
                    Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Weitere Informationen:{" "}
                    <a
                      href="https://tally.so/help/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-primary transition-colors underline"
                    >
                      Tally Datenschutzerklärung
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 7. KI-Transparenz */}
            <div className="premium-card premium-card-cyan p-8">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center text-accent">
                    <AlertCircle className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">7. KI-Transparenz gemäß EU AI Act</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Gemäß Art. 50 der Verordnung (EU) 2024/1689 (EU AI Act) und in Übereinstimmung mit unserem
                    Selbstverständnis als EU-AI-Act-Compliance-Spezialist weisen wir transparent auf Folgendes hin:
                  </p>
                  <div className="p-5 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border">
                    <p className="font-semibold text-foreground mb-2">KI-generierte und KI-unterstützte Inhalte</p>
                    <p className="text-sm">
                      Einige Texte, Zusammenfassungen oder strukturierte Inhalte auf dieser Website können mit
                      Unterstützung von KI-Werkzeugen erstellt worden sein. Alle veröffentlichten Inhalte werden
                      durch menschliche Fachkräfte geprüft und freigegeben.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border">
                    <p className="font-semibold text-foreground mb-2">Keine automatisierte Einzelentscheidung</p>
                    <p className="text-sm">
                      Es findet keine automatisierte Entscheidungsfindung im Sinne von Art. 22 DSGVO statt,
                      die rechtliche oder ähnlich erhebliche Auswirkungen auf Sie hat. Alle Beratungs- und
                      Projektleistungen werden durch menschliche Fachkräfte erbracht.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-border">
                    <p className="font-semibold text-foreground mb-2">Kein Training mit Ihren Daten</p>
                    <p className="text-sm">
                      Ihre personenbezogenen Daten (Formulareingaben, Analysedaten) werden nicht zum Training
                      von KI-Modellen verwendet. Die Nutzung von Analysedaten beschränkt sich auf die in
                      Abschnitt 5.3 beschriebene Website-Nutzungsanalyse durch Google Analytics 4.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 8. Ihre Rechte */}
            <div className="premium-card premium-card-blue p-8">
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">8. Ihre Rechte als betroffene Person</h2>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>Sie haben gegenüber uns folgende Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                  <div className="grid gap-3">
                    {[
                      {
                        right: "Auskunftsrecht",
                        article: "Art. 15 DSGVO",
                        desc: "Sie haben das Recht, Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten.",
                      },
                      {
                        right: "Berichtigungsrecht",
                        article: "Art. 16 DSGVO",
                        desc: "Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Daten zu verlangen.",
                      },
                      {
                        right: "Recht auf Löschung",
                        article: "Art. 17 DSGVO",
                        desc: "Sie haben das Recht auf Löschung Ihrer personenbezogenen Daten, sofern kein gesetzlicher Aufbewahrungsgrund entgegensteht.",
                      },
                      {
                        right: "Einschränkung der Verarbeitung",
                        article: "Art. 18 DSGVO",
                        desc: "Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.",
                      },
                      {
                        right: "Datenübertragbarkeit",
                        article: "Art. 20 DSGVO",
                        desc: "Sie haben das Recht, Ihre Daten in einem strukturierten, maschinenlesbaren Format zu erhalten oder an einen anderen Verantwortlichen übertragen zu lassen.",
                      },
                      {
                        right: "Widerspruchsrecht",
                        article: "Art. 21 DSGVO",
                        desc: "Sie haben das Recht, der Verarbeitung Ihrer Daten auf Basis unserer berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO) jederzeit zu widersprechen.",
                      },
                      {
                        right: "Widerrufsrecht bei Einwilligungen",
                        article: "Art. 7 Abs. 3 DSGVO",
                        desc: "Sie können eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, ohne dass die Rechtmäßigkeit der bisherigen Verarbeitung berührt wird.",
                      },
                    ].map((item) => (
                      <div
                        key={item.right}
                        className="p-4 rounded-xl bg-secondary/40 backdrop-blur-sm border border-border"
                      >
                        <span className="font-semibold text-foreground">{item.right}</span>
                        <span className="ml-2 text-xs text-accent font-medium">{item.article}</span>
                        <p className="mt-1 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 p-5 rounded-2xl bg-secondary/60 backdrop-blur-sm border border-accent/20">
                    <p className="font-semibold text-foreground mb-2">
                      Beschwerderecht bei der Aufsichtsbehörde (Art. 77 DSGVO)
                    </p>
                    <p className="text-sm mb-4">
                      Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
                      Ihrer personenbezogenen Daten zu beschweren. Die für uns zuständige Aufsichtsbehörde ist:
                    </p>
                    <div className="p-4 rounded-xl bg-secondary/40 border border-border text-sm">
                      <p className="font-semibold text-foreground">Berliner Beauftragte für Datenschutz und Informationsfreiheit</p>
                      <p>Friedrichstr. 219, 10969 Berlin</p>
                      <p>Telefon: +49 30 13889-0</p>
                      <p>
                        Web:{" "}
                        <a
                          href="https://www.datenschutz-berlin.de"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-primary transition-colors underline"
                        >
                          www.datenschutz-berlin.de
                        </a>
                      </p>
                    </div>
                  </div>

                  <p className="text-sm">
                    Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                    <a href="mailto:legal@aevoxis.de" className="text-accent hover:text-primary transition-colors">
                      legal@aevoxis.de
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* 9. Drittländer */}
            <div className="premium-card premium-card-cyan p-8">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-foreground mb-6">9. Datentransfers in Drittländer</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Einige der von uns eingesetzten Dienstleister verarbeiten Daten außerhalb des Europäischen
                    Wirtschaftsraums (EWR), insbesondere in den USA. Wir stellen in diesen Fällen sicher, dass
                    ein angemessenes Datenschutzniveau gewährleistet ist durch:
                  </p>
                  <div className="grid gap-3 mt-2">
                    <div className="p-4 rounded-xl bg-secondary/40 backdrop-blur-sm border border-border text-sm">
                      <p className="font-semibold text-foreground">EU-Standardvertragsklauseln (SCC)</p>
                      <p>gemäß Art. 46 Abs. 2 lit. c DSGVO — gilt für Google Analytics und GitHub Pages</p>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/40 backdrop-blur-sm border border-border text-sm">
                      <p className="font-semibold text-foreground">EU-US Data Privacy Framework</p>
                      <p>Google LLC und Microsoft Corporation sind unter dem EU-US Data Privacy Framework zertifiziert (Angemessenheitsbeschluss gem. Art. 45 DSGVO)</p>
                    </div>
                    <div className="p-4 rounded-xl bg-secondary/40 backdrop-blur-sm border border-border text-sm">
                      <p className="font-semibold text-foreground">Verarbeitung ausschließlich in der EU</p>
                      <p>Tally Solutions BV (Belgien) verarbeitet Formulardaten ausschließlich auf EU-Servern</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 10. Externe Links */}
            <div className="premium-card premium-card-blue p-8">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-foreground mb-6">10. Externe Links (LinkedIn)</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Unsere Website enthält Links zu externen Diensten wie LinkedIn (LinkedIn Ireland Unlimited
                  Company, Wilton Place, Dublin 2, Irland). Diese Links öffnen externe Seiten in einem neuen
                  Tab. Beim Anklicken eines externen Links verlassen Sie unsere Website; die
                  Datenverarbeitung unterliegt dann den Datenschutzbestimmungen des jeweiligen Anbieters.
                  Wir haben keinen Einfluss auf deren Inhalte und Datenverarbeitungspraktiken. Es werden
                  keine Daten an LinkedIn übertragen, solange Sie keinen dieser Links anklicken.
                </p>
              </div>
            </div>

            {/* 11. Aktualisierung */}
            <div className="premium-card premium-card-cyan p-8">
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-foreground mb-6">11. Aktualität und Änderungen</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Diese Datenschutzerklärung ist aktuell gültig (Stand: Juni 2026). Durch die
                  Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann es
                  notwendig werden, diese Datenschutzerklärung anzupassen. Die jeweils aktuelle Version ist
                  jederzeit unter{" "}
                  <Link to="/datenschutz" className="text-accent hover:text-primary transition-colors">
                    aevoxis.de/datenschutz
                  </Link>{" "}
                  abrufbar. Wir empfehlen Ihnen, diese Seite regelmäßig zu überprüfen.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
