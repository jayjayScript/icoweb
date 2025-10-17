import ResponsiveHeader from '@/components/ResponsiveHeader'
import React from 'react'
import curvyLine from '@/assets/about/Vector 4.png';
import Image from 'next/image';
import { processSteps } from '@/components/constant';
import { Icon } from '@iconify/react';

const HowWeWork = () => {
    return (
        <div className='bg-[#544BC2] relative overflow-hidden mt-24'>
            <Image src={curvyLine} className='scale-220 absolute left-0 top-22 object-fit' alt='curvy line' />
            <section className='md:max-w-[90%] mx-auto px-4 py-6 '>
                <ResponsiveHeader
                    showLine={false}
                    headText='How We Work'
                    description='From first conversation to final launch, our process is clear, collaborative, and built for results.'
                    headTextClassName="text-[#FFF] -mt-2"
                    descriptionClassName="text-[#FFFFFFE5]"
                />

                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 md:mt-30 mb-20">
                    {processSteps.map((step) => (
                        <div
                            key={step.title}
                            className="bg-white rounded-2xl p-6 flex flex-col transition-all"
                        >
                            <div className="bg-[#544BC2] w-10 h-10 rounded-full flex items-center justify-center mb-4">
                                <Icon icon={step.icon} width={20} className="text-white" />
                            </div>
                            <h3 className="font-semibold text-lg mb-2 text-gray-900">
                                {step.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <Image src={curvyLine} className='scale-220 absolute right-2 -bottom-8 object-fit rotate-160' alt='curvy line' />
        </div>
    )
}

export default HowWeWork