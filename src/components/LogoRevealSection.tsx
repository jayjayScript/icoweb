'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import logo from '@/assets/icoweb logo_/ICOWEB Logo 3.png'

const LogoRevealSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const container = containerRef.current
      const scrollHeight = container.scrollHeight - window.innerHeight
      const scrolled = window.scrollY - container.offsetTop
      const progress = Math.max(0, Math.min(1, scrolled / scrollHeight))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Logo fades out early
  const logoFadeStart = 0.1
  const logoFadeEnd = 0.3
  const logoFadeProgress = Math.min(
    Math.max((scrollProgress - logoFadeStart) / (logoFadeEnd - logoFadeStart), 0),
    1
  )

  // Video reveal happens throughout the scroll
  const videoRevealOpacity = scrollProgress
  
  // Scale multiplier - adjust this to control how large the logo gets
  // Higher number = logo expands more to fill screen
  const maxScale = 25 // This will make it fill the screen
  const logoScale = 1 + scrollProgress * maxScale

  const boxOpacity = 1 - logoFadeProgress

  return (
    <div ref={containerRef} className="relative" style={{ height: '400vh' }}>
      <div className="sticky top-0 h-screen w-full bg-white flex items-center justify-center overflow-hidden">
      
        {/* --- MASKED VIDEO (only visible in logo shape, expands to fill screen) --- */}
        <div
          className="absolute"
          style={{
            width: `${logoScale * 200}px`,
            height: `${logoScale * 200}px`,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: videoRevealOpacity,
            maskImage: 'url("/ArEMcG01.svg")',
            WebkitMaskImage: 'url("/ArEMcG01.svg")',
            maskRepeat: 'no-repeat',
            WebkitMaskRepeat: 'no-repeat',
            maskPosition: 'center',
            WebkitMaskPosition: 'center',
            maskSize: 'contain',
            WebkitMaskSize: 'contain',
          }}
        >
          <video
            className="absolute object-cover"
            style={{
              width: '100vw',
              height: '100vh',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      
        {/* --- PNG LOGO (on top, fades out early) --- */}
        <div
          className="relative flex items-center justify-center z-10"
          style={{
            width: 200,
            height: 200,
            transform: `scale(${logoScale})`,
            opacity: boxOpacity,
            transition: 'opacity 0.3s ease-in-out',
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-white border-2 border-[#544BC2]">
            <Image
              src={logo}
              alt="Icoweb Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoRevealSection