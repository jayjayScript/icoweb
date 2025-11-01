import React from 'react'
import textbg from '@/assets/textbg.png'
import Image from 'next/image'

import chineme from '@/assets/testimonials/Okpala chineme.jpg'
import onifade from '@/assets/testimonials/Temidayo Onifade.jpg'
import sonia from '@/assets/testimonials/sonia kajotoni.jpg'
import princewill from '@/assets/testimonials/princewill.jpg'
import Link from 'next/link'


const Hero = () => {
    return (
        <div>
            <section className="relative top-14 p-6 px-4 sm:px-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-600">Available for work</span>
                </div>

                
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-center leading-[140%] md:w-[80%] lg:w-[67%] mx-auto px-2">
                    We Create Digital
                    Experiences <br className='hidden lg:flex'/>That{" "}
                    <span className="relative inline-block">
                        <Image
                            src={textbg}
                            alt="text bg"
                            fill
                            className="object-contain scale-105"
                        />
                        <span className="relative z-10 text-white px-1">Drive Results</span>
                    </span>
                </h1>

                <p className="text-[#707070] text-center max-w-2xl mx-auto mb-8 text-base md:text-[18px] lg:text-[20px] leading-[28px] my-[16px] font-medium px-4">
                    Icoweb builds high-performing websites, apps, and platforms
                    tailored to your vision designed to engage, built to last.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full sm:w-auto md:w-[90%] lg:w-[60%] xl:w-[37%] mx-auto px-4">
                    <Link href="/contact" className='w-full sm:flex-1 sm:min-w-[160px]'>
                    
                    <button className="w-full sm:flex-1 sm:min-w-[160px] bg-[#544BC2] text-white px-6 py-3 rounded-full font-medium  transition-colors shadow-inner shadow-[#ABA5FCFF] cursor-pointer">
                        Start Your Project
                    </button>
                    </Link>
                    <Link href='/our-works' className='w-full sm:flex-1 sm:min-w-[160px]'>
                    
                    <button className="w-full sm:flex-1 sm:min-w-[160px] bg-white text-[#544BC2] hover:text-[#fff] hover:bg-[#544bc2] px-6 py-3 rounded-full font-medium border border-[#9991FF] hover:border-gray-400 transition-colors shadow-inner shadow-[#9A98B081] hover:shadow-[#ABA5FCFF] cursor-pointer">
                        See Our Work
                    </button>
                    </Link>
                </div>

                <div className="flex items-center justify-between gap-3 bg-white backdrop-blur-sm px-[14px] py-[6px] rounded-full border border-[#9991FF] shadow-[rgba(85,75,194,0.31)] shadow-[0_0_15px_#544BC215,0_4px_20px_#544BC220] w-full max-w-[291px] h-[42px] mx-auto">
                    <div className="flex -space-x-2">
                        <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white overflow-hidden" >
                            <Image src={sonia} alt="client"/>
                        </div>
                        <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white overflow-hidden" >
                            <Image src={chineme} alt="client"/>
                        </div>
                        <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-white overflow-hidden" >
                            <Image src={princewill} alt="client"/>
                        </div>
                        <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-white overflow-hidden" >
                            <Image src={onifade} alt="client"/>
                        </div>
                    </div>
                    <span className="text-sm text-[#121212] font-normal whitespace-nowrap">Trusted by 30+ clients</span>
                </div>
            </section>

            
        </div>
    )
}

export default Hero