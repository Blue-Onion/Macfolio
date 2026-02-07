"use client"
import WindowWrapper from '@/hoc/WindowWrapper'
import useWindows from '@/store/window';

import WindowControls from './WindowControls';
import Image from 'next/image';


const TextFile = () => {
    const { windows } = useWindows();
    const data = windows?.txtfile?.data;
    if (!data) return;
    const { description, image } = data;
    return (
        <>
            <div className="relative flex items-center p-3">
                <WindowControls target="txtfile" />

                <h2 className="absolute left-1/2 -translate-x-1/2 text-gray-500 font-bold pointer-events-none">
                    Text File
                </h2>
            </div>
            <div id='window-body' className='p-3 flex flex-col items-center gap-6 max-w-5xl max-h-6xl overflow-y-auto'>
                {image && <Image className='rounded-lg' height={200} width={200} src={image} alt="" />}
                <div className="flex flex-col space-y-3">

                    {description.map((desc, i) => {
                        return <p key={i} className={`${i == 0 || i == description.length - 1 ? "font-bold w-full text-center" : ""}`}>
                            {desc}
                        </p>
                    })}
                </div>
            </div>
        </>
    )
}
const textFileWindow = WindowWrapper(TextFile, "txtfile")
export default textFileWindow