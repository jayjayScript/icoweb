import React from 'react'

interface HeroTextProps {
  title: string
  highlightText?: string
  description?: string
  showStatus?: boolean
  showButtons?: boolean
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryClick?: () => void
  onSecondaryClick?: () => void
}

const HeroText: React.FC<HeroTextProps> = ({
  title,
  highlightText,
  description,
  showStatus = false,
  showButtons = true,
  primaryButtonText = "Start Your Project",
  secondaryButtonText = "See Our Work",
  onPrimaryClick,
  onSecondaryClick,
}) => {
  return (
    <div>
      {/* Hero Title */}
      {
        showStatus && (
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-[#121212] font-medium">Available for work</span>
          </div>
        )
      }
      <h1 className="text-[32px] md:text-[64px] font-semibold text-center leading-[140%] md:w-[50%] mx-auto">
        {title}
        <span className="text-[#544BC2]"> {highlightText}</span>
      </h1>

      {/* Description */}
      <p className="text-[#707070] text-center max-w-2xl mx-auto mb-8 text-base md:text-[20px] leading-[28px] my-[16px] font-medium md:w-[35%]">
        {description}
      </p>

      {/* Buttons */}
      {
        showButtons && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:w-[27%] mx-auto">
            <button
              onClick={onPrimaryClick}
              className="flex-1 bg-[#544BC2] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5558E3] transition-colors shadow-inner shadow-[#9991FF] cursor-pointer w-full"
            >
              {primaryButtonText}
            </button>
            <button
              onClick={onSecondaryClick}
              className="flex-1 bg-white text-[#544BC2] hover:text-white hover:bg-[#544bc2] px-6 py-3 rounded-full font-medium border border-[#9991FF] hover:border-gray-400 transition-colors shadow-inner shadow-[#9A98B033] cursor-pointer w-full"
            >
              {secondaryButtonText}
            </button>
          </div>
        )
      }

    </div>
  )
}

export default HeroText