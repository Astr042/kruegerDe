import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Gallery, GalleryImage } from "./Gallery";
import { SectionHeading } from "./SectionHeading";

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
import spleen3325 from "../assets/projects/der-spleen/IMG_3325.jpg";
import spleen3114 from "../assets/projects/der-spleen/IMG_3114.jpg";
import spleen3139 from "../assets/projects/der-spleen/IMG_3139.jpg";
import spleen3144 from "../assets/projects/der-spleen/IMG_3144.jpg";
import spleen3312 from "../assets/projects/der-spleen/IMG_3312.jpg";
import spleen3404 from "../assets/projects/der-spleen/IMG_3404.jpg";

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
  gallery?: GalleryImage[];
};

const projects: Project[] = [
  {
    title: "Der Spleen",
    series: "Komödie nach Friedrich Wilhelm Gotter",
    date: "2026-10-30",
    category: "Theater",
    description:
      "Ein Mann will sterben, seine Frau ihn retten – und alle anderen machen es nur schlimmer. Das Statt Theater Wetzlar brachte die Wirtshaus-Posse des Wetzlarer Goethe-Zeitgenossen vom 30.10. bis 07.11.2026 auf die Bühne.",
    image: spleen3325,
    credit: "© E. Wohlert",
    link: {
      href: "https://www.wetzlar.de/leben-in-wetzlar/veranstaltungen/index.php#/veranstaltungen/RPT/8a50c043-84f5-440c-b582-be416be6668d/statttheater-wetzlar---der-spleen-",
      label: "Zur Veranstaltung",
    },
    gallery: [
      {
        src: spleen3325,
        alt: "Szene auf der Bühne: ein Mann am Boden hebt abwehrend die Hand, ein Herr mit Perücke richtet eine Pistole auf ihn",
      },
      {
        src: spleen3114,
        alt: "Ein bärtiger Mann im Leinenhemd spricht mit ausgestrecktem Arm zum Publikum, vor einer Steinwand mit Zetteln",
      },
      {
        src: spleen3139,
        alt: "Eine Schankmagd mit Haube und ein bärtiger Mann im braunen Rock lachen auf der Bühne",
      },
      {
        src: spleen3144,
        alt: "Bärtiger Mann im braunen Rock lacht und hält eine Karotte in der Hand",
      },
      {
        src: spleen3312,
        alt: "Ein Mann mit Schriftrolle deklamiert, im Hintergrund sitzt ein Herr mit Perücke im Sessel",
      },
      {
        src: spleen3404,
        alt: "Eine Frau in schwarzem Kleid und Kopftuch, hinter ihr ein bärtiger Mann, im Lichtkegel vor einer Steinwand",
      },
    ],
  },
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
    description:
      "Die erste Folge des Kinder-Ablegers der Hörspielreihe 5 Geschwister.",
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
    description:
      "Sprecher für den Vorstellungs-Trailer des Esports-Teams Ryuma.",
    image: ryuma,
    imageFit: "contain",
    credit: "© Ryuma Esports",
    link: {
      href: "https://www.youtube.com/watch?v=SMgHajlBgrY",
      label: "Auf YouTube",
    },
  },
];

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
    className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.75}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14m-5-5 5 5-5 5"
    />
  </svg>
);

const secondaryAction =
  "text-sm text-muted hover:text-fg underline decoration-line-strong underline-offset-4 hover:decoration-fg transition-colors duration-200";

const ProjectCard = ({ project }: { project: Project }) => {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const alt = project.series
    ? `${project.series}: ${project.title}`
    : project.title;

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg bg-surface border border-line hover:border-brand-primary-400/40 transition-colors duration-300">
      {project.image && (
        <figure>
          <div className="relative aspect-square bg-canvas overflow-hidden">
            <Image
              src={project.image}
              alt={alt}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className={`w-full h-full ${
                project.imageFit === "contain"
                  ? "object-contain"
                  : "object-cover"
              }`}
            />
            {project.gallery && (
              <button
                onClick={() => setGalleryOpen(true)}
                aria-label={`Galerie öffnen: ${project.title}`}
                className="absolute inset-0 flex items-end justify-end p-3 cursor-zoom-in"
              >
                <span className="bg-canvas/85 text-fg px-2.5 py-1 rounded-sm text-xs font-medium tracking-wide">
                  {project.gallery.length} Fotos
                </span>
              </button>
            )}
            <span className="absolute top-3 left-3 rounded-full bg-brand-primary-400 px-3 py-1 text-xs font-semibold text-canvas">
              {project.category}
            </span>
          </div>
          {project.credit && (
            <figcaption className="px-6 pt-3 text-xs text-subtle">
              Bild: {project.credit}
            </figcaption>
          )}
        </figure>
      )}

      <div className="flex flex-col flex-1 px-6 pt-4 pb-6">
        <p className="eyebrow text-brand-primary-400 mb-3">
          <time dateTime={project.date}>{formatMonth(project.date)}</time>
        </p>
        {project.series && (
          <p className="text-sm text-muted mb-1">{project.series}</p>
        )}
        <h3 className="text-2xl text-fg mb-3 group-hover:text-brand-primary-200 transition-colors duration-300">{project.title}</h3>
        {project.role && (
          <p className="text-sm text-muted mb-3">
            Rolle: <span className="text-fg">{project.role}</span>
          </p>
        )}
        <p className="text-muted leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-3">
          {project.link && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary-400 hover:text-brand-primary-300 transition-colors duration-200"
            >
              {project.link.label}
              <ArrowIcon />
            </a>
          )}
          {project.sampleHref && (
            <a href={project.sampleHref} className={secondaryAction}>
              Hörprobe
            </a>
          )}
          {project.gallery && (
            <button
              onClick={() => setGalleryOpen(true)}
              className={secondaryAction}
            >
              Galerie
            </button>
          )}
        </div>
      </div>

      {project.gallery && (
        <Gallery
          title={project.title}
          images={project.gallery}
          credit={project.credit}
          open={galleryOpen}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </article>
  );
};

export const Projects = () => {
  return (
    <section
      id="projekte"
      className="relative bg-canvas pt-24 pb-28 px-4 sm:px-6 lg:pt-32 lg:pb-36 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Bisherige Arbeiten" title="Projekte">
          Von Hörspielreihen über Live-Bühnen bis zum Audio-Walk – eine Auswahl
          der Produktionen, an denen ich mitwirken durfte.
        </SectionHeading>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
