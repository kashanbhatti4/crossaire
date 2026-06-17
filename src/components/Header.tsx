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
  { id: "restaurant-kitchen-exhaust-system-cleaning", title: "Restaurant Kitchen Exhaust System Cleaning", desc: "Complete exhaust system scrubbing" },
  { id: "kitchen-exhaust-fan-repairs", title: "Kitchen Exhaust Fan Repairs", desc: "Motor, belt, and bearing repairs" },
  { id: "kitchen-exhaust-fan-installation", title: "Kitchen Exhaust Fan Installation", desc: "Certified rooftop fan installations" },
  { id: "grease-trap-cleaning", title: "Grease Trap Cleaning", desc: "Waste extraction & line jetting" },
  { id: "pollution-control-systems-maintenance", title: "Pollution Control Systems Maintenance", desc: "Filter cleaning & electrostatic maintenance" },
  { id: "kitchen-hood-startups-and-commissioning", title: "Kitchen Hood Startups and Commissioning", desc: "Airflow balance & system startups" },
  { id: "roof-grease-containment-systems-installations", title: "Roof Grease Containment Systems Installations", desc: "Roof membrane shielding & grease filters" },
  { id: "restaurant-hood-filter-cleaning-exchange", title: "Restaurant Hood Filter Cleaning & Exchange", desc: "Convenient filter exchange programs" },
  { id: "kitchen-exhaust-duct-repair-access-panel-installation", title: "Kitchen Exhaust Duct Repair & Access Panel Installation", desc: "Certified access panel installations" },
  { id: "kitchen-hood-inspections", title: "Kitchen Hood Inspections", desc: "NFPA 96 compliance audits" }
];

const regionsList: Region[] = [
  {
    name: "Maryland (MD)",
    cities: [
      "Aberdeen",
      "Annapolis",
      "Baltimore",
      "Bel Air",
      "Bethesda",
      "Bowie",
      "Catonsville",
      "College Park",
      "Columbia",
      "Crofton",
      "Dundalk",
      "Eldersburg",
      "Ellicott City",
      "Frederick",
      "Gaithersburg",
      "Glen Burnie",
      "Greenbelt",
      "Hagerstown",
      "Havre de Grace",
      "Hyattsville",
      "Laurel",
      "Odenton",
      "Owings Mills",
      "Pasadena",
      "Rockville",
      "Severn",
      "Severna Park",
      "Silver Spring",
      "Towson",
      "Waldorf",
      "Westminster"
    ]
  },
  {
    name: "Virginia (VA)",
    cities: ["Arlington", "Alexandria", "Fairfax", "Falls Church", "Vienna", "Reston", "Herndon", "Chantilly", "Leesburg", "Ashburn", "Manassas", "Woodbridge", "Springfield", "Tysons", "McLean"]
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
    cities: ["Montgomery County", "Prince George's County", "Anne Arundel County", "Howard County", "Baltimore County", "Harford County", "Carroll County", "Frederick County"]
  }
];

// Build the /locations slug from a city/county name. Apostrophes are stripped
// (not turned into dashes) so "Prince George's County" -> "prince-georges-county".
const toLocationSlug = (name: string) =>
  name.toLowerCase().replace(/'/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeRegion, setActiveRegion] = useState<Region | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLocationsOpen, setMobileLocationsOpen] = useState(false);
  const [mobileRegionExpanded, setMobileRegionExpanded] = useState<string | null>(null);

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
    setMobileServicesOpen(false);
    setMobileLocationsOpen(false);
    setMobileRegionExpanded(null);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-border-stroke shadow-[0_4px_20px_rgba(12,26,43,0.01)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="/" className="flex items-center group logo-link" onClick={handleMobileLinkClick}>
          <img 
            src="/media/images/logo.webp" 
            alt="Crossaire Logo" 
            width={240}
            height={46}
            className="h-10 w-auto object-contain transition-opacity duration-300" 
          />
        </a>

        {/* Desktop Menu Links */}
        <nav className="hidden md:flex items-center gap-8 font-semibold text-sm">
          <a 
            href="/about" 
            className="transition-colors text-primary-text hover:text-accent"
          >
            About Us
          </a>
          
          {/* Services Megamenu Dropdown */}
          <div className="relative group py-2">
            <a 
              href="#services" 
              className="flex items-center gap-1 transition-colors text-primary-text hover:text-accent"
            >
              <span>Services</span>
              <svg className="w-3.5 h-3.5 fill-current transition-transform group-hover:rotate-180" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Megamenu list container */}
            <div className="absolute top-full left-0 mt-[20px] bg-white border border-border-stroke rounded-2xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out z-50 p-4 w-[600px] grid grid-flow-col grid-rows-6 gap-x-4 gap-y-1">
              {servicesList.map((srv) => (
                <a 
                  key={srv.id}
                  href={`/services/${srv.id}`}
                  className="dropdown-item-premium block w-[280px]"
                >
                  <span className="item-title">{srv.title}</span>
                  <span className="item-desc">{srv.desc}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Locations Cascade Dropdown */}
          <div 
            className="relative group py-2"
            onMouseLeave={() => {
              setActiveRegion(null);
            }}
          >
            <a 
              href="#locations" 
              className="flex items-center gap-1 transition-colors text-primary-text hover:text-accent"
            >
              <span>Locations</span>
              <svg className="w-3.5 h-3.5 fill-current transition-transform group-hover:rotate-180" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </a>

            {/* Regions to Cities cascading container */}
            <div className="absolute top-full left-0 mt-[20px] bg-white border border-border-stroke rounded-2xl shadow-2xl opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out flex z-50"
                 style={{ width: activeRegion ? "480px" : "240px" }}
            >
              {/* Col 1: Regions */}
              <div className="w-[240px] py-4 border-r border-border-stroke/40 shrink-0">
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

              {/* Col 2: Cities (shown if a region is hovered) */}
              <div 
                className={`w-[240px] py-4 shrink-0 transition-opacity duration-300 max-h-[320px] overflow-y-auto ${
                  activeRegion ? "opacity-100 block" : "opacity-0 hidden"
                }`}
              >
                <div className="px-5 py-2 text-[10px] font-extrabold uppercase tracking-wider text-body-text/40">Cities We Serve:</div>
                {activeRegion?.cities.map((city) => (
                  <a 
                    key={city} 
                    href={`/locations/${toLocationSlug(city)}`}
                    className="block px-5 py-2 text-xs font-bold text-primary-text hover:text-accent hover:bg-black/[0.01] transition-colors"
                  >
                    {city}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <a 
            href="/gallery" 
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
            <i className="fa-solid fa-phone text-base"></i>
            <span>866-399-2885</span>
          </a>
          <a href="/contact" className="btn-primary">Contact Us</a>
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
        <a href="/about" onClick={handleMobileLinkClick} className="mobile-link py-2 text-primary-text border-b border-gray-100">About Us</a>
        
        {/* Mobile Services Accordion */}
        <div>
          <button 
            onClick={() => {
              setMobileServicesOpen(!mobileServicesOpen);
              setMobileLocationsOpen(false);
            }} 
            className={`w-full flex items-center justify-between font-bold text-base text-left py-2 border-b border-gray-100 transition-colors ${
              mobileServicesOpen ? "text-accent" : "text-primary-text"
            }`}
          >
            <span>Services</span>
            <svg className={`w-3.5 h-3.5 fill-current text-primary-text/60 transition-transform ${mobileServicesOpen ? "rotate-180 text-accent" : ""}`} viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-3 pl-6 border-l border-gray-100 mt-3 ml-2 ${
            mobileServicesOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}>
            {servicesList.map((srv) => (
              <a 
                key={srv.id}
                href={`/services/${srv.id}`}
                onClick={handleMobileLinkClick}
                className="block py-1.5 hover:text-accent transition-colors group/item"
              >
                <span className="block font-bold text-sm text-primary-text group-hover/item:text-accent transition-colors">{srv.title}</span>
                <span className="block text-[11px] text-body-text/60 font-medium mt-0.5">{srv.desc}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Locations Accordion */}
        <div>
          <button 
            onClick={() => {
              setMobileLocationsOpen(!mobileLocationsOpen);
              setMobileServicesOpen(false);
            }} 
            className={`w-full flex items-center justify-between font-bold text-base text-left py-2 border-b border-gray-100 transition-colors ${
              mobileLocationsOpen ? "text-accent" : "text-primary-text"
            }`}
          >
            <span>Locations</span>
            <svg className={`w-3.5 h-3.5 fill-current text-primary-text/60 transition-transform ${mobileLocationsOpen ? "rotate-180 text-accent" : ""}`} viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
          </button>
          
          <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-3 pl-6 border-l border-gray-100 mt-3 ml-2 ${
            mobileLocationsOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
          }`}>
            {regionsList.map((reg) => {
              const isExpanded = mobileRegionExpanded === reg.name;
              return (
                <div key={reg.name} className="py-1">
                  {/* Region Trigger */}
                  <button 
                    onClick={() => setMobileRegionExpanded(isExpanded ? null : reg.name)}
                    className={`w-full flex items-center justify-between text-sm font-bold text-left py-2 px-3 rounded-lg transition-all ${
                      isExpanded 
                        ? "bg-accent/5 text-accent" 
                        : "text-primary-text hover:bg-black/[0.01]"
                    }`}
                  >
                    <span>{reg.name}</span>
                    <svg className={`w-3.5 h-3.5 fill-current transition-transform ${isExpanded ? "rotate-180" : ""}`} viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>

                  {/* Cities List */}
                  <div className={`overflow-hidden transition-all duration-300 flex flex-col gap-2 pl-6 border-l border-gray-100 mt-2 ml-4 ${
                    isExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}>
                    {reg.cities.map((city) => (
                      <a 
                        key={city} 
                        href={`/locations/${toLocationSlug(city)}`}
                        onClick={handleMobileLinkClick}
                        className="block py-1.5 text-xs font-semibold text-body-text hover:text-accent transition-colors"
                      >
                        {city}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <a href="/gallery" onClick={handleMobileLinkClick} className="mobile-link py-2 text-primary-text border-b border-gray-100">Gallery</a>
        
        <div className="flex flex-col gap-4 mt-2">
          <a href="tel:8663992885" className="flex items-center justify-center gap-2 py-3 bg-main-bg text-primary-text rounded-lg">
            <i className="fa-solid fa-phone text-base text-accent"></i>
            <span>866-399-2885</span>
          </a>
          <a href="/contact" onClick={handleMobileLinkClick} className="btn-primary w-full py-3 text-center">Contact Us</a>
        </div>
      </div>
    </header>
  );
}