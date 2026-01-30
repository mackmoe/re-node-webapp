'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
import { useLenis } from '@/context/LenisContext';

gsap.registerPlugin(ScrollTrigger);

interface ScrollSectionProps {
  index: number;
  children: React.ReactNode;
  backgroundType: 'image' | 'video';
  backgroundSrc: string;
  isPinned?: boolean;
}

export function ScrollSection({
  index,
  children,
  backgroundType,
  backgroundSrc,
  isPinned = true,
}: ScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { lenis } = useLenis();

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current || !lenis) return;

    const section = sectionRef.current;
    const content = contentRef.current;

    // Kill existing triggers for this section
    ScrollTrigger.getAll().forEach((trigger) => {
      if (trigger.vars?.scope === section) trigger.kill();
    });

    const isMobile = window.innerWidth < 768;

    // Pin section on desktop, optional on mobile
    if (isPinned && !isMobile) {
      gsap.set(section, { position: 'relative' });

      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: `+=${window.innerHeight * 1.5}`,
        pin: true,
        pinSpacing: true,
        markers: false,
      });
    }

    // Parallax background effect
    gsap.to(section, {
      scrollTrigger: {
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        scrub: 1.2,
        onUpdate: (self) => {
          const parallaxStrength = isMobile ? 0.3 : 0.5;
          gsap.set(section.querySelector('[data-bg]'), {
            y: self.getVelocity() * parallaxStrength,
          });
        },
      },
    });

    // Content animations (mixed: fade, slide, scale)
    const animationTypes = ['fade', 'slide', 'scale'];
    const animationType = animationTypes[index % animationTypes.length];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: content,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 0.5,
        markers: false,
      },
    });

    if (animationType === 'fade') {
      tl.from(content, { opacity: 0, duration: 1 }, 0);
    } else if (animationType === 'slide') {
      tl.from(content, {
        x: isMobile ? 50 : 100,
        opacity: 0,
        duration: 1,
      }, 0);
    } else if (animationType === 'scale') {
      tl.from(content, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
      }, 0);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars?.scope === section) trigger.kill();
      });
    };
  }, [index, isPinned, lenis]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {/* Background */}
      <div data-bg className="absolute inset-0 w-full h-full">
        {backgroundType === 'image' ? (
          <img
            src={backgroundSrc}
            alt={`Section ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={backgroundSrc} type="video/mp4" />
          </video>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 w-full h-full flex items-center justify-center px-4"
      >
        {children}
      </div>
    </section>
  );
}
