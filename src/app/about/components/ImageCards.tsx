import Image from 'next/image'
import React from 'react'
import first from "@/assets/about/image.png"
import second from "@/assets/about/image2.png"
import third from "@/assets/about/image3.png"
import fourth from "@/assets/about/image4.png"

const ImageCards = () => {
  return (
    <div>
        <section className='mx-auto p-4 relative mt-5 md:mt-16'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-4 w-full'>
                <Image src={first} width={354} height={454} className='md:h-[454px]' alt='image'/>
                <div className='flex flex-col gap-4'>
                    <Image src={second} width={343} height={294.77} className='md:w-[545.2px] md:h-[294.78px]' alt='image'/>
                    <Image src={third} width={343} height={232.53} className='md:w-[553.07px] h-[232.53px]' alt='image'/>
                </div>
                <Image src={fourth} width={354} height={454} className='md:h-[454px]' alt='image'/>
            </div>
        </section>
    </div>
  )
}

export default ImageCards