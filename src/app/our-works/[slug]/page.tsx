import { notFound } from "next/navigation"
import Image from "next/image"
import { Cards } from "@/components/constant"
import wavyLine from "@/assets/Vector 6.png"
import ConnectionCard from "@/app/home/components/ConnectionCard"

const WorkDetails = ({ params }: { params: { slug: string } }) => {
  const project = Cards.find((p) => p.slug === params.slug)

  if (!project) return notFound()

  const { title, description, details } = project



  const overviewCards = [
    {
      title: "Challenge",
      textTitle: "Ideas",
      description: "turned MVP and launched"
    },
    {
      title: "Solution",
      textTitle: "Years",
      description: "of experience with seasoned experts"
    },
    {
      title: "Result",
      textTitle: "Expertise",
      description: "Across industries — FinTech, Healthcare, AI"
    },
  ];

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


      <section className="relative md:max-w-[90%] mx-auto px-4 py-16 mt-10 md:mt-18">
        {/* HERO */}
        <header>
          <div className="space-y-4 mb-10 text-left md:w-[45%]">
            <h1 className="text-[32px] md:text-[64px] font-semibold md:font-medium text-[#121212] ">
              {title}
            </h1>
            <p className="text-[#12121299] text-base md:text-[20px] font-medium">{description}</p>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between mb-14 gap-4">
            {
              ["Client", "Timeline", "Service", "Website"].map((item, index) => (
                <div key={index}>
                  <p className="text-[#12121299] text-base md:text-[20px] font-medium">{item}</p>
                  <p className="text-[#121212] text-base md:text-[20px] font-semibold">Placeholder</p>
                </div>
              ))
            }
          </div>
        </header>

        {/* COVER IMAGE */}
        <div className="rounded-3xl overflow-hidden mb-12">
          <Image
            src={project.bgImage}
            alt={title}
            className="w-full h-[580px] md:h-[684px] object-cover"
          />
        </div>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-20 md:mt-24">
          {overviewCards.map((item, index) => {
            const isLast = index === overviewCards.length - 1;
            return (
              <div
                key={item.title}
                className={`rounded-2xl p-[32px] md:p-[32px] flex flex-col justify-between transition-colors duration-300 md:w-[418.66px] h-[476px]
              ${isLast
                    ? "bg-[#544BC2] text-white"
                    : "bg-[#F7F7F7] text-[#121212]"
                  }
            `}
              >
                <div className="flex flex-col justify-between h-full">
                  <h3
                    className={`text-[24px] font-medium mb-6 ${isLast ? "text-[#FFFFFFCC]" : "text-[#12121299]"
                      }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-[24px] leading-relaxed w-[75%] ${isLast ? "text-white w-[90%]" : "text-[#121212]"
                      }`}
                  >
                    <span className='font-semibold '>{item.textTitle} </span>
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </section>

        {/* <section className="bg-[#544BC2] p-6 relative h-[582px] md:h-[708px] mt-12 md:mt-24 rounded-[8px]">
          <div className="mb-10 mt-4">
            <p className="text-[26px] md:text-[38px] text-[#FFFFFF] font-medium ">Design Process for Blocsta web design</p>
          </div>
          <div className="relative flex flex-col items-start md:mt-24">
            <Image src={wavyLine} width={996.5} height={340} alt="wavy Line" className="absolute top-26 md:-top-8 md:left-24 rotate-45 md:rotate-0 md:h-[457.29px]" />
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-full w-[200px] md:w-[231px]  mx-auto flex items-center justify-center px-8 py-2 absolute"
                style={{
                  left: `calc(${index} * var(--step-x))`,
                  top: `calc(${index} * var(--step-y))`
                }}
              >
                <span className="text-[#544BC2] font-medium text-base md:text-[26px]">
                  {step}
                </span>
              </div>
            ))}
          </div>

        </section> */}

        {/* DESKTOP SCREENS */}
        <div className="my-24">
          <h3 className="text-[26px] md:text-[48px] font-medium mb-6">Desktop Screens</h3>
          <div className="overflow-hidden relative w-[343px] md:w-full h-[363px] md:h-[708px] bg-[#DEDBDB] rounded-[2.14px]">
            <div className="flex gap-12 md:gap-30 absolute left-0 -top-[10%] md:-top-[30%]">
              <div className="rotate-30 grid grid-cols-1 gap-3 md:gap-8">
                <Image
                  src={project.bgImage}
                  alt={title}
                  className="w-[137.46px] md:w-[512.99px] h-[204.99px] md:h-[764.99px] rounded-[7.5px] md:rounded-[28px] object-cover "
                />
                <Image
                  src={project.bgImage}
                  alt={title}
                  className="w-[137.46px] md:w-[512.99px] h-[204.99px] md:h-[764.99px] rounded-[7.5px] md:rounded-[28px] object-cover "
                />
              </div>
              <div className="rotate-30 grid grid-cols-1 gap-3 md:gap-8">
                <Image
                  src={project.bgImage}
                  alt={title}
                  className="w-[137.46px] md:w-[512.99px] h-[204.99px] md:h-[764.99px] rounded-[7.5px] md:rounded-[28px] object-cover "
                />
                <Image
                  src={project.bgImage}
                  alt={title}
                  className="w-[137.46px] md:w-[512.99px] h-[204.99px] md:h-[764.99px] rounded-[7.5px] md:rounded-[28px] object-cover "
                />
              </div>
            </div>
          </div>
        </div>

        <section className="bg-[#544BC2] p-6 relative h-[582px] md:h-[708px] mt-12 md:mt-24 rounded-[8px]">
          <div className="mb-10 mt-4">
            <p className="text-[26px] md:text-[38px] text-[#FFFFFF] font-medium ">Design Process for Blocsta web design</p>
          </div>
          <div className="relative flex flex-col items-start md:mt-24">
            <Image src={wavyLine} width={996.5} height={340} alt="wavy Line" className="absolute top-26 md:-top-8 md:left-24 rotate-45 md:rotate-0 md:h-[457.29px]" />
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-full w-[200px] md:w-[231px]  mx-auto flex items-center justify-center px-8 py-2 absolute"
                style={{
                  left: `calc(${index} * var(--step-x))`,
                  top: `calc(${index} * var(--step-y))`
                }}
              >
                <span className="text-[#544BC2] font-medium text-base md:text-[26px]">
                  {step}
                </span>
              </div>
            ))}
          </div>

        </section>

        {/* MOBILE SCREENS */}
        <div className="my-24">
          <h3 className="text-[26px] md:text-[48px] font-medium mb-6">Mobile Screens</h3>
          <div className="overflow-hidden relative w-[343px] md:w-full h-[363px] md:h-[708px] bg-[#DEDBDB] rounded-[2.14px]">
            <div className="flex gap-10 md:gap-30 absolute left-0 -top-[10%] md:-top-[10%]">
              <div className="rotate-30 grid grid-cols-1 gap-3 md:gap-8">
                <Image
                  src={project.bgImage}
                  alt={title}
                  className="w-[137.46px] md:w-[276.68px] h-[204.99px] md:h-[412.26px] rounded-[7.5px] md:rounded-[28px] object-cover "
                />
                <Image
                  src={project.bgImage}
                  alt={title}
                  className="w-[137.46px] md:w-[276.68px] h-[204.99px] md:h-[412.26px] rounded-[7.5px] md:rounded-[28px] object-cover "
                />
              </div>
              <div className="rotate-30 grid grid-cols-1 gap-3 md:gap-8">
                <Image
                  src={project.bgImage}
                  alt={title}
                  className="w-[137.46px] md:w-[276.68px] h-[204.99px] md:h-[412.26px] rounded-[7.5px] md:rounded-[28px] object-cover "
                />
                <Image
                  src={project.bgImage}
                  alt={title}
                  className="w-[137.46px] md:w-[276.68px] h-[204.99px] md:h-[412.26px] rounded-[7.5px] md:rounded-[28px] object-cover "
                />
              </div>
              <div className="rotate-30 grid grid-cols-1 gap-3 md:gap-8">
                <Image
                  src={project.bgImage}
                  alt={title}
                  className="w-[137.46px] md:w-[276.68px] h-[204.99px] md:h-[412.26px] rounded-[7.5px] md:rounded-[28px] object-cover "
                />
                <Image
                  src={project.bgImage}
                  alt={title}
                  className="w-[137.46px] md:w-[276.68px] h-[204.99px] md:h-[412.26px] rounded-[7.5px] md:rounded-[28px] object-cover "
                />
              </div>
              <div className="rotate-30 grid grid-cols-1 gap-3 md:gap-8">
                <Image
                  src={project.bgImage}
                  alt={title}
                  className="w-[137.46px] md:w-[276.68px] h-[204.99px] md:h-[412.26px] rounded-[7.5px] md:rounded-[28px] object-cover "
                />
                <Image
                  src={project.bgImage}
                  alt={title}
                  className="w-[137.46px] md:w-[276.68px] h-[204.99px] md:h-[412.26px] rounded-[7.5px] md:rounded-[28px] object-cover "
                />
              </div>
            </div>
          </div>
        </div>

        {/* TESTIMONIAL */}
        <div className="max-w-5xl mx-auto space-y-4 md:flex items-center justify-between gap-20">
          <Image
            src={details.testimonial.image}
            alt={details.testimonial.name}
            className="mx-auto md:h-[547px] w-[343px] md:w-[403px]"
          />
          <div>
            <h4 className="font-semibold text-[#121212] text-[24px]">
              {details.testimonial.name}
            </h4>
            <small className="text-[16px] text-[#12121299] font-medium">{details.testimonial.role}</small>
            <p className="text-[#12121280] text-[18px] md:text-[32px]">
              “{details.testimonial.feedback}”
            </p>
          </div>
        </div>
      </section>

      <ConnectionCard />
    </div>
  )
}

export default WorkDetails
