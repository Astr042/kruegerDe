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
  const thumbStrip = useRef<HTMLDivElement | null>(null);

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

  // Keep the active thumbnail in view by scrolling only the strip itself –
  // scrollIntoView would also scroll the page/viewport on mobile browsers.
  useEffect(() => {
    const strip = thumbStrip.current;
    const thumb = activeThumb.current;
    if (!open || !strip || !thumb) return;
    strip.scrollTo({
      left: thumb.offsetLeft - strip.clientWidth / 2 + thumb.clientWidth / 2,
      behavior: "smooth",
    });
  }, [index, open]);

  const current = images[index];
  const hasMany = images.length > 1;

  const navButton =
    "inline-flex items-center justify-center w-11 h-11 rounded-full bg-surface-raised text-fg hover:bg-line active:bg-line transition-colors";

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-canvas" aria-hidden="true" />

      {/* h-dvh tracks the visible viewport, so mobile browser toolbars never
          push the bottom controls off-screen */}
      <DialogPanel className="fixed inset-x-0 top-0 h-dvh flex flex-col bg-canvas overscroll-contain pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
        {/* Top bar */}
        <div className="shrink-0 flex items-center gap-3 px-4 py-2 sm:px-6 sm:py-3">
          <div className="min-w-0 flex-1">
            <DialogTitle className="font-display text-lg sm:text-xl text-fg truncate">
              {title}
            </DialogTitle>
            <p className="text-xs sm:text-sm text-muted truncate">
              {hasMany && (
                <span className="hidden sm:inline tabular-nums">
                  {index + 1} / {images.length}
                  {credit && <span className="mx-2">·</span>}
                </span>
              )}
              {credit && <>Fotos: {credit}</>}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Galerie schließen"
            className={`shrink-0 ${navButton}`}
          >
            <CloseIcon />
          </button>
        </div>

        {/* Main image – takes whatever height is left */}
        <div
          className="relative flex-1 min-h-0 sm:mx-20"
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

          {hasMany && (
            <>
              <button
                onClick={prev}
                aria-label="Vorheriges Bild"
                className={`hidden sm:inline-flex absolute -left-16 top-1/2 -translate-y-1/2 ${navButton}`}
              >
                <ChevronLeftIcon />
              </button>
              <button
                onClick={next}
                aria-label="Nächstes Bild"
                className={`hidden sm:inline-flex absolute -right-16 top-1/2 -translate-y-1/2 ${navButton}`}
              >
                <ChevronRightIcon />
              </button>
            </>
          )}
        </div>

        {hasMany && (
          <div className="shrink-0">
            {/* Mobile controls */}
            <div className="flex sm:hidden items-center justify-between px-4 pt-3">
              <button
                onClick={prev}
                aria-label="Vorheriges Bild"
                className={navButton}
              >
                <ChevronLeftIcon />
              </button>
              <span className="text-sm text-muted tabular-nums">
                {index + 1} / {images.length}
              </span>
              <button
                onClick={next}
                aria-label="Nächstes Bild"
                className={navButton}
              >
                <ChevronRightIcon />
              </button>
            </div>

            {/* Thumbnails – dropped on short screens (e.g. phone landscape) */}
            <div
              ref={thumbStrip}
              className="relative flex gap-2 overflow-x-auto px-4 py-3 sm:py-4 sm:justify-center [scrollbar-width:none] [@media(max-height:520px)]:hidden"
            >
              {images.map((image, i) => (
                <button
                  key={i}
                  ref={i === index ? activeThumb : undefined}
                  onClick={() => setIndex(i)}
                  aria-label={`Bild ${i + 1} anzeigen`}
                  aria-current={i === index}
                  className={`relative shrink-0 w-16 h-11 sm:w-24 sm:h-16 rounded-sm overflow-hidden border-2 transition-all ${
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
          </div>
        )}

        {!hasMany && <div className="shrink-0 h-4" />}
      </DialogPanel>
    </Dialog>
  );
};
