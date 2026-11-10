"use client";
import React from "react";
import Link from "next/link";
import { Footer, Navbar } from "../../components";
import "../globals.css";

const DataProtectionPage = () => {
  return (
    <div className="relative">
      <Navbar />

      {/* Main Content */}
      <main className="relative min-h-screen bg-canvas pt-20 pb-24 px-4 sm:px-6 lg:pt-28 lg:pb-32 lg:px-8">

        <div className="relative max-w-3xl mx-auto">
          {/* Content Container */}
          <div>
            {/* Header */}
            <h1 className="text-5xl lg:text-6xl mb-12 text-fg">
              Datenschutzerklärung
            </h1>

            {/* Content */}
            <div className="space-y-10 text-muted">
              {/* Präambel */}
              <section id="m4158">
                <h2 className="text-2xl mb-4 text-fg">
                  Präambel
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  Mit der folgenden Datenschutzerklärung möchten wir Sie darüber
                  aufklären, welche Arten Ihrer personenbezogenen Daten
                  (nachfolgend auch kurz als &ldquo;Daten&rdquo; bezeichnet) wir
                  zu welchen Zwecken und in welchem Umfang im Rahmen der
                  Bereitstellung unserer Applikation verarbeiten.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
                </p>
                <p className="text-lg leading-relaxed">Stand: 9. August 2025</p>
              </section>

              {/* Inhaltsübersicht */}
              <section>
                <h2 className="text-2xl mb-4 text-fg">
                  Inhaltsübersicht
                </h2>
                <ul className="space-y-2 text-lg">
                  <li>
                    <a
                      href="#m4158"
                      className="text-brand-primary-400 hover:text-brand-primary-300 underline decoration-brand-primary-400/40 underline-offset-4 transition-colors duration-200 break-words"
                    >
                      Präambel
                    </a>
                  </li>
                  <li>
                    <a
                      href="#m3"
                      className="text-brand-primary-400 hover:text-brand-primary-300 underline decoration-brand-primary-400/40 underline-offset-4 transition-colors duration-200 break-words"
                    >
                      Verantwortlicher
                    </a>
                  </li>
                  <li>
                    <a
                      href="#mOverview"
                      className="text-brand-primary-400 hover:text-brand-primary-300 underline decoration-brand-primary-400/40 underline-offset-4 transition-colors duration-200 break-words"
                    >
                      Übersicht der Verarbeitungen
                    </a>
                  </li>
                  <li>
                    <a
                      href="#m2427"
                      className="text-brand-primary-400 hover:text-brand-primary-300 underline decoration-brand-primary-400/40 underline-offset-4 transition-colors duration-200 break-words"
                    >
                      Maßgebliche Rechtsgrundlagen
                    </a>
                  </li>
                  <li>
                    <a
                      href="#m27"
                      className="text-brand-primary-400 hover:text-brand-primary-300 underline decoration-brand-primary-400/40 underline-offset-4 transition-colors duration-200 break-words"
                    >
                      Sicherheitsmaßnahmen
                    </a>
                  </li>
                  <li>
                    <a
                      href="#m25"
                      className="text-brand-primary-400 hover:text-brand-primary-300 underline decoration-brand-primary-400/40 underline-offset-4 transition-colors duration-200 break-words"
                    >
                      Übermittlung von personenbezogenen Daten
                    </a>
                  </li>
                  <li>
                    <a
                      href="#m12"
                      className="text-brand-primary-400 hover:text-brand-primary-300 underline decoration-brand-primary-400/40 underline-offset-4 transition-colors duration-200 break-words"
                    >
                      Allgemeine Informationen zur Datenspeicherung und Löschung
                    </a>
                  </li>
                  <li>
                    <a
                      href="#m10"
                      className="text-brand-primary-400 hover:text-brand-primary-300 underline decoration-brand-primary-400/40 underline-offset-4 transition-colors duration-200 break-words"
                    >
                      Rechte der betroffenen Personen
                    </a>
                  </li>
                  <li>
                    <a
                      href="#m317"
                      className="text-brand-primary-400 hover:text-brand-primary-300 underline decoration-brand-primary-400/40 underline-offset-4 transition-colors duration-200 break-words"
                    >
                      Geschäftliche Leistungen
                    </a>
                  </li>
                  <li>
                    <a
                      href="#m225"
                      className="text-brand-primary-400 hover:text-brand-primary-300 underline decoration-brand-primary-400/40 underline-offset-4 transition-colors duration-200 break-words"
                    >
                      Bereitstellung des Onlineangebots und Webhosting
                    </a>
                  </li>
                  <li>
                    <a
                      href="#m182"
                      className="text-brand-primary-400 hover:text-brand-primary-300 underline decoration-brand-primary-400/40 underline-offset-4 transition-colors duration-200 break-words"
                    >
                      Kontakt- und Anfrageverwaltung
                    </a>
                  </li>
                  <li>
                    <a
                      href="#m15"
                      className="text-brand-primary-400 hover:text-brand-primary-300 underline decoration-brand-primary-400/40 underline-offset-4 transition-colors duration-200 break-words"
                    >
                      Änderung und Aktualisierung
                    </a>
                  </li>
                  <li>
                    <a
                      href="#m42"
                      className="text-brand-primary-400 hover:text-brand-primary-300 underline decoration-brand-primary-400/40 underline-offset-4 transition-colors duration-200 break-words"
                    >
                      Begriffsdefinitionen
                    </a>
                  </li>
                </ul>
              </section>

              {/* Remaining sections with proper styling and full content */}
              <section id="m3">
                <h2 className="text-2xl mb-4 text-fg">
                  Verantwortlicher
                </h2>
                <div className="text-lg leading-relaxed space-y-2">
                  <p>
                    Christian Hollatz
                    <br />
                    Brandoberndorfer Straße 4<br />
                    35647 Waldsolms
                  </p>
                  <p>Vertretungsberechtigte Personen: Fabian Krüger</p>
                  <p>
                    E-Mail-Adresse:{" "}
                    <a
                      href="mailto:christian-hollatz@web.de"
                      className="text-brand-primary-400 hover:text-brand-primary-300 underline decoration-brand-primary-400/40 underline-offset-4 transition-colors duration-200 break-words"
                    >
                      christian-hollatz@web.de
                    </a>
                  </p>
                  <p>Telefon: 01717510707</p>
                  <p>Impressum: fabian-krüger.de/imprint</p>
                </div>
              </section>

              {/* Übersicht der Verarbeitungen */}
              <section id="mOverview">
                <h2 className="text-2xl mb-4 text-fg">
                  Übersicht der Verarbeitungen
                </h2>
                <p className="text-lg leading-relaxed mb-6">
                  Die nachfolgende Übersicht fasst die Arten der verarbeiteten
                  Daten und die Zwecke ihrer Verarbeitung zusammen und verweist
                  auf die betroffenen Personen.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl mb-3 text-fg">
                      Arten der verarbeiteten Daten
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-lg">
                      <li>Bestandsdaten.</li>
                      <li>Zahlungsdaten.</li>
                      <li>Kontaktdaten.</li>
                      <li>Inhaltsdaten.</li>
                      <li>Vertragsdaten.</li>
                      <li>Nutzungsdaten.</li>
                      <li>Meta-, Kommunikations- und Verfahrensdaten.</li>
                      <li>Protokolldaten.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl mb-3 text-fg">
                      Kategorien betroffener Personen
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-lg">
                      <li>Leistungsempfänger und Auftraggeber.</li>
                      <li>Interessenten.</li>
                      <li>Kommunikationspartner.</li>
                      <li>Nutzer.</li>
                      <li>Geschäfts- und Vertragspartner.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl mb-3 text-fg">
                      Zwecke der Verarbeitung
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-lg">
                      <li>
                        Erbringung vertraglicher Leistungen und Erfüllung
                        vertraglicher Pflichten.
                      </li>
                      <li>Kommunikation.</li>
                      <li>Sicherheitsmaßnahmen.</li>
                      <li>Büro- und Organisationsverfahren.</li>
                      <li>Organisations- und Verwaltungsverfahren.</li>
                      <li>Feedback.</li>
                      <li>
                        Bereitstellung unseres Onlineangebotes und
                        Nutzerfreundlichkeit.
                      </li>
                      <li>Informationstechnische Infrastruktur.</li>
                      <li>
                        Geschäftsprozesse und betriebswirtschaftliche Verfahren.
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Maßgebliche Rechtsgrundlagen */}
              <section id="m2427">
                <h2 className="text-2xl mb-4 text-fg">
                  Maßgebliche Rechtsgrundlagen
                </h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    <strong>
                      Maßgebliche Rechtsgrundlagen nach der DSGVO:
                    </strong>{" "}
                    Im Folgenden erhalten Sie eine Übersicht der
                    Rechtsgrundlagen der DSGVO, auf deren Basis wir
                    personenbezogene Daten verarbeiten. Bitte nehmen Sie zur
                    Kenntnis, dass neben den Regelungen der DSGVO nationale
                    Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder
                    Sitzland gelten können. Sollten ferner im Einzelfall
                    speziellere Rechtsgrundlagen maßgeblich sein, teilen wir
                    Ihnen diese in der Datenschutzerklärung mit.
                  </p>

                  <ul className="space-y-3">
                    <li>
                      <strong>
                        Vertragserfüllung und vorvertragliche Anfragen (Art. 6
                        Abs. 1 S. 1 lit. b) DSGVO)
                      </strong>{" "}
                      - Die Verarbeitung ist für die Erfüllung eines Vertrags,
                      dessen Vertragspartei die betroffene Person ist, oder zur
                      Durchführung vorvertraglicher Maßnahmen erforderlich, die
                      auf Anfrage der betroffenen Person erfolgen.
                    </li>
                    <li>
                      <strong>
                        Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c)
                        DSGVO)
                      </strong>{" "}
                      - Die Verarbeitung ist zur Erfüllung einer rechtlichen
                      Verpflichtung erforderlich, der der Verantwortliche
                      unterliegt.
                    </li>
                    <li>
                      <strong>
                        Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f)
                        DSGVO)
                      </strong>{" "}
                      - die Verarbeitung ist zur Wahrung der berechtigten
                      Interessen des Verantwortlichen oder eines Dritten
                      notwendig, vorausgesetzt, dass die Interessen, Grundrechte
                      und Grundfreiheiten der betroffenen Person, die den Schutz
                      personenbezogener Daten verlangen, nicht überwiegen.
                    </li>
                  </ul>

                  <p>
                    <strong>
                      Nationale Datenschutzregelungen in Deutschland:
                    </strong>{" "}
                    Zusätzlich zu den Datenschutzregelungen der DSGVO gelten
                    nationale Regelungen zum Datenschutz in Deutschland. Hierzu
                    gehört insbesondere das Gesetz zum Schutz vor Missbrauch
                    personenbezogener Daten bei der Datenverarbeitung
                    (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält
                    insbesondere Spezialregelungen zum Recht auf Auskunft, zum
                    Recht auf Löschung, zum Widerspruchsrecht, zur Verarbeitung
                    besonderer Kategorien personenbezogener Daten, zur
                    Verarbeitung für andere Zwecke und zur Übermittlung sowie
                    automatisierten Entscheidungsfindung im Einzelfall
                    einschließlich Profiling. Ferner können
                    Landesdatenschutzgesetze der einzelnen Bundesländer zur
                    Anwendung gelangen.
                  </p>

                  <p>
                    <strong>
                      Hinweis auf Geltung DSGVO und Schweizer DSG:
                    </strong>{" "}
                    Diese Datenschutzhinweise dienen sowohl der
                    Informationserteilung nach dem Schweizer DSG als auch nach
                    der Datenschutzgrundverordnung (DSGVO). Aus diesem Grund
                    bitten wir Sie zu beachten, dass aufgrund der breiteren
                    räumlichen Anwendung und Verständlichkeit die Begriffe der
                    DSGVO verwendet werden. Insbesondere statt der im Schweizer
                    DSG verwendeten Begriffe &ldquo;Bearbeitung&rdquo; von
                    &ldquo;Personendaten&rdquo;, &ldquo;überwiegendes
                    Interesse&rdquo; und &ldquo;besonders schützenswerte
                    Personendaten&rdquo; werden die in der DSGVO verwendeten
                    Begriffe &ldquo;Verarbeitung&rdquo; von
                    &ldquo;personenbezogenen Daten&rdquo; sowie
                    &ldquo;berechtigtes Interesse&rdquo; und &ldquo;besondere
                    Kategorien von Daten&rdquo; verwendet. Die gesetzliche
                    Bedeutung der Begriffe wird jedoch im Rahmen der Geltung des
                    Schweizer DSG weiterhin nach dem Schweizer DSG bestimmt.
                  </p>
                </div>
              </section>

              {/* Sicherheitsmaßnahmen */}
              <section id="m27">
                <h2 className="text-2xl mb-4 text-fg">
                  Sicherheitsmaßnahmen
                </h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
                    Berücksichtigung des Stands der Technik, der
                    Implementierungskosten und der Art, des Umfangs, der
                    Umstände und der Zwecke der Verarbeitung sowie der
                    unterschiedlichen Eintrittswahrscheinlichkeiten und des
                    Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher
                    Personen geeignete technische und organisatorische
                    Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu
                    gewährleisten.
                  </p>
                  <p>
                    Zu den Maßnahmen gehören insbesondere die Sicherung der
                    Vertraulichkeit, Integrität und Verfügbarkeit von Daten
                    durch Kontrolle des physischen und elektronischen Zugangs zu
                    den Daten als auch des sie betreffenden Zugriffs, der
                    Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und
                    ihrer Trennung. Des Weiteren haben wir Verfahren
                    eingerichtet, die eine Wahrnehmung von Betroffenenrechten,
                    die Löschung von Daten und Reaktionen auf die Gefährdung der
                    Daten gewährleisten. Ferner berücksichtigen wir den Schutz
                    personenbezogener Daten bereits bei der Entwicklung bzw.
                    Auswahl von Hardware, Software sowie Verfahren entsprechend
                    dem Prinzip des Datenschutzes, durch Technikgestaltung und
                    durch datenschutzfreundliche Voreinstellungen.
                  </p>
                  <p>
                    <strong>
                      Sicherung von Online-Verbindungen durch
                      TLS-/SSL-Verschlüsselungstechnologie (HTTPS):
                    </strong>{" "}
                    Um die Daten der Nutzer, die über unsere Online-Dienste
                    übertragen werden, vor unerlaubten Zugriffen zu schützen,
                    setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie.
                    Secure Sockets Layer (SSL) und Transport Layer Security
                    (TLS) sind die Eckpfeiler der sicheren Datenübertragung im
                    Internet. Diese Technologien verschlüsseln die
                    Informationen, die zwischen der Website oder App und dem
                    Browser des Nutzers (oder zwischen zwei Servern) übertragen
                    werden, wodurch die Daten vor unbefugtem Zugriff geschützt
                    sind. TLS, als die weiterentwickelte und sicherere Version
                    von SSL, gewährleistet, dass alle Datenübertragungen den
                    höchsten Sicherheitsstandards entsprechen. Wenn eine Website
                    durch ein SSL-/TLS-Zertifikat gesichert ist, wird dies durch
                    die Anzeige von HTTPS in der URL signalisiert. Dies dient
                    als ein Indikator für die Nutzer, dass ihre Daten sicher und
                    verschlüsselt übertragen werden.
                  </p>
                </div>
              </section>

              {/* Übermittlung von personenbezogenen Daten */}
              <section id="m25">
                <h2 className="text-2xl mb-4 text-fg">
                  Übermittlung von personenbezogenen Daten
                </h2>
                <p className="text-lg leading-relaxed">
                  Im Rahmen unserer Verarbeitung von personenbezogenen Daten
                  kommt es vor, dass diese an andere Stellen, Unternehmen,
                  rechtlich selbstständige Organisationseinheiten oder Personen
                  übermittelt beziehungsweise ihnen gegenüber offengelegt
                  werden. Zu den Empfängern dieser Daten können z. B. mit
                  IT-Aufgaben beauftragte Dienstleister gehören oder Anbieter
                  von Diensten und Inhalten, die in eine Website eingebunden
                  sind. In solchen Fällen beachten wir die gesetzlichen Vorgaben
                  und schließen insbesondere entsprechende Verträge bzw.
                  Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den
                  Empfängern Ihrer Daten ab.
                </p>
              </section>

              {/* Allgemeine Informationen zur Datenspeicherung und Löschung */}
              <section id="m12">
                <h2 className="text-2xl mb-4 text-fg">
                  Allgemeine Informationen zur Datenspeicherung und Löschung
                </h2>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Wir löschen personenbezogene Daten, die wir verarbeiten,
                    gemäß den gesetzlichen Bestimmungen, sobald die
                    zugrundeliegenden Einwilligungen widerrufen werden oder
                    keine weiteren rechtlichen Grundlagen für die Verarbeitung
                    bestehen. Dies betrifft Fälle, in denen der ursprüngliche
                    Verarbeitungszweck entfällt oder die Daten nicht mehr
                    benötigt werden. Ausnahmen von dieser Regelung bestehen,
                    wenn gesetzliche Pflichten oder besondere Interessen eine
                    längere Aufbewahrung oder Archivierung der Daten erfordern.
                  </p>
                  <p>
                    Insbesondere müssen Daten, die aus handels- oder
                    steuerrechtlichen Gründen aufbewahrt werden müssen oder
                    deren Speicherung notwendig ist zur Rechtsverfolgung oder
                    zum Schutz der Rechte anderer natürlicher oder juristischer
                    Personen, entsprechend archiviert werden.
                  </p>
                  <p>
                    Unsere Datenschutzhinweise enthalten zusätzliche
                    Informationen zur Aufbewahrung und Löschung von Daten, die
                    speziell für bestimmte Verarbeitungsprozesse gelten.
                  </p>
                  <p>
                    Bei mehreren Angaben zur Aufbewahrungsdauer oder
                    Löschungsfristen eines Datums, ist stets die längste Frist
                    maßgeblich. Daten, die nicht mehr für den ursprünglich
                    vorgesehenen Zweck, sondern aufgrund gesetzlicher Vorgaben
                    oder anderer Gründe aufbewahrt werden, verarbeiten wir
                    ausschließlich zu den Gründen, die ihre Aufbewahrung
                    rechtfertigen.
                  </p>
                  <p>
                    <strong>Aufbewahrung und Löschung von Daten:</strong> Die
                    folgenden allgemeinen Fristen gelten für die Aufbewahrung
                    und Archivierung nach deutschem Recht:
                  </p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>
                      10 Jahre - Aufbewahrungsfrist für Bücher und
                      Aufzeichnungen, Jahresabschlüsse, Inventare, Lageberichte,
                      Eröffnungsbilanz sowie die zu ihrem Verständnis
                      erforderlichen Arbeitsanweisungen und sonstigen
                      Organisationsunterlagen (§ 147 Abs. 1 Nr. 1 i.V.m. Abs. 3
                      AO, § 14b Abs. 1 UStG, § 257 Abs. 1 Nr. 1 i.V.m. Abs. 4
                      HGB).
                    </li>
                    <li>
                      8 Jahre - Buchungsbelege, wie z. B. Rechnungen und
                      Kostenbelege (§ 147 Abs. 1 Nr. 4 und 4a i.V.m. Abs. 3 Satz
                      1 AO sowie § 257 Abs. 1 Nr. 4 i.V.m. Abs. 4 HGB).
                    </li>
                    <li>
                      6 Jahre - Übrige Geschäftsunterlagen: empfangene Handels-
                      oder Geschäftsbriefe, Wiedergaben der abgesandten Handels-
                      oder Geschäftsbriefe, sonstige Unterlagen, soweit sie für
                      die Besteuerung von Bedeutung sind, z. B.
                      Stundenlohnzettel, Betriebsabrechnungsbögen,
                      Kalkulationsunterlagen, Preisauszeichnungen, aber auch
                      Lohnabrechnungsunterlagen, soweit sie nicht bereits
                      Buchungsbelege sind und Kassenstreifen (§ 147 Abs. 1 Nr.
                      2, 3, 5 i.V.m. Abs. 3 AO, § 257 Abs. 1 Nr. 2 u. 3 i.V.m.
                      Abs. 4 HGB).
                    </li>
                    <li>
                      3 Jahre - Daten, die erforderlich sind, um potenzielle
                      Gewährleistungs- und Schadensersatzansprüche oder ähnliche
                      vertragliche Ansprüche und Rechte zu berücksichtigen sowie
                      damit verbundene Anfragen zu bearbeiten, basierend auf
                      früheren Geschäftserfahrungen und üblichen
                      Branchenpraktiken, werden für die Dauer der regulären
                      gesetzlichen Verjährungsfrist von drei Jahren gespeichert
                      (§§ 195, 199 BGB).
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            {/* Back to Home Button */}
            <div className="mt-16 border-t border-line pt-8">
              <Link
                href="/"
                className="group inline-flex items-center text-sm text-muted hover:text-fg transition-colors duration-200"
              >
                <svg
                  className="w-4 h-4 mr-2 group-hover:-translate-x-0.5 transition-transform duration-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Zurück zur Startseite</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DataProtectionPage;
