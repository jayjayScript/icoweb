"use client"
import ResponsiveHeader from '@/components/ResponsiveHeader'
import React from 'react'
import curvyLine from '@/assets/about/Vector 4.png';
import Image from 'next/image';
import { processSteps } from '@/components/constant';
import { Icon } from '@iconify/react';

// ← Add this
import { motion } from 'framer-motion';

const HowWeWork = () => {
    return (
        <div className='bg-[#544BC2] relative overflow-hidden mt-24'>
            {/* Top Curvy Line – slides in from left */}
            <motion.div
                initial={{ x: -400, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
                <Image src={curvyLine} className='scale-220 absolute left-0 top-22 object-fit' alt='curvy line' />
            </motion.div>

            <section className='md:max-w-[90%] mx-auto px-4 py-6'>
                {/* Header with premium staggered text reveal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    <ResponsiveHeader
                        showLine={false}
                        headText='How We Work'
                        description='From first conversation to final launch, our process is clear, collaborative, and built for results.'
                        headTextClassName="text-[#FFF] -mt-2"
                        descriptionClassName="text-[#FFFFFFE5]"
                    />
                </motion.div>

                {/* Process Cards – staggered, bouncy, elegant entrance */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 md:mt-30 mb-20">
                    {processSteps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 80, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15, // Perfect stagger
                                ease: [0.2, 0.8, 0.2, 1],
                            }}
                            
                            className="bg-white rounded-2xl p-6 flex flex-col transition-all cursor-default"
                        >
                            {/* Icon Circle – pops in with rotation */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.15, type: "spring", stiffness: 200 }}
                                className="bg-[#544BC2] w-10 h-10 rounded-full flex items-center justify-center mb-4"
                            >
                                <Icon icon={step.icon} width={20} className="text-white" />
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 + index * 0.15 }}
                                className="font-semibold text-lg mb-2 text-gray-900"
                            >
                                {step.title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 + index * 0.15, duration: 0.7 }}
                                className="text-sm text-gray-600 leading-relaxed"
                            >
                                {step.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Bottom Curvy Line – sweeps in from right */}
            <motion.div
                initial={{ x: 400, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.4, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <Image src={curvyLine} className='scale-220 absolute right-2 -bottom-8 object-fit rotate-160' alt='curvy line' />
            </motion.div>
        </div>
    )
}

export default HowWeWork