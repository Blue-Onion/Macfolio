'use client'

import React, { useState, useEffect } from 'react'
import gsap from 'gsap'

/**
 * LoadingWrapper component that prevents FOUC (Flash of Unstyled Content)
 * Hides children until they're ready to be displayed, then fades them in smoothly
 */
export default function LoadingWrapper({ children }) {
    const [isReady, setIsReady] = useState(false)
    const contentRef = React.useRef(null)

    useEffect(() => {
        // Small delay to ensure all components are mounted
        const timer = setTimeout(() => {
            setIsReady(true)
        }, 50)

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        if (isReady && contentRef.current) {
            // Smooth fade-in animation
            gsap.fromTo(
                contentRef.current,
                { opacity: 0 },
                {
                    opacity: 1,
                    duration: 0.4,
                    ease: 'power2.out',
                    delay: 0.1
                }
            )
        }
    }, [isReady])

    return (
        <div ref={contentRef} style={{ opacity: 0 }}>
            {children}
        </div>
    )
}
