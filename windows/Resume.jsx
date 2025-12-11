"use client"
import WindowWrapper from '@/hoc/WindowWrapper'
import React from 'react'
import WindowControls from './WindowControls'
import { DownloadIcon } from 'lucide-react'
import dynamic from 'next/dynamic'

// Dynamically import react-pdf components with ssr disabled
const Document = dynamic(
    () => import('react-pdf').then((mod) => mod.Document),
    { ssr: false }
)
const Page = dynamic(
    () => import('react-pdf').then((mod) => mod.Page),
    { ssr: false }
)

// Configure PDF.js worker (only on client side)
if (typeof window !== 'undefined') {
    import('react-pdf').then((mod) => {
        mod.pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${mod.pdfjs.version}/build/pdf.worker.min.mjs`
    })
}
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