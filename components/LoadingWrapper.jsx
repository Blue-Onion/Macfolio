'use client'

import React, { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'


export default function LoadingWrapper({ children }) {
    const [isReady, setIsReady] = useState(false)
    const contentRef = useRef(null)
    const maskRef = useRef(null)

    useEffect(() => {
        setTimeout(() => setIsReady(true), 0)
    }, [])

    useEffect(() => {
        if (!isReady || !contentRef.current || !maskRef.current) return
        const tl = gsap.timeline({ defaults: { ease: "power2.out" } })
        tl.fromTo(maskRef.current,
            { opacity: 1 },
            { opacity: 1, duration: 0 }
        )

        tl.to(maskRef.current, {
            '--mask-size': '50%',
            duration: 0.6,
            ease: "back.out(1)"
        })

        tl.to(maskRef.current, {
            opacity: 0,
            duration: 0.2,
            ease:"back.in",
            onComplete: () => gsap.set(maskRef.current, { display: 'none' })
        })

        tl.to(contentRef.current, {
            opacity: 1,
            duration: 0
        })
        tl.add("startTogether")

        tl.from("header", {
            opacity: 0,
            y: -20,
            duration: 0.4
        }, "startTogether")

        tl.from(".folder", {
            opacity: 0,
            scale: 2,
            duration: 0.5,
            stagger: 0.04,
            ease: "power3.out"
        }, "startTogether")

        const titleText = new SplitText(".welcomeTextMain", { type: "words,chars" })
        const subtitleText = new SplitText(".welcomeTextSub", { type: "words,chars" })

        tl.from(subtitleText.words, {
            opacity: 0,
            x: 20,
            stagger: 0.01,
            duration: 0.4
        }, "startTogether")

        tl.fromTo(
            ".dock-container",
            { opacity: 0, scale: 0.8 },
            {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "back.out(1.7)"
            },
            "startTogether"
        )

        tl.from(titleText.chars, {
            scale: 0.5,
            opacity: 0,
            stagger: 0.03,
            duration: 0.5,
            ease: "power2.out"
        }, "startTogether")
    }, [isReady])

    return (
        <>

            <div
                ref={maskRef}
                className="fixed inset-0 flex items-center justify-center bg-black z-9999"
                style={{
                    '--mask-size': '20%',
                }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: "url('/images/wallpaper.png')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",

                        maskImage: "url('/images/macos.jpg')",
                        WebkitMaskImage: "url('/images/macos.jpg')",

                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",

                        maskPosition: "center",
                        WebkitMaskPosition: "center",

                        maskSize: "var(--mask-size)",
                        WebkitMaskSize: "var(--mask-size)",
                    }}
                />
            </div>

            {/* CONTENT BELOW */}
            <div ref={contentRef} style={{ opacity: 0 }}>
                {children}
            </div>
        </>
    )
}