"use client"
// import ResponsiveHeader from '@/components/ResponsiveHeader'
import React from 'react'
// import PortfolioCarousel from '@/app/home/components/PortfolioCarousel'
import { Cards } from '@/components/constant'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Works = () => {
  const router = useRouter()
  return (
    <div>
      <section className='mt-24 relative'>
        <div className="max-w-full sm:max-w-[95%] md:max-w-[90%] mx-auto px-4 sm:px-6 md:px-4 py-6 pt-8 mt-16 sm:mt-20 md:mt-24">
          <div className=''>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8'>
              {
                Cards.map((card, index) => (
                  <div key={index} className="relative flex-shrink-0 flex-grow-0 min-w-0 w-full h-[480px] sm:h-[531px] md:h-[545px] lg:h-[559px] cursor-pointer shadow-[rgba(0,0,0,0.07)] shadow-[0_0_15px_#544BC215,0_4px_20px_#544BC220] rounded-2xl sm:rounded-3xl overflow-hidden"
                    onClick={() => router.push(`/our-works/${card.slug}`)}
                  >
                    <Image
                      src={card.bgImage}
                      alt={card.title}
                      className={`absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl ${index === 4 ? "md:object-scale-down md:scale-x-100" : ""}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent rounded-2xl sm:rounded-3xl" />

                    <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 z-10">
                      <div className="flex justify-between items-start sm:items-center mb-2 sm:mb-3 gap-2">
                        <h3 className="text-sm sm:text-base font-semibold text-[#121212] leading-tight">
                          {card.title}
                        </h3>
                        <Link href={`/our-works/${card.slug}`} className="flex items-center gap-1 sm:gap-1.5 font-medium text-[11px] sm:text-xs text-[#121212] no-underline hover:text-purple-600 transition-colors whitespace-nowrap flex-shrink-0">
                          <span className="hidden sm:inline">View case study</span>
                          <span className="sm:hidden">View</span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-[14px] sm:h-[14px]">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </Link>
                      </div>

                      <p className="text-[13px] sm:text-[14px] leading-relaxed text-[#707070] font-medium mb-3 sm:mb-5 line-clamp-3 sm:line-clamp-none">
                        {card.description}
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-2">
                        {card.tags.map((tag, i) => (
                          <span key={i} className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 border border-neutral-200 rounded-full text-[11px] sm:text-xs text-neutral-600 bg-white whitespace-nowrap text-center">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>



      </section>
    </div>
  )
}

export default Works
