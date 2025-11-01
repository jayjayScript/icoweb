"use client"

import React, { useState } from 'react';
import { Icon } from '@iconify/react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    service: '',
    message: ''
  });

  const [toast, setToast] = useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    show: false,
    type: 'success',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'E-commerce Solutions',
    'Custom Software',
    'Consulting'
  ];

  const showToast = (type: 'success' | 'error', message: string) => {
    setToast({ show: true, type, message });
    setTimeout(() => {
      setToast({ show: false, type, message: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    if (response.ok) {
      showToast('success', 'Message sent successfully! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', whatsapp: '', service: '', message: '' });
    } else {
      console.error(result);
      showToast('error', result.error || 'Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error(error);
    showToast('error', 'Something went wrong. Please try again later.');
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <section className="relative w-full py-12 px-4 md:px-8">
      {/* Custom Toast Notification */}
      <div
        className={`fixed top-6 right-6 z-50 transition-all duration-300 transform ${
          toast.show ? 'translate-x-0 opacity-100' : 'translate-x-[400px] opacity-0'
        }`}
      >
        <div
          className={`flex items-start gap-3 min-w-[320px] max-w-md p-4 rounded-xl shadow-2xl ${
            toast.type === 'success'
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}
        >
          <div className="flex-shrink-0 mt-0.5">
            {toast.type === 'success' ? (
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Icon icon="mdi:check" className="text-white" width="16" />
              </div>
            ) : (
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <Icon icon="mdi:close" className="text-white" width="16" />
              </div>
            )}
          </div>
          <div className="flex-1">
            <h4 className={`font-semibold text-sm mb-1 ${
              toast.type === 'success' ? 'text-green-900' : 'text-red-900'
            }`}>
              {toast.type === 'success' ? 'Success!' : 'Error'}
            </h4>
            <p className={`text-sm ${
              toast.type === 'success' ? 'text-green-700' : 'text-red-700'
            }`}>
              {toast.message}
            </p>
          </div>
          <button
            onClick={() => setToast({ ...toast, show: false })}
            className={`flex-shrink-0 ${
              toast.type === 'success' ? 'text-green-500 hover:text-green-700' : 'text-red-500 hover:text-red-700'
            }`}
          >
            <Icon icon="mdi:close" width="20" />
          </button>
        </div>
      </div>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 bg-[#FFFFFF] py-[32px] px-[12px] border-[0.8px] border-[#1212120F] rounded-[8px]">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* WhatsApp Number */}
          <div>
            <label htmlFor="email" className="block text-sm text-gray-700 mb-2">
              WhatsApp Number
            </label>
            <input
              type="whatsapp"
              id="whatsapp"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Service Dropdown */}
          <div>
            <label htmlFor="service" className="block text-sm text-gray-700 mb-2">
              What service are you interested in
            </label>
            <div className="relative">
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all cursor-pointer text-gray-500"
                required
                disabled={isSubmitting}
              >
                <option value="">Select project type</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
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
            <label htmlFor="message" className="block text-sm text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 bg-gray-50 border-none rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#544BC2] hover:bg-indigo-500 text-white font-medium py-4 rounded-xl transition-colors duration-200 shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Icon icon="mdi:loading" className="animate-spin" width="20" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  );
}