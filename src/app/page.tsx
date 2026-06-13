/* eslint-disable @next/next/no-img-element */
import React from "react";
import BookingForm from "@/components/BookingForm";
import Gallery from "@/components/Gallery";
import CoverageMap from "@/components/CoverageMap";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import ScrollReveal from "@/components/ScrollReveal";

interface HomeServiceItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const homeServices: HomeServiceItem[] = [
  {
    title: "Kitchen Hood Cleaning",
    desc: "Thorough NFPA 96 compliant degreasing and cleaning of your hoods, filters, plenums, and vertical/horizontal ducts to eliminate fire hazards.",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M9 2h6v7h5l2 9H2l2-9h5V2z" />
        <path fill="white" d="M5 15h6v1.5H5zm8 0h6v1.5h-6z" />
      </svg>
    )
  },
  {
    title: "Restaurant Kitchen Exhaust System Cleaning",
    desc: "Complete, top-to-bottom scrubbing and degreasing of the entire kitchen exhaust duct network, ensuring maximum ventilation efficiency and safety.",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M4 17h16v2H4zm0-6h16v2H4zm0-6h16v2H4z" opacity=".3" />
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 6h16v4H4V6zm16 12H4v-4h16v4z" />
      </svg>
    )
  },
  {
    title: "Kitchen Exhaust Fan Repairs",
    desc: "Rapid repair services for exhaust fan motors, belts, pulleys, bearings, and electrical components to resolve noise, vibration, and performance issues.",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1.78-10.78l-4 4c-.29.29-.77.29-1.06 0l-1-1c-.29-.29-.29-.77 0-1.06l4-4c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06z" />
        <path d="M14.5 14.5l4-4c.29-.29.77-.29 1.06 0l1 1c.29.29.29.77 0 1.06l-4 4c-.29.29-.77.29-1.06 0l-1-1c-.29-.29-.29-.77 0-1.06z" />
      </svg>
    )
  },
  {
    title: "Kitchen Exhaust Fan Installation",
    desc: "Code-compliant rooftop and wall-mounted exhaust fan installations designed to meet dynamic air volume requirements for high-output kitchens.",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 512 512">
        <path d="M352.57 128c-28.09 0-54.09 4.52-77.06 12.86l12.41-123.11C289 7.31 279.81-1.18 269.33.13 189.63 10.13 128 77.64 128 159.43c0 28.09 4.52 54.09 12.86 77.06L17.75 224.08C7.31 223-1.18 232.19.13 242.67c10 79.7 77.51 141.33 159.3 141.33 28.09 0 54.09-4.52 77.06-12.86l-12.41 123.11c-1.05 10.43 8.11 18.93 18.59 17.62 79.7-10 141.33-77.51 141.33-159.3 0-28.09-4.52-54.09-12.86-77.06l123.11 12.41c10.43 1.05 18.93-8.11 17.62-18.59-10-79.7-77.51-141.33-159.3-141.33zM256 320c-35.35 0-64-28.65-64-64s28.65-64 64-64 64 28.65 64 64-28.65 64-64 64z" />
      </svg>
    )
  },
  {
    title: "Grease Trap Cleaning",
    desc: "Thorough vacuuming and cleaning of under-sink and outdoor in-ground grease traps, including full scraping and legal disposal certification.",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M18,13H14V11H18V13M22,11V13H20V15H18V13H6V15H4V13H2V11H4V9H6V11H18V9H20V11H22Z" />
      </svg>
    )
  },
  {
    title: "Pollution Control Systems Maintenance",
    desc: "Maintenance, diagnostics, electrostatic precipitator cell cleaning, and charcoal/media filter replacements for heavy-duty pollution control units.",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 1 .75.75v1.257a3.001 3.001 0 0 1 0 5.486V21a.75.75 0 0 1-1.5 0V9.743a3.001 3.001 0 0 1 0-5.486V3a.75.75 0 0 1 .75-.75Zm9 0a.75.75 0 0 1 .75.75v7.257a3.001 3.001 0 0 1 0 5.486V21a.75.75 0 0 1-1.5 0v-5.257a3.001 3.001 0 0 1 0-5.486V3a.75.75 0 0 1 .75-.75Zm9 0a.75.75 0 0 1 .75.75v1.257a3.001 3.001 0 0 1 0 5.486V21a.75.75 0 0 1-1.5 0V9.743a3.001 3.001 0 0 1 0-5.486V3a.75.75 0 0 1 .75-.75ZM3 6.75a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9 6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Zm9-6a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" clipRule="evenodd" />
      </svg>
    )
  },
  {
    title: "Kitchen Hood Startups and Commissioning",
    desc: "Airflow balancing, static pressure measurements, and system integration testing for new commercial kitchen ventilation hoods prior to local inspections.",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
      </svg>
    )
  },
  {
    title: "Roof Grease Containment Systems Installations",
    desc: "Customized roof containment system designs and installations utilizing multi-layered absorbent filters to prevent structural damage and roof rot.",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M2 13L12 4l10 9-1.5 1.5-8.5-7.6-8.5 7.6L2 13z" />
        <path d="M12 8c-2.2 3.5-2.2 7 0 9.2 2.2-2.2 2.2-5.7 0-9.2z" />
      </svg>
    )
  },
  {
    title: "Restaurant Hood Filter Cleaning & Exchange",
    desc: "Regular exchange of clean, commercial-grade stainless steel baffle filters, removing loaded filters for professional off-site sanitizing.",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M19 8l-4 4h3c0 3.3-2.7 6-6 6-1.7 0-3.1-.7-4.2-1.8L6.4 18.6C7.8 20 9.8 20.8 12 20.8c4.4 0 8-3.6 8-8H23l-4-4.8zM6 16.8c0-3.3 2.7-6 6-6 1.7 0 3.1.7 4.2 1.8l1.4-1.4c-1.4-1.4-3.4-2.2-5.6-2.2-4.4 0-8 3.6-8 8H1l4 4.8 4-4.8H6z" />
      </svg>
    )
  },
  {
    title: "Kitchen Exhaust Duct Repair & Access Panel Installation",
    desc: "Installation of NFPA 96 approved, fire-rated duct access panels in horizontal and vertical ducts to facilitate thorough inspection and cleaning access.",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.3C.5 6.7.9 9.8 2.9 11.8c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.5z" />
      </svg>
    )
  },
  {
    title: "Kitchen Hood Inspections",
    desc: "Certified, independent NFPA 96 fire safety inspections, comprehensive duct camera imaging, and official compliance reports for fire marshals and insurers.",
    icon: (
      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
        <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    )
  }
];

export default function Home() {
  return (
    <>
      <ScrollReveal />
      {/* SECTION 1: Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center pt-80 pb-8 lg:pt-24 lg:pb-16 px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 lg:items-end items-center">
          
          {/* Left Info Block */}
          <div className="lg:col-span-7 text-white flex flex-col justify-end">
            <h1 className="display-title text-white mb-1 lg:mb-3 max-w-2xl">
              Stress-Free Commercial Kitchen Safety
            </h1>
            <p className="text-white/80 text-sm lg:text-lg max-w-xl mb-0 leading-relaxed">
              Ensure full NFPA 96 compliance and protect your kitchen with our certified exhaust cleaning. Available 24/7 in MD, DC, and VA.
            </p>
          </div>

          {/* Right Interactive Form Card Block */}
          <div id="booking-form-section" className="lg:col-span-5 relative w-full">
            <BookingForm />

            {/* Hours & Phone Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {/* Phone Block */}
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-accent shrink-0">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97a1.521 1.521 0 0 0-.328 1.96 11.96 11.96 0 0 0 5.758 5.759 1.521 1.521 0 0 0 1.96-.328l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-white/50 font-bold">Call Toll-Free</span>
                  <a href="tel:8663992885" className="text-base font-extrabold text-white hover:text-accent transition-colors">866-399-2885</a>
                </div>
              </div>

              {/* Work Hours Block */}
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-accent shrink-0">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-white/50 font-bold">Operational Hours</span>
                  <span className="text-base font-extrabold text-white">24/7/365 Service</span>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* SECTION 2: Trust Badges */}
      <section className="bg-white border-y border-border-stroke py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-start sm:justify-items-center items-center">
            {/* Badge 1 */}
            <div className="flex items-center gap-4 md:gap-3 w-full max-w-sm sm:max-w-none">
              <div className="w-12 h-12 md:w-10 md:h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                <svg className="w-6 h-6 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.08a.75.75 0 1 0-1.22-.87l-3.146 4.41-1.299-1.3a.75.75 0 0 0-1.06 1.06l1.875 1.875a.75.75 0 0 0 1.14-.1l3.75-5.25Z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <span className="block text-base md:text-sm font-bold text-primary-text leading-tight">NFPA 96 Certified</span>
                <span className="block text-xs md:text-[11px] text-body-text font-semibold uppercase tracking-wider">Strict Compliance</span>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center gap-4 md:gap-3 w-full max-w-sm sm:max-w-none">
              <div className="w-12 h-12 md:w-10 md:h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                <svg className="w-6 h-6 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.5 2.5a.75.75 0 0 0 1.137-.089l4.026-5.636Z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <span className="block text-base md:text-sm font-bold text-primary-text leading-tight">OSHA Compliant</span>
                <span className="block text-xs md:text-[11px] text-body-text font-semibold uppercase tracking-wider">Safe Operations</span>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center gap-4 md:gap-3 w-full max-w-sm sm:max-w-none">
              <div className="w-12 h-12 md:w-10 md:h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                <svg className="w-6 h-6 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <span className="block text-base md:text-sm font-bold text-primary-text leading-tight">$5M Liability Insured</span>
                <span className="block text-xs md:text-[11px] text-body-text font-semibold uppercase tracking-wider">Fully Insured</span>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="flex items-center gap-4 md:gap-3 w-full max-w-sm sm:max-w-none">
              <div className="w-12 h-12 md:w-10 md:h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                <svg className="w-6 h-6 md:w-5 md:h-5 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <span className="block text-base md:text-sm font-bold text-primary-text leading-tight">100% Satisfaction</span>
                <span className="block text-xs md:text-[11px] text-body-text font-semibold uppercase tracking-wider">Guaranteed Results</span>
              </div>
            </div>
          </div>

          {/* Industry Certifications & Affiliations Row */}
          <div className="border-t border-border-stroke/60 mt-10 pt-10 flex flex-col items-center justify-center text-center">
            <span className="text-[11px] uppercase tracking-widest font-extrabold text-body-text/60 mb-6 block">
              Our Industry Certifications & Affiliations
            </span>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              <div className="relative group">
                <img src="/media/images/emblem1.png" alt="Certification Emblem 1" className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="relative group">
                <img src="/media/images/emblem2.png" alt="Certification Emblem 2" className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="relative group">
                <img src="/media/images/emblem3.png" alt="Certification Emblem 3" className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Who We Are */}
      <section id="who-we-are" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col items-end text-right animate-on-scroll">
          <span className="text-sm uppercase tracking-wider font-extrabold text-accent block mb-6">(WHO WE ARE)</span>
          
          <h2 className="text-3xl md:text-[48px] font-extrabold tracking-tight text-primary-text mb-12 leading-[1.15] max-w-4xl">
            NFPA 96 certified, background-checked pros delivering clean, code-compliant exhaust cleaning across MD, DC & VA, with honest pricing—no surprises.
          </h2>
          
          <p className="text-body-text text-base md:text-lg leading-relaxed max-w-3xl">
            Crossaire provides reliable service with a commitment to quality. Trusted by customers across MD, DC, and VA, we're proud to set the standard in the commercial kitchen safety industry.
          </p>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="py-16 px-6 bg-main-bg border-y border-border-stroke">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-[11px] uppercase tracking-widest font-extrabold text-body-text/60 mb-8 block">
            Trusted by Leading Brands in MD, DC & VA
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
            <div className="flex items-center justify-center">
              <img src="/media/images/partners/amazon.png" alt="Amazon" className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/media/images/partners/burger-king.png" alt="Burger King" className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/media/images/partners/hilton.png" alt="Hilton" className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/media/images/partners/ihg-hotels.png" alt="IHG Hotels" className="h-8 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/media/images/partners/subway.png" alt="Subway" className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/media/images/partners/wing-stop.png" alt="Wing Stop" className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/media/images/partners/ruth-chris.png" alt="Ruth's Chris" className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/media/images/partners/the-halal-guys.png" alt="The Halal Guys" className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/media/images/partners/omni.png" alt="Omni Hotels" className="h-8 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/media/images/partners/bowie.png" alt="Bowie" className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Our Core Services */}
      <section id="services" className="py-24 px-6 bg-white border-b border-border-stroke">
        <div className="max-w-7xl mx-auto animate-on-scroll">
          <div className="flex flex-col items-start text-left mb-16">
            <span className="text-sm uppercase tracking-wider font-extrabold text-accent block mb-3">(EXPERT SOLUTIONS)</span>
            <h2 className="text-3xl md:text-[48px] font-extrabold tracking-tight text-primary-text mb-1 lg:mb-3 leading-[1.15] max-w-4xl">
              Our Core Services
            </h2>
            <p className="text-body-text text-base md:text-lg leading-relaxed max-w-3xl">
              Professional, code-compliant cleaning and maintenance solutions tailored to your commercial kitchen needs.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homeServices.map((srv) => (
              <div key={srv.title} className="minimal-card flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary-text mb-3">{srv.title}</h3>
                  <p className="text-body-text text-sm leading-relaxed mb-6">
                    {srv.desc}
                  </p>
                </div>
                <a href="#booking-form-section" className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:underline">
                  Get Service <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: Get Started in Five Easy Steps */}
      <section id="steps" className="py-24 px-6 bg-white border-b border-border-stroke">
        <div className="max-w-7xl mx-auto animate-on-scroll">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            
            {/* Header Block */}
            <div className="flex flex-col justify-start">
              <span className="subtitle-badge">(Simple Onboarding)</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-primary-text leading-tight tracking-tight mt-1">
                Get started in five easy steps
              </h2>
            </div>

            {/* Step 1 */}
            <div className="group flex flex-col">
              <div className="relative flex items-center mb-6">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-border-stroke"></div>
                </div>
                <div className="relative bg-white pr-4 z-10">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border-stroke bg-white text-primary-text font-bold text-xs select-none">
                    1
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Tell us your issue</h3>
              <p className="text-body-text text-sm leading-relaxed mb-6">
                Submit a request online or call us directly. Sending photos of your hood setup helps us quote faster.
              </p>
              <div className="relative rounded-xl overflow-hidden aspect-square border border-border-stroke bg-white">
                <img src="/media/images/onboarding1.png" alt="Commercial kitchen stainless steel hood" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="group flex flex-col">
              <div className="relative flex items-center mb-6">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-border-stroke"></div>
                </div>
                <div className="relative bg-white pr-4 z-10">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border-stroke bg-white text-primary-text font-bold text-xs select-none">
                    2
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Get a clear estimate</h3>
              <p className="text-body-text text-sm leading-relaxed mb-6">
                Upfront, itemized pricing tailored to your specific kitchen layout. No hidden fees or surprise charges.
              </p>
              <div className="relative rounded-xl overflow-hidden aspect-square border border-border-stroke bg-white">
                <img src="/media/images/onboarding2.png" alt="Kitchen exhaust fan audit inspection" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>

            {/* Step 3 */}
            <div className="group flex flex-col">
              <div className="relative flex items-center mb-6">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-border-stroke"></div>
                </div>
                <div className="relative bg-white pr-4 z-10">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border-stroke bg-white text-primary-text font-bold text-xs select-none">
                    3
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Schedule your service time</h3>
              <p className="text-body-text text-sm leading-relaxed mb-6">
                We set a precise service window during your off-hours to avoid any disruption to kitchen operations.
              </p>
              <div className="relative rounded-xl overflow-hidden aspect-square border border-border-stroke bg-white">
                <img src="/media/images/onboarding3.png" alt="Scheduling grease cleaning service" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>

            {/* Step 4 */}
            <div className="group flex flex-col">
              <div className="relative flex items-center mb-6">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-border-stroke"></div>
                </div>
                <div className="relative bg-white pr-4 z-10">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border-stroke bg-white text-primary-text font-bold text-xs select-none">
                    4
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">We fix it right</h3>
              <p className="text-body-text text-sm leading-relaxed mb-6">
                Clean workspace, protected floors, and NFPA 96 certified cleaning down to bare metal.
              </p>
              <div className="relative rounded-xl overflow-hidden aspect-square border border-border-stroke bg-white">
                <img src="/media/images/onboardin4.png" alt="Kitchen hood exhaust system compliance cleaning" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>

            {/* Step 5 */}
            <div className="group flex flex-col">
              <div className="relative flex items-center mb-6">
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="w-full border-t border-border-stroke"></div>
                </div>
                <div className="relative bg-white pr-4 z-10">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full border border-border-stroke bg-white text-primary-text font-bold text-xs select-none">
                    5
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary-text mb-2">Pay and relax, guaranteed</h3>
              <p className="text-body-text text-sm leading-relaxed mb-6">
                Compliance certification sticker placed, digital receipt, and simple online payment.
              </p>
              <div className="relative rounded-xl overflow-hidden aspect-square border border-border-stroke bg-white">
                <img src="/media/images/onboarding5.png" alt="Compliance documentation and verification sticker placement" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Combined CTA and Trust Badges */}
      <section className="py-24 px-6 bg-main-bg border-b border-border-stroke">
        <div className="max-w-7xl mx-auto animate-on-scroll">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: CTA Info */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <span className="subtitle-badge">(Kitchen Compliance)</span>
              <h2 className="text-3xl md:text-[40px] lg:text-[44px] font-extrabold tracking-tight text-primary-text leading-[1.2] mb-4">
                Ensure Kitchen Compliance and Prevent Fire Hazard
              </h2>
              <p className="text-body-text text-base md:text-lg leading-relaxed mb-8 max-w-2xl">
                Don't wait for code infractions or fire marshals. Standardize your kitchen cleaning schedule today.
              </p>
              <a href="#booking-form-section" className="btn-primary inline-flex">
                Get Your Proposal
              </a>
            </div>

            {/* Right Column: Compliance Badges List */}
            <div className="lg:col-span-5 flex flex-col">
              <span className="text-[11px] uppercase tracking-widest font-extrabold text-body-text/60 block mb-6 text-left">
                Fully Aligned with National Safety Standards
              </span>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 bg-white border border-border-stroke rounded-xl p-4 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 text-sm">🔥</div>
                  <span className="text-sm font-bold text-primary-text">NFPA 96 Standard Code</span>
                </div>
                <div className="flex items-center gap-3 bg-white border border-border-stroke rounded-xl p-4 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 text-sm">🛡️</div>
                  <span className="text-sm font-bold text-primary-text">IKECA Equivalent Practice</span>
                </div>
                <div className="flex items-center gap-3 bg-white border border-border-stroke rounded-xl p-4 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 text-sm">📐</div>
                  <span className="text-sm font-bold text-primary-text">ANSI/ACCA Design Standards</span>
                </div>
                <div className="flex items-center gap-3 bg-white border border-border-stroke rounded-xl p-4 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 text-sm">📋</div>
                  <span className="text-sm font-bold text-primary-text">Local Health Dept Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Gallery Section */}
      <Gallery />

      {/* SECTION 8: Coverage Map Section */}
      <CoverageMap />

      {/* SECTION 9: Why Choose Us */}
      <section id="why-choose-us" className="py-24 px-6 bg-white border-b border-border-stroke">
        <div className="max-w-7xl mx-auto animate-on-scroll">
          <div className="mb-16 text-left">
            <h2 className="text-4xl md:text-[56px] font-extrabold tracking-tight leading-tight text-primary-text">
              Why people trust <br className="hidden sm:inline" />
              <span className="text-accent">Crossaire</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Column: Image Card */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-border-stroke shadow-md bg-white">
              <img src="/media/images/why-people-trust.png" alt="Certified Exhaust Technician" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Right Column: Features List */}
            <div className="flex flex-col">
              {/* Feature 1 */}
              <div className="flex gap-6 items-start pb-8 border-b border-border-stroke/60 mb-8">
                <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <g id="Layer_6">
                      <path d="m24.212 2h-16.424c-1.91 0-3.458 1.548-3.458 3.458v18.25c0 1.91 1.548 3.458 3.458 3.458h7.061v-2.026c-.888-.964-1.436-2.246-1.436-3.657 0-2.981 2.426-5.407 5.407-5.407s5.406 2.425 5.406 5.407c0 1.412-.548 2.695-1.438 3.659v2.024h1.422c1.91 0 3.458-1.548 3.458-3.458v-18.25c.002-1.91-1.546-3.458-3.456-3.458zm-10.387 11.347h-4.155c-.497 0-.9-.403-.9-.9s.403-.9.9-.9h4.155c.497 0 .9.403.9.9s-.403.9-.9.9zm5.088-4.893h-9.243c-.497 0-.9-.403-.9-.9s.403-.9.9-.9h9.243c.497 0 .9.403.9.9s-.403.9-.9.9z"></path>
                      <path d="m18.821 26.891c-.891 0-1.73-.22-2.471-.603v3.712l2.47-1.77 2.47 1.77v-3.712c-.741.383-1.579.603-2.469.603z"></path>
                      <circle cx="18.821" cy="21.484" r="3.907"></circle>
                    </g>
                  </svg>
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
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m22.93 7.66a11.56 11.56 0 0 1 .84 2.55 10 10 0 1 1 -13.56 13.56 11.56 11.56 0 0 1 -2.55-.84 12 12 0 1 0 15.27-15.27z"></path>
                    <path d="m19 7a11.87 11.87 0 0 1 3.93.66 11.5 11.5 0 1 0 -15.27 15.27 11.87 11.87 0 0 1 -.66-3.93 12 12 0 0 1 12-12z"></path>
                    <path d="m9 19a10 10 0 0 0 1.21 4.77 11.5 11.5 0 0 0 13.56-13.56 10 10 0 0 0 -14.77 8.79z"></path>
                  </svg>
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
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <g id="_x32_2_x2C__memories_x2C__time_x2C__emotion_x2C__memory_x2C__efficiency_x2C__clock">
                      <g>
                        <path d="m256 1c-56.658 0-110.485 18.371-154.71 52.269v-7.269c0-8.284-6.716-15-15-15s-15 6.716-15 15c0 .103.001 40.427.001 40.325.013 13.275 16.158 20.045 25.608 10.589 42.497-42.505 98.999-65.914 159.101-65.914 124.065 0 225 100.935 225 225s-100.935 225-225 225-225-100.935-225-225c0-34.525 7.608-67.642 22.613-98.428 3.63-7.447.535-16.427-6.911-20.056-7.447-3.634-16.427-.536-20.056 6.911-17.017 34.917-25.646 72.455-25.646 111.573 0 140.932 114.049 255 255 255 140.932 0 255-114.049 255-255 0-140.932-114.049-255-255-255z"></path>
                        <path d="m256 436c99.252 0 180-80.748 180-180s-80.748-180-180-180-180 80.748-180 180 80.748 180 180 180zm-84.37-131.713 69.37-55.496v-82.791c0-8.284 6.716-15 15-15s15 6.716 15 15v90c0 4.557-2.071 8.866-5.63 11.713l-75 60c-6.449 5.162-15.893 4.146-21.083-2.343-5.175-6.469-4.126-15.908 2.343-21.083z"></path>
                      </g>
                    </g>
                  </svg>
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

      {/* SECTION 10: Testimonials */}
      <Testimonials />

      {/* SECTION 10.5: Frequently Asked Questions */}
      <Faq />

      {/* SECTION 11: Final CTA */}
      <section className="py-24 px-6 bg-[#0C1A2B] text-white relative overflow-hidden">
        {/* Accent Glow background blur */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-[120px]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-4">Start Clean. Stay Compliant.</span>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Secure Your Kitchen Safety Certificate Today
          </h2>
          
          <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Connect with Crossaire for professional inspections, grease removal, and official certification stickers. Available 24/7/365.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#booking-form-section" className="btn-primary w-full sm:w-auto px-8 py-4 font-bold text-center">
              Request An Inspection
            </a>
            <a href="tel:8663992885" className="w-full sm:w-auto border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg transition-all text-center flex items-center justify-center gap-2">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97a1.521 1.521 0 0 0-.328 1.96 11.96 11.96 0 0 0 5.758 5.759 1.521 1.521 0 0 0 1.96-.328l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
              </svg>
              <span>Call 866-399-2885</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
