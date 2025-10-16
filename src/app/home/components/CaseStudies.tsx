import ResponsiveHeader from '@/components/ResponsiveHeader'
import React from 'react'
import PortfolioCarousel from './PortfolioCarousel'

const CaseStudies = () => {
    return (
        <div>
            <section className='bg-[#544BC2]'>
                <div className='px-4 py-24 md:max-w-[90%] mx-auto mt-4'>
                    <ResponsiveHeader
                        title='Case Studies'
                        headText='Our Work Speaks for Itself'
                        description='From sleek websites to powerful apps, here are some of the digital experiences we’ve crafted for our clients.'
                        // className="p-6 bg-gray-50 rounded-lg"
                        titleClassName="text-[#FFFFFFCC]"
                        headTextClassName="text-[#FCFCFC]"
                        descriptionClassName="text-[#FBFBFB]"
                        lineClassName="bg-[#FFFFFFCC]"
                    />

                </div>
                <PortfolioCarousel />
            </section>
        </div>
    )
}

export default CaseStudies