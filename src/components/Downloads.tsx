import React from "react";
import korra from "../assets/korra.mp4";
import vaiana from "../assets/vaiana.mp4";
import darkShadows from "../assets/darkShadows.mp4";
import korraPreview from "../assets/previews/korra-preview.jpg";
import vaianaPreview from "../assets/previews/vaiana-preview.jpg";
import darkShadowsPreview from "../assets/previews/darkShadows-preview.jpg";
// import jugger from "../assets/kapitel-1-jugger.mp3";
// import buch from "../assets/buch.png";
// import audibleLogo from "../assets/audible-logo.png";
// import Image from "next/image";
import { VideoPlayer } from "./Video";

import helikopter from "../assets/helikopter.mp3";
import herrenmode from "../assets/herrenmode.mp3";
import nimmerPlatt from "../assets/nimmerPlatt.mp3";
import rafael from "../assets/rafael.mp3";
import sandmann from "../assets/sandmann.mp3";
import fragezeichen from "../assets/3Fragezeichen.mp3";
import werther from "../assets/wer-schoss-auf-werther.mp3";
import AudioPlayer from "./Audio/AudioPlayer";
import { SectionHeading } from "./SectionHeading";

const posts = [
  {
    title: "Die Legende von Korra",
    description: "",
    videoSrc: korra,
    poster: korraPreview,
    audioSrc: undefined,
  },
  {
    title: "Vaiana",
    description: "",
    videoSrc: vaiana,
    poster: vaianaPreview,
    audioSrc: undefined,
  },
  {
    title: "Dark Shadows",
    description: "",
    videoSrc: darkShadows,
    poster: darkShadowsPreview,
    audioSrc: undefined,
  },
];

const projects = [
  {
    title: "Wer schoss auf Werther?",
    credit: "True-Crime-Audio-Walk · © Kulturamt der Stadt Wetzlar",
    audioSrc: werther,
  },
  {
    title: "Die drei ??? und der Superpapagei",
    credit: "Mitmachhörspiel · © Lauscherlounge",
    audioSrc: fragezeichen,
  },
  { title: "Herrenmode", audioSrc: herrenmode },
  { title: "Rafael", audioSrc: rafael },
  { title: "Helikopter", audioSrc: helikopter },
  { title: "Der Sandmann", audioSrc: sandmann },
  { title: "Der kleine Junkie Nimmerplatt", audioSrc: nimmerPlatt },
];

export const Downloads = () => {
  return (
    <section
      id="hörbuch"
      className="relative bg-band border-y border-line pt-24 pb-28 px-4 sm:px-6 lg:pt-32 lg:pb-36 lg:px-8"
    >
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Audiobook Section – hidden for now, the Projekte section replaces it
        <div className="mb-24">
          <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-700/50 hover:border-brand-primary-500/30 transition-all duration-500 group">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="relative mb-8 lg:mb-0 lg:mr-8">
                <Image
                  src={buch}
                  alt="Buchcover - Geschichten aus Tausend und einem Turnier"
                  className="w-72 lg:w-80 rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-linear-to-r from-brand-primary-500 to-brand-secondary-500 text-white px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg">
                  Hörbuch
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-brand-primary-400 to-brand-secondary-400">
                  Geschichten aus Tausend und einem Turnier
                </h2>

                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  Eine anekdotische Nacherzählung über den Werdegang und die
                  Erlebnisse eines Juggerspielers, und eine Sammlung
                  märchenhafter Geschichten aus der Szene. Du weißt nicht was
                  Jugger ist? Das erkläre ich Dir direkt im ersten Kapitel!
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-brand-primary-400 mb-4 flex items-center justify-center lg:justify-start">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Kapitel 1 - Kostenlose Hörprobe
                  </h3>
                  <AudioPlayer
                    rounded
                    key="jugger-audiobook"
                    audioSrc={jugger}
                  />
                </div>

                <div className="text-center lg:text-left">
                  <p className="text-slate-300 mb-6 text-lg">
                    Das komplette Hörbuch findest Du auf Audible:
                  </p>
                  <a
                    href="https://www.audible.de/pd/Geschichten-aus-tausend-und-einem-Turnier-Hoerbuch/B0FL2Q93VT?source_code=ASSORAP0511160007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-linear-to-r from-brand-primary-500 to-brand-primary-600 hover:from-brand-primary-600 hover:to-brand-primary-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-brand-primary-500/25 transform hover:-translate-y-1 transition-all duration-300 group/audible"
                  >
                    <Image
                      src={audibleLogo}
                      alt=""
                      className="h-8 w-auto mr-3"
                    />
                    <span>Jetzt auf Audible anhören</span>
                    <svg
                      className="w-5 h-5 ml-2 group-hover/audible:translate-x-1 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        */}

        <div id="hörproben" className="scroll-mt-8">
          <SectionHeading eyebrow="Anhören" title="Hörproben">
            Ein paar Proben meiner bisherigen Arbeiten – von Synchronisation bis
            hin zu Hörspielen.
          </SectionHeading>
        </div>

        <div className="space-y-20">
          {/* Synchronisation & Video */}
          <div className="min-w-0">
            <h3 className="eyebrow text-muted mb-6">Synchronisation & Video</h3>
            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map(
                (post) =>
                  post.videoSrc && (
                    <figure key={post.title} className="w-full min-w-0">
                      <VideoPlayer
                        videoSrc={post.videoSrc}
                        poster={post.poster}
                        title={post.title}
                        rounded
                      />
                      <figcaption className="mt-3 font-display text-xl text-fg">
                        {post.title}
                      </figcaption>
                    </figure>
                  )
              )}
            </div>
          </div>

          {/* Hörspiele & Projekte */}
          <div className="min-w-0">
            <h3 className="eyebrow text-muted mb-6">Hörspiele & Projekte</h3>
            <div className="grid lg:grid-cols-2 lg:gap-x-12 rounded-lg bg-surface-raised border border-line px-5 sm:px-6 py-1">
              {[
                projects.slice(0, Math.ceil(projects.length / 2)),
                projects.slice(Math.ceil(projects.length / 2)),
              ].map((column, i) => (
                <ul
                  key={i}
                  className={`divide-y divide-line ${
                    i > 0 ? "border-t border-line lg:border-t-0" : ""
                  }`}
                >
                  {column.map((post) => (
                    <li key={post.title}>
                      <AudioPlayer
                        audioSrc={post.audioSrc}
                        title={post.title}
                        credit={post.credit}
                      />
                    </li>
                  ))}
                </ul>
              ))}
            </div>
            <p className="mt-8 text-sm text-subtle leading-relaxed">
              Probleme beim Abspielen? Dann hilft es meist, den Adblocker für
              diese Seite zu deaktivieren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
