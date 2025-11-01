import React from "react";

const page = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-[#544BC2] to-[#6B5DD3] text-white py-16 sm:py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-lg sm:text-xl text-white/90">
            Last Updated: October 23, 2025
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="prose prose-lg max-w-none">
          {/* Intro */}
          <p className="text-[#121212CC] text-base sm:text-lg leading-relaxed mb-8">
            These Terms of Service (&ldquo;Terms&ldquo;) govern your use of the website,
            services, and products offered by ICOWEB (&ldquo;we,&ldquo; &ldquo;our,&ldquo; or &ldquo;us&ldquo;). By
            accessing our website or using our services, you agree to be bound
            by these Terms. If you do not agree to these Terms, please do not
            use our services.
          </p>

          {/* Section 1 */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#121212] mb-6">
              1. Services
            </h2>

            <h3 className="text-xl font-medium text-[#121212] mb-3">
              1.1 Service Description
            </h3>
            <p className="text-[#121212CC] mb-3">
              ICOWEB provides digital design and development services,
              including but not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#121212CC]">
              <li>Website design and development</li>
              <li>Mobile app development</li>
              <li>UI/UX design</li>
              <li>E-commerce solutions</li>
              <li>Custom software development</li>
              <li>Consulting services</li>
            </ul>

            <h3 className="text-xl font-medium text-[#121212] mt-8 mb-3">
              1.2 Project Scope
            </h3>
            <p className="text-[#121212CC]">
              All projects require a clearly defined scope of work agreed upon
              in writing. Any work requested outside the agreed scope may
              require additional time and costs, which will be communicated
              before proceeding.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#121212] mb-6">
              2. Client Responsibilities
            </h2>

            <h3 className="text-xl font-medium text-[#121212] mb-3">
              2.1 Cooperation
            </h3>
            <p className="text-[#121212CC] mb-3">You agree to:</p>
            <ul className="list-disc pl-6 space-y-2 text-[#121212CC]">
              <li>Provide timely and accurate information required for project completion</li>
              <li>Review and provide feedback on deliverables within agreed timeframes</li>
              <li>Designate a primary contact person with authority to make decisions</li>
              <li>Provide necessary access to systems, accounts, or resources as required</li>
            </ul>

            <h3 className="text-xl font-medium text-[#121212] mt-8 mb-3">
              2.2 Content
            </h3>
            <p className="text-[#121212CC] mb-3">
              You are responsible for providing all text, images, videos, and other content for your project, unless otherwise specified in the project agreement. You guarantee that all content provided:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#121212CC]">
              <li>Is owned by you, or you have permission to use it</li>
              <li>Does not infringe on the intellectual property rights of third parties</li>
              <li>Does not violate any applicable laws or regulations</li>
              <li>Does not contain malicious code or malware</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#121212] mb-6">
              3. Payment Terms
            </h2>
            <h3 className="text-xl font-medium text-[#121212] mb-3">3.1 Fees and Expenses</h3>
            <p className="text-[#121212CC] mb-3">
              Our fees will be outlined in a formal proposal or agreement. Unless otherwise stated:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#121212CC]">
              <li>All prices are quoted in Nigerian Naira (NGN)</li>
              <li>Additional expenses will be approved by you before being incurred</li>
            </ul>

            <h3 className="text-xl font-medium text-[#121212] mt-8 mb-3">3.2 Payment Schedule</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#121212CC]">
              <li>A 50% deposit is required to commence work</li>
              <li>The remaining balance is due upon project completion before final delivery</li>
              <li>For projects exceeding three months, monthly instalments may be arranged</li>
            </ul>

            <h3 className="text-xl font-medium text-[#121212] mt-8 mb-3">3.3 Late Payments</h3>
            <ul className="list-disc pl-6 space-y-2 text-[#121212CC]">
              <li>Suspension of ongoing work</li>
              <li>Late payment fee of 5% per month on outstanding amounts</li>
              <li>Withholding of deliverables until payment is received</li>
            </ul>
          </section>

          {/* Continue other sections exactly like above */}
          {/* To keep this message short, I can include the remaining sections (4–10) in the next message. */}

        </div>
      </div>
    </div>
  );
};

export default page;
