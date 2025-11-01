import React, { ReactNode } from 'react'

type ResponsiveHeaderProps = {
    title?: string
    headText: string
    description?: string
    extraContent?: ReactNode
    showLine?: boolean
    className?: string
    titleClassName?: string
    headTextClassName?: string
    descriptionClassName?: string
    lineClassName?: string
}

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
        <div className={`px-4 sm:px-6 ${className}`}>
            <header className="md:flex md:items-center md:justify-between md:gap-8 lg:gap-12">
                <div className="w-full md:flex-[2]">
                    {/* Title with Line */}
                    {title && (
                        <div className="flex items-center gap-3 sm:gap-4 my-4">
                            {showLine && (
                                <div
                                    className={`w-[60px] sm:w-[80px] md:w-[109px] bg-[#12121299] border-[1px] border-[#A0A0A0] ${lineClassName}`}
                                ></div>
                            )}
                            <p
                                className={`text-[#707070] text-[14px] sm:text-[15px] md:text-[16px] font-normal ${titleClassName}`}
                            >
                                {title}
                            </p>
                        </div>
                    )}
                    
                    {/* Main Heading */}
                    <h3 
                        className={`text-[#121212] text-[24px] sm:text-[32px] md:text-[40px] lg:text-[48px] font-medium md:font-semibold w-full md:max-w-[90%] lg:max-w-[70%] xl:max-w-[49%] leading-[140%] ${headTextClassName}`}
                    >
                        {headText}
                    </h3>
                </div>

                {/* Description Section */}
                {(description || extraContent) && (
                    <div className="w-full flex-1 md:max-w-[45%] lg:max-w-[40%] xl:max-w-[50%] mt-4 md:mt-2">
                        {description && (
                            <p
                                className={`text-[#707070] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[24px] ${descriptionClassName}`}
                            >
                                {description}
                            </p>
                        )}
                        {extraContent && <div className="mt-4">{extraContent}</div>}
                    </div>
                )}
            </header>
        </div>
    )
}

export default ResponsiveHeader