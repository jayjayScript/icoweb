"use client"
import Image from 'next/image'
import React from 'react'
import { motion, Variants } from 'framer-motion'
import cardImg from '@/assets/image.png'
import desktopCard from '@/assets/desktop-img.png'
import Link from 'next/link'

const ConnectionCard = () => {
    // Animation variants
    const containerVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    }

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    }

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.4
            }
        }
    }

    const buttonVariants: Variants = {
        hover: {
            scale: 1.05,
            y: -2,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        tap: { scale: 0.95 }
    }

    const gridVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.2,
                ease: "easeOut"
            }
        }
    }

    return (
        <div>
            <div className='relative md:max-w-[85%] mx-auto mt-26'>
                {/* Grid Background with Image Container */}
                <motion.div
                    className="relative w-[343px] md:w-full mx-auto bg-[#F7F7F7] rounded-[24px] overflow-hidden"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={containerVariants}
                >
                    {/* Grid Gradient Background */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none"
                        variants={gridVariants}
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

                    <motion.div 
                        className='relative z-50 top-8 md:top-18 px-8 py-6'
                        variants={itemVariants}
                    >
                        <motion.h3 
                            className='text-[22px] md:text-[36px] font-semibold leading-[33px] text-[#121212] text-center'
                            variants={itemVariants}
                        >
                            Let&apos;s Build Something Great Together
                        </motion.h3>
                        
                        <motion.p 
                            className='text-[#707070] text-[14px] md:text-[16px] font-medium text-center my-2 md:my-6 lg:w-[40%] mx-auto'
                            variants={itemVariants}
                        >
                            From websites to apps, our team is ready to turn your ideas into high-performing digital products.
                        </motion.p>
                        
                        <motion.div
                            variants={itemVariants}
                        >
                            <Link href="/contact" className='flex justify-center mt-6'>
                                <motion.button 
                                    className="bg-white hover:bg-[#544BC2] hover:text-[#FFF] transition duration-300 ease-in-out text-[#544BC2] px-6 py-3 rounded-full font-medium border border-[#9991FF] hover:border-gray-400 shadow-inner shadow-[#9A98B033] hover:shadow-[#9991FF] cursor-pointer"
                                    variants={buttonVariants}
                                    whileHover="hover"
                                    whileTap="tap"
                                >
                                    Work with us
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Purple Wave Image */}
                    <motion.div 
                        className='relative'
                        variants={imageVariants}
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.8, 
                                ease: [0.22, 1, 0.36, 1],
                                delay: 0.5
                            }}
                        >
                            <Image src={cardImg} alt='image' className='w-full md:hidden' />
                            <Image src={desktopCard} alt='image' className='w-full hidden md:block' />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default ConnectionCard