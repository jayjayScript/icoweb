import React from 'react'
import Hero from './Hero'
import Cards from './Cards'
import Services from './Services'
import WhyUs from './WhyUs'
import CaseStudies from './CaseStudies'
import Testomonials from './Testomonials'
import Faq from './Faq'
import ConnectionCard from './ConnectionCard'

const Home = () => {
  return (
    <div className='bg-white'>
      {/* Grid Background */}
      <div
        className="absolute inset-0 -top-20 left-0 h-screen"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E5E7EB6E 1.5px, transparent 1px),
            linear-gradient(to bottom, #E5E7EB6E 1.5px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          WebkitMaskImage: `
      radial-gradient(circle at top left, transparent 0%, transparent 5%, black 26%),
      radial-gradient(circle at bottom left, transparent 0%, transparent 5%, black 26%)
    `,
          WebkitMaskComposite: 'source-in',
          maskComposite: 'intersect',
        }}
      />

      {/* Content */}
      <Hero />
      <Cards />
      <Services />
      <WhyUs />
      <CaseStudies />
      <Testomonials />
      <Faq />
      <ConnectionCard />
    </div>
  )
}

export default Home