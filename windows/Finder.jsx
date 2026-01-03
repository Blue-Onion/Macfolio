"use client"
import WindowWrapper from '@/hoc/WindowWrapper'
import WindowControls from './WindowControls'
import { locations } from '@/data'
import useLocationStore from '@/store/location'
import Image from 'next/image'
import clsx from 'clsx'
import useWindowStore from '@/store/window'
import { MoveLeftIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
const Finder = () => {
    const { setActiveLocation, activeLocation } = useLocationStore()
    const [breadCrumb, setBreadCrumb] = useState(() => [activeLocation])
    const { openWindow } = useWindowStore()
    const [isPhone, setIsPhone] = useState(false)

    useEffect(() => {
        // Check if mobile after mount to prevent hydration errors
        if (typeof window !== "undefined" && window.innerWidth < 768) {
            setTimeout(() => {
                setIsPhone(true)
                const ROOT_LOCATION = {
                    id: 0,
                    type: "root",
                    name: "Portfolio",
                    icon: "/icons/finder.jpg",
                    kind: "folder",
                    children: Object.values(locations)
                }
                setActiveLocation(ROOT_LOCATION)
                setBreadCrumb([ROOT_LOCATION])
            }, 0)
        }
    }, [setActiveLocation])

    useEffect(() => {
        const lastItem = breadCrumb[breadCrumb.length - 1]
        if (lastItem && lastItem.id !== activeLocation?.id) {
            setActiveLocation(lastItem)
        }
    }, [breadCrumb, setActiveLocation, activeLocation])
    const getItemIcon = (item) => {
        if (!isPhone) return item.icon
        return item.kind === "folder" ? "/images/folder.jpg" : item.icon
    }
    const openItem = (item) => {

        if (!item) return
        if (item.id === breadCrumb[breadCrumb.length - 2]?.id) {
            setBreadCrumb(breadCrumb.slice(0, breadCrumb.length - 1))
            return
        }
        if (item.fileType === "pdf") {
            return openWindow("resume")
        }
        if (item.fileType === "url") {
            return window.open(item.href, "_blank")
        }
        if (item.kind === "folder") {
            setBreadCrumb([...breadCrumb, item])
            return
        }


        return openWindow(`${item.fileType}${item.kind}`, item)


    }

    const handleSidebarClick = (item) => {

        setBreadCrumb([item])
        setActiveLocation(item)
    }

    const renderList = (name, list) => {
        return <div className="p-0">

            <h3 className='font-bold text-gray-500 text-md'>
                {name}
            </h3>
            <ul>
                {list.map((item) => {
                    return (
                        <li key={item.id} className={clsx(item.id === activeLocation.id ? "active" : "not-active")} onClick={() => handleSidebarClick(item)}>
                            <Image
                                className={clsx(item.id === activeLocation.id ? "" : "filter brightness-0 saturate-100")} height={18} width={18} src={name === "Work" ? "/images/sidebarFolder.jpg" : item.icon} alt="" />
                            <p className='text-sm truncate font-medium'>{item.name}</p>
                        </li>
                    )
                })}
            </ul>
        </div>

    }



    return (
        <>
            <div className="flex flex-col md:flex-row gap-4 p-2 h-full">
                <div className="sidebar md:flex hidden bg-[#f6fbfc] border border-white p-3 gap-3  flex-col shadow-2xl rounded-3xl">
                    <div className="">
                        <WindowControls target="finder" />
                    </div>
                    {renderList("Favorites", Object.values(locations))}
                    {renderList("Work", locations.work.children)}

                </div>
                <div className="relative md:hidden flex items-center p-3">
                    <WindowControls target="finder" />

                    <h2 className="absolute left-1/2 -translate-x-1/2 text-gray-500 font-bold pointer-events-none">
                        {activeLocation?.name}
                    </h2>
                </div>
                <div className="controls p-2 md:hidden">
                    <button className={`flex ${breadCrumb.length === 1 ? "opacity-50 cursor-not-allowed" : ""}  items-center gap-2`}
                        disabled={breadCrumb.length === 1}
                        onClick={() => openItem(breadCrumb[breadCrumb.length - 2])}>
                        <MoveLeftIcon />
                    </button>
                </div>
                <ul className="content ">
                    {activeLocation?.children.map((item) => {



                        return <li key={item.id} onClick={(e) => {
                            e.stopPropagation();
                            openItem(item);
                        }} className={item.position || ""}>
                            <Image src={getItemIcon(item)} alt={item.name} width={40} height={40} />
                            <p className='text-sm truncate'>{item.name}</p>
                        </li>
                    })}
                </ul>

            </div>
        </>
    )
}
const finderWindow = WindowWrapper(Finder, "finder")
export default finderWindow