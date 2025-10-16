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
        <div className={className}>
            <header className="md:flex md:items-center md:justify-between">
                <div className="w-full flex-1">
                    <div className="flex items-center gap-4 my-4">
                        {showLine && (
                            <div
                                className={`w-[109px] bg-[#12121299] border-[1px] border-[#A0A0A0] ${lineClassName}`}
                            ></div>
                        )}
                        <p
                            className={`text-[#707070] text-[16px] font-normal ${titleClassName}`}
                        >
                            {title}
                        </p>
                    </div>
                    <h3 className={`text-[#121212] text-[26px] md:text-[48px] font-medium md:font-semibold md:max-w-[49%] leading-[140%] ${headTextClassName}`}>{headText}</h3>
                </div>

                <div className="md:max-w-[37%] mt-4">
                    <p
                        className={`text-[#707070] text-[16px] font-normal leading-[24px] ${descriptionClassName}`}
                    >
                        {description}
                    </p>
                    {extraContent && <div className="mt-4">{extraContent}</div>}
                </div>
            </header>
        </div>
    )
}

export default ResponsiveHeader