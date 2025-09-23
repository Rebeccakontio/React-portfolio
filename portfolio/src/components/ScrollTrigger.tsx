"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
  children: React.ReactNode;
  y?: number;
  duration?: number;
  scroll?: boolean;
  bounce?: boolean; 
  bounceDelay?: number;
  bounceDuration?: number;
}

export default function FadeIn({
  children,
  y = 20,
  duration = 2,
  scroll = true,
  bounce = false,
  bounceDelay = 0,
  bounceDuration = 2,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const startBounce = () => {
      if (bounce && ref.current) {
        gsap.to(ref.current, {
          y: -12,
          duration: bounceDuration,
          delay: bounceDelay,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }
    };

    gsap.fromTo(
      ref.current,
      { autoAlpha: 0, y },
      {
        autoAlpha: 1,
        y: 0,
        duration,
        ease: "power2.out",
        ...(scroll
          ? {
              scrollTrigger: {
                trigger: ref.current,
                start: "top 90%",
                once: true,
                onEnter: startBounce,
              },
            }
          : {
              onComplete: startBounce,
            }),
      }
    );
  }, [y, duration, scroll, bounce, bounceDelay, bounceDuration]);

  return <div ref={ref}>{children}</div>;
}
