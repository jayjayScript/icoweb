"use client";
import React from 'react';
import { ChevronUp } from 'lucide-react';
import { useToggle } from '@/hooks/useToggle';
import { faqs } from '@/components/constant';
import { motion, AnimatePresence } from 'framer-motion';

const FAQAccordion = () => {
  const AccordionItem: React.FC<{ faq: { question: string; answer: string } }> = ({ faq }) => {
    const [open, toggle] = useToggle(false);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-b border-neutral-200 last:border-b-0 mt-3 sm:mt-4"
      >
        <button
          onClick={toggle}
          className="w-full px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
        >
          <span className="text-[14px] sm:text-[15px] md:text-base text-[#2F3237] font-medium pr-3 sm:pr-4 leading-relaxed">
            {faq.question}
          </span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex-shrink-0 w-[28px] h-[28px] sm:w-[30px] sm:h-[30px] md:w-[32px] md:h-[32px] rounded-full bg-[#544BC2] flex items-center justify-center cursor-pointer"
          >
            <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </motion.div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-3 sm:px-4 md:px-6 lg:px-8 pb-5 sm:pb-6 text-[#707070] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-relaxed w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[700px]">
                {faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <motion.div
      className="mt-10 sm:mt-12 md:mt-16 lg:mt-20 px-4 sm:px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <div className="mx-auto max-w-full sm:max-w-4xl md:max-w-5xl lg:max-w-6xl">
        <motion.div
          className="bg-[#F7F7F7] rounded-[16px] px-3 py-4 sm:p-5 md:p-6 lg:p-[28px] text-left border-[0.8px] border-[#E9E9E9]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <AccordionItem faq={faq} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FAQAccordion;