import Link from 'next/link'
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
    <div className="px-4 sm:px-6">
      {/* Status Badge */}
      {
        showStatus && (
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-[#121212] font-medium">Available for work</span>
          </div>
        )
      }

      {/* Hero Title */}
      <h1 className="text-[32px] sm:text-[40px] md:text-[52px] lg:text-[64px] font-semibold text-center leading-[140%] w-full sm:w-[85%] md:w-[70%] lg:w-[50%] mx-auto px-2">
        {title}
        {highlightText && <span className="text-[#544BC2]"> {highlightText}</span>}
      </h1>

      {/* Description */}
      {description && (
        <p className="text-[#707070] text-center max-w-2xl mx-auto mb-8 text-base sm:text-[18px] md:text-[20px] leading-[28px] my-[16px] font-medium w-full sm:w-[80%] md:w-[60%] lg:w-[45%] xl:w-[35%] px-2">
          {description}
        </p>
      )}

      {/* Buttons */}
      {
        showButtons && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto md:w-[70%] lg:w-[50%] xl:w-[37%] mx-auto">
            <Link href="/contact" className='w-full sm:flex-1 sm:min-w-[160px]'>
              <button
              onClick={onPrimaryClick}
              className="w-full bg-[#544BC2] text-white px-6 py-3 rounded-full font-medium hover:bg-[#5558E3] transition-colors shadow-inner shadow-[#9991FF] cursor-pointer"
            >
              {primaryButtonText}
            </button>
            </Link>
            
            <Link href="/our-works" className='w-full sm:flex-1 sm:min-w-[160px]'>
              <button
                onClick={onSecondaryClick}
                className="w-full bg-white text-[#544BC2] hover:text-white hover:bg-[#544bc2] px-6 py-3 rounded-full font-medium border border-[#9991FF] hover:border-gray-400 transition-colors shadow-inner shadow-[#9A98B033] hover:shadow-[#9991FF] cursor-pointer"
              >
                {secondaryButtonText}
              </button>
            </Link>
          </div>
        )
      }

    </div>
  )
}

export default HeroText