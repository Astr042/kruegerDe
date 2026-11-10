"use client";
import React from "react";
import Link from "next/link";
import { Footer, Navbar } from "../../components";
import "../globals.css";

const ImprintPage = () => {
  return (
    <div className="relative">
      <Navbar />

      {/* Main Content */}
      <main className="relative min-h-screen bg-canvas pt-20 pb-24 px-4 sm:px-6 lg:pt-28 lg:pb-32 lg:px-8">

        <div className="relative max-w-3xl mx-auto">
          {/* Content Container */}
          <div>
            <h1 className="text-5xl lg:text-6xl mb-12 text-fg">
              Imprint / Impressum
            </h1>

            <div className="space-y-10 text-muted">
              <div>
                <p className="text-lg leading-relaxed">
                  Christian Hollatz
                  <br />
                  Hollatz - Software, Hardware, Unterhaltung
                  <br />
                  Brandoberndorfer Straße 4<br />
                  35647 Waldsolms
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-3 text-fg">
                  Kontakt
                </h2>
                <p className="text-lg leading-relaxed">
                  Telefon: 01717510707
                  <br />
                  E-Mail: christian-hollatz@web.de
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-3 text-fg">
                  Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
                </h2>
                <p className="text-lg leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-3 text-fg">
                  Zentrale Kontaktstelle nach dem Digital Services Act - DSA
                  (Verordnung (EU) 2022/265)
                </h2>
                <p className="text-lg leading-relaxed mb-4">
                  Unsere zentrale Kontaktstelle für Nutzer und Behörden nach
                  Art. 11, 12 DSA erreichen Sie wie folgt:
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  E-Mail: christian-hollatz@web.de
                  <br />
                  Telefon: 01717510707
                </p>
                <p className="text-lg leading-relaxed">
                  Die für den Kontakt zur Verfügung stehenden Sprachen sind:
                  Deutsch, Englisch.
                </p>
              </div>
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

export default ImprintPage;
