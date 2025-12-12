'use client'

import React, { useState, useEffect } from 'react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'


export default function LoadingWrapper({ children }) {
    const [isReady, setIsReady] = useState(false)
    const contentRef = React.useRef(null)

    useEffect(() => {
        setIsReady(true)
    }, [])

    useEffect(() => {
        if (isReady && contentRef.current) {
            const tl = gsap.timeline({
                defaults: { ease: "power2.out" }
            })

            // Loader + Content together
            tl.to(".loader", {
                opacity: 0,
                duration: 0.3,
                pointerEvents: 'none',
                onComplete: () => gsap.set(".loader", { display: 'none' })
            })
            .to(contentRef.current, {
                opacity: 1,
                duration: 0.3
            }, "<") // same time

            // -----------------------------------------
            // EVERYTHING BELOW HAPPENS TOGETHER
            // -----------------------------------------
            tl.add("startTogether") // label

            tl.from("header", {
                opacity: 0,
                y: -20,
                duration: 0.3
            }, "startTogether")

            tl.from(".folder", {
                opacity: 0,
                scale: 2,
                duration: 0.3,
                stagger: 0.05,
                ease: "power3.out"
            }, "startTogether")

            tl.from(".dock", {
                opacity: 0,
                y: 30,
                scale: 0.8,
                duration: 0.3,
                stagger: 0.03,
                ease: "back.out(1.7)"
            }, "startTogether")

            // SplitText animations
            const titleText = new SplitText(".welcomeTextMain", { type: "words,chars" })
            const subtitleText = new SplitText(".welcomeTextSub", { type: "words,chars" })

            tl.from(subtitleText.words, {
                opacity: 0,
                x: 20,
                stagger: 0.02,
                duration: 0.3
            }, "startTogether")
tl.fromTo(
    ".dock-container",
    {
        opacity: 0,
        scale: 0.8
    },
    {
        opacity: 1,

        scale: 1,
        duration: 0.3,
        stagger: 0.03,
        ease: "back.out(1.7)"
    },
    "startTogether" // THIS goes here cleanly
)
            tl.from(titleText.chars, {
                scale: 0.5,
                opacity: 0,
                stagger: 0.05,
                duration: 0.4,
                ease: "easeInOut"
            }, "startTogether")
        }
    }, [isReady])

    return (
        <>
            <div className="loader relative min-h-screen bg-black">
                <div className="pre-loader">hh</div>
            </div>
            <div ref={contentRef} style={{ opacity: 0 }}>
                {children}
            </div>
        </>
    )
}