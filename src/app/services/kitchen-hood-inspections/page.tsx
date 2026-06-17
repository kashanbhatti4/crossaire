"use client";

import React from "react";
import BookingForm from "@/components/BookingForm";
import LocalFAQItem from "@/components/LocalFAQItem";
import ScrollReveal from "@/components/ScrollReveal";

export default function ServicePage() {
  return (
    <div className="bg-white min-h-screen">
      <link rel="preload" href="/media/images/gallery/kitchen-hood-inspections-1.webp" as="image" fetchPriority="high" />
      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Kitchen Hood Inspections",
            "description": "Certified commercial kitchen hood inspections. We conduct NFPA 96 fire code compliance audits, check fusible links, and issue safety stickers in MD, DC, and VA.",
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
                "name": "How often does a kitchen hood system require official inspection?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NFPA 96 requires kitchen exhaust systems to be inspected at regular intervals: monthly for solid-fuel kitchens, quarterly for high-volume charbroiling, semi-annually for moderate kitchens, and annually for low-volume setups."
                }
              },
              {
                "@type": "Question",
                "name": "What is checked during a certified NFPA 96 hood inspection?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We check grease buildup levels in hoods and ducts, filter integrity, duct access door locations, upblast fan hinges, grease collection pans, electrical interlocks, and fire suppression system status."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide the compliance stickers required by fire marshals?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. If your system passes our safety inspection, we apply the official NFPA 96 compliance sticker directly onto your hood, showing dates and credentials."
                }
              },
              {
                "@type": "Question",
                "name": "What is a fusible link and why does it need regular replacement?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Fusible links are heat-rated metal triggers in your fire suppression line. If a fire occurs, the heat melts the link, releasing fire suppressant. Codes require replacing links semi-annually."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if my kitchen fails a fire code inspection?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "If your system is out of compliance, the inspector will issue a warning report. You will have a grace period to complete cleaning or repairs before re-inspection to avoid fines."
                }
              },
              {
                "@type": "Question",
                "name": "Can you inspect and service the fire suppression system as well?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our exhaust inspection focuses on ventilation safety and fan controls. For the chemical fire suppression tanks and nozzles, you must have them serviced by a licensed fire protection company."
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
          style={{ backgroundImage: "url('/media/images/gallery/kitchen-hood-inspections-1.webp')" }}
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
              Kitchen Hood <span className="text-accent">Inspections & Audits</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Pass code reviews and ensure safety with certified kitchen hood inspections. We conduct complete NFPA 96 compliance audits, check fire suppression interlocks, verify fusible links, and issue safety certification stickers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/95 font-semibold">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>NFPA 96 Fire Code Inspections</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Official Certification Stickers</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Fusible Link Verification</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Full Compliance Audit Logs</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Booking Form */}
          <div id="booking-form-section" className="lg:col-span-5 relative w-full">
            <BookingForm initialService="Kitchen Hood Inspections" />
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
                Certified Commercial Kitchen Hood Inspections
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-body-text text-base md:text-lg leading-relaxed">
              <p>
                Commercial kitchen exhaust systems are subject to strict fire safety regulations. Local fire marshals, health departments, and insurance companies require proof of regular inspections. NFPA 96 standards outline the inspection and cleaning requirements for kitchen ventilation systems.
              </p>
              <p>
                Crossaire provides professional hood inspections. Our certified inspectors evaluate the condition of your hood canopy, baffle filters, access doors, ductwork, and rooftop upblast fan. We check fire suppression system status, replace fusible links, and issue the official compliance stickers required to keep your business operating.
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
              Why Routine Hood Inspections Matter
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              Routine safety audits protect your property and ensure you pass fire department checks. Here is why certified inspections are essential:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <i className="fa-solid fa-clipboard-check text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Pass Fire Code Audits</h3>
              <p className="text-body-text text-sm leading-relaxed">
                Fire marshals conduct surprise safety inspections. Regular certified audits verify your system complies with NFPA 96 fire codes.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <i className="fa-solid fa-shield-halved text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Verify Fire Safety Systems</h3>
              <p className="text-body-text text-sm leading-relaxed">
                We test exhaust fan interlocks and inspect fusible links. This ensures your safety systems operate correctly during a fire emergency.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <i className="fa-solid fa-file-shield text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Ensure Policy Protection</h3>
              <p className="text-body-text text-sm leading-relaxed">
                Insurance policies require proof of regular safety inspections. Having dated compliance certificates protects your business claims.
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
              Signs Your Hood System Needs Inspection
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              Schedule an exhaust system safety audit if your kitchen exhibits any of these indicators:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div key={0} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-calendar-xmark text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Expired Hood Sticker</h3>
                <p className="text-body-text text-sm leading-relaxed">The compliance label on your hood indicates your inspection window has expired.</p>
              </div>
            </div>
            <div key={1} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-file-lines text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Upcoming Fire Marshall Visit</h3>
                <p className="text-body-text text-sm leading-relaxed">An upcoming fire safety inspection requires you to have certified system logs ready.</p>
              </div>
            </div>
            <div key={2} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-shield text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Insurance Renewal Notice</h3>
                <p className="text-body-text text-sm leading-relaxed">Insurers requesting certified proof of system safety and compliance to renew your policy.</p>
              </div>
            </div>
            <div key={3} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-circle-exclamation text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Old Fusible Links</h3>
                <p className="text-body-text text-sm leading-relaxed">Fusible links inside the fire suppression hood canopy look rusted, greasy, or are over 6 months old.</p>
              </div>
            </div>
            <div key={4} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-wind text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Poor Exhaust Performance</h3>
                <p className="text-body-text text-sm leading-relaxed">Smoke and steam escaping from under the hood canopy indicates airflow draw issues.</p>
              </div>
            </div>
            <div key={5} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-screwdriver-wrench text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">New Hood Installation</h3>
                <p className="text-body-text text-sm leading-relaxed">A newly installed ventilation system requires commissioning and safety inspection to secure permits.</p>
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
              <img src="/media/images/gallery/kitchen-hood-inspections-2.webp" alt="Kitchen Hood Inspections Showcase" className="absolute inset-0 w-full h-full object-cover" width={800} height={600} />
            </div>

            {/* Right Column: Features List */}
            <div className="flex flex-col">
              <div key={0} className={`flex gap-6 items-start ${0 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-magnifying-glass text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">NFPA 96 Compliance Review</h3>
                  <p className="text-body-text text-sm leading-relaxed">Auditing hoods, filters, ducts, and fans for grease and safety clearance issues.</p>
                </div>
              </div>
              <div key={1} className={`flex gap-6 items-start ${1 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-circle-check text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Fusible Link Inspection</h3>
                  <p className="text-body-text text-sm leading-relaxed">Checking and replacing temperature-rated fusible links in the fire suppression line.</p>
                </div>
              </div>
              <div key={2} className={`flex gap-6 items-start ${2 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-bolt text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Interlock Control Testing</h3>
                  <p className="text-body-text text-sm leading-relaxed">Verifying make-up air fans shut off automatically when fire systems activate.</p>
                </div>
              </div>
              <div key={3} className={`flex gap-6 items-start ${3 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-wind text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Airflow Draw Audit</h3>
                  <p className="text-body-text text-sm leading-relaxed">Measuring air velocities to ensure hoods pull grease and smoke efficiently.</p>
                </div>
              </div>
              <div key={4} className={`flex gap-6 items-start ${4 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-fan text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Rooftop Fan Review</h3>
                  <p className="text-body-text text-sm leading-relaxed">Inspecting upblast fans, drive belts, curbs, and hinge kits for code compliance.</p>
                </div>
              </div>
              <div key={5} className={`flex gap-6 items-start ${5 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-certificate text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Compliance Certification</h3>
                  <p className="text-body-text text-sm leading-relaxed">Applying dated NFPA 96 safety stickers and delivering digital audit reports.</p>
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
              Routine safety inspections prevent code violations, protect your building, and keep your kitchen operational:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div key={0} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-square-check text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Avoid Fines & closures</h3>
              <p className="text-body-text text-sm leading-relaxed">Keeps your facility in full compliance with local fire, health, and building codes.</p>
            </div>
            <div key={1} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-shield-halved text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Safe Cooking Environment</h3>
              <p className="text-body-text text-sm leading-relaxed">Ensures safety interlocks and fire suppression systems operate correctly.</p>
            </div>
            <div key={2} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-file-shield text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Insurance Claims Protection</h3>
              <p className="text-body-text text-sm leading-relaxed">Provides the certified inspection documentation required to secure insurance coverage.</p>
            </div>
            <div key={3} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-magnifying-glass text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Identify Hidden Hazards</h3>
              <p className="text-body-text text-sm leading-relaxed">Detects hidden grease leaks and fan wear before they cause fires or system failures.</p>
            </div>
            <div key={4} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-certificate text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Inspection Ready</h3>
              <p className="text-body-text text-sm leading-relaxed">Maintains dated compliance stickers on hoods, preparing you for surprise safety audits.</p>
            </div>
            <div key={5} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-wind text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Optimal System Suction</h3>
              <p className="text-body-text text-sm leading-relaxed">Verifies airflow balancing to maintain smoke extraction and MUA pressure.</p>
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
              <h3 className="text-lg font-bold text-primary-text mb-2">Visual Canopy Audit</h3>
              <p className="text-body-text text-sm leading-relaxed">We inspect the hood canopy, grease filters, and plenum area for structural damage and grease buildup.</p>
            </div>
            <div key={1} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Ductwork Access Review</h3>
              <p className="text-body-text text-sm leading-relaxed">We check ductwork access doors to ensure they are spaced correctly and inspect interior grease levels.</p>
            </div>
            <div key={2} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Rooftop Fan Audit</h3>
              <p className="text-body-text text-sm leading-relaxed">We check the rooftop fan curb seal, verify motor belt tension, and inspect fan blades and hinge kits.</p>
            </div>
            <div key={3} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                04
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Airflow Velocity Check</h3>
              <p className="text-body-text text-sm leading-relaxed">We measure face velocity at the hood register to confirm air extraction meets design code specifications.</p>
            </div>
            <div key={4} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                05
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Fusible Link Service</h3>
              <p className="text-body-text text-sm leading-relaxed">We inspect fusible links inside the hood, replacing links that look grease-choked or are overdue for service.</p>
            </div>
            <div key={5} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                06
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Safety Control Testing</h3>
              <p className="text-body-text text-sm leading-relaxed">We test fan interlocks to ensure make-up air shuts down correctly during fire suppression triggers.</p>
            </div>
            <div key={6} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                07
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Safety Sticker Application</h3>
              <p className="text-body-text text-sm leading-relaxed">We apply the dated NFPA 96 compliance label and deliver a detailed digital inspection report.</p>
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
              Got questions about Kitchen Hood Inspections schedules, compliance, or logistics? Find detailed answers below:
            </p>
          </div>

          {/* FAQ Accordion Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
            <div className="flex flex-col gap-4">
              <LocalFAQItem question="How often does a kitchen hood system require official inspection?">
                NFPA 96 requires kitchen exhaust systems to be inspected at regular intervals: monthly for solid-fuel kitchens, quarterly for high-volume charbroiling, semi-annually for moderate kitchens, and annually for low-volume setups.
              </LocalFAQItem>
              <LocalFAQItem question="What is checked during a certified NFPA 96 hood inspection?">
                We check grease buildup levels in hoods and ducts, filter integrity, duct access door locations, upblast fan hinges, grease collection pans, electrical interlocks, and fire suppression system status.
              </LocalFAQItem>
              <LocalFAQItem question="Do you provide the compliance stickers required by fire marshals?">
                Yes. If your system passes our safety inspection, we apply the official NFPA 96 compliance sticker directly onto your hood, showing dates and credentials.
              </LocalFAQItem>
            </div>

            <div className="flex flex-col gap-4">
              <LocalFAQItem question="What is a fusible link and why does it need regular replacement?">
                Fusible links are heat-rated metal triggers in your fire suppression line. If a fire occurs, the heat melts the link, releasing fire suppressant. Codes require replacing links semi-annually.
              </LocalFAQItem>
              <LocalFAQItem question="What happens if my kitchen fails a fire code inspection?">
                If your system is out of compliance, the inspector will issue a warning report. You will have a grace period to complete cleaning or repairs before re-inspection to avoid fines.
              </LocalFAQItem>
              <LocalFAQItem question="Can you inspect and service the fire suppression system as well?">
                Our exhaust inspection focuses on ventilation safety and fan controls. For the chemical fire suppression tanks and nozzles, you must have them serviced by a licensed fire protection company.
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
                  <i className="fa-solid fa-screwdriver-wrench text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-3">Duct Repair & Access Panels</h3>
                <p className="text-body-text text-sm leading-relaxed mb-6">
                  Access panel installations to allow code-compliant exhaust duct cleaning.
                </p>
              </div>
              <a href="/services/kitchen-exhaust-duct-repair-access-panel-installation" className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:underline">
                Learn more about duct repair & access panels <i className="fa-solid fa-arrow-right text-xs"></i>
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
            Schedule Your Certified Hood Inspection
          </h2>
          
          <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Keep your commercial kitchen fire-safe and pass fire marshal checks. Contact Crossaire today for certified NFPA 96 hood inspections in MD, DC, and VA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#booking-form-section" className="btn-primary w-full sm:w-auto px-8 py-4 font-bold text-center">
              Book Hood Inspection
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
