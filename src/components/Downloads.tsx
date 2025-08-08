import React from "react";
import korra from "../assets/korra.mp4";
import vaiana from "../assets/vaiana.mp4";
import darkShadows from "../assets/darkShadows.mp4";
import jugger from "../assets/kapitel-1-jugger.mp3";
import buch from "../assets/buch.png";
import audibleLogo from "../assets/audible-logo.png";
import Image from "next/image";
import { VideoPlayer } from "./Video";

import helikopter from "../assets/helikopter.mp3";
import herrenmode from "../assets/herrenmode.mp3";
import nimmerPlatt from "../assets/nimmerPlatt.mp3";
import rafael from "../assets/rafael.mp3";
import sandmann from "../assets/sandmann.mp3";
import fragezeichen from "../assets/3Fragezeichen.mp3";
import werther from "../assets/wer-schoss-auf-werther.mp3";
import AudioPlayer from "./Audio/AudioPlayer";
import { VoiceWave } from "./VoiceWave";

const posts = [
  {
    title: "Die Legende von Korra",
    description: "",
    videoSrc: korra,
    audioSrc: undefined,
  },
  {
    title: "Vaiana",
    description: "",
    videoSrc: vaiana,
    audioSrc: undefined,
  },
  {
    title: "Dark Shadows",
    description: "",
    videoSrc: darkShadows,
    audioSrc: undefined,
  },
];

const projects = [
  {
    title:
      "Wer schoss auf Werther? - Ein True-Crime Audio-Walk (©Kulturamt der Stadt Wetzlar)",
    description: ``,
    videoSrc: undefined,
    audioSrc: werther,
  },
  {
    title:
      "Die drei Fragezeichen und der Superpapagei Mitmachhörspiel (©Lauscherlounge)",
    description: ``,
    videoSrc: undefined,
    audioSrc: fragezeichen,
  },
  {
    title: "Herrenmode",
    description: ``,
    videoSrc: undefined,
    audioSrc: herrenmode,
  },
  {
    title: "Rafael",
    description: ``,
    videoSrc: undefined,
    audioSrc: rafael,
  },
  {
    title: "Helikopter",
    description: ``,
    videoSrc: undefined,
    audioSrc: helikopter,
  },
  {
    title: "Der Sandmann",
    description: ``,
    videoSrc: undefined,
    audioSrc: sandmann,
  },
  {
    title: "Der kleine Junkie Nimmerplatt",
    description: ``,
    videoSrc: undefined,
    audioSrc: nimmerPlatt,
  },
];

export const Downloads = () => {
  return (
    <div
      id="hörbuch"
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-brand-secondary-900/20 to-slate-900 pt-20 pb-32 px-4 sm:px-6 lg:pt-32 lg:pb-40 lg:px-8 bg-animated"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 -left-20 w-80 h-80 bg-brand-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-brand-accent-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Audiobook Section */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-700/50 hover:border-brand-primary-500/30 transition-all duration-500 group">
            <div className="flex flex-col lg:flex-row items-center lg:items-start">
              <div className="relative mb-8 lg:mb-0 lg:mr-8">
                <Image
                  src={buch}
                  alt="Buchcover - Geschichten aus Tausend und einem Turnier"
                  className="w-72 lg:w-80 rounded-2xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-brand-primary-500 to-brand-secondary-500 text-white px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg">
                  Hörbuch
                </div>
              </div>

              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-400 to-brand-secondary-400">
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
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-brand-primary-500 to-brand-primary-600 hover:from-brand-primary-600 hover:to-brand-primary-700 text-white font-semibold rounded-2xl shadow-xl hover:shadow-2xl hover:shadow-brand-primary-500/25 transform hover:-translate-y-1 transition-all duration-300 group/audible"
                  >
                    <Image
                      src={audibleLogo}
                      alt=""
                      className="h-8 w-auto mr-3 group-hover/audible:scale-110 transition-transform duration-300"
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

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-400 via-brand-secondary-400 to-brand-accent-emerald-400 mb-6">
            Hörproben
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Hier ein paar Proben meiner bisherigen Arbeiten - von
            Synchronisation bis hin zu Hörspielen
          </p>

          <div className="flex justify-center mt-8">
            <VoiceWave />
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Video/Synchronisation Section */}
          <div className="space-y-8 min-w-0">
            <h3 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-brand-accent-emerald-400 to-brand-accent-teal-400 mb-8 px-4">
              Synchronisation & Video
            </h3>
            <div className="space-y-8">
              {posts.map(
                (post) =>
                  post.videoSrc && (
                    <div key={post.title} className="w-full min-w-0">
                      <VideoPlayer
                        videoSrc={post.videoSrc}
                        title={post.title}
                        rounded={true}
                      />
                    </div>
                  )
              )}
            </div>
          </div>

          {/* Audio/Projects Section */}
          <div className="space-y-8 min-w-0">
            <h3 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-brand-primary-400 to-brand-secondary-400 mb-8 px-4">
              Hörspiele & Projekte
            </h3>
            {projects.map((post, index) => (
              <div
                key={post.title}
                className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 hover:border-brand-primary-500/30 transition-all duration-500 hover:shadow-brand-primary-500/10"
                style={{ animationDelay: `${(index + posts.length) * 0.1}s` }}
              >
                {post.audioSrc && (
                  <div className="p-6 pb-0">
                    <div className="relative">
                      <AudioPlayer
                        key={post.title}
                        audioSrc={post.audioSrc}
                        rounded
                      />
                      <div className="absolute -top-4 -right-4 bg-gradient-to-r from-brand-accent-emerald-500 to-brand-accent-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Audio
                      </div>
                    </div>
                  </div>
                )}

                <div className="p-8 pt-6">
                  <h4 className="text-2xl font-bold text-slate-200 mb-4 group-hover:text-brand-primary-400 transition-colors duration-300">
                    {post.title}
                  </h4>
                  {post.description && (
                    <p className="text-slate-400 leading-relaxed">
                      {post.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <p className="text-slate-400 text-sm bg-slate-800/50 rounded-2xl p-4 backdrop-blur border border-slate-700/50">
            💡 <strong>Hinweis:</strong> Sollten Sie Probleme mit dem Abspielen
            der Dateien haben, deaktivieren Sie bitte Ihren Adblocker.
          </p>
        </div>
      </div>
    </div>
  );
};
