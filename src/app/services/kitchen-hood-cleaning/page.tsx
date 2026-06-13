import React from "react";
import BookingForm from "@/components/BookingForm";
import LocalFAQItem from "@/components/LocalFAQItem";

export const metadata = {
  title: "NFPA 96 Commercial Kitchen Hood Cleaning | Crossaire",
  description: "NFPA 96 certified commercial kitchen hood cleaning and exhaust system degreasing in MD, DC, and VA. 24/7 emergency dispatch, certified inspections, and safety stickers.",
  keywords: "commercial kitchen hood cleaning, restaurant exhaust cleaning, grease removal, NFPA 96 compliance, hood cleaning Maryland, hood cleaning DC, hood cleaning Virginia",
};

export default function KitchenHoodCleaningPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Commercial Kitchen Hood Cleaning Services",
            "alternateName": "Commercial Kitchen Exhaust Hood Cleaning",
            "description": "Certified NFPA 96 compliant commercial kitchen hood cleaning, grease removal, and exhaust duct degreasing services in Maryland, Washington DC, and Virginia.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Crossaire",
              "image": "https://crossaire.vercel.app/media/images/logo.png",
              "telephone": "866-399-2885",
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
                "name": "How often must commercial kitchen hoods be cleaned?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "NFPA 96 mandates cleaning frequencies based on your cooking style and volume: Monthly for solid fuel cooking (wood, charcoal, pit BBQ); Quarterly for high-volume operations (24-hour diners, heavy charbroiling, fast-food fry lines); Semi-Annually for moderate-volume cooking; and Annually for low-volume operations."
                }
              },
              {
                "@type": "Question",
                "name": "Do you clean the rooftop fan, or just the hood inside?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A complete, compliant kitchen exhaust cleaning MUST cover the entire airflow network: this includes the canopy inside, all horizontal/vertical duct runs, and the rooftop exhaust fan blades and housing. Cleaning only the hood is a major code violation and does not solve the fire hazard."
                }
              },
              {
                "@type": "Question",
                "name": "Will your hood cleaning process create a mess in my kitchen?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "No. Our technicians are fully trained to keep your kitchen clean. We cover all equipment, ranges, prep lines, and fryers in thick plastic draping. All runoff water and chemicals are gathered into containment tubs. We scrub and mop the floors afterward, leaving your kitchen pristine."
                }
              },
              {
                "@type": "Question",
                "name": "How long does a kitchen hood cleaning service take?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A standard service takes between 3 to 5 hours, depending on size of hoods, length of vertical/horizontal ductwork runs, and the thickness of grease accumulation. We work overnight or during closed hours to ensure zero impact on your business."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide documentation for fire inspectors?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Once we finish the service, we apply an official NFPA 96 compliance sticker on your hood showing the service date, next cleaning date, and technician details. We also deliver a detailed digital photo log of before-and-after results for your records."
                }
              },
              {
                "@type": "Question",
                "name": "Are you certified and insured?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. All of our technicians are fully NFPA 96 certified commercial kitchen exhaust cleaners. We carry $5,000,000 in General Liability insurance, as well as full workers' compensation coverage."
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
          style={{ backgroundImage: "url('/media/images/services/commercial-kitchen-hood-cleaning.jpeg')" }}
        />
        {/* Dark Overlay of #0c1a2b */}
        <div className="absolute inset-0 bg-[#0C1A2B]/92" />
        
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-sm uppercase tracking-wider font-extrabold text-accent block mb-3">
              Certified Commercial Service
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Commercial Kitchen <span className="text-accent">Hood Cleaning</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Keep your kitchen fire-safe and inspection-ready with professional kitchen hood cleaning services. Our technicians remove grease buildup from the hood canopy and surrounding ventilation components to help maintain NFPA 96 compliance and improve kitchen safety.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/95 font-semibold">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>NFPA 96 Code Compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>$5M General Liability Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Full Before/After Photo Logs</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Flexible 24/7 After-Hours Scheduling</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Booking Form */}
          <div id="booking-form-section" className="lg:col-span-5 relative w-full">
            <BookingForm initialService="Kitchen Hood Cleaning" />
          </div>
        </div>
      </section>

      {/* 2. EMBLEMS & PARTNERS SECTION */}
      <section className="bg-white border-b border-border-stroke py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Industry Certifications & Affiliations Row */}
          <div className="flex flex-col items-center justify-center text-center pb-12 border-b border-border-stroke/60">
            <span className="text-[11px] uppercase tracking-widest font-extrabold text-body-text/60 mb-6 block">
              Our Industry Certifications & Affiliations
            </span>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              <div className="relative group">
                <img src="/media/images/emblem1.png" alt="NFPA 96 Certified Commercial Exhaust Cleaning Compliance Logo" className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="relative group">
                <img src="/media/images/emblem2.png" alt="OSHA Compliant Commercial Kitchen Safety Standard Certification" className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="relative group">
                <img src="/media/images/emblem3.png" alt="IKECA Equivalent Equivalent Exhaust System Cleaning Standard Logo" className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
            </div>
          </div>

          {/* Partners Row */}
          <div className="pt-12 text-center">
            <span className="text-[11px] uppercase tracking-widest font-extrabold text-body-text/60 mb-8 block">
              Trusted by Leading Brands in MD, DC & VA
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/amazon.png" alt="Amazon Commercial Facility Kitchen Service Client" className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/burger-king.png" alt="Burger King Restaurant Exhaust Service Client" className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/hilton.png" alt="Hilton Hotel Kitchen Hood Service Client" className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/ihg-hotels.png" alt="IHG Hotels Ventilation Cleaning Client" className="h-8 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/subway.png" alt="Subway Restaurant Grease Trap Cleaning Client" className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/wing-stop.png" alt="Wing Stop Hood Filter Cleaning Client" className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/ruth-chris.png" alt="Ruth's Chris Steak House Exhaust Service Client" className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/the-halal-guys.png" alt="The Halal Guys Commercial Kitchen Service Client" className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/omni.png" alt="Omni Hotels & Resorts Kitchen Exhaust Client" className="h-8 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              </div>
              <div className="flex items-center justify-center">
                <img src="/media/images/partners/bowie.png" alt="Bowie State University Dining Facility Service Client" className="h-10 md:h-14 w-auto object-contain transition-transform duration-300 hover:scale-105" />
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
                What is Commercial Kitchen Hood Cleaning?
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-6 text-body-text text-base md:text-lg leading-relaxed">
              <p>
                During daily cooking operations, commercial kitchen ventilation systems draw in vaporized grease, smoke, heat, and steam. Over time, these grease vapors condense and settle on the inner surfaces of your hood canopy, grease filters, ductwork, and rooftop exhaust fan.
              </p>
              <p>
                Without professional cleaning, this highly flammable grease build-up becomes a severe fire hazard. Professional kitchen hood cleaning is the process of removing this grease down to the bare metal using specialized chemicals, scraping tools, and high-pressure steam washers. At Crossaire, our service covers the entire exhaust flow from the canopy to the fan, ensuring absolute fire safety and complete compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY THIS SERVICE MATTERS */}
      <section className="py-24 px-6 bg-white border-b border-border-stroke">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col items-center mb-16">
            <span className="subtitle-badge">(CRITICAL HYGIENE & SAFETY)</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight mb-4">
              Why Kitchen Hood Cleaning Matters
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              Neglecting your exhaust system has serious implications. Here is why certified cleaning is mandatory for every kitchen:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-600 mb-6">
                <i className="fa-solid fa-fire text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Fire Prevention</h3>
              <p className="text-body-text text-sm leading-relaxed">
                Over 70% of commercial kitchen fires originate inside the exhaust system. Removing the grease fuel source is the single most effective way to protect your business and employees.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                <i className="fa-solid fa-clipboard-list text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Code & Compliance</h3>
              <p className="text-body-text text-sm leading-relaxed">
                Local fire marshals and NFPA 96 standards mandate periodic certified cleanings. Failing code audits leads to immediate closure, costly violations, and operational setbacks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 mb-6">
                <i className="fa-solid fa-shield-halved text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Insurance Integrity</h3>
              <p className="text-body-text text-sm leading-relaxed">
                Insurance providers require official compliance stickers and digital reports. If a fire occurs and you cannot prove regular certified cleanings, your policy may be invalidated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIGNS YOU NEED THIS SERVICE */}
      <section className="py-24 px-6 bg-main-bg border-b border-border-stroke">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-start mb-16">
            <span className="subtitle-badge">(SYSTEM WARNING SIGNS)</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight mb-4">
              Signs You Need Immediate Hood Cleaning
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              Don't wait for your next inspection. If you notice any of these warning signs, schedule a service immediately:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Grease Dripping from Canopy",
                desc: "Thick oil or grease residue dripping from the hood seams, filter track, or onto the cooking surfaces below.",
                icon: <i className="fa-solid fa-droplet text-3xl text-red-500 shrink-0"></i>
              },
              {
                title: "Lingering Smoke & Haze",
                desc: "The kitchen stays hazy or filled with smoke during active cooking sessions, indicating obstructed airflow draw.",
                icon: <i className="fa-solid fa-smog text-3xl text-red-500 shrink-0"></i>
              },
              {
                title: "Loud Screeching Fan Noises",
                desc: "High-pitched screeching or vibrating noises coming from your rooftop exhaust fan, pointing to grease-heavy blades.",
                icon: <i className="fa-solid fa-volume-high text-3xl text-red-500 shrink-0"></i>
              },
              {
                title: "Persistent Stale Odors",
                desc: "Stale, burnt oil odors lingering in the kitchen or leaking into the dining area even when the exhaust is running.",
                icon: <i className="fa-solid fa-face-grimace text-3xl text-red-500 shrink-0"></i>
              },
              {
                title: "Oily Film on Surfaces",
                desc: "A greasy, sticky film building up on surrounding kitchen walls, ceilings, and countertops.",
                icon: <i className="fa-solid fa-hands-bubbles text-3xl text-red-500 shrink-0"></i>
              },
              {
                title: "Expired Certification Label",
                desc: "The date listed on your hood's fire-compliance sticker indicates that your next cleaning is already overdue.",
                icon: <i className="fa-solid fa-calendar-xmark text-3xl text-red-500 shrink-0"></i>
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-2xl bg-white border border-border-stroke/60">
                <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-red-500/10 rounded-xl">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-primary-text mb-1 text-base">{item.title}</h3>
                  <p className="text-body-text text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT'S INCLUDED */}
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
              <img src="/media/images/why-people-trust.png" alt="Certified Commercial Exhaust Safety Technician performing deep degreasing" className="absolute inset-0 w-full h-full object-cover" />
            </div>

            {/* Right Column: Features List */}
            <div className="flex flex-col">
              {[
                {
                  title: "Hood Canopy & Plenum Cleaning",
                  desc: "Deep degreasing, washing, and hand-polishing of both the interior and exterior stainless steel hood structures.",
                  icon: <i className="fa-solid fa-sparkles text-xl"></i>
                },
                {
                  title: "Grease Filter Deep Wash",
                  desc: "Removal, thorough soaking, power washing, and reinstallation of all commercial baffle filters.",
                  icon: <i className="fa-solid fa-filter text-xl"></i>
                },
                {
                  title: "Horizontal & Vertical Ductwork",
                  desc: "Deep scrape and pressure cleaning of the entire duct path, accessing hard-to-reach areas via code-approved access panels.",
                  icon: <i className="fa-solid fa-wind text-xl"></i>
                },
                {
                  title: "Rooftop Exhaust Fan Service",
                  desc: "Scraping and power washing of the fan housing, fan bowl, fan blades, and clearing out grease drain pathways.",
                  icon: <i className="fa-solid fa-fan text-xl"></i>
                },
                {
                  title: "Grease Cup & Containment Audit",
                  desc: "Cleaning and emptying of rooftop grease collection systems and grease collection cups.",
                  icon: <i className="fa-solid fa-fill-drip text-xl"></i>
                },
                {
                  title: "NFPA 96 Compliance Sticker",
                  desc: "Affixing the official, dated certification sticker required by fire marshals, health inspectors, and insurance providers.",
                  icon: <i className="fa-solid fa-certificate text-xl"></i>
                }
              ].map((item, index, arr) => (
                <div key={index} className={`flex gap-6 items-start ${index < arr.length - 1 ? "pb-8 border-b border-border-stroke/60 mb-8" : ""}`}>
                  <div className="w-12 h-12 rounded-full border border-border-stroke bg-white flex items-center justify-center shadow-sm shrink-0 text-accent mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary-text mb-2">{item.title}</h3>
                    <p className="text-body-text text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. BENEFITS OF THE SERVICE */}
      <section className="py-24 px-6 bg-main-bg border-b border-border-stroke">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col items-center mb-16">
            <span className="subtitle-badge">(BUSINESS VALUE)</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight mb-4">
              Benefits of Regular Hood Cleaning
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              Beyond complying with safety codes, our professional maintenance helps optimize your kitchen's daily performance:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Minimized Fire Risks",
                desc: "Drastically lowers the risk of catastrophic kitchen fires by regularly eliminating grease deposits.",
                icon: <i className="fa-solid fa-shield-halved text-4xl text-accent mb-6 block"></i>
              },
              {
                title: "Extended Fan Motor Life",
                desc: "Removing heavy grease off the fan blades prevents engine drag, vibration, and premature system failure.",
                icon: <i className="fa-solid fa-gears text-4xl text-accent mb-6 block"></i>
              },
              {
                title: "Lower Utility Costs",
                desc: "Clean systems run with far less friction, reducing draw on electricity and reducing utility bills.",
                icon: <i className="fa-solid fa-lightbulb text-4xl text-accent mb-6 block"></i>
              },
              {
                title: "Better Working Environment",
                desc: "Keeps your kitchen cooler and cleaner by maintaining proper smoke, vapor, and heat extraction.",
                icon: <i className="fa-solid fa-leaf text-4xl text-accent mb-6 block"></i>
              },
              {
                title: "Flawless Auditing",
                desc: "Always be fully prepared for surprise inspections by fire marshals, health boards, and insurance agents.",
                icon: <i className="fa-solid fa-square-check text-4xl text-accent mb-6 block"></i>
              },
              {
                title: "Grease Odor Suppression",
                desc: "Keeps rancid, stale oil odors out of your dining areas, preserving a pleasant restaurant atmosphere.",
                icon: <i className="fa-solid fa-spray-can-sparkles text-4xl text-accent mb-6 block"></i>
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-start">
                {benefit.icon}
                <h3 className="text-lg font-bold text-primary-text mb-2">{benefit.title}</h3>
                <p className="text-body-text text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR SERVICE PROCESS */}
      <section className="py-24 px-6 bg-white border-b border-border-stroke">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col items-center mb-16">
            <span className="subtitle-badge">(HOW WE WORK)</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight mb-4">
              Our 7-Step Cleaning Process
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              We employ a meticulous, structured process to ensure safety, efficiency, and zero mess left in your kitchen:
            </p>
          </div>

          <div className="relative border-l border-border-stroke max-w-3xl mx-auto pl-8 space-y-12">
            {[
              {
                step: "01",
                title: "Equipment Protection & Setup",
                desc: "We cover all surrounding cooking appliances, prep lines, walls, and flooring in heavy plastic draping to isolate runoff water and prevent contamination."
              },
              {
                step: "02",
                title: "Exhaust Fan Inspection",
                desc: "We head to the roof to inspect the exhaust fan operation, check belt status, and confirm mechanical components are safe to run before washing."
              },
              {
                step: "03",
                title: "Grease Scraping & Prep",
                desc: "Technicians manually scrape away heavy, solidified grease layers from the hood canopy, plenums, and ducts before applying chemicals."
              },
              {
                step: "04",
                title: "Eco-Friendly Degreasing",
                desc: "We spray food-safe, professional-grade biodegradable degreasing foam inside the duct runs and canopy to dissolve remaining oils."
              },
              {
                step: "05",
                title: "High-Pressure Steam Wash",
                desc: "Using high-temperature hot-water pressure washers, we flush away all dissolved grease, cleaning down to raw, bare steel."
              },
              {
                step: "06",
                title: "Polishing & Kitchen Clean-up",
                desc: "The hood stainless steel is polished to a shine. We remove all plastic, detail the cook line, and sanitize the kitchen floors."
              },
              {
                step: "07",
                title: "Sticker Application & Photo Report",
                desc: "We apply the dated NFPA 96 compliance label and deliver a digital report showing before-and-after photos of every system component."
              }
            ].map((proc, index) => (
              <div key={index} className="relative">
                {/* Step circle */}
                <div className="absolute -left-[50px] top-0 w-8 h-8 rounded-full bg-accent text-white font-bold text-xs flex items-center justify-center border-4 border-main-bg shadow-sm">
                  {proc.step}
                </div>
                <h3 className="text-lg font-bold text-primary-text mb-2">{proc.title}</h3>
                <p className="text-body-text text-sm leading-relaxed">{proc.desc}</p>
              </div>
            ))}
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
              {[
                {
                  title: "NFPA 96 Certified",
                  desc: "All technicians are fully trained and certified under modern exhaust cleaning standards."
                },
                {
                  title: "$5M Liability Insurance",
                  desc: "Rest easy knowing your kitchen property is backed by $5,000,000 in comprehensive commercial insurance."
                },
                {
                  title: "24/7/365 Service",
                  desc: "We perform all cleanings during your closing or off-peak hours so you never lose business."
                },
                {
                  title: "100% Upfront Pricing",
                  desc: "Honest, written estimates prior to scheduling. Absolutely no surprise fees or add-on bills."
                }
              ].map((point, index) => (
                <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-base font-extrabold text-white mb-2 uppercase tracking-wide">{point.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{point.desc}</p>
                </div>
              ))}
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
              Got questions about commercial kitchen hood cleaning schedules, compliance, or logistics? Find detailed answers below:
            </p>
          </div>

          {/* FAQ Accordion Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start max-w-5xl mx-auto">
            <div className="flex flex-col gap-4">
              <LocalFAQItem question="How often must commercial kitchen hoods be cleaned?">
                <p className="mb-2">NFPA 96 mandates cleaning frequencies based on your cooking style and volume:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Monthly</strong>: Solid fuel cooking (wood, charcoal, pit BBQ).</li>
                  <li><strong>Quarterly</strong>: High-volume operations (24-hour diners, heavy charbroiling, fast-food fry lines).</li>
                  <li><strong>Semi-Annually</strong>: Moderate-volume cooking (standard restaurant setups, hotels, diners).</li>
                  <li><strong>Annually</strong>: Low-volume operations (churches, day camps, seasonal kitchens).</li>
                </ul>
              </LocalFAQItem>

              <LocalFAQItem question="Do you clean the rooftop fan, or just the hood inside?">
                A complete, compliant kitchen exhaust cleaning MUST cover the entire airflow network: this includes the canopy inside, all horizontal/vertical duct runs, and the rooftop exhaust fan blades and housing. Cleaning only the hood is a major code violation and does not solve the fire hazard.
              </LocalFAQItem>

              <LocalFAQItem question="Will your hood cleaning process create a mess in my kitchen?">
                No. Our technicians are fully trained to keep your kitchen clean. We cover all equipment, ranges, prep lines, and fryers in thick plastic draping. All runoff water and chemicals are gathered into containment tubs. We scrub and mop the floors afterward, leaving your kitchen pristine.
              </LocalFAQItem>
            </div>

            <div className="flex flex-col gap-4">
              <LocalFAQItem question="How long does a kitchen hood cleaning service take?">
                A standard service takes between 3 to 5 hours, depending on size of hoods, length of vertical/horizontal ductwork runs, and the thickness of grease accumulation. We work overnight or during closed hours to ensure zero impact on your business.
              </LocalFAQItem>

              <LocalFAQItem question="Do you provide documentation for fire inspectors?">
                Yes. Once we finish the service, we apply an official NFPA 96 compliance sticker on your hood showing the service date, next cleaning date, and technician details. We also deliver a detailed digital photo log of before-and-after results for your records.
              </LocalFAQItem>

              <LocalFAQItem question="Are you certified and insured?">
                Yes. All of our technicians are fully NFPA 96 certified commercial kitchen exhaust cleaners. We carry $5,000,000 in General Liability insurance, as well as full workers' compensation coverage.
              </LocalFAQItem>
            </div>
          </div>

          <div className="text-center mt-16">
            <p className="text-sm font-bold text-accent">
              Ready to schedule your certified kitchen hood cleaning?
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
                  Professional restaurant kitchen exhaust system cleaning removes grease accumulation from the hood, ductwork, and rooftop exhaust fan to maintain proper airflow, improve system efficiency, and reduce fire hazards in commercial kitchens.
                </p>
              </div>
              <a href="/services/restaurant-kitchen-exhaust-system-cleaning" className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:underline">
                Learn more about restaurant kitchen exhaust system cleaning <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                  <i className="fa-solid fa-screwdriver-wrench text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-3">Exhaust Fan Repairs</h3>
                <p className="text-body-text text-sm leading-relaxed mb-6">
                  Restore proper ventilation performance with professional kitchen exhaust fan repair services. Our technicians diagnose and repair exhaust fan issues to help maintain safe airflow, reduce downtime, and keep your kitchen operating efficiently.
                </p>
              </div>
              <a href="/services/kitchen-exhaust-fan-repairs" className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:underline">
                Learn more about kitchen exhaust fan repairs <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>

            <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6">
                  <i className="fa-solid fa-arrows-rotate text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-3">Hood Filter Exchange</h3>
                <p className="text-body-text text-sm leading-relaxed mb-6">
                  Improve airflow and reduce grease buildup with professional restaurant hood filter cleaning and exchange services. Regular filter maintenance helps maximize ventilation performance and supports a safer kitchen environment.
                </p>
              </div>
              <a href="/services/restaurant-hood-filter-cleaning-exchange" className="text-accent font-bold text-sm inline-flex items-center gap-2 hover:underline">
                Learn more about restaurant hood filter cleaning & exchange <i className="fa-solid fa-arrow-right text-xs"></i>
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
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-4">NFPA 96 CERTIFIED & INSURED</span>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Schedule Your Certified Kitchen Hood Cleaning Today
          </h2>
          
          <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Get instant peace of mind. We provide complete duct degreasing, camera inspections, and official compliance stickers. Available 24/7 in MD, DC, and VA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#booking-form-section" className="btn-primary w-full sm:w-auto px-8 py-4 font-bold text-center">
              Book Your Cleaning
            </a>
            <a href="tel:8663992885" className="w-full sm:w-auto border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg transition-all text-center flex items-center justify-center gap-2">
              <i className="fa-solid fa-phone text-sm"></i>
              <span>Call 866-399-2885</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
