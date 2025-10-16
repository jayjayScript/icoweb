import HeroText from '@/components/HeroText'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative mt-24'>
        <HeroText 
            title='Let’s Build Something Great Together'
            description='Tell us about your project, and we’ll get back to you with ideas, timelines, and next steps.'
            showStatus={true}
            showButtons={false}
        />
    </div>
  )
}

export default Hero