"use client";

import React, { useState, useEffect, useRef } from "react";
import CoverageMap from "@/components/CoverageMap";
import ScrollReveal from "@/components/ScrollReveal";

interface GalleryItem {
  id: number;
  image: string;
  category: string;
}

const servicesList = [
  "All",
  "Kitchen Hood Cleaning",
  "Restaurant Kitchen Exhaust System Cleaning",
  "Kitchen Exhaust Fan Repairs",
  "Kitchen Exhaust Fan Installation",
  "Grease Trap Cleaning",
  "Pollution Control Systems Maintenance",
  "Kitchen Hood Startups and Commissioning",
  "Roof Grease Containment Systems Installations",
  "Restaurant Hood Filter Cleaning & Exchange",
  "Kitchen Exhaust Duct Repair & Access Panel Installation",
  "Kitchen Hood Inspections"
];

const galleryItems: GalleryItem[] = [
  // 1. Kitchen Hood Cleaning
  { id: 1, image: "/media/images/kitchen-hood.png", category: "Kitchen Hood Cleaning" },
  { id: 2, image: "/media/images/why-people-trust.png", category: "Kitchen Hood Cleaning" },
  // 2. Restaurant Kitchen Exhaust System Cleaning
  { id: 3, image: "/media/images/duct-system.png", category: "Restaurant Kitchen Exhaust System Cleaning" },
  { id: 4, image: "/media/images/onboarding3.png", category: "Restaurant Kitchen Exhaust System Cleaning" },
  // 3. Kitchen Exhaust Fan Repairs
  { id: 5, image: "/media/images/exhaust-fan.png", category: "Kitchen Exhaust Fan Repairs" },
  { id: 6, image: "/media/images/onboarding2.png", category: "Kitchen Exhaust Fan Repairs" },
  // 4. Kitchen Exhaust Fan Installation
  { id: 7, image: "/media/images/exhaust-fan.png", category: "Kitchen Exhaust Fan Installation" },
  // 5. Grease Trap Cleaning
  { id: 8, image: "/media/images/onboarding3.png", category: "Grease Trap Cleaning" },
  // 6. Pollution Control Systems Maintenance
  { id: 9, image: "/media/images/precision-care.png", category: "Pollution Control Systems Maintenance" },
  // 7. Kitchen Hood Startups and Commissioning
  { id: 10, image: "/media/images/onboarding1.png", category: "Kitchen Hood Startups and Commissioning" },
  // 8. Roof Grease Containment Systems Installations
  { id: 11, image: "/media/images/onboarding2.png", category: "Roof Grease Containment Systems Installations" },
  // 9. Restaurant Hood Filter Cleaning & Exchange
  { id: 12, image: "/media/images/kitchen-hood.png", category: "Restaurant Hood Filter Cleaning & Exchange" },
  { id: 13, image: "/media/images/onboarding1.png", category: "Restaurant Hood Filter Cleaning & Exchange" },
  // 10. Kitchen Exhaust Duct Repair & Access Panel Installation
  { id: 14, image: "/media/images/onboardin4.png", category: "Kitchen Exhaust Duct Repair & Access Panel Installation" },
  // 11. Kitchen Hood Inspections
  { id: 15, image: "/media/images/compliance.png", category: "Kitchen Hood Inspections" },
  { id: 16, image: "/media/images/onboarding5.png", category: "Kitchen Hood Inspections" },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Before/After comparison slider states
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(800);
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDragging = useRef(false);

  // Measure container width for responsive Before/After image clipping
  useEffect(() => {
    if (!containerRef.current) return;
    setContainerWidth(containerRef.current.getBoundingClientRect().width);
    
    const handleResize = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.getBoundingClientRect().width);
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Global pointer listeners for dragging slider handle
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!isDragging.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(position);
    };

    const handlePointerUp = () => {
      isDragging.current = false;
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      setSliderPosition(Math.max(0, Math.min(100, (x / rect.width) * 100)));
    }
  };

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setActiveImageIndex(index);
    setLightboxOpen(true);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO & SLIDER SECTION */}
      <section className="relative text-white pt-32 pb-24 px-6 overflow-hidden bg-[#0C1A2B]">
        {/* Subtle accent glow in background */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/10 blur-[120px]"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-[120px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center">
          {/* Heading */}
          <span className="text-sm uppercase tracking-wider font-extrabold text-accent block mb-3">
            Work Showcase
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
            Our Work In Action
          </h1>

          {/* Hero Right: Draggable Before/After Comparison Slider */}
          <div className="w-full mb-10">
            <div 
              ref={containerRef}
              onPointerDown={handlePointerDown}
              className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 select-none cursor-ew-resize mx-auto"
            >
              {/* After Image (Background) */}
              <img 
                src="/media/images/precision-care.png" 
                alt="Clean commercial kitchen hood after steam cleaning service" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
              />
              
              {/* Before Image (Clipping Foreground) */}
              <div 
                className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none" 
                style={{ width: `${sliderPosition}%` }}
              >
                <div 
                  className="absolute inset-y-0 left-0 h-full pointer-events-none" 
                  style={{ width: `${containerWidth}px` }}
                >
                  <img 
                    src="/media/images/kitchen-hood.png" 
                    alt="Greasy dirty commercial kitchen hood before cleaning" 
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none" 
                  />
                </div>
              </div>

              {/* Draggable Divider Bar */}
              <div 
                className="absolute inset-y-0 w-1 bg-white shadow-xl cursor-ew-resize z-20 flex items-center justify-center"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="w-10 h-10 rounded-full bg-white text-accent border border-border-stroke shadow-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
                  <i className="fa-solid fa-arrows-left-right text-xs"></i>
                </div>
              </div>

              {/* Labels */}
              <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold rounded-lg uppercase tracking-wide select-none pointer-events-none z-10">
                Before
              </div>
              <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold rounded-lg uppercase tracking-wide select-none pointer-events-none z-10">
                After
              </div>
            </div>
          </div>

          {/* Hero Left: Title & Description */}
          <div className="max-w-2xl mx-auto">
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
              Explore photos of our certified kitchen hood cleaning, exhaust fan servicing, and ductwork degreasing across Maryland, DC, and Virginia. Drag the center slider handle to compare before & after transformations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a href="/#booking-form-section" className="btn-primary w-full sm:w-auto px-8 py-3.5 font-bold text-center">
                Book An Inspection
              </a>
              <a href="tel:8663992885" className="w-full sm:w-auto border border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-lg transition-all text-center flex items-center justify-center gap-2">
                <i className="fa-solid fa-phone text-sm"></i>
                <span>Call 866-399-2885</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE CATEGORY TABS & FILTERING GRID */}
      <section className="py-24 px-6 bg-white border-b border-border-stroke animate-on-scroll">
        <div className="max-w-7xl mx-auto">
          
          {/* Scrollable Category Filter tabs row */}
          <div className="flex overflow-x-auto whitespace-nowrap lg:whitespace-normal lg:flex-wrap scrollbar-none gap-3 mb-16 px-4 justify-start lg:justify-center">
            {servicesList.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold border transition-all cursor-pointer select-none whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-accent border-accent text-white shadow-md shadow-accent/15"
                    : "bg-white border-border-stroke text-body-text hover:border-accent hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Filtering Image Grid (Images Only, No Text) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div 
                key={item.id}
                onClick={() => openLightbox(index)}
                className="group relative rounded-2xl overflow-hidden border border-border-stroke bg-white shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer aspect-[4/3]"
              >
                <img 
                  src={item.image} 
                  alt={item.category} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                {/* Hover Overlay Zoom icon */}
                <div className="absolute inset-0 bg-primary-text/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-accent flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <i className="fa-solid fa-magnifying-glass-plus text-lg"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. LIGHTBOX MODAL */}
      {lightboxOpen && filteredItems[activeImageIndex] && (
        <div 
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
        >
          {/* Close button */}
          <button 
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-6 right-6 text-white/70 hover:text-white text-2xl p-2 focus:outline-none transition-colors"
            aria-label="Close Lightbox"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>

          {/* Left Arrow */}
          <button 
            type="button"
            onClick={handlePrevImage}
            className="absolute left-6 text-white/75 hover:text-white text-3xl p-4 focus:outline-none transition-colors select-none"
            aria-label="Previous Image"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          {/* Lightbox Content Container */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full flex flex-col items-center gap-4"
          >
            <img 
              src={filteredItems[activeImageIndex].image} 
              alt={filteredItems[activeImageIndex].category} 
              className="max-h-[75vh] md:max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl border border-white/5" 
            />
            <div className="text-center text-white max-w-2xl px-4 mt-2">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-accent mb-1.5 block">
                {filteredItems[activeImageIndex].category}
              </span>
              <div className="text-xs text-white/40 mt-3 font-semibold select-none">
                {activeImageIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>

          {/* Right Arrow */}
          <button 
            type="button"
            onClick={handleNextImage}
            className="absolute right-6 text-white/75 hover:text-white text-3xl p-4 focus:outline-none transition-colors select-none"
            aria-label="Next Image"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      )}

      {/* 4. COVERAGE AREA */}
      <CoverageMap />

      {/* 5. CALL TO ACTION (CTA) */}
      <section className="py-24 px-6 bg-[#0C1A2B] text-white relative overflow-hidden">
        {/* Accent Glow background blur */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-accent/20 blur-[120px]"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-xs uppercase tracking-widest font-extrabold text-accent block mb-4">Start Clean. Stay Compliant.</span>
          
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Ready to Restore Your Kitchen Ventilation Safety?
          </h2>
          
          <p className="text-white/75 text-base md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Connect with Crossaire for professional inspections, grease removal, and official certification stickers. Available 24/7/365.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/#booking-form-section" className="btn-primary w-full sm:w-auto px-8 py-4 font-bold text-center">
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
