"use client"
import { techStack } from '@/data'
import WindowWrapper from '@/hoc/WindowWrapper'
import { Check } from 'lucide-react'
import React from 'react'
import WindowControls from './WindowControls'


const Terminal = () => {
  return (
    <>
    <div className="relative flex items-center p-3">
        <WindowControls target="terminal" />

        <h2 className="absolute left-1/2 -translate-x-1/2 text-gray-500 font-bold pointer-events-none">
          Tech Stack
        </h2>
      </div>
      <div className="techstack">
        <p>
          <span className="font-bold mr-1">
            @Aditya ~ %
          </span>
          ls techStack
        </p>
        <div className="label  hidden md:flex">
          <p className="w-32">
            Category
          </p>
          <p>Technologies</p>
        </div>
        <ul className='content'>
          {techStack.map((tech) => (
            <li key={tech.category} className='flex-col flex md:flex-row  '>
              <Check className='text-emerald-600' />
              <h3>
                {tech.category}
              </h3>
              <ul className="flex">
                {tech.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

            </li>
          ))}
        </ul>
        <p>
          <span className="font-bold mr-1">
            @Aditya ~ %
          </span>

        </p>
      </div>

    </>
  )
}
const terminalWindow = WindowWrapper(Terminal, 'terminal')
export default terminalWindow