import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const useHeroAnimation = () => {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const bg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      leftRef.current,
      { y: '100%' },
      { y: '0%', duration: 1.2, ease: 'power2.inOut' }
    )
      .fromTo(
        rightRef.current,
        { y: '-100%' },
        { y: '0%', duration: 1.2, ease: 'power2.inOut' }
      )
      .to(
        leftRef.current,
        { x: '-100vw', opacity: 0, duration: 1, ease: 'power2.inOut' },
        '-=0.0'
      )
      .to(
        rightRef.current,
        { x: '100vw', opacity: 0, duration: 1, ease: 'power2.inOut' },
        '-=1.0'
      )
      .to(bg.current, {
        backgroundColor: '#18181b',
        duration: 1,
      });
  }, []);

  return { leftRef, rightRef, bg };
};

export const useAboutAnimation = () => {
  const topbox = useRef<HTMLDivElement>(null);
  const buttombox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(topbox.current, {
      scrollTrigger: {
        trigger: topbox.current,
        start: 'bottom 99%',
        end: 'top 1%',
        scrub: true,
      },
      x: '80vw',
      rotation: 1080,
      ease: 'none',
      duration: 3,
    });

    gsap.to(buttombox.current, {
      scrollTrigger: {
        trigger: buttombox.current,
        start: 'bottom 99%',
        end: 'top 1%',
        scrub: true,
      },
      x: '-80vw',
      rotation: -1080,
      ease: 'none',
      duration: 3,
    });
  }, []);

  return { topbox, buttombox };
};

export const useActionAnimation = () => {
  const topbox = useRef<HTMLDivElement>(null);
  const buttombox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(topbox.current, {
      scrollTrigger: {
        trigger: topbox.current,
        start: 'bottom 99%',
        end: 'top 1%',
        scrub: true,
      },
      x: '80vw',
      rotation: 1080,
      ease: 'none',
      duration: 3,
    });

    gsap.to(buttombox.current, {
      scrollTrigger: {
        trigger: buttombox.current,
        start: 'bottom 99%',
        end: 'top 1%',
        scrub: true,
      },
      x: '-80vw',
      rotation: -1080,
      ease: 'none',
      duration: 3,
    });
  }, []);

  return { topbox, buttombox };
};

export const useDoAnimation = () => {
  const topbox = useRef<HTMLDivElement>(null);
  const buttombox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(topbox.current, {
      scrollTrigger: {
        trigger: topbox.current,
        start: 'bottom 99%',
        end: 'top 1%',
        scrub: true,
      },
      x: '80vw',
      rotation: 1080,
      ease: 'none',
      duration: 3,
    });

    gsap.to(buttombox.current, {
      scrollTrigger: {
        trigger: buttombox.current,
        start: 'bottom 99%',
        end: 'top 1%',
        scrub: true,
      },
      x: '-80vw',
      rotation: -1080,
      ease: 'none',
      duration: 3,
    });
  }, []);

  return { topbox, buttombox };
};

export const useUniversityAnimation = () => {
  const topbox = useRef<HTMLDivElement>(null);
  const buttombox = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.to(topbox.current, {
      scrollTrigger: {
        trigger: topbox.current,
        start: 'bottom 99%',
        end: 'top 1%',
        scrub: true,
      },
      x: '80vw',
      rotation: 1080,
      ease: 'none',
      duration: 3,
    });

    gsap.to(buttombox.current, {
      scrollTrigger: {
        trigger: buttombox.current,
        start: 'bottom 99%',
        end: 'top 1%',
        scrub: true,
      },
      x: '-80vw',
      rotation: -1080,
      ease: 'none',
      duration: 3,
    });
  }, []);

  return { topbox, buttombox };
};

export const useWorkAnimation = () => {
  const topbox = useRef<HTMLDivElement>(null);
  const buttombox = useRef<HTMLDivElement>(null);
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.to(topbox.current, {
      scrollTrigger: {
        trigger: topbox.current,
        start: 'bottom 99%',
        end: 'top 10%',
        scrub: true,
      },
      x: '80vw',
      rotation: 1080,
      ease: 'none',
      duration: 3,
    });

    gsap.to(buttombox.current, {
      scrollTrigger: {
        trigger: buttombox.current,
        start: 'bottom 99%',
        end: 'top 1%',
        scrub: true,
      },
      x: '-80vw',
      rotation: -1080,
      ease: 'none',
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
      ease: 'expo.out',
      stagger: {
        each: 0.3,
        from: 'start',
      },
      scrollTrigger: {
        trigger: buttombox.current,
        start: 'end 90%',
        toggleActions: 'play none none none',
      },
    });
  }, []);

  return { topbox, buttombox, boxRefs };
};
