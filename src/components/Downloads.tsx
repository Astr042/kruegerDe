import React from "react";
import { AudioButton } from "./Audio";
import korra from "../assets/korra.mp4";
import vaiana from "../assets/vaiana.mp4";
import darkShadows from "../assets/darkShadows.mp4";
import jugger from "../assets/kapitel-1-jugger.mp3";
import buch from "../assets/buch.png";
import audibleLogo from "../assets/audible-logo.png";
import Image from "next/image";

import helikopter from "../assets/helikopter.mp3";
import herrenmode from "../assets/herrenmode.mp3";
import nimmerPlatt from "../assets/nimmerPlatt.mp3";
import rafael from "../assets/rafael.mp3";
import sandmann from "../assets/sandmann.mp3";
import fragezeichen from "../assets/3Fragezeichen.mp3";
import werther from "../assets/wer-schoss-auf-werther.mp3";
import AudioPlayer from "./Audio/AudioPlayer";

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
    <div className="relative bg-gray-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative w-full md:w-2/3 mx-auto">
        {/* Audiobook Section */}
        <div className="mb-16">
          <div className="bg-gray-700 rounded-lg p-6 shadow-lg">
            <div className="flex flex-col lg:flex-row">
              <Image
                src={buch}
                alt="Buchcover"
                className="w-full lg:w-64 lg:pr-6 mb-4 lg:mb-0"
              />
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">
                  Geschichten aus Tausend und einem Turnier
                </h2>
                <p className="text-gray-200 mb-4">
                  Ist zum einen eine anekdotische Nacherzählung die den
                  Werdegang und die Erlebnisse eines Juggerspielers, der
                  zufällig auch noch mein Bruder ist, und zum anderen eine
                  Sammlung an märchenhaften Geschichten anderer aus der Szene,
                  rund um die Entstehung und die Commmunity. Du weißt nicht was
                  Jugger ist? Das erkläre ich Dir direkt im ersten Kapitel in
                  das Du hier schoneinmal reinlauschen kannst
                </p>
                <div className="mb-4">
                  <AudioPlayer
                    rounded
                    key="jugger-audiobook"
                    audioSrc={jugger}
                  />
                </div>
                <div className="text-gray-200">
                  <p className="mb-3">
                    Das komplette Hörbuch findest Du auf Audible:
                  </p>
                  <a
                    href="https://www.audible.de/pd/Geschichten-aus-tausend-und-einem-Turnier-Hoerbuch/B0FL2Q93VT?source_code=ASSORAP0511160007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:opacity-80 hover:scale-105 transition-all duration-200 bg-orange-500 hover:bg-orange-600 rounded-lg p-3 shadow-lg"
                  >
                    <Image
                      src={audibleLogo}
                      alt="Jetzt auf Audible anhören - Hier klicken"
                      className="h-8 w-auto"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-blue-400 sm:text-4xl">
            Hörproben
          </h2>
          <p className="mt-3 mx-auto text-xl text-gray-200 sm:mt-4 leading-8">
            Hier ein paar (Hör-) Proben meiner bisherigen Arbeiten
          </p>
        </div>

        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-2 lg:max-w-none">
          <div>
            {posts.map((post) => (
              <div
                key={post.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden mb-8"
              >
                {post.audioSrc && (
                  <div className="flex-shrink-0">
                    <AudioPlayer key={post.title} audioSrc={post.audioSrc} />
                  </div>
                )}

                <div className="flex-1 bg-gray-700 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-gray-200">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-200">
                        {post.description}
                      </p>
                    </div>
                  </div>
                  {post.videoSrc && (
                    <div style={{ alignSelf: "end" }}>
                      <AudioButton
                        type="download"
                        downloadSrc={post.videoSrc}
                      />
                    </div>
                  )}
                </div>
                {post.videoSrc && (
                  <div className="flex-shrink-0">
                    <video width="100%" height="auto" controls>
                      <source src={post.videoSrc} type="video/mp4" />
                    </video>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div>
            {projects.map((post) => (
              <div
                key={post.title}
                className="flex flex-col rounded-lg shadow-lg overflow-hidden mb-8"
              >
                {post.audioSrc && (
                  <div className="flex-shrink-0">
                    <AudioPlayer key={post.title} audioSrc={post.audioSrc} />
                  </div>
                )}

                <div className="flex-1 bg-gray-700 p-6 flex flex-col justify-between">
                  <div className="flex-1">
                    <div className="block mt-2">
                      <p className="text-xl font-semibold text-gray-200">
                        {post.title}
                      </p>
                      <p className="mt-3 text-base text-gray-200">
                        {post.description}
                      </p>
                    </div>
                  </div>
                  {post.videoSrc && (
                    <div style={{ alignSelf: "end" }}>
                      <AudioButton
                        type="download"
                        downloadSrc={post.videoSrc}
                      />
                    </div>
                  )}
                </div>
                {post.videoSrc && (
                  <div className="flex-shrink-0">
                    <video width="100%" height="auto" controls>
                      <source src={post.videoSrc} type="video/mp4" />
                    </video>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <p className="text-gray-200 text-xs mt-4">
          Sollten Sie Probleme mit dem Abspielen der Dateien haben, deaktivieren
          Sie bitte Ihren Adblocker.
        </p>
      </div>
    </div>
  );
};
