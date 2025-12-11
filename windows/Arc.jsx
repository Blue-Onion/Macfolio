"use client"
import { achievements, techStack } from '@/data'
import WindowWrapper from '@/hoc/WindowWrapper'
import { Check, ChevronLeft, ChevronRight, Copy, PanelLeft, Plus, Share, ShieldHalf } from 'lucide-react'
import React from 'react'
import WindowControls from './WindowControls'
import Image from 'next/image'
import Link from 'next/link'

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

                                <img
                                    src={ach.image}
                                    alt='image'
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