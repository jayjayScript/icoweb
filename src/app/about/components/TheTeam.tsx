import ResponsiveHeader from '@/components/ResponsiveHeader'
import React from 'react'
import { theTeam } from '@/components/constant'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify.js'
import Link from 'next/link'
import ConnectionCard from '@/app/home/components/ConnectionCard'

const TheTeam = () => {
    return (
        <div>
            <section className='md:max-w-[90%] mx-auto px-4 py-6 mt-16 md:mt-24'>
                <ResponsiveHeader
                    showLine={false}
                    headText='Meet The Team'
                    description='The minds behind our work — a team of designers, developers, and strategists dedicated to building exceptional digital experiences.'
                />

                <div className='mt-18'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {theTeam.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden transition-all duration-300"
                            >
                                {/* IMAGE */}
                                <div className="w-[411px] h-[515px] relative">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="pr-5 py-3 flex justify-between items-end">
                                    <div>
                                        <h3 className="font-semibold text-[#121212] text-base">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm text-[#12121299] font-medium">{member.role}</p>
                                    </div>

                                    {/* SOCIALS */}
                                    <div className="flex items-center gap-4 mt-3">
                                        {member.socials.map((icon, i) => (
                                            <Link
                                                key={i}
                                                href="#"
                                                className="text-[#12121299] hover:text-[#544BC2] transition"
                                            >
                                                <Icon icon={icon} width={18} />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='-mt-12 md:-mt-0'>
                <ConnectionCard />
            </section>
            
        </div>
    )
}

export default TheTeam