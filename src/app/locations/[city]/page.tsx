import React from "react";
import BookingForm from "@/components/BookingForm";
import LocalFAQItem from "@/components/LocalFAQItem";
import ScrollReveal from "@/components/ScrollReveal";
import locationsData from "@/data/locationsData";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return Object.keys(locationsData).map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { city } = await params;
  const data = locationsData[city];
  if (!data) return {};
  return {
    title: `Certified Kitchen Hood Cleaning in ${data.city}, ${data.stateAbbr} | Crossaire`,
    description: data.metaDescription,
    keywords: data.metaKeywords,
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params;
  const data = locationsData[city];

  if (!data) notFound();

  const { city: cityName, state, stateAbbr, county, heroDescription, aboutParagraph1, aboutParagraph2, dispatchContext, coverageContext, industriesExtra, neighborhoods, faqCityContext } = data;

  const services = [
    { icon: "fa-fire-extinguisher", title: `Kitchen Hood Cleaning in ${cityName}`, desc: `NFPA 96 certified removal of grease buildup from the hood canopy, filters, and plenum using professional steam cleaning equipment.`, link: "/services/kitchen-hood-cleaning" },
    { icon: "fa-cubes", title: `Restaurant Exhaust System Cleaning in ${cityName}`, desc: `Complete scrubbing of the exhaust system, covering the hood, duct runs, and rooftop blower unit for safety.`, link: "/services/restaurant-kitchen-exhaust-system-cleaning" },
    { icon: "fa-gears", title: `Kitchen Exhaust Fan Repairs in ${cityName}`, desc: `Rooftop exhaust fan motor, belt, bearing, and pulley repair services to maintain proper airflow in your kitchen.`, link: "/services/kitchen-exhaust-fan-repairs" },
    { icon: "fa-fan", title: `Kitchen Exhaust Fan Installation in ${cityName}`, desc: `Rooftop exhaust fan replacement and install services, with heavy-duty code-compliant fan hinge kits.`, link: "/services/kitchen-exhaust-fan-installation" },
    { icon: "fa-soap", title: `Grease Trap Cleaning in ${cityName}`, desc: `Waste pumping, interceptor cleaning, and line jetting to prevent backups, clogs, and environmental penalties.`, link: "/services/grease-trap-cleaning" },
    { icon: "fa-filter", title: `Pollution Control Systems Maintenance in ${cityName}`, desc: `Electrostatic precipitator (ESP) cell cleaning, charcoal filter changes, and regular PCS maintenance scheduling.`, link: "/services/pollution-control-systems-maintenance" },
    { icon: "fa-bolt", title: `Kitchen Hood Startups and Commissioning in ${cityName}`, desc: `Airflow balancing, makeup air unit adjustment, and exhaust startup commissioning audits for commercial kitchens.`, link: "/services/kitchen-hood-startups-and-commissioning" },
    { icon: "fa-shield-halved", title: `Roof Grease Containment Systems Installations in ${cityName}`, desc: `Rooftop grease diaper containment systems, membrane shield guards, and grease absorber installs to protect your roof.`, link: "/services/roof-grease-containment-systems-installations" },
    { icon: "fa-arrows-rotate", title: `Restaurant Hood Filter Cleaning & Exchange in ${cityName}`, desc: `Stainless steel baffle filter cleaning, custom sizing, and filter exchange programs to maintain clean air filter lines.`, link: "/services/restaurant-hood-filter-cleaning-exchange" },
    { icon: "fa-wrench", title: `Kitchen Exhaust Duct Repair & Access Panel Installation in ${cityName}`, desc: `Certified access panel installations and structural duct repairs to enable complete code-required duct cleaning access.`, link: "/services/kitchen-exhaust-duct-repair-access-panel-installation" },
    { icon: "fa-clipboard-check", title: `Kitchen Hood Inspections in ${cityName}`, desc: `Regular NFPA 96 compliance audits, inspection stickers, and report logs for fire inspectors and insurers.`, link: "/services/kitchen-hood-inspections" },
  ];

  const schemaJson = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Commercial Kitchen Hood Cleaning in ${cityName}, ${stateAbbr}`,
    "alternateName": `Kitchen Exhaust System Cleaning ${cityName}`,
    "description": data.metaDescription,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Crossaire",
      "image": "https://crossaire.vercel.app/media/images/logo.webp",
      "telephone": "866-399-2885",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": cityName,
        "addressRegion": stateAbbr,
        "addressCountry": "US",
      },
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": cityName },
      { "@type": "AdministrativeArea", "name": county },
    ],
  };

  const faqSchemaJson = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Why is certified kitchen hood cleaning important in ${faqCityContext}?`,
        "acceptedAnswer": { "@type": "Answer", "text": "Certified cleaning reduces fire risk by removing grease buildup and is required to maintain NFPA 96 compliance and meet local health department regulations." },
      },
      {
        "@type": "Question",
        "name": "How often does NFPA 96 require exhaust system cleaning?",
        "acceptedAnswer": { "@type": "Answer", "text": "Frequency depends on your cooking volume. High-volume operations like diners and fast-food chains usually require quarterly cleaning, while moderate-volume facilities need service semi-annually." },
      },
      {
        "@type": "Question",
        "name": "Do you clean the entire exhaust ductwork and fan?",
        "acceptedAnswer": { "@type": "Answer", "text": "Yes — our services cover the entire system including the hood canopy, filters, ductwork runs, and the rooftop exhaust fan, not just visible surfaces." },
      },
      {
        "@type": "Question",
        "name": "What documentation do you provide after a cleaning?",
        "acceptedAnswer": { "@type": "Answer", "text": "We place an official NFPA 96 compliance sticker on the hood and provide a complete digital photo report showing before-and-after results for your records." },
      },
      {
        "@type": "Question",
        "name": "How do you schedule to avoid business disruption?",
        "acceptedAnswer": { "@type": "Answer", "text": "We offer flexible overnight and closed-hours scheduling so your kitchen stays fully operational during business hours." },
      },
    ],
  };

  return (
    <div className="bg-white min-h-screen">
      <link rel="preload" href="/media/images/why-people-trust.webp" as="image" fetchPriority="high" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaJson) }} />

      {/* 1. HERO SECTION */}
      <section className="relative text-white pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/media/images/why-people-trust.webp')" }} />
        <div className="absolute inset-0 bg-[#0C1A2B]/92" />
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-sm uppercase tracking-wider font-extrabold text-accent block mb-3">(Certified Commercial Service)</span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Commercial Kitchen Hood Cleaning in <span className="text-accent">{cityName}, {stateAbbr}</span>
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">{heroDescription}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/95 font-semibold">
              {["NFPA 96 Compliance Stickers", "$5M Liability Insured & Bonded", "Complete Photo-Evidence Reports", "24/7 Overnight Dispatch Service"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div id="booking-form-section" className="lg:col-span-5 relative w-full">
            <BookingForm initialService="Kitchen Hood Cleaning" />
          </div>
        </div>
      </section>

      {/* EMBLEMS & PARTNERS */}
      <section className="bg-white border-b border-border-stroke py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center pb-12 border-b border-border-stroke/60">
            <span className="text-[11px] uppercase tracking-widest font-extrabold text-body-text/60 mb-6 block">(Our Industry Certifications & Affiliations)</span>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              <img src="/media/images/emblem1.webp" alt="NFPA 96 Certified Commercial Exhaust Cleaning Compliance Logo" className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              <img src="/media/images/emblem2.webp" alt="OSHA Compliant Commercial Kitchen Safety Standard Certification" className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105" />
              <img src="/media/images/emblem3.webp" alt="IKECA Equivalent Exhaust System Cleaning Standard Logo" className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105" />
            </div>
          </div>
          <div className="pt-12 text-center">
            <span className="text-[11px] uppercase tracking-widest font-extrabold text-body-text/60 mb-8 block">(Trusted by Leading Brands in MD, DC & VA)</span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
              {[
                { src: "/media/images/partners/amazon.webp", alt: "Amazon Commercial Facility Kitchen Service Client", h: "h-10 md:h-14" },
                { src: "/media/images/partners/burger-king.webp", alt: "Burger King Restaurant Exhaust Service Client", h: "h-12 md:h-16" },
                { src: "/media/images/partners/hilton.webp", alt: "Hilton Hotel Kitchen Hood Service Client", h: "h-10 md:h-14" },
                { src: "/media/images/partners/ihg-hotels.webp", alt: "IHG Hotels Ventilation Cleaning Client", h: "h-8 md:h-12" },
                { src: "/media/images/partners/subway.webp", alt: "Subway Restaurant Grease Trap Cleaning Client", h: "h-10 md:h-14" },
                { src: "/media/images/partners/wing-stop.webp", alt: "Wing Stop Hood Filter Cleaning Client", h: "h-10 md:h-14" },
                { src: "/media/images/partners/ruth-chris.webp", alt: "Ruth's Chris Steak House Exhaust Service Client", h: "h-12 md:h-16" },
                { src: "/media/images/partners/the-halal-guys.webp", alt: "The Halal Guys Commercial Kitchen Service Client", h: "h-12 md:h-16" },
                { src: "/media/images/partners/omni.webp", alt: "Omni Hotels & Resorts Kitchen Exhaust Client", h: "h-8 md:h-12" },
                { src: "/media/images/partners/bowie.webp", alt: "Bowie State University Dining Facility Service Client", h: "h-10 md:h-14" },
              ].map((p, i) => (
                <div key={i} className="flex items-center justify-center">
                  <img src={p.src} alt={p.alt} className={`${p.h} w-auto object-contain transition-transform duration-300 hover:scale-105`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section className="py-24 px-6 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-3">(Local Exhaust Experts)</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary-text mb-6">
              Complete Kitchen Ventilation Care for {cityName} Businesses
            </h2>
            <p className="text-body-text text-base md:text-lg leading-relaxed mb-6">{aboutParagraph1}</p>
            <p className="text-body-text text-base md:text-lg leading-relaxed">{aboutParagraph2}</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border-stroke/60 aspect-[4/3]">
            <img src="/media/images/gallery/kitchen-hood-cleaning-3.webp" alt={`Clean commercial kitchen hood after steam cleaning in ${cityName}`} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* 3. SERVICES GRID */}
      <section className="py-24 px-6 bg-main-bg border-y border-border-stroke animate-on-scroll">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-3">(What We Do)</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary-text mb-4">Our Kitchen Safety Services in {cityName}</h2>
          <p className="text-body-text text-base md:text-lg max-w-2xl mx-auto">From emergency repairs to scheduled maintenance, we provide complete compliance services for your kitchen in {cityName}, {stateAbbr}.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-border-stroke shadow-sm hover:shadow-md hover:border-accent/30 transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl mb-6">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-primary-text mb-3">{item.title}</h3>
                <p className="text-body-text text-sm leading-relaxed mb-6">{item.desc}</p>
              </div>
              <a href={item.link} className="text-accent hover:text-accent-hover font-bold text-xs flex items-center gap-1.5 mt-auto select-none">
                <span>Learn more</span>
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24 px-6 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-3">(Our Standards)</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary-text mb-4">Why {cityName} Restaurants Rely on Crossaire</h2>
            <p className="text-body-text text-base md:text-lg">We provide professional commercial cleaning services that help protect your staff, property, and business reputation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: "fa-certificate", title: "Fully Certified & Insured", desc: "Our technicians are NFPA 96 certified commercial kitchen exhaust cleaners. We carry $5M in General Liability insurance." },
              { icon: "fa-clock", title: "24/7 Flexible Service", desc: "We work overnight or during closed hours so you don't lose kitchen uptime or disrupt dining customers." },
              { icon: "fa-camera", title: "Photo-Proof Reports", desc: "We deliver complete, transparent before-and-after photo logs of our services for your records and compliance." },
              { icon: "fa-clipboard-check", title: "Official NFPA Stickers", desc: "We place official NFPA 96 compliance stickers on the hood canopy to satisfy fire marshals, health inspectors, and insurers." },
              { icon: "fa-handshake-angle", title: "Satisfaction Guarantee", desc: `Our exhaust degreasing is guaranteed to meet all local ${cityName} fire codes and standard compliance parameters.` },
              { icon: "fa-shield-halved", title: "Safety First Approach", desc: "We protect kitchen surfaces and appliances with heavy plastic sheeting and gather all waste water in secure containment bins." },
            ].map((box, i) => (
              <div key={i} className="group relative bg-main-bg border border-border-stroke rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:border-accent/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-white border border-border-stroke/80 flex items-center justify-center text-accent text-xl mb-6 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300 shadow-sm">
                  <i className={`fa-solid ${box.icon}`}></i>
                </div>
                <h3 className="text-lg font-extrabold text-primary-text mb-3">{box.title}</h3>
                <p className="text-body-text text-sm leading-relaxed">{box.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES WE SERVE */}
      <section className="py-24 px-6 bg-[#0C1A2B] text-white relative overflow-hidden animate-on-scroll">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent/5 blur-[120px]"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-3">(Who We Serve)</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">Providing Kitchen Safety Across Diverse Industries</h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">We service commercial kitchen exhaust systems in a wide variety of local {cityName} industries.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Restaurants & Diners", desc: `Local eateries, diners, and franchises in ${cityName} requiring scheduled NFPA 96 cleaning services.` },
              { title: industriesExtra, desc: `Specialized facilities in ${cityName} with strict safety requirements and high-volume kitchen operations.` },
              { title: "Hotels & Banquet Halls", desc: "Large kitchen systems supporting high-volume events, dining rooms, and room service operations." },
              { title: "Schools & Academies", desc: `Cafeteria hoods in ${county} public schools and private educational institutions.` },
              { title: "Healthcare Facilities", desc: "Hospital and senior dining center kitchens requiring high standards of hygiene and safety." },
              { title: "Corporate Facilities", desc: "Office park cafeterias, commercial kitchens, and corporate dining facilities requiring regular NFPA 96 service." },
            ].map((ind, i) => (
              <div key={i} className="bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl p-6 transition-all">
                <span className="text-accent font-extrabold text-sm uppercase tracking-wide block mb-2">0{i + 1}</span>
                <h3 className="text-xl font-bold text-white mb-2">{ind.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. OUR PROCESS */}
      <section className="py-24 px-6 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-3">(Workflow)</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary-text mb-4">Our Certified Service Process</h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl mx-auto">We follow a complete checklist to ensure your kitchen exhaust system is clean and compliant.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Protect & Prep", desc: "We cover kitchen prep surfaces, appliances, and floors with plastic sheets to capture runoff." },
              { step: "02", title: "Steam Cleaning", desc: "We scrape grease buildup and use high-temperature steam cleaning on the hood canopy." },
              { step: "03", title: "Fan & Duct Care", desc: "Our technicians clean rooftop fans and vertical/horizontal duct runs down to bare metal." },
              { step: "04", title: "Certify & Clean", desc: "We place a compliance sticker, provide a photo report, and clean up our workspace." },
            ].map((prc, idx) => (
              <div key={idx} className="relative group">
                <div className="text-accent font-black text-5xl mb-4 opacity-30 group-hover:opacity-100 transition-opacity duration-300">{prc.step}</div>
                <h3 className="text-lg font-bold text-primary-text mb-2">{prc.title}</h3>
                <p className="text-body-text text-sm leading-relaxed">{prc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NEIGHBORHOOD COVERAGE */}
      <section className="py-24 px-6 bg-main-bg border-y border-border-stroke animate-on-scroll">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-3">(Service Coverage)</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary-text mb-6">Neighborhoods We Serve in {cityName}, {stateAbbr}</h2>
            <p className="text-body-text text-base md:text-lg leading-relaxed mb-8">{coverageContext} Our dispatch teams are zoned locally to ensure prompt response times and reliable scheduling.</p>
            <div className="flex flex-col gap-8 p-8 md:p-10 border border-border-stroke/60 rounded-2xl bg-white mb-8 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm shrink-0 mt-0.5">
                  <i className="fa-solid fa-truck-fast"></i>
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-primary-text mb-1">Zoned Dispatch Center</h4>
                  <p className="text-body-text text-sm leading-relaxed">{dispatchContext}</p>
                </div>
              </div>
              <div className="h-px bg-border-stroke/40" />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent text-sm shrink-0 mt-0.5">
                  <i className="fa-solid fa-shield-halved"></i>
                </div>
                <div>
                  <h4 className="text-base font-extrabold text-primary-text mb-1">Guaranteed Local Coverage</h4>
                  <p className="text-body-text text-sm leading-relaxed">Comprehensive commercial kitchen exhaust maintenance across all {cityName} zones.</p>
                </div>
              </div>
            </div>
            <a href="#booking-form-section" className="btn-primary w-full sm:w-auto inline-block text-center font-bold px-6 py-3 rounded-lg">Book Local Dispatch</a>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {neighborhoods.map((area, i) => (
              <div key={i} className="group flex flex-col justify-between p-5 bg-white border border-border-stroke rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 hover:border-accent/20">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-main-bg border border-border-stroke flex items-center justify-center text-body-text/40 group-hover:text-accent group-hover:border-accent/20 transition-colors shrink-0 shadow-sm">
                    <i className="fa-solid fa-map-pin text-sm"></i>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-bold text-sm text-primary-text group-hover:text-accent transition-colors">{area.name}</h3>
                      <span className="text-[10px] font-bold text-body-text/40 bg-white border border-border-stroke/40 rounded px-1.5 py-0.5 select-none">{area.zip}</span>
                    </div>
                    <p className="text-body-text text-[11px] leading-normal">{area.desc}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-1 border-t border-border-stroke/40 pt-3">
                  {area.services.map((srv, sIdx) => (
                    <span key={sIdx} className="text-[9px] font-bold text-accent bg-accent/5 px-2 py-0.5 rounded-full select-none border border-accent/10">{srv}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQS */}
      <section className="py-24 px-6 bg-white animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-3">(Help Center)</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary-text mb-4">{cityName} Kitchen Safety FAQs</h2>
            <p className="text-body-text text-base md:text-lg max-w-xl mx-auto">Answers to common questions about kitchen hood cleaning, fire code safety, and compliance regulations.</p>
          </div>
          <div className="space-y-4">
            <LocalFAQItem question={`Why is certified kitchen hood cleaning important in ${faqCityContext}?`}>
              Certified cleaning reduces fire risk by removing grease buildup and is required to maintain NFPA 96 compliance and meet local health department regulations in {faqCityContext}.
            </LocalFAQItem>
            <LocalFAQItem question="How often does NFPA 96 require exhaust system cleaning?">
              Frequency depends on your cooking volume. High-volume operations like diners and fast-food chains usually require quarterly cleaning, while moderate-volume facilities need service semi-annually.
            </LocalFAQItem>
            <LocalFAQItem question="Do you clean the entire exhaust ductwork and fan?">
              Yes — our certified services cover the entire system including the hood canopy, filters, ductwork runs, and the rooftop exhaust fan, not just visible surfaces.
            </LocalFAQItem>
            <LocalFAQItem question="What documentation do you provide after a cleaning service?">
              We apply an official compliance sticker to the hood showing the service details and date, and provide a complete digital photo report for your records.
            </LocalFAQItem>
            <LocalFAQItem question="How do you handle scheduling to prevent business disruption?">
              We offer flexible overnight and closed-hours scheduling so your kitchen remains fully operational during business hours.
            </LocalFAQItem>
          </div>
        </div>
      </section>

      {/* 9. RELATED SERVICES */}
      <section className="py-24 px-6 bg-main-bg border-t border-border-stroke animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-2">(Related Safety Solutions)</span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-primary-text">Our Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Restaurant Exhaust System Cleaning", desc: "Complete steam cleaning of the exhaust system, including canopy, horizontal/vertical ducts, and fan blades.", link: "/services/restaurant-kitchen-exhaust-system-cleaning" },
              { title: "Exhaust Fan Repair Services", desc: "Professional maintenance, belt replacement, motor installations, and rooftop fan hinge adjustments.", link: "/services/kitchen-exhaust-fan-repairs" },
              { title: "Grease Trap Pumping & Maintenance", desc: "Grease trap waste pumping, disposal, and drain cleaning services to prevent kitchen system backups.", link: "/services/grease-trap-cleaning" },
            ].map((rel, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-border-stroke shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
                <div>
                  <h3 className="text-lg font-bold text-primary-text mb-3">{rel.title}</h3>
                  <p className="text-body-text text-sm leading-relaxed mb-6">{rel.desc}</p>
                </div>
                <a href={rel.link} className="text-accent hover:text-accent-hover font-bold text-xs flex items-center gap-1.5 mt-auto">
                  <span>Learn more</span>
                  <i className="fa-solid fa-arrow-right text-[10px]"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA */}
      <section className="py-24 px-6 bg-[#0C1A2B] text-white relative overflow-hidden animate-on-scroll">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-[120px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-4">(Start Clean. Stay Compliant.)</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Ready to Schedule Your Hood Inspection in {cityName}?
          </h2>
          <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Get certified kitchen exhaust cleaning, code compliance checks, and NFPA stickers for your business. Available 24/7/365.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#booking-form-section" className="btn-primary w-full sm:w-auto px-8 py-4 font-bold text-center">Request A Quote</a>
            <a href="tel:8663992885" className="w-full sm:w-auto border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg transition-all text-center flex items-center justify-center gap-2">
              <i className="fa-solid fa-phone text-sm"></i>
              <span>Call 866-399-2885</span>
            </a>
          </div>
        </div>
      </section>

      <ScrollReveal />
    </div>
  );
}
