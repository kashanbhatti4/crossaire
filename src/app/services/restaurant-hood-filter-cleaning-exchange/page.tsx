"use client";

import React from "react";
import BookingForm from "@/components/BookingForm";
import LocalFAQItem from "@/components/LocalFAQItem";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE_URL } from "@/lib/site";

export default function ServicePage() {
  return (
    <div className="bg-white min-h-screen">
      <link rel="preload" href="/media/images/gallery/restaurant-hood-filter-cleaning-&-exchange-1.webp" as="image" fetchPriority="high" />
      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Restaurant Hood Filter Cleaning & Exchange",
            "description": "Scheduled restaurant hood filter exchange and cleaning programs. We supply and exchange clean stainless steel baffle filters to keep your kitchen compliant.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Crossaire",
              "image": `${SITE_URL}/media/images/logo.webp`,
              "telephone": "571-723-1406",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Glen Burnie",
                "addressRegion": "MD",
                "addressCountry": "US"
              }
            },
            "areaServed": [
              { "@type": "AdministrativeArea", "name": "Maryland" },
              { "@type": "AdministrativeArea", "name": "Virginia" },
              { "@type": "AdministrativeArea", "name": "Washington DC" }
            ]
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
                "name": "What is a hood filter exchange program?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It is a scheduled service where we deliver clean, commercial-grade grease filters to your kitchen and haul away your dirty, greasy filters for deep cleaning at our industrial wash facility."
                }
              },
              {
                "@type": "Question",
                "name": "Why can't I just wash my hood filters in the dishwasher?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Dishwashers only clean the surface. They cannot remove grease baked deep inside the baffles. Furthermore, running greasy filters through your dishwasher clogs plumbing drains and leaves a greasy film on dishes."
                }
              },
              {
                "@type": "Question",
                "name": "How often should hood filters be replaced or deep cleaned?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "High-volume kitchens (fast food, charbroiling) require weekly filter swaps. Moderate-volume operations (standard restaurants, hotels) swap filters bi-weekly. Low-volume kitchens may only need monthly exchange."
                }
              },
              {
                "@type": "Question",
                "name": "What are the differences between baffle filters and mesh filters?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Baffle filters use interlocking metal plates that force air to change direction, spinning grease out of the airflow. Mesh filters use aluminum screens. Mesh filters are prohibited in commercial hoods by NFPA 96 codes."
                }
              },
              {
                "@type": "Question",
                "name": "Do you supply the filters, or do we have to buy them?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We supply the filters. Our program includes the filters, eliminating upfront costs for you. If a filter becomes bent or damaged, we replace it at no charge."
                }
              },
              {
                "@type": "Question",
                "name": "How do clean hood filters affect kitchen exhaust airflow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Clean filters offer low static resistance, allowing the exhaust fan to draw smoke and grease away from the cook line. Clogged filters restrict airflow, causing smoke and heat to pool in the kitchen."
                }
              }
            ]
          })
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative text-white pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/media/images/gallery/restaurant-hood-filter-cleaning-&-exchange-1.webp')" }}
        />
        {/* Dark Overlay of #0c1a2b */}
        <div className="absolute inset-0 bg-[#0C1A2B]/92" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-sm uppercase tracking-wider font-extrabold text-accent block mb-3">
              (Certified Commercial Service)
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Restaurant <span className="text-accent">Hood Filter Exchange</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Keep your kitchen venting safely with a scheduled hood filter exchange program. We deliver clean, professional stainless steel baffle filters and take away your greasy filters for off-site deep cleaning, ensuring NFPA 96 compliance.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/95 font-semibold">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Regularly Scheduled Filter Swaps</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Off-Site Deep Cleaning Services</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>NFPA 96 Approved Baffle Filters</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Save Staff Labor and Time</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Booking Form */}
          <div id="booking-form-section" className="lg:col-span-5 relative w-full">
            <BookingForm initialService="Restaurant Hood Filter Cleaning & Exchange" />
          </div>
        </div>
      </section>

      {/* 2. EMBLEMS & PARTNERS SECTION */}
      <section className="bg-white border-b border-border-stroke py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Industry Certifications & Affiliations Row */}
          <div className="flex flex-col items-center justify-center text-center pb-12 border-b border-border-stroke/60">
            <span className="text-[11px] uppercase tracking-widest font-extrabold text-body-text/60 mb-6 block">
              (Our Industry Certifications & Affiliations)
            </span>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              <div className="relative group">
                <img src="/media/images/emblem1.webp" alt="NFPA 96 Certified Commercial Exhaust Cleaning Compliance Logo" className="h-24 md:h-36 w-auto object-contain transition-transform duration-300 hover:scale-105" width={96} height={96} />
              </div>
              <div className="relative group">
                <img src="/media/images/emblem2.webp" alt="OSHA Compliant Commercial Kitchen Safety Standard Certification" className="h-24 md:h-36 w-auto object-contain transition-transform duration-300 hover:scale-105" width={96} height={96} />
              </div>
              <div className="relative group">
                <img src="/media/images/emblem3.webp" alt="IKECA Equivalent Equivalent Exhaust System Cleaning Standard Logo" className="h-24 md:h-36 w-auto object-contain transition-transform duration-300 hover:scale-105" width={96} height={96} />
              </div>
            </div>
          </div>

          {/* Partners Row */}
          <div className="pt-12 text-center">
            <span className="text-[11px] uppercase tracking-widest font-extrabold text-body-text/60 mb-8 block">
              (Trusted by Leading Brands in MD, DC & VA)
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/amazon.webp" alt="Amazon Commercial Facility Kitchen Service Client" className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" width={112} height={40} />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/burger-king.webp" alt="Burger King Restaurant Exhaust Service Client" className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" width={64} height={64} />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/hilton.webp" alt="Hilton Hotel Kitchen Hood Service Client" className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" width={112} height={40} />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/ihg-hotels.webp" alt="IHG Hotels Ventilation Cleaning Client" className="h-8 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105" width={96} height={32} />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/subway.webp" alt="Subway Restaurant Grease Trap Cleaning Client" className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" width={112} height={40} />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/wing-stop.webp" alt="Wing Stop Hood Filter Cleaning Client" className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" width={112} height={40} />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/ruth-chris.webp" alt="Ruth's Chris Steak House Exhaust Service Client" className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" width={112} height={48} />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/the-halal-guys.webp" alt="The Halal Guys Commercial Kitchen Service Client" className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" width={64} height={64} />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/omni.webp" alt="Omni Hotels & Resorts Kitchen Exhaust Client" className="h-8 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105" width={96} height={32} />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/bowie.webp" alt="Bowie State University Dining Facility Service Client" className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" width={112} height={40} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OVERVIEW OF THE SERVICE */}
      <section className="py-24 px-6 bg-main-bg border-b border-border-stroke">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="subtitle-badge">(SERVICE OVERVIEW)</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text leading-tight tracking-tight">
                Turnkey Hood Filter Exchange & Cleaning
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-body-text text-base md:text-lg leading-relaxed">
              <p>
                Kitchen hood filters are your first line of defense. They capture up to 70% of airborne grease particles before they enter the ductwork. Because they collect grease, filters quickly become clogged. Saturated filters block air suction and become a severe fire hazard.
              </p>
              <p>
                Washing filters in a kitchen dishwasher does not remove grease baked deep inside the baffles. Crossaire's filter exchange program is simple: on a regular schedule, we replace your dirty filters with clean, professional stainless steel baffle filters. We haul away the dirty filters to wash them off-site.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHY THIS SERVICE MATTERS */}
      <section className="py-24 px-6 bg-white border-b border-border-stroke">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col items-center mb-16">
            <span className="subtitle-badge">(CRITICAL HYGIENE & SAFETY)</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight mb-4">
              Why Hood Filter Exchange Programs Matter
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              Neglecting filters can shut down your ventilation. Here is why a professional filter exchange program is essential for your facility:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <i className="fa-solid fa-wind text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Maximize Air Extraction</h3>
              <p className="text-body-text text-sm leading-relaxed">
                Clean filters allow exhaust fans to draw air freely. Saturated filters choke airflow, trapping heat and smoke inside the kitchen.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <i className="fa-solid fa-fire text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Eliminate Fire Fuel</h3>
              <p className="text-body-text text-sm leading-relaxed">
                Greasy filters catch fire easily from stove flares. Regularly swapping them out removes this primary source of kitchen fires.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <i className="fa-solid fa-clock text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Save Labor Costs</h3>
              <p className="text-body-text text-sm leading-relaxed">
                Cleaners and dishwashers hate scrubbing greasy filters. Our service saves your staff time and reduces water and chemical utility costs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIGNS YOU NEED THIS SERVICE */}
      <section className="py-24 px-6 bg-main-bg border-b border-border-stroke">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start mb-16">
            <span className="subtitle-badge">(SYSTEM WARNING SIGNS)</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight mb-4">
              Signs Your Hood Filters Need Exchange
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              Schedule filter cleaning or sign up for our exchange program if your kitchen exhibits these warning signs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div key={0} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-filter text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Visible Grease Coating</h3>
                <p className="text-body-text text-sm leading-relaxed">Filters that look thick, shiny, or yellowed with grease are fully saturated.</p>
              </div>
            </div>
            <div key={1} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-smog text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Smoke Spills from Hood</h3>
                <p className="text-body-text text-sm leading-relaxed">Smoke and hot air bypassing the hood canopy points to blocked air flow through filters.</p>
              </div>
            </div>
            <div key={2} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-triangle-exclamation text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Warped or Damaged Baffles</h3>
                <p className="text-body-text text-sm leading-relaxed">Bent, cracked, or missing filter baffles allow grease to pass into the ducts, violating code.</p>
              </div>
            </div>
            <div key={3} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-droplet text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Grease Dripping onto Ranges</h3>
                <p className="text-body-text text-sm leading-relaxed">Grease pooling on filter tracks or dripping onto food prep lines indicates overloaded filters.</p>
              </div>
            </div>
            <div key={4} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-fan text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Heavy Grease in Plenum</h3>
                <p className="text-body-text text-sm leading-relaxed">Grease accumulating rapidly behind the filters indicates the baffles are saturated and bypassing.</p>
              </div>
            </div>
            <div key={5} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-user-clock text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Staff Scrubbing Manually</h3>
                <p className="text-body-text text-sm leading-relaxed">Dishwashers spending hours scrubbing filters, wasting water and chemicals without removing baked grease.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. WHAT'S INCLUDED */}
      <section className="py-24 px-6 bg-white border-b border-border-stroke animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left">
            <span className="subtitle-badge block mb-3">(SERVICE SCOPE)</span>
            <h2 className="text-4xl md:text-[56px] font-extrabold tracking-tight leading-tight text-primary-text">
              What Is Included <br className="hidden sm:inline" />
              in Our <span className="text-accent">Service?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column: Image Card */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-border-stroke shadow-md bg-white">
              <img src="/media/images/gallery/restaurant-hood-filter-cleaning-&-exchange-2.webp" alt="Restaurant Hood Filter Cleaning & Exchange Showcase" className="absolute inset-0 w-full h-full object-cover" width={800} height={600} />
            </div>

            {/* Right Column: Features List */}
            <div className="flex flex-col">
              <div key={0} className={`flex gap-6 items-start ${0 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-truck-fast text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Scheduled Filter Delivery</h3>
                  <p className="text-body-text text-sm leading-relaxed">Delivering a fresh set of clean stainless steel baffle filters on a weekly or bi-weekly schedule.</p>
                </div>
              </div>
              <div key={1} className={`flex gap-6 items-start ${1 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-arrows-rotate text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Grease Filter Swap</h3>
                  <p className="text-body-text text-sm leading-relaxed">Removing grease-saturated filters and installing the clean set immediately.</p>
                </div>
              </div>
              <div key={2} className={`flex gap-6 items-start ${2 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-hands-bubbles text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Off-Site Industrial Washing</h3>
                  <p className="text-body-text text-sm leading-relaxed">Hauling dirty filters to our facility for deep cleaning in high-temp soak tanks.</p>
                </div>
              </div>
              <div key={3} className={`flex gap-6 items-start ${3 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-filter text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Durable Stainless Steel Filters</h3>
                  <p className="text-body-text text-sm leading-relaxed">Providing heavy-duty, commercial stainless steel baffle filters that resist rust and corrosion.</p>
                </div>
              </div>
              <div key={4} className={`flex gap-6 items-start ${4 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-wrench text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Filter Track Cleaning</h3>
                  <p className="text-body-text text-sm leading-relaxed">Wiping grease out of the hood frame's filter mounting tracks during each exchange.</p>
                </div>
              </div>
              <div key={5} className={`flex gap-6 items-start ${5 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-certificate text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">NFPA 96 Compliance Audits</h3>
                  <p className="text-body-text text-sm leading-relaxed">Inspecting filters to ensure proper fit and FOG capture compliance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. BENEFITS OF THE SERVICE */}
      <section className="py-24 px-6 bg-main-bg border-b border-border-stroke">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col items-center mb-16">
            <span className="subtitle-badge">(BUSINESS VALUE)</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight mb-4">
              Benefits of Regular Maintenance
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              Routine hood filter exchange services keep your commercial kitchen safe, clean, and venting efficiently:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div key={0} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-wind text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Optimal Kitchen Suction</h3>
              <p className="text-body-text text-sm leading-relaxed">Maintains clear airflow to remove smoke, heat, and moisture from the cooking line.</p>
            </div>
            <div key={1} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-shield-halved text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Reduced Duct Grease</h3>
              <p className="text-body-text text-sm leading-relaxed">Clean filters trap grease particles, slowing grease buildup inside your ductwork.</p>
            </div>
            <div key={2} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-clock text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Saves Staff Labor</h3>
              <p className="text-body-text text-sm leading-relaxed">Eliminates filter cleaning from your kitchen staff's tasks, saving labor time and water.</p>
            </div>
            <div key={3} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-square-check text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">NFPA 96 Code Compliance</h3>
              <p className="text-body-text text-sm leading-relaxed">Ensures your kitchen filters meet local fire codes and NFPA 96 requirements.</p>
            </div>
            <div key={4} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-droplet-slash text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">No Greasy Dripping</h3>
              <p className="text-body-text text-sm leading-relaxed">Captures grease within the baffles, preventing dripping onto food or appliances.</p>
            </div>
            <div key={5} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-lightbulb text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Zero Capital Expense</h3>
              <p className="text-body-text text-sm leading-relaxed">We supply the filters, eliminating the need for you to buy replacement grease filters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. OUR SERVICE PROCESS */}
      <section className="py-24 px-6 bg-white border-b border-border-stroke">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col items-center mb-16">
            <span className="subtitle-badge">(HOW WE WORK)</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight mb-4">
              Our Step-by-Step Process
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              We employ a meticulous, structured process to ensure safety, efficiency, and zero mess left behind:
            </p>
          </div>

          <div className="relative border-l border-border-stroke max-w-3xl mx-auto pl-8 space-y-12">
            <div key={0} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                01
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Custom Sizing Audit</h3>
              <p className="text-body-text text-sm leading-relaxed">We measure your hoods and inventory the size, count, and material of filters needed.</p>
            </div>
            <div key={1} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Scheduled Delivery</h3>
              <p className="text-body-text text-sm leading-relaxed">Our service truck arrives at your kitchen on a regular schedule (weekly, bi-weekly, or monthly).</p>
            </div>
            <div key={2} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Saturated Filter Swap</h3>
              <p className="text-body-text text-sm leading-relaxed">Our technician removes the greasy filters from the hood canopy and installs the clean set immediately.</p>
            </div>
            <div key={3} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                04
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Filter Track Wipeout</h3>
              <p className="text-body-text text-sm leading-relaxed">We clean the grease channels and drip trays in the hood frame before sliding the clean filters in.</p>
            </div>
            <div key={4} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                05
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Dirty Filter Hauling</h3>
              <p className="text-body-text text-sm leading-relaxed">The grease-saturated filters are loaded onto our truck and taken to our industrial cleaning facility.</p>
            </div>
            <div key={5} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                06
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Industrial Deep Cleaning</h3>
              <p className="text-body-text text-sm leading-relaxed">Dirty filters are soaked in hot chemical tanks and pressure washed to remove baked-on grease.</p>
            </div>
            <div key={6} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                07
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Quality Inspection</h3>
              <p className="text-body-text text-sm leading-relaxed">We check each filter for structural damage, ensure the baffles are secure, and prep them for the next swap.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. WHY CHOOSE US */}
      <section className="py-24 px-6 bg-[#0C1A2B] text-white border-b border-border-stroke">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <span className="text-sm uppercase tracking-wider font-extrabold text-accent block mb-3">(OUR COMPETITIVE EDGE)</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-6 leading-tight">
                The Crossaire Standard: Professionalism Unmatched
              </h2>
              <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
                We are committed to delivering reliable, premium safety services across Maryland, DC, and Virginia. We set ourselves apart by emphasizing transparency, certified technicians, and absolute compliance.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-base font-extrabold text-white mb-2 uppercase tracking-wide">NFPA 96 Certified</h3>
                <p className="text-white/70 text-sm leading-relaxed">All technicians are fully trained and certified under modern exhaust cleaning standards.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-base font-extrabold text-white mb-2 uppercase tracking-wide">Licensed & Insured</h3>
                <p className="text-white/70 text-sm leading-relaxed">Rest easy knowing your kitchen property is protected — we are fully licensed, bonded, and insured.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-base font-extrabold text-white mb-2 uppercase tracking-wide">24/7/365 Service</h3>
                <p className="text-white/70 text-sm leading-relaxed">We perform all cleanings during your closing or off-peak hours so you never lose business.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <h3 className="text-base font-extrabold text-white mb-2 uppercase tracking-wide">100% Upfront Pricing</h3>
                <p className="text-white/70 text-sm leading-relaxed">Honest, written estimates prior to scheduling. Absolutely no surprise fees or add-on bills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FREQUENTLY ASKED QUESTIONS (FAQs) */}
      <section id="faqs" className="py-24 px-6 bg-[#F4F6F8] border-b border-border-stroke">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center flex flex-col items-center mb-16">
            <span className="subtitle-badge">(GOT QUESTIONS?)</span>
            <h2 className="text-3xl md:text-[44px] font-extrabold tracking-tight text-primary-text leading-[1.2] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-3xl mx-auto">
              Got questions about Restaurant Hood Filter Cleaning & Exchange schedules, compliance, or logistics? Find detailed answers below:
            </p>
          </div>

          {/* FAQ Accordion Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
            <div className="flex flex-col gap-4">
              <LocalFAQItem question="What is a hood filter exchange program?">
                It is a scheduled service where we deliver clean, commercial-grade grease filters to your kitchen and haul away your dirty, greasy filters for deep cleaning at our industrial wash facility.
              </LocalFAQItem>
              <LocalFAQItem question="Why can't I just wash my hood filters in the dishwasher?">
                Dishwashers only clean the surface. They cannot remove grease baked deep inside the baffles. Furthermore, running greasy filters through your dishwasher clogs plumbing drains and leaves a greasy film on dishes.
              </LocalFAQItem>
              <LocalFAQItem question="How often should hood filters be replaced or deep cleaned?">
                High-volume kitchens (fast food, charbroiling) require weekly filter swaps. Moderate-volume operations (standard restaurants, hotels) swap filters bi-weekly. Low-volume kitchens may only need monthly exchange.
              </LocalFAQItem>
            </div>

            <div className="flex flex-col gap-4">
              <LocalFAQItem question="What are the differences between baffle filters and mesh filters?">
                Baffle filters use interlocking metal plates that force air to change direction, spinning grease out of the airflow. Mesh filters use aluminum screens. Mesh filters are prohibited in commercial hoods by NFPA 96 codes.
              </LocalFAQItem>
              <LocalFAQItem question="Do you supply the filters, or do we have to buy them?">
                We supply the filters. Our program includes the filters, eliminating upfront costs for you. If a filter becomes bent or damaged, we replace it at no charge.
              </LocalFAQItem>
              <LocalFAQItem question="How do clean hood filters affect kitchen exhaust airflow?">
                Clean filters offer low static resistance, allowing the exhaust fan to draw smoke and grease away from the cook line. Clogged filters restrict airflow, causing smoke and heat to pool in the kitchen.
              </LocalFAQItem>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-sm font-bold text-accent">
              Ready to schedule your service?
            </p>
            <a href="#booking-form-section" className="btn-primary mt-6">
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>

      {/* 11. RELATED SERVICES SECTION */}
      <section className="py-24 px-6 bg-white border-b border-border-stroke">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col items-center mb-16">
            <span className="subtitle-badge">(COMPLETE KITCHEN PROTECTION)</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight mb-4">
              Related Commercial Services
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              Crossaire offers full-suite commercial kitchen safety and ventilation solutions to keep your facility 100% compliant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                  <i className="fa-solid fa-hands-bubbles text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-3">Kitchen Hood Cleaning</h3>
                <p className="text-body-text text-sm leading-relaxed mb-6">
                  Deep degreasing and polishing of the commercial kitchen hood canopy.
                </p>
              </div>
              <a href="/services/kitchen-hood-cleaning" className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:underline">
                Learn more about kitchen hood cleaning <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                  <i className="fa-solid fa-wind text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-3">Exhaust System Cleaning</h3>
                <p className="text-body-text text-sm leading-relaxed mb-6">
                  Complete cleaning of the commercial kitchen hood canopy and duct system.
                </p>
              </div>
              <a href="/services/restaurant-kitchen-exhaust-system-cleaning" className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:underline">
                Learn more about exhaust system cleaning <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                  <i className="fa-solid fa-certificate text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-3">Kitchen Hood Inspections</h3>
                <p className="text-body-text text-sm leading-relaxed mb-6">
                  NFPA 96 compliance inspections and system safety audits.
                </p>
              </div>
              <a href="/services/kitchen-hood-inspections" className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:underline">
                Learn more about kitchen hood inspections <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA */}
      <section className="py-24 px-6 bg-[#0C1A2B] text-white relative overflow-hidden">
        {/* Accent Glow background blur */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-[120px]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-4">(NFPA 96 CERTIFIED & INSURED)</span>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Join Our Hood Filter Exchange Program
          </h2>
          
          <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Save labor, optimize ventilation, and stay code-compliant. Contact Crossaire today to set up your scheduled hood filter exchange program in MD, DC, and VA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#booking-form-section" className="btn-primary w-full sm:w-auto px-8 py-4 font-bold text-center">
              Start Filter Exchange
            </a>
            <a href="tel:5717231406" className="w-full sm:w-auto border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg transition-all text-center flex items-center justify-center gap-2">
              <i className="fa-solid fa-phone text-sm"></i>
              <span>Call 571-723-1406</span>
            </a>
          </div>
        </div>
      </section>

      {/* Scroll Reveal Animation Trigger */}
      <ScrollReveal />
    </div>
  );
}
