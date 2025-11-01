import ResponsiveHeader from '@/components/ResponsiveHeader'
import { features } from '@/components/constant'
import { Icon } from '@iconify/react'
import React from 'react'

const WhyUs = () => {
    return (
        <div>
            <section className='px-4 py-6 md:max-w-[90%] -mt-3 sm:-mt-0 mx-auto'>
                <ResponsiveHeader
                    title='Why Us'
                    headText='Why WorkWith Icoweb'
                    description='From concept to launch, we combine creativity, technical skill, and a user-first approach to deliver digital products that make an impact.'
                />

                <div className='my-12'>
                    <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-4'>
                        {features.map((feature, index) => (
                            <div key={index} className='col-span-2 bg-[#F7F7F7] rounded-[16px] py-[20px] px-4 text-left border-[0.8px] border-[#E9E9E9]'>
                                <div className='h-[40px] w-[40px] rounded-full bg-[#544BC2] mb-2 flex items-center'>
                                    <Icon icon={feature.icon} className='text-[#F7F7F7] mx-auto' height={22} width={22} />
                                </div>

                                <h3 className='font-medium md:font-semibold text-[18px] md:text-[20px] leading-[27px] my-3'>{feature.title}</h3>
                                <p className='text-[14px] text-[#707070] md:text-base md:max-w-[390px] font-normal md:font-medium leading-[21px] md:leading-[26px]'>
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default WhyUs