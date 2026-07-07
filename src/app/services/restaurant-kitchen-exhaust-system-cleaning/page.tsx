"use client";

import React from "react";
import BookingForm from "@/components/BookingForm";
import LocalFAQItem from "@/components/LocalFAQItem";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE_URL } from "@/lib/site";

export default function ServicePage() {
  return (
    <div className="bg-white min-h-screen">
      <link rel="preload" href="/media/images/gallery/restaurant-kitchen-exhaust-system-cleaning-1.webp" as="image" fetchPriority="high" />
      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Restaurant Kitchen Exhaust System Cleaning",
            "description": "Deep steam cleaning and scraping of commercial restaurant exhaust systems. From hood canopy to rooftop fan, we guarantee NFPA 96 code compliance across MD, DC, and VA.",
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
                "name": "What is included in a complete exhaust system cleaning?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A compliant exhaust cleaning covers the entire system. This includes the hood canopy, the plenum (the area behind the filters), all vertical and horizontal duct runs, and the rooftop exhaust fan blades and housing. Cleaning only the hood is a major code violation."
                }
              },
              {
                "@type": "Question",
                "name": "How long does the exhaust system cleaning process take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "It typically takes 3 to 5 hours. The duration depends on the length of the duct runs, the number of hoods, and the level of grease accumulation. We perform our services overnight or during closed hours to ensure zero business disruption."
                }
              },
              {
                "@type": "Question",
                "name": "How often should we clean our kitchen exhaust system?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Cleaning frequency is governed by NFPA 96. Monthly cleaning is required for solid-fuel cooking (wood/charcoal). Quarterly cleaning is standard for high-volume operations (fast food, charbroiling). Semi-annual cleaning is needed for moderate-volume kitchens, and annual cleaning is sufficient for churches or seasonal operations."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide a before-and-after photo report?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We document our work from start to finish. You will receive a complete digital photo log showing the interior of the hoods, ducts, and rooftop fan before and after our service, providing proof of a thorough clean."
                }
              },
              {
                "@type": "Question",
                "name": "What happens if we skip exhaust system cleaning?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Neglecting your exhaust system creates a severe fire hazard, violates fire codes, and can result in immediate closure by fire marshals. It also causes poor kitchen ventilation, bad odor, premature fan motor failure, and can void your business insurance policy."
                }
              },
              {
                "@type": "Question",
                "name": "Are your technicians certified to sign off on code requirements?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. All Crossaire technicians are fully NFPA 96 certified commercial exhaust cleaners. We apply the official dated compliance stickers required by fire marshals, health inspectors, and insurance adjusters."
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
          style={{ backgroundImage: "url('/media/images/gallery/restaurant-kitchen-exhaust-system-cleaning-1.webp')" }}
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
              Restaurant Kitchen <span className="text-accent">Exhaust System Cleaning</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Eliminate grease fuel sources and restore ventilation efficiency with our complete restaurant exhaust system cleaning. Our certified technicians degrease the entire system—from the hood canopy through all horizontal/vertical duct runs to the rooftop exhaust fan.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/95 font-semibold">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Full NFPA 96 Code Compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Total Rooftop-to-Canopy Degreasing</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Before/After Photo Log Proofs</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Flexible 24/7 After-Hours Dispatch</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Booking Form */}
          <div id="booking-form-section" className="lg:col-span-5 relative w-full">
            <BookingForm initialService="Restaurant Kitchen Exhaust System Cleaning" />
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
                What is Restaurant Kitchen Exhaust System Cleaning?
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-body-text text-base md:text-lg leading-relaxed">
              <p>
                A commercial kitchen exhaust system is designed to carry heat, steam, and vaporized grease away from the cooking line. However, as grease cools, it accumulates on duct walls, filters, and fan blades. This thick grease accumulation is highly flammable and constitutes the primary cause of kitchen fires.
              </p>
              <p>
                Our restaurant exhaust system cleaning involves a comprehensive scraping and high-pressure steam washing of the entire system. We clean all accessible portions of the exhaust line down to bare metal, applying official certification labels to satisfy fire inspectors, health officials, and insurance requirements.
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
              Why Restaurant Exhaust System Cleaning Matters
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              Routine exhaust system maintenance is critical to keeping your restaurant safe, legal, and operational. Here is why it is essential:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <i className="fa-solid fa-fire text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Absolute Fire Safety</h3>
              <p className="text-body-text text-sm leading-relaxed">
                Over 70% of restaurant fires start in the kitchen ventilation ducts. Thoroughly removing grease blockages down to bare metal eliminates the fuel source.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <i className="fa-solid fa-clipboard-list text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Fire Marshal Compliance</h3>
              <p className="text-body-text text-sm leading-relaxed">
                NFPA 96 codes dictate regular certified cleaning schedules for kitchen exhaust systems. Non-compliance results in heavy fines or immediate closure.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <i className="fa-solid fa-wind text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Proper Air Ventilation</h3>
              <p className="text-body-text text-sm leading-relaxed">
                A grease-choked duct restricts airflow, keeping heat, odors, and smoke trapped inside the kitchen, leading to a hot and hazardous work environment.
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
              Signs Your Exhaust System Needs Immediate Cleaning
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              Watch for these common warning signals in your restaurant's ventilation. If present, book a deep clean immediately:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div key={0} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-filter text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Heavy Grease Coating Filters</h3>
                <p className="text-body-text text-sm leading-relaxed">Filters that look thick, sticky, or blocked prevent grease vapors from venting properly.</p>
              </div>
            </div>
            <div key={1} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-smog text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Haze and Smoke in Kitchen</h3>
                <p className="text-body-text text-sm leading-relaxed">A constant smoke haze during cooking hours shows that exhaust draw is severely obstructed.</p>
              </div>
            </div>
            <div key={2} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-droplet text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Oil Dripping from Duct Seams</h3>
                <p className="text-body-text text-sm leading-relaxed">Grease escaping from ductwork connections inside the ceiling or walls indicates an overloaded system.</p>
              </div>
            </div>
            <div key={3} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-volume-high text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Loud Exhaust Fan Noises</h3>
                <p className="text-body-text text-sm leading-relaxed">Screeching or vibration from the rooftop fan means grease weight has thrown the blades out of balance.</p>
              </div>
            </div>
            <div key={4} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-face-grimace text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Rancid Oil Odors</h3>
                <p className="text-body-text text-sm leading-relaxed">Burnt grease smells leaking into the dining area ruin guest experiences and point to system neglect.</p>
              </div>
            </div>
            <div key={5} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
              <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl text-red-500">
                <i className="fa-solid fa-calendar-xmark text-3xl"></i>
              </div>
              <div>
                <h3 className="font-bold text-primary-text mb-1 text-base">Overdue Inspection Date</h3>
                <p className="text-body-text text-sm leading-relaxed">The compliance sticker on the hood indicates your cleaning window has expired according to local regulations.</p>
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
              <img src="/media/images/gallery/restaurant-kitchen-exhaust-system-cleaning-2.webp" alt="Restaurant Kitchen Exhaust System Cleaning Showcase" className="absolute inset-0 w-full h-full object-cover" width={800} height={600} />
            </div>

            {/* Right Column: Features List */}
            <div className="flex flex-col">
              <div key={0} className={`flex gap-6 items-start ${0 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-wind text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Complete Duct Degreasing</h3>
                  <p className="text-body-text text-sm leading-relaxed">High-pressure hot water flush and scrape of all vertical and horizontal ductwork paths.</p>
                </div>
              </div>
              <div key={1} className={`flex gap-6 items-start ${1 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-fan text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Rooftop Exhaust Fan Scrubbing</h3>
                  <p className="text-body-text text-sm leading-relaxed">Scraping and steam-washing the fan housing, blades, and grease drip pans on the roof.</p>
                </div>
              </div>
              <div key={2} className={`flex gap-6 items-start ${2 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-hands-bubbles text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Hood Canopy Polishing</h3>
                  <p className="text-body-text text-sm leading-relaxed">Degreasing the interior plenum, washing structural components, and hand-polishing the stainless steel.</p>
                </div>
              </div>
              <div key={3} className={`flex gap-6 items-start ${3 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-filter text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Baffle Filter Deep Soaking</h3>
                  <p className="text-body-text text-sm leading-relaxed">Removing all filters, deep-soaking in degreasing tanks, pressure cleaning, and reinstalling.</p>
                </div>
              </div>
              <div key={4} className={`flex gap-6 items-start ${4 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-screwdriver-wrench text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Access Panel Cleanout</h3>
                  <p className="text-body-text text-sm leading-relaxed">Cleaning through existing access points and sealing them liquid-tight after finishing the service.</p>
                </div>
              </div>
              <div key={5} className={`flex gap-6 items-start ${5 < 6 - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-certificate text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">NFPA 96 Compliance Sticker</h3>
                  <p className="text-body-text text-sm leading-relaxed">Affixing dated certification labels to prove compliant maintenance to inspectors and insurers.</p>
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
              Maintaining a clean exhaust pathway goes beyond safety—it saves money and optimizes your commercial facilities:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div key={0} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-shield-halved text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Lower Fire Risk</h3>
              <p className="text-body-text text-sm leading-relaxed">Removes flammable grease fuel to protect staff, patrons, and property from catastrophic fires.</p>
            </div>
            <div key={1} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-gears text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Optimal Fan Performance</h3>
              <p className="text-body-text text-sm leading-relaxed">Saves energy and extends exhaust fan motor life by reducing mechanical drag and friction.</p>
            </div>
            <div key={2} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-leaf text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Better Air Circulation</h3>
              <p className="text-body-text text-sm leading-relaxed">Maintains strong air draft to remove excess heat, carbon monoxide, and cooking fumes.</p>
            </div>
            <div key={3} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-square-check text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Pass Code Inspections</h3>
              <p className="text-body-text text-sm leading-relaxed">Keeps your business prepared for random health department or fire safety inspector visits.</p>
            </div>
            <div key={4} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-spray-can-sparkles text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Odor Control</h3>
              <p className="text-body-text text-sm leading-relaxed">Eliminates stagnant grease smell, maintaining a fresh and welcoming dining room environment.</p>
            </div>
            <div key={5} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
              <i className="fa-solid fa-lightbulb text-4xl text-accent mb-6 block"></i>
              <h3 className="text-lg font-bold text-primary-text mb-2">Lower Energy Bills</h3>
              <p className="text-body-text text-sm leading-relaxed">Motors drawing air through clear, degreased ducts consume less electricity, lowering utility costs.</p>
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
              <h3 className="text-lg font-bold text-primary-text mb-2">Site Protection & Draping</h3>
              <p className="text-body-text text-sm leading-relaxed">We wrap kitchen appliances, prep tables, and floors in heavy plastic sheeting to catch all water and grease runoff.</p>
            </div>
            <div key={1} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                02
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Rooftop Inspection</h3>
              <p className="text-body-text text-sm leading-relaxed">Our technicians access the roof to inspect the upblast fan, belt, bearings, and motor electrical connections.</p>
            </div>
            <div key={2} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                03
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Filter Soaking & Plenums</h3>
              <p className="text-body-text text-sm leading-relaxed">We remove the baffle filters, place them in a chemical soak tank, and scrape away thick grease layers from the hood canopy.</p>
            </div>
            <div key={3} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                04
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Chemical Degreasing Foam</h3>
              <p className="text-body-text text-sm leading-relaxed">We apply heavy-duty, biodegradable chemical degreaser to the entire duct network and rooftop fan assembly.</p>
            </div>
            <div key={4} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                05
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Pressure Steam Flush</h3>
              <p className="text-body-text text-sm leading-relaxed">We use high-temperature pressure washers (200°F+) to flush grease out of the duct runs and into containment bins.</p>
            </div>
            <div key={5} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                06
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Detailing & Sanitize</h3>
              <p className="text-body-text text-sm leading-relaxed">Technicians dry all ductwork, polish the hood canopy, clean the exhaust filters, and mop the kitchen floors.</p>
            </div>
            <div key={6} className="relative">
              {/* Step circle */}
              <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                07
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Compliance Documentation</h3>
              <p className="text-body-text text-sm leading-relaxed">We apply a dated NFPA 96 compliance label and send a comprehensive before-and-after digital photo log.</p>
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
              Got questions about Restaurant Kitchen Exhaust System Cleaning schedules, compliance, or logistics? Find detailed answers below:
            </p>
          </div>

          {/* FAQ Accordion Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
            <div className="flex flex-col gap-4">
              <LocalFAQItem question="What is included in a complete exhaust system cleaning?">
                A compliant exhaust cleaning covers the entire system. This includes the hood canopy, the plenum (the area behind the filters), all vertical and horizontal duct runs, and the rooftop exhaust fan blades and housing. Cleaning only the hood is a major code violation.
              </LocalFAQItem>
              <LocalFAQItem question="How long does the exhaust system cleaning process take?">
                It typically takes 3 to 5 hours. The duration depends on the length of the duct runs, the number of hoods, and the level of grease accumulation. We perform our services overnight or during closed hours to ensure zero business disruption.
              </LocalFAQItem>
              <LocalFAQItem question="How often should we clean our kitchen exhaust system?">
                Cleaning frequency is governed by NFPA 96. Monthly cleaning is required for solid-fuel cooking (wood/charcoal). Quarterly cleaning is standard for high-volume operations (fast food, charbroiling). Semi-annual cleaning is needed for moderate-volume kitchens, and annual cleaning is sufficient for churches or seasonal operations.
              </LocalFAQItem>
            </div>

            <div className="flex flex-col gap-4">
              <LocalFAQItem question="Do you provide a before-and-after photo report?">
                Yes. We document our work from start to finish. You will receive a complete digital photo log showing the interior of the hoods, ducts, and rooftop fan before and after our service, providing proof of a thorough clean.
              </LocalFAQItem>
              <LocalFAQItem question="What happens if we skip exhaust system cleaning?">
                Neglecting your exhaust system creates a severe fire hazard, violates fire codes, and can result in immediate closure by fire marshals. It also causes poor kitchen ventilation, bad odor, premature fan motor failure, and can void your business insurance policy.
              </LocalFAQItem>
              <LocalFAQItem question="Are your technicians certified to sign off on code requirements?">
                Yes. All Crossaire technicians are fully NFPA 96 certified commercial exhaust cleaners. We apply the official dated compliance stickers required by fire marshals, health inspectors, and insurance adjusters.
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
                  Deep degreasing and polishing of the commercial kitchen hood canopy to maintain fire safety.
                </p>
              </div>
              <a href="/services/kitchen-hood-cleaning" className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:underline">
                Learn more about kitchen hood cleaning <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                  <i className="fa-solid fa-screwdriver-wrench text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-3">Exhaust Fan Repairs</h3>
                <p className="text-body-text text-sm leading-relaxed mb-6">
                  Complete repair services for upblast rooftop exhaust fans including motors and belts.
                </p>
              </div>
              <a href="/services/kitchen-exhaust-fan-repairs" className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:underline">
                Learn more about exhaust fan repairs <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                  <i className="fa-solid fa-certificate text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-3">Kitchen Hood Inspections</h3>
                <p className="text-body-text text-sm leading-relaxed mb-6">
                  NFPA 96 compliance code inspections and system audits for fire safety certification.
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
            Schedule Your Complete Exhaust System Cleaning
          </h2>
          
          <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Protect your commercial kitchen from grease fire hazards. Contact Crossaire today for certified, after-hours exhaust system cleaning in MD, DC, and VA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#booking-form-section" className="btn-primary w-full sm:w-auto px-8 py-4 font-bold text-center">
              Schedule System Cleaning
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
