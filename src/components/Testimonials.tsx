"use client";

import React, { useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Michael Anderson",
    role: "Restaurant Owner",
    location: "Washington, DC",
    date: "May 24, 2025",
    text: '"Price matched the estimate—no surprises. Friendly tech explained every step before starting."',
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 2,
    name: "David Richardson",
    role: "Hotel Manager",
    location: "Baltimore, MD",
    date: "May 24, 2025",
    text: '"Price matched the estimate—no surprises. Friendly tech explained every step before starting."',
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 3,
    name: "Robert Williams",
    role: "Shop Owner",
    location: "Alexandria, VA",
    date: "May 24, 2025",
    text: '"Price matched the estimate—no surprises. Friendly tech explained every step before starting."',
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 4,
    name: "Marcus Vance",
    role: "Head Chef",
    location: "Silver Spring, MD",
    date: "April 18, 2025",
    text: '"Crossaire has handled our exhaust cleaning for three seasons. The before/after photos are outstanding."',
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 5,
    name: "Elena Rostova",
    role: "Bistro Manager",
    location: "Fairfax, VA",
    date: "May 10, 2025",
    text: '"An emergency fan belt seizure at 11 PM was fixed by midnight. Exceptional rapid response!"',
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: 6,
    name: "David Chen",
    role: "Director of F&B",
    location: "Richmond, VA",
    date: "June 5, 2025",
    text: '"Reliable, code-compliant, and extremely clean. They leave the stainless steel cooking line spotless."',
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const slide = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.firstElementChild;
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = 32; // gap-8 is 32px
    const scrollAmount = cardWidth + gap;

    if (direction === "left") {
      track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="py-24 px-6 bg-white border-b border-border-stroke animate-on-scroll">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="text-left">
            <span className="text-sm uppercase tracking-widest font-extrabold text-accent block mb-3 lg:hidden">
              (TESTIMONIALS)
            </span>
            <h2 className="text-4xl md:text-[56px] font-extrabold tracking-tight leading-tight text-primary-text">
              What our neighbours <br className="hidden sm:inline" />
              say about us
            </h2>
          </div>
          <div className="shrink-0 hidden lg:block">
            <span className="text-sm uppercase tracking-widest font-extrabold text-accent block text-right">
              (TESTIMONIALS)
            </span>
          </div>
        </div>

        {/* Testimonials Slider Wrapper */}
        <div className="relative w-full">
          {/* Testimonials Grid/Track */}
          <div 
            ref={trackRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-none pb-4"
          >
            {testimonials.map((t) => (
              <div 
                key={t.id}
                className="snap-start shrink-0 w-[88%] md:w-[48%] lg:w-[31.5%] bg-[#F4F6F8] p-8 rounded-3xl flex flex-col justify-between min-h-[320px] border border-border-stroke/20"
              >
                <div>
                  <span className="block text-xs font-semibold text-body-text/60 tracking-wider mb-6">
                    {t.location}, {t.date}
                  </span>
                  <p className="text-lg md:text-xl font-bold text-primary-text leading-snug mb-8">
                    {t.text}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    width={44}
                    height={44}
                    className="w-11 h-11 rounded-full object-cover border border-border-stroke/45" 
                  />
                  <div>
                    <span className="block font-bold text-primary-text text-sm leading-tight">{t.name}</span>
                    <span className="block text-xs text-body-text font-medium mt-0.5">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-10">
            <button 
              onClick={() => slide("left")} 
              className="w-10 h-10 rounded-full bg-white border border-border-stroke flex items-center justify-center text-primary-text hover:bg-gray-100 transition-colors shadow-sm focus:outline-none" 
              aria-label="Previous testimonials"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
              </svg>
            </button>
            <button 
              onClick={() => slide("right")} 
              className="w-10 h-10 rounded-full bg-white border border-border-stroke flex items-center justify-center text-primary-text hover:bg-gray-100 transition-colors shadow-sm focus:outline-none" 
              aria-label="Next testimonials"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
