import React from 'react'
import ServiceAccordion from './ServiceAccordion'
import { serviceData } from '@/components/constant'
import ResponsiveHeader from '@/components/ResponsiveHeader'

const Services = () => {
    return (
        <div>
            <section className='px-4 py-6 md:max-w-[90%] mx-auto mt-[2rem] md:mt-[4rem]'>
                <ResponsiveHeader title='Our Services' 
                headText='Explore Our Core Services'
                description='We design and develop websites, mobile apps, and platforms that are as visually stunning as they are functional  helping your brand connect, engage, and grow.'
                />

                <ServiceAccordion serviceData={serviceData}/>
            </section>
        </div>
    )
}

export default Services