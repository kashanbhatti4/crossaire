"use client";

import React, { useState, useRef, useEffect } from "react";
import BookingForm from "@/components/BookingForm";

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

function LocalFAQItem({ question, children }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current?.scrollHeight || 0}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);

  return (
    <div className="bg-white border border-border-stroke rounded-2xl p-5 md:p-6 transition-all hover:shadow-md">
      <button 
        type="button"
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full flex items-center justify-between gap-4 font-bold text-base md:text-lg text-primary-text text-left transition-colors focus:outline-none select-none"
      >
        <span>{question}</span>
        <svg 
          className={`w-5 h-5 shrink-0 transition-transform duration-300 text-body-text/60 ${isOpen ? "rotate-45 text-accent" : ""}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      <div 
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ maxHeight, opacity: isOpen ? 1 : 0 }}
      >
        <div className="pt-4 text-sm md:text-base text-body-text leading-relaxed border-t border-border-stroke/40 mt-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function KitchenHoodCleaningPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#0C1A2B] text-white pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
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
                <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 text-sm">✓</span>
                <span>NFPA 96 Code Compliance</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 text-sm">✓</span>
                <span>$5M General Liability Insured</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 text-sm">✓</span>
                <span>Full Before/After Photo Logs</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 text-sm">✓</span>
                <span>Flexible 24/7 After-Hours Scheduling</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Booking Form */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white rounded-3xl p-6 shadow-2xl border border-border-stroke">
              <span className="block text-center text-xs font-extrabold uppercase tracking-widest text-body-text mb-4">
                Request a Free Quote
              </span>
              <BookingForm initialService="Kitchen Hood Cleaning" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW OF THE SERVICE */}
      <section className="py-24 px-6 bg-white border-b border-border-stroke">
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
      <section className="py-24 px-6 bg-main-bg border-b border-border-stroke">
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
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-600 mb-6 font-extrabold text-xl">🔥</div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Fire Prevention</h3>
              <p className="text-body-text text-sm leading-relaxed">
                Over 70% of commercial kitchen fires originate inside the exhaust system. Removing the grease fuel source is the single most effective way to protect your business and employees.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent mb-6 font-extrabold text-xl">📋</div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Code & Compliance</h3>
              <p className="text-body-text text-sm leading-relaxed">
                Local fire marshals and NFPA 96 standards mandate periodic certified cleanings. Failing code audits leads to immediate closure, costly violations, and operational setbacks.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-border-stroke hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-600 mb-6 font-extrabold text-xl">🛡️</div>
              <h3 className="text-xl font-bold text-primary-text mb-3">Insurance Integrity</h3>
              <p className="text-body-text text-sm leading-relaxed">
                Insurance providers require official compliance stickers and digital reports. If a fire occurs and you cannot prove regular certified cleanings, your policy may be invalidated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIGNS YOU NEED THIS SERVICE */}
      <section className="py-24 px-6 bg-white border-b border-border-stroke">
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
                icon: "💧"
              },
              {
                title: "Lingering Smoke & Haze",
                desc: "The kitchen stays hazy or filled with smoke during active cooking sessions, indicating obstructed airflow draw.",
                icon: "💨"
              },
              {
                title: "Loud Screeching Fan Noises",
                desc: "High-pitched screeching or vibrating noises coming from your rooftop exhaust fan, pointing to grease-heavy blades.",
                icon: "🔊"
              },
              {
                title: "Persistent Stale Odors",
                desc: "Stale, burnt oil odors lingering in the kitchen or leaking into the dining area even when the exhaust is running.",
                icon: "🤢"
              },
              {
                title: "Oily Film on Surfaces",
                desc: "A greasy, sticky film building up on surrounding kitchen walls, ceilings, and countertops.",
                icon: "🧼"
              },
              {
                title: "Expired Certification Label",
                desc: "The date listed on your hood's fire-compliance sticker indicates that your next cleaning is already overdue.",
                icon: "📅"
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-2xl bg-[#F8FAFC] border border-border-stroke/60">
                <div className="text-3xl shrink-0">{item.icon}</div>
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
      <section className="py-24 px-6 bg-[#F8FAFC] border-b border-border-stroke">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col items-center mb-16">
            <span className="subtitle-badge">(SERVICE SCOPE)</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight mb-4">
              What Is Included in Our Service?
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              We provide a complete, deep clean of the entire exhaust system from top to bottom. Our standard package includes:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Hood Canopy & Plenum Cleaning",
                desc: "Deep degreasing, washing, and hand-polishing of both the interior and exterior stainless steel hood structures."
              },
              {
                title: "Grease Filter Deep Wash",
                desc: "Removal, thorough soaking, power washing, and reinstallation of all commercial baffle filters."
              },
              {
                title: "Horizontal & Vertical Ductwork",
                desc: "Deep scrape and pressure cleaning of the entire duct path, accessing hard-to-reach areas via code-approved access panels."
              },
              {
                title: "Rooftop Exhaust Fan Service",
                desc: "Scraping and power washing of the fan housing, fan bowl, fan blades, and clearing out grease drain pathways."
              },
              {
                title: "Grease Cup & Containment Audit",
                desc: "Cleaning and emptying of rooftop grease collection systems and grease collection cups."
              },
              {
                title: "NFPA 96 Compliance Sticker",
                desc: "Affixing the official, dated certification sticker required by fire marshals, health inspectors, and insurance providers."
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 font-extrabold text-sm mt-1">✓</div>
                <div>
                  <h3 className="font-bold text-primary-text text-base mb-1">{item.title}</h3>
                  <p className="text-body-text text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BENEFITS OF THE SERVICE */}
      <section className="py-24 px-6 bg-white border-b border-border-stroke">
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
                emoji: "🛡️"
              },
              {
                title: "Extended Fan Motor Life",
                desc: "Removing heavy grease off the fan blades prevents engine drag, vibration, and premature system failure.",
                emoji: "⚙️"
              },
              {
                title: "Lower Utility Costs",
                desc: "Clean systems run with far less friction, reducing draw on electricity and reducing utility bills.",
                emoji: "💡"
              },
              {
                title: "Better Working Environment",
                desc: "Keeps your kitchen cooler and cleaner by maintaining proper smoke, vapor, and heat extraction.",
                emoji: "🍃"
              },
              {
                title: "Flawless Auditing",
                desc: "Always be fully prepared for surprise inspections by fire marshals, health boards, and insurance agents.",
                emoji: "✅"
              },
              {
                title: "Grease Odor Suppression",
                desc: "Keeps rancid, stale oil odors out of your dining areas, preserving a pleasant restaurant atmosphere.",
                emoji: "🌸"
              }
            ].map((benefit, index) => (
              <div key={index} className="minimal-card flex flex-col justify-start">
                <span className="text-4xl mb-6 block">{benefit.emoji}</span>
                <h3 className="text-lg font-bold text-primary-text mb-2">{benefit.title}</h3>
                <p className="text-body-text text-sm leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR SERVICE PROCESS */}
      <section className="py-24 px-6 bg-main-bg border-b border-border-stroke">
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

      {/* 8. INDUSTRIES WE SERVE */}
      <section className="py-24 px-6 bg-white border-b border-border-stroke">
        <div className="max-w-7xl mx-auto">
          <div className="text-center flex flex-col items-center mb-16">
            <span className="subtitle-badge">(SECTORS WE PROTECT)</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary-text tracking-tight mb-4">
              Commercial Kitchens We Serve
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl">
              We service commercial ventilation systems across all hospitality, education, and institutional sectors:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
            {[
              { label: "Restaurants & Diners", icon: "🍳" },
              { label: "Hotels & Banquets", icon: "🏢" },
              { label: "Schools & Colleges", icon: "🏫" },
              { label: "Hospitals & Care", icon: "🏥" },
              { label: "Corporate Cafeterias", icon: "💼" },
              { label: "Food Trucks & Ghost Kitchens", icon: "🚚" }
            ].map((industry, index) => (
              <div key={index} className="border border-border-stroke rounded-2xl p-6 text-center hover:shadow-md transition-all flex flex-col items-center justify-center bg-[#F8FAFC]">
                <span className="text-4xl mb-4">{industry.icon}</span>
                <span className="font-extrabold text-xs text-primary-text leading-tight uppercase tracking-wider block">{industry.label}</span>
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
      <section id="faqs" className="py-24 px-6 bg-[#F4F6F8]">
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

    </div>
  );
}
