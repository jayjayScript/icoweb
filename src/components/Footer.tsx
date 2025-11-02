"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import logo from "@/assets/icoweb logo_/ICOWEB Logo 4.png"
import Link from "next/link";
import { navLinks } from "./constant";

const Footer = () => {

  const socials = [
    {
      icon: "basil:instagram-solid",
      link: "https://www.instagram.com/icowebagency?igsh=eXd6eGd2dzFwbnM4&utm_source=qr"
    },
    {
      icon: "garden:twitter-fill-16",
      link: "https://x.com/icowebagency"
    },
    {
      icon: "ph:linkedin-logo-fill",
      link: "https://www.linkedin.com/company/icowebagencyn/"
    },
    {
      icon: "streamline:facebook-1-solid",
      link: "https://www.facebook.com/share/171W8SGDCT/?mibextid=wwXIfr"
    }
  ]

  return (
    <footer className="relative bg-[#544BC2] text-white overflow-hidden mt-16 sm:mt-20 md:mt-24">
      <div className="max-w-[90%] sm:max-w-[85%] mx-auto flex flex-col md:flex-row justify-between pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-10">
        {/* LEFT SECTION */}
        <div className="flex-[2] mb-10 md:mb-0 md:pr-8 lg:pr-12">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2 mb-5 sm:mb-6">
            <div className="w-full">
              <Image src={logo} width={42} height={26} alt="logo" className="w-[100px]" unoptimized />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-[14px] sm:text-[15px] md:text-base font-normal">
            <p>
              <span className="font-bold">Email:</span>{' '}
              <a href="mailto:icowebagency@gmail.com" className="hover:underline">
                icowebagency@gmail.com
              </a>
            </p>
            <p>
              <span className="font-bold">Phone:</span>{' '}
              <a href="tel:+2347030850395" className="hover:underline">
                +2347030850395
              </a>
              {' | '}
              <a href="tel:+2348183819437" className="hover:underline">
                +2348183819437
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3 sm:gap-4 mt-5 sm:mt-6">
            {socials.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <Icon
                  icon={item.icon}
                  width={22}
                  height={22}
                  className={`sm:w-6 sm:h-6 ${item.icon === "garden:twitter-fill-16" ? "scale-90" : ""}`}
                />
              </div>
            ))}
          </div>

          {/* Copyright + Links */}
          <div className="mt-6 sm:mt-8 text-[13px] sm:text-[14px] md:text-base text-[#FFFFFFCC] space-y-2 sm:space-y-3">
            <p>© 2025 Icoweb. All rights reserved.</p>
            <div className="flex items-center gap-3 sm:gap-4 text-gray-300 flex-wrap">
              <Link href="/privacy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col sm:flex-row md:flex-row items-start justify-between flex-1 gap-8 sm:gap-10 md:gap-8 lg:gap-10">
          {/* COMPANY LINKS */}
          <div className="text-[14px] sm:text-[15px] md:text-base">
            <h4 className="font-medium mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 text-[#FFFFFFCC]">
              {navLinks.map(
                (link, index) => (
                  <li key={index}>
                    <Link href={link.link} className="hover:underline">
                      {link.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SERVICES LINKS */}
          <div className="text-[14px] sm:text-[15px] md:text-base">
            <h4 className="font-medium mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 text-[#FFFFFFCC]">
              {[
                "Mobile app design & development",
                "Web design & development",
                "Web app development",
                "Bug fixing",
              ].map((service) => (
                <li key={service}>
                  <Link href="#" className="hover:underline">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BACKGROUND TEXT */}
      <h1 className="text-[95px] sm:text-[80px] md:text-[140px] lg:text-[200px] xl:text-[272.45px] h-[69px] sm:h-[60px] md:h-[100px] lg:h-[145px] xl:h-[196px] text-center leading-[100%] font-semibold select-none pointer-events-none bg-gradient-to-t from-[#FFFFFF80] to-[#FFFFFF] bg-clip-text text-transparent mb-0 pb-0">
        ICOWEB
      </h1>
    </footer>
  );
};

export default Footer;