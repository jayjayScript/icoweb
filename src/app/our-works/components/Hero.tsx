import React from 'react'
import HeroText from '@/components/HeroText'
import Cards from './Cards';
const Hero = () => {
    return (
        <div>
            <section className='relative mt-24 mx-auto px-4'>
                <HeroText title='Our Work Speaks for Itself'
                    description='From websites to apps, here’s a look at some of the projects we’ve delivered across industries.'
                    showStatus={true}
                />
            </section>
            <Cards />
        </div>
    )
}

export default Hero