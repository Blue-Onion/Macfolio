"use client"
import WindowWrapper from '@/hoc/WindowWrapper'
import WindowControls from './WindowControls'

import { locations } from '@/data'
import useLocationStore from '@/store/location'
import Image from 'next/image'
import clsx from 'clsx'
import useWindowStore from '@/store/window'



const Finder = () => {
    const { setActiveLocation, activeLocation } = useLocationStore()
    const { openWindow } = useWindowStore()
    const renderList = (name, list) => {
        return <div className="p-0">

            <h3 className='font-bold text-gray-500 text-md'>
                {name}
            </h3>
            <ul>
                {list.map((item) => {
                    return (
                        <li key={item.id} className={clsx(item.id == activeLocation.id ? "active" : "not-active")} onClick={() => setActiveLocation(item)}>
                            <Image
                                className={clsx(item.id == activeLocation.id ? "" : "filter brightness-0 saturate-100")} height={18} width={18} src={name == "Work" ? "/images/sidebarFolder.jpg" : item.icon} alt="" />
                            <p className='text-sm truncate font-medium'>{item.name}</p>
                        </li>
                    )
                })}
            </ul>
        </div>

    }

    const openItem = (item) => {

        
        
        if (item.fileType === "pdf") {
            return openWindow("resume")
        }
        if (item.fileType === "url") {
            return window.open(item.href,"_blank")
        }
        if (item.kind === "folder") {
           return setActiveLocation(item)
        }
        return openWindow(`${item.fileType}${item.kind}`,item)


    }
    return (
        <>
            <div className="flex gap-4 p-2 h-full">
                <div className="sidebar bg-[#f6fbfc] border border-white p-3 gap-3 flex flex-col shadow-2xl rounded-3xl">
                    <div className="">
                        <WindowControls target="finder" />
                    </div>
                    {renderList("Favorites", Object.values(locations))}
                    {renderList("Work", locations.work.children)}

                </div>
                <ul className="content">
                    {activeLocation?.children.map((item) => {
                        return <li key={item.id} onClick={() => openItem(item)} className={item.position}>
                            <img src={item.icon} alt={item.name} />
                            <p className='text-sm truncate '>{item.name}</p>
                        </li>
                    })}
                </ul>

            </div>
        </>
    )
}
const finderWindow = WindowWrapper(Finder, "finder")
export default finderWindow