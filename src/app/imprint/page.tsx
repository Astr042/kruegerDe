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
      <main className="relative min-h-screen bg-gradient-to-br from-slate-900 via-brand-secondary-900/20 to-slate-900 pt-20 pb-16 px-4 sm:px-6 lg:pt-32 lg:pb-24 lg:px-8">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 -left-20 w-80 h-80 bg-brand-primary-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-brand-accent-emerald-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Content Container */}
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-700/50">
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-400 to-brand-secondary-400">
              Imprint / Impressum
            </h1>

            <div className="space-y-6 text-slate-300">
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
                <h2 className="text-2xl font-semibold mb-3 text-brand-primary-400">
                  Kontakt
                </h2>
                <p className="text-lg leading-relaxed">
                  Telefon: 01717510707
                  <br />
                  E-Mail: christian-hollatz@web.de
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3 text-brand-primary-400">
                  Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
                </h2>
                <p className="text-lg leading-relaxed">
                  Wir sind nicht bereit oder verpflichtet, an
                  Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3 text-brand-primary-400">
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
            <div className="mt-12 text-center">
              <Link
                href="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-primary-500 to-brand-primary-600 hover:from-brand-primary-600 hover:to-brand-primary-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-brand-primary-500/25 transform hover:-translate-y-1 transition-all duration-300 group"
              >
                <svg
                  className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300"
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
