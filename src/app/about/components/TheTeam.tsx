"use client"
import ResponsiveHeader from '@/components/ResponsiveHeader'
import React from 'react'
import { theTeam } from '@/components/constant'
import Image from 'next/image'
import ConnectionCard from '@/app/home/components/ConnectionCard'

import { motion } from 'framer-motion'

const TheTeam = () => {
    return (
        <div>
            <section className='md:max-w-[90%] mx-auto px-4 py-6 mt-16 md:mt-24'>
                {/* Header – elegant fade-up */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                >
                    <ResponsiveHeader
                        showLine={false}
                        headText='Meet The Team'
                        description='Our diverse team blends experienced professionals with fresh talent, creating the perfect balance of proven expertise and innovative thinking. From seasoned developers to promising interns who represent the future of Nigerian tech, every ICOWEB team member brings unique skills and perspectives to your project.'
                    />
                </motion.div>

                <div className='mt-18'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
                        {theTeam.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-120px" }}
                                transition={{
                                    duration: 0.9,
                                    delay: index * 0.15, // Perfect staggered reveal
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                whileHover={{ 
                                    y: -16,
                                    transition: { duration: 0.4, ease: "easeOut" }
                                }}
                                className="bg-white rounded-xl overflow-hidden transition-all duration-300 lg:w-full md:h-[740px] cursor-default will-change-transform"
                            >
                                {/* IMAGE – subtle scale-in + parallax feel */}
                                <motion.div 
                                    className="w-full h-[515px] md:h-[500px] lg:h-[515px] relative overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.7 }}
                                >
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover w-full h-full transition-transform duration-700"
                                    />
                                </motion.div>

                                {/* CONTENT */}
                                <div className="py-3 px-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <motion.h3 
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.4 + index * 0.1 }}
                                                className="text-base font-semibold text-[#121212]"
                                            >
                                                {member.name}
                                            </motion.h3>
                                            <motion.p 
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.5 + index * 0.1 }}
                                                className="text-sm font-medium text-[#12121299]"
                                            >
                                                {member.role}
                                            </motion.p>
                                        </div>

                                        {member.intern && (
                                            <motion.span
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{ 
                                                    delay: 0.7 + index * 0.1,
                                                    type: "spring",
                                                    stiffness: 300
                                                }}
                                                className="px-2 py-0.5 text-[10px] font-semibold text-white bg-[#544BC2] rounded-full whitespace-nowrap shadow-sm"
                                            >
                                                {member.intern}
                                            </motion.span>
                                        )}
                                    </div>

                                    {/* BIO */}
                                    <motion.div 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        className="flex items-center gap-4 mt-3 text-sm text-[#12121299] font-medium"
                                    >
                                        {member.bio}
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ConnectionCard – smooth entrance from below */}
            <motion.section
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className='-mt-12 md:-mt-0'
            >
                <ConnectionCard />
            </motion.section>
        </div>
    )
}

export default TheTeam