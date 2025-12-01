"use client"
import { navIcons, navLinks } from '@/data'
import useWindowStore from '@/store/window'
import dayjs from 'dayjs'
import Image from 'next/image'


const Navbar = () => {
    const { openWindow } = useWindowStore()
    return (
        <header>
            <nav>
                <div className="">
                    <Image
                        height={15}
                        width={15}
                        alt='logo'
                        src='/images/logo.svg'
                    />
                    <p className="font-bold">
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
                    <ul>
                        {navIcons.map(({ id, img }) => {
                            return <li key={id}>
                                <Image
                                    height={15}
                                    width={15}
                                    alt='logo'
                                    src={img}
                                />
                            </li>
                        })}
                    </ul>
                    <time >{dayjs().format('ddd MMM D h:mm A')}</time>
                </div>
            </nav>
        </header>
    )
}

export default Navbar