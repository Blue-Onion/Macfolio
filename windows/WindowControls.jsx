"use client"
import useWindowStore from '@/store/window'
import { Minus, Maximize2, XIcon } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const WindowControls = ({ target }) => {
  const { closeWindow } = useWindowStore();
  const [hover, setHover] = useState(null);

  return (
    <>
    <div id="window-controls" className="items-center gap-[6px] hidden sm:flex">
      <div
        className="close flex items-center justify-center"
        onMouseEnter={() => setHover("close")}
        onMouseLeave={() => setHover(null)}
        onClick={() => closeWindow(target)}
        >
        {hover === "close" && <Image src="/images/close.png" alt="x" width={10} height={10} className="font-bold  pointer-events-none" />}
      </div>

      <div
        className="minimize flex items-center justify-center"
        onMouseEnter={() => setHover("minimize")}
        onMouseLeave={() => setHover(null)}
        onClick={() => closeWindow(target)}
        >
        {hover === "minimize" && <Minus size={10} className="font-bold  pointer-events-none" />}
      </div>

      <div
        className="maximize flex items-center justify-center"
        onMouseEnter={() => setHover("maximize")}
        onMouseLeave={() => setHover(null)}
        >
        {hover === "maximize" && <Maximize2 size={10} className="font-bold  pointer-events-none" />}
      </div>
    </div>
    <div className="sm:hidden  w-xs">
      <span  onClick={() => closeWindow(target)} className="font-bold    text-black">
<XIcon className='font-bold' size={25}/>
      </span>
    </div>
        </>
  )
}

export default WindowControls;