'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface HeroSlideshowProps {
  slides: string[];
  interval?: number;
}

export function HeroSlideshow({ slides, interval = 5000 }: HeroSlideshowProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!containerRef.current || slides.length === 0) return;

    // Initialize: Set first slide visible with Ken Burns animation
    gsap.set(slideRefs.current[0], {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
    });

    // Start Ken Burns effect on first slide
    gsap.to(slideRefs.current[0], {
      scale: 1.15,
      x: '-3%',
      y: '2%',
      duration: interval / 1000,
      ease: 'power1.inOut',
    });

    // Set all other slides hidden
    slideRefs.current.slice(1).forEach((slide) => {
      if (slide) {
        gsap.set(slide, { opacity: 0, scale: 1.2 });
      }
    });

    // Auto-advance timer
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => {
      clearInterval(timer);
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [slides.length, interval]);

  useEffect(() => {
    if (!containerRef.current || slides.length === 0) return;

    const nextSlide = currentSlide;
    const prevSlide = (currentSlide - 1 + slides.length) % slides.length;

    // Kill any existing timeline
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    // Create dynamic transition timeline
    const tl = gsap.timeline();
    timelineRef.current = tl;

    // Animate OUT the previous slide with dynamic effect
    tl.to(
      slideRefs.current[prevSlide],
      {
        opacity: 0,
        scale: 1.1,
        rotation: 0.5,
        x: '5%',
        duration: 1.2,
        ease: 'power2.inOut',
      },
      0
    );

    // Animate IN the next slide with Ken Burns + crossfade
    tl.fromTo(
      slideRefs.current[nextSlide],
      {
        opacity: 0,
        scale: 1.25,
        x: '-5%',
        y: '3%',
        rotation: -0.5,
      },
      {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        rotation: 0,
        duration: 1.4,
        ease: 'power2.out',
      },
      0.2
    );

    // Continue Ken Burns effect during the hold period
    tl.to(
      slideRefs.current[nextSlide],
      {
        scale: 1.15,
        x: '3%',
        y: '-2%',
        duration: (interval / 1000) - 1.4,
        ease: 'power1.inOut',
      },
      1.4
    );

    return () => {
      tl.kill();
    };
  }, [currentSlide, slides.length, interval]);

  return (
    <div ref={containerRef} className="absolute inset-0">
      {slides.map((slide, index) => (
        <div
          key={slide}
          ref={(el) => {
            slideRefs.current[index] = el;
          }}
          className="absolute inset-0 h-full w-full will-change-transform"
          style={{
            backgroundImage: `url(${slide})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />
    </div>
  );
}
