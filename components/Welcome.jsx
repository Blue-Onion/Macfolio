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

    letters.forEach((letter, i) => {
      const distance = Math.abs(mouseX - letterCenters[i]);
      const intensity = Math.exp(-(distance ** 2) / 20000);
      const weight = min + (max - min) * intensity;
      animateLetter(letter, weight);
    });
  };

  const handleMouseLeave = () => {
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
  return [...text].map((char, i) => (
    <span
      key={i}
      className={`letter ${className}`}
      style={{ fontVariationSettings: `"wght" ${baseWeight}` }}
    >
      {char === " " ? "\u00a0" : char}
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
      <p ref={subtitleRef} className="welcomeTextSub">
        {renderText("Hey I'm Aditya! Welcome to my ", "text-xl md:text-3xl", 100)}
      </p>

      <h1 ref={titleRef} className="mt-7 welcomeTextMain">
        {renderText("Macƒolio.", "italic text-3xl md:text-6xl lg:text-8xl", 500)}
      </h1>
    </section>
  );
};

export default Welcome;