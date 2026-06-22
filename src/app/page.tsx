/* eslint-disable @next/next/no-img-element */
import React from "react";
import BookingForm from "@/components/BookingForm";
import Gallery from "@/components/Gallery";
// import CoverageMap from "@/components/CoverageMap"; // hidden per request
// import Testimonials from "@/components/Testimonials"; // hidden per request
import Faq from "@/components/Faq";
import ScrollReveal from "@/components/ScrollReveal";

interface HomeServiceItem {
  title: string;
  desc: string;
  linkText: string;
  slug: string;
  icon: React.ReactNode;
}

const homeServices: HomeServiceItem[] = [
  {
    title: "Kitchen Hood Cleaning",
    desc: "Keep your kitchen fire-safe and inspection-ready with professional kitchen hood cleaning services. Our technicians remove grease buildup from the hood canopy and surrounding ventilation components to help maintain NFPA 96 compliance and improve kitchen safety.",
    linkText: "Learn more about kitchen hood cleaning",
    slug: "kitchen-hood-cleaning",
    icon: <i className="fa-solid fa-fire-extinguisher text-2xl"></i>
  },
  {
    title: "Restaurant Kitchen Exhaust System Cleaning",
    desc: "Professional restaurant kitchen exhaust system cleaning removes grease accumulation from the hood, ductwork, and rooftop exhaust fan to maintain proper airflow, improve system efficiency, and reduce fire hazards in commercial kitchens.",
    linkText: "Learn more about restaurant kitchen exhaust system cleaning",
    slug: "restaurant-kitchen-exhaust-system-cleaning",
    icon: <i className="fa-solid fa-wind text-2xl"></i>
  },
  {
    title: "Kitchen Exhaust Fan Repairs",
    desc: "Restore proper ventilation performance with professional kitchen exhaust fan repair services. Our technicians diagnose and repair exhaust fan issues to help maintain safe airflow, reduce downtime, and keep your kitchen operating efficiently.",
    linkText: "Learn more about kitchen exhaust fan repairs",
    slug: "kitchen-exhaust-fan-repairs",
    icon: <i className="fa-solid fa-screwdriver-wrench text-2xl"></i>
  },
  {
    title: "Kitchen Exhaust Fan Installation",
    desc: "Ensure reliable ventilation with professional kitchen exhaust fan installation services designed to support proper airflow, improve system performance, and meet commercial kitchen ventilation requirements.",
    linkText: "Learn more about kitchen exhaust fan installation",
    slug: "kitchen-exhaust-fan-installation",
    icon: <i className="fa-solid fa-fan text-2xl"></i>
  },
  {
    title: "Grease Trap Cleaning",
    desc: "Prevent plumbing blockages and maintain proper drainage with professional grease trap cleaning services for restaurants and commercial kitchens. Regular cleaning helps reduce odors, improve efficiency, and maintain compliance with local regulations.",
    linkText: "Learn more about grease trap cleaning",
    slug: "grease-trap-cleaning",
    icon: <i className="fa-solid fa-fill-drip text-2xl"></i>
  },
  {
    title: "Pollution Control Systems Maintenance",
    desc: "Maintain effective smoke, grease, and odor control with professional pollution control systems maintenance services. Regular inspections and servicing help ensure your equipment operates efficiently and continues to meet environmental requirements.",
    linkText: "Learn more about pollution control systems maintenance",
    slug: "pollution-control-systems-maintenance",
    icon: <i className="fa-solid fa-filter text-2xl"></i>
  },
  {
    title: "Kitchen Hood Startups and Commissioning",
    desc: "Ensure new or modified ventilation systems operate safely and efficiently with professional kitchen hood startups and commissioning services. Our technicians verify proper system operation, airflow performance, and overall readiness before use.",
    linkText: "Learn more about kitchen hood startups and commissioning",
    slug: "kitchen-hood-startups-and-commissioning",
    icon: <i className="fa-solid fa-circle-play text-2xl"></i>
  },
  {
    title: "Roof Grease Containment Systems Installations",
    desc: "Protect your roof and prevent grease runoff with professionally installed roof grease containment systems. These systems are designed to capture grease discharged from rooftop exhaust fans and help prevent costly roof damage.",
    linkText: "Learn more about roof grease containment systems installations",
    slug: "roof-grease-containment-systems-installations",
    icon: <i className="fa-solid fa-shield text-2xl"></i>
  },
  {
    title: "Restaurant Hood Filter Cleaning & Exchange",
    desc: "Improve airflow and reduce grease buildup with professional restaurant hood filter cleaning and exchange services. Regular filter maintenance helps maximize ventilation performance and supports a safer kitchen environment.",
    linkText: "Learn more about restaurant hood filter cleaning & exchange",
    slug: "restaurant-hood-filter-cleaning-exchange",
    icon: <i className="fa-solid fa-arrows-rotate text-2xl"></i>
  },
  {
    title: "Kitchen Exhaust Duct Repair & Access Panel Installation",
    desc: "Improve ventilation system accessibility and maintain compliance with professional kitchen exhaust duct repair and access panel installation services. Proper access points allow for easier inspections, maintenance, and cleaning.",
    linkText: "Learn more about kitchen exhaust duct repair & access panel installation",
    slug: "kitchen-exhaust-duct-repair-access-panel-installation",
    icon: <i className="fa-solid fa-door-open text-2xl"></i>
  },
  {
    title: "Kitchen Hood Inspections",
    desc: "Comprehensive kitchen hood inspections evaluate the condition of the hood, ductwork, exhaust fan, filters, and grease containment components. Detailed findings and corrective recommendations help restaurants maintain safe, compliant, and efficient ventilation systems.",
    linkText: "Learn more about kitchen hood inspections",
    slug: "kitchen-hood-inspections",
    icon: <i className="fa-solid fa-clipboard-check text-2xl"></i>
  }
];

export const metadata = {
  title: "Certified Commercial Kitchen Hood & Exhaust Cleaning | Crossaire",
  description: "Certified NFPA 96 commercial kitchen exhaust cleaning, hood degreasing, exhaust fan repairs, and grease trap cleaning in MD, DC & VA. Available 24/7/365.",
  keywords: "kitchen hood cleaning, exhaust fan cleaning, commercial kitchen safety, NFPA 96 compliance, grease trap pumping, hood cleaning Maryland, hood cleaning DC, hood cleaning Virginia",
};

export default function Home() {
  return (
    <>
      <link rel="preload" href="/media/images/hero-mobile.webp" as="image" fetchPriority="high" media="(max-width: 1023px)" />
      <link rel="preload" href="/media/images/hero.webp" as="image" fetchPriority="high" media="(min-width: 1024px)" />
      <ScrollReveal />
      
      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Crossaire",
            "image": "https://crossaire.vercel.app/media/images/logo.webp",
            "@id": "https://crossaire.vercel.app/#localbusiness",
            "url": "https://crossaire.vercel.app",
            "telephone": "571-723-1406",
            "priceRange": "$$",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "7400 Baltimore-Annapolis Blvd",
              "addressLocality": "Glen Burnie",
              "addressRegion": "MD",
              "postalCode": "21061",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 39.1629,
              "longitude": -76.6225
            },
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
            },
            "sameAs": [
              "https://www.facebook.com/people/CrossAire/61566989969821/#",
              "https://x.com/realcrossaire",
              "https://www.youtube.com/@realCrossAire",
              "https://www.tiktok.com/@realcrossaire"
            ],
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
                "name": "What are your core services?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We offer a full suite of compliant commercial kitchen safety and cleaning services including Commercial Kitchen Hood Cleaning, Exhaust Maintenance & Repairs, Filters Exchange Service, Pollution Control Unit Service, Roof Grease Containment, and Grease Trap Cleaning."
                }
              },
              {
                "@type": "Question",
                "name": "Are your services compliant with NFPA 96 and local fire codes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. All of our commercial kitchen exhaust cleaning services are fully NFPA 96 compliant. We provide official compliance stickers and photo documentation required for fire marshal, insurance, and health department audits."
                }
              },
              {
                "@type": "Question",
                "name": "Can you service my kitchen after business hours?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer 24/7/365 scheduling, including overnight and weekend services, to ensure zero disruption to your active kitchen operations."
                }
              },
              {
                "@type": "Question",
                "name": "What areas do you service?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We proudly serve commercial kitchens throughout Maryland, Washington DC, and Virginia. This includes Baltimore, Annapolis, Frederick, Bethesda, Rockville, Arlington, Alexandria, Fairfax, Richmond, and the entire DC metro area."
                }
              },
              {
                "@type": "Question",
                "name": "Are you insured and certified?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We are fully licensed, bonded, and insured, and our technicians are completely NFPA 96 certified and OSHA compliant."
                }
              },
              {
                "@type": "Question",
                "name": "How often should I have my commercial kitchen hood cleaned?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NFPA 96 standards mandate: monthly cleaning for wood/charcoal solid fuel cooking; quarterly for high-volume woks/frying; semi-annually for standard dining/hotels; and annually for low-volume seasonal operations."
                }
              }
            ]
          })
        }}
      />

      {/* SECTION 1: Hero Section */}
      <section className="hero-section relative min-h-screen flex items-center pt-80 pb-8 lg:pt-24 lg:pb-16 px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 lg:items-end items-center">
          
          {/* Left Info Block */}
          <div className="lg:col-span-7 text-white flex flex-col justify-end">
            <h1 className="display-title text-white mb-1 lg:mb-3 max-w-2xl">
              Certified Restaurant Hood Cleaning and Repairs
            </h1>
            <p className="text-white/80 text-sm lg:text-lg max-w-xl mb-0 leading-relaxed">
              Protect your kitchen. Stay NFPA 96 compliant. Certified exhaust cleaning available 24/7 in MD, DC & VA.
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
                  <span className="block text-xs uppercase tracking-wider text-white/50 font-bold">Call Direct</span>
                  <a href="tel:5717231406" className="text-base font-extrabold text-white hover:text-accent transition-colors">571-723-1406</a>
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
                <span className="block text-base md:text-sm font-bold text-primary-text leading-tight">Licensed and Insured</span>
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
              (Our Industry Certifications & Affiliations)
            </span>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              <div className="relative group">
                <img loading="lazy" decoding="async" src="/media/images/emblem1.webp" alt="NFPA 96 Certified Commercial Exhaust Cleaning Compliance Logo" width={160} height={176} className="h-24 md:h-36 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="relative group">
                <img loading="lazy" decoding="async" src="/media/images/emblem2.webp" alt="OSHA Compliant Commercial Kitchen Safety Standard Certification" width={160} height={185} className="h-24 md:h-36 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="relative group">
                <img loading="lazy" decoding="async" src="/media/images/emblem3.webp" alt="IKECA Equivalent Equivalent Exhaust System Cleaning Standard Logo" width={160} height={186} className="h-24 md:h-36 w-auto object-contain transition-transform duration-300 hover:scale-105" />
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
            Certified pros. Reliable results. Stay compliant with NFPA 96 exhaust cleaning you can trust — serving MD, DC & VA.
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
            (Trusted by Leading Brands in MD, DC & VA)
          </span>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
            <div className="flex items-center justify-center">
              <img loading="lazy" decoding="async" src="/media/images/partners/amazon.webp" alt="Amazon Commercial Facility Kitchen Service Client" width={240} height={73} className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img loading="lazy" decoding="async" src="/media/images/partners/burger-king.webp" alt="Burger King Restaurant Exhaust Service Client" width={160} height={166} className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img loading="lazy" decoding="async" src="/media/images/partners/hilton.webp" alt="Hilton Hotel Kitchen Hood Service Client" width={160} height={82} className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img loading="lazy" decoding="async" src="/media/images/partners/ihg-hotels.webp" alt="IHG Hotels Ventilation Cleaning Client" width={160} height={57} className="h-8 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img loading="lazy" decoding="async" src="/media/images/partners/subway.webp" alt="Subway Restaurant Grease Trap Cleaning Client" width={240} height={69} className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img loading="lazy" decoding="async" src="/media/images/partners/wing-stop.webp" alt="Wing Stop Hood Filter Cleaning Client" width={240} height={82} className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img loading="lazy" decoding="async" src="/media/images/partners/ruth-chris.webp" alt="Ruth's Chris Steak House Exhaust Service Client" width={240} height={129} className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img loading="lazy" decoding="async" src="/media/images/partners/the-halal-guys.webp" alt="The Halal Guys Commercial Kitchen Service Client" width={150} height={150} className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img loading="lazy" decoding="async" src="/media/images/partners/omni.webp" alt="Omni Hotels & Resorts Kitchen Exhaust Client" width={160} height={26} className="h-8 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex items-center justify-center">
              <img loading="lazy" decoding="async" src="/media/images/partners/bowie.webp" alt="Bowie State University Dining Facility Service Client" width={160} height={137} className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
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
                <a href={`/services/${srv.slug}`} className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:underline">
                  {srv.linkText} <i className="fa-solid fa-arrow-right text-xs"></i>
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
              <h3 className="text-lg font-bold text-primary-text mb-2">Your peace of mind starts here. Guaranteed.</h3>
              <p className="text-body-text text-sm leading-relaxed mb-6">
                Compliance certification sticker placed, digital receipt, and simple online payment.
              </p>
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
                Get Your Quote
              </a>
            </div>

            {/* Right Column: Compliance Badges List */}
            <div className="lg:col-span-5 flex flex-col">
              <span className="text-[11px] uppercase tracking-widest font-extrabold text-body-text/60 block mb-6 text-left">
                (Fully Aligned with National Safety Standards)
              </span>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 bg-white border border-border-stroke rounded-xl p-4 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 text-sm">
                    <i className="fa-solid fa-fire text-xs"></i>
                  </div>
                  <span className="text-sm font-bold text-primary-text">NFPA 96 Standard Code</span>
                </div>
                <div className="flex items-center gap-3 bg-white border border-border-stroke rounded-xl p-4 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 text-sm">
                    <i className="fa-solid fa-shield-halved text-xs"></i>
                  </div>
                  <span className="text-sm font-bold text-primary-text">IKECA Equivalent Practice</span>
                </div>
                <div className="flex items-center gap-3 bg-white border border-border-stroke rounded-xl p-4 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 text-sm">
                    <i className="fa-solid fa-ruler-combined text-xs"></i>
                  </div>
                  <span className="text-sm font-bold text-primary-text">ANSI/ACCA Design Standards</span>
                </div>
                <div className="flex items-center gap-3 bg-white border border-border-stroke rounded-xl p-4 shadow-sm transition-all hover:scale-[1.02] hover:shadow-md">
                  <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent shrink-0 text-sm">
                    <i className="fa-solid fa-clipboard-check text-xs"></i>
                  </div>
                  <span className="text-sm font-bold text-primary-text">Local Health Dept Standards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: Gallery Section */}
      <Gallery />

      {/* SECTION 8: Coverage Map Section — hidden per request */}
      {/* <CoverageMap /> */}

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
              <img loading="lazy" decoding="async" src="/media/images/why-people-trust.webp" alt="Certified Commercial Exhaust Safety Technician performing deep degreasing" width={1537} height={1023} className="absolute inset-0 w-full h-full object-cover" />
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

      {/* SECTION 10: Testimonials — hidden per request */}
      {/* <Testimonials /> */}

      {/* SECTION 10.5: Frequently Asked Questions */}
      <Faq />

      {/* SECTION 11: Final CTA */}
      <section className="py-24 px-6 bg-[#0C1A2B] text-white relative overflow-hidden">
        {/* Accent Glow background blur */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-[120px]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-4">(Start Clean. Stay Compliant.)</span>
          
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
            <a href="tel:5717231406" className="w-full sm:w-auto border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg transition-all text-center flex items-center justify-center gap-2">
              <i className="fa-solid fa-phone text-sm"></i>
              <span>Call 571-723-1406</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
