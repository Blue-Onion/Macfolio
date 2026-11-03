"use client"
import useWindowStore from '@/store/window'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'
import React, { useLayoutEffect, useRef } from 'react'

gsap.registerPlugin(Draggable)

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore()
    const { isOpen, isMinimized, isMaximized, zIndex } = windows[windowKey];
    const ref = useRef(null);
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;


      const isMobile = window.innerWidth < 640; // sm breakpoint
      if (isMobile) return;

      const [instance] = Draggable.create(el, {
        bounds: "main",
        type: "x,y",
        onPress: () => {
          focusWindow(windowKey)
        }
      })

      return () => instance.kill()
    }, [])
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || isMinimized) return;
      el.style.display = 'block';
      gsap.fromTo(el, { opacity: 0, scale: 0.8, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" })
    }, [isOpen, isMinimized])
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen && !isMinimized ? "block" : "none";
    }, [isOpen, isMinimized])

    return (
      <section
        id={windowKey}
        ref={ref}
        onClick={() => focusWindow(windowKey)}
        style={{
          zIndex,
          ...(isMaximized && !isMinimized ? {
            position: "fixed",
            inset: "3rem 1rem 6rem",
            width: "auto",
            height: "auto",
            transform: "none",
          } : {}),
        }}
        className='absolute max-sm:fixed! max-sm:top-12! max-sm:bottom-0! max-sm:left-0! max-sm:right-0! max-sm:w-screen! max-sm:h-auto! max-sm:transform-none! shadow-2xl drop-shadow-2xl rounded-3xl max-sm:rounded-none!'
      >
        <Component {...props} />
      </section>
    )
  }
  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;
  return Wrapped

}

export default WindowWrapper
