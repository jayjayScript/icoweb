"use client";
import ResponsiveHeader from '@/components/ResponsiveHeader';
import React from 'react';
import { Icon } from '@iconify/react';
import FAQAccordion from './FAQAccordion';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Faq = () => {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8 }}
    >
        <section className='md:max-w-[90%] mx-auto px-4 py-6'>
            <ResponsiveHeader 
                title='FAQS'
                headText='Frequently asked questions'
                description='Got questions? Here are some quick answers about our services, process, and how we work.'
                extraContent={
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className='text-[#707070] text-[16px] font-normal my-4 leading-[24px] md:max-w-[36%]'>
                            Need More Info?
                        </p>
                        
                        <motion.button
                            className='flex items-center gap-1 bg-[#544BC2] text-white text-sm font-bold py-2.5 px-4 rounded-full cursor-pointer'
                            onClick={() => router.push("/contact")}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get In Touch <Icon icon="mi:arrow-right" width="24" height="24" />
                        </motion.button>
                    </motion.div>
                }
            />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.8 }}
            >
                <FAQAccordion />
            </motion.div>
        </section>
    </motion.div>
  );
};

export default Faq;