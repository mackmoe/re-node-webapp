'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  animationType?: 'fade' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale';
  delay?: number;
  className?: string;
}

export function AnimatedSection({
  children,
  animationType = 'fade',
  delay = 0,
  className = '',
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const element = sectionRef.current;

    // Set initial state based on animation type
    const fromProps: gsap.TweenVars = {
      opacity: 0,
    };

    switch (animationType) {
      case 'slideUp':
        fromProps.y = 60;
        break;
      case 'slideLeft':
        fromProps.x = 60;
        break;
      case 'slideRight':
        fromProps.x = -60;
        break;
      case 'scale':
        fromProps.scale = 0.95;
        break;
    }

    gsap.set(element, fromProps);

    // Create scroll-triggered animation
    ScrollTrigger.create({
      trigger: element,
      start: 'top 85%',
      end: 'top 20%',
      onEnter: () => {
        gsap.to(element, {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: 1,
          delay,
          ease: 'power3.out',
        });
      },
      once: true,
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [animationType, delay]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
}
