"use client"
import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

type ResponsiveHeaderProps = {
    title?: string;
    headText: string;
    description?: string;
    extraContent?: ReactNode;
    showLine?: boolean;
    className?: string;
    titleClassName?: string;
    headTextClassName?: string;
    descriptionClassName?: string;
    lineClassName?: string;
};

const ResponsiveHeader: React.FC<ResponsiveHeaderProps> = ({
    title,
    headText,
    description,
    extraContent,
    showLine = true,
    className = "",
    titleClassName = "",
    headTextClassName = "",
    descriptionClassName = "",
    lineClassName = ""
}) => {
    return (
        <motion.div
            className={`px-4 sm:px-6 ${className}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.2,
                        delayChildren: 0.1,
                    },
                },
            }}
        >
            <header className="md:flex md:items-center md:justify-between md:gap-8 lg:gap-12">
                <div className="w-full md:flex-[2]">
                    {/* Title with Line */}
                    {title && (
                        <motion.div
                            className="flex items-center gap-3 sm:gap-4 my-4"
                            variants={{
                                hidden: { opacity: 0, x: -30 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            {showLine && (
                                <motion.div
                                    className={`w-[60px] sm:w-[80px] md:w-[109px] bg-[#12121299] border-[1px] border-[#A0A0A0] ${lineClassName}`}
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    style={{ transformOrigin: 'left' }}
                                />
                            )}
                            <motion.p
                                className={`text-[#707070] text-[14px] sm:text-[15px] md:text-[16px] font-normal ${titleClassName}`}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 },
                                }}
                            >
                                {title}
                            </motion.p>
                        </motion.div>
                    )}
                    
                    {/* Main Heading */}
                    <motion.h3 
                        className={`text-[#121212] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-medium md:font-semibold w-full md:max-w-[90%] lg:max-w-[70%] xl:max-w-[49%] leading-[140%] ${headTextClassName}`}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        {headText}
                    </motion.h3>
                </div>

                {/* Description Section */}
                {(description || extraContent) && (
                    <motion.div
                        className="w-full flex-1 md:max-w-[45%] lg:max-w-[40%] xl:max-w-[50%] mt-4 md:mt-2"
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                    >
                        {description && (
                            <motion.p
                                className={`text-[#707070] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[24px] ${descriptionClassName}`}
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 },
                                }}
                            >
                                {description}
                            </motion.p>
                        )}
                        {extraContent && (
                            <motion.div
                                className="mt-4"
                                variants={{
                                    hidden: { opacity: 0 },
                                    visible: { opacity: 1 },
                                }}
                            >
                                {extraContent}
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </header>
        </motion.div>
    );
};

export default ResponsiveHeader;