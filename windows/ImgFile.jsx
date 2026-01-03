"use client"
import WindowWrapper from '@/hoc/WindowWrapper';
import useWindowStore from '@/store/window';
import React from 'react'
import WindowControls from './WindowControls';
import Image from 'next/image';

const ImgFile = () => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;
  if (!data) return;
  const { imageUrl, description } = data;

  return (
    <>
      <div className="relative flex items-center p-3">
        <WindowControls target="imgfile" />

        <h2 className="absolute left-1/2 -translate-x-1/2 text-gray-500 font-bold pointer-events-none">
          Image File
        </h2>
      </div>
      <div className='p-0 pt-4 sm:pt-0 sm:mt-0'>
        {imageUrl && <Image className='' height={800} width={800} src={imageUrl} alt="" />}
        <p className="">
          {description}
        </p>
      </div>
    </>

  )
}
const imgFileWindow = WindowWrapper(ImgFile, "imgfile")
export default imgFileWindow