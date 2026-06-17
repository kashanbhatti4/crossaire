import React from "react";
import BookingForm from "@/components/BookingForm";
import CoverageMap from "@/components/CoverageMap";
import ScrollReveal from "@/components/ScrollReveal";
import LocalFAQItem from "@/components/LocalFAQItem";

export const metadata = {
  title: "Contact Crossaire | Commercial Kitchen Exhaust & Safety",
  description: "Get in touch with Crossaire. Request a quote for certified commercial kitchen exhaust hood cleaning, grease trap extraction, and fan repairs in MD, DC, and VA.",
  keywords: "contact crossaire, kitchen hood cleaning quote, restaurant exhaust cleaning contact, commercial kitchen safety maryland",
};

export default function ContactPage() {
  return (
    <div className="bg-[#0C1A2B] min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Crossaire",
            "description": "Get in touch with Crossaire for professional NFPA 96 certified kitchen hood and exhaust cleaning, grease trap extraction, and fan repairs across MD, DC, and VA.",
            "url": "https://crossaire.vercel.app/contact",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Crossaire",
              "telephone": "571-723-1406",
              "email": "info@crossaire.com",
              "image": "https://crossaire.vercel.app/media/images/logo.webp",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Glen Burnie",
                "addressRegion": "MD",
                "addressCountry": "US"
              },
              "areaServed": [
                { "@type": "AdministrativeArea", "name": "Maryland" },
                { "@type": "AdministrativeArea", "name": "Washington DC" },
                { "@type": "AdministrativeArea", "name": "Virginia" }
              ],
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              }
            }
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How fast can I get a cleaning quote?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We compile and deliver custom service quotes within 24 hours of your inquiry. For standard operations, we can often generate a quote directly using photos of your hood setup and duct run."
                }
              },
              {
                "@type": "Question",
                "name": "Do you charge for site inspections or walkthroughs?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. All initial walkthroughs, consultations, and code compliance inspections are 100% free of charge with no obligation."
                }
              },
              {
                "@type": "Question",
                "name": "How do I schedule service to avoid disrupting my kitchen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All of our cleanings are performed during your closed hours (typically overnight or early morning) so there is zero interruption to your prep lines, staff, or business operations."
                }
              },
              {
                "@type": "Question",
                "name": "Are you certified to issue official compliance stickers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We are NFPA 96 certified commercial kitchen exhaust cleaning specialists. Upon completing service, we apply an official dated certification sticker directly to the hood canopy for fire marshal inspections."
                }
              },
              {
                "@type": "Question",
                "name": "What if I have an emergency grease trap overflow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We provide 24/7/365 emergency dispatch services across Maryland, Washington DC, and Virginia. Call our direct line at 571-723-1406 for immediate scheduling."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide photo documentation of the clean?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We deliver a complete digital report containing before-and-after photographs of the hood canopy, filters, ductwork, and exhaust fan for your compliance records."
                }
              }
            ]
          })
        }}
      />


      {/* 1. HERO SECTION (Dark theme) */}
      <section className="relative text-white pt-36 pb-20 px-6 overflow-hidden">
        {/* Accent Glow background blur */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-[120px]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-[120px]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-sm uppercase tracking-wider font-extrabold text-accent block mb-3">
            (Contact Us)
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
            Get in Touch with Our <span className="text-accent">Safety Experts</span>
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Have questions about code compliance or need a rapid quote? We are available 24/7/365 to support your commercial kitchen safety needs.
          </p>
        </div>
      </section>

      {/* 2. DIRECT CHANNEL DETAILS & BOOKING FORM GRID */}
      <section className="py-24 px-6 bg-white border-t border-border-stroke">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Dark Navy Info Block */}
          <div className="lg:col-span-5 flex flex-col justify-center animate-on-scroll bg-[#0C1A2B] rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden text-white border border-white/5">
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/5 blur-[80px] -z-10"></div>
            
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-3">
              (Connect Instantly)
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Establish Direct Contact
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">
              Reach our dispatch coordinators, service technicians, or administration office directly. We guarantee prompt responses and professional assistance.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {/* Phone info card */}
              <div className="bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl p-6 shadow-sm transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Phone Line (24/7 Service)</h3>
                    <p className="text-white/60 text-xs mb-3 leading-relaxed">Call our dispatch team for scheduling, quotes, or emergency requests.</p>
                    <a href="tel:5717231406" className="text-accent font-extrabold text-lg hover:underline inline-flex items-center gap-1.5 transition-all">
                      571-723-1406
                      <i className="fa-solid fa-arrow-right-long text-xs"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email info card */}
              <div className="bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl p-6 shadow-sm transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0">
                    <i className="fa-solid fa-envelope-open-text"></i>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Email Address</h3>
                    <p className="text-white/60 text-xs mb-3 leading-relaxed">Send project details, compliance audit papers, or RFP documents.</p>
                    <a href="mailto:info@crossaire.com" className="text-accent font-extrabold text-lg hover:underline inline-flex items-center gap-1.5 transition-all">
                      info@crossaire.com
                      <i className="fa-solid fa-arrow-right-long text-xs"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours info card */}
              <div className="bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl p-6 shadow-sm transition-all duration-300">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1">Operational Hours</h3>
                    <p className="text-white/60 text-xs leading-relaxed">
                      <strong className="text-white">Scheduled Cleanings:</strong> 24/7/365 (Closed-hours)<br />
                      <strong className="text-white">Office Hours:</strong> Mon - Fri: 8:00 AM - 6:00 PM<br />
                      <strong className="text-white">Emergency Dispatch:</strong> Available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Booking Form (Directly on white bg) */}
          <div id="booking-form-section" className="lg:col-span-7 w-full lg:sticky lg:top-24 animate-on-scroll">
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-2">
                (Send A Message)
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-primary-text">Request Quote or Info</h2>
              <p className="text-body-text text-sm mt-2">Fill out the fields below, and our commercial safety team will compile a quote or contact you within 24 hours.</p>
            </div>
            <BookingForm />
          </div>

        </div>
      </section>

      {/* 3. COVERAGE MAP SECTION */}
      <CoverageMap />

      {/* 4. FREQUENTLY ASKED QUESTIONS (FAQs) */}
      <section id="faqs" className="py-24 px-6 bg-[#F4F6F8] border-t border-b border-border-stroke animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center flex flex-col items-center mb-16">
            <span className="subtitle-badge">(GOT QUESTIONS?)</span>
            <h2 className="text-3xl md:text-[44px] font-extrabold tracking-tight text-primary-text leading-[1.2] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-3xl mx-auto">
              Find answers to scheduling, consultations, quotes, and compliance operations:
            </p>
          </div>

          {/* FAQ Accordion Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
            <div className="flex flex-col gap-4">
              <LocalFAQItem question="How fast can I get a cleaning quote?">
                We compile and deliver custom service quotes within 24 hours of your inquiry. For standard operations, we can often generate a quote directly using photos of your hood setup and duct run.
              </LocalFAQItem>

              <LocalFAQItem question="Do you charge for site inspections or walkthroughs?">
                No. All initial walkthroughs, consultations, and code compliance inspections are 100% free of charge with no obligation.
              </LocalFAQItem>

              <LocalFAQItem question="How do I schedule service to avoid disrupting my kitchen?">
                All of our cleanings are performed during your closed hours (typically overnight or early morning) so there is zero interruption to your prep lines, staff, or business operations.
              </LocalFAQItem>
            </div>

            <div className="flex flex-col gap-4">
              <LocalFAQItem question="Are you certified to issue official compliance stickers?">
                Yes. We are NFPA 96 certified commercial kitchen exhaust cleaning specialists. Upon completing service, we apply an official dated certification sticker directly to the hood canopy for fire marshal inspections.
              </LocalFAQItem>

              <LocalFAQItem question="What if I have an emergency grease trap overflow?">
                We provide 24/7/365 emergency dispatch services across Maryland, Washington DC, and Virginia. Call our direct line at 571-723-1406 for immediate scheduling.
              </LocalFAQItem>

              <LocalFAQItem question="Do you provide photo documentation of the clean?">
                Yes. We deliver a complete digital report containing clear before-and-after photographs of the hood canopy, filters, ductwork, and exhaust fan for your compliance records.
              </LocalFAQItem>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll Reveal Animation Trigger */}
      <ScrollReveal />
    </div>
  );
}
