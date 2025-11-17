"use client"
import React from 'react'
import textbg from '@/assets/textbg.png'
import Image from 'next/image'
import chineme from '@/assets/testimonials/Okpala chineme.jpg'
import onifade from '@/assets/testimonials/Temidayo Onifade.jpg'
import sonia from '@/assets/testimonials/sonia kajotoni.jpg'
import princewill from '@/assets/testimonials/princewill.jpg'
import Link from 'next/link'

import { motion } from 'framer-motion'

const Hero = () => {
    return (
        <div>
            <section className="relative top-14 p-6 px-4 sm:px-6">
                {/* Availability Badge – subtle pop-in */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex items-center justify-center gap-2 mb-3"
                >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm text-gray-600">Available for work</span>
                </motion.div>

                {/* Main Headline – powerful letter-by-letter reveal on the highlighted part */}
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] font-semibold text-center leading-[140%] md:w-[80%] lg:w-[67%] mx-auto px-2"
                >
                    We Create Digital Experiences <br className='hidden lg:flex'/>That{" "}
                    <span className="relative inline-block">
                        <Image
                            src={textbg}
                            alt="text bg"
                            fill
                            className="object-contain scale-105"
                        />
                        <span className="relative z-10 text-white px-1">
                            {/* Animated "Drive Results" */}
                            {"Drive Results".split("").map((char, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, y: 60 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 0.8 + i * 0.05,
                                        ease: [0.2, 0.65, 0.3, 0.9],
                                    }}
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </span>
                    </span>
                </motion.h1>

                {/* Paragraph – smooth slide-up */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, delay: 1.4, ease: "easeOut" }}
                    className="text-[#707070] text-center max-w-2xl mx-auto mb-8 text-base md:text-[18px] lg:text-[20px] leading-[28px] my-[16px] font-medium px-4"
                >
                    Icoweb builds high-performing websites, apps, and platforms
                    tailored to your vision designed to engage, built to last.
                </motion.p>

                {/* Buttons – scale in with stagger */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 w-full sm:w-auto md:w-[90%] lg:w-[60%] xl:w-[37%] mx-auto px-4"
                >
                    <Link href="/contact" className='w-full sm:flex-1 sm:min-w-[160px]'>
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.7, duration: 0.6 }}
                            whileHover={{ y: -4, boxShadow: "0 20px 30px rgba(84, 75, 194, 0.25)" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:flex-1 sm:min-w-[160px] bg-[#544BC2] text-white px-6 py-3 rounded-full font-medium transition-colors shadow-inner shadow-[#ABA5FCFF] cursor-pointer"
                        >
                            Start Your Project
                        </motion.button>
                    </Link>

                    <Link href='/our-works' className='w-full sm:flex-1 sm:min-w-[160px]'>
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.85, duration: 0.6 }}
                            whileHover={{ y: -4, boxShadow: "0 20px 30px rgba(84, 75, 194, 0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:flex-1 sm:min-w-[160px] bg-white text-[#544BC2] hover:text-[#fff] hover:bg-[#544bc2] px-6 py-3 rounded-full font-medium border border-[#9991FF] hover:border-gray-400 transition-colors shadow-inner shadow-[#9A98B081] hover:shadow-[#ABA5FCFF] cursor-pointer"
                        >
                            See Our Work
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Client avatars – elegant staggered reveal from left */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.1, duration: 0.8 }}
                    className="flex items-center justify-between gap-3 bg-white backdrop-blur-sm px-[14px] py-[6px] rounded-full border border-[#9991FF] shadow-[rgba(85,75,194,0.31)] shadow-[0_0_15px_#544BC215,0_4px_20px_#544BC220] w-full max-w-[291px] h-[42px] mx-auto"
                >
                    <div className="flex -space-x-2">
                        {[
                            { src: sonia, delay: 2.2 },
                            { src: chineme, delay: 2.3 },
                            { src: princewill, delay: 2.4 },
                            { src: onifade, delay: 2.5 },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -40, scale: 0 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                transition={{
                                    duration: 0.7,
                                    delay: item.delay,
                                    ease: [0.5, 0, 0.3, 1],
                                }}
                                className="w-[30px] h-[30px] rounded-full border-2 border-white overflow-hidden"
                                style={{
                                    background: [
                                        'linear-gradient(to bottom right, #c084fc, #ec4899)',
                                        'linear-gradient(to bottom right, #60a5fa, #06b6d4)',
                                        'linear-gradient(to bottom right, #4ade80, #10b981)',
                                        'linear-gradient(to bottom right, #fb923c, #ef4444)',
                                    ][i],
                                }}
                            >
                                <Image src={item.src} alt="client" />
                            </motion.div>
                        ))}
                    </div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.7 }}
                        className="text-sm text-[#121212] font-normal whitespace-nowrap"
                    >
                        Trusted by 30+ clients
                    </motion.span>
                </motion.div>
            </section>
        </div>
    )
}

export default Hero