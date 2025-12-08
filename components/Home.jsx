"use client"
import { locations } from '@/data'
import useLocationStore from '@/store/location'
import useWindowStore from '@/store/window'
import { useGSAP } from '@gsap/react'
import clsx from 'clsx'
import { Draggable } from 'gsap/Draggable'
import Image from 'next/image'
import React from 'react'

const Home = () => {
    const project = locations.work.children;
    const { setActiveLocation } = useLocationStore();
    const { openWindow } = useWindowStore();
    useGSAP(() => {
        Draggable.create(".folder", {
            bounds: "main",
            type: "x,y"
        })
    }, [])
    const openProject = (project) => {
        setActiveLocation(project);
        openWindow("finder");
    }
    return (
        <section id="home">
            <ul>
                {project.map((project) => (
                    <li className={clsx("group folder", project.windowPosition)} onClick={() => openProject(project)} key={project.id}>
                        <Image src={"/images/folder.jpg"} alt={"project"} width={70} height={70} />
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Home