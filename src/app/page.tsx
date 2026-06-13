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
    icon: <i className="fa-solid fa-fire-extinguisher text-2xl"></i>
  },
  {
    title: "Restaurant Kitchen Exhaust System Cleaning",
    desc: "Complete, top-to-bottom scrubbing and degreasing of the entire kitchen exhaust duct network, ensuring maximum ventilation efficiency and safety.",
    icon: <i className="fa-solid fa-wind text-2xl"></i>
  },
  {
    title: "Kitchen Exhaust Fan Repairs",
    desc: "Rapid repair services for exhaust fan motors, belts, pulleys, bearings, and electrical components to resolve noise, vibration, and performance issues.",
    icon: <i className="fa-solid fa-screwdriver-wrench text-2xl"></i>
  },
  {
    title: "Kitchen Exhaust Fan Installation",
    desc: "Code-compliant rooftop and wall-mounted exhaust fan installations designed to meet dynamic air volume requirements for high-output kitchens.",
    icon: <i className="fa-solid fa-fan text-2xl"></i>
  },
  {
    title: "Grease Trap Cleaning",
    desc: "Thorough vacuuming and cleaning of under-sink and outdoor in-ground grease traps, including full scraping and legal disposal certification.",
    icon: <i className="fa-solid fa-fill-drip text-2xl"></i>
  },
  {
    title: "Pollution Control Systems Maintenance",
    desc: "Maintenance, diagnostics, electrostatic precipitator cell cleaning, and charcoal/media filter replacements for heavy-duty pollution control units.",
    icon: <i className="fa-solid fa-filter text-2xl"></i>
  },
  {
    title: "Kitchen Hood Startups and Commissioning",
    desc: "Airflow balancing, static pressure measurements, and system integration testing for new commercial kitchen ventilation hoods prior to local inspections.",
    icon: <i className="fa-solid fa-circle-play text-2xl"></i>
  },
  {
    title: "Roof Grease Containment Systems Installations",
    desc: "Customized roof containment system designs and installations utilizing multi-layered absorbent filters to prevent structural damage and roof rot.",
    icon: <i className="fa-solid fa-shield text-2xl"></i>
  },
  {
    title: "Restaurant Hood Filter Cleaning & Exchange",
    desc: "Regular exchange of clean, commercial-grade stainless steel baffle filters, removing loaded filters for professional off-site sanitizing.",
    icon: <i className="fa-solid fa-arrows-rotate text-2xl"></i>
  },
  {
    title: "Kitchen Exhaust Duct Repair & Access Panel Installation",
    desc: "Installation of NFPA 96 approved, fire-rated duct access panels in horizontal and vertical ducts to facilitate thorough inspection and cleaning access.",
    icon: <i className="fa-solid fa-door-open text-2xl"></i>
  },
  {
    title: "Kitchen Hood Inspections",
    desc: "Certified, independent NFPA 96 fire safety inspections, comprehensive duct camera imaging, and official compliance reports for fire marshals and insurers.",
    icon: <i className="fa-solid fa-clipboard-check text-2xl"></i>
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
                  <i className="fa-solid fa-phone text-2xl text-accent"></i>
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider text-white/50 font-bold">Call Toll-Free</span>
                  <a href="tel:8663992885" className="text-base font-extrabold text-white hover:text-accent transition-colors">866-399-2885</a>
                </div>
              </div>

              {/* Work Hours Block */}
              <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-accent shrink-0">
                  <i className="fa-solid fa-clock text-2xl text-accent"></i>
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
                <i className="fa-solid fa-shield-halved text-2xl md:text-xl text-accent"></i>
              </div>
              <div>
                <span className="block text-base md:text-sm font-bold text-primary-text leading-tight">NFPA 96 Certified</span>
                <span className="block text-xs md:text-[11px] text-body-text font-semibold uppercase tracking-wider">Strict Compliance</span>
              </div>
            </div>

            {/* Badge 2 */}
            <div className="flex items-center gap-4 md:gap-3 w-full max-w-sm sm:max-w-none">
              <div className="w-12 h-12 md:w-10 md:h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                <i className="fa-solid fa-square-check text-2xl md:text-xl text-accent"></i>
              </div>
              <div>
                <span className="block text-base md:text-sm font-bold text-primary-text leading-tight">OSHA Compliant</span>
                <span className="block text-xs md:text-[11px] text-body-text font-semibold uppercase tracking-wider">Safe Operations</span>
              </div>
            </div>

            {/* Badge 3 */}
            <div className="flex items-center gap-4 md:gap-3 w-full max-w-sm sm:max-w-none">
              <div className="w-12 h-12 md:w-10 md:h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                <i className="fa-solid fa-lock text-2xl md:text-xl text-accent"></i>
              </div>
              <div>
                <span className="block text-base md:text-sm font-bold text-primary-text leading-tight">$5M Liability Insured</span>
                <span className="block text-xs md:text-[11px] text-body-text font-semibold uppercase tracking-wider">Fully Insured</span>
              </div>
            </div>

            {/* Badge 4 */}
            <div className="flex items-center gap-4 md:gap-3 w-full max-w-sm sm:max-w-none">
              <div className="w-12 h-12 md:w-10 md:h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                <i className="fa-solid fa-star text-2xl md:text-xl text-accent"></i>
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
                  Get Service <i className="fa-solid fa-arrow-right text-xs"></i>
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
              <i className="fa-solid fa-phone text-sm"></i>
              <span>Call 866-399-2885</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
