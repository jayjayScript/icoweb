import ResponsiveHeader from '@/components/ResponsiveHeader'
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import FAQAccordion from './FAQAccordion'

const Faq = () => {
  return (
    <div>
        <section className='md:max-w-[90%] mx-auto px-4 py-6'>
            <ResponsiveHeader 
            title='FAQS'
            headText='Frequently asked questions'
            description='Got questions? Here are some quick answers about our services, process, and how we work.'
            extraContent={
                <div>
                    <p className='text-[#707070] text-[16px] font-normal my-4 leading-[24px] md:max-w-[36%]'>Need More Info?</p>
                    <button className='flex items-center gap-1 bg-[#544BC2] text-white text-sm font-bold py-2.5 px-4 rounded-full'>Get In Touch <Icon icon="mi:arrow-right" width="24" height="24" /></button>
                </div>
            }
            />
            <FAQAccordion />
        </section>
    </div>
  )
}

export default Faq