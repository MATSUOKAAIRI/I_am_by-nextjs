"use client"
import ProjectBox from "./ProjectBox";
import projects from "./projects";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";

export default function Work() {
  const topbox = useRef(null);
  const buttombox = useRef(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!topbox.current || !buttombox.current) return;

    gsap.to(topbox.current, {
      scrollTrigger: {
        trigger: topbox.current,
        start: "bottom 99%",
        end: "top 1%",
        scrub: true,
      },
      x: "80vw",
      rotation: 1080,
      ease: "none",
      duration: 3,
    });

    gsap.to(buttombox.current, {
      scrollTrigger: {
        trigger: topbox.current,
        start: "bottom 99%",
        end: "top 1%",
        scrub: true,
      },
      x: "-80vw",
      rotation: -1080,
      ease: "none",
      duration: 3,
    });

    const boxes = boxRefs.current.filter(Boolean) as HTMLDivElement[];

    gsap.set(boxes, {
      y: 50,
      opacity: 0,
    });

    gsap.to(boxes, {
      y: 0,
      opacity: 1,
      duration: 2,
      ease: "expo.out",
      stagger: {
        each: 0.3,
        from: "start",
      },
      scrollTrigger: {
        trigger: buttombox.current,
        start: "end 90%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <div className="sm:min-h-screen mb-40 sm:mb-16">
      <div
        ref={topbox}
        className="w-16 h-16 sm:w-20 sm:h-20 md:w-32 md:h-32 bg-yellow-400 mx-auto"
      />
      <section
        className="flex flex-col items-start justify-center mb-12 px-4 sm:px-0 mt-8"
        id="work"
      >
        <div className="text-white rounded-3xl p-6 sm:p-10 w-full max-w-5xl bg-zinc-900 border">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-center sm:text-left">
            Works(制作・開発物)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto p-4 sm:p-10">
            {projects.map((project, i) => (
              <ProjectBox
                key={i}
                title={project.title}
                description={project.description}
                link={project.link}
                ref={(el) => {
                  if (el) boxRefs.current[i] = el;
                }}
              />
            ))}
          </div>
        </div>
      </section>
      <div
        ref={buttombox}
        className="bg-yellow-400 absolute right-4 sm:right-10 w-16 h-16 sm:w-24 sm:h-24"
      />
    </div>
  );
}
