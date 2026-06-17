"use client";

import React from "react";
import BookingForm from "@/components/BookingForm";
import LocalFAQItem from "@/components/LocalFAQItem";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServicePage() {
  return (
    <div className="bg-white min-h-screen">
      <link rel="preload" href="/media/images/gallery/pollution-control-systems-maintenance-1.webp" as="image" fetchPriority="high" />
      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Pollution Control Systems Maintenance",
            "description": "Certified commercial kitchen pollution control systems maintenance. We clean electrostatic cells, replace charcoal filters, and service PCUs in MD, DC, and VA.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Crossaire",
              "image": "https://crossaire.vercel.app/media/images/logo.webp",
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
                "name": "What is a commercial kitchen pollution control unit (PCU)?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A PCU is a multi-stage filtration system installed in commercial kitchen exhaust lines. It cleans exhaust air before discharge, removing grease particles, smoke, and odors to protect local air quality."
                }
              },
              {
                "@type": "Question",
                "name": "How often does a pollution control system need maintenance?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Electrostatic precipitator (ESP) cells typically require washing every 30 to 60 days. Pre-filters are changed monthly, HEPA filters are replaced semi-annually, and activated carbon filters are changed every 6 to 12 months."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if PCU filters are not changed regularly?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Clogged filters restrict airflow, reducing hood suction and causing smoke/heat backups in the kitchen. Saturated filters also fail to capture odor, resulting in air quality violations and neighbor complaints."
                }
              },
              {
                "@type": "Question",
                "name": "How does an electrostatic precipitator (ESP) clean kitchen air?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "ESP units pass grease and smoke particles through a high-voltage ionization field, giving them an electrical charge. The particles are then captured on oppositely charged metal collector plates, leaving the air clean."
                }
              },
              {
                "@type": "Question",
                "name": "Do you replace charcoal and odor-control cells?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We supply and replace activated carbon panels and odor-control canisters designed to neutralize volatile organic compounds (VOCs) and cooking odors before discharge."
                }
              },
              {
                "@type": "Question",
                "name": "Can a malfunctioning PCU shut down my kitchen hoods?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Most modern PCUs are interlocked with the kitchen exhaust fan. If a safety fault occurs (such as door open, air block, or electrical short), the system will shut down the fan to prevent damage or fire."
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
          style={{ backgroundImage: "url('/media/images/gallery/pollution-control-systems-maintenance-1.webp')" }}
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
              Pollution Control <span className="text-accent">Systems Maintenance</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Maintain clean exhaust air and eliminate kitchen odors with expert Pollution Control Unit (PCU) maintenance. We service electrostatic precipitators (ESP), wash collection cells, replace carbon filters, and optimize airflow balancing.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/95 font-semibold">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>ESP Collection Cell Washing</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Carbon Filter Replacements</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Odor Control System Service</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Pre-Filter & HEPA Filter Swaps</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Booking Form */}
          <div id="booking-form-section" className="lg:col-span-5 relative w-full">
            <BookingForm initialService="Pollution Control Systems Maintenance" />
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
                <img src="/media/images/emblem1.webp" alt="NFPA 96 Certified Commercial Exhaust Cleaning Compliance Logo" className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105" width={96} height={96} />
              </div>
              <div className="relative group">
                <img src="/media/images/emblem2.webp" alt="OSHA Compliant Commercial Kitchen Safety Standard Certification" className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105" width={96} height={96} />
              </div>
              <div className="relative group">
                <img src="/media/images/emblem3.webp" alt="IKECA Equivalent Equivalent Exhaust System Cleaning Standard Logo" className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105" width={96} height={96} />
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
                Expert Pollution Control Systems Maintenance
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-body-text text-base md:text-lg leading-relaxed">
              <p>
                A Pollution Control Unit (PCU) is installed in commercial exhaust systems where cooking smoke, grease, and odors must be filtered before discharge. This is common in urban buildings or dense retail spaces. PCUs utilize electrostatic precipitators, media filters, and carbon odor-control cells to purify the exhaust air.
              </p>
              <p>
                Without regular maintenance, PCUs become clogged with grease. This reduces hood draw, creates odor complaints from neighbors, and increases fire risks. Crossaire provides specialized PCU maintenance. We wash electrostatic cells, replace particulate and carbon filters, and service system controls.
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
              Why PCU Maintenance is Critical
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              Neglecting your pollution control system leads to poor hood draw and local air quality violations. Here is why regular service is vital:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <i className="fa-solid fa-wind text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Maintain Hood Suction</h3>
              <p className="text-body-text text-sm leading-relaxed">
                Clogged PCU filters block exhaust airflow. Regularly replacing pre-filters and cleaning electrostatic cells restores proper hood draw.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <i className="fa-solid fa-spray-can-sparkles text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Eliminate Neighbor Complaints</h3>
              <p className="text-body-text text-sm leading-relaxed">
                Activated carbon filters capture cooking odors. Regularly changing carbon cells prevents cooking smell leaks and neighborhood complaints.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <i className="fa-solid fa-fire text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Prevent PCU Grease Fires</h3>
              <p className="text-body-text text-sm leading-relaxed">
                PCU units accumulate heavy grease deposits inside the filtration chambers. Routine deep cleaning eliminates this major fire hazard.
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
              Signs Your PCU Needs Maintenance
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              Schedule pollution control system maintenance immediately if you notice any of these system warning signs:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div key={0} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-face-grimace text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Odor Complaints</h3>
                <p className="text-body-text text-sm leading-relaxed">Neighbors or nearby tenants complaining of heavy kitchen grease or smoke odors.</p>
              </div>
            </div>
            <div key={1} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-volume-high text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">ESP Arching/Snapping Noise</h3>
                <p className="text-body-text text-sm leading-relaxed">Loud popping or arching noises from the electrostatic unit indicates grease-shorted cells.</p>
              </div>
            </div>
            <div key={2} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-triangle-exclamation text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">PCU Warning Lights On</h3>
                <p className="text-body-text text-sm leading-relaxed">The filter change or ESP fault indicator lights on the system panel are active.</p>
              </div>
            </div>
            <div key={3} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-wind text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Weak Hood Air Suction</h3>
                <p className="text-body-text text-sm leading-relaxed">Air is not venting quickly, leaving smoke and heat hovering over cooking lines.</p>
              </div>
            </div>
            <div key={4} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-smog text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Visible Smoke from Stack</h3>
                <p className="text-body-text text-sm leading-relaxed">Smoke venting from the rooftop exhaust stack indicates filter bypass or ESP failure.</p>
              </div>
            </div>
            <div key={5} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-calendar-xmark text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Overdue Maintenance Interval</h3>
                <p className="text-body-text text-sm leading-relaxed">More than 30 or 60 days have passed since your last electrostatic cell wash and filter inspection.</p>
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
              <img src="/media/images/gallery/pollution-control-systems-maintenance-2.webp" alt="Pollution Control Systems Maintenance Showcase" className="absolute inset-0 w-full h-full object-cover" width={800} height={600} />
            </div>

            {/* Right Column: Features List */}
            <div className="flex flex-col">
              <div key={0} className={`flex gap-6 items-start ${0 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-bolt text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Electrostatic Cell Washing</h3>
                  <p className="text-body-text text-sm leading-relaxed">Removing, deep-soaking, and steam-washing high-voltage ESP collector plates.</p>
                </div>
              </div>
              <div key={1} className={`flex gap-6 items-start ${1 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-filter text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Carbon Filter Replacement</h3>
                  <p className="text-body-text text-sm leading-relaxed">Swapping out spent activated carbon odor-control blocks with new OEM filters.</p>
                </div>
              </div>
              <div key={2} className={`flex gap-6 items-start ${2 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-arrows-rotate text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Pre-Filter & HEPA Swaps</h3>
                  <p className="text-body-text text-sm leading-relaxed">Replacing disposable baffle pre-filters and high-efficiency HEPA particulate filters.</p>
                </div>
              </div>
              <div key={3} className={`flex gap-6 items-start ${3 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-hands-bubbles text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">PCU Chamber Degreasing</h3>
                  <p className="text-body-text text-sm leading-relaxed">Scraping and steam-cleaning the inner walls, doors, and drains of the filter cabinet.</p>
                </div>
              </div>
              <div key={4} className={`flex gap-6 items-start ${4 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-gears text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Control Panel Diagnostics</h3>
                  <p className="text-body-text text-sm leading-relaxed">Testing door interlocks, high-voltage power packs, and pressure sensors.</p>
                </div>
              </div>
              <div key={5} className={`flex gap-6 items-start ${5 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-gauge text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">System Airflow Calibration</h3>
                  <p className="text-body-text text-sm leading-relaxed">Verifying static pressure drop across filter stages to ensure balanced draw.</p>
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
              Routine pollution control unit servicing ensures clean emissions, low fire risk, and quiet operations:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div key={0} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-spray-can-sparkles text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Zero Odor Emission</h3>
              <p className="text-body-text text-sm leading-relaxed">Ensures neighborhood odor complaints are completely eliminated for smooth tenant relations.</p>
            </div>
            <div key={1} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-wind text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Optimal Hood Draw</h3>
              <p className="text-body-text text-sm leading-relaxed">Maintains required airflow velocities, pulling heat and grease away from the cook line.</p>
            </div>
            <div key={2} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-circle-check text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Fewer System Shutdowns</h3>
              <p className="text-body-text text-sm leading-relaxed">Preventing ESP short-circuits avoids emergency exhaust system lockouts.</p>
            </div>
            <div key={3} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-square-check text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Avoid Local Violations</h3>
              <p className="text-body-text text-sm leading-relaxed">Keeps smoke emissions clear to comply with local environmental protection regulations.</p>
            </div>
            <div key={4} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-gears text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Extended Fan Motor Life</h3>
              <p className="text-body-text text-sm leading-relaxed">Preventing filter blockage reduces strain and static load on the exhaust fan.</p>
            </div>
            <div key={5} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-shield-halved text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Complete Fire Safety</h3>
              <p className="text-body-text text-sm leading-relaxed">Eliminating grease accumulation inside the PCU cabinet reduces overall fire risk.</p>
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
              <h3 className="text-lg font-bold text-primary-text mb-2">Shutdown & Safety Lockout</h3>
              <p className="text-body-text text-sm leading-relaxed">We turn off the exhaust fan, lock out the power supply, and ground the high-voltage ESP cells.</p>
            </div>
            <div key={1} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Filter Stage Inspection</h3>
              <p className="text-body-text text-sm leading-relaxed">We open the access doors and inspect pre-filters, ESP cells, HEPA filters, and carbon trays.</p>
            </div>
            <div key={2} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">ESP Cell Removal & Soaking</h3>
              <p className="text-body-text text-sm leading-relaxed">We slide out the heavy electrostatic cell blocks and place them in a specialized chemical soak tank.</p>
            </div>
            <div key={3} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                04
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">PCU Cabinet Degreasing</h3>
              <p className="text-body-text text-sm leading-relaxed">While cells soak, we scrape and steam-clean grease accumulations inside the PCU housing.</p>
            </div>
            <div key={4} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                05
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Filter Replacements</h3>
              <p className="text-body-text text-sm leading-relaxed">We replace the saturated pre-filters and swap out spent charcoal filters with fresh activated carbon panels.</p>
            </div>
            <div key={5} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                06
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">ESP Cell Flush & Install</h3>
              <p className="text-body-text text-sm leading-relaxed">We pressure rinse the ESP cells, inspect the ionizer wires, dry them completely, and reinstall them.</p>
            </div>
            <div key={6} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                07
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Startup & Calibration</h3>
              <p className="text-body-text text-sm leading-relaxed">We restore power, verify high-voltage indicator operation, check door seals, and measure static pressure.</p>
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
                <h3 className="text-base font-extrabold text-white mb-2 uppercase tracking-wide">$5M Liability Insurance</h3>
                <p className="text-white/70 text-sm leading-relaxed">Rest easy knowing your kitchen property is backed by $5,000,000 in comprehensive commercial insurance.</p>
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
              Got questions about Pollution Control Systems Maintenance schedules, compliance, or logistics? Find detailed answers below:
            </p>
          </div>

          {/* FAQ Accordion Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
            <div className="flex flex-col gap-4">
              <LocalFAQItem question="What is a commercial kitchen pollution control unit (PCU)?">
                A PCU is a multi-stage filtration system installed in commercial kitchen exhaust lines. It cleans exhaust air before discharge, removing grease particles, smoke, and odors to protect local air quality.
              </LocalFAQItem>
              <LocalFAQItem question="How often does a pollution control system need maintenance?">
                Electrostatic precipitator (ESP) cells typically require washing every 30 to 60 days. Pre-filters are changed monthly, HEPA filters are replaced semi-annually, and activated carbon filters are changed every 6 to 12 months.
              </LocalFAQItem>
              <LocalFAQItem question="What happens if PCU filters are not changed regularly?">
                Clogged filters restrict airflow, reducing hood suction and causing smoke/heat backups in the kitchen. Saturated filters also fail to capture odor, resulting in air quality violations and neighbor complaints.
              </LocalFAQItem>
            </div>

            <div className="flex flex-col gap-4">
              <LocalFAQItem question="How does an electrostatic precipitator (ESP) clean kitchen air?">
                ESP units pass grease and smoke particles through a high-voltage ionization field, giving them an electrical charge. The particles are then captured on oppositely charged metal collector plates, leaving the air clean.
              </LocalFAQItem>
              <LocalFAQItem question="Do you replace charcoal and odor-control cells?">
                Yes. We supply and replace activated carbon panels and odor-control canisters designed to neutralize volatile organic compounds (VOCs) and cooking odors before discharge.
              </LocalFAQItem>
              <LocalFAQItem question="Can a malfunctioning PCU shut down my kitchen hoods?">
                Yes. Most modern PCUs are interlocked with the kitchen exhaust fan. If a safety fault occurs (such as door open, air block, or electrical short), the system will shut down the fan to prevent damage or fire.
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
                  <i className="fa-solid fa-screwdriver-wrench text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-3">Exhaust Fan Repairs</h3>
                <p className="text-body-text text-sm leading-relaxed mb-6">
                  Rooftop exhaust fan repair including motors, belts, and bearing lubrication.
                </p>
              </div>
              <a href="/services/kitchen-exhaust-fan-repairs" className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:underline">
                Learn more about exhaust fan repairs <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                  <i className="fa-solid fa-filter text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-3">Hood Filter Exchange</h3>
                <p className="text-body-text text-sm leading-relaxed mb-6">
                  Scheduled exchange and cleaning of commercial kitchen grease filters.
                </p>
              </div>
              <a href="/services/restaurant-hood-filter-cleaning-exchange" className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:underline">
                Learn more about hood filter exchange <i className="fa-solid fa-arrow-right text-xs"></i>
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
            Schedule Certified PCU Maintenance
          </h2>
          
          <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Keep your pollution control system drawing strong and odor-free. Contact Crossaire today for PCU filter changes and ESP cell cleaning in MD, DC, and VA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#booking-form-section" className="btn-primary w-full sm:w-auto px-8 py-4 font-bold text-center">
              Book PCU Maintenance
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
