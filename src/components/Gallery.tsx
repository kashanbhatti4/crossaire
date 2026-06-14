"use client";

import React, { useState, useRef } from "react";

interface GalleryItem {
  id: number;
  image: string;
  title: string;
  desc: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: "/media/images/kitchen-hood.webp",
    title: "Kitchen Hoods",
    desc: "NFPA 96 compliance deep steam cleaning",
  },
  {
    id: 2,
    image: "/media/images/exhaust-fan.webp",
    title: "Exhaust Fans",
    desc: "Belt checks, motor audits & bearing lubes",
  },
  {
    id: 3,
    image: "/media/images/compliance.webp",
    title: "Compliance Audits",
    desc: "Detailed visual reports & before-after photos",
  },
  {
    id: 4,
    image: "/media/images/precision-care.webp",
    title: "Pollution Control Units",
    desc: "Advanced PCU diagnostics & filter cleaning",
  },
  {
    id: 5,
    image: "/media/images/duct-system.webp",
    title: "Ductwork Systems",
    desc: "Horizontal & vertical access grease removal",
  },
];

export default function Gallery() {
  const [activeDot, setActiveDot] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const firstChild = slider.firstElementChild as HTMLElement;
    if (!firstChild) return;
    const cardWidth = firstChild.getBoundingClientRect().width;
    const gap = 16; // gap-4 is 16px
    const index = Math.round(slider.scrollLeft / (cardWidth + gap));
    if (index >= 0 && index < galleryItems.length) {
      setActiveDot(index);
    }
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-white border-b border-border-stroke">
      <div className="max-w-7xl mx-auto animate-on-scroll">
        
        {/* Centered Header Block */}
        <div className="text-center flex flex-col items-center mb-16">
          <span className="subtitle-badge">(Visual Showcase)</span>
          <h2 className="text-3xl md:text-[40px] lg:text-[44px] font-extrabold tracking-tight text-primary-text leading-[1.2] mb-4">
            What we service daily & excel
          </h2>
          <p className="text-body-text text-base md:text-lg max-w-xl mx-auto">
            Ducts, hoods, fans, grease traps, and more —certified cleaning and compliance for commercial kitchens.
          </p>
        </div>

        {/* Desktop Gallery: 5 expanding panels */}
        <div className="hidden lg:flex gap-4 h-[480px] w-full">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="flex-1 min-w-0 transition-all duration-500 ease-in-out hover:flex-[3] relative rounded-2xl overflow-hidden group cursor-pointer border border-border-stroke shadow-sm bg-white"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-text/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
                <h3 className="text-2xl font-bold mb-2 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{item.title}</h3>
                <p className="text-sm text-white opacity-80 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Gallery: Snapping cards with dots */}
        <div className="lg:hidden w-full">
          <div 
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none pb-6"
          >
            {galleryItems.map((item) => (
              <div 
                key={item.id} 
                className="snap-start shrink-0 w-[85%] sm:w-[60%] border border-border-stroke rounded-2xl overflow-hidden shadow-sm bg-white"
              >
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-primary-text mb-1">{item.title}</h3>
                  <p className="text-xs text-body-text">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile pagination dots */}
          <div className="flex justify-center gap-2 mt-4">
            {galleryItems.map((_, index) => (
              <span 
                key={index} 
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeDot === index ? "bg-primary-text w-4" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}