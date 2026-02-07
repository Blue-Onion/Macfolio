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
        "Just your friendly neighbourhood developer.",
        "Based in South Delhi, India — building reliable, scalable, and clean web applications with a strong focus on simplicity and performance.",
        
        "I believe good software should be simple, readable, and actually enjoyable to maintain. If something can be simpler, I’ll probably try to make it so.",
        "Always available for freelance, collaborations, or full-time roles — working with clients worldwide.",
        "Heads up — big time dev coming up."
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