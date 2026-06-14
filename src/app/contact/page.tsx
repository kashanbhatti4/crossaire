import React from "react";
import BookingForm from "@/components/BookingForm";
import CoverageMap from "@/components/CoverageMap";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Contact Crossaire | Commercial Kitchen Exhaust & Safety",
  description: "Get in touch with Crossaire. Request a proposal for certified commercial kitchen exhaust hood cleaning, grease trap extraction, and fan repairs in MD, DC, and VA.",
  keywords: "contact crossaire, kitchen hood cleaning quote, restaurant exhaust cleaning contact, commercial kitchen safety maryland",
};

export default function ContactPage() {
  return (
    <div className="bg-[#0C1A2B] min-h-screen">
      {/* JSON-LD Schema Markup */}
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
              "telephone": "866-399-2885",
              "email": "info@crossaire.com",
              "image": "https://crossaire.vercel.app/media/images/logo.png",
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
            Have questions about code compliance or need a rapid proposal? We are available 24/7/365 to support your commercial kitchen safety needs.
          </p>
        </div>
      </section>

      {/* 2. DIRECT CHANNEL DETAILS & BOOKING FORM GRID */}
      <section className="py-24 px-6 bg-white border-t border-border-stroke">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 flex flex-col justify-center animate-on-scroll">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-3">
              (Connect Instantly)
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary-text mb-6">
              Establish Direct Contact
            </h2>
            <p className="text-body-text text-base md:text-lg leading-relaxed mb-10">
              Reach our dispatch coordinators, service technicians, or administration office directly. We guarantee prompt responses and professional assistance.
            </p>

            <div className="grid grid-cols-1 gap-6">
              {/* Phone info card */}
              <div className="bg-main-bg border border-border-stroke rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0">
                    <i className="fa-solid fa-phone-volume"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-text mb-1">Phone Line (24/7 Service)</h3>
                    <p className="text-body-text text-sm mb-3">Call our dispatch team for scheduling, proposals, or emergency requests.</p>
                    <a href="tel:8663992885" className="text-accent font-extrabold text-lg hover:underline inline-flex items-center gap-1.5">
                      866-399-2885
                      <i className="fa-solid fa-arrow-right-long text-xs"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Email info card */}
              <div className="bg-main-bg border border-border-stroke rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0">
                    <i className="fa-solid fa-envelope-open-text"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-text mb-1">Email Address</h3>
                    <p className="text-body-text text-sm mb-3">Send project details, compliance audit papers, or RFP documents.</p>
                    <a href="mailto:info@crossaire.com" className="text-accent font-extrabold text-lg hover:underline inline-flex items-center gap-1.5">
                      info@crossaire.com
                      <i className="fa-solid fa-arrow-right-long text-xs"></i>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours info card */}
              <div className="bg-main-bg border border-border-stroke rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-4 items-start">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl shrink-0">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-text mb-1">Operational Hours</h3>
                    <p className="text-body-text text-sm leading-relaxed">
                      <strong>Scheduled Cleanings:</strong> 24/7/365 (After-hours & closed-hours)<br />
                      <strong>Office Hours:</strong> Monday - Friday: 8:00 AM - 6:00 PM<br />
                      <strong>Emergency Dispatch:</strong> Available 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div id="booking-form-section" className="lg:col-span-7 w-full lg:sticky lg:top-24 animate-on-scroll">
            <div className="bg-[#0C1A2B] rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden text-white border border-white/5">
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/5 blur-[80px] -z-10"></div>
              <div className="mb-8">
                <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-2">
                  (Send A Message)
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Request Proposal or Info</h2>
                <p className="text-white/70 text-sm mt-2">Fill out the fields below, and our commercial safety team will compile a proposal or contact you within 24 hours.</p>
              </div>
              <BookingForm />
            </div>
          </div>

        </div>
      </section>

      {/* 3. COVERAGE MAP SECTION */}
      <CoverageMap />

      {/* Scroll Reveal Animation Trigger */}
      <ScrollReveal />
    </div>
  );
}
