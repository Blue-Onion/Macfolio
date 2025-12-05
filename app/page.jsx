'use client'

import React from 'react'

import gsap from 'gsap'
import Draggable from 'gsap/Draggable'

import Terminal from '@/windows/Terminal'
import Navbar from '@/components/Navbar'
import Welcome from '@/components/Welcome'
import Dock from '@/components/Dock'
import LoadingWrapper from '@/components/LoadingWrapper'

import Arc from '@/windows/Arc'
import Resume from '@/windows/Resume'
import Finder from '@/windows/Finder'
import Contact from '@/windows/Contact'
import Home from '@/components/Home'
import TextFile from '@/windows/TextFile'
import ImgFile from '@/windows/ImgFile'
import Gallery from '@/windows/Gallery'

gsap.registerPlugin(Draggable)

const Page = () => {
  return (
    <LoadingWrapper>
      <main>
        <Navbar />
        <Welcome />
        <Dock />
        <Terminal />
        <Arc />
        <Home />
        <Resume />
        <Finder />
        <Contact />
        <TextFile />
        <ImgFile />
        <Gallery />
      </main>
    </LoadingWrapper>
  )
}

export default Page