"use client";

import ResponsiveHeader from "@/components/ResponsiveHeader";
import { testimonials } from "@/components/constant";
import { Icon } from "@iconify/react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { motion, Variants } from "framer-motion";

// Properly typed custom variant with index
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.12,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Testomonials = () => {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  return (
    <section className="px-4 sm:px-6 md:px-2 py-6 md:max-w-[90%] mx-auto mt-[2rem]">
      {/* Header */}
      <div className="px-2">
        <ResponsiveHeader
          title="Testimonials"
          headText="What our clients have to say"
          description="We've worked with startups, agencies, and growing brands to design and develop digital products that deliver real results. Here's what they have to say."
        />
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="block lg:hidden my-8 sm:my-10">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3 sm:gap-4 pl-4 sm:pl-6 pr-6 sm:pr-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="flex-[0_0_90%] sm:flex-[0_0_85%] md:flex-[0_0_70%] bg-[#F7F7F7] rounded-[16px] p-4 sm:p-5 md:p-6 text-left border-[0.8px] border-[#E9E9E9]"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index} // passed as number → matches the (custom: number) above
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3 w-full">
                    <Image
                      src={testimonial.image}
                      width={54}
                      height={54}
                      alt={testimonial.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="w-full min-w-0">
                      <div className="flex justify-between items-start w-full gap-2">
                        <h3 className="text-[15px] sm:text-base md:text-lg font-semibold text-[#121212] truncate">
                          {testimonial.name}
                        </h3>
                        <div className="flex gap-0.5 flex-shrink-0">
                          {Array.from({ length: testimonial.rating }, (_, i) => (
                            <Icon
                              key={i}
                              icon="tdesign:star-filled"
                              width="18"
                              height="18"
                              className="text-[#FFA304] sm:w-5 sm:h-5"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-[13px] sm:text-sm md:text-[15px] text-[#707070] font-medium leading-[100%] mt-1">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <p className="text-[13px] sm:text-sm md:text-[15px] text-[#707070] font-medium leading-relaxed">
                  {testimonial.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden lg:grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 my-10 lg:my-12 xl:my-14">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-[#F7F7F7] rounded-[16px] p-6 lg:p-7 xl:p-[32px] text-left border border-[#E9E9E9]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3 w-full">
                <Image
                  src={testimonial.image}
                  width={54}
                  height={54}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                />
                <div className="w-full min-w-0">
                  <div className="flex justify-between items-start w-full gap-2">
                    <h3 className="text-base lg:text-lg font-semibold text-[#121212]">
                      {testimonial.name}
                    </h3>
                    <div className="flex gap-0.5 flex-shrink-0">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <Icon
                          key={i}
                          icon="tdesign:star-filled"
                          width="20"
                          height="20"
                          className="text-[#FFA304]"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm lg:text-[15px] text-[#707070] font-medium leading-[100%] mt-1">
                    {testimonial.title.length > 20
                      ? `${testimonial.title.substring(0, 20)}...`
                      : testimonial.title}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-sm lg:text-[15px] text-[#707070] font-medium leading-relaxed">
              {testimonial.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testomonials;