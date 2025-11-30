"use client"
import { dockApps } from '@/data';
import useWindowStore from '@/store/window';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import React, { useRef } from 'react'
import { Tooltip } from 'react-tooltip';

const Dock = () => {
    const {openWindow,closeWindow,windows}=useWindowStore();
    const dockRef = useRef(null);
    useGSAP(() => {
        const dock = dockRef.current;
        if (!dock) return () => { };
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
                scaleX: 1.08,
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
    }, [])
    const toggleApp = (app) => {
        if(!app.canOpen) return ;
        const window=windows[app.id]
        if(app.isOpen){
            closeWindow(app.id);
        }else{
            openWindow(app.id);
        }
        console.log(windows);
        
    }
    return (
        <section id='dock'>
            <div className="dock-container" ref={dockRef}>
                <div className="effect"></div>
                <div className="tint"></div>
                <div className="shine"></div>
                <div className="text"></div>
                <div className="flex gap-2">

                    {dockApps.map((app) => (
                        <div key={app.id} className="">
                            <button
                                type='button'
                                className='dock-icon'
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
                                    width={150}
                                    height={50}
                                />

                            </button>
                        </div>
                    )
                    )}
                </div>
                <Tooltip id='dock-tooltip' className='tooltip' place='top' />
            </div>
        </section>
    )
}

export default Dock