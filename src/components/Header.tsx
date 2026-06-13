"use client";

import React, { useState, useEffect } from "react";

interface Service {
  id: string;
  title: string;
  desc: string;
}

interface Region {
  name: string;
  cities: string[];
}

const servicesList: Service[] = [
  { id: "kitchen-hood-cleaning", title: "Kitchen Hood Cleaning", desc: "NFPA 96 certified grease removal" },
  { id: "exhaust-fan-maintenance", title: "Exhaust Fan Maintenance", desc: "Belts, bearings, and motor service" },
  { id: "pollution-control-unit", title: "Pollution Control Unit (PCU)", desc: "Filter maintenance & electrostatic clean" },
  { id: "grease-trap-pumping", title: "Grease Trap Pumping", desc: "Waste extraction & plumbing jetting" },
  { id: "rooftop-grease-containment", title: "Rooftop Grease Containment", desc: "Roof membrane protection & filters" }
];

const regionsList: Region[] = [
  {
    name: "Maryland (MD)",
    cities: ["Baltimore", "Annapolis", "Frederick", "Rockville", "Gaithersburg", "Silver Spring", "Bethesda", "Bowie", "Columbia", "Ellicott City", "Waldorf", "Laurel", "Hyattsville", "College Park", "Greenbelt", "Hagerstown", "Salisbury", "Ocean City"]
  },
  {
    name: "Virginia (VA)",
    cities: ["Arlington", "Alexandria", "Fairfax", "Falls Church", "Vienna", "Reston", "Herndon", "Chantilly", "Leesburg", "Ashburn", "Manassas", "Woodbridge", "Springfield", "Tysons", "McLean", "Richmond", "Norfolk", "Roanoke"]
  },
  {
    name: "Washington DC",
    cities: ["Washington"]
  },
  {
    name: "Northern Virginia Suburbs",
    cities: ["Fairfax County", "Loudoun County", "Prince William County", "Arlington County", "Alexandria City"]
  },
  {
    name: "Maryland DC Suburbs",
    cities: ["Montgomery County", "Prince George's County", "Anne Arundel County", "Howard County"]
  }
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [activeRegion, setActiveRegion] = useState<Region | null>(null);
  const [mobileExpandedService, setMobileExpandedService] = useState<string | null>(null);
  const [mobileExpandedRegion, setMobileExpandedRegion] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [mobileMenuOpen]);

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileExpandedService(null);
    setMobileExpandedRegion(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-border-stroke shadow-[0_4px_20px_rgba(12,26,43,0.01)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center group logo-link" onClick={handleMobileLinkClick}>
          <img 
            src="/media/images/logo.png" 
            alt="Crossaire Logo" 
            className="h-10 w-auto object-contain transition-opacity duration-300" 
          />
        </a>

        {/* Desktop Menu Links */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm">
          <a 
            href="#who-we-are" 
            className="transition-colors text-primary-text hover:text-accent"
          >
            About Us
          </a>
          
          {/* Services Cascade Dropdown */}
          <div 
            className="relative group py-2"
            onMouseLeave={() => {
              setActiveService(null);
              setActiveRegion(null);
            }}
          >
            <a 
              href="#services" 
              className="flex items-center gap-1 transition-colors text-primary-text hover:text-accent"
            >
              <span>Services</span>
              <svg className="w-3.5 h-3.5 fill-current transition-transform group-hover:rotate-180" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Level 1 Services list container */}
            <div className="absolute top-full left-0 mt-[20px] bg-white border border-border-stroke rounded-2xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out flex z-50"
                 style={{ width: activeService ? (activeRegion ? "720px" : "480px") : "240px" }}
            >
              {/* Col 1: Services */}
              <div className="w-[240px] py-4 border-r border-border-stroke/40 shrink-0">
                {servicesList.map((srv) => (
                  <div 
                    key={srv.id}
                    className={`dropdown-item-premium ${activeService?.id === srv.id ? "active-premium" : ""}`}
                    onMouseEnter={() => {
                      setActiveService(srv);
                      setActiveRegion(null);
                    }}
                  >
                    <span className="item-title">{srv.title}</span>
                    <span className="item-desc">{srv.desc}</span>
                  </div>
                ))}
              </div>

              {/* Col 2: Regions (shown if a service is hovered) */}
              <div 
                className={`w-[240px] py-4 border-r border-border-stroke/40 shrink-0 transition-opacity duration-300 ${
                  activeService ? "opacity-100 block" : "opacity-0 hidden"
                }`}
              >
                {regionsList.map((reg) => (
                  <div 
                    key={reg.name}
                    className={`group/city dropdown-item-premium flex items-center justify-between w-full shrink-0 ${
                      activeRegion?.name === reg.name ? "active-premium" : ""
                    }`}
                    onMouseEnter={() => setActiveRegion(reg)}
                  >
                    <span className="item-title">{reg.name}</span>
                    <svg className="w-3.5 h-3.5 fill-current text-body-text/60 transition-transform group-hover/city:translate-x-1" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </div>
                ))}
              </div>

              {/* Col 3: Cities (shown if a region is hovered) */}
              <div 
                className={`w-[240px] py-4 shrink-0 transition-opacity duration-300 max-h-[320px] overflow-y-auto ${
                  activeRegion ? "opacity-100 block" : "opacity-0 hidden"
                }`}
              >
                <div className="px-5 py-2 text-[10px] font-extrabold uppercase tracking-wider text-body-text/40">Cities We Serve:</div>
                {activeRegion?.cities.map((city) => (
                  <a 
                    key={city} 
                    href={`/locations/${city.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    className="block px-5 py-2 text-xs font-bold text-primary-text hover:text-accent hover:bg-black/[0.01] transition-colors"
                  >
                    {city}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a 
            href="#gallery" 
            className="transition-colors text-primary-text hover:text-accent"
          >
            Gallery
          </a>
        </nav>

        {/* Call-to-Action & Emergency Call */}
        <div className="hidden lg:flex items-center gap-6">
          <a 
            href="tel:8663992885" 
            className="flex items-center gap-2 font-bold text-sm transition-colors text-accent hover:text-accent-hover"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97a1.521 1.521 0 0 0-.328 1.96 11.96 11.96 0 0 0 5.758 5.759 1.521 1.521 0 0 0 1.96-.328l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
            </svg>
            <span>866-399-2885</span>
          </a>
          <a href="#booking-form-section" className="btn-primary">Book Inspection</a>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg transition-colors hover:bg-black/5" 
          aria-label="Toggle navigation menu"
        >
          <svg 
            className={`w-6 h-6 fill-current ${mobileMenuOpen ? "hidden" : "block"} text-[#0C1A2B]`} 
            viewBox="0 0 24 24"
          >
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
          <svg 
            className={`w-6 h-6 fill-[#0C1A2B] ${mobileMenuOpen ? "block" : "hidden"}`} 
            viewBox="0 0 24 24"
          >
            <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 1 1-1.06-1.06L12 13.06l-5.47 5.47a.75.75 0 1 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu Dropdown Accordion */}
      <div className={`fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white border-b border-border-stroke shadow-lg py-6 px-6 flex flex-col gap-5 font-semibold text-base overflow-y-auto pb-12 transition-all duration-300 ${
        mobileMenuOpen ? "opacity-100 block" : "opacity-0 hidden pointer-events-none"
      }`}>
        <a href="#who-we-are" onClick={handleMobileLinkClick} className="mobile-link py-2 text-primary-text border-b border-gray-100">About Us</a>
        
        {/* Mobile Services Accordion (L1) */}
        <div>
          <button 
            onClick={() => {
              setMobileExpandedService(mobileExpandedService ? null : "services");
              setMobileExpandedRegion(null);
            }} 
            className={`w-full flex items-center justify-between font-bold text-base text-left py-2 border-b border-gray-100 transition-colors ${
              mobileExpandedService ? "text-accent" : "text-primary-text"
            }`}
          >
            <span>Services</span>
            <svg className={`w-3.5 h-3.5 fill-current text-primary-text/60 transition-transform ${mobileExpandedService ? "rotate-180 text-accent" : ""}`} viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
            </svg>
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-2 pl-4 text-sm font-medium text-body-text mt-1.5 ${
            mobileExpandedService ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}>
            {servicesList.map((srv) => (
              <div key={srv.id} className="py-1">
                {/* Region Trigger (L2) */}
                <button 
                  onClick={() => setMobileExpandedRegion(mobileExpandedRegion === srv.id ? null : srv.id)}
                  className={`w-full flex items-center justify-between text-xs font-semibold hover:text-accent text-left py-1.5 px-3 rounded-md hover:bg-black/[0.01] transition-all ${
                    mobileExpandedRegion === srv.id ? "text-accent font-extrabold" : "text-body-text"
                  }`}
                >
                  <span>{srv.title}</span>
                  <svg className={`w-3 h-3 fill-current transition-transform ${mobileExpandedRegion === srv.id ? "rotate-180" : ""}`} viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>

                {/* Cities List (L3) */}
                <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-1.5 pl-4 ml-3 border-l border-border-stroke/80 mt-1 mb-2 ${
                  mobileExpandedRegion === srv.id ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                }`}>
                  {regionsList.map((reg) => (
                    <div key={reg.name} className="py-0.5">
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-body-text/40 px-2 py-1">{reg.name}</div>
                      <div className="flex flex-col gap-1 pl-2">
                        {reg.cities.map((city) => (
                          <a 
                            key={city} 
                            href={`/locations/${city.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                            onClick={handleMobileLinkClick}
                            className="block px-2 py-1 text-xs text-primary-text hover:text-accent font-medium"
                          >
                            {city}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <a href="#gallery" onClick={handleMobileLinkClick} className="mobile-link py-2 text-primary-text border-b border-gray-100">Gallery</a>
        
        <div className="flex flex-col gap-4 mt-2">
          <a href="tel:8663992885" className="flex items-center justify-center gap-2 py-3 bg-main-bg text-primary-text rounded-lg">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97a1.521 1.521 0 0 0-.328 1.96 11.96 11.96 0 0 0 5.758 5.759 1.521 1.521 0 0 0 1.96-.328l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
            </svg>
            <span>866-399-2885</span>
          </a>
          <a href="#booking-form-section" onClick={handleMobileLinkClick} className="btn-primary w-full py-3 text-center">Book Inspection</a>
        </div>
      </div>
    </header>
  );
}