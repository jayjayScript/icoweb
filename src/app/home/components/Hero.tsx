import React from 'react'
import textbg from '@/assets/textbg.png'
import Image from 'next/image'

const Hero = () => {
    return (
        <div>
            <section className="relative top-14 p-6">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-600">Available for work</span>
                </div>

                
                <h1 className="text-[32px] md:text-[64px] font-semibold text-center leading-[140%] md:w-[67%] mx-auto">
                    We Create Digital
                    Experiences That{" "}
                    <span className="relative">
                        <Image
                            src={textbg}
                            // width={231}
                            // height={46}
                            alt="text bg"
                            fill
                            className="object-contain scale-105 "
                        />
                        <span className="relative left-0 z-10 text-white">Drive Results</span>
                    </span>
                </h1>

                <p className="text-[#707070] text-center max-w-2xl mx-auto mb-8 text-base md:text-[20px] leading-[28px] my-[16px] font-medium">
                    Icoweb builds high-performing websites, apps, and platforms
                    tailored to your vision designed to engage, built to last.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 md:w-[27%] mx-auto">
                    <button className="flex-1 bg-[#544BC2] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5558E3] transition-colors shadow-inner shadow-[#9991FF] cursor-pointer w-full">
                        Start Your Project
                    </button>
                    <button className="flex-1 bg-white text-[#544BC2] hover:text-[#fff] hover:bg-[#544bc2] px-6 py-3 rounded-full font-medium border border-[#9991FF] hover:border-gray-400 transition-colors shadow-inner shadow-[#9A98B033] hover:shadow-[#9991FF] cursor-pointer w-full">
                        See Our Work
                    </button>
                </div>

                <div className="flex items-center justify-between gap-3 bg-white backdrop-blur-sm px-[14px] py-[6px] rounded-full border border-[#9991FF] shadow-[#544BC224] shadow-[0_0_15px_#544BC215,0_4px_20px_#544BC220] w-[291px] h-[42px] mx-auto">
                    <div className="flex -space-x-2">
                        <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-white" />
                        <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 border-2 border-white" />
                        <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-green-400 to-emerald-400 border-2 border-white" />
                        <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-white" />
                    </div>
                    <span className="text-sm text-[#121212] font-normal">Trusted by 30+ clients</span>
                </div>
            </section>

            
        </div>
    )
}

export default Hero