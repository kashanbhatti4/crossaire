"use client";

import React, { useState, useEffect, useRef } from "react";

interface CityPin {
  name: string;
  left: string;
  top: string;
}

const citiesList: CityPin[] = [
  { name: "Baltimore, MD", left: "86.2%", top: "37.8%" },
  { name: "Richmond, VA", left: "85.1%", top: "43.5%" },
  { name: "Washington DC", left: "85.5%", top: "39.5%" },
  { name: "Alexandria, VA", left: "85.8%", top: "41.5%" },
  { name: "Annapolis, MD", left: "86.8%", top: "39.0%" },
  { name: "Arlington, VA", left: "85.3%", top: "40.0%" },
  { name: "Frederick, MD", left: "84.5%", top: "36.5%" },
  { name: "Norfolk, VA", left: "87.0%", top: "46.0%" },
  { name: "Roanoke, VA", left: "82.0%", top: "44.5%" },
  { name: "Silver Spring, MD", left: "85.6%", top: "38.8%" },
  { name: "Bethesda, MD", left: "85.2%", top: "39.0%" },
  { name: "Ocean City, MD", left: "89.2%", top: "40.5%" },
  { name: "Hagerstown, MD", left: "83.2%", top: "35.8%" },
  { name: "Leesburg, VA", left: "84.2%", top: "38.5%" },
  { name: "Woodbridge, VA", left: "85.0%", top: "42.2%" },
];

export default function CoverageMap() {
  const [activeCity, setActiveCity] = useState<string | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoplay = () => {
    stopAutoplay();
    autoplayRef.current = setInterval(() => {
      setActiveCity((current) => {
        let nextCity = current;
        while (nextCity === current) {
          const randomIndex = Math.floor(Math.random() * citiesList.length);
          nextCity = citiesList[randomIndex].name;
        }
        return nextCity;
      });
    }, 3500);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const focusCity = (cityName: string) => {
    setActiveCity(cityName);
    // Reset autoplay interval
    startAutoplay();
  };

  useEffect(() => {
    // Show a random city immediately on mount, then start autoplay
    const initialIndex = Math.floor(Math.random() * citiesList.length);
    setActiveCity(citiesList[initialIndex].name);
    startAutoplay();

    return () => stopAutoplay();
  }, []);

  return (
    <section id="coverage" className="py-24 px-6 bg-white border-b border-border-stroke">
      <div className="max-w-7xl mx-auto animate-on-scroll">
        
        {/* Split Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <div className="max-w-2xl text-left">
            <span className="subtitle-badge">(MD, DC & VA Coverage)</span>
            <h2 className="text-3xl md:text-[40px] lg:text-[44px] font-extrabold tracking-tight text-primary-text leading-[1.2] mb-4">
              Same-Day Service Across MD, DC & VA
            </h2>
            <p className="text-body-text text-base md:text-lg leading-relaxed">
              We provide certified, NFPA 96-compliant commercial kitchen exhaust and hood cleaning services. Explore our interactive map below to view our active service hubs and key cities served daily.
            </p>
          </div>
          <div className="shrink-0 flex items-center md:justify-end">
            <a href="#booking-form-section" className="btn-primary transition-transform hover:scale-[1.02] shadow-md">
              Get a free quote
            </a>
          </div>
        </div>

        {/* Map Wrapper Container */}
        <div className="relative w-full max-w-4xl mx-auto overflow-visible">
          {/* SVG Map outline */}
          <img 
            src="/media/images/map.svg" 
            alt="MD, DC & VA Service Coverage Map" 
            className="w-full h-auto block select-none pointer-events-none" 
          />
          
          {/* Active Cities Pins */}
          {citiesList.map((city) => {
            const isActive = activeCity === city.name;
            return (
              <div 
                key={city.name}
                className={`map-location-dot absolute cursor-pointer transition-all duration-300 ${
                  isActive ? "z-30" : "z-10"
                }`}
                style={{ left: city.left, top: city.top }}
                onClick={() => focusCity(city.name)}
              >
                {/* Tooltip */}
                <div className={`location-tooltip absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 flex flex-col items-center transition-all duration-500 pointer-events-none ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}>
                  <div className="bg-accent text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg whitespace-nowrap">
                    {city.name}
                  </div>
                  <div className="w-3 h-3 bg-accent rotate-45 -mt-1.5 shadow-sm"></div>
                </div>

                {/* Pulse Ring */}
                <div className={`pulse-ring absolute -inset-2 rounded-full bg-accent/30 animate-ping z-0 ${
                  isActive ? "block" : "hidden"
                }`} />

                {/* Core Dot */}
                <div className="relative w-3 h-3 bg-accent rounded-full border-2 border-white shadow-md z-10" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}