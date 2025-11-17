"use client"

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from "framer-motion";

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
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
        showToast(
          'success',
          "Message sent successfully! We'll get back to you soon."
        );
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

      {/* ========================================================= */}
      {/* 💬 Framer Motion Toast Animation                        */}
      {/* ========================================================= */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-6 right-6 z-50"
          >
            <div
              className={`flex items-start gap-3 min-w-[320px] max-w-md p-4 rounded-xl shadow-2xl ${
                toast.type === 'success'
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
              }`}
            >
              <div className="flex-shrink-0 mt-0.5">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className={`w-6 h-6 ${
                    toast.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                  } rounded-full flex items-center justify-center`}
                >
                  <Icon
                    icon={toast.type === 'success' ? 'mdi:check' : 'mdi:close'}
                    className="text-white"
                    width="16"
                  />
                </motion.div>
              </div>

              <div className="flex-1">
                <h4
                  className={`font-semibold text-sm mb-1 ${
                    toast.type === 'success' ? 'text-green-900' : 'text-red-900'
                  }`}
                >
                  {toast.type === 'success' ? 'Success!' : 'Error'}
                </h4>
                <p
                  className={`text-sm ${
                    toast.type === 'success' ? 'text-green-700' : 'text-red-700'
                  }`}
                >
                  {toast.message}
                </p>
              </div>

              <button
                onClick={() => setToast({ ...toast, show: false })}
                className={`flex-shrink-0 ${
                  toast.type === 'success'
                    ? 'text-green-500 hover:text-green-700'
                    : 'text-red-500 hover:text-red-700'
                }`}
              >
                <Icon icon="mdi:close" width="20" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* 🧾 Form with Fade-Up Animation                           */}
      {/* ========================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#FFFFFF] py-[32px] px-[12px] border-[0.8px] border-[#1212120F] rounded-[8px]"
        >
          {/* Fields */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              disabled={isSubmitting}
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              disabled={isSubmitting}
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">WhatsApp Number</label>
            <input
              type="text"
              name="whatsapp"
              required
              disabled={isSubmitting}
              value={formData.whatsapp}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">
              What service are you interested in
            </label>
            <div className="relative">
              <select
                name="service"
                required
                disabled={isSubmitting}
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-50 rounded-lg appearance-none focus:ring-2 focus:ring-indigo-500 outline-none text-gray-500"
              >
                <option value="">Select project type</option>
                {services.map((service, i) => (
                  <option key={i} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1L6 6L11 1" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              disabled={isSubmitting}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-50 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
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
              "Send Message"
            )}
          </button>
        </form>
      </motion.div>
    </section>
  );
}
