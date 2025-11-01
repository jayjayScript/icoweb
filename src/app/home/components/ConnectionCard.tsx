import Image from 'next/image'
import React from 'react'
import cardImg from '@/assets/image.png'
import desktopCard from '@/assets/desktop-img.png'
import Link from 'next/link'

const ConnectionCard = () => {
    return (
        <div>
            <div className='relative md:max-w-[85%] mx-auto mt-26'>
                {/* Grid Background with Image Container */}
                <div
                    className="relative w-[343px] md:w-full mx-auto bg-[#F7F7F7] rounded-[24px] overflow-hidden"
                >
                    {/* Grid Gradient Background */}
                    <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            backgroundImage: `
                linear-gradient(to right, #E5E7EB6E 1.5px, transparent 1px),
                linear-gradient(to bottom, #E5E7EB6E 1.5px, transparent 1px)
              `,
                            backgroundSize: '120px 120px',
                            WebkitMaskImage: `
              radial-gradient(circle at top left, transparent 0%, transparent 5%, black 26%),
              radial-gradient(circle at bottom left, transparent 0%, transparent 5%, black 26%)
            `,
                            WebkitMaskComposite: 'source-in',
                            maskComposite: 'intersect',
                        }}
                    />

                    <div className='relative z-50 top-8 md:top-18 px-8 py-6'>
                        <h3 className='text-[22px] md:text-[36px] font-semibold leading-[33px] text-[#121212] text-center'>Let&apos;s Build Something Great Together</h3>
                        <p className='text-[#707070] text-[14px] md:text-[16px] font-medium text-center my-2 md:my-6 lg:w-[40%] mx-auto'>From websites to apps, our team is ready to turn your ideas into high-performing digital products.</p>
                        <Link href="/contact" className='flex justify-center mt-6'>
                            <button className="bg-white hover:bg-[#544BC2] hover:text-[#FFF] transition duration-300 ease-in-out text-[#544BC2] px-6 py-3 rounded-full font-medium border border-[#9991FF] hover:border-gray-400 shadow-inner shadow-[#9A98B033] hover:shadow-[#9991FF] cursor-pointer">
                                Work with us
                            </button>
                        </Link>
                    </div>

                    {/* Purple Wave Image */}
                    <div className='relative'>
                        <Image src={cardImg} alt='image' className='w-full md:hidden' />
                        <Image src={desktopCard} alt='image' className='w-full hidden md:block' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnectionCard