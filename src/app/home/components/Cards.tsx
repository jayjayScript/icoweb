"use client"
import Image from 'next/image'
import logo from '@/assets/icoweb logo_/ICOWEB Logo 6.png'
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
            <section className='max-w-full md:max-w-[95%] lg:max-w-[90%] mx-auto mt-[7rem] sm:mt-[8rem] md:mt-[8rem] px-4 sm:px-6'>
                <div className='max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl'>
                    <p className='text-[22px] sm:text-[28px] md:text-[36px] lg:text-[48px] xl:text-[54px] text-[#121212] font-normal text-left leading-relaxed'>
                        Driven by <span className='font-medium'>design</span> — powered by <span className='font-medium'>code</span>, Icoweb turns your ideas into{' '}
                        <span className='inline-flex items-center align-top mx-2 sm:mx-3 md:mx-4 mt-1 md:mt-2'>
                            <Image
                                className='transform perspective-1000 shadow-[#544BC224] shadow-[0_0_15px_#544BC215,0_4px_20px_#544BC220] w-[32px] h-[20px] sm:w-[40px] sm:h-[25px] md:w-[55px] md:h-[34px] lg:w-[68.77px] lg:h-[42.3px] rounded-full object-contain'
                                src={logo}
                                height={24}
                                width={39}
                                alt="Icoweb logo"
                                unoptimized
                                style={{ transform: 'rotateZ(30deg)' }}
                            />
                        </span>
                        <br className='hidden sm:block' /> 
                        <span className='font-medium'>impactful digital experiences</span>
                    </p>
                </div>

                <div className='my-8 sm:my-10 md:my-12'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4'>
                        {stats.map((stat, index) => (
                            <div key={index} className='sm:col-span-1 lg:col-span-2 bg-[#F7F7F7] rounded-[16px] p-6 sm:p-7 md:p-[32px] text-left border-[0.8px] border-[#E9E9E9]'>
                                <h2 className='text-[32px] sm:text-[36px] md:text-[40px] text-[#121212] font-medium md:font-semibold mb-2'>
                                    {stat.number}
                                </h2>
                                <p className='text-[14px] md:text-base text-[#121212] max-w-full sm:max-w-[200px] md:max-w-[250px]'>
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