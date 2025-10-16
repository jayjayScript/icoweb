"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import logo from "@/assets/footer-logo.png"

const Footer = () => {
  return (
    <footer className="relative bg-[#544BC2] text-white overflow-hidden mt-24">
      <div className="max-w-[85%] mx-auto flex flex-col md:flex-row justify-between pt-20 md:pt-24 pb-10">
        {/* LEFT SECTION */}
        <div className="flex-[2] mb-10 md:mb-0">
          {/* Logo + Brand */}
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-white rounded-full">
              <Image src={logo} width={42} height={26} alt="logo"/>
            </div>
            <h2 className="text-[20.48px] font-semibold">ICOWEB</h2>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-base font-normal">
            <p>
              <span className="font-bold">Address:</span> City, Country
            </p>
            <p>
              <span className="font-bold">Email:</span> hello@icoweb.com
            </p>
            <p>
              <span className="font-bold">Phone:</span> +234 XXX XXX XXXX
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            {[
              "basil:instagram-solid",
              "ph:tiktok-logo-fill",
              "garden:twitter-fill-16",
              "ph:linkedin-logo-fill",
            ].map((icon, index) => (
              <div
                key={index}
                className="flex items-center justify-center"
              >
                <Icon
                  icon={icon}
                  width={24}
                  height={24}
                  className={icon === "garden:twitter-fill-16" ? "scale-90" : ""}
                />
              </div>
            ))}
          </div>

          {/* Copyright + Links */}
          <div className="mt-8 text-base text-[#FFFFFFCC] space-y-3">
            <p>© 2025 Icoweb. All rights reserved.</p>
            <div className="flex items-center gap-4 text-gray-300 flex-wrap">
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="hover:underline">
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col md:flex-row items-start justify-between flex-1 gap-10">
          {/* COMPANY LINKS */}
          <div className="text-base">
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-[#FFFFFFCC]">
              {["Home", "About", "Services", "Portfolio", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a href="#" className="hover:underline">
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* SERVICES LINKS */}
          <div className="text-base">
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-[#FFFFFFCC]">
              {[
                "Mobile app design & development",
                "Web design & development",
                "Web app development",
                "Bug fixing",
              ].map((service) => (
                <li key={service}>
                  <a href="#" className="hover:underline">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BACKGROUND TEXT */}
      <h1 className="text-[64px] md:text-[272.45px] h-[45px] md:h-[196px] text-center leading-[100%] font-semibold select-none pointer-events-none bg-gradient-to-t from-[#FFFFFF80] to-[#FFFFFF] bg-clip-text text-transparent mb-0 pb-0">
        ICOWEB
      </h1>
    </footer>
  );
};

export default Footer;
