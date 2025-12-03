
import React from 'react'

import gsap from 'gsap'
import Draggable from 'gsap/Draggable'

import Terminal from '@/windows/Terminal'
import Navbar from '@/components/Navbar'
import Welcome from '@/components/Welcome'
import Dock from '@/components/Dock'

import Arc from '@/windows/Arc'
import Resume from '@/windows/Resume'
import Finder from '@/windows/Finder'

gsap.registerPlugin(Draggable)

const page = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Arc/>
      <Resume/>
      <Finder/>
    </main>
  )
}

export default page