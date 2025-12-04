"use client"
import WindowWrapper from '@/hoc/WindowWrapper'
import useWindows from '@/store/window';
import React from 'react'
import WindowControls from './WindowControls';


const TextFile = () => {
    const { windows } = useWindows();


    const data = windows?.txtfile?.data;
    if (!data) return;
    const { description } = data;



    return (
        <>
            <div id='window-header' className='flex'>
                <WindowControls target="txtfile" />
                <h2>Text File</h2>
            </div>
            <div id='window-body' className='p-3 max-w-2xl max-h-2xl overflow-y-auto'>
                <p className="">
                    {description}
                </p>
            </div>
        </>
    )
}
const textFileWindow = WindowWrapper(TextFile, "txtfile")
export default textFileWindow