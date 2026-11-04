"use client"
import WindowWrapper from '@/hoc/WindowWrapper'
import WindowControls from './WindowControls'
import useGalleryStore from '@/store/gallery'
import useWindowStore from '@/store/window'
import { photosLinks, type FileSystemNode, type FolderNode, type ImageFileItem } from '@/data'
import Image from 'next/image'
import clsx from 'clsx'


const Gallery = () => {
    const { activeGalleryLocation, setActiveGalleryLocation } = useGalleryStore();
    const { openWindow } = useWindowStore();


    const renderCategories = (name: string, list: FolderNode[]) => {
        return <div className="space-y-4 p-1">
            <h3 className='font-semibold text-gray-500 text-sm'>
                {name}
            </h3>
            <ul>
                {list.map((item) => {
                    return (
                        <li
                            key={item.id}
                            className={clsx(item.id === activeGalleryLocation?.id ? "active" : "not-active")}
                            onClick={() => setActiveGalleryLocation(item)}
                        >
                            <Image
                                className={clsx(item.id === activeGalleryLocation?.id ? "" : "filter brightness-0 saturate-100")}
                                height={18}
                                width={18}
loading='lazy'
                                src={item.icon}
                                alt={item.name}
                            />
                            <p className='text-sm truncate font-medium'>{item.name}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    }

    const openItem = (item: FileSystemNode) => {
        if (item.kind === "file" && item.fileType === "img") {
            return openWindow("imgfile", item)
        }
        if (item.kind === "folder") {
            return setActiveGalleryLocation(item)
        }
    }

    return (
        <>
            <div className="flex p-3 gap-4 h-full w-full">
                <div className="sidebar bg-[#f6fbfc] border border-white p-3 gap-3 flex flex-col shadow-2xl rounded-3xl">
                    <div className="">
                        <WindowControls target="photos" />
                    </div>
                    {renderCategories("Categories", Object.values(photosLinks))}
                </div>
                <div className="gallery flex-1 overflow-auto">
                    <ul>
                        {activeGalleryLocation.children.filter((item): item is ImageFileItem => item.kind === "file" && item.fileType === "img").map((item) => {
                            
                            return (
                                <li key={item.id} className={clsx(item.id === activeGalleryLocation?.id ? "active" : "not-active")} onClick={() => openItem(item)}>
                                    <Image height={400} width={400} src={item.imageUrl} alt={item.name} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}
const GalleryWindow = WindowWrapper(Gallery, "photos")
export default GalleryWindow
