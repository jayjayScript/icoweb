"use client"
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import logo from '@/assets/icoweb logo_/ICOWEB Logo 3.png'
import { Icon } from '@iconify/react'
import { navLinks } from './constant'
import Link from 'next/link'
import { useToggle } from '@/hooks/useToggle'

const Navbar = () => {
    const [isOpen, toggle] = useToggle(false)
    const navRef = useRef<HTMLUListElement | null>(null)

    // Close nav when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                if (isOpen) toggle()
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
        } else {
            document.removeEventListener("mousedown", handleClickOutside)
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [isOpen, toggle])

    return (
        <div>
            <nav className='flex items-center justify-between relative top-7 bg-white rounded-[100px] shadow-[#544BC224] shadow-[0_0_15px_#544BC215,0_4px_20px_#544BC220] px-4 sm:px-[18px] py-3.5 max-w-[90%] sm:max-w-[85%] md:max-w-[85%] lg:max-w-[60%] mx-auto z-50'>
                <Link href='/'>
                    <Image
                        src={logo}
                        className='h-[20px] w-[73px] sm:h-[24px] sm:w-[90px] md:h-[32px] md:w-[115px]'
                        width={73}
                        height={20.34}
                        unoptimized
                        alt='icoweb-logo'
                    />
                </Link>

                {/* Mobile & Desktop Menu */}
                <ul
                    ref={navRef}
                    className={`
                    flex flex-col gap-5 md:flex-row md:gap-5 lg:gap-7 
                    absolute md:static top-[60px] sm:top-[65px] left-0 
                    bg-[#FFF] md:bg-transparent 
                    w-[100%] md:w-auto mx-auto 
                    shadow-lg md:shadow-none shadow-[#544BC224] 
                    px-4 sm:px-[18px] md:px-0 py-5 sm:py-6 md:py-0 
                    rounded-3xl md:rounded-none
                    transition-all duration-300 ease-in-out
                    ${isOpen
                        ? 'opacity-100 translate-y-0 visible'
                        : 'opacity-0 -translate-y-2 invisible md:opacity-100 md:translate-y-0 md:visible'
                    }
                `}
                >
                    {navLinks.map((item, index) => (
                        <Link key={index} href={item.link} onClick={() => isOpen && toggle()}>
                            <li className='text-[#12121299] hover:text-[#544BC2] font-semibold text-[14px] sm:text-[15px] leading-5 transition-colors duration-200'>
                                {item.name}
                            </li>
                        </Link>
                    ))}

                    {/* Mobile CTA Button */}
                    <li className='md:hidden mt-2'>
                        <Link href='/contact'>
                            <button className='w-full border-[1px] border-[#9991FF] rounded-3xl px-5 py-3 text-[#544BC2] font- text-[14px] leading-5 shadow-inner shadow-[#9A98B033] cursor-pointer hover:bg-[#544BC2] hover:text-white transition-colors duration-200'>
                                Work with us
                            </button>
                        </Link>
                    </li>
                </ul>

                {/* Desktop CTA Button */}
                <Link href='/contact'>
                    <button className='hidden md:block border-[1px] border-bg-white text-[#544BC2] hover:text-[#fff] hover:bg-[#544bc2] px-6 py-3 rounded-full font-medium  border-[#9991FF] hover:border-gray-400 transition-colors shadow-inner shadow-[#9A98B081] hover:shadow-[#ABA5FCFF]  cursor-pointer whitespace-nowrap'>
                        Work with us
                    </button>
                </Link>

                {/* Mobile Menu Toggle */}
                <Icon
                    icon={isOpen ? "mynaui:x" : "mynaui:menu-solid"}
                    className='text-[#000] md:hidden transition-transform duration-200 cursor-pointer'
                    width="24"
                    height="24"
                    onClick={toggle}
                />
            </nav>
        </div>
    )
}

export default Navbar