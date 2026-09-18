"use client";

import Spline from "@splinetool/react-spline";

import {
  Home as HomeIcon,
  User,
  Briefcase,
  Code2,
  Mail,
  GraduationCap,
  Cpu,
  Code,
  Wrench,
  ShieldCheck,
  Award,
} from "lucide-react";

import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/ui/dock";

import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";
import { GridPulse } from "@/components/ui/grid-pulse";
import { CinematicFooter } from "@/components/ui/motion-footer";

export default function Home() {
  const projects = [
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
      title: "Phoenix Terminal 1.0",
      description:
        "Autonomous gesture-controlled IoT console built from salvaged smartphone hardware, battery revival and embedded interaction.",
      meta: "IoT • Embedded • Hardware",
    },

    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      title: "Airport Utilization Dashboard",
      description:
        "Offline dashboard prototype for airport utilization monitoring with 7-day trends, warnings, role-based views and PDF reporting.",
      meta: "Dashboard • JavaScript • Analytics",
    },

    {
      src: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
      title: "Tribal E-Marketplace",
      description:
        "Digital marketplace concept for tribal handicrafts, artwork and minor forest products with a local-first commerce experience.",
      meta: "React • E-Commerce • UI/UX",
    },

    {
      src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
      title: "IoT Telemedicine Kit",
      description:
        "Portable IoT diagnostic prototype combining sensors, embedded hardware and a connected health-monitoring interface.",
      meta: "IoT • Sensors • Embedded",
    },

    {
      src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
      title: "AI Smart Classroom",
      description:
        "Interactive classroom concept using voice control, quizzes, analytics, gamification and adaptive learning.",
      meta: "AI • Education • Analytics",
    },
  ];

  return (
    <>
      <main className="min-h-screen scroll-smooth bg-black text-white">

        {/* =====================================================
            DOCK NAVBAR
        ====================================================== */}

        <div className="fixed bottom-4 left-0 right-0 z-[100] flex justify-center px-4">
          <Dock
            className="border border-white/10 bg-white/10 shadow-2xl shadow-black/40 backdrop-blur-xl"
            magnification={75}
            distance={140}
            panelHeight={64}
          >

            {/* HOME */}
            <DockItem>
              <DockLabel>Home</DockLabel>

              <DockIcon>
                <a
                  href="#home"
                  aria-label="Home"
                  className="flex h-full w-full items-center justify-center"
                >
                  <HomeIcon className="h-5 w-5" />
                </a>
              </DockIcon>
            </DockItem>


            {/* ABOUT */}
            <DockItem>
              <DockLabel>About</DockLabel>

              <DockIcon>
                <a
                  href="#about"
                  aria-label="About"
                  className="flex h-full w-full items-center justify-center"
                >
                  <User className="h-5 w-5" />
                </a>
              </DockIcon>
            </DockItem>


            {/* PROJECTS */}
            <DockItem>
              <DockLabel>Projects</DockLabel>

              <DockIcon>
                <a
                  href="#projects"
                  aria-label="Projects"
                  className="flex h-full w-full items-center justify-center"
                >
                  <Briefcase className="h-5 w-5" />
                </a>
              </DockIcon>
            </DockItem>


            {/* GITHUB */}
            <DockItem>
              <DockLabel>GitHub</DockLabel>

              <DockIcon>
                <a
                  href="https://github.com/abhianvch9"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex h-full w-full items-center justify-center"
                >
                  <Code2 className="h-5 w-5" />
                </a>
              </DockIcon>
            </DockItem>


            {/* CONTACT */}
            <DockItem>
              <DockLabel>Contact</DockLabel>

              <DockIcon>
                <a
                  href="#contact"
                  aria-label="Contact"
                  className="flex h-full w-full items-center justify-center"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </DockIcon>
            </DockItem>

          </Dock>
        </div>


        {/* =====================================================
            HERO
        ====================================================== */}

        <section
          id="home"
          className="relative h-screen w-full overflow-hidden"
        >

          {/* Spline 3D */}
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            />
          </div>

          {/* Overlay */}
          <div className="pointer-events-none absolute inset-0 bg-black/20" />

          {/* Hero Content */}
          <div className="pointer-events-none relative z-10 flex h-full items-center px-6 md:px-20">
            <div className="max-w-3xl">

              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/50">
                Electronics × Computer Science × AI
              </p>

              <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                Building the
                <br />

                <span className="text-white/50">
                  Future with Code.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-white/60 md:text-lg">
                I&apos;m Abhinav Chaudhary — an IoT Systems Engineer
                and Computer Science student exploring software,
                electronics, embedded systems and intelligent hardware.
              </p>

            </div>
          </div>
        </section>


        {/* =====================================================
            ABOUT
        ====================================================== */}

        <section
          id="about"
          className="relative min-h-screen overflow-hidden px-6 py-32 md:px-20"
        >

          {/* Grid Background */}
          <GridPulse />

          <div className="relative z-10 mx-auto max-w-7xl">

            {/* Heading */}
            <div className="max-w-4xl">

              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/40">
                About Me
              </p>

              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                Building where
                <span className="text-white/40">
                  {" "}software meets hardware.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/60">
                I&apos;m Abhinav Chaudhary, a Computer Science &
                Engineering student at Rajasthan Technical University
                with a strong interest in IoT systems, embedded
                electronics, software development and AI-powered
                hardware.
              </p>

              <p className="mt-5 text-base leading-8 text-white/40">
                My approach is practical: understand the system,
                design the architecture, build the prototype, test it,
                debug it and continuously improve it.
              </p>

            </div>


            {/* =================================================
                RESUME DETAILS
            ================================================== */}

            <div className="mt-16 grid gap-6 lg:grid-cols-2">


              {/* PROFESSIONAL SUMMARY */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

                <div className="mb-5 flex items-center gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <Cpu className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                      Professional Summary
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                      IoT Systems Engineer
                    </h3>
                  </div>

                </div>

                <p className="leading-7 text-white/60">
                  IoT Systems Engineer (Intern) building
                  hardware-software solutions with C, Python,
                  JavaScript and Arduino.
                </p>

                <p className="mt-4 leading-7 text-white/50">
                  Experienced with circuit design, component
                  selection, functional testing, embedded
                  applications, secure system behaviour,
                  microcontroller integration and responsive
                  web interfaces for IoT prototypes.
                </p>

              </div>


              {/* EDUCATION */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

                <div className="mb-5 flex items-center gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <GraduationCap className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                      Education
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                      B.Tech — Computer Science & Engineering
                    </h3>
                  </div>

                </div>

                <p className="text-white/60">
                  Rajasthan Technical University
                </p>

                <p className="mt-1 text-white/40">
                  Aravali Institute of Technical Studies
                </p>

                <p className="mt-4 text-sm text-white/30">
                  Udaipur, Rajasthan, India
                </p>

              </div>


              {/* WORK EXPERIENCE */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl lg:col-span-2">

                <div className="mb-6 flex items-center gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <Wrench className="h-5 w-5" />
                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                      Work Experience
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                      IoT Systems Engineer (Intern)
                    </h3>

                  </div>

                </div>


                <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row">

                  <p className="text-white/60">
                    Yuvaltern · Udaipur
                  </p>

                  <span className="text-sm text-white/30">
                    July 2026 — September 2026
                  </span>

                </div>


                <div className="grid gap-4 md:grid-cols-2">

                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">

                    <p className="text-sm leading-7 text-white/50">
                      Built and tested embedded prototypes using
                      Arduino and circuit simulation tools.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">

                    <p className="text-sm leading-7 text-white/50">
                      Selected components and assembled circuit
                      designs for embedded applications based on
                      project requirements.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">

                    <p className="text-sm leading-7 text-white/50">
                      Applied Python and JavaScript to support IoT
                      system integration and basic device-side logic.
                    </p>

                  </div>

                  <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-5">

                    <p className="text-sm leading-7 text-white/50">
                      Used Git version control and Chrome DevTools
                      to troubleshoot web-connected interfaces.
                    </p>

                  </div>

                </div>

              </div>


              {/* TECHNICAL SKILLS */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

                <div className="mb-6 flex items-center gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <Code className="h-5 w-5" />
                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                      Technical Skills
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                      Software Stack
                    </h3>

                  </div>

                </div>


                <div className="flex flex-wrap gap-3">

                  {[
                    "C",
                    "Python",
                    "JavaScript",
                    "HTML",
                    "CSS",
                    "TypeScript",
                    "Node.js",
                    "React",
                    "Next.js",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>


              {/* EMBEDDED + HARDWARE */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">

                <div className="mb-6 flex items-center gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <Cpu className="h-5 w-5" />
                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                      Embedded Systems
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                      Hardware Practice
                    </h3>

                  </div>

                </div>


                <div className="flex flex-wrap gap-3">

                  {[
                    "Arduino",
                    "Microcontrollers",
                    "Circuit Simulation",
                    "Hardware Interfacing",
                    "IoT Security",
                    "Embedded Testing",
                    "PCB Design",
                    "Soldering",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/60"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>


              {/* FRONTEND + ENGINEERING */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 lg:col-span-2">

                <div className="mb-6 flex items-center gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <Code2 className="h-5 w-5" />
                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                      Engineering Toolkit
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                      Frontend & Development
                    </h3>

                  </div>

                </div>


                <div className="grid gap-4 md:grid-cols-2">

                  <div>

                    <h4 className="mb-3 text-sm font-medium text-white/70">
                      Front-End Delivery
                    </h4>

                    <p className="text-sm leading-7 text-white/40">
                      Responsive design, UI wireframing, API testing,
                      Chrome DevTools and Git version control.
                    </p>

                  </div>


                  <div>

                    <h4 className="mb-3 text-sm font-medium text-white/70">
                      Hardware & Validation
                    </h4>

                    <p className="text-sm leading-7 text-white/40">
                      PCB design, soldering, circuit simulation,
                      component selection and embedded testing.
                    </p>

                  </div>

                </div>

              </div>


              {/* CERTIFICATIONS */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 lg:col-span-2">

                <div className="mb-7 flex items-center gap-3">

                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <Award className="h-5 w-5" />
                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                      Certifications
                    </p>

                    <h3 className="mt-1 text-xl font-semibold">
                      Structured Learning
                    </h3>

                  </div>

                </div>


                <div className="grid gap-4 md:grid-cols-2">

                  <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5">

                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0" />

                    <div>

                      <h4 className="font-medium">
                        30 Days Masterclass on Arduino
                      </h4>

                      <p className="mt-1 text-sm text-white/40">
                        Hands-on hardware prototyping and embedded logic
                      </p>

                    </div>

                  </div>


                  <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5">

                    <ShieldCheck className="mt-1 h-5 w-5 shrink-0" />

                    <div>

                      <h4 className="font-medium">
                        IoT Security Analyst
                      </h4>

                      <p className="mt-1 text-sm text-white/40">
                        NASSCOM via Skill India Digital Hub
                      </p>

                    </div>

                  </div>


                  <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5">

                    <Award className="mt-1 h-5 w-5 shrink-0" />

                    <div>

                      <h4 className="font-medium">
                        Python Programming
                      </h4>

                      <p className="mt-1 text-sm text-white/40">
                        Reliance Foundation Skill Academy &
                        Skill India Digital Hub
                      </p>

                    </div>

                  </div>


                  <div className="flex gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5">

                    <Award className="mt-1 h-5 w-5 shrink-0" />

                    <div>

                      <h4 className="font-medium">
                        HTML, CSS & JavaScript
                      </h4>

                      <p className="mt-1 text-sm text-white/40">
                        Great Learning
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            {/* Resume Highlight */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl">

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div>

                  <p className="text-xs uppercase tracking-[0.3em] text-white/30">
                    Current Direction
                  </p>

                  <h3 className="mt-2 text-2xl font-semibold">
                    Software + Electronics + IoT + AI Hardware
                  </h3>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-white/40">
                    Focused on developing practical engineering skills
                    across programming, embedded systems, connected
                    devices and intelligent hardware.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>


        {/* =====================================================
            PROJECTS
        ====================================================== */}

        <section
          id="projects"
          className="relative min-h-screen overflow-hidden px-6 py-32 md:px-20"
        >

          <div className="mx-auto max-w-7xl">

            {/* Heading */}
            <div className="mb-10 max-w-3xl">

              <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/40">
                Selected Work
              </p>

              <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
                Projects
              </h2>

              <p className="mt-5 text-base leading-7 text-white/40 md:text-lg">
                Real projects and prototypes exploring software,
                electronics, IoT, AI and hardware engineering.
              </p>

            </div>


            {/* Coverflow */}
            <CoverflowCarousel
              slides={projects}
              cardWidth={340}
              gap={30}
              rotate={35}
              depth={180}
              perspective={1400}
              falloff={0.28}
              fade={0.2}
              loop={true}
              showCaption={true}
              showPagination={true}
              showNavigation={true}
              label="Explore My Projects"
            />

          </div>
        </section>


        {/* =====================================================
            CONTACT
        ====================================================== */}

        <section
          id="contact"
          className="border-t border-white/10 px-6 py-32 md:px-20"
        >

          <div className="mx-auto max-w-7xl">

            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-white/40">
              Contact
            </p>

            <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
              Let&apos;s build something.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/40 md:text-lg">
              Interested in collaborating, building a project or
              discussing technology?
            </p>


            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="mailto:abhinav.add56@gmail.com"
                className="rounded-full border border-white/20 px-6 py-3 text-sm transition duration-300 hover:bg-white hover:text-black"
              >
                Email Me
              </a>

              <a
                href="https://www.linkedin.com/in/abhinav-chaudhary-933310232/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm transition duration-300 hover:bg-white hover:text-black"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/abhianvch9"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 px-6 py-3 text-sm transition duration-300 hover:bg-white hover:text-black"
              >
                GitHub
              </a>

            </div>

          </div>
        </section>


        {/* =====================================================
            END OF MAIN PORTFOLIO
        ====================================================== */}

      </main>


      {/* =====================================================
          CINEMATIC FOOTER
      ====================================================== */}

      <CinematicFooter />

    </>
  );
}