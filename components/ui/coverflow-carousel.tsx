"use client";

import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CoverflowSlide {
  src: string;
  title?: string;
  description?: string;
  meta?: string;
}

interface CoverflowCarouselProps {
  slides: CoverflowSlide[];
  rotate?: number;
  depth?: number;
  perspective?: number;
  falloff?: number;
  fade?: number;
  cardWidth?: number;
  gap?: number;
  loop?: boolean;
  showCaption?: boolean;
  showPagination?: boolean;
  showNavigation?: boolean;
  label?: string;
  className?: string;
  cardClassName?: string;
}

export function CoverflowCarousel({
  slides,
  rotate = 40,
  depth = 200,
  perspective = 1200,
  falloff = 0.35,
  fade = 0.25,
  cardWidth = 320,
  gap = 24,
  loop = true,
  showCaption = true,
  showPagination = true,
  showNavigation = true,
  label = "Projects",
  className,
  cardClassName,
}: CoverflowCarouselProps) {
  const [active, setActive] = useState(0);

  const total = slides.length;

  const goTo = (index: number) => {
    if (!total) return;

    if (loop) {
      setActive((index + total) % total);
    } else {
      setActive(Math.max(0, Math.min(index, total - 1)));
    }
  };

  const next = () => goTo(active + 1);
  const previous = () => goTo(active - 1);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [active, total, loop]);

  const visibleSlides = useMemo(() => {
    return slides.map((slide, index) => {
      let offset = index - active;

      if (loop && total > 2) {
        if (offset > total / 2) {
          offset -= total;
        }

        if (offset < -total / 2) {
          offset += total;
        }
      }

      return {
        slide,
        index,
        offset,
      };
    });
  }, [slides, active, loop, total]);

  if (!slides.length) return null;

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden py-12",
        className
      )}
      aria-label={label}
    >
      {/* Carousel */}
      <div
        className="relative mx-auto flex min-h-[520px] w-full items-center justify-center"
        style={{
          perspective: `${perspective}px`,
        }}
      >
        {visibleSlides.map(({ slide, index, offset }) => {
          const absOffset = Math.abs(offset);

          const translateX =
            offset * (cardWidth + gap);

          const translateZ =
            -absOffset * depth;

          const rotateY =
            -offset * rotate;

          const scale =
            Math.max(0.72, 1 - absOffset * falloff);

          const opacity =
            absOffset > 3
              ? 0
              : Math.max(0, 1 - absOffset * fade);

          const zIndex = 100 - absOffset;

          return (
            <button
              key={`${slide.src}-${index}`}
              type="button"
              onClick={() => goTo(index)}
              className={cn(
                "absolute left-1/2 top-1/2 overflow-hidden rounded-2xl",
                "border border-white/10 bg-black/40",
                "shadow-2xl backdrop-blur-sm",
                "transition-all duration-500 ease-out",
                "focus:outline-none focus:ring-2 focus:ring-white/50",
                cardClassName
              )}
              style={{
                width: `${cardWidth}px`,
                height: "430px",
                transform: `
                  translate(-50%, -50%)
                  translateX(${translateX}px)
                  translateZ(${translateZ}px)
                  rotateY(${rotateY}deg)
                  scale(${scale})
                `,
                opacity,
                zIndex,
              }}
              aria-label={slide.title || `Project ${index + 1}`}
            >
              {/* Image */}
              <div className="relative h-full w-full">
                <img
                  src={slide.src}
                  alt={slide.title || `Project ${index + 1}`}
                  className="h-full w-full object-cover"
                />

                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                {/* Caption */}
                {showCaption && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                    {slide.meta && (
                      <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-white/50">
                        {slide.meta}
                      </p>
                    )}

                    {slide.title && (
                      <h3 className="text-xl font-semibold text-white">
                        {slide.title}
                      </h3>
                    )}

                    {slide.description && (
                      <p className="mt-2 text-sm leading-relaxed text-white/65">
                        {slide.description}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Navigation */}
      {showNavigation && total > 1 && (
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3">
          <button
            type="button"
            onClick={previous}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>

          {showPagination && (
            <div className="flex items-center gap-2 px-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => goTo(index)}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === active
                      ? "w-7 bg-white"
                      : "w-2 bg-white/30 hover:bg-white/50"
                  )}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          )}

          <button
            type="button"
            onClick={next}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {/* Label */}
      {label && (
        <p className="mt-16 text-center text-xs uppercase tracking-[0.3em] text-white/30">
          {label}
        </p>
      )}
    </section>
  );
}