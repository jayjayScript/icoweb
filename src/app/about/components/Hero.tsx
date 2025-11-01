import HeroText from '@/components/HeroText'
import React from 'react'

const Hero = () => {
    return (
        <div>
            <section className='relative mt-24 mx-auto px-4'>
                <HeroText title='Driven by Design, Powered by Code'
                    description='Icoweb creates digital products that merge creativity , and technology delivering solutions that work flawlessly.'
                />
            </section>
        </div>
    )
}

export default Hero