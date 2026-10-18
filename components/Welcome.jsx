"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const FONT_WEIGHT = {
  subtitle: { min: 100, max: 200, base: 100 },
  title: { min: 500, max: 900, base: 500 },
};

const setUpHover = (cont, type) => {
  if (!cont) return () => {};

  const letters = Array.from(cont.querySelectorAll(".letter"));
  const { min, max, base } = FONT_WEIGHT[type];

  let letterCenters = [];
  let rafId = null;

  const calculateCenters = () => {
    const { left } = cont.getBoundingClientRect();
    letterCenters = letters.map((letter) => {
      const rect = letter.getBoundingClientRect();
      return rect.left - left + rect.width / 2;
    });
  };

  calculateCenters();
  window.addEventListener("resize", calculateCenters);

  const animateLetter = (letter, weight, duration = 0.25) => {
    gsap.to(letter, {
      duration,
      ease: "power2.out",
      fontVariationSettings: `"wght" ${weight}`,
    });
  };

  const handleMouseMove = (e) => {
    const { left } = cont.getBoundingClientRect();
    const mouseX = e.clientX - left;

    // One rAF per frame instead of running tweens on every mousemove event.
    if (rafId) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      letters.forEach((letter, i) => {
        const distance = Math.abs(mouseX - letterCenters[i]);
        const intensity = Math.exp(-(distance ** 2) / 20000);
        const weight = min + (max - min) * intensity;
        animateLetter(letter, weight);
      });
    });
  };

  const handleMouseLeave = () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    letters.forEach((letter) => animateLetter(letter, base));
  };

  cont.addEventListener("mousemove", handleMouseMove);
  cont.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    cont.removeEventListener("mousemove", handleMouseMove);
    cont.removeEventListener("mouseleave", handleMouseLeave);
    window.removeEventListener("resize", calculateCenters);
  };
};

const renderText = (text, className, baseWeight) => {
  const words = text.split(" ");
  return words.map((word, wi) => (
    <span key={wi} className="welcome-word">
      {[...word].map((char, i) => (
        <span
          key={i}
          className={`letter ${className}`}
          style={{ fontVariationSettings: `"wght" ${baseWeight}` }}
        >
          {char}
        </span>
      ))}
    </span>
  ));
};

const Welcome = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    const cleanupTitle = setUpHover(titleRef.current, "title");
    const cleanupSubtitle = setUpHover(subtitleRef.current, "subtitle");

    return () => {
      cleanupTitle();
      cleanupSubtitle();
    };
  }, []);

  return (
    <section id="welcome">
      {/* Single descriptive h1 — real text is exposed via the sr-only span,
          the per-letter animated spans are decorative for assistive tech.
          The sr-only span sits outside .welcomeText* containers so the
          SplitText-based intro animation can't split and un-hide it. */}
      <h1>
        <span className="sr-only">
          Hey I&apos;m Aditya Singh Rawat! Welcome to my Macfolio.
        </span>
        <span
          ref={subtitleRef}
          className="welcomeTextSub block"
          aria-hidden="true"
        >
          {renderText("Hey I'm Aditya! Welcome to my", "text-xl md:text-3xl", 100)}
        </span>

        <span
          ref={titleRef}
          className="mt-2 sm:mt-7 welcomeTextMain block"
          aria-hidden="true"
        >
          {renderText("Macƒolio.", "italic text-3xl md:text-6xl lg:text-8xl", 500)}
        </span>
      </h1>
    </section>
  );
};

export default Welcome;