"use client"


import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { useRef } from "react"

const FONT_WEIGHT = {
    subtitle: { min: 100, max: 200, default: 100 },
    title: { min: 500, max: 900, default: 500 }
}
const setUpHover = (cont, type) => {
    if (!cont) return () => { };

    const letters = cont.querySelectorAll("span");
    const { min, max, default: base } = FONT_WEIGHT[type];

    const animateLetter = (letter, weight, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: "power2.out",
            fontVariationSettings: `"wght" ${weight}`,

        })
    }
    const handleMouseHover = (e) => {
        const { left } = cont.getBoundingClientRect();
        const mouseX = e.clientX - left

        letters.forEach((letter, i) => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const letterCenter = l - left + w / 2;
            const distance = Math.abs(mouseX - letterCenter);
            const intensity = Math.exp(-(distance ** 2) / 20000);
            const weight = min + (max - min) * intensity;
            animateLetter(letter, weight);

        });


    }
    const handleMouseLeave = () => {
        letters.forEach((letter) => {
            animateLetter(letter, base);
        });
    }
    cont.addEventListener("mousemove", handleMouseHover)
    cont.addEventListener("mouseleave", handleMouseLeave)
    return () => {
        cont.removeEventListener("mousemove", handleMouseHover)
        cont.removeEventListener("mouseleave", handleMouseLeave)
    }
}
const renderText = (text, className, baseWeight) => {
    return [...text].map((char, i) => (
        <span
            key={i}
            aria-hidden="true"
            className={className}
            style={{ fontVariationSettings: `"wght" ${baseWeight}` }}
        >
            {char === " " ? "\u00a0" : char}
        </span>
    ))
}
const Welcome = () => {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)

    useGSAP(() => {
        const titleHoverEffcet = setUpHover(titleRef.current, "title")

        const subtitleHoverEffect = setUpHover(subtitleRef.current, "subtitle")


        return () => {
            titleHoverEffcet()
            subtitleHoverEffect()
        }
    }, [])


    return (
        <section id="welcome" >
            <p ref={subtitleRef} className="welcomeTextSub">
                {renderText("Hey I'm Aditya! Welcome to my ", "text-2xl md:text-3xl", 100)}
            </p>
            <h1 ref={titleRef} className="mt-7 welcomeTextMain">
                {renderText("Macƒolio.", "italic text-6xl md:text-8xl", 500)}
            </h1>
        </section>
    )
}

export default Welcome
