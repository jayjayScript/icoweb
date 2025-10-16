"use client"
import React, { useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';

interface ServiceItem {
  number: string;
  question: string;
  tags?: string[];
  answer: string;
  image?: string | StaticImageData;
}

interface ServiceAccordionProps {
  serviceData: ServiceItem[];
}

const ServiceAccordion: React.FC<ServiceAccordionProps> = ({ serviceData }) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number): void => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const isOpen = (index: number): boolean => {
    return openItems.has(index);
  };

  return (
    <div className="w-full mx-auto my-12">
      <div className="flex flex-col gap-6 md:gap-20">
        {serviceData.map((item: ServiceItem, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: false }}
            className="bg-[#F5F5F5] rounded-[24px] overflow-hidden"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full px-[13px] md:px-[26px] pt-[24] pb-[16px] text-left hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between group"
            >
              <div className="flex items-center justify-between gap-3 md:gap-[4rem]">
                <span className={`text-[#1a1a1a] font-medium md:font-semibold text-[14px] md:text-[40px]`}>
                  {item.number}
                </span>
                <span className={`text-[#1a1a1a] font-medium md:font-semibold text-[14px] md:text-[40px]`}>
                  {item.question}
                </span>
              </div>
              <div className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${
                isOpen(index) ? 'bg-[#544BC2] rotate-180' : 'bg-[#544BC2] rotate-0'
              }`}>
                <ChevronUp className="w-5 h-5 text-white" />
              </div>
              
            </button>

            {/* Answer Panel with AnimatePresence */}
            <AnimatePresence initial={false}>
              {isOpen(index) && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className={`px-6 md:px-2 md:max-w-[80%] mx-auto`}>
                    {/* Tags */}
                    {item.tags && item.tags.length > 0 && (
                      <div className="flex flex-wrap md:max-w-4xl gap-3 md:gap-4 mb-4">
                        {item.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-[14px] py-[8px] bg-white rounded-[24px] text-[#121212] text-[12px] md:text-[16px] font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Answer Text */}
                    <p className="text-[#666666] font-normal leading-[150%] text-[12px] md:text-[18px] my-8 md:w-3xl">
                      {item.answer}
                    </p>

                    {/* Optional Image */}
                    {item.image && (
                      <div className="mt-4">
                        <Image 
                          src={item.image} 
                          alt={item.question}
                          className="w-full object-contain"
                        />
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceAccordion;