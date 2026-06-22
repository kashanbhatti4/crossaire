import React from "react";
import LocalFAQItem from "@/components/LocalFAQItem";
// import CoverageMap from "@/components/CoverageMap"; // hidden per request
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "About Crossaire | Commercial Kitchen Exhaust & Safety Experts",
  description: "Learn about Crossaire's story, mission, values, and why leading restaurant brands across MD, DC, and VA trust us for certified NFPA 96 kitchen hood cleaning.",
  keywords: "about crossaire, kitchen safety experts, commercial exhaust cleaning company, NFPA 96 certified technicians",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      <link rel="preload" href="/media/images/why-people-trust.webp" as="image" fetchPriority="high" />
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Crossaire",
            "description": "Crossaire is the premier NFPA 96 certified commercial kitchen exhaust safety expert serving Maryland, DC, and Virginia.",
            "mainEntity": {
              "@type": "LocalBusiness",
              "name": "Crossaire",
              "telephone": "571-723-1406",
              "image": "https://crossaire.vercel.app/media/images/logo.webp",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Glen Burnie",
                "addressRegion": "MD",
                "addressCountry": "US"
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
                "name": "Is Crossaire fully licensed and insured?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Crossaire is fully licensed, bonded, and insured, alongside full workers' compensation coverage for our technicians."
                }
              },
              {
                "@type": "Question",
                "name": "What credentials do your kitchen hood technicians hold?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "All of our commercial exhaust system cleaning technicians are fully trained and certified in compliance with NFPA 96 standard protocols. They also undergo regular safety workshops and background checks."
                }
              },
              {
                "@type": "Question",
                "name": "Do you service kitchens overnight or during closed hours?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We schedule all commercial cleanings during your facility's closed or off-peak hours—typically overnight—to guarantee zero disruption to your staff and business operations."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide compliance documentation for fire inspectors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Absolutely. Once a cleaning is completed, we apply an official, dated NFPA 96 certification sticker to your hood showing the service date, next cleaning date, and technician details. We also deliver a detailed digital photo report with before/after photos for your records."
                }
              },
              {
                "@type": "Question",
                "name": "What geographical areas do you cover?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We actively service commercial kitchens throughout the entire Maryland, Washington DC, and Virginia (MD, DC, VA) metro areas."
                }
              },
              {
                "@type": "Question",
                "name": "How do you ensure my kitchen remains clean after service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our team is highly trained in workspace isolation. We cover all equipment, ranges, prep lines, and floors in heavy plastic draping to catch any runoff water and degreasing agents, leaving your kitchen pristine."
                }
              }
            ]
          })
        }}
      />
      {/* 1. PAGE HEADER (white bg) */}
      <section className="pt-32 pb-16 px-6 bg-white border-b border-border-stroke/40">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="subtitle-badge block mb-3">
            (Get to Know Us)
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary-text mb-6 leading-[1.1]">
            About <span className="text-accent">Crossaire</span>
          </h1>
          <p className="text-body-text text-lg md:text-xl leading-relaxed max-w-3xl">
            We are Maryland, DC, and Virginia's premier NFPA 96 certified commercial kitchen exhaust safety experts. We exist to protect kitchen staff, patrons, and facilities from fire hazards while guaranteeing absolute regulatory compliance.
          </p>
        </div>
      </section>

      {/* 1.5 HERO STAT CARDS SECTION (dark image bg) */}
      <section className="relative text-white py-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/media/images/why-people-trust.webp')" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#0C1A2B]/92" />
        
        {/* Floating Masonry Cards Grid */}
        <div className="relative z-10 max-w-5xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-4 pb-4">
          
          {/* Card 1: Compliance */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:bg-white/10 md:-translate-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-6 shadow-inner">
                <i className="fa-solid fa-shield-halved text-xl"></i>
              </div>
              <div className="text-4xl font-extrabold text-white mb-1">100%</div>
              <h3 className="font-bold text-base text-accent mb-3">Certified Compliance</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Fully certified under NFPA 96 standard protocols to ensure your ventilation system passes all local fire marshal and health department audits.
              </p>
            </div>
          </div>

          {/* Card 2: Insurance */}
          <div className="bg-[#1C6CCF]/10 border border-[#1C6CCF]/20 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:bg-[#1C6CCF]/15 md:translate-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white mb-6 shadow-inner">
                <i className="fa-solid fa-lock text-xl"></i>
              </div>
              <div className="text-4xl font-extrabold text-white mb-1">Licensed</div>
              <h3 className="font-bold text-base text-white mb-3">& Insured</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Rest easy knowing your kitchen property and operations are protected — we are fully licensed, bonded, and insured.
              </p>
            </div>
          </div>

          {/* Card 3: Availability */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:bg-white/10 md:-translate-y-1 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center text-accent mb-6 shadow-inner">
                <i className="fa-solid fa-clock-rotate-left text-xl"></i>
              </div>
              <div className="text-4xl font-extrabold text-white mb-1">24/7</div>
              <h3 className="font-bold text-base text-accent mb-3">Closed-Hour Dispatch</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Flexible overnight and after-hours scheduling that aligns with your kitchen downtime to eliminate any operational disruptions.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-24 px-6 bg-white border-b border-border-stroke animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Story Text */}
            <div className="lg:col-span-7 flex flex-col justify-center text-left">
              <span className="subtitle-badge block mb-3">(OUR STORY)</span>
              <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary-text mb-6 leading-[1.2]">
                How We Built a <span className="text-accent">Trusted Safety Brand</span>
              </h2>
              <div className="space-y-6 text-body-text text-base md:text-lg leading-relaxed">
                <p>
                  Crossaire was founded with a singular, clear goal: to bring honesty, certified expertise, and absolute reliability to the commercial kitchen exhaust cleaning industry. Recognizing that many facilities struggled with unreliable scheduling, hidden fees, and inadequate cleanings that failed fire code audits, we set out to build a different kind of service company.
                </p>
                <p>
                  We began with a small, dedicated team of NFPA 96 certified technicians, investing heavily in state-of-the-art pressure washing equipment, food-safe biodegradable degreasers, and transparent digital reporting tools. By delivering detailed before-and-after photo logs and standardizing itemized pricing, we quickly earned the trust of local restaurant owners.
                </p>
                <p>
                  Today, Crossaire is proud to serve leading restaurant brands, hotel kitchens, school cafeterias, and corporate dining facilities across Maryland, Washington DC, and Virginia. While we have grown, our commitment to detail, compliance, and fire safety remains unchanged.
                </p>
              </div>
            </div>

            {/* Right Column: Image Card */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-[4/5] border border-border-stroke shadow-md bg-white">
              <img 
                src="/media/images/gallery/kitchen-hood-cleaning-3.webp" 
                alt="Crossaire technician performing precise kitchen hood exhaust cleaning" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR MISSION */}
      <section className="py-20 px-6 bg-main-bg border-b border-border-stroke animate-on-scroll">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <span className="subtitle-badge block mb-4">(OUR PURPOSE)</span>
          <h2 className="text-2xl md:text-3xl font-bold text-primary-text leading-relaxed tracking-tight max-w-3xl">
            "To safeguard commercial establishments, protect kitchen personnel, and maintain absolute compliance through certified kitchen exhaust cleaning, transparent pricing, and meticulous workmanship."
          </h2>
        </div>
      </section>

      {/* 4. COMPANY VALUES */}
      <section className="py-24 px-6 bg-white border-b border-border-stroke animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col items-center mb-16">
            <span className="subtitle-badge">(WHAT DRIVES US)</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight mb-4">
              Our Core Company Values
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              These fundamental principles guide every decision we make, from hiring technicians to completing deep cleanings:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col items-start">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <i className="fa-solid fa-shield-halved text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Safety First</h3>
              <p className="text-body-text text-sm leading-relaxed">
                We prioritize the safety of your kitchen, employees, and customers above all else, ensuring full compliance with NFPA 96 standards.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col items-start">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <i className="fa-solid fa-handshake text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Uncompromising Integrity</h3>
              <p className="text-body-text text-sm leading-relaxed">
                No hidden fees, no cut corners. We do honest, exhaustive cleaning down to bare metal and verify our work with photo evidence.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col items-start">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <i className="fa-solid fa-magnifying-glass text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Total Transparency</h3>
              <p className="text-body-text text-sm leading-relaxed">
                We provide upfront, itemized estimates and comprehensive post-service digital reports with before/after photos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col items-start">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <i className="fa-solid fa-award text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Meticulous Excellence</h3>
              <p className="text-body-text text-sm leading-relaxed">
                From the hood canopy inside your kitchen to the exhaust fan on your roof, we scrub, scrape, and polish every inch with precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WHO WE SERVE */}
      <section className="py-24 px-6 bg-main-bg border-b border-border-stroke animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start mb-16 text-left">
            <span className="subtitle-badge">(OUR CLIENTELE)</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight mb-4">
              Serving Diverse Commercial Kitchens
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              We provide customized ventilation safety solutions for facilities of all sizes, from local independent diners to massive institutional kitchens:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Restaurants & Diners",
                desc: "High-volume charbroilers, fry lines, and wok ranges requiring periodic, heavy-duty degreasing.",
                icon: <i className="fa-solid fa-utensils text-2xl text-accent"></i>
              },
              {
                title: "Hotels & Resorts",
                desc: "Maintaining large multi-kitchen ventilation networks with zero impact on guest operations.",
                icon: <i className="fa-solid fa-hotel text-2xl text-accent"></i>
              },
              {
                title: "Schools & Universities",
                desc: "Ensuring educational campus dining halls pass health audits and fire marshal code reviews.",
                icon: <i className="fa-solid fa-graduation-cap text-2xl text-accent"></i>
              },
              {
                title: "Corporate Facilities",
                desc: "Serving employee cafeterias and corporate office complexes with clean and efficient exhaust systems.",
                icon: <i className="fa-solid fa-building text-2xl text-accent"></i>
              },
              {
                title: "Healthcare & Hospitals",
                desc: "Upholding the strict sanitary and ventilation safety standards required for patient food preparation.",
                icon: <i className="fa-solid fa-hospital text-2xl text-accent"></i>
              },
              {
                title: "Food Halls & Ghost Kitchens",
                desc: "Managing complex shared exhaust networks and ventilation systems for multi-tenant setups.",
                icon: <i className="fa-solid fa-kitchen-set text-2xl text-accent"></i>
              }
            ].map((srv, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-border-stroke/60 hover:shadow-md transition-all flex flex-col justify-start">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                  {srv.icon}
                </div>
                <h3 className="text-lg font-bold text-primary-text mb-2">{srv.title}</h3>
                <p className="text-body-text text-sm leading-relaxed">{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-24 px-6 bg-white border-b border-border-stroke animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-left">
            <span className="subtitle-badge block mb-3">(WHY PEOPLE TRUST US)</span>
            <h2 className="text-4xl md:text-[56px] font-extrabold tracking-tight leading-tight text-primary-text">
              The Crossaire <span className="text-accent">Difference</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column: Image Card */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-border-stroke shadow-md bg-white">
              <img 
                src="/media/images/gallery/kitchen-hood-inspections-1.webp" 
                alt="Certified Commercial Exhaust Safety Technician performing compliance verification" 
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </div>

            {/* Right Column: Features List */}
            <div className="flex flex-col">
              {/* Feature 1 */}
              <div className="flex gap-6 items-start pb-8 border-b border-border-stroke/60 mb-8">
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-user-shield text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Expert, Certified Technicians</h3>
                  <p className="text-body-text text-sm leading-relaxed">
                    Get peace of mind with our fully certified and background-checked technicians—trusted professionals who ensure full NFPA 96 compliance.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-6 items-start pb-8 border-b border-border-stroke/60 mb-8">
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-file-invoice-dollar text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">Upfront, Transparent Pricing</h3>
                  <p className="text-body-text text-sm leading-relaxed">
                    No hidden fees or surprises—just clear, honest, itemized pricing you can trust. Know exactly what you'll pay before we start.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <i className="fa-solid fa-headset text-xl"></i>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-2">24/7 Rapid Response</h3>
                  <p className="text-body-text text-sm leading-relaxed">
                    Kitchen exhaust emergencies can happen anytime. That's why our certified team is available around the clock for rapid dispatch.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SERVICE AREAS — hidden per request */}
      {/* <CoverageMap /> */}

      {/* 8. FREQUENTLY ASKED QUESTIONS (FAQs) */}
      <section id="faqs" className="py-24 px-6 bg-[#F4F6F8] border-b border-border-stroke animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center flex flex-col items-center mb-16">
            <span className="subtitle-badge">(ABOUT CROSSAIRE)</span>
            <h2 className="text-3xl md:text-[44px] font-extrabold tracking-tight text-primary-text leading-[1.2] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-3xl mx-auto">
              Find detailed answers below to learn more about our company operations, credentials, and scheduling:
            </p>
          </div>

          {/* FAQ Accordion Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
            <div className="flex flex-col gap-4">
              <LocalFAQItem question="Is Crossaire fully licensed and insured?">
                Yes. Crossaire is fully licensed, bonded, and insured, alongside full workers' compensation coverage for our technicians.
              </LocalFAQItem>

              <LocalFAQItem question="What credentials do your kitchen hood technicians hold?">
                All of our commercial exhaust system cleaning technicians are fully trained and certified in compliance with NFPA 96 standard protocols. They also undergo regular safety workshops and background checks.
              </LocalFAQItem>

              <LocalFAQItem question="Do you service kitchens overnight or during closed hours?">
                Yes. We schedule all commercial cleanings during your facility's closed or off-peak hours—typically overnight—to guarantee zero disruption to your staff and business operations.
              </LocalFAQItem>
            </div>

            <div className="flex flex-col gap-4">
              <LocalFAQItem question="Do you provide compliance documentation for fire inspectors?">
                Absolutely. Once a cleaning is completed, we apply an official, dated NFPA 96 certification sticker to your hood showing the service date, next cleaning date, and technician details. We also deliver a detailed digital photo report with before/after photos for your records.
              </LocalFAQItem>

              <LocalFAQItem question="What geographical areas do you cover?">
                We actively service commercial kitchens throughout the entire Maryland, Washington DC, and Virginia (MD, DC, VA) metro areas.
              </LocalFAQItem>

              <LocalFAQItem question="How do you ensure my kitchen remains clean after service?">
                Our team is highly trained in workspace isolation. We cover all equipment, ranges, prep lines, and floors in heavy plastic draping to catch any runoff water and degreasing agents, leaving your kitchen pristine.
              </LocalFAQItem>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION (CTA) */}
      <section className="py-24 px-6 bg-[#0C1A2B] text-white relative overflow-hidden">
        {/* Accent Glow background blur */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-[120px]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-4">(Start Clean. Stay Compliant.)</span>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Work with Maryland, DC & VA's Trusted Kitchen Safety Experts
          </h2>
          
          <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Connect with Crossaire for professional inspections, grease removal, and official certification stickers. Available 24/7/365.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/#booking-form-section" className="btn-primary w-full sm:w-auto px-8 py-4 font-bold text-center">
              Request A Quote
            </a>
            <a href="tel:5717231406" className="w-full sm:w-auto border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg transition-all text-center flex items-center justify-center gap-2">
              <i className="fa-solid fa-phone text-sm"></i>
              <span>Call 571-723-1406</span>
            </a>
          </div>
        </div>
      </section>

      {/* Scroll Reveal Trigger */}
      <ScrollReveal />
    </div>
  );
}
