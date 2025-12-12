"use client"
import Link from 'next/link'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import styles from './not-found.module.css'
import clsx from 'clsx'

const NotFound = () => {
    const buttonRef = useRef(null)
    const flairRef = useRef(null)

useGSAP(() => {
    const button = buttonRef.current;
    const flair = flairRef.current;

    if (!button || !flair) return;

    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");

    const getXY = (e) => {
        const { left, top, width, height } = button.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        return { x, y };
    };

    const handleMouseEnter = (e) => {
        const { x, y } = getXY(e);

        xSet(x);
        ySet(y);

        gsap.to(flair, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
        });
    };

    const handleMouseLeave = (e) => {
        const { x, y } = getXY(e);

        gsap.killTweensOf(flair);

        gsap.to(flair, {
            xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
            yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
            scale: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    };

    const handleMouseMove = (e) => {
        const { x, y } = getXY(e);

        gsap.to(flair, {
            xPercent: x,
            yPercent: y,
            duration: 0.4,
            ease: "power2"
        });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("mousemove", handleMouseMove);

    return () => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
        button.removeEventListener("mousemove", handleMouseMove);
    };
}, []);
    const renderText = (text, className, baseWeight) => {
        return [...text].map((char, i) => (
            <span key={i} className={className} style={{ fontVariationSettings: `"wght" ${baseWeight}` }}>
                {char === " " ? "\u00a0" : char}
            </span>
        ))
    }

    return (
        <div className='flex flex-col text-white gap-6 items-center justify-center h-screen '>
            <h1 className="mt-7">
                {renderText("My brother/sister ", "text-6xl italic md:text-9xl", 500)}
            </h1>
            <p className="">
                {renderText("This is an single page site why did u come here :) ", "text-2xl italic md:text-3xl", 100)}
            </p>
            <Link href="/" className="no-underline">
                <div ref={buttonRef} className={clsx(styles.button, styles['button--stroke'])}>
                    <span className={styles.button__label}>Go Home</span>
                    <div ref={flairRef} className={styles.button__flair}></div>
                </div>
            </Link>
        </div>
    )
}

export default NotFound