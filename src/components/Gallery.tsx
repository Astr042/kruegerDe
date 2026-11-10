import React, { useCallback, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export type GalleryImage = {
  src: StaticImageData;
  alt: string;
};

type GalleryProps = {
  title: string;
  images: GalleryImage[];
  credit?: string;
  open: boolean;
  startIndex?: number;
  onClose: () => void;
};

const SWIPE_THRESHOLD = 50;

export const Gallery = ({
  title,
  images,
  credit,
  open,
  startIndex = 0,
  onClose,
}: GalleryProps) => {
  const [index, setIndex] = useState(startIndex);
  const touchStartX = useRef<number | null>(null);
  const activeThumb = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (open) setIndex(startIndex);
  }, [open, startIndex]);

  const prev = useCallback(
    () => setIndex((i) => (i - 1 + images.length) % images.length),
    [images.length],
  );
  const next = useCallback(
    () => setIndex((i) => (i + 1) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, prev, next]);

  useEffect(() => {
    activeThumb.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [index]);

  const current = images[index];

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-slate-950/95 backdrop-blur-sm" />

      <div className="fixed inset-0 flex flex-col">
        <DialogPanel className="flex flex-col h-full w-full">
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
            <div className="min-w-0">
              <DialogTitle className="text-lg font-bold text-slate-200 truncate">
                {title}
              </DialogTitle>
              <p className="text-sm text-slate-400">
                {index + 1} / {images.length}
                {credit && <span className="ml-3">Fotos: {credit}</span>}
              </p>
            </div>
            <button
              onClick={onClose}
              aria-label="Galerie schließen"
              className="shrink-0 p-2 rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Main image */}
          <div
            className="relative flex-1 min-h-0 mx-2 sm:mx-16"
            onTouchStart={(e) => {
              touchStartX.current = e.touches[0].clientX;
            }}
            onTouchEnd={(e) => {
              if (touchStartX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchStartX.current;
              if (dx > SWIPE_THRESHOLD) prev();
              if (dx < -SWIPE_THRESHOLD) next();
              touchStartX.current = null;
            }}
          >
            <Image
              key={index}
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              placeholder="blur"
              className="object-contain"
            />
          </div>

          {images.length > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Vorheriges Bild"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 text-slate-200 hover:bg-brand-primary-600 hover:text-white transition-colors hidden sm:block"
              >
                <ChevronLeftIcon fontSize="large" />
              </button>
              <button
                onClick={next}
                aria-label="Nächstes Bild"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-900/70 text-slate-200 hover:bg-brand-primary-600 hover:text-white transition-colors hidden sm:block"
              >
                <ChevronRightIcon fontSize="large" />
              </button>

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto px-4 py-4 sm:justify-center">
                {images.map((image, i) => (
                  <button
                    key={i}
                    ref={i === index ? activeThumb : undefined}
                    onClick={() => setIndex(i)}
                    aria-label={`Bild ${i + 1} anzeigen`}
                    aria-current={i === index}
                    className={`relative shrink-0 w-20 h-14 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      i === index
                        ? "border-brand-primary-400 opacity-100"
                        : "border-transparent opacity-50 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </>
          )}
        </DialogPanel>
      </div>
    </Dialog>
  );
};
