"use client"
import { navLinks, aboutMe } from '@/data'
import useWindowStore from '@/store/window'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'
import { author } from '@/lib/site'


const Navbar = () => {
    const { openWindow } = useWindowStore()
    const adityaData = aboutMe
    return (
        <header>
            <nav>
                <div className=""
                
                >

                    <Image
                        height={15}
                        width={15}
                        alt={`${author} Macfolio logo`}
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
                                return <li className='cursor-pointer hover:underline transition-all' key={item.id}>
                                    {/* Real crawlable href; JS intercepts to open the window in-app */}
                                    <Link href={item.href} onClick={(e) => { e.preventDefault(); openWindow(item.type) }}>
                                        {item.name}
                                    </Link>
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