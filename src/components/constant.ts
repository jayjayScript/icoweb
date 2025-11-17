

import perfection from '@/assets/perfection/study1.png'
import perfectionScreen from '@/assets/perfection/1.png'
import perfectionScreen2 from '@/assets/perfection/2.png'
import perfectionScreen3 from '@/assets/perfection/3.png'
import perfectionScreen4 from '@/assets/perfection/4.png'
import perfectionDesktop from '@/assets/perfection/desktop 2.png'

import gerald from '@/assets/gerald nwonye/gerald.png'
import desktop from '@/assets/gerald nwonye/desktop (1).png'
import mobile from '@/assets/gerald nwonye/2.png'
import mobile2 from '@/assets/gerald nwonye/3.png'
import mobile3 from '@/assets/gerald nwonye/4.png'
import mobile4 from '@/assets/gerald nwonye/Untitled.png'

import wakajube from '@/assets/wakajugbe/desktop1.jpg'
import wakajubedesktop from '@/assets/wakajugbe/desktop.png'
import wakamobile from '@/assets/wakajugbe/1.png'
import wakamobile2 from '@/assets/wakajugbe/2.png'
import wakamobile3 from '@/assets/wakajugbe/3.png'
import wakamobile4 from '@/assets/wakajugbe/4.png'

import ride from '@/assets/Bglory Rides/desktop.png'
import rideDesktop from '@/assets/Bglory Rides/desktop (1).png'
import ride1 from '@/assets/Bglory Rides/1.png'
import ride2 from '@/assets/Bglory Rides/2.png'
import ride3 from '@/assets/Bglory Rides/3.png'
import ride4 from '@/assets/Bglory Rides/4.png'

import beepex from '@/assets/beepex/image.png'
import beepexDesktop from '@/assets/beepex/desktop.png'
import beepexMobile from '@/assets/beepex/1.png'
import beepexMobile2 from '@/assets/beepex/2.png'
import beepexMobile3 from '@/assets/beepex/3.png'
import beepexMobile4 from '@/assets/beepex/4.png'

import votix from '@/assets/VotixCare/Artboard 13.png'
import votixDesktop2 from '@/assets/VotixCare/2.png'



export const navLinks = [
  {
    name: "Home",
    link: "/"
  },
  {
    name: "About",
    link: "/about"
  },
  {
    name: "Our works",
    link: "/our-works"
  },
  {
    name: "Blog",
    link: "http://blog.icowebagency.com"
  },
  {
    name: "Catalog",
    link: "/catalogue"
  },
  {
    name: "Contact",
    link: "/contact"
  }
]

export const cards = [
  { name: 'blue', color: '#8FAECD' },
  { name: 'orange', color: '#FF945F' },
  { name: 'gray', color: '#DADADA' }
];

export const serviceData = [
  {
    number: "01.",
    question: "Mobile App Development",
    tags: ["iOS UI Design", "Android UI Design", "iOS UI Design", "Android UI Design", "Prototyping", "Interaction Design"],
    answer: "We transform complex requirements into intuitive, high-performance mobile experiences that users love—native iOS, Android, or cross-platform solutions tailored to your business goals.",
    images: [perfectionScreen, wakamobile2, beepexMobile2, ride2], // 4 mobile images
    layout: "mobile" as const// grid-cols-4
  },
  {
    number: "02.",
    question: "Website Design & Development",
    answer: "From sleek brochure sites to complex web applications, we craft responsive, conversion-focused websites that make your brand shine while driving measurable business results.",
    images: [wakajubedesktop], // Single desktop image
    layout: "desktop"  as const// grid-cols-2 (will show single image centered)
  },
  {
    number: "03.",
    question: "WordPress Development & Customization",
    answer: "We build powerful, scalable WordPress solutions with custom themes, plugins, and integrations that give you total control while maintaining enterprise-level security and performance.",
    images: [perfectionDesktop], // Single desktop image
    layout: "desktop" as const
  },
  {
    number: "04.",
    question: "UI/UX Design",
    answer: "Our user-centered design approach creates intuitive, engaging interfaces that delight users while achieving your business objectives—beautiful designs backed by strategic thinking.",
    images: [perfectionScreen3,beepexMobile3,ride3,wakamobile3], // 4 mobile images
    layout: "mobile" as const
  },
  {
    number: "05.",
    question: "Technical Support & Maintenance",
    answer: "We don't just build and disappear. Our ongoing maintenance ensures your digital products remain secure, optimized, and evolves with your business needs and technology trends.",
    images: [perfectionScreen4,ride2,wakamobile4,beepexMobile2], // 4 mobile images
    layout: "mobile" as const
  },
  {
    number: "06.",
    question: "Full-Stack Development",
    answer: "Our end-to-end development capability means seamless integration between beautiful frontends and powerful backends—creating cohesive digital experiences without technical compromises.",
    images: [ride4,beepexMobile4,perfectionScreen2,wakamobile2], // Single desktop image
    layout: "mobile" as const
  },
];

export const features = [
  {
    title: "End-to-End Expertise",
    description: "From strategy and design to development and maintenance, we handle every aspect of your digital project—no handoffs, no miscommunication, just seamless execution",
    icon: "heroicons:arrow-path-20-solid" // or "📊" or "🎯"
  },
  {
    title: "Human-Centered Design",
    description: "We design for people first, creating intuitive experiences that solve real problems and create meaningful connections between your brand and your users",
    icon: "ph:user" // or "👥" or "💎"
  },
  {
    title: "Technical Excellence",
    description: "Our code isn't just functional—it's clean, scalable, and built to evolve. We follow best practices that ensure your digital products perform flawlessly today and tomorrow",
    icon: "ph:chart-line-bold" // or "🏆" or "⭐"
  },
  {
    title: "Transparent Process",
    description: "No surprises, no hidden costs. Our collaborative approach keeps you informed and involved throughout the entire development journey.",
    icon: "ph:stack-plus" // or "⚡" or "🚀"
  },
  {
    title: " Results-Driven Approach",
    description: "We measure success by your success—focusing on the metrics that matter to your business and optimizing for real-world impact, not just aesthetics",
    icon: "uiw:menu" // or "💬" or "📢"
  },
  {
    title: "Long-Term Partnership",
    description: "We build relationships, not just websites. Count on us for ongoing support, strategic guidance, and technical expertise as your business grows",
    icon: "streamline:customer-support-1" // or "🛠️" or "📞"
  }
];


import sarah from '@/assets/perfection/perfection logo-16.png'
import laura from '@/assets/Bglory Rides/ICON GREEN.png'
import daniel from '@/assets/wakajugbe/logo vertical-white-blue bg.png'
import jang from '@/assets/gerald nwonye/logo.png'
import ahmed from '@/assets/beepex/deepex logo-04.jpg'
import michael from '@/assets/VotixCare/Asset 4.png'

export const testimonials = [
  {
    name: "Adebayo Ogunleye",
    title: "Founder, Perfection Reloaded Photography",
    image: sarah,
    text: "ICOWEB transformed my photography business with a website that showcases my work exactly how I envisioned. Potential clients now spend 3x longer browsing my portfolio, and I've seen a 40% increase in booking inquiries since launch. Their WordPress expertise gave me a site that's both stunning and easy for me to update with new collections.",
    rating: 5
  },
  {
    name: "Clara Nwonye",
    title: "Executive Director, Gerald Nwonye Foundation",
    image: jang,
    text: "Working with ICOWEB was a game-changer for our foundation. They truly understood the sensitivity of our cause and created a platform that not only tells our story authentically but has increased our donations by 65%. Their team took the time to understand our mission, and it shows in every element of the design. Our volunteers constantly tell us how easy the new site is to navigate.",
    rating: 5
  },
  {
    name: "Dr. Victor Enabeli",
    title: "Chairman, Wakajugbe",
    image: daniel,
    text: "ICOWEB delivered beyond our expectations. Both our rider and driver apps are intuitive, fast, and remarkably stable during testing. What impressed me most was their attention to local market needs—they suggested features we hadn't even considered that ended up being crucial for our users. The internal testing feedback has been overwhelmingly positive.",
    rating: 5
  },
  {
    name: "Chike Okonkwo",
    title: " Operations Manager, Bglory Rides",
    image: laura,
    text: "I was nervous about building a ride-hailing platform from scratch, but ICOWEB made the process surprisingly smooth. Their technical expertise is matched by their ability to simplify complex concepts for non-technical team members like me. The ongoing development has remained on schedule, and their proactive communication means we're never left wondering about progress.",
    rating: 5
  },
  {
    name: "Ojo Osayomore Destiny",
    title: "Founder, Beepex",
    image: ahmed,
    text: "The app ICOWEB created for us handles complex financial transactions with remarkable security and speed. Our customers love the clean interface, and our transaction completion rate is 28% higher than our previous solution. The team didn't just build what we asked for—they enhanced our initial concept with improvements that have directly impacted our bottom line.",
    rating: 5
  },
  {
    name: "Dr. Amina Hassan",
    title: " Lead Optometrist, VotixCare",
    image: michael,
    text: "ICOWEB's platform has revolutionized how we manage patient care. The dashboard they designed saves our staff an average of 12 hours per week on administrative tasks. The patient-facing app has also increased appointment adherence by 35%. As someone with minimal technical knowledge, I appreciated how ICOWEB translated our clinical requirements into a system that feels tailored specifically to optometry practices.",
    rating: 5
  }
];

export const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on scope and complexity. A typical website project takes 4-8 weeks from initial consultation to launch. We'll provide a detailed timeline during our discovery phase based on your specific requirements."
  },
  {
    question: "Do you handle both design and development?",
    answer: "Yes, we offer end-to-end services covering both design and development. Our team includes experienced designers and developers who work collaboratively to deliver cohesive, high-quality digital products."
  },
  {
    question: "Can you work with our existing design or code?",
    answer: "Absolutely! We can integrate with your existing design systems or codebase. Whether you need us to implement a design, improve existing code, or build on top of your current infrastructure, we're flexible and experienced in working with legacy systems."
  },
  {
    question: "What technologies do you use?",
    answer: "We work with modern technologies including React, Next.js, Node.js, and various cloud platforms. Our tech stack is chosen based on your project needs, scalability requirements, and long-term maintenance considerations."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes, we provide ongoing maintenance and support packages. This includes bug fixes, updates, performance monitoring, and feature enhancements to ensure your product continues to perform optimally after launch."
  },
  {
    question: "How much will my project cost?",
    answer: "Project costs vary based on scope, complexity, and timeline. We offer transparent pricing and will provide a detailed quote after understanding your requirements. Contact us for a free consultation and custom estimate."
  }
];

export const processSteps = [
  {
    icon: "mdi:magnify",
    title: "Discovery",
    description:
      "We begin by deeply understanding your business objectives, target audience, and vision. This crucial foundation allows us to create a strategic roadmap that aligns your digital product with measurable business outcomes.",
  },
  {
    icon: "mdi:palette-outline",
    title: "Design",
    description:
      "Our designers create intuitive, visually compelling interfaces that embody your brand essence while ensuring every user interaction feels purposeful and engaging.",
  },
  {
    icon: "mdi:code-tags",
    title: "Development",
    description:
      "We build fast, scalable products with clean code, modern tech, and thorough quality testing, ensuring seamless user experience.",
  },
  {
    icon: "mdi:rocket-launch-outline",
    title: "Launch & Support",
    description:
      "We launch your product, ensure everything works flawlessly, and provide ongoing support as you grow.",
  },
];

import abiodun from '@/assets/testimonials/osagie abiodun.jpg'
import ezeugo from '@/assets/testimonials/Ezeugo.jpg'
import chineme from '@/assets/testimonials/Okpala chineme.jpg'
import onifade from '@/assets/testimonials/Temidayo Onifade.jpg'
import onyisi from '@/assets/testimonials/christian onyisi.jpg'
import sonia from '@/assets/testimonials/sonia kajotoni.jpg'
import princewill from '@/assets/testimonials/princewill.jpg'
import helen from '@/assets/testimonials/helen.jpg'

export const theTeam = [
  {
    image: abiodun,
    name: "Abiodun Osagie Olise",
    role: "CEO & Mobile Developer",
    bio: "Abiodun leads ICOWEB with a unique blend of strategic vision and hands-on technical expertise. With a passion for creating mobile experiences that users love, he guides our team while staying deeply involved in the development process—ensuring our solutions are both business-savvy and technically excellent."
  },
  {
    image: onyisi,
    name: "Onyinsi Christian",
    role: "CTO & Mobile Developer, Partner",
    bio: "As our technical visionary, Christian oversees the architectural decisions that power our most complex projects. His extensive mobile development experience and forward-thinking approach to technology help our clients stay ahead of industry trends while ensuring our applications are built on solid technical foundations."
  },
  {
    image: onifade,
    name: "Onifade Temidayo",
    role: "Backend Engineer, Partner",
    bio: "Temidayo is the architect behind our robust, scalable backend systems. With expertise in database design, API development, and system integration, he creates the powerful engines that drive our digital solutions—building secure, efficient infrastructure that handles complex business logic with ease."
  },
  {
    image: ezeugo,
    name: "Ezeugo Felistus Obieze",
    role: "Frontend Engineer",
    bio: "Eze transforms designs into responsive, engaging user interfaces that captivate and convert. His meticulous attention to detail and commitment to pixel-perfect implementation ensure our websites and applications look stunning across all devices while delivering exceptional user experiences."
  },
  {
    image: chineme,
    name: "Okpala Chineme",
    role: "Mobile Developer",
    bio: "Chineme specializes in creating intuitive, high-performance mobile applications that users love. With a deep understanding of both iOS and Android platforms, he builds cross-platform solutions that maintain native quality while streamlining development and maintenance."
  },
  {
    image: sonia,
    name: "Sonia Kajotoni",
    role: "Mobile Developer Intern",
    bio: "Sonia brings fresh perspectives to our mobile development team as part of our talent development initiative. Working alongside our senior developers, she's gaining hands-on experience while contributing to innovative mobile solutions for our clients—embodying our commitment to fostering Nigeria's next generation of tech talent.",
    intern: "Intern"
  },
  {
    image: helen,
    name: "Owel Helen Abang",
    role: "Frontend Engineer intern",
    bio: "Helen is a frontend intern at ICOWEB who brings fresh energy and modern ideas to the team. She works with senior developers to build responsive, visually appealing interfaces and is developing strong skills in HTML, CSS, and JavaScript. Her passion for creating accessible, user-friendly designs reflects ICOWEB’s dedication to growing Nigeria’s next generation of tech talent.",
    intern: "Intern"
  },
  {
    image: princewill,
    name: "Princewill Jeremiah",
    role: "Frontend Engineer Intern",
    bio: "Jay represents our commitment to nurturing tomorrow's tech talent. As the developer behind this very website, he demonstrates how we empower emerging professionals to contribute meaningfully to real-world projects while developing their skills under expert mentorship.",
    intern: "Intern"
  },
]




import perfectionTestimonial from '@/assets/perfection/perfection logo-16.png'
import votixTestimonial from '@/assets/VotixCare/CleanShot 2025-10-13 at 10 .25.43@2x.png'
import beepexTestimonial from '@/assets/beepex/deepex logo-04.jpg'
import wakaTestimonial from '@/assets/wakajugbe/icon white-blue bg.png'
import bgloryTestimonial from '@/assets/Bglory Rides/ICON GREEN.png'
import geraldTestimonial from '@/assets/gerald nwonye/logo.png'

export const Cards = [
  {
    title: "Perfection Reloaded",
    slug: "perfection-reloaded",
    client: "Perfection Reloaded Photography",
    timeline: "3 weeks",
    service: "Website Design and Development",
    website: "https://perfectionreloadedstudio.uk",
    description:
      "Custom WordPress website with advanced gallery functionality, seamless booking integration, and mobile-responsive design for a premium photography business.",
    tags: ["Web Design", "WordPress", "Photography"],
    bgImage: perfection,
    details: {
      overview: {
        client: "Perfection Reloaded Photography",
        industry: "Photography",
        services: ["Website Design", "WordPress Development", "Gallery Integration"],
      },
      challenge: "The photography business was struggling with an outdated online presence that failed to showcase premium work. Potential clients were bouncing from the site before viewing the full portfolio, resulting in missed opportunities and difficulty attracting higher-end clients.",
      solution: "Custom WordPress website with advanced gallery functionality, seamless booking integration, and mobile-responsive design. We implemented lazy loading for image optimization and created a content strategy that highlighted the photographer's unique style and process.",
      result: "40% increase in portfolio viewing time and 35% growth in booking inquiries within 3 months. The new site provides an elegant, sophisticated platform that properly showcases the artist's work while streamlining the client acquisition process.",
      process: ["Research", "Design", "Development", "Testing", "Launch"],
      desktopImages: perfectionDesktop,
      mobileImages: [perfectionScreen, perfectionScreen2, perfectionScreen3, perfectionScreen4],
      testimonial: {
        name: "Adebayo Ogunleye",
        role: "Founder, Perfection Reloaded Photography",
        image: perfectionTestimonial,
        feedback:
          "ICOWEB transformed my photography business with a website that showcases my work exactly how I envisioned. Potential clients now spend 3x longer browsing my portfolio, and I've seen a 40% increase in booking inquiries since launch.",
      },
    },
  },
  {
    title: "Gerald Nwonye Foundation",
    slug: "gerald-nwonye-foundation",
    client: "Gerald Nwonye Foundation",
    timeline: "4 weeks",
    service: "Website and Donation Platform Development",
    website: "https://geraldnwoyefoundation.org",
    description:
      "Content-rich WordPress website with compelling storytelling, impact statistics, and seamless donation integration for an NGO.",
    tags: ["NGO", "Donation Platform", "Web Development"],
    bgImage: gerald,
    details: {
      overview: {
        client: "Gerald Nwonye Foundation",
        industry: "Non-Profit",
        services: ["Website Development", "Donation Integration", "Impact Dashboard"],
      },
      challenge: "NGO needed to increase visibility, clearly communicate their mission, and implement a secure, transparent donation system. Their existing platform was difficult to navigate and failed to effectively tell their story, limiting donor engagement.",
      solution: "Developed a content-rich WordPress website with compelling storytelling, impact statistics, and seamless donation integration. Implemented a project tracking dashboard showing real-time progress and impact of donor contributions.",
      result: "65% increase in online donations and 43% growth in newsletter signups. The foundation now effectively communicates their mission, showcases their impact, and provides donors with transparent tracking of how their contributions make a difference.",
      process: ["Discovery", "Design", "Development", "Integration", "Launch"],
      desktopImages: desktop,
      mobileImages: [mobile, mobile2, mobile3, mobile4],
      testimonial: {
        name: "Clara Nwonye",
        role: "Executive Director, Gerald Nwonye Foundation",
        image: geraldTestimonial,
        feedback:
          "Working with ICOWEB was a game-changer for our foundation. They truly understood the sensitivity of our cause and created a platform that not only tells our story authentically but has increased our donations by 65%.",
      },
    },
  },
  {
    title: "Wakajugbe",
    slug: "wakajugbe",
    client: "Wakajugbe",
    timeline: "12 months (including QA testing)",
    service: "Mobile App Development (iOS & Android)",
    website: "https://wakajugbe.com",
    description:
      "Complete ride-hailing solution with separate rider and driver apps addressing local market needs, connectivity challenges, and payment preferences unique to Nigeria.",
    tags: ["Mobile App", "Ride-Hailing", "iOS & Android"],
    bgImage: wakajube,
    details: {
      overview: {
        client: "Wakajugbe",
        industry: "Transportation",
        services: ["iOS Development", "Android Development", "Backend System"],
      },
      challenge: "Create a complete ride-hailing solution with separate rider and driver apps that address local market needs, connectivity challenges, and payment preferences unique to Nigeria. The platform needed to be secure, scalable, and optimized for varying device capabilities.",
      solution: "Native iOS and Android applications for both riders and drivers, featuring offline mode capabilities, multiple payment options, and optimized performance for lower-end devices. Implemented real-time tracking with minimal data usage and a comprehensive backend dashboard.",
      result: "Successful internal testing phase with 98% positive feedback from test users. The platform delivered average ride connection times of under 2 minutes and maintained stability even in areas with intermittent connectivity.",
      process: ["Research", "Design", "Development", "Testing", "Launch"],
      desktopImages: wakajubedesktop,
      mobileImages: [wakamobile2, wakamobile, wakamobile3, wakamobile4],
      testimonial: {
        name: "Dr Victor Enabeli",
        role: "Co-Founder & CEO, Wakajugbe",
        image: wakaTestimonial,
        feedback:
          "ICOWEB delivered beyond our expectations. Both our rider and driver apps are intuitive, fast, and remarkably stable during testing. What impressed me most was their attention to local market needs—they suggested features we hadn't even considered that ended up being crucial for our users.",
      },
    },
  },

  {
    title: "Bglory Rides",
    slug: "bglory-rides",
    client: "Bglory Rides",
    timeline: "8 months (ongoing)",
    service: "Mobile App Development (iOS & Android)",
    website: "In Development",
    description:
      "Ride-hailing platform with enhanced driver benefits and rider safety features, built using Flutter for cross-platform consistency.",
    tags: ["Mobile App", "Flutter", "Ride-Hailing"],
    bgImage: ride,
    details: {
      overview: {
        client: "Bglory Rides",
        industry: "Transportation",
        services: ["Flutter Development", "Cross-Platform App", "Safety Features"],
      },
      challenge: "Develop a ride-hailing platform that differentiates itself through enhanced driver benefits and rider safety features in a competitive market. The solution needed to be built from scratch with tight timelines and evolving requirements.",
      solution: "Agile development approach creating cross-platform applications with Flutter, enabling faster development cycles and a consistent experience across devices. Implemented innovative features including driver incentive programs, enhanced safety protocols, and transparent fare calculations.",
      result: "The platform is currently in the final development stages with successful milestone testing. Early driver recruitment has exceeded targets by 30% due to attractive platform features and an intuitive interface.",
      process: ["Planning", "Design", "Agile Development", "Testing", "Iteration"],
      desktopImages: rideDesktop,
      mobileImages: [ride2, ride3, ride1, ride4],
      testimonial: {
        name: "Chike Okonkwo",
        role: "Operations Manager, Bglory Rides",
        image: bgloryTestimonial,
        feedback:
          "I was nervous about building a ride-hailing platform from scratch, but ICOWEB made the process surprisingly smooth. Their technical expertise is matched by their ability to simplify complex concepts for non-technical team members like me.",
      },
    },
  },
  {
    title: "Beepex",
    slug: "beepex",
    client: "Beepex",
    timeline: "8 months",
    service: "Fintech Mobile Application",
    website: "https://beepex.vercel.app",
    description:
      "Comprehensive financial services app for gift card trading, airtime purchases, and subscription management with bank-level security.",
    tags: ["Fintech", "Mobile App", "Payment Solutions"],
    bgImage: beepex,
    details: {
      overview: {
        client: "Beepex",
        industry: "Financial Technology",
        services: ["Mobile App Development", "Payment Integration", "Security Implementation"],
      },
      challenge: "Develop a comprehensive financial services app allowing users to trade gift cards, purchase airtime, and manage subscription payments. The platform required bank-level security while maintaining an intuitive user experience and fast transaction processing.",
      solution: "Built a robust mobile application with a modular architecture, allowing for easy feature expansion. Implemented end-to-end encryption for financial transactions, real-time exchange rate updates, and streamlined verification processes to balance security and user convenience.",
      result: "28% higher transaction completion rate compared to previous solutions. The platform handles over 1,000 daily transactions with 99.8% uptime and has maintained a 4.7/5 user satisfaction rating since launch.",
      process: ["Research", "Architecture Design", "Development", "Security Audit", "Launch"],
      desktopImages: beepexDesktop,
      mobileImages: [beepexMobile2, beepexMobile, beepexMobile4, beepexMobile3],
      testimonial: {
        name: "Ojo Osayomore Destiny",
        role: "Founder, Beepex",
        image: beepexTestimonial,
        feedback:
          "The app ICOWEB created for us handles complex financial transactions with remarkable security and speed. Our customers love the clean interface, and our transaction completion rate is 28% higher than our previous solution.",
      },
    },
  },
  {
    title: "VotixCare",
    slug: "votixcare",
    client: "VotixCare",
    timeline: "8 months",
    service: "Healthcare Management System",
    website: "In Development",
    description:
      "Integrated healthcare system for optometry practices with patient management, appointment scheduling, and inventory control.",
    tags: ["Healthcare", "Management System", "Web & Mobile"],
    bgImage: votix,
    details: {
      overview: {
        client: "VotixCare",
        industry: "Healthcare",
        services: ["Web Dashboard", "Mobile App", "Healthcare Management"],
      },
      challenge: "Design and develop an integrated system for optometry practices, including patient management, appointment scheduling, inventory control, and staff coordination across multiple platforms (web dashboard and mobile app).",
      solution: "Created a HIPAA-compliant cloud-based ecosystem with role-based access control. The solution includes a comprehensive admin dashboard for practitioners, staff interfaces for day-to-day operations, and a patient-facing mobile app for appointments and communication.",
      result: "35% increase in appointment adherence and 12 hours saved weekly on administrative tasks. The platform has streamlined operations for optometry practices while improving patient communication and care coordination.",
      process: ["Discovery", "System Design", "Development", "Compliance Testing", "Deployment"],
      desktopImages: votixDesktop2,
      mobileImages: [votixDesktop2],
      testimonial: {
        name: "Dr Amina Hassan",
        role: "Lead Optometrist, VotixCare",
        image: votixTestimonial,
        feedback:
          "ICOWEB's platform has revolutionized how we manage patient care. The dashboard they designed saves our staff an average of 12 hours per week on administrative tasks. The patient-facing app has also increased appointment adherence by 35%.",
      },
    },
  },
]


// data/catalog.ts
export interface Package {
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  popular: boolean;
}

export interface Section {
  description: string;
  packages: Package[];
}

export interface CatalogData {
  title: string;
  subtitle: string;
  website: string;
  sections: Record<string, Section>;
  process: {
    title: string;
    steps: string[];
  };
  featuredProjects: {
    title: string;
    projects: Array<{
      name: string;
      subtitle: string;
      description: string;
    }>;
  };
  paymentTerms: {
    title: string;
    terms: string[];
  };
  referralProgram: {
    title: string;
    details: string[];
  };
  contact: {
    title: string;
    email: string;
    phone: string;
    address: string;
  };
}

export const catalogData: CatalogData = {
  title: "ICOWEB Digital Agency Service Catalog",
  subtitle: "Where Design Excellence Meets Technical Precision",
  website: "www.icowebagency.com",
  sections: {
    "MOBILE APP DEVELOPMENT": {
      description: "",
      packages: [
        {
          name: "Basic App Package",
          price: "₦3,900,000+",
          subtitle: "Perfect for startups and small businesses",
          features: [
            "Up to 8 screens with intuitive navigation",
            "User authentication (email/password)",
            "Platform-specific UI components",
            "Integration with 1 simple API",
            "Basic analytics implementation",
            "App Store and Google Play deployment",
            "2 revision rounds",
            "Timeline: 17 weeks excluding weekends",
            "30 days post-launch technical support"
          ],
          popular: false
        },
        {
          name: "Standard App Package",
          price: "₦7,800,000+",
          subtitle: "Ideal for established businesses",
          features: [
            "Up to 15 screens with custom UI components",
            "Advanced authentication (social logins)",
            "Integration with up to 3 third-party services",
            "Payment gateway integration",
            "Push notification system",
            "Simple landing page website",
            "Basic admin dashboard",
            "Timeline: 26 weeks excluding weekends",
            "30 days post-launch support"
          ],
          popular: true
        },
        {
          name: "Enterprise App Package",
          price: "₦15,600,000+",
          subtitle: "For complex business solutions",
          features: [
            "Unlimited screens with premium UI/UX",
            "Complex authentication and role management",
            "Multiple payment gateway integrations",
            "Real-time features (such as chat and tracking)",
            "Multi-language support",
            "Professional marketing website",
            "Comprehensive admin dashboard with analytics",
            "Timeline: 39 weeks excluding weekends",
            "60 days of support with optional maintenance"
          ],
          popular: false
        }
      ]
    },
    "WEBSITE DEVELOPMENT": {
      description: "",
      packages: [
        {
          name: "Basic WordPress Website",
          price: "₦936,000+",
          subtitle: "For small businesses and professionals",
          features: [
            "WordPress installation and configuration",
            "Premium theme customization",
            "Up to 5 pages of content",
            "Mobile responsive design",
            "Contact form",
            "Social media links",
            "Basic SEO setup",
            "Timeline: 1-4 weeks",
            "10 days post-launch support"
          ],
          popular: false
        },
        {
          name: "Standard Website Package",
          price: "₦1,872,000+",
          subtitle: "For growing businesses",
          features: [
            "WordPress or a custom Next.js website",
            "Up to 10 pages with content management",
            "WordPress Blog/news section",
            "Newsletter signup - MailChimp",
            "Contact forms - MailChimp",
            "Gallery or portfolio section",
            "SEO implementation",
            "Google Analytics (optional)",
            "Timeline: 3-8 weeks",
            "30 days post-launch support"
          ],
          popular: true
        },
        {
          name: "E-commerce/Custom Website",
          price: "₦4,680,000+",
          subtitle: "For online stores and custom web applications",
          features: [
            "Fully custom design and development",
            "E-commerce functionality or custom features",
            "Product management system",
            "Payment gateway integration",
            "User accounts and dashboards",
            "Admin control panel",
            "SEO optimization",
            "Timeline: 6-12 weeks",
            "30 days post-launch support"
          ],
          popular: false
        }
      ]
    },
    "UI/UX DESIGN SERVICES": {
      description: "",
      packages: [
        {
          name: "Interface Audit",
          price: "₦546,000+",
          subtitle: "",
          features: [
            "UX evaluation of existing design",
            "Usability assessment report",
            "Improvement recommendations",
            "One consultation session",
            "Timeline: 1 week"
          ],
          popular: false
        },
        {
          name: "Design System Creation",
          price: "₦2,340,000+",
          subtitle: "",
          features: [
            "Brand identity integration",
            "Component library",
            "Style guide documentation",
            "Responsive design patterns",
            "Timeline: 2-7 weeks"
          ],
          popular: true
        },
        {
          name: "Full Product Design",
          price: "₦3,900,000+",
          subtitle: "",
          features: [
            "User research and persona development",
            "User journey mapping",
            "Wireframing and prototyping",
            "High-fidelity UI design",
            "Developer handoff documentation",
            "Timeline: 6-10 weeks"
          ],
          popular: false
        }
      ]
    },
    "TECHNICAL SERVICES": {
      description: "",
      packages: [
        {
          name: "Bug Fixing Package",
          price: "₦468,000-₦1,560,000",
          subtitle: "",
          features: [
            "Diagnostic assessment",
            "Issue prioritization",
            "Code fixes and testing",
            "Solution documentation",
            "Timeline: 1-3 weeks (based on complexity)"
          ],
          popular: false
        },
        {
          name: "Performance Optimization",
          price: "₦1,248,000+",
          subtitle: "",
          features: [
            "Performance audit",
            "Load time improvement",
            "Code refactoring",
            "Database optimization",
            "Before/after metrics report",
            "Timeline: 1-4 weeks"
          ],
          popular: false
        },
        {
          name: "Maintenance Contracts - Basic",
          price: "₦234,000/month",
          subtitle: "",
          features: [
            "Up to 5 hours of technical support",
            "Critical bug fixes",
            "Security updates",
            "Monthly performance check"
          ],
          popular: true
        },
        {
          name: "Maintenance Contracts - Standard",
          price: "₦468,000/month",
          subtitle: "",
          features: [
            "Up to 10 hours of technical support",
            "Bug fixes and minor updates",
            "Security monitoring",
            "Content updates",
            "Bi-weekly performance check"
          ],
          popular: true
        },
        {
          name: "Maintenance Contracts - Premium",
          price: "₦936,000/month",
          subtitle: "",
          features: [
            "Up to 15 hours of technical support",
            "Priority response (within 8 business hours)",
            "Bug fixes and feature enhancements",
            "Security monitoring",
            "Regular content updates",
            "Weekly performance check"
          ],
          popular: false
        }
      ]
    }
  },
  process: {
    title: "OUR PROCESS",
    steps: [
      "1. Discovery - Understanding your business needs and goals",
      "2. Design - Creating intuitive, visually appealing interfaces",
      "3. Development - Building robust solutions with clean code",
      "4. Testing - Thorough quality assurance across devices",
      "5. Deployment - Smooth launch and implementation",
      "6. Support - Ongoing assistance and maintenance"
    ]
  },
  featuredProjects: {
    title: "FEATURED PROJECTS",
    projects: [
      {
        name: "Beepex",
        subtitle: "Financial Services Mobile Application",
        description: "Gift card trading platform with secure wallet"
      },
      {
        name: "Wakajugbe",
        subtitle: "Ride-hailing Platform",
        description: "Dual apps for riders and drivers with real-time tracking"
      },
      {
        name: "VotixCare",
        subtitle: "Healthcare Management System",
        description: "Patient management and appointment scheduling system"
      }
    ]
  },
  paymentTerms: {
    title: "PAYMENT TERMS",
    terms: [
      "40% deposit upon project commencement",
      "30% at the agreed mid-project milestone",
      "30% before final delivery and launch"
    ]
  },
  referralProgram: {
    title: "REFERRAL PROGRAM",
    details: [
      "10% commission on the first project value",
      "Payment within 30 days of the client's final payment"
    ]
  },
  contact: {
    title: "Contact us today to discuss your project requirements",
    email: "icowebagency@gmail.com",
    phone: "+234 703 085 0395",
    address: "Okahia Estate, East West Road, Port Harcourt, Rivers, Nigeria."
  }
};