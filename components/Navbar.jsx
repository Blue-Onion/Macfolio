"use client"
import { navLinks } from '@/data'
import useWindowStore from '@/store/window'
import dayjs from 'dayjs'
import Image from 'next/image'


const Navbar = () => {
    const { openWindow } = useWindowStore()
    const adityaData={
    "id": 4,
    "name": "about-me.txt",
    "icon": "/images/txt.png",
    "kind": "file",
    "fileType": "txt",
    "position": "top-60 left-5",
    "subtitle": "Meet the Developer Behind the Code",
    "image": "/images/me.jpeg",
    "description": [
        "Hey! I’m Blue Onion 👋",
        "A web developer who loves building sleek, interactive websites that actually work brilliantly.",
        "I specialize in JavaScript, React, and Next.js, and I’m all about smooth performance, clean UI, great UX, and writing code that doesn’t require a rescue team to debug later.",
        "When I’m not deep in dev mode, you’ll probably find me tweaking layouts at 2AM, sipping overpriced coffee like it’s fuel for survival, or impulse-buying gadgets I absolutely claim are “for productivity” 😅"
    ]
}
    return (
        <header>
            <nav>
                <div className=""
                
                >

                    <Image
                        height={15}
                        width={15}
                        alt='logo'
                        src='/images/logo.svg'
                    />
                    <p className="font-bold cursor-pointer"
                    onClick={() => openWindow(`${adityaData.fileType}${adityaData.kind}`, adityaData)}
                    >
                        Aditya
                    </p>
                    <ul>
                        {
                            navLinks.map((item) => {
                                return <li className='cursor-pointer hover:underline transition-all' onClick={() => openWindow(item.type)} key={item.id}>

                                    {item.name}
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="">
                    
                    <time >{dayjs().format('ddd D MMM  h:mm')}</time>
                </div>
            </nav>
        </header>
    )
}

export default Navbar