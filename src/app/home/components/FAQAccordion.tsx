"use client"
import React from 'react';
import { ChevronUp } from 'lucide-react';
import { useToggle } from '@/hooks/useToggle';
import { faqs } from '@/components/constant';

const FAQAccordion = () => {

  const AccordionItem: React.FC<{faq: {question: string; answer: string}}>= ({ faq }) => {
    const [open, toggle] = useToggle(false)

    return (
      <div className="border-b border-neutral-200 last:border-b-0 mt-4">
        <button
          onClick={toggle}
          className="w-full px-2 md:px-8 py-4 md:py-6 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
        >
          <span className="text-[14px] md:text-base text-[#2F3237] font-medium pr-4">
            {faq.question}
          </span>
          <div
            className={`flex-shrink-0 w-[32px] h-[32px] rounded-full bg-[#544BC2] flex items-center justify-center transition-transform duration-300 cursor-pointer ${
              open ? 'rotate-180' : ''
            }`}
          >
            <ChevronUp className="w-5 h-5 text-white" />
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-8 pb-6 text-[#707070] text-[16px] font-normal  leading-relaxed w-[700px]">
            {faq.answer}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className=" mt-12 md:mt-20">
      <div className=" mx-auto">
        <div className="bg-[#F7F7F7] rounded-[16px] px-3 md:p-[28px] text-left border-[0.8px] border-[#E9E9E9]">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} faq={faq}/>
          ))}
        </div>
      </div>    
    </div>
  );
};

export default FAQAccordion;