'use client';

import { Check, Star } from 'lucide-react';
import { catalogData } from '@/components/constant';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Types
interface Package {
  name: string;
  subtitle?: string;
  popular?: boolean;
  features: string[];
}

interface CatalogSection {
  packages: Package[];
}

interface CatalogData {
  sections: {
    [key: string]: CatalogSection;
  };
  process: {
    title: string;
    steps: string[];
  };
}

export default function FullCatalog() {
  const [activeTab, setActiveTab] = useState('MOBILE APP DEVELOPMENT');
  const sections = Object.keys((catalogData as CatalogData).sections);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  // Smooth scroll with offset
  const scrollToSection = (section: string) => {
    setActiveTab(section);
    const element = document.getElementById(section);
    if (element) {
      const yOffset = -140;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Sync active tab on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  // Framer Motion variants
  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const cardContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const stepVariant = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <>
      <style jsx global>{`
        html {
          scroll-padding-top: 140px;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50 mt-5 md:mt-10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* === TAB BAR === */}
          <div className="sticky top-4 z-50 mb-12">
            <div className="mx-auto max-w-5xl hidden lg:block">
              <div
                className="relative rounded-2xl p-2 overflow-hidden"
                style={{
                  background: 'rgba(255, 255, 255, 0.25)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                }}
              >
                <div className="flex justify-center gap-1">
                  {sections.map((section) => (
                    <button
                      key={section}
                      ref={(el) => { tabRefs.current[section] = el; }}
                      onClick={() => scrollToSection(section)}
                      className="relative px-6 py-3 text-sm font-medium transition-all duration-300 z-10 cursor-pointer"
                      style={{
                        color: activeTab === section ? 'white' : '#4b5563',
                      }}
                    >
                      {section}
                      {activeTab === section && (
                        <motion.div
                          className="absolute inset-0 rounded-xl -z-10"
                          layoutId="tabHighlight"
                          style={{
                            background: 'linear-gradient(135deg, #544BC2 0%, #3a32a8 100%)',
                            boxShadow: '0 4px 12px rgba(84, 75, 194, 0.4)',
                          }}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* === SECTIONS === */}
          {sections.map((section) => (
            <motion.section
              key={section}
              id={section}
              className="mb-16 scroll-mt-36"
              variants={sectionVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h2
                className="relative text-2xl font-bold mb-8"
                style={{ color: '#1f2937' }}
                variants={sectionVariant}
              >
                {section}
              </motion.h2>

              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={cardContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                {(catalogData as CatalogData).sections[section].packages.map((pkg: Package, idx: number) => (
                  <motion.div
                    key={idx}
                    className={`relative rounded-2xl p-6 transition-all duration-300 ${pkg.popular
                      ? 'text-white shadow-2xl'
                      : 'bg-white shadow-lg hover:shadow-xl'
                    }`}
                    style={{
                      background: pkg.popular
                        ? 'linear-gradient(135deg, #544BC2 0%, #3a32a8 100%)'
                        : undefined,
                      border: pkg.popular ? '1px solid #544BC2' : '1px solid #e5e7eb',
                    }}
                    variants={cardVariant}
                  >
                    {pkg.popular && (
                      <div
                        className="absolute -top-3 right-6 text-white text-xs font-bold px-4 py-1 rounded-full"
                        style={{ backgroundColor: '#544BC2' }}
                      >
                        Popular choice
                      </div>
                    )}
                    <div className={`flex items-center gap-2 mb-3 ${pkg.popular ? 'text-purple-200' : ''}`} style={{ color: pkg.popular ? undefined : '#544BC2' }}>
                      <Star className="w-5 h-5 fill-current" />
                      <h3 className="text-xl font-bold">{pkg.name}</h3>
                    </div>
                    {pkg.subtitle && (
                      <p className={`text-sm mb-5 italic ${pkg.popular ? 'text-purple-200' : 'text-gray-600'}`}>
                        {pkg.subtitle}
                      </p>
                    )}

                    <Link href='/contact'>
                      <button
                        className="w-full font-bold py-3 rounded-full transition-all duration-200 mb-6 cursor-pointer"
                        style={{
                          backgroundColor: 'white',
                          color: '#544BC2',
                          border: `2px solid ${pkg.popular ? 'white' : '#544BC2'}`,
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f0ff'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'white'}
                      >
                        Book a call
                      </button>
                    </Link>

                    <ul className="space-y-3">
                      {pkg.features.map((feature: string, fIdx: number) => (
                        <li key={fIdx} className={`flex items-start gap-3 text-sm ${pkg.popular ? 'text-purple-100' : 'text-gray-700'}`}>
                          <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: pkg.popular ? '#a0a0ff' : '#544BC2' }} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          ))}

          {/* === OUR PROCESS === */}
          <motion.section
            id="OUR PROCESS"
            className="mb-16 scroll-mt-36"
            variants={sectionVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h2 className="text-2xl font-bold mb-8" style={{ color: '#1f2937' }} variants={sectionVariant}>
              {(catalogData as CatalogData).process.title}
            </motion.h2>

            <motion.ol className="space-y-4 max-w-3xl mx-auto" variants={cardContainer}>
              {(catalogData as CatalogData).process.steps.map((step: string, idx: number) => (
                <motion.li
                  key={idx}
                  className="flex items-start gap-4 p-5 bg-white rounded-xl shadow-md border-l-4"
                  style={{ borderLeftColor: '#544BC2' }}
                  variants={stepVariant}
                >
                  <span className="font-bold text-lg flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-white" style={{ backgroundColor: '#544BC2' }}>
                    {idx + 1}
                  </span>
                  <span className="text-gray-700 leading-relaxed">{step.replace(/^\d+\.\s*/, '')}</span>
                </motion.li>
              ))}
            </motion.ol>
          </motion.section>

        </div>
      </div>
    </>
  );
}