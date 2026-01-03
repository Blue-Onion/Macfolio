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
            <div id='window-body' className='p-3 flex flex-col items-center gap-6 max-w-2xl max-h-2xl overflow-y-auto'>
                {image && <Image className='rounded-lg' height={200} width={200} src={image} alt="" />}
                <p className="">
                    {description}
                </p>
            </div>
        </>
    )
}
const textFileWindow = WindowWrapper(TextFile, "txtfile")
export default textFileWindow