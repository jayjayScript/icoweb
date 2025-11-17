import React from 'react'
import FullCatalog from './components/Catalogue'
import Hero from './components/Hero'


const page = () => {
  return (
    <div>
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
        <Hero />
        <FullCatalog />
    </div>
  )
}

export default page