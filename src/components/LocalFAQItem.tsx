"use client";

import React, { useState, useRef, useEffect } from "react";

interface FAQItemProps {
  question: string;
  children: React.ReactNode;
}

export default function LocalFAQItem({ question, children }: FAQItemProps) {
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
