"use client"
import { dockApps } from '@/data';
import useWindowStore from '@/store/window';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from 'react'
import { Tooltip } from 'react-tooltip';

const Dock = () => {
    const { openWindow, focusWindow, windows } = useWindowStore();
    const dockRef = useRef(null);
    const [isMdOrLarger, setIsMdOrLarger] = useState(false);

    // Check if screen size is md or larger (768px)
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMdOrLarger(window.innerWidth >= 768);
        };

        // Check on mount
        checkScreenSize();

        // Add resize listener
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    useGSAP(() => {
        const dock = dockRef.current;
        if (!dock || !isMdOrLarger) return () => { };
        const icons = dock.querySelectorAll('.dock-icon');
        const animateIcons = (mouseX) => {
            const { left } = dock.getBoundingClientRect();
            icons.forEach((icon) => {
                const { left: l, width: w } = icon.getBoundingClientRect();
                const iconCenter = l - left + w / 2;
                const distance = Math.abs(mouseX - iconCenter);
                const intensity = Math.exp(-(distance ** 2.5) / 20000);
                gsap.to(icon, {
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: "power1.out"
                })

            });
        }
        const handleMouseMove = (e) => {
            const { left } = dock.getBoundingClientRect();
            animateIcons(e.clientX - left);

        }
        const resetIcons = () => {
            icons.forEach((icon) => {
                gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    duration: 0.2,
                    ease: "power1.out"
                })
            })
        }
        dock.addEventListener("mousemove", handleMouseMove);
        dock.addEventListener("mouseleave", resetIcons);

        // Scale dock
        dock.addEventListener("mouseenter", () => {
            gsap.to(dock, {
                scaleX: 1.05,
                duration: 0.05,
                ease: "back"
            });
        });

        dock.addEventListener("mouseleave", () => {
            gsap.to(dock, {
                scaleX: 1,
                duration: 0.05,
                ease: "back"
            });
        });

        return () => {
            dock.removeEventListener("mousemove", handleMouseMove);
            dock.removeEventListener("mouseleave", resetIcons);
            dock.removeEventListener("mouseenter", () => { });
            dock.removeEventListener("mouseleave", () => { });
        };
    }, [isMdOrLarger])
    const toggleApp = (app) => {
        if (!app.canOpen) return;
        const window = windows[app.id]

        if (window.isOpen) {
            focusWindow(app.id);
        } else {
            openWindow(app.id);
        }


    }
    return (
        <section id='dock' className=''>
            <div className="dock-container" ref={dockRef}>
                <div className="effect"></div>
                <div className="tint"></div>
                <div className="shine"></div>
                <div className="text"></div>
                <div className="flex gap-2">

                    {dockApps.map((app, index) => {
                        // Hide last element on mobile (phones)
                        const isLastItem = index === dockApps.length - 1;
                        if (isLastItem && !isMdOrLarger) return null;

                        return (
                            <div key={app.id} className="">
                                <button
                                    type='button'
                                    className='dock-icon h-16 md:h-16 md:w-16 w-16 flex-col'
                                    aria-label={app.name}
                                    data-tooltip-id="dock-tooltip"
                                    data-tooltip-delay-show={150}
                                    disabled={!app.canOpen}
                                    data-tooltip-content={app.name}

                                    onClick={() => toggleApp(app)}

                                >
                                    <Image
                                        src={`/images/${app.icon}`}
                                        alt={app.name}
                                        width={100}
                                        height={150}
                                    />
                                    {app.isOpen && <span className="">.</span>}
                                </button>
                            </div>
                        )
                    }
                    )}
                </div>
                <Tooltip id='dock-tooltip' className='tooltip' place='top' />
            </div>
        </section>
    )
}

export default Dock