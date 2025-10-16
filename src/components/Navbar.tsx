"use client"
import Image from 'next/image'
import React from 'react'
import logo from '../../public/image.png'
import { Icon } from '@iconify/react'
import { navLinks } from './constant'
import Link from 'next/link'
import { useToggle } from '@/hooks/useToggle'

const Navbar = () => {
    const [isOpen, toggle] = useToggle(false)

    return (
        <div>
            <nav className='flex items-center justify-between relative top-7 bg-white rounded-[100px] shadow-[#544BC224] shadow-[0_0_15px_#544BC215,0_4px_20px_#544BC220] px-[18px] py-3.5 max-w-[85%] md:max-w-[60%] mx-auto z-50'>
                <Image src={logo} className='md:h-[32px] md:w-[115px]' width={73} height={20.34} alt='icoweb-logo'/>

                {/* OPTION 1: Slide Down + Fade (Recommended) */}
                <ul className={`
                    flex flex-col gap-7 md:flex-row md:gap-7 
                    absolute md:static top-16 left-0 
                    bg-[#FFF] md:bg-transparent 
                    w-[100%] md:w-auto mx-auto 
                    shadow-lg md:shadow-none shadow-[#544BC224] 
                    px-[18px] md:px-0 py-6 md:py-0 
                    rounded-3xl
                    
                    transition-all duration-300 ease-in-out
                    ${isOpen 
                        ? 'opacity-100 translate-y-0 visible' 
                        : 'opacity-0 -translate-y-2 invisible md:opacity-100 md:translate-y-0 md:visible'
                    }
                `}>
                    {navLinks.map((item, index) => (
                        <Link key={index} href={item.link}>
                            <li className='text-[#12121299] hover:text-[#544BC2] font-normal text-[14px] leading-5'>
                                {item.name}
                            </li>
                        </Link>
                    ))}
                </ul>

                <button className='hidden md:block border-[1px] border-[#9991FF] rounded-3xl px-5 py-3 text-[#544BC2] font-normal text-[14px] leading-5 shadow-inner shadow-[#9A98B033] cursor-pointer'>
                    Work with us
                </button>

                {/* Toggle between menu and close icon */}
                <Icon 
                    icon={isOpen ? "mynaui:x" : "mynaui:menu-solid"} 
                    className='text-[#000] md:hidden transition-transform duration-200' 
                    width="24" 
                    height="24" 
                    onClick={toggle}
                />
            </nav>
        </div>
    )
}

export default Navbar