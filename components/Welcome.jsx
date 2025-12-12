"use client"


import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useRef } from "react"

const FONT_WEIGHT = {
    subtitle: { min: 100, max: 200, default: 100 },
    title: { min: 500, max: 900, default: 500 }
}
const setUpHover = (cont, type) => {
    if (!cont) return()=>{};

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
        <span key={i} className={className} style={{ fontVariationSettings: `"wght" ${baseWeight}` }}>
            {char === " " ? "\u00a0" : char}
        </span>
    ))
}
const Welcome = () => {
    const titleRef = useRef(null)
    const subtitleRef = useRef(null)

    useGSAP(() => {
        const titleHoverEffcet = setUpHover(titleRef.current, "title")
        const titleText=new SplitText(titleRef.current,{type:"words,chars"})
        const subtitleText=new SplitText(subtitleRef.current,{type:"words,chars"})
        const subtitleHoverEffect = setUpHover(subtitleRef.current, "subtitle")
 gsap.from(titleText.chars, {
            duration: 1,
            scale: 1.5,
            opacity: 0,
            ease: "power3.out",
            stagger: 0.05   
        })
        gsap.fromTo(subtitleText.words,{opacity:0,x:20},{opacity:1,x:0,stagger:0.02,duration:0.5})
        return () => {
            titleHoverEffcet()
            subtitleHoverEffect()
        }
    }, [])


    return (
        <section id="welcome" >
            <p ref={subtitleRef} className="">
                {renderText("Hey I'm Aditya! Welcome to my ", "text-2xl md:text-3xl", 100)}
            </p>
            <h1 ref={titleRef} className="mt-7">
                {renderText("Macƒolio.", "italic text-6xl md:text-8xl", 500)}
            </h1>
        </section>
    )
}

export default Welcome
