"use client"

import ResponsiveHeader from '@/components/ResponsiveHeader'
// import React, { useCallback, useEffect, useRef } from 'react'
import { testimonials } from '@/components/constant'
import { Icon } from '@iconify/react/dist/iconify.js'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'

const Testomonials = () => {
  const [emblaRef] = useEmblaCarousel({
    // loop: true,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps', // 👈 ensures visible start & end padding
  })


  return (
    <section className="px-2 py-6 md:max-w-[90%] mx-auto mt-[4rem] md:mt-[8rem]">
      <div className='px-2'>
        <ResponsiveHeader
        title="Testimonials"
        headText="What our clients have to say"
        description="We’ve worked with startups, agencies, and growing brands to design and develop digital products that deliver real results. Here’s what they have to say."
      />
      </div>

      {/* ✅ Mobile Carousel */}
      <div className="block md:hidden my-10">
        {/* Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          {/* Container */}
          <div className="flex gap-4 pl-4 pr-8"> {/* 👈 padding ensures visible space */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] bg-[#F7F7F7] rounded-[16px] p-[10px] text-left border-[0.8px] border-[#E9E9E9]"
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3 w-full">
                    <Image
                      src={testimonial.image}
                      width={54}
                      height={54}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="w-full">
                      <div className="flex justify-between w-full">
                        <h3 className="text-base md:text-lg font-semibold text-[#121212]">
                          {testimonial.name}
                        </h3>
                        <div className="flex gap-0.5">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Icon
                              key={i}
                              icon="tdesign:star-filled"
                              width="20"
                              height="20"
                              className="text-[#FFA304]"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm md:text-[15px] text-[#707070] font-medium leading-[100%]">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <p className="text-sm md:text-[15px] text-[#707070] font-medium leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ✅ Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-14">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#F7F7F7] rounded-[16px] p-[32px] text-left border border-[#E9E9E9]"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3 w-full">
                <Image
                  src={testimonial.image}
                  width={54}
                  height={54}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="w-full">
                  <div className="flex justify-between w-full">
                    <h3 className="text-base md:text-lg font-semibold text-[#121212]">
                      {testimonial.name}
                    </h3>
                    <div className="flex gap-0.5">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          icon="tdesign:star-filled"
                          width="20"
                          height="20"
                          className="text-[#FFA304]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm md:text-[15px] text-[#707070] font-medium leading-[100%]">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm md:text-[15px] text-[#707070] font-medium leading-relaxed">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testomonials
