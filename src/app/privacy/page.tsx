import React from 'react'

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#544BC2] to-[#6B5DD3] text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            Last Updated: October 23, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed mb-8">
            Thank you for choosing ICOWEB (&ldquo;we,&ldquo; &ldquo;our,&ldquo; or &ldquo;us&ldquo;). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or communicate with us.
          </p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#121212] mb-6">
              1. Information We Collect
            </h2>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-medium text-[#121212] mb-4">
                1.1 Personal Information
              </h3>
              <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed mb-3">
                We may collect personal information that you voluntarily provide, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#121212CC] text-base sm:text-lg">
                <li>Name, email address, phone number, and company name</li>
                <li>Project requirements and business information</li>
                <li>Payment information (processed through secure third-party payment processors)</li>
                <li>Communications and correspondence with us</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-medium text-[#121212] mb-4">
                1.2 Automatically Collected Information
              </h3>
              <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed mb-3">
                When you visit our website, we may automatically collect:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#121212CC] text-base sm:text-lg">
                <li>IP address and device information</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring website</li>
                <li>Pages viewed and time spent</li>
                <li>Geographic location (country/city level)</li>
                <li>Other standard web analytics data</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl sm:text-2xl font-medium text-[#121212] mb-4">
                1.3 Cookies and Tracking Technologies
              </h3>
              <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed mb-3">
                We use cookies and similar tracking technologies to:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#121212CC] text-base sm:text-lg">
                <li>Enhance your browsing experience</li>
                <li>Analyze website usage</li>
                <li>Personalize content</li>
                <li>Remember your preferences</li>
                <li>Facilitate site functionality</li>
              </ul>
              <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed mt-3">
                You can modify your browser settings to decline cookies, but this may affect website functionality.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#121212] mb-6">
              2. How We Use Your Information
            </h2>
            <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed mb-3">
              We use your information for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#121212CC] text-base sm:text-lg">
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send transaction notifications</li>
              <li>Respond to inquiries and provide customer support</li>
              <li>Send administrative information</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Protect against unauthorized access and legal liability</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#121212] mb-6">
              3. Information Sharing and Disclosure
            </h2>
            <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed mb-4">
              We may share your information in the following situations:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#121212] mb-3">
                  3.1 With Your Consent
                </h3>
                <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed">
                  We may share information with third parties when you consent to such sharing.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#121212] mb-3">
                  3.2 Service Providers
                </h3>
                <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed">
                  We may share information with third-party vendors and service providers who perform services on our behalf, such as hosting, data analysis, payment processing, and customer service.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#121212] mb-3">
                  3.3 Business Transfers
                </h3>
                <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed">
                  If we are involved in a merger, acquisition, financing, or sale of assets, your information may be transferred as part of that transaction.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-medium text-[#121212] mb-3">
                  3.4 Legal Requirements
                </h3>
                <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed">
                  We may disclose your information if required to do so by law or in response to valid legal requests.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#121212] mb-6">
              4. Data Security
            </h2>
            <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed">
              We implement appropriate technical and organizational measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#121212] mb-6">
              5. Data Retention
            </h2>
            <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed">
              We retain your personal information for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
            </p>
          </section>

          {/* Section 6 */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#121212] mb-6">
              6. Your Rights and Choices
            </h2>
            <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#121212CC] text-base sm:text-lg">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate information</li>
              <li><strong>Deletion:</strong> Request deletion of your information</li>
              <li><strong>Objection:</strong> Object to the processing of your information</li>
              <li><strong>Restriction:</strong> Request restriction of processing</li>
              <li><strong>Portability:</strong> Request transfer of your information</li>
              <li><strong>Withdrawal of consent:</strong> Withdraw consent where processing is based on consent</li>
            </ul>
            <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed mt-4">
              To exercise these rights, please contact us at <a href="mailto:privacy@icoweb.com" className="text-[#544BC2] hover:underline">privacy@icoweb.com</a>.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#121212] mb-6">
              7. International Data Transfers
            </h2>
            <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed">
              We are based in Nigeria and may process, store, and transfer information in Nigeria and other countries. By using our services, you consent to this transfer of your information.
            </p>
          </section>

          {/* Section 8 */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#121212] mb-6">
              8. Children&apos;s Privacy
            </h2>
            <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
            </p>
          </section>

          {/* Section 9 */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#121212] mb-6">
              9. Third-Party Links
            </h2>
            <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites.
            </p>
          </section>

          {/* Section 10 */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#121212] mb-6">
              10. Changes to This Privacy Policy
            </h2>
            <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website or sending you an email.
            </p>
          </section>

          {/* Section 11 */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#121212] mb-6">
              11. Project Confidentiality
            </h2>
            <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed mb-4">
              We understand the sensitive nature of development projects. All project details, source code, design assets, and business information shared with us are treated as strictly confidential. We implement:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#121212CC] text-base sm:text-lg">
              <li>Confidentiality agreements with all team members</li>
              <li>Secure development environments</li>
              <li>Restricted access protocols for client projects</li>
              <li>Secure file transfer methods</li>
            </ul>
          </section>

          {/* Section 12 - Contact */}
          <section className="mb-12 bg-[#F7F7F7] rounded-2xl p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#121212] mb-6">
              12. Contact Us
            </h2>
            <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed mb-4">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
            <div className="space-y-2 text-[#121212] text-base sm:text-lg">
              <p className="font-semibold">ICOWEB</p>
              <p>Okahia Estate, East West Road</p>
              <p>Port Harcourt, Rivers, Nigeria</p>
              <p>
                Email: <a href="mailto:icowebagency@gmail.com" className="text-[#544BC2] hover:underline">icowebagency@gmail.com</a>
              </p>
              <p>
                Phone: <a href="tel:+2347030850395" className="text-[#544BC2] hover:underline">+234 703 085 0395</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default page