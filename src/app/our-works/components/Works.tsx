import ResponsiveHeader from '@/components/ResponsiveHeader'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cards } from '@/components/constant'

const Works = () => {
    
  return (
    <div>
        <section className='md:max-w-[90%] mx-auto px-4 py-6 mt-24'>
            
            <ResponsiveHeader 
            headText='Our selected works'
            showLine={false}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-14 gap-x-0 mt-10">
                        {Cards.map((card, index) => (
                          <div key={index} className="relative flex-shrink-0 flex-grow-0 min-w-0 w-[343px] md:w-[625px] h-[531px] md:h-[559px]">
                            <Image
                              src={card.bgImage}
                              alt={card.title}
                              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-3xl" />
            
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-2xl shadow-xl p-4 z-10">
                              <div className="flex justify-between items-center mb-3">
                                <h3 className="text-base font-semibold text-[#121212]">
                                  {card.title}
                                </h3>
                                <Link href={`/our-works/${card.slug}`} className="flex items-center gap-1.5 font-medium text-xs text-[#121212] no-underline hover:text-purple-600 transition-colors">
                                  View case study
                                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                  </svg>
                                </Link>
                              </div>
            
                              <p className="text-[14px] leading-relaxed text-[#707070] font-meduim mb-5">
                                {card.description}
                              </p>
            
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ">
                                {card.tags.map((tag, i) => (
                                  <span key={i} className="inline-flex px-3.5 py-1.5 border border-neutral-200 rounded-full text-xs text-neutral-600 bg-white whitespace-nowrap">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
        </section>
    </div>
  )
}

export default Works