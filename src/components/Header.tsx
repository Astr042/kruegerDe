import React from "react";
import fabiHeader from "../assets/fabiHeader.jpg";
import Image from "next/image";
import { ServiceTags } from "./ServiceTags";
import { VoiceWave } from "./VoiceWave";
import { MailtoLink } from "./MailtoLink";

const navLinks = [
  { href: "#projekte", label: "Projekte" },
  { href: "#hörproben", label: "Hörproben" },
  { href: "#kontakt", label: "Kontakt" },
];

export const Header = () => {
  return (
    <header className="relative hero-bg overflow-hidden px-4 sm:px-6 lg:px-8 lg:min-h-[100svh]">
      {/* Top bar */}
      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-6 py-6 lg:w-1/2 lg:pr-12">
          <nav aria-label="Hauptnavigation">
            <ul className="flex gap-6 text-sm text-muted">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-fg transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="hidden sm:block">
            <MailtoLink email="fk.synchron@gmail.com" variant="header" />
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="pt-12 pb-16 sm:pt-20 lg:w-1/2 lg:pr-12 lg:pt-[18vh] lg:pb-32">
          <div className="flex items-center gap-4 mb-8">
            <VoiceWave justify="start" size={1.25} />
            <p className="eyebrow text-brand-primary-400">Sprecher</p>
          </div>

          <h1 className="font-display text-6xl sm:text-7xl xl:text-8xl text-fg leading-[0.95] tracking-tight">
            Fabian
            <br />
            Krüger
          </h1>

          <p className="mt-8 text-xl sm:text-2xl text-muted font-light max-w-md">
            <span className="text-fg">Die Stimme</span> für dein Projekt.
          </p>

          <ServiceTags className="mt-6" justify="start" />

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#hörproben"
              className="inline-flex items-center gap-3 rounded-full bg-brand-primary-400 pl-2 pr-6 py-2 text-canvas font-medium hover:bg-brand-primary-300 transition-colors duration-200"
            >
              <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-canvas text-brand-primary-400">
                <svg
                  className="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M6.5 5.14v13.72a1 1 0 0 0 1.52.85l10.6-6.86a1 1 0 0 0 0-1.7L8.02 4.29A1 1 0 0 0 6.5 5.14Z" />
                </svg>
              </span>
              Hörproben anhören
            </a>
            <a
              href="#projekte"
              className="text-fg underline decoration-line-strong underline-offset-[6px] hover:decoration-brand-primary-400 transition-colors duration-200"
            >
              Projekte ansehen
            </a>
          </div>
        </div>
      </div>

      {/* Portrait */}
      <div className="relative -mx-4 sm:-mx-6 lg:mx-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-[28rem] w-full sm:h-[36rem] lg:h-full">
          <Image
            className="h-full w-full object-cover object-[50%_35%]"
            src={fabiHeader}
            alt="Porträt von Fabian Krüger"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
          {/* Blend the photo into the page */}
          <div className="absolute inset-0 bg-linear-to-t from-canvas via-transparent to-canvas/90 lg:bg-linear-to-r lg:from-canvas lg:via-canvas/10 lg:to-transparent" />
          <div className="hidden lg:block absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-canvas to-transparent" />
        </div>
      </div>
    </header>
  );
};
