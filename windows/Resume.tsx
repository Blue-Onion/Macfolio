"use client"
import WindowWrapper from '@/hoc/WindowWrapper'
import React from 'react'
import WindowControls from './WindowControls'
import { DownloadIcon } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import react-pdf components with ssr disabled
const Document = dynamic(
    () => import('react-pdf').then((mod) => {
        mod.pdfjs.GlobalWorkerOptions.workerSrc = new URL(
            'pdfjs-dist/build/pdf.worker.min.mjs',
            import.meta.url
        ).toString();
        return mod.Document;
    }),
    { ssr: false }
)
const Page = dynamic(
    () => import('react-pdf').then((mod) => mod.Page),
    { ssr: false }
)

const Resume = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="resume" />
                <h2>Resume.pdf</h2>
                <a href="files/resume.pdf"
                    download
                    className='cursor-pointer'
                    title='Download Resume'
                >
                    <DownloadIcon className='icon' />
                </a>
            </div>
            <div className='overflow-y-auto overflow-x-scroll'> 
                <Document file="files/resume.pdf">
                    <Page pageNumber={1} renderAnnotationLayer={false} renderTextLayer={false} />
                </Document>
            </div>
        </>
    )
}
const resumeWindow = WindowWrapper(Resume, "resume")
export default resumeWindow
