import HeroText from '@/components/HeroText'
import React from 'react'
import ImageCards from './ImageCards'

const Hero = () => {
    return (
        <div>
            <section className='relative mt-24 mx-auto px-4'>
                <HeroText title='Driven by Design, Powered by Code'
                    description='Icoweb creates digital products that merge creativity , and technology delivering solutions that work flawlessly.'
                />
            </section>
            <section>
                <ImageCards />
            </section>
        </div>
    )
}

export default Hero