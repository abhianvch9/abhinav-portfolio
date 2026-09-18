"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowUp,
  Code2,
  Cpu,
  ExternalLink,
  Mail,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  ariaLabel?: string;
  as?: "a" | "button";
};

function MagneticButton({
  children,
  className = "",
  href,
  target,
  rel,
  onClick,
  ariaLabel,
  as = "a",
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = buttonRef.current;

    if (!element) return;

    const move = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();

      const x = event.clientX - (rect.left + rect.width / 2);
      const y = event.clientY - (rect.top + rect.height / 2);

      gsap.to(element, {
        x: x * 0.12,
        y: y * 0.12,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.4)",
      });
    };

    element.addEventListener("mousemove", move);
    element.addEventListener("mouseleave", leave);

    return () => {
      element.removeEventListener("mousemove", move);
      element.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (as === "button") {
    return (
      <button
        ref={(node) => {
          buttonRef.current = node;
        }}
        type="button"
        onClick={onClick}
        aria-label={ariaLabel}
        className={className}
      >
        {children}
      </button>
    );
  }

  return (
    <a
      ref={(node) => {
        buttonRef.current = node;
      }}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={className}
    >
      {children}
    </a>
  );
}

function MarqueeItem({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span className="mx-8 inline-flex items-center gap-8 whitespace-nowrap text-sm font-medium uppercase tracking-[0.25em] text-white/40">
      {children}
      <span className="text-white/20">✦</span>
    </span>
  );
}

export function CinematicFooter() {
  const footerRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const footer = footerRef.current;
    const title = titleRef.current;
    const marquee = marqueeRef.current;

    if (!footer || !title || !marquee) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        title,
        {
          y: 120,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 80%",
            once: true,
          },
        }
      );

      gsap.fromTo(
        marquee,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style jsx global>{`
        .cinematic-footer {
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          background:
            radial-gradient(
              circle at 50% 0%,
              rgba(255, 255, 255, 0.06),
              transparent 35%
            ),
            #000;
        }

        .footer-grid {
          background-image:
            linear-gradient(
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.035) 1px,
              transparent 1px
            );
          background-size: 70px 70px;
          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 20%,
            black 80%,
            transparent
          );
        }

        .footer-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.035);
          filter: blur(100px);
          pointer-events: none;
        }

        .footer-marquee {
          animation: footerMarquee 24s linear infinite;
        }

        .footer-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes footerMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <footer
        ref={footerRef}
        className="cinematic-footer relative mt-32"
      >
        <div className="footer-glow" />
        <div className="footer-grid absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-10 pt-20 md:px-10 md:pt-28">
          
          {/* Giant Name */}
          <div className="overflow-hidden">
            <h2
              ref={titleRef}
              className="select-none text-center text-[18vw] font-black leading-[0.75] tracking-[-0.08em] text-white"
            >
              ABHINAV
            </h2>
          </div>

          {/* Marquee */}
          <div
            ref={marqueeRef}
            className="mt-16 overflow-hidden border-y border-white/10 py-5"
          >
            <div className="footer-marquee flex w-max">
              
              <div className="flex">
                <MarqueeItem>
                  Electronics
                </MarqueeItem>

                <MarqueeItem>
                  Computer Science
                </MarqueeItem>

                <MarqueeItem>
                  IoT Systems
                </MarqueeItem>

                <MarqueeItem>
                  Embedded Hardware
                </MarqueeItem>

                <MarqueeItem>
                  Artificial Intelligence
                </MarqueeItem>

                <MarqueeItem>
                  Build. Test. Iterate.
                </MarqueeItem>
              </div>

              <div className="flex">
                <MarqueeItem>
                  Electronics
                </MarqueeItem>

                <MarqueeItem>
                  Computer Science
                </MarqueeItem>

                <MarqueeItem>
                  IoT Systems
                </MarqueeItem>

                <MarqueeItem>
                  Embedded Hardware
                </MarqueeItem>

                <MarqueeItem>
                  Artificial Intelligence
                </MarqueeItem>

                <MarqueeItem>
                  Build. Test. Iterate.
                </MarqueeItem>
              </div>

            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid gap-12 py-20 md:grid-cols-2 md:py-28">
            
            {/* Left */}
            <div>
              <p className="mb-5 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-white/40">
                <Cpu size={14} />
                Software × Hardware × AI
              </p>

              <h3 className="max-w-xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Let&apos;s build something.
              </h3>

              <p className="mt-6 max-w-lg text-base leading-7 text-white/50">
                I&apos;m exploring the intersection of software engineering,
                electronics, IoT, embedded systems and AI-powered hardware.
              </p>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col gap-4 md:items-end">

              {/* Email */}
              <MagneticButton
                href="mailto:abhinav.add56@gmail.com"
                ariaLabel="Send email"
                className="group flex w-full max-w-sm items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm text-white transition-colors hover:bg-white/[0.08]"
              >
                <span className="flex items-center gap-3">
                  <Mail size={18} />
                  Email Me
                </span>

                <ExternalLink
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </MagneticButton>

              {/* GitHub */}
              <MagneticButton
                href="https://github.com/abhianvch9"
                target="_blank"
                rel="noopener noreferrer"
                ariaLabel="Open GitHub"
                className="group flex w-full max-w-sm items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm text-white transition-colors hover:bg-white/[0.08]"
              >
                <span className="flex items-center gap-3">
                  <Code2 size={18} />
                  GitHub
                </span>

                <ExternalLink
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </MagneticButton>

              {/* LinkedIn - No LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/in/abhinav-chaudhary-933310232/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn"
                className="group flex w-full max-w-sm items-center justify-between rounded-full border border-white/10 bg-white/[0.04] px-6 py-4 text-sm text-white transition-colors hover:bg-white/[0.08]"
              >
                <span>
                  LinkedIn
                </span>

                <ExternalLink
                  size={16}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>

            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="border-t border-white/10 pt-8">

            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

              <div className="flex flex-wrap gap-6 text-sm text-white/40">

                <a
                  href="#home"
                  className="transition-colors hover:text-white"
                >
                  Home
                </a>

                <a
                  href="#about"
                  className="transition-colors hover:text-white"
                >
                  About
                </a>

                <a
                  href="#projects"
                  className="transition-colors hover:text-white"
                >
                  Projects
                </a>

                <a
                  href="#contact"
                  className="transition-colors hover:text-white"
                >
                  Contact
                </a>

              </div>

              {/* Back To Top */}
              <MagneticButton
                as="button"
                onClick={scrollToTop}
                ariaLabel="Back to top"
                className="group flex w-fit items-center gap-2 text-sm text-white/50 transition-colors hover:text-white"
              >
                Back to top

                <ArrowUp
                  size={16}
                  className="transition-transform group-hover:-translate-y-1"
                />
              </MagneticButton>

            </div>

            {/* Copyright */}
            <div className="mt-10 flex flex-col gap-3 text-xs text-white/30 md:flex-row md:items-center md:justify-between">

              <p>
                © 2026 Abhinav Chaudhary. All rights reserved.
              </p>

              <p className="flex items-center gap-1">
                Crafted with
                <span className="text-white/60">
                  ♥
                </span>
                by Abhinav
              </p>

              <p>
                Electronics • CS • IoT • AI Hardware
              </p>

            </div>

          </div>
        </div>
      </footer>
    </>
  );
}