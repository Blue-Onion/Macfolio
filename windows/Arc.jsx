"use client"
import { achievements, techStack } from '@/data'
import WindowWrapper from '@/hoc/WindowWrapper'
import { ChevronLeft, ChevronRight, Copy, PanelLeft, Plus, Share, ShieldHalf } from 'lucide-react'
import React from 'react'
import WindowControls from './WindowControls'

import Link from 'next/link'
import Image from 'next/image'

const Arc = () => {
    return (
        <>
            <div id='window-header'>
                <WindowControls target='arc' />
                <PanelLeft className='ml-10 icon' />
                <div className="flex items-center">
                    <ChevronLeft className='icon' />
                    <ChevronRight className='icon' />
                </div>
                <div className="flex-1 flex">
                    <ShieldHalf className='icon' />
                    <input type="text" placeholder='Search or Enter Website name' />
                </div>
                <div className="flex items-center gap-5">
                    <Share className='icon' />
                    <Plus className='icon' />
                    <Copy className='icon' />
                </div>

            </div>
            <div className="blog">
                <h2>My Achievements</h2>
                <div className="space-y-8">
                    {achievements.map((ach) => {
                        return <div key={ach.id} className="blog-post">
                            <div className="col-span-2 flex ">

                                <Image
                                    src={ach.image}
                                    alt='image'
                                    width={300}
                                    height={200}
                                    className="object-cover rounded-lg"
                                />
                            </div>
                            <div className="content">
                                <p>{ach.date}</p>
                                <Link target='_blank' rel='noopener noreferrer' href={ach.link}>
                                    <h3>{ach.title}</h3>
                                    <p>{ach.description}</p>
                                </Link>
                            </div>
                        </div>
                    })}
                </div>
            </div>


        </>
    )
}
const arcWindow = WindowWrapper(Arc, 'arc')
export default arcWindow