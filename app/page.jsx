
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
import Contact from '@/windows/Contact'
import Home from '@/components/Home'
import TextFile from '@/windows/TextFile'

gsap.registerPlugin(Draggable)

const page = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <Terminal/>
      <Arc/>
      <Home/>
      <Resume/>
      <Finder/>
      <Contact/>
      <TextFile/>
    </main>
  )
}

export default page