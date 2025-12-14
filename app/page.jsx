'use client'

import React from 'react'

import gsap from 'gsap'
import Draggable from 'gsap/Draggable'

import dynamic from 'next/dynamic'
import {Home,TextFile,ImgFile,Gallery,Arc,Resume,Contact,Finder} from './index'
const Terminal = dynamic(() => import('@/windows/Terminal'), { ssr: false })
import Navbar from '@/components/Navbar'
import Welcome from '@/components/Welcome'
import Dock from '@/components/Dock'
import LoadingWrapper from '@/components/LoadingWrapper'

// Dynamic imports for heavy window components

import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(Draggable)
gsap.registerPlugin(SplitText)

const Page = () => {
  return (
    <LoadingWrapper>
      <Navbar />
      <main>
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