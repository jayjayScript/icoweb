import ResponsiveHeader from '@/components/ResponsiveHeader'
import React from 'react'
import { theTeam } from '@/components/constant'
import Image from 'next/image'
import ConnectionCard from '@/app/home/components/ConnectionCard'

const TheTeam = () => {
    return (
        <div>
            <section className='md:max-w-[90%] mx-auto px-4 py-6 mt-16 md:mt-24'>
                <ResponsiveHeader
                    showLine={false}
                    headText='Meet The Team'
                    description='Our diverse team blends experienced professionals with fresh talent, creating the perfect balance of proven expertise and innovative thinking. From seasoned developers to promising interns who represent the future of Nigerian tech, every ICOWEB team member brings unique skills and perspectives to your project.'
                />

                <div className='mt-18'>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center">
                        {theTeam.map((member, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl overflow-hidden transition-all duration-300 lg:w-full md:h-[740px]"
                            >
                                {/* IMAGE */}
                                <div className="w-full h-[515px] md:h-[500px] lg:h-[515px] relative">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                                {/* CONTENT */}
                                <div className="py-3">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="text-base font-semibold text-[#121212]">
                                                {member.name}
                                            </h3>
                                            <p className="text-sm font-medium text-[#12121299]">
                                                {member.role}
                                            </p>
                                        </div>

                                        {member.intern && (
                                            <span className="px-2 py-0.5 text-[10px] font-semibold text-white bg-[#544BC2] rounded-full whitespace-nowrap shadow-sm">
                                                {member.intern}
                                            </span>
                                        )}
                                    </div>


                                    {/* SOCIALS */}
                                    <div className="flex items-center gap-4 mt-3 text-sm text-[#12121299] font-medium">
                                        {member.bio}
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