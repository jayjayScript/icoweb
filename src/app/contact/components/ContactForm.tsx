"use client"
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'E-commerce Solutions',
    'Custom Software',
    'Consulting'
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    alert('Message sent successfully!');
  };

  return (
    <section className="w-full py-12 px-4 md:px-8 relative">
      <div className="max-w-[663px] mx-auto bg-[#fff] py-[32px] px-[18px] border-[0.8px] border-[#1212120F] rounded-lg">
        <div className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all border-[1px] border-[#12121214]"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all border-[1px] border-[#12121214]"
            />
          </div>

          {/* Service Dropdown */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              What service are you interested in
            </label>
            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer text-gray-500 border-[1px] border-[#12121214]"
              >
                <option value="">Select project type</option>
                {services.map((service, index) => (
                  <option key={index} value={service} className="text-gray-900">
                    {service}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="#6B7280" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all border-[1px] border-[#12121214]"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-[#544BC2] hover:bg-indigo-700 text-white font-medium py-[13px] rounded-lg transition-colors duration-200 shadow-md"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}