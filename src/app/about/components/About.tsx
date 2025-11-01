import React from 'react'
import curvyLine from "@/assets/about/Vector 4.png"
import Image from 'next/image'
import world from '@/assets/pngwing.com.png'
import ezeugo from '@/assets/testimonials/Ezeugo.jpg'
import chineme from '@/assets/testimonials/Okpala chineme.jpg'
import onifade from '@/assets/testimonials/Temidayo Onifade.jpg'
import sonia from '@/assets/testimonials/sonia kajotoni.jpg'
import princewill from '@/assets/testimonials/princewill.jpg'

const About = () => {

    const stats = [
        {
            number: "30+",
            title: "Projects Delivered",
            description: "From concept to market-ready digital solutions"
        },
        {
            number: "5+",
            title: "Years of Excellence",
            description: "Building expertise across design and development"
        },
        {
            number: "20+",
            title: "Industries Served",
            description: "Specialised experience in FinTech, Healthcare, and AI"
        }
    ]

    return (
        <div>
            <section>
                <div className='md:max-w-[90%] mx-auto px-4 mt-14 md:mt-24 md:flex justifiy-between items-start'>
                    <div className='max-w-4xl md:max-w-5xl flex-1'>
                        <p className='text-[26px] text-[#121212] md:text-[48px] font-medium text-left leading-relaxed md:leading-[150%]'>
                            Building Digital Products
                            <span className='inline-flex items-center align-top mx-4 mt-1 md:mt-2'>
                            </span><br /> That Make an <span className='font-semibold'>Impact</span>
                        </p>
                    </div>

                    <div className='flex flex-col gap-6 flex-1'>
                        <div>
                            <h4 className='text-[24px] text-[#121212] md:text-[32px] font-medium my-4'>About Us</h4>
                            <p className='text-[16px] md:text-[18px] text-[#12121299] leading-[38px] font-medium'>ICOWEB is a design and development agency that&apos;s built differently. We combine creative vision with technical excellence to craft digital products that don&apos;t just exist—they perform.
                                <br />
                                Founded in 2018 by a team of developers frustrated with the gap between beautiful designs and functional code, we&apos;ve built ICOWEB on a simple premise: exceptional digital products require both artistic vision and technical precision working in harmony. <br />
                                Today, our Lagos-based team works with clients globally, transforming complex challenges into intuitive digital solutions that drive measurable business results. Beyond client work, we&apos;re committed to nurturing the next generation of Nigerian tech talent through our structured internship program, helping bridge the skills gap in our local tech ecosystem.
                            </p>
                        </div>
                        <div>
                            <h4 className='text-[24px] text-[#121212] md:text-[32px] font-medium my-4'>Our Values</h4>
                            <p className='text-[16px] md:text-[18px] text-[#12121299] leading-[38px] font-medium'>At Icoweb, our values shape everything we build. We put users first, uphold high standards of quality, work collaboratively with clients, and create future-ready solutions that grow with your business. These principles guide us in delivering purposeful, impactful, and lasting digital products.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className='max-w-full sm:max-w-[95%] md:max-w-[90%] mx-auto mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-4 grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-20'>
                    {/* Left Purple Card - Takes 1 column */}
                    <div className='bg-[#544BC2] relative overflow-hidden h-[340px] sm:h-[380px] md:h-[420px] lg:h-[444px] w-full lg:w-[326px] rounded-lg mx-auto lg:mx-0 p-6 sm:p-7 md:p-8'>
                        <Image src={curvyLine} alt='curvy line' className='absolute -top-22 -left-8' />
                        <Image src={curvyLine} alt='curvy line' className='absolute bottom-0 right-0' />
                        <div className='relative flex flex-col justify-between h-full'>
                            <div className="flex -space-x-2 justify-center">
                                <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px] rounded-full bg-gray-800 border-2 border-white overflow-hidden" >
                                    <Image src={sonia} alt="client"/>
                                </div>
                                <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px] rounded-full bg-gray-800 border-2 border-white overflow-hidden" >
                                    <Image src={chineme} alt="client"/>
                                </div>
                                <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px] rounded-full bg-gray-800 border-2 border-white overflow-hidden" >
                                    <Image src={princewill} alt="client"/>
                                </div>
                                <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px] rounded-full bg-gray-800 border-2 border-white overflow-hidden" >
                                    <Image src={onifade} alt="client"/>
                                </div>
                                <div className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px] rounded-full bg-gray-800 border-2 border-white overflow-hidden" >
                                    <Image src={ezeugo} alt="client"/>
                                </div>
                            </div>

                            <div className='self-baseline'>
                                <p className='text-white text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold'>
                                    10+<br />
                                    <span className='font-medium text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px]'>Creatives</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Takes 3 columns */}
                    <div className='lg:col-span-3 flex flex-col gap-4 sm:gap-6 md:gap-8'>
                        {/* Top 3 Stats Cards */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8'>
                            {stats.map((stat, index) => (
                                <div key={index} className='bg-[#F7F7F7] rounded-[16px] p-5 sm:p-6 md:p-[20px] text-left border-[0.8px] border-[#E9E9E9]'>
                                    <h2 className='text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] text-[#121212] font-medium md:font-semibold mb-2'>
                                        {stat.number}
                                    </h2>
                                    <p className='text-[14px] md:text-base text-[#121212] max-w-full sm:max-w-[200px] md:max-w-[250px]'>
                                        <span className='font-semibold'>{stat.title}</span>{' '}
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom World Card */}
                        <div className='relative bg-[#F7F7F7] rounded-[16px] p-5 sm:p-6 md:p-[20px] text-left border-[0.8px] border-[#E9E9E9] overflow-hidden flex-1'>
                            <div>
                                <p className='relative font-semibold text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] text-[#121212] z-10'>
                                    Wherever You Are, We Build for You
                                </p>
                                <p className='relative font-medium text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-[#12121299] mt-2 sm:mt-3 w-full sm:w-[85%] md:w-[75%] lg:w-[60%] z-50'>
                                    Our team designs and develops solutions that perform globally, tailored to your unique business needs.
                                </p>
                            </div>

                            <Image
                                src={world}
                                alt='world'
                                className='relative -bottom-[120px] -right-[120px] md:absolute w-full md:w-auto max-w-[280px] sm:max-w-[320px] md:max-w-none mx-auto md:mx-0'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About