import { notFound } from "next/navigation"
import Image from "next/image"
import { Cards } from "@/components/constant"
import wavyLine from "@/assets/Vector 6.png"
import ConnectionCard from "@/app/home/components/ConnectionCard"

const WorkDetails = ({ params }: { params: { slug: string } }) => {
  const project = Cards.find((p) => p.slug === params.slug)

  if (!project) return notFound()

  const { title, description, details, client, timeline, service, website } = project

  const overviewCards = [
    {
      title: "Challenge",
      content: details.challenge
    },
    {
      title: "Solution",
      content: details.solution
    },
    {
      title: "Result",
      content: details.result
    },
  ];

  const desktopImagesArray = Array.isArray(details.desktopImages)
    ? details.desktopImages
    : [details.desktopImages];

  const steps = [
    "Research",
    "Userflow",
    "Wireframes",
    "Design",
    "Development"
  ];

  return (
    <div className='bg-white'>
      {/* Grid Background */}
      <div
        className="absolute inset-0 -top-20 left-0 h-screen"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E5E7EB6E 1.5px, transparent 1px),
            linear-gradient(to bottom, #E5E7EB6E 1.5px, transparent 1px)
          `,
          backgroundSize: '120px 120px',
          WebkitMaskImage: `
      radial-gradient(circle at top left, transparent 0%, transparent 5%, black 26%),
      radial-gradient(circle at bottom left, transparent 0%, transparent 5%, black 26%)
    `,
          WebkitMaskComposite: 'source-in',
          maskComposite: 'intersect',
        }} />


      <section className="relative max-w-full sm:max-w-[95%] md:max-w-[90%] mx-auto px-4 sm:px-6 md:px-4 py-12 sm:py-14 md:py-16 mt-8 sm:mt-10 md:mt-12 lg:mt-18">
        {/* HERO */}
        <header>
          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10 text-left w-full sm:w-[80%] md:w-[60%] lg:w-[45%]">
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-semibold md:font-medium text-[#121212] leading-tight">
              {title}
            </h1>
            <p className="text-[#12121299] text-[15px] sm:text-base md:text-[18px] lg:text-[20px] font-medium">{description}</p>
          </div>

          <div className="grid grid-cols-2 md:flex md:items-center md:justify-between mb-10 sm:mb-12 md:mb-14 gap-4 sm:gap-6 md:gap-8">
            <div>
              <p className="text-[#12121299] text-[14px] sm:text-[15px] md:text-base lg:text-[20px] font-medium">Client</p>
              <p className="text-[#121212] text-[14px] sm:text-[15px] md:text-base lg:text-[20px] font-semibold">{client}</p>
            </div>
            <div>
              <p className="text-[#12121299] text-[14px] sm:text-[15px] md:text-base lg:text-[20px] font-medium">Timeline</p>
              <p className="text-[#121212] text-[14px] sm:text-[15px] md:text-base lg:text-[20px] font-semibold">{timeline}</p>
            </div>
            <div>
              <p className="text-[#12121299] text-[14px] sm:text-[15px] md:text-base lg:text-[20px] font-medium">Service</p>
              <p className="text-[#121212] text-[14px] sm:text-[15px] md:text-base lg:text-[20px] font-semibold">{service}</p>
            </div>
            <div>
              <p className="text-[#12121299] text-[14px] sm:text-[15px] md:text-base lg:text-[20px] font-medium">Website</p>
              <a
                href={website.startsWith('http') ? website : '#'}
                target={website.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="text-[#121212] text-[14px] sm:text-[15px] md:text-base lg:text-[20px] font-semibold hover:text-[#544BC2] transition-colors"
              >
                {website.startsWith('http') ? 'Visit Site' : website}
              </a>
            </div>
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden mb-10 sm:mb-12">
          <Image
            src={project.bgImage}
            alt={title}
            className="w-full h-[300px] sm:h-[400px] md:h-[520px] lg:h-[684px] object-contain"
          />
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
          {overviewCards.map((item, index) => {
            const isLast = index === overviewCards.length - 1;
            return (
              <div
                key={item.title}
                className={`rounded-2xl p-6 sm:p-7 md:p-[32px] flex flex-col justify-between transition-colors duration-300 w-full min-h-[350px] sm:min-h-[400px] md:min-h-[440px] lg:min-h-[476px]
              ${isLast
                    ? "bg-[#544BC2] text-white"
                    : "bg-[#F7F7F7] text-[#121212]"
                  }
            `}
              >
                <div className="flex flex-col justify-between h-full">
                  <h3
                    className={`text-[20px] sm:text-[22px] md:text-[24px] font-medium mb-4 sm:mb-5 md:mb-6 ${isLast ? "text-[#FFFFFFCC]" : "text-[#12121299]"
                      }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-[16px] sm:text-[18px] md:text-[18px] leading-relaxed ${isLast ? "text-white" : "text-[#121212]"
                      }`}
                  >
                    {item.content}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* DESKTOP SCREENS */}
        <div className="my-16 sm:my-20 md:my-24">
          <h3 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-medium">Desktop Screens</h3>
          <div className="relative w-full bg-[#DEDBDB] rounded-[2.14px] p-4 sm:p-6 ">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 overflow-x-auto">
              {desktopImagesArray.map((img, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`flex-shrink-0 ${desktopImagesArray.length === 1
                    ? 'w-full'
                    : 'w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-24px)]'
                    }`}
                >
                  <Image
                    src={img}
                    alt={`${title} desktop view ${imgIndex + 1}`}
                    className="w-full h-auto rounded-[6px] sm:rounded-[7.5px] md:rounded-[20px] lg:rounded-[28px] object-cover shadow-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="bg-[#544BC2] p-4 sm:p-5 md:p-6 relative h-[520px] md:h-[620px] lg:h-[708px] mt-10 sm:mt-16 md:mt-20 lg:mt-24 rounded-[8px]">
          <div className="mb-8 sm:mb-10 mt-3 sm:mt-4">
            <p className="text-[20px] sm:text-[24px] md:text-[32px] lg:text-[38px] text-[#FFFFFF] font-medium leading-tight">Design Process for {title}</p>
          </div>
          <div className="relative flex flex-col items-start mt-16 sm:mt-20 md:mt-24">
            <Image src={wavyLine} width={996.5} height={340} alt="wavy Line" className="absolute top-20 sm:top-26 md:top-20 lg:-top-8 -left-10 sm:left-16 md:-left-6 lg:left-20 rotate-45 md:rotate-20 lg:rotate-0 w-auto h-[300px] sm:h-[350px] lg:h-[457.29px]" />
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-full w-[150px] sm:w-[180px] md:w-[200px] lg:w-[231px] mx-auto flex items-center justify-center px-4 sm:px-6 md:px-8 py-1.5 sm:py-2 absolute"
                style={{
                  left: `calc(${index} * var(--step-x))`,
                  top: `calc(${index} * var(--step-y))`
                }}
              >
                <span className="text-[#544BC2] font-medium text-[14px] sm:text-base md:text-[20px] lg:text-[26px]">
                  {step}
                </span>
              </div>
            ))}
          </div>
        </section>

        {
          project.slug === 'votixcare' ? <div className="my-16 sm:my-20 md:my-24">
            <h3 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-medium">Desktop Screens</h3>
            <div className="relative w-full bg-[#DEDBDB] rounded-[2.14px] p-4 sm:p-6 ">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 overflow-x-auto">
                {desktopImagesArray.map((img, imgIndex) => (
                  <div
                    key={imgIndex}
                    className={`flex-shrink-0 ${desktopImagesArray.length === 1
                      ? 'w-full'
                      : 'w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-24px)]'
                      }`}
                  >
                    <Image
                      src={img}
                      alt={`${title} desktop view ${imgIndex + 1}`}
                      className="w-full h-auto rounded-[6px] sm:rounded-[7.5px] md:rounded-[20px] lg:rounded-[28px] object-cover shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div> :
            <div className="my-16 sm:my-20 md:my-24">
              <h3 className="text-[22px] sm:text-[28px] md:text-[36px] lg:text-[48px] font-medium mb-4 sm:mb-5 md:mb-6">Mobile Screens</h3>
              <div className="overflow-hidden relative w-full h-[250px] sm:h-[400px] md:h-[550px] lg:h-[608px] rounded-[2.14px] flex items-center justify-center bg-[#DEDBDB]">
                <div className="grid grid-cols-4 gap-2 sm:gap-3 w-full h-full p-4">
                  {details.mobileImages.map((img, imgIndex) => (
                    <div key={imgIndex} className="sticky w-full h-full rounded-md overflow-hidden">
                      <Image
                        src={img}
                        alt={`${title} mobile view ${imgIndex + 1}`}
                        fill
                        className="object-cover rounded-md scale-92 md:scale-130"
                      />
                    </div>
                  ))}
                </div>
              </div>

            </div>
        }



        {/* TESTIMONIAL */}
        <div className="max-w-full sm:max-w-4xl md:max-w-5xl mx-auto space-y-4 sm:space-y-6 md:flex md:items-center md:justify-between md:gap-12 lg:gap-20">
          <div className={` ${project.slug === "perfection-reloaded" ? "bg-black" : "bg-transparent"} md:w-[1800px] h-full rounded-lg flex items-center justify-center overflow-hidden shadow-[#544BC224]  p-6`}>
            <Image
              src={details.testimonial.image}
              alt={details.testimonial.name}
              width={403}
              height={547}
              className="object-contain max-w-[343px] sm:max-w-[380px] md:max-w-[340px] h-[400px] sm:h-[450px] md:h-[480px] lg:h-[500px] rounded-lg"
              quality={100}
              sizes="(max-width: 768px) 90vw, 403px"
            />
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h4 className="font-semibold text-[#121212] text-[20px] sm:text-[22px] md:text-[24px]">
              {details.testimonial.name}
            </h4>
            <small className="text-[14px] sm:text-[15px] md:text-[16px] text-[#12121299] font-medium block">{details.testimonial.role}</small>
            <p className="text-[#12121280] text-[16px] sm:text-[20px] md:text-[26px] lg:text-[32px] leading-relaxed">
              &ldquo;{details.testimonial.feedback}&ldquo;
            </p>
          </div>
        </div>
      </section>

      <ConnectionCard />
    </div>
  )
}

export default WorkDetails