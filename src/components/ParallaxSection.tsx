'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
}

export function ParallaxSection({ children, className = '' }: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const section = sectionRef.current;

    // Set initial state - start below viewport
    gsap.set(section, {
      y: 100,
      opacity: 0,
      scale: 0.95,
    });

    // Create scroll-triggered parallax animation
    ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'top center',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        gsap.to(section, {
          y: 100 - (progress * 100),
          opacity: progress,
          scale: 0.95 + (progress * 0.05),
          duration: 0.1,
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === section) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
