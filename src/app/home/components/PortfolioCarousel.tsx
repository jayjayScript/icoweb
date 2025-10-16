"use client"
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import study1 from '@/assets/case-studies/study1.jpg'
import study2 from '@/assets/case-studies/study2.png'
import Image from 'next/image'
import Link from 'next/link';
import { Icon } from '@iconify/react/dist/iconify.js';

const PortfolioCarousel = () => {
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

  const cards = [
    {
      title: "Mintiq Dashboard",
      description: "We design and develop responsive, visually captivating websites that not only reflect your brand but also guide users effortlessly toward taking action.",
      tags: ["Responsive Design", "Responsive Design", "Responsive Design"],
      rotation: "-rotate-y-15 rotate-x-5",
      bgImage: study1
    },
    {
      title: "Mintiq Dashboard",
      description: "We design and develop responsive, visually captivating websites that not only reflect your brand but also guide users effortlessly toward taking action.",
      tags: ["Responsive Design", "Responsive Design", "Responsive Design"],
      rotation: "rotate-y-10 rotate-x-5",
      bgImage: study2
    },
    {
      title: "Mintiq Dashboard",
      description: "We design and develop responsive, visually captivating websites that not only reflect your brand but also guide users effortlessly toward taking action.",
      tags: ["Responsive Design", "Responsive Design", "Responsive Design"],
      rotation: "-rotate-y-15 rotate-x-5",
      bgImage: study1
    },
    {
      title: "Mintiq Dashboard",
      description: "We design and develop responsive, visually captivating websites that not only reflect your brand but also guide users effortlessly toward taking action.",
      tags: ["Responsive Design", "Responsive Design", "Responsive Design"],
      rotation: "rotate-y-10 rotate-x-5",
      bgImage: study2
    },
    {
      title: "Mintiq Dashboard",
      description: "We design and develop responsive, visually captivating websites that not only reflect your brand but also guide users effortlessly toward taking action.",
      tags: ["Responsive Design", "Responsive Design", "Responsive Design"],
      rotation: "-rotate-y-15 rotate-x-5",
      bgImage: study1
    },
    {
      title: "Mintiq Dashboard",
      description: "We design and develop responsive, visually captivating websites that not only reflect your brand but also guide users effortlessly toward taking action.",
      tags: ["Responsive Design", "Responsive Design", "Responsive Design"],
      rotation: "rotate-y-10 rotate-x-5",
      bgImage: study2
    },
    {
      title: "Mintiq Dashboard",
      description: "We design and develop responsive, visually captivating websites that not only reflect your brand but also guide users effortlessly toward taking action.",
      tags: ["Responsive Design", "Responsive Design", "Responsive Design"],
      rotation: "-rotate-y-15 rotate-x-5",
      bgImage: study1
    },
    {
      title: "Mintiq Dashboard",
      description: "We design and develop responsive, visually captivating websites that not only reflect your brand but also guide users effortlessly toward taking action.",
      tags: ["Responsive Design", "Responsive Design", "Responsive Design"],
      rotation: "rotate-y-10 rotate-x-5",
      bgImage: study2
    }
  ];

  return (
    <div className="min-h-screen">

      <div className="relative">
        <div className="absolute -top-16 right-32 flex gap-10 z-10">
          <button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="w-[46px] h-[46px] rounded-full bg-transparent bg-opacity-20 border border-white border-opacity-30 flex items-center justify-center cursor-pointer transition-all backdrop-blur-sm hover:bg-opacity-30 hover:border-opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Icon icon="fluent:ios-arrow-24-regular" className="text-white" width="24" height="24" />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="w-[46px] h-[46px] rounded-full bg-transparent bg-opacity-20 border border-white border-opacity-30 flex items-center justify-center cursor-pointer transition-all backdrop-blur-sm hover:bg-opacity-30 hover:border-opacity-50 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Icon icon="ep:arrow-right" className="text-white" width="24" height="24" />
          </button>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6 pl-5 md:pl-24">
            {cards.map((card, index) => (
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
                    <Link href="#" className="flex items-center gap-1.5 font-medium text-xs text-[#121212] no-underline hover:text-purple-600 transition-colors">
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
                      <span key={i} className="px-3.5 py-1.5 border border-neutral-200 rounded-full text-xs text-neutral-600 bg-white whitespace-nowrap">
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