"use client"
import React from 'react'
import { cards } from '@/components/constant'

const Cards = () => {
    return (
        <div>
            <section className='md:max-w-[95%] lg:max-w-[90%] mx-auto relative top-[70px] min-h-[50vh] md:min-h-[60vh] lg:h-[80vh]'>
                <div className='mx-auto md:mt-14'>
                    {/* Desktop Grid */}
                    <div className='hidden lg:flex lg:items-center lg:justify-around gap-6 xl:gap-10 px-4'>
                        {cards.map((card, index) => (
                            <div key={index} className="relative flex-shrink-0">
                                {/* Border Frame */}
                                <div
                                    className="absolute -inset-6 lg:-inset-7 rounded-3xl"
                                    style={{ backgroundColor: card.color }}
                                />
                                {/* Card Content */}
                                <div className='relative bg-white h-[450px] w-[360px] lg:h-[500px] lg:w-[400px] xl:h-[450px] 3xl:h-[570px] xl:w-[320px] 3xl:w-[430px] rounded-2xl p-6 shadow-lg'>
                                    {/* Add your card content here */}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tablet Horizontal Scroll */}
                    <div className='hidden md:flex lg:hidden items-center gap-20 overflow-x-auto py-6 px-4 scrollbar-hide snap-x snap-mandatory'>
                        {cards.map((card, index) => (
                            <div key={index} className="relative flex-shrink-0 snap-center">
                                {/* Border Frame */}
                                <div
                                    className="absolute -inset-5 rounded-3xl"
                                    style={{ backgroundColor: card.color }}
                                />
                                {/* Card Content */}
                                <div className='relative bg-white h-[420px] w-[290px] rounded-2xl p-6 shadow-lg'>
                                    {/* Add your card content here */}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Horizontal Scroll */}
                    <div className='md:hidden flex items-center gap-16 sm:gap-10 overflow-x-auto py-6 px-4 scrollbar-hide snap-x snap-mandatory'>
                        {cards.map((card, index) => (
                            <div key={index} className="relative flex-shrink-0 snap-center">
                                {/* Border Frame */}
                                <div
                                    className="absolute -inset-4 rounded-3xl"
                                    style={{ backgroundColor: card.color }}
                                />
                                {/* Card Content */}
                                <div className='relative bg-white h-[360px] w-[280px] sm:h-[387.08px] sm:w-[308.48px] rounded-2xl p-5 sm:p-6 shadow-lg'>
                                    {/* Add your card content here */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
                            .scrollbar-hide::-webkit-scrollbar {
                                display: none;
                            }
                            .scrollbar-hide {
                                -ms-overflow-style: none;
                                scrollbar-width: none;
                            }
                        `}</style>
            </section>
        </div>
    )
}

export default Cards