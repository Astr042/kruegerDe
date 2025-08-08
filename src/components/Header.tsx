import React from "react";
import fabiHeader from "../assets/fabiHeader.jpg";
import Image from "next/image";
import { ServiceTags } from "./ServiceTags";
import { VoiceWave } from "./VoiceWave";
import { MailtoLink } from "./MailtoLink";

export const Header = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden bg-animated">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          {/* Contact Email with modern styling */}
          <div className="absolute top-6 left-6 z-20">
            <MailtoLink email="fk.synchron@gmail.com" />
          </div>

          <main className="pt-32 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="sm:text-center lg:text-left">
              {/* Voice wave animation */}
              <VoiceWave className="mb-8" justify="start" />

              <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 sm:text-6xl md:text-7xl lg:text-8xl leading-tight pb-2">
                Fabian Krüger
              </h1>

              <p className="mt-6 text-2xl text-slate-300 leading-relaxed font-light max-w-2xl">
                <span className="text-orange-400 font-medium">Die Stimme</span>{" "}
                für dein Projekt
              </p>

              {/* Additional tagline */}
              <ServiceTags className="mt-8" justify="start" />

              {/* CTA Button */}
              <div className="mt-10">
                <a
                  href="#hörbuch"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:shadow-orange-500/25 transform hover:-translate-y-1 transition-all duration-300 glow-primary"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Hörproben entdecken
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Hero Image with modern styling */}
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full">
          <Image
            className="h-full w-full object-cover"
            src={fabiHeader}
            alt="Fabian Krüger - Professioneller Sprecher"
            priority
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-slate-900/30 to-slate-900/60 lg:via-transparent lg:to-slate-900/80"></div>
        </div>
      </div>
    </div>
  );
};
