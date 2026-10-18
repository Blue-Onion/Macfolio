"use client"
import { locations } from '@/data'
import useLocationStore from '@/store/location'
import useWindowStore from '@/store/window'
import { useGSAP } from '@gsap/react'
import clsx from 'clsx'

import { Draggable } from 'gsap/Draggable'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { projectSlug } from '@/lib/site'

const Home = () => {
    const project = locations.work.children;
    const { setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();
    useGSAP(() => {
        const instances = Draggable.create(".folder", {
            bounds: "main",
            type: "x,y"
        })
        return () => instances?.forEach((d) => d.kill())
    }, [])
    const openProject = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    }
    return (
        <section id="home">
            <ul>
                {project.map((project) => (
                    <li className={clsx("group folder", project.windowPosition)} key={project.id}>
                        {/* Crawlable href + accessible label; JS intercepts to open the Finder window in-app */}
                        <Link
                            href={`/projects/${projectSlug(project.name)}`}
                            aria-label={`Open ${project.name} project`}
                            className="block"
                            onClick={(e) => { e.preventDefault(); openProject(project); }}
                        >
                            <Image src={"/images/folder.jpg"} alt={`${project.name} project folder`} width={70} height={70} />
                            <p>{project.name}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Home