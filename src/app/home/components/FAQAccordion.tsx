"use client"
import React from 'react';
import { ChevronUp } from 'lucide-react';
import { useToggle } from '@/hooks/useToggle';
import { faqs } from '@/components/constant';

const FAQAccordion = () => {

  const AccordionItem: React.FC<{faq: {question: string; answer: string}}>= ({ faq }) => {
    const [open, toggle] = useToggle(false)

    return (
      <div className="border-b border-neutral-200 last:border-b-0 mt-3 sm:mt-4">
        <button
          onClick={toggle}
          className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
        >
          <span className="text-[14px] sm:text-[15px] md:text-base text-[#2F3237] font-medium pr-3 sm:pr-4 leading-relaxed">
            {faq.question}
          </span>
          <div
            className={`flex-shrink-0 w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] md:w-[32px] md:h-[32px] rounded-full bg-[#544BC2] flex items-center justify-center transition-transform duration-300 cursor-pointer ${
              open ? 'rotate-180' : ''
            }`}
          >
            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-3 sm:px-4 md:px-6 lg:px-8 pb-5 sm:pb-6 text-[#707070] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-relaxed w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[700px] ">
            {faq.answer}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6">
      <div className="mx-auto max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl">
        <div className="bg-[#F7F7F7] rounded-[16px] px-3 py-4 sm:p-5 md:p-6 lg:p-[28px] text-left border-[0.8px] border-[#E9E9E9]">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} faq={faq}/>
          ))}
        </div>
      </div>    
    </div>
  );
};

export default FAQAccordion;