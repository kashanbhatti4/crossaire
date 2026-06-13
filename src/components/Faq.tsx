"use client";

import React, { useState, useRef, useEffect } from "react";

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

function FAQItem({ question, children }: FAQItemProps) {
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

export default function Faq() {
  return (
    <section id="faqs" className="py-24 px-6 bg-[#F4F6F8] border-b border-border-stroke animate-on-scroll">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center mb-16">
          <span className="subtitle-badge">(GOT QUESTIONS?)</span>
          <h2 className="text-3xl md:text-[44px] font-extrabold tracking-tight text-primary-text leading-[1.2] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-body-text text-base md:text-lg max-w-3xl mx-auto">
            Whether you're preparing for an inspection, managing a busy kitchen, or exploring our services, here are the most common answers we provide to restaurant owners, facility managers, and kitchen operators across Virginia, Maryland, and Washington, DC.
          </p>
          <p className="text-sm font-bold text-accent mt-3">
            Don't see your question? <a href="#booking-form-section" className="underline hover:text-accent-hover transition-colors">Contact us</a> — we're happy to help.
          </p>
        </div>

        {/* FAQ Accordion Layout (Two Columns on Desktop) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            <FAQItem question="What are your core services?">
              <p className="mb-2">We offer a full suite of compliant commercial kitchen safety and cleaning services:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Commercial Kitchen Hood Cleaning</li>
                <li>Commercial Kitchen Exhaust Maintenance & Repairs</li>
                <li>Commercial Filters Cleaning & Exchange Service</li>
                <li>Pollution Control Unit (PCU) System Service</li>
                <li>Roof Grease Containment Solutions</li>
                <li>Grease Trap Cleaning & Line Jetting</li>
              </ul>
            </FAQItem>

            <FAQItem question="Are your services compliant with NFPA 96 and local fire codes?">
              Yes. All of our commercial kitchen exhaust cleaning services are fully NFPA 96 compliant. We also provide official certification stickers and digital documentation required for fire marshal inspections, insurance providers, and health departments.
            </FAQItem>

            <FAQItem question="Can you service my kitchen after business hours?">
              Yes. We offer after-hours, overnight, weekend, and emergency services to minimize disruption to your kitchen operations. We coordinate our visits with your closing schedule.
            </FAQItem>

            <FAQItem question="What areas do you service?">
              <p className="mb-2">We proudly serve commercial kitchens throughout <strong>Virginia</strong>, <strong>Maryland</strong>, and <strong>Washington, DC</strong>. This includes communities such as:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Arlington, Alexandria, Fairfax, Richmond, Norfolk, Roanoke</li>
                <li>Baltimore, Annapolis, Frederick, Columbia, Silver Spring, Bethesda, Waldorf, Glen Burnie</li>
                <li>Washington, DC metro areas</li>
              </ul>
            </FAQItem>

            <FAQItem question="Are you insured and certified?">
              Yes. We are fully licensed, bonded, and insured with a $5M general liability policy. Our professional technicians are extensively trained and certified in NFPA 96 standards, OSHA compliance, and commercial kitchen exhaust safety.
            </FAQItem>

            <FAQItem question="Are you certified to service Gaylord systems?">
              <p className="mb-2">Yes. We are a <strong>Gaylord Certified Service Agent</strong> authorized to inspect, clean, and maintain Gaylord commercial kitchen ventilation systems. Our team is trained to:</p>
              <ul className="list-disc pl-5 space-y-1 mb-3">
                <li>Service Gaylord Hoods & PCUs</li>
                <li>Perform Preventive Maintenance</li>
                <li>Conduct Performance Testing & Ensure Warranty Compliance</li>
              </ul>
              <p>We use manufacturer-approved methods to keep your system operating safely. In addition to Gaylord, we regularly service CaptiveAire, Accurex, Halton, NAKS, and all other major ventilation brands.</p>
            </FAQItem>

            <FAQItem question="Do you repair exhaust fans?">
              <p className="mb-2">Yes. Our exhaust fan repair services cover:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Motor installation and repair</li>
                <li>Fan pulley adjustment</li>
                <li>Bearing replacement</li>
                <li>Disconnect switch installation</li>
                <li>VFD and fan control board troubleshooting</li>
                <li>Emergency fan repairs</li>
              </ul>
            </FAQItem>

            <FAQItem question="Do you specialize in water wash hoods?">
              <p className="mb-2">Yes, we specialize in preventive maintenance and service for complex water wash hood systems, including:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Cleaning spray jets and nozzles</li>
                <li>Inspecting detergent pumps and refilling detergent</li>
                <li>Checking flow switches and solenoid valve operation</li>
                <li>Verifying water temperature and adjusting pressure</li>
                <li>Inspecting interior grease accumulation</li>
              </ul>
            </FAQItem>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
            <FAQItem question="How often should I have my commercial kitchen hood cleaned?">
              <p className="mb-2">According to NFPA 96 standards, cleaning frequency is based on the volume and type of cooking:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li><strong>High-volume kitchens</strong> (solid fuel, heavy frying, 24/7 operations, woks): <strong>Every 1 month</strong></li>
                <li><strong>Moderate-use kitchens</strong> (standard dining, fast food, hotels): <strong>Every 3 months</strong></li>
                <li><strong>Low-volume kitchens</strong> (churches, day camps, seasonal operations): <strong>Every 6–12 months</strong></li>
              </ul>
            </FAQItem>

            <FAQItem question="Do you provide before-and-after photos?">
              Absolutely. Every service includes complete digital before-and-after photos. These reports serve as proof of compliance for fire marshals, health inspectors, and insurance audits.
            </FAQItem>

            <FAQItem question="Do you offer maintenance programs or recurring service plans?">
              Yes. We offer customized maintenance plans tailored to your specific kitchen volume: Monthly, Quarterly, and Semi-Annual. Regular maintenance helps guarantee fire safety compliance and prevents surprise code violations.
            </FAQItem>

            <FAQItem question="What’s included in a typical hood cleaning service?">
              <p className="mb-2">Our comprehensive <strong>7-Step Service Process</strong> includes:</p>
              <ul className="list-decimal pl-5 space-y-1">
                <li><strong>Assessment:</strong> Complete initial inspection.</li>
                <li><strong>Preparation:</strong> Covering and protecting all surrounding equipment.</li>
                <li><strong>Cleaning:</strong> Deep steam degreasing of hoods, ducts, exhaust fans, and filters.</li>
                <li><strong>Maintenance:</strong> Lubricating bearings, checking belt tension, tightening electrical disconnects.</li>
                <li><strong>Final Inspection:</strong> Ensuring everything meets quality safety codes.</li>
                <li><strong>Documentation:</strong> Providing digital compliance stickers and photo evidence.</li>
                <li><strong>Recommendations:</strong> Advising on equipment upgrades and health recommendations.</li>
              </ul>
            </FAQItem>

            <FAQItem question="How do I schedule a service or get a quote?">
              You can call us directly at <a href="tel:8663992885" className="text-accent font-extrabold">866-399-2885</a>, fill out our interactive contact form at the top of this website, or book an inspection date directly.
            </FAQItem>

            <FAQItem question="Do you provide emergency or rush services?">
              Yes. We understand that fan failures or pending health inspector deadlines happen. We offer 24/7/365 emergency response dispatch, including overnight compliance cleaning, weekend service, and rush fan repairs.
            </FAQItem>

            <FAQItem question="Do you install exhaust fans?">
              Yes. We install brand new commercial exhaust fans and motor assemblies. Our technicians verify compliance, sizing, and electrical wiring infrastructure compatibility before installing.
            </FAQItem>

            <FAQItem question="Do you perform inspections?">
              Yes. We perform detailed initial inspections of hood structures, ductwork accessibility, rooftop fans, and grease containment. We issue photo-documented, code-specific compliance audits so you know exactly where your system stands.
            </FAQItem>
          </div>

        </div>

      </div>
    </section>
  );
}
