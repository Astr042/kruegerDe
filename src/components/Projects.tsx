import React from "react";
import Image, { StaticImageData } from "next/image";

import buch from "../assets/buch.png";
import holmesLippe from "../assets/projects/holmes-lippe.jpg";
import holmesRothaarigen from "../assets/projects/holmes-rothaarigen.jpg";
import sandmann from "../assets/projects/sandmann.jpg";
import lostInTime17 from "../assets/projects/lost-in-time-17.jpg";
import fuenfGeschwisterKids01 from "../assets/projects/fuenf-geschwister-kids-01.jpg";
import fuenfGeschwister49 from "../assets/projects/fuenf-geschwister-49.jpg";
import phantomsee from "../assets/projects/phantomsee.jpg";
import werther from "../assets/projects/werther.jpg";
import superpapagei from "../assets/projects/superpapagei.jpg";
import ryuma from "../assets/projects/ryuma.jpg";

type Project = {
  title: string;
  series?: string;
  date: string;
  category: string;
  description: string;
  role?: string;
  image?: StaticImageData;
  imageFit?: "cover" | "contain";
  credit?: string;
  link?: { href: string; label: string };
  sampleHref?: string;
};

const projects: Project[] = [
  {
    title: "Der Mann mit der entstellten Lippe",
    series: "Die Holmes-Akten · Folge 2",
    date: "2026-10-23",
    category: "Hörspiel",
    description:
      "Ein Familienvater verschwindet plötzlich – die Spur führt zu einem verwahrlosten Bettler im Londoner East End. Holmes und Watson stoßen auf widersprüchliche Hinweise und eine Welt, in der nichts ist, wie es scheint.",
    image: holmesLippe,
    credit: "© SOS Studios",
    link: {
      href: "https://save-it.cc/sos-studios/der-mann-mit-der-entstellten-lippe",
      label: "Jetzt anhören",
    },
  },
  {
    title: "Der Bund der Rothaarigen",
    series: "Die Holmes-Akten · Folge 1",
    date: "2026-09-25",
    category: "Hörspiel",
    description:
      "Der Auftakt der Podcast-Hörspielreihe nach den Sherlock-Holmes-Geschichten von Arthur Conan Doyle.",
    image: holmesRothaarigen,
    credit: "© SOS Studios",
    link: {
      href: "https://open.spotify.com/intl-de/album/6lvYMoGWj5qF1PPhM8HgFs",
      label: "Auf Spotify",
    },
  },
  {
    title: "Der Sandmann",
    series: "Hörtheater nach E. T. A. Hoffmann",
    date: "2026-08-07",
    category: "Hörtheater",
    description:
      "Inszenierte Lesung im Alten Rathaus Wetzlar zum Optikjahr und 250. Geburtstag von E. T. A. Hoffmann – zwischen optischen Instrumenten, täuschend echten Automaten und der Frage, was Wirklichkeit und was Einbildung ist.",
    image: sandmann,
    imageFit: "contain",
    credit: "© Stadt Wetzlar",
    link: {
      href: "https://www.wetzlar.de/rathaus/aktuelles/pressemitteilungen/2026/juli/hoertheater-zu-e.t.a.hoffmanns-der-sandmann.php",
      label: "Zur Pressemitteilung",
    },
    sampleHref: "#hörproben",
  },
  {
    title: "Raphaels Requiem",
    series: "Lost in Time · Folge 17",
    date: "2026-05-28",
    category: "Hörspiel",
    role: "Agent Justin Tend",
    description:
      "Das Totenreich wurde geöffnet: Die Urhexe und ihr Dämonenzirkel jagen das Geheimnis des Erzengels Raphael – und für die Dämonenjäger beginnt ein Wettlauf gegen die Zeit.",
    image: lostInTime17,
    credit: "© dragonsounds.de",
    link: {
      href: "https://open.spotify.com/episode/3F7N98uxAt9cXfjSHsyfQT",
      label: "Auf Spotify",
    },
  },
  {
    title: "Der Fahrraddieb",
    series: "5 Geschwister Kids · Folge 1",
    date: "2026-02-20",
    category: "Kinderhörspiel",
    description: "Die erste Folge des Kinder-Ablegers der Hörspielreihe 5 Geschwister.",
    image: fuenfGeschwisterKids01,
    credit: "© 5 Geschwister",
    link: {
      href: "https://open.spotify.com/intl-de/album/5IvJy1Du9wegfIZQpmih6q",
      label: "Auf Spotify",
    },
  },
  {
    title: "Spuren der Erinnerung",
    series: "5 Geschwister · Folge 49",
    date: "2026-01-23",
    category: "Hörspiel",
    description: "Folge 49 der Hörspielreihe 5 Geschwister.",
    image: fuenfGeschwister49,
    credit: "© 5 Geschwister",
    link: {
      href: "https://open.spotify.com/intl-de/album/3FLrbCNWZmti3qBQCCLbSb",
      label: "Auf Spotify",
    },
  },
  {
    title: "Der Phantomsee",
    series: "Die drei ??? Mitmachhörspiel · Offenbach",
    date: "2025-10-22",
    category: "Live-Hörspiel",
    description:
      "Live auf der Bühne der Stadthalle Offenbach mit der Lauscherlounge – ein Abend zum Mitlachen und Mitfiebern.",
    image: phantomsee,
    credit: "© Lauscherlounge",
    link: {
      href: "https://www.instagram.com/p/DO-o3j6ivnJ/",
      label: "Auf Instagram",
    },
  },
  {
    title: "Geschichten aus Tausend und einem Turnier",
    date: "2025-08-07",
    category: "Hörbuch",
    description:
      "Eine anekdotische Nacherzählung über den Werdegang eines Juggerspielers und eine Sammlung märchenhafter Geschichten aus der Szene.",
    image: buch,
    link: {
      href: "https://www.audible.de/pd/Geschichten-aus-tausend-und-einem-Turnier-Hoerbuch/B0FL2Q93VT",
      label: "Auf Audible",
    },
  },
  {
    title: "Wer schoss auf Werther?",
    series: "True-Crime-Audio-Walk · Wetzlar",
    date: "2024-06-16",
    category: "Audio-Walk",
    description:
      "Ein Audio-Walk durch Wetzlar über die App Hearonymus: Schlüpft in die Rolle der Ermittler und findet heraus, wer auf den jungen Herrn Werther schoss.",
    image: werther,
    credit: "Foto: Dominik Ketz, CC BY 4.0",
    link: {
      href: "https://www.wetzlar.de/tourismus/entdecken-und-erleben/stadtrallyes/audioguides.php",
      label: "Zum Audio-Walk",
    },
    sampleHref: "#hörproben",
  },
  {
    title: "Der Superpapagei",
    series: "Die drei ??? Mitmachhörspiel · Darmstadt",
    date: "2023-10-02",
    category: "Live-Hörspiel",
    description:
      "Mitmachhörspiel der Lauscherlounge live im darmstadtium – der vorletzte Halt der Tour.",
    image: superpapagei,
    credit: "© Lauscherlounge",
    link: {
      href: "https://www.instagram.com/p/Cx8KspEMoZ9/",
      label: "Auf Instagram",
    },
    sampleHref: "#hörproben",
  },
  {
    title: "We are Ryuma Esports",
    series: "Ryuma Esports · Trailer",
    date: "2023-06-09",
    category: "Trailer",
    description: "Sprecher für den Vorstellungs-Trailer des Esports-Teams Ryuma.",
    image: ryuma,
    imageFit: "contain",
    credit: "© Ryuma Esports",
    link: {
      href: "https://www.youtube.com/watch?v=SMgHajlBgrY",
      label: "Auf YouTube",
    },
  },
];

const upcoming = {
  title: "Der Spleen",
  series: "Komödie nach Friedrich Wilhelm Gotter",
  dateLabel: "30.10. – 07.11.2026",
  category: "Theater",
  description:
    "Ein Mann will sterben, seine Frau ihn retten – und alle anderen machen es nur schlimmer. Das Statt Theater Wetzlar bringt die Wirtshaus-Posse des Wetzlarer Goethe-Zeitgenossen auf die Bühne.",
  link: {
    href: "https://www.wetzlar.de/leben-in-wetzlar/veranstaltungen/index.php#/veranstaltungen/RPT/8a50c043-84f5-440c-b582-be416be6668d/statttheater-wetzlar---der-spleen-",
    label: "Zur Veranstaltung",
  },
};

const months = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

const formatMonth = (isoDate: string) => {
  const [year, month] = isoDate.split("-");
  return `${months[Number(month) - 1]} ${year}`;
};

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      fillRule="evenodd"
      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="group flex flex-col bg-linear-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-slate-700/50 hover:border-brand-primary-500/30 transition-all duration-500 hover:shadow-brand-primary-500/10">
    {project.image && (
      <div className="relative aspect-square bg-slate-950 overflow-hidden">
        <Image
          src={project.image}
          alt={project.series ? `${project.series}: ${project.title}` : project.title}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={`w-full h-full ${
            project.imageFit === "contain" ? "object-contain" : "object-cover"
          }`}
        />
        <div className="absolute top-4 left-4 bg-linear-to-r from-brand-primary-500 to-brand-secondary-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {project.category}
        </div>
      </div>
    )}

    <div className="flex flex-col flex-1 p-6">
      {project.credit && (
        <p className="text-xs text-slate-500 -mt-3 mb-3">
          Bild: {project.credit}
        </p>
      )}
      <p className="text-sm text-brand-primary-400 font-medium mb-2">
        {formatMonth(project.date)}
      </p>
      {project.series && (
        <p className="text-sm text-slate-400 mb-1">{project.series}</p>
      )}
      <h4 className="text-2xl font-bold text-slate-200 mb-3 group-hover:text-brand-primary-400 transition-colors duration-300">
        {project.title}
      </h4>
      {project.role && (
        <p className="text-slate-300 mb-3">
          Rolle: <span className="font-semibold">{project.role}</span>
        </p>
      )}
      <p className="text-slate-400 leading-relaxed mb-6">
        {project.description}
      </p>

      <div className="mt-auto flex flex-wrap items-center gap-3">
        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-linear-to-r from-brand-primary-500 to-brand-primary-600 hover:from-brand-primary-600 hover:to-brand-primary-700 text-white text-sm font-semibold rounded-xl shadow-lg transition-all duration-300 group/link"
          >
            {project.link.label}
            <ArrowIcon />
          </a>
        )}
        {project.sampleHref && (
          <a
            href={project.sampleHref}
            className="inline-flex items-center px-4 py-2 border border-brand-accent-emerald-500/50 text-brand-accent-emerald-400 hover:bg-brand-accent-emerald-500/10 text-sm font-semibold rounded-xl transition-all duration-300"
          >
            Hörprobe
          </a>
        )}
      </div>
    </div>
  </article>
);

export const Projects = () => {
  return (
    <section
      id="projekte"
      className="relative bg-linear-to-br from-slate-900 via-brand-primary-900/10 to-slate-900 pt-20 pb-32 px-4 sm:px-6 lg:pt-32 lg:pb-40 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 -right-20 w-96 h-96 bg-brand-secondary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 -left-20 w-80 h-80 bg-brand-primary-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-brand-primary-400 via-brand-secondary-400 to-brand-accent-emerald-400 mb-6 pb-2">
            Projekte
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Von Hörspielreihen über Live-Bühnen bis zum Audio-Walk – eine
            Auswahl der Produktionen, an denen ich mitwirken durfte
          </p>
        </div>

        {/* Upcoming */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-brand-accent-emerald-400 to-brand-accent-teal-400 mb-8 px-4">
            Demnächst
          </h3>

          <div className="bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-slate-700/50 hover:border-brand-primary-500/30 transition-all duration-500">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="shrink-0 text-center lg:text-left">
                <div className="inline-block bg-linear-to-r from-brand-primary-500 to-brand-secondary-500 text-white px-4 py-2 rounded-2xl text-sm font-semibold shadow-lg mb-3">
                  {upcoming.category}
                </div>
                <p className="text-2xl font-bold text-slate-200">
                  {upcoming.dateLabel}
                </p>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h4 className="text-3xl font-bold text-slate-200 mb-1">
                  {upcoming.title}
                </h4>
                <p className="text-slate-400 mb-4">{upcoming.series}</p>
                <p className="text-slate-300 leading-relaxed mb-6">
                  {upcoming.description}
                </p>
                <a
                  href={upcoming.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-linear-to-r from-brand-primary-500 to-brand-primary-600 hover:from-brand-primary-600 hover:to-brand-primary-700 text-white font-semibold rounded-2xl shadow-xl transition-all duration-300 group/link"
                >
                  {upcoming.link.label}
                  <ArrowIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Past projects */}
        <h3 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-linear-to-r from-brand-primary-400 to-brand-secondary-400 mb-8 px-4">
          Bisherige Projekte
        </h3>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
