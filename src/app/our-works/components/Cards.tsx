"use client"
import React from 'react'
import { cards } from '@/components/constant'

const Cards = () => {
    return (
        <div>
            <section className='relative top-[70px] min-h-[50vh] md:h-[80vh]'>
                <div className='mx-auto md:mt-14'>
                    {/* Desktop Grid */}
                    <div className='hidden md:flex md:items-center md:justify-around gap-6'>
                        {cards.map((card, index) => (
                            <div key={index} className="relative">
                                {/* Border Frame */}
                                <div
                                    className="absolute -inset-7 rounded-3xl"
                                    style={{ backgroundColor: card.color }}
                                />
                                {/* Card Content */}
                                <div className='relative bg-white h-[527px] w-[420px] rounded-2xl p-6 shadow-lg mx-auto'>
                                    {/* Add your card content here */}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Horizontal Scroll */}
                    <div className='md:hidden flex items-center gap-12 overflow-x-auto py-6 px-4 scrollbar-hide'>
                        {cards.map((card, index) => (
                            <div key={index} className="relative">
                                {/* Border Frame */}
                                <div
                                    className="absolute -inset-4 rounded-3xl"
                                    style={{ backgroundColor: card.color }}
                                />
                                {/* Card Content */}
                                <div className='relative bg-white h-[387.08px] w-[308.48px] rounded-2xl p-6 shadow-lg'>
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