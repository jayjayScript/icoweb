"use client";
import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";

interface ServiceItem {
  number: string;
  question: string;
  tags?: string[];
  answer: string;
  images?: (string | StaticImageData)[]; // Changed from image to images array
  layout?: "mobile" | "desktop"; // Added layout field
}

interface ServiceAccordionProps {
  serviceData: ServiceItem[];
}

const ServiceAccordion: React.FC<ServiceAccordionProps> = ({ serviceData }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number): void => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full mx-auto my-8 sm:my-10 md:my-12 px-4 sm:px-6">
      <div className="flex flex-col gap-4 sm:gap-8 md:gap-12">
        {serviceData.map((item: ServiceItem, index: number) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F5] rounded-[20px] sm:rounded-[24px] overflow-hidden"
            >
              {/* Header */}
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-4 sm:px-[13px] md:px-[26px] pt-5 sm:pt-6 md:pt-[24px] pb-4 sm:pb-[16px] text-left hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between group"
              >
                <div className="flex items-center gap-3 sm:gap-8 md:gap-12 lg:gap-[4rem] flex-1 min-w-0">
                  <span className="text-[#1a1a1a] font-medium md:font-semibold text-[14px] sm:text-[18px] md:text-[28px] lg:text-[40px] flex-shrink-0">
                    {item.number}
                  </span>
                  <span className="text-[#1a1a1a] font-medium md:font-semibold text-[14px] sm:text-[18px] md:text-[28px] lg:text-[40px]">
                    {item.question}
                  </span>
                </div>
                <div
                  className={`flex-shrink-0 p-1.5 sm:p-2 rounded-full transition-transform duration-300 ml-3 bg-[#544BC2] cursor-pointer ${isOpen ? "rotate-180" : "rotate-0"
                    }`}
                >
                  <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
              </button>

              {/* Content */}
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{
                      duration: 0.35,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-[13px] md:px-[26px] pb-6 sm:pb-8 md:pb-10">
                      <div className="flex gap-3 sm:gap-8 md:gap-12 lg:gap-[4rem]">
                        <div className="text-[14px] sm:text-[18px] md:text-[28px] lg:text-[40px] flex-shrink-0 opacity-0">
                          {item.number}
                        </div>

                        <div className="flex-1">
                          <p className="text-[#666666] font-normal leading-[150%] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] mb-6 sm:mb-8 md:mb-10 md:max-w-3xl">
                            {item.answer}
                          </p>

                          {item.images && (
                            <div className="relative top-[20%] sm:top-[30%] md:top-[50%] -left-[5%] w-full flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-16">
                              <div
                                className={`grid ${item.layout === "desktop"
                                    ? "grid-cols-2"
                                    : "grid-cols-4"
                                  } gap-4 sm:gap-6 md:gap-8 w-full max-w-6xl`}
                              >
                                {item.images.map((imgSrc, idx) => (
                                  <div
                                    key={idx}
                                    className="flex items-center justify-center bg-[#f5f5f5] rounded-2xl mx-auto"
                                  >
                                    <Image
                                      src={imgSrc}
                                      placeholder="blur"
                                      alt={`${item.question} screen ${idx + 1}`}
                                      className={`w-full h-auto object-contain ${item.layout === "desktop"
                                          ? "md:scale-300 scale-250 translate-x-[50%] translate-y-[-13%]"
                                          : "scale-450"
                                        }`}
                                      loading="lazy"
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceAccordion;
