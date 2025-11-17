"use client"; // ← Required for motion + carousel

import ResponsiveHeader from '@/components/ResponsiveHeader';
import React from 'react';
import PortfolioCarousel from './PortfolioCarousel';
import { motion } from 'framer-motion';

const CaseStudies = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
        >
            <section className='bg-[#544BC2]'>
                <div className='px-4 py-10 md:max-w-[90%] mx-auto'>
                    <ResponsiveHeader
                        title='Case Studies'
                        headText='Our Work Speaks for Itself'
                        description='From sleek websites to powerful apps, here are some of the digital experiences we’ve crafted for our clients.'
                        titleClassName="text-[#FFFFFFCC]"
                        headTextClassName="text-[#FCFCFC]"
                        descriptionClassName="text-[#FBFBFB]"
                        lineClassName="bg-[#FFFFFFCC]"
                    />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <PortfolioCarousel />
                </motion.div>
            </section>
        </motion.div>
    );
};

export default CaseStudies;