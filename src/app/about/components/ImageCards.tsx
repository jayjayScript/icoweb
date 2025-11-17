import Image from 'next/image'
import React from 'react'
import first from "@/assets/about/image.png"
import second from "@/assets/about/image2.png"
import third from "@/assets/about/image3.png"
import fourth from "@/assets/about/image4.png"

import { motion } from 'framer-motion'

const ImageCards = () => {
  return (
    <div>
        <section className='mx-auto p-4 relative mt-5 md:mt-16'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-4 w-full'>

                {/* Left tall image – slides up + fades */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image 
                        src={first} 
                        width={354} 
                        height={454} 
                        className='md:h-[454px]' 
                        alt='image'
                    />
                </motion.div>

                {/* Center column – staggered upward reveal with slight delay */}
                <motion.div 
                    className='flex flex-col gap-4'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.2 }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Image 
                            src={second} 
                            width={343} 
                            height={294.77} 
                            className='md:w-[545.2px] md:h-[294.78px]' 
                            alt='image'
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Image 
                            src={third} 
                            width={343} 
                            height={232.53} 
                            className='md:w-[553.07px] h-[232.53px]' 
                            alt='image'
                        />
                    </motion.div>
                </motion.div>

                {/* Right tall image – slides up from below with slight delay for balance */}
                <motion.div
                    initial={{ opacity: 0, y: 120 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-150px" }}
                    transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                    <Image 
                        src={fourth} 
                        width={354} 
                        height={454} 
                        className='md:h-[454px]' 
                        alt='image'
                    />
                </motion.div>

            </div>
        </section>
    </div>
  )
}

export default ImageCards