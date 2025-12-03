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
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef(null);
    useGSAP(() => {
      const el = ref.current;
      if (!el) return;
      const [instance]=Draggable.create(el, {
        onPress: () => {
          focusWindow(windowKey)
        }
      })

return ()=>instance.kill()
    }, [])
    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;
      el.style.display = 'block';
      gsap.fromTo(el, { opacity: 0, scale: 0.8, y: 40 }, { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" })
    }, [isOpen])
    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen])

    return (
      <section
        id={windowKey}
        ref={ref}
        style={{
          zIndex
        }}
        className='absolute shadow-2xl drop-shadow-2xl rounded-3xl'
      >
        <Component {...props} />
      </section>
    )
  }
  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || 'Component'})`;
  return Wrapped

}

export default WindowWrapper