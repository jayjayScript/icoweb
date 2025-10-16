"use client"
import { cards } from '@/components/constant'
import Image from 'next/image'
import logo from '@/assets/icoweb.png'
import React from 'react'

const Cards = () => {

    const stats = [
        {
            number: "30+",
            title: "Ideas",
            description: "turned MVP and launched"
        },
        {
            number: "5+",
            title: "Years",
            description: "of experience with seasoned experts"
        },
        {
            number: "20+",
            title: "Expertise",
            description: "Across industries — FinTech, Healthcare, AI"
        }
    ]
    return (
        <div>
            <section className='relative top-[70px] min-h-[50vh] md:h-[80vh]'>
                <div className='mx-auto md:mt-14'>
                    {/* Desktop Grid */}
                    <div className='hidden md:flex md:items-center md:justify-around gap-6'>
                        {cards.map((card, index) => (
                            <div key={index} className="relative">
                                {/* Border Frame */}
                                <div
                                    className="absolute -inset-7 rounded-3xl"
                                    style={{ backgroundColor: card.color }}
                                />
                                {/* Card Content */}
                                <div className='relative bg-white h-[527px] w-[420px] rounded-2xl p-6 shadow-lg mx-auto'>
                                    {/* Add your card content here */}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Horizontal Scroll */}
                    <div className='md:hidden flex items-center gap-12 overflow-x-auto py-6 px-4 scrollbar-hide'>
                        {cards.map((card, index) => (
                            <div key={index} className="relative">
                                {/* Border Frame */}
                                <div
                                    className="absolute -inset-4 rounded-3xl"
                                    style={{ backgroundColor: card.color }}
                                />
                                {/* Card Content */}
                                <div className='relative bg-white h-[387.08px] w-[308.48px] rounded-2xl p-6 shadow-lg'>
                                    {/* Add your card content here */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
            </section>
            <section className='md:max-w-[90%] mx-auto mt-[9rem] px-4'>
                <div className='max-w-4xl md:max-w-5xl'>
                    <p className='text-[26px] text-[#121212] md:text-[54px] font-normal text-left leading-relaxed'>
                        Driven by <span className='font-medium'>design</span> — powered by <span className='font-medium'>code</span>, Icoweb turns your ideas into{' '}
                        <span className='inline-flex items-center align-top mx-4 mt-1 md:mt-2'>
                            <Image
                                className='transform perspective-1000 shadow-[#544BC224] shadow-[0_0_15px_#544BC215,0_4px_20px_#544BC220] md:w-[68.77px] md
                                :h-[42.3px] rounded-full'
                                src={logo}
                                height={24}
                                width={39}
                                alt="Icoweb logo"
                                style={{ transform: 'rotateZ(30deg)' }}
                            />
                        </span><br /> <span className='font-medium'>impactful digital experiences</span>
                    </p>
                </div>

                <div className='my-12'>
                    <div className='grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-4'>
                        {stats.map((stat, index) => (
                            <div key={index} className=' col-span-2 bg-[#F7F7F7] rounded-[16px] p-[32px] text-left border-[0.8px] border-[#E9E9E9]'>
                                <h2 className='text-[18px] text-[#121212] md:text-[40px] font-medium md:font-semibold mb-2'>
                                    {stat.number}
                                </h2>
                                <p className={`text-[14px] text-[#121212] md:text-base ${index === 2 ? "max-w-[250px]" : "max-w-[200px]"} md:max-w-[250px]`}>
                                    <span className='font-semibold'>{stat.title}</span>{' '}
                                    {stat.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Cards