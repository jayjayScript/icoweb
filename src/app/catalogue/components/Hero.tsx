import React from 'react'
import HeroText from '@/components/HeroText'


const Hero = () => {
  return (
    <div>
        <div className='relative mt-24'>
             <HeroText title='Our Service Catalog'
             description='We provide the services best suited for your budget and business'
             />
        </div>
    </div>
  )
}

export default Hero