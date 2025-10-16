import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import HowWeWork from './components/HowWeWork'
import TheTeam from './components/TheTeam'

const page = () => {
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
        }}/>
        <Hero />
        <About />
        <HowWeWork />
        <TheTeam />
    </div>
  )
}

export default page