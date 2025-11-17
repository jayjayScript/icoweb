"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import logo from "@/assets/icoweb logo_/ICOWEB Logo 4.png"
import Link from "next/link";
import { navLinks } from "./constant";
import { motion } from 'framer-motion';

const Footer = () => {

  const socials = [
    {
      icon: "basil:instagram-solid",
      url: "https://www.instagram.com/icowebagency?igsh=eXd6eGd2dzFwbnM4&utm_source=qr"
    },
    {
      icon: "garden:twitter-fill-16",
      url: "https://x.com/icowebagency"
    },
    {
      icon: "ph:linkedin-logo-fill",
      url: "https://www.linkedin.com/company/icowebagencyn/"
    },
    {
      icon: "streamline:facebook-1-solid",
      url: "https://www.facebook.com/share/171W8SGDCT/?mibextid=wwXIfr"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
    hover: { scale: 1.2, transition: { duration: 0.3 } }
  };

  const linkVariants = {
    hover: { scale: 1.05, color: "#FFFFFF", transition: { duration: 0.3 } }
  };

  return (
    <motion.footer 
      className="relative bg-[#544BC2] text-white overflow-hidden mt-16 sm:mt-20 md:mt-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-[90%] sm:max-w-[85%] mx-auto flex flex-col md:flex-row justify-between pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-10">
        {/* LEFT SECTION */}
        <motion.div 
          className="flex-[2] mb-10 md:mb-0 md:pr-8 lg:pr-12"
          variants={childVariants}
        >
          {/* Logo + Brand */}
          <motion.div 
            className="flex items-center gap-2 mb-5 sm:mb-6"
            variants={childVariants}
          >
            <div className="w-full">
              <Image src={logo} width={42} height={26} alt="logo" className="w-[100px]" unoptimized />
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="space-y-2 text-[14px] sm:text-[15px] md:text-base font-normal"
            variants={childVariants}
          >
            <p>
              <span className="font-bold">Email:</span>{' '}
              <motion.a 
                href="mailto:icowebagency@gmail.com" 
                className="hover:underline"
                variants={linkVariants}
                whileHover="hover"
              >
                icowebagency@gmail.com
              </motion.a>
            </p>
            <p>
              <span className="font-bold">Phone:</span>{' '}
              <motion.a 
                href="tel:+2347030850395" 
                className="hover:underline"
                variants={linkVariants}
                whileHover="hover"
              >
                +2347030850395
              </motion.a>
              {' | '}
              <motion.a 
                href="tel:+2348183819437" 
                className="hover:underline"
                variants={linkVariants}
                whileHover="hover"
              >
                +2348183819437
              </motion.a>
            </p>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            className="flex items-center gap-3 sm:gap-4 mt-5 sm:mt-6"
            variants={childVariants}
          >
            {socials.map((item, index) => (
              <motion.div
                key={index}
                variants={socialVariants}
                whileHover="hover"
              >
                <Link href={item.url}
                  target="_blank"
                  className="flex items-center justify-center"
                >
                  <Icon
                    icon={item.icon}
                    width={22}
                    height={22}
                    className={`sm:w-6 sm:h-6 ${item.icon === "garden:twitter-fill-16" ? "scale-90" : ""}`}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Copyright + Links */}
          <motion.div 
            className="mt-6 sm:mt-8 text-[13px] sm:text-[14px] md:text-base text-[#FFFFFFCC] space-y-2 sm:space-y-3"
            variants={childVariants}
          >
            <p>© 2025 Icoweb. All rights reserved.</p>
            <div className="flex items-center gap-3 sm:gap-4 text-gray-300 flex-wrap">
              <motion.div variants={linkVariants} whileHover="hover">
                <Link href="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div variants={linkVariants} whileHover="hover">
                <Link href="/terms" className="hover:underline">
                  Terms of Service
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div 
          className="flex flex-col sm:flex-row md:flex-row items-start justify-between flex-1 gap-8 sm:gap-10 md:gap-8 lg:gap-10"
          variants={childVariants}
        >
          {/* COMPANY LINKS */}
          <motion.div 
            className="text-[14px] sm:text-[15px] md:text-base"
            variants={childVariants}
          >
            <h4 className="font-medium mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 text-[#FFFFFFCC]">
              {navLinks.map(
                (link, index) => (
                  <motion.li 
                    key={index}
                    variants={childVariants}
                  >
                    <motion.div variants={linkVariants} whileHover="hover">
                      <Link href={link.link} className="hover:underline">
                        {link.name}
                      </Link>
                    </motion.div>
                  </motion.li>
                )
              )}
            </ul>
          </motion.div>

          {/* SERVICES LINKS */}
          <motion.div 
            className="text-[14px] sm:text-[15px] md:text-base"
            variants={childVariants}
          >
            <h4 className="font-medium mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 text-[#FFFFFFCC]">
              {[
                "Mobile app design & development",
                "Web design & development",
                "Web app development",
                "Bug fixing",
              ].map((service) => (
                <motion.li 
                  key={service}
                  variants={childVariants}
                >
                  <motion.div variants={linkVariants} whileHover="hover">
                    <Link href="#" className="hover:underline">
                      {service}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* BACKGROUND TEXT */}
      <motion.h1 
        className="text-[95px] sm:text-[80px] md:text-[140px] lg:text-[200px] xl:text-[272.45px] h-[69px] sm:h-[60px] md:h-[100px] lg:h-[145px] xl:h-[196px] text-center leading-[100%] font-semibold select-none pointer-events-none bg-gradient-to-t from-[#FFFFFF80] to-[#FFFFFF] bg-clip-text text-transparent mb-0 pb-0"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        viewport={{ once: true }}
      >
        ICOWEB
      </motion.h1>
    </motion.footer>
  );
};

export default Footer;