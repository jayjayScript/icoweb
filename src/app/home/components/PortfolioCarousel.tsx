"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion, Variants, MotionProps } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Cards } from "@/components/constant";
import { useRouter } from "next/navigation";

// ──────────────────────────────────────────────────────────────
// Variant definitions with proper typing
// ──────────────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const buttonVariants: Variants = {
  hover: {
    scale: 1.1,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderColor: "rgba(255, 255, 255, 0.5)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  tap: { scale: 0.95 },
};

const cardContentVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const tagsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const tagVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// ──────────────────────────────────────────────────────────────
// Component
// ──────────────────────────────────────────────────────────────

const PortfolioCarousel: React.FC = () => {
  const router = useRouter();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <motion.div
      className="min-h-[70vh] md:min-h-[70vh] lg:min-h-[90vh]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="relative">
        {/* Navigation Buttons */}
        <motion.div
          className="absolute -top-12 sm:-top-14 md:-top-16 right-4 sm:right-12 md:right-20 lg:right-32 flex gap-4 md:gap-6 lg:gap-10 z-10"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-full bg-transparent border border-white border-opacity-30 flex items-center justify-center cursor-pointer transition-all backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed"
            variants={buttonVariants}
            whileHover={prevBtnDisabled ? undefined : "hover"}
            whileTap={prevBtnDisabled ? undefined : "tap"}
            aria-label="Previous slide"
          >
            <Icon icon="fluent:ios-arrow-24-regular" className="text-white" width="20" height="20" />
          </motion.button>

          <motion.button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] rounded-full bg-transparent border border-white border-opacity-30 flex items-center justify-center cursor-pointer transition-all backdrop-blur-sm disabled:opacity-30 disabled:cursor-not-allowed"
            variants={buttonVariants}
            whileHover={nextBtnDisabled ? undefined : "hover"}
            whileTap={nextBtnDisabled ? undefined : "tap"}
            aria-label="Next slide"
          >
            <Icon icon="ep:arrow-right" className="text-white" width="20" height="20" />
          </motion.button>
        </motion.div>

        {/* Carousel viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <motion.div className="flex gap-4 sm:gap-5 md:gap-6 pl-4 sm:pl-6 md:pl-12 lg:pl-24">
            {Cards.map((card, index) => (
              <motion.div
                key={index}
                className="relative flex-shrink-0 flex-grow-0 min-w-0 w-[300px] sm:w-[343px] md:w-[500px] lg:w-[625px] h-[480px] sm:h-[531px] md:h-[545px] lg:h-[559px] cursor-pointer"
                onClick={() => router.push(`/our-works/${card.slug}`)}
                variants={cardVariants}
                whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Background image with zoom-in reveal */}
                <motion.div
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1] as const,
                    delay: index * 0.1,
                  }}
                >
                  <Image
                    src={card.bgImage}
                    alt={card.title}
                    fill
                    className="object-cover rounded-2xl sm:rounded-3xl"
                  />
                </motion.div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent rounded-2xl sm:rounded-3xl" />

                {/* Card content (bottom white box) */}
                <motion.div
                  className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 w-[92%] sm:w-[90%] bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 z-10"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1] as const,
                    delay: 0.2 + index * 0.1,
                  }}
                >
                  <motion.div
                    className="flex justify-between items-start sm:items-center mb-2 sm:mb-3 gap-2"
                    variants={cardContentVariants}
                  >
                    <h3 className="text-sm sm:text-base font-semibold text-[#121212] leading-tight">
                      {card.title}
                    </h3>

                    <Link
                      href={`/our-works/${card.slug}`}
                      className="flex items-center gap-1 sm:gap-1.5 font-medium text-[11px] sm:text-xs text-[#121212] no-underline hover:text-purple-600 transition-colors whitespace-nowrap flex-shrink-0"
                    >
                      <span className="hidden sm:inline">View case study</span>
                      <span className="sm:hidden">View</span>
                      <motion.svg
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="sm:w-[14px] sm:h-[14px]"
                        whileHover={{ x: 2, y: -2 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </motion.svg>
                    </Link>
                  </motion.div>

                  <motion.p
                    className="text-[13px] sm:text-[14px] leading-relaxed text-[#707070] font-medium mb-3 sm:mb-5 line-clamp-3 sm:line-clamp-none"
                    variants={cardContentVariants}
                  >
                    {card.description}
                  </motion.p>

                  {/* Tags */}
                  <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-2"
                    variants={tagsContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {card.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        className="px-2.5 sm:px-3.5 py-1 sm:py-1.5 border border-neutral-200 rounded-full text-[11px] sm:text-xs text-neutral-600 bg-white whitespace-nowrap text-center"
                        variants={tagVariants}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "#f3f4f6",
                          transition: { duration: 0.2 },
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCarousel;