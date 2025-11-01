"use client"
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Cards } from '@/components/constant'
import { useRouter } from 'next/navigation';

const PortfolioCarousel = () => {
  const router = useRouter()


  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 1,
    containScroll: 'trimSnaps'
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="min-h-[70vh] md:min-h-[70vh] lg:min-h-[90vh]">

      <div className="relative">
        {/* Navigation Buttons - Hidden on mobile, visible on tablet+ */}
        <div className="absolute -top-12 sm:-top-14 md:-top-16 right-4 sm:right-12 md:right-20 lg:right-32 flex gap-4 md:gap-6 lg:gap-10 z-10">
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-full bg-transparent bg-opacity-20 border border-white border-opacity-30 flex items-center justify-center cursor-pointer transition-all backdrop-blur-sm hover:bg-opacity-30 hover:border-opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Icon icon="fluent:ios-arrow-24-regular" className="text-white" width="20" height="20" />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-full bg-transparent bg-opacity-20 border border-white border-opacity-30 flex items-center justify-center cursor-pointer transition-all backdrop-blur-sm hover:bg-opacity-30 hover:border-opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Icon icon="ep:arrow-right" className="text-white" width="20" height="20" />
          </button>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4 sm:gap-5 md:gap-6 pl-4 sm:pl-6 md:pl-12 lg:pl-24">
            {Cards.map((card, index) => (
              <div key={index} className="relative flex-shrink-0 flex-grow-0 min-w-0 w-[300px] sm:w-[343px] md:w-[500px] lg:w-[625px] h-[480px] sm:h-[531px] md:h-[545px] lg:h-[559px] cursor-pointer"
              onClick={() => router.push(`/our-works/${card.slug}`)}
              >
                <Image
                  src={card.bgImage}
                  alt={card.title}
                  className="absolute inset-0 w-full h-full object-cover rounded-2xl sm:rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/3y0 to-transparent rounded-2xl sm:rounded-3xl" />

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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCarousel;