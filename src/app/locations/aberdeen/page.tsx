import React from "react";
import BookingForm from "@/components/BookingForm";
import LocalFAQItem from "@/components/LocalFAQItem";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Certified Commercial Kitchen Hood Cleaning in Aberdeen, MD | Crossaire",
  description: "Certified NFPA 96 commercial kitchen hood cleaning, grease removal, and exhaust duct degreasing services in Aberdeen, MD. 24/7 service, certified inspections, and compliance stickers.",
  keywords: "kitchen hood cleaning Aberdeen MD, commercial kitchen exhaust cleaning Aberdeen, restaurant hood cleaning Harford County, NFPA 96 compliance Aberdeen, grease trap cleaning Aberdeen MD",
};

export default function AberdeenLocationPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Structured Schema Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Commercial Kitchen Hood Cleaning in Aberdeen, MD",
            "alternateName": "Kitchen Exhaust System Cleaning Aberdeen",
            "description": "Certified NFPA 96 compliant commercial kitchen hood cleaning, grease removal, and exhaust duct degreasing services in Aberdeen, Maryland and surrounding Harford County.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Crossaire",
              "image": "https://crossaire.vercel.app/media/images/logo.png",
              "telephone": "866-399-2885",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Aberdeen",
                "addressRegion": "MD",
                "addressCountry": "US"
              }
            },
            "areaServed": [
              { "@type": "AdministrativeArea", "name": "Aberdeen" },
              { "@type": "AdministrativeArea", "name": "Harford County" }
            ]
          })
        }}
      />

      {/* 1. HERO SECTION */}
      <section className="relative text-white pt-32 pb-24 px-6 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/media/images/why-people-trust.png')" }}
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
              Commercial Kitchen <br />
              <span className="text-accent">Hood Cleaning</span> in Aberdeen, MD
            </h1>
            <p className="text-white/80 text-lg leading-relaxed mb-8 max-w-2xl">
              Keep your Aberdeen restaurant safe, sanitary, and fully compliant with NFPA 96 standards. Our local certified specialists degrease exhaust fans, duct runs, and hood canopies down to bare metal. 
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-white/95 font-semibold">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>NFPA 96 Compliance Stickers</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>$5M Liability Insured & Bonded</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>Complete Photo-Evidence Reports</span>
              </div>
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-circle-check text-accent text-lg shrink-0"></i>
                <span>24/7 Overnight Dispatch Service</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Booking Form */}
          <div id="booking-form-section" className="lg:col-span-5 relative w-full">
            <BookingForm initialService="Kitchen Hood Cleaning" />
          </div>
        </div>
      </section>

      {/* 2. ABOUT OUR SERVICES IN ABERDEEN */}
      <section className="py-24 px-6 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-3">Local Exhaust Experts</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary-text mb-6">
              Complete Kitchen Ventilation Care for Aberdeen Businesses
            </h2>
            <p className="text-body-text text-base md:text-lg leading-relaxed mb-6">
              In Aberdeen, MD, commercial kitchens face strict local safety regulations and fire code inspections. A clean ventilation system is crucial for safety and air quality. We clean the hood canopy, ductwork, and rooftop exhaust fan to keep your kitchen compliant.
            </p>
            <p className="text-body-text text-base md:text-lg leading-relaxed">
              We serve diners on Route 40, cafeterias near Aberdeen Proving Ground, and regional food service operators. Our certified technicians provide detailed service documentation, compliance stickers, and photo reports to keep your kitchen clean and safe.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border border-border-stroke/60 aspect-[4/3]">
            <img 
              src="/media/images/precision-care.png" 
              alt="Clean commercial kitchen hood after steam cleaning in Aberdeen" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. SERVICES WE OFFER IN ABERDEEN */}
      <section className="py-24 px-6 bg-main-bg border-y border-border-stroke animate-on-scroll">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-3">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary-text mb-4">
            Our Kitchen Safety Services in Aberdeen
          </h2>
          <p className="text-body-text text-base md:text-lg max-w-2xl mx-auto">
            From emergency repairs to scheduled maintenance, we provide complete ventilation services for your kitchen.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "fa-fire-extinguisher",
              title: "Kitchen Hood Cleaning",
              desc: "NFPA 96 certified removal of grease buildup from the hood canopy, filters, and plenum using professional steam cleaning equipment."
            },
            {
              icon: "fa-fan",
              title: "Exhaust Fan Maintenance",
              desc: "Rooftop fan cleaning, motor replacements, belt checks, and hinge kit installations to ensure safe and efficient ventilation."
            },
            {
              icon: "fa-wind",
              title: "Duct Degreasing & Panels",
              desc: "Grease removal throughout horizontal and vertical duct systems. We install code-compliant access panels for complete duct access."
            },
            {
              icon: "fa-shield-halved",
              title: "NFPA 96 Compliance Audits",
              desc: "Detailed safety inspections to help you avoid fire hazards, lower insurance risks, and prepare for local health department audits."
            },
            {
              icon: "fa-soap",
              title: "Grease Trap Cleaning",
              desc: "Complete pumping, scraping, and disposal of grease trap waste to prevent backup, pipe clogs, and local sewer system issues."
            },
            {
              icon: "fa-filter",
              title: "Hood Filter Programs",
              desc: "Regular replacement and cleaning of heavy-duty stainless steel hood filters to ensure efficient grease capture and airflow."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-border-stroke shadow-sm hover:shadow-md hover:border-accent/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl mb-6">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-primary-text mb-3">{item.title}</h3>
              <p className="text-body-text text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-24 px-6 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-3">Our Standards</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary-text mb-6">
              Why Aberdeen Restaurants Rely on Crossaire
            </h2>
            <p className="text-body-text text-base md:text-lg leading-relaxed mb-8">
              We provide professional commercial cleaning services that help protect your staff, property, and business reputation.
            </p>
            
            <div className="flex items-center gap-6 p-6 bg-main-bg rounded-2xl border border-border-stroke">
              <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center text-2xl shrink-0 shadow-lg shadow-accent/10">
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <h4 className="text-lg font-bold text-primary-text mb-1">Fully Certified & Insured</h4>
                <p className="text-body-text text-xs leading-relaxed">Our technicians are NFPA 96 certified and we carry $5,000,000 in general liability insurance.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "fa-clock",
                title: "24/7 Flexible Service",
                desc: "We work overnight or during closed hours so you don't lose kitchen uptime."
              },
              {
                icon: "fa-camera",
                title: "Photo-Proof Reports",
                desc: "We provide complete before-and-after photo logs of our services for your records."
              },
              {
                icon: "fa-clipboard-check",
                title: "Official Compliance Stickers",
                desc: "We place official compliance stickers on the hood for health and fire inspectors."
              },
              {
                icon: "fa-handshake",
                title: "Satisfaction Guarantee",
                desc: "Our cleaning is guaranteed to meet local fire marshal and insurance requirements."
              }
            ].map((box, i) => (
              <div key={i} className="bg-main-bg rounded-2xl p-6 border border-border-stroke hover:border-accent/20 transition-all">
                <div className="text-accent text-xl mb-4">
                  <i className={`fa-solid ${box.icon}`}></i>
                </div>
                <h3 className="text-lg font-bold text-primary-text mb-2">{box.title}</h3>
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
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-3">Who We Serve</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
              Providing Kitchen Safety Across Diverse Industries
            </h2>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto">
              We service commercial kitchen exhaust systems in a wide variety of local industries.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Restaurants & Diners", desc: "Local eateries, diners, and franchises requiring scheduled NFPA 96 cleaning services." },
              { title: "Aberdeen Proving Ground Cafeterias", desc: "Military base facility dining services with strict security and safety requirements." },
              { title: "Hotels & Banquet Halls", desc: "Large kitchen systems supporting high-volume events, dining rooms, and room service." },
              { title: "Schools & Academies", desc: "Cafeteria hoods in Harford County public schools and private educational institutions." },
              { title: "Healthcare Facilities", desc: "Hospital and senior dining center kitchens requiring high standards of hygiene." },
              { title: "Corporate Facilities", desc: "Office park cafeterias, commercial kitchens, and corporate dining facilities." }
            ].map((ind, i) => (
              <div key={i} className="bg-white/5 border border-white/10 hover:bg-white/10 rounded-2xl p-6 transition-all">
                <span className="text-accent font-extrabold text-sm uppercase tracking-wide block mb-2">0{i+1}</span>
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
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-3">Workflow</span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary-text mb-4">
              Our Certified Service Process
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-2xl mx-auto">
              We follow a complete checklist to ensure your kitchen exhaust system is clean and compliant.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {[
              { step: "01", title: "Protect & Prep", desc: "We cover kitchen prep surfaces, appliances, and floors with plastic sheets to capture runoff." },
              { step: "02", title: "Steam Cleaning", desc: "We scrape grease buildup and use high-temperature steam cleaning on the hood canopy." },
              { step: "03", title: "Fan & Duct Care", desc: "Our technicians clean rooftop fans and vertical/horizontal duct runs down to bare metal." },
              { step: "04", title: "Certify & Clean", desc: "We place an compliance sticker, provide a photo report, and clean up our workspace." }
            ].map((prc, idx) => (
              <div key={idx} className="relative group">
                <div className="text-accent font-black text-5xl mb-4 opacity-30 group-hover:opacity-100 transition-opacity duration-300">
                  {prc.step}
                </div>
                <h3 className="text-lg font-bold text-primary-text mb-2">{prc.title}</h3>
                <p className="text-body-text text-sm leading-relaxed">{prc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. NEARBY AREAS WE SERVE */}
      <section className="py-24 px-6 bg-main-bg border-y border-border-stroke animate-on-scroll">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-3">Service Coverage</span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary-text mb-6">
            Serving Aberdeen and Surrounding Communities
          </h2>
          <p className="text-body-text text-base md:text-lg leading-relaxed mb-10">
            We provide commercial kitchen hood cleaning services throughout Aberdeen and nearby areas in Harford and Cecil Counties.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-left font-bold text-primary-text max-w-2xl mx-auto">
            {[
              "Bel Air",
              "Havre de Grace",
              "Abingdon",
              "Edgewood",
              "Perryville",
              "Joppatowne",
              "Churchville",
              "Fallston",
              "Belcamp"
            ].map((area, i) => (
              <div key={i} className="flex items-center gap-2.5 p-3.5 bg-white border border-border-stroke rounded-xl shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <span className="text-xs sm:text-sm">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQS SECTION */}
      <section className="py-24 px-6 bg-white animate-on-scroll">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-3">Help Center</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-primary-text mb-4">
              Aberdeen Kitchen Safety FAQs
            </h2>
            <p className="text-body-text text-base md:text-lg max-w-xl mx-auto">
              Answers to common questions about kitchen hood cleaning, fire code safety, and compliance regulations.
            </p>
          </div>

          <div className="space-y-4">
            <LocalFAQItem question="Why is certified kitchen hood cleaning important in Aberdeen?">
              Certified cleaning helps reduce the risk of fire in commercial kitchens by removing grease buildup. It is required to maintain NFPA 96 compliance and meet local health department regulations.
            </LocalFAQItem>
            <LocalFAQItem question="How often does NFPA 96 require exhaust system cleaning?">
              Frequency depends on your cooking style. High-volume operations like diners and fast-food locations usually require quarterly cleaning, while moderate-volume facilities need service semi-annually.
            </LocalFAQItem>
            <LocalFAQItem question="Do you clean the entire exhaust ductwork and fan?">
              Yes, our certified services cover the entire system, including the hood canopy, filters, ductwork runs, and the rooftop exhaust fan, rather than just cleaning visible surfaces.
            </LocalFAQItem>
            <LocalFAQItem question="What documentation do you provide after a cleaning service?">
              We apply an official compliance sticker to the hood showing the service details and date. We also provide a complete digital photo report showing the before-and-after results for your records.
            </LocalFAQItem>
            <LocalFAQItem question="How do you handle scheduling to prevent business disruption?">
              We offer flexible scheduling, including overnight and closed-hours appointments, so your kitchen remains fully operational during business hours.
            </LocalFAQItem>
          </div>
        </div>
      </section>

      {/* 9. RELATED SERVICES */}
      <section className="py-24 px-6 bg-main-bg border-t border-border-stroke animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-2">Related Safety Solutions</span>
            <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-primary-text">Our Services</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Restaurant Exhaust System Cleaning",
                desc: "Complete steam cleaning of the exhaust system, including canopy, horizontal/vertical ducts, and fan blades.",
                link: "/services/restaurant-kitchen-exhaust-system-cleaning"
              },
              {
                title: "Exhaust Fan Repair Services",
                desc: "Professional maintenance, belt replacement, motor installations, and rooftop fan hinge adjustments.",
                link: "/services/kitchen-exhaust-fan-repairs"
              },
              {
                title: "Grease Trap Pumping & Maintenance",
                desc: "Grease trap waste pumping, disposal, and drain cleaning services to prevent kitchen system backups.",
                link: "/services/grease-trap-cleaning"
              }
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

      {/* 10. CALL TO ACTION (CTA) */}
      <section className="py-24 px-6 bg-[#0C1A2B] text-white relative overflow-hidden animate-on-scroll">
        {/* Accent Glow backdrop */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-[120px]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-4">Start Clean. Stay Compliant.</span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Ready to Schedule Your Hood Inspection in Aberdeen?
          </h2>
          <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Get certified kitchen exhaust cleaning, code compliance checks, and NFPA stickers for your business. Available 24/7/365.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#booking-form-section" className="btn-primary w-full sm:w-auto px-8 py-4 font-bold text-center">
              Request A Proposal
            </a>
            <a href="tel:8663992885" className="w-full sm:w-auto border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-4 rounded-lg transition-all text-center flex items-center justify-center gap-2">
              <i className="fa-solid fa-phone text-sm"></i>
              <span>Call 866-399-2885</span>
            </a>
          </div>
        </div>
      </section>

      {/* Scroll Reveal Trigger */}
      <ScrollReveal />
    </div>
  );
}
