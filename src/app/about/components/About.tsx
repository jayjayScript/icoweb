import React from 'react'
import curvyLine from "@/assets/about/Vector 4.png"
import Image from 'next/image'
import world from '@/assets/about/world.png'

const About = () => {

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
            <section>
                <div className='md:max-w-[90%] mx-auto px-4 mt-14 md:mt-24 md:flex justifiy-between items-start'>
                    <div className='max-w-4xl md:max-w-5xl flex-1'>
                        <p className='text-[26px] text-[#121212] md:text-[48px] font-normal text-left leading-relaxed'>
                            Building Digital Products
                            <span className='inline-flex items-center align-top mx-4 mt-1 md:mt-2'>
                            </span><br /> That Make an <span className='font-medium'>Impact</span>
                        </p>
                    </div>

                    <div className='flex flex-col gap-6 flex-1'>
                        <div>
                            <h4 className='text-[24px] text-[#121212] md:text-[32px] font-medium my-4'>About Us</h4>
                            <p className='text-[16px] md:text-[18px] text-[#12121299] leading-[38px] font-medium'>Icoweb is a design and development agency crafting digital products that are as functional as they are beautiful. We merge creative design with robust development to deliver websites, apps, and platforms that meet today’s needs and scale for tomorrow. With experience across fintech, healthcare, and AI, every project starts by understanding your vision and ends with a product that delivers results.</p>
                        </div>
                        <div>
                            <h4 className='text-[24px] text-[#121212] md:text-[32px] font-medium my-4'>Our Values</h4>
                            <p className='text-[16px] md:text-[18px] text-[#12121299] leading-[38px] font-medium'>At Icoweb, our values shape everything we build. We put users first, uphold high standards of quality, work collaboratively with clients, and create future-ready solutions that grow with your business. These principles guide us in delivering purposeful, impactful, and lasting digital products.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='md:max-w-[90%] mx-auto mt-20 px-4 grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-20'>
                    {/* Left Purple Card - Takes 1 column */}
                    <div className='bg-[#544BC2] relative overflow-hidden h-[388px] md:h-[444px] md:w-[326px] w-full rounded-lg mx-auto p-8'>
                        <Image src={curvyLine} alt='curvy line' className='absolute -top-22 -left-8' />
                        <Image src={curvyLine} alt='curvy line' className='absolute bottom-0 right-0' />
                        <div className='relative flex flex-col justify-between h-full'>
                            <div className="flex -space-x-2 justify-center">
                                <div className="w-[64px] h-[64px] rounded-full bg-gray-800 border-2 border-white" />
                                <div className="w-[64px] h-[64px] rounded-full bg-gray-800 border-2 border-white" />
                                <div className="w-[64px] h-[64px] rounded-full bg-gray-800 border-2 border-white" />
                                <div className="w-[64px] h-[64px] rounded-full bg-gray-800 border-2 border-white" />
                                <div className="w-[64px] h-[64px] rounded-full bg-gray-800 border-2 border-white" />
                            </div>

                            <div className='self-baseline'>
                                <p className='text-white text-[32px] md:text-[40px] font-semibold'>
                                    10+<br />
                                    <span className='font-medium text-[24px] md:text-[32px]'>Creatives</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Takes 2 columns */}
                    <div className='md:col-span-3 flex flex-col gap-4 md:gap-8'>
                        {/* Top 3 Stats Cards */}
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8'>
                            {stats.map((stat, index) => (
                                <div key={index} className='bg-[#F7F7F7] rounded-[16px] p-[20px] text-left border-[0.8px] border-[#E9E9E9]'>
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

                        {/* Bottom World Card */}
                        <div className='relative bg-[#F7F7F7] rounded-[16px] p-[20px] text-left border-[0.8px] border-[#E9E9E9] overflow-hidden flex-1'>
                            <div>
                                <p className='font-semibold text-[18px] md:text-[32px] text-[#121212]'>Wherever You Are, We Build for You</p>
                                <p className='font-medium text-[14px] md:text-[16px] text-[#12121299] mt-3 md:w-[60%]'>Our team designs and develops solutions that perform globally, tailored to your unique business needs.</p>
                            </div>

                            <Image src={world} alt='world' className='relative md:absolute -bottom-[19.60px] -right-[19.60px] md:bottom-0 md:right-0' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About