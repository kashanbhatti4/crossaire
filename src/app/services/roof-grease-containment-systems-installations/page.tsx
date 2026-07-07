"use client";

import React from "react";
import BookingForm from "@/components/BookingForm";
import LocalFAQItem from "@/components/LocalFAQItem";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE_URL } from "@/lib/site";

export default function ServicePage() {
  return (
    <div className="bg-white min-h-screen">
      <link rel="preload" href="/media/images/gallery/roof-grease-containment-systems-installation-1.webp" as="image" fetchPriority="high" />
      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Roof Grease Containment Systems Installations",
            "description": "Certified rooftop grease containment system installation. Protect your commercial roof membrane from acidic grease damage and reduce fire risks. Services in MD, DC, and VA.",
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
                "name": "Why is roof grease containment mandatory for exhaust fans?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NFPA 96 mandates that commercial exhaust systems drain grease safely into approved containers. Grease cannot drain directly onto the roof. Containment systems are required to prevent fire risks and roof rot."
                }
              },
              {
                "@type": "Question",
                "name": "How does grease damage commercial roofing membranes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Commercial kitchen grease contains animal fats, vegetable oils, and acids. When it touches membranes like TPO, EPDM, or tar-and-gravel, it chemically degrades the material, causing it to swell, blister, and rot."
                }
              },
              {
                "@type": "Question",
                "name": "What is a hydrophobic grease filter and how does it work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Hydrophobic filters repel water but absorb oils. Rainwater passes through the filter cleanly, but fats, oils, and grease are captured and trapped within the filter media, preventing roof pollution."
                }
              },
              {
                "@type": "Question",
                "name": "Can grease runoff void my commercial roof warranty?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Most commercial roof manufacturers (like GAF, Johns Manville, Carlisle) exclude damage caused by animal fats or grease from their warranties. Installing containment protects your roof warranty."
                }
              },
              {
                "@type": "Question",
                "name": "How often should rooftop grease containment systems be serviced?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Filters and mats should be inspected and replaced every 3 to 6 months. High-volume kitchens (fast food, charbroiling) require quarterly service, while low-volume kitchens may only need semi-annual changes."
                }
              },
              {
                "@type": "Question",
                "name": "Do you clean existing grease damage off the roof prior to installation?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We scrape and degrease the roofing area around the exhaust curb before installation to ensure the new containment system sits on a clean, solid surface."
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
          style={{ backgroundImage: "url('/media/images/gallery/roof-grease-containment-systems-installation-1.webp')" }}
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
              Roof Grease <span className="text-accent">Containment Installations</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Protect your building's roof from acidic kitchen grease drainage. We install professional rooftop grease containment systems, hydrophobic protective membranes, and collection pans that prevent roofing damage and fires.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/95 font-semibold">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Avoid Acidic Grease Roof Damage</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Hydrophobic Grease Collection Filters</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>NFPA 96 Grease Drain Compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Turnkey Framework Installation</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Booking Form */}
          <div id="booking-form-section" className="lg:col-span-5 relative w-full">
            <BookingForm initialService="Roof Grease Containment Systems Installations" />
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
                Certified Roof Grease Containment Installations
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-body-text text-base md:text-lg leading-relaxed">
              <p>
                Rooftop upblast exhaust fans discharge grease vapors vertically. However, some grease condenses and drains out of the fan housing. Without a containment system, this highly acidic grease spills directly onto the roof surface, causing severe roofing membrane decay, water leaks, and structural fire hazards.
              </p>
              <p>
                Crossaire installs professional rooftop grease containment systems. We place hydrophobic filter barriers around the fan base that allow rainwater to pass through while capturing and trapping kitchen grease. This keeps your roof clean, prevents fire risks, and preserves your roof warranty.
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
              Why Roof Grease Containment is Vital
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              Allowing kitchen grease to drain onto your roof causes structural damage and code violations. Here is why containment is essential:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <i className="fa-solid fa-shield-halved text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Protect Roof Membrane</h3>
              <p className="text-body-text text-sm leading-relaxed">
                Kitchen grease contains acids that break down asphalt shingles, TPO, and EPDM roofing membranes, leading to costly water leaks.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <i className="fa-solid fa-fire text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Reduce Fire Risk</h3>
              <p className="text-body-text text-sm leading-relaxed">
                A grease-soaked roof is a severe fire hazard. Fire can spread across grease-saturated roofing materials. Containment isolates this risk.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <i className="fa-solid fa-circle-check text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Protect Roof Warranties</h3>
              <p className="text-body-text text-sm leading-relaxed">
                Most commercial roofing warranties explicitly exclude grease damage. Installing a certified containment system protects your building warranty.
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
              Signs Your Roof Needs Grease Containment
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              Inspect your roof regular. If you notice any of these signs of grease drainage, schedule containment installation immediately:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div key={0} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-droplet text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Puddles of Grease on Roof</h3>
                <p className="text-body-text text-sm leading-relaxed">Pooling oil or grease around the base of your upblast fan is a clear sign of system failure.</p>
              </div>
            </div>
            <div key={1} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-triangle-exclamation text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Warped Roofing Material</h3>
                <p className="text-body-text text-sm leading-relaxed">Roofing membrane that looks bubbled, soft, or spongy has been degraded by grease acids.</p>
              </div>
            </div>
            <div key={2} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-cloud-rain text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Clogged Rooftop Drains</h3>
                <p className="text-body-text text-sm leading-relaxed">Grease runoff washing into roof drains causes blockages, pooling water, and leaks.</p>
              </div>
            </div>
            <div key={3} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-fan text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Empty Grease Drain Port</h3>
                <p className="text-body-text text-sm leading-relaxed">An open drain port on the fan housing with no collection system allows oil to drip directly onto the roof.</p>
              </div>
            </div>
            <div key={4} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-calendar-xmark text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Health & Fire Violations</h3>
                <p className="text-body-text text-sm leading-relaxed">Inspectors issuing warnings regarding rooftop grease accumulation and environmental safety.</p>
              </div>
            </div>
            <div key={5} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-house-chimney-crack text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Active Water Leaks</h3>
                <p className="text-body-text text-sm leading-relaxed">Water dripping into the kitchen ceiling directly below the rooftop exhaust fan point to membrane rot.</p>
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
              <img src="/media/images/gallery/roof-grease-containment-systems-installation-2.webp" alt="Roof Grease Containment Systems Installations Showcase" className="absolute inset-0 w-full h-full object-cover" width={800} height={600} />
            </div>

            {/* Right Column: Features List */}
            <div className="flex flex-col">
              <div key={0} className={`flex gap-6 items-start ${0 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-filter text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Hydrophobic Filter Installation</h3>
                  <p className="text-body-text text-sm leading-relaxed">Fitting specialized filters that repel water but trap oil and grease molecules.</p>
                </div>
              </div>
              <div key={1} className={`flex gap-6 items-start ${1 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-box text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Grease Collection Boxes</h3>
                  <p className="text-body-text text-sm leading-relaxed">Mounting heavy-gauge steel collection boxes directly to the upblast fan drain spout.</p>
                </div>
              </div>
              <div key={2} className={`flex gap-6 items-start ${2 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-border-all text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Protective Roof Mats</h3>
                  <p className="text-body-text text-sm leading-relaxed">Installing multi-layered grease mats under the fan base to protect the roof surface.</p>
                </div>
              </div>
              <div key={3} className={`flex gap-6 items-start ${3 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-fan text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Exhaust Fan Drain Cleanout</h3>
                  <p className="text-body-text text-sm leading-relaxed">Clearing out grease drain lines and spouts on the upblast fan to prevent blockage.</p>
                </div>
              </div>
              <div key={4} className={`flex gap-6 items-start ${4 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-wrench text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Containment Frame Mounts</h3>
                  <p className="text-body-text text-sm leading-relaxed">Securing metal containment frames around the fan curb to keep filter mats in place.</p>
                </div>
              </div>
              <div key={5} className={`flex gap-6 items-start ${5 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-certificate text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">NFPA 96 Compliance Review</h3>
                  <p className="text-body-text text-sm leading-relaxed">Ensuring your rooftop grease collection conforms to fire and environmental safety codes.</p>
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
              Keeping grease off your roof prevents structural damage, fire hazards, and regulatory issues:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div key={0} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-shield-halved text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Prevent Roof Rot</h3>
              <p className="text-body-text text-sm leading-relaxed">Eliminates grease-driven chemical decay of TPO, EPDM, and asphalt roofing membranes.</p>
            </div>
            <div key={1} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-cloud-rain text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Rainwater Separation</h3>
              <p className="text-body-text text-sm leading-relaxed">Hydrophobic filters let rain run off cleanly while locking grease inside the collection mats.</p>
            </div>
            <div key={2} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-fire text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Reduced Fire Spread</h3>
              <p className="text-body-text text-sm leading-relaxed">Eliminates grease trails on the roof that can feed and spread fires across the building.</p>
            </div>
            <div key={3} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-droplet-slash text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Lower Leak Risk</h3>
              <p className="text-body-text text-sm leading-relaxed">Preserves the roof's waterproofing seal, preventing water leaks into the kitchen below.</p>
            </div>
            <div key={4} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-square-check text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Compliance Ready</h3>
              <p className="text-body-text text-sm leading-relaxed">Satisfies fire code NFPA 96 and environmental codes prohibiting grease runoff into stormwater systems.</p>
            </div>
            <div key={5} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-lightbulb text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Avoid Costly Repairs</h3>
              <p className="text-body-text text-sm leading-relaxed">Saves thousands of dollars in commercial roof repairs and structural membrane patches.</p>
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
              <h3 className="text-lg font-bold text-primary-text mb-2">Rooftop Grease Cleaning</h3>
              <p className="text-body-text text-sm leading-relaxed">We scrape and degrease the roof surface around the fan base, restoring a clean surface for installation.</p>
            </div>
            <div key={1} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Drain Pipe Clearance</h3>
              <p className="text-body-text text-sm leading-relaxed">We clean the exhaust fan drain port and pipe to ensure grease drains freely without clogging.</p>
            </div>
            <div key={2} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Base Mat Placement</h3>
              <p className="text-body-text text-sm leading-relaxed">We lay down a multi-layered, fire-resistant grease-absorbing mat base around the exhaust curb.</p>
            </div>
            <div key={3} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                04
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Metal Frame Mounting</h3>
              <p className="text-body-text text-sm leading-relaxed">We secure a stainless steel containment frame over the mat base, keeping filters locked in place.</p>
            </div>
            <div key={4} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                05
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Hydrophobic Filter Install</h3>
              <p className="text-body-text text-sm leading-relaxed">We fit specialized hydrophobic grease-retentive filter layers into the metal frame.</p>
            </div>
            <div key={5} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                06
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Spout Box Attachment</h3>
              <p className="text-body-text text-sm leading-relaxed">We attach a grease box to the fan drain spout, adding grease-absorbing pads to catch dripping oil.</p>
            </div>
            <div key={6} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                07
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Final Inspection</h3>
              <p className="text-body-text text-sm leading-relaxed">We verify the system allows water runoff, secure all components, and take completion photos.</p>
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
              Got questions about Roof Grease Containment Systems Installations schedules, compliance, or logistics? Find detailed answers below:
            </p>
          </div>

          {/* FAQ Accordion Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
            <div className="flex flex-col gap-4">
              <LocalFAQItem question="Why is roof grease containment mandatory for exhaust fans?">
                NFPA 96 mandates that commercial exhaust systems drain grease safely into approved containers. Grease cannot drain directly onto the roof. Containment systems are required to prevent fire risks and roof rot.
              </LocalFAQItem>
              <LocalFAQItem question="How does grease damage commercial roofing membranes?">
                Commercial kitchen grease contains animal fats, vegetable oils, and acids. When it touches membranes like TPO, EPDM, or tar-and-gravel, it chemically degrades the material, causing it to swell, blister, and rot.
              </LocalFAQItem>
              <LocalFAQItem question="What is a hydrophobic grease filter and how does it work?">
                Hydrophobic filters repel water but absorb oils. Rainwater passes through the filter cleanly, but fats, oils, and grease are captured and trapped within the filter media, preventing roof pollution.
              </LocalFAQItem>
            </div>

            <div className="flex flex-col gap-4">
              <LocalFAQItem question="Can grease runoff void my commercial roof warranty?">
                Yes. Most commercial roof manufacturers (like GAF, Johns Manville, Carlisle) exclude damage caused by animal fats or grease from their warranties. Installing containment protects your roof warranty.
              </LocalFAQItem>
              <LocalFAQItem question="How often should rooftop grease containment systems be serviced?">
                Filters and mats should be inspected and replaced every 3 to 6 months. High-volume kitchens (fast food, charbroiling) require quarterly service, while low-volume kitchens may only need semi-annual changes.
              </LocalFAQItem>
              <LocalFAQItem question="Do you clean existing grease damage off the roof prior to installation?">
                Yes. We scrape and degrease the roofing area around the exhaust curb before installation to ensure the new containment system sits on a clean, solid surface.
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
                  <i className="fa-solid fa-fan text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-3">Exhaust Fan Installation</h3>
                <p className="text-body-text text-sm leading-relaxed mb-6">
                  Supply and installation of code-compliant upblast exhaust fans.
                </p>
              </div>
              <a href="/services/kitchen-exhaust-fan-installation" className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:underline">
                Learn more about exhaust fan installation <i className="fa-solid fa-arrow-right text-xs"></i>
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
            Protect Your Roof with Grease Containment
          </h2>
          
          <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Avoid expensive roof damage and comply with NFPA 96 codes. Contact Crossaire today for rooftop grease containment system installation in MD, DC, and VA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#booking-form-section" className="btn-primary w-full sm:w-auto px-8 py-4 font-bold text-center">
              Book Containment Install
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
