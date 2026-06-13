"use client";

import React, { useState, useRef, useEffect } from "react";

interface BookingFormProps {
  initialService?: string;
}

export default function BookingForm({ initialService = "" }: BookingFormProps) {
  const [tab, setTab] = useState<"commercial" | "emergency">("commercial");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceType, setServiceType] = useState(initialService);
  const [message, setMessage] = useState("");
  
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceType) {
      setErrors(["Please select a service category."]);
      return;
    }
    setErrors([]);
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          source: tab === "emergency" ? "EMERGENCY_FORM" : "COMMERCIAL_FORM",
          fullname,
          email,
          phone,
          "service-type": serviceType,
          message,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsSubmitted(true);
      } else {
        setErrors(data.errors || ["Failed to submit request. Please try again."]);
      }
    } catch (err) {
      setErrors(["Network error. Please try again."]);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="form-card-wrapper p-8 text-center animate-fade-in">
        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
          <svg className="w-8 h-8 animate-scale-up" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-primary-text mb-3">Request Received</h3>
        <p className="text-body-text text-base leading-relaxed mb-6">
          Thank you, <span className="font-semibold text-primary-text">{fullname}</span>. We have received your booking inquiry and our operations team will call you shortly.
        </p>
        {tab === "emergency" && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-left mb-6 text-red-900">
            <span className="font-bold block mb-1">🚨 Emergency Dispatch Active</span>
            <span className="text-sm">For immediate support, please call our hotline directly at <a href="tel:8663992885" className="underline font-bold text-red-700">866-399-2885</a>.</span>
          </div>
        )}
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setFullname("");
            setEmail("");
            setPhone("");
            setServiceType("");
            setMessage("");
          }}
          className="btn-primary w-full h-12"
        >
          Book Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="form-card-wrapper">
      {/* Tab Buttons */}
      <div className="tabs-container">
        <button 
          type="button" 
          className={`tab-btn ${tab === "commercial" ? "active" : ""}`}
          onClick={() => setTab("commercial")}
        >
          Commercial
        </button>
        <button 
          type="button" 
          className={`tab-btn ${tab === "emergency" ? "active" : ""}`}
          onClick={() => setTab("emergency")}
        >
          Emergency
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="p-6 lg:p-8 flex flex-col gap-5">
        
        {/* Errors Block */}
        {errors.length > 0 && (
          <div className="bg-red-50 border border-red-200 text-red-900 rounded-lg p-4 text-sm">
            <ul className="list-disc list-inside">
              {errors.map((err, i) => <li key={i}>{err}</li>)}
            </ul>
          </div>
        )}

        {/* Warning Alert (Shown on Emergency tab) */}
        {tab === "emergency" && (
          <div className="bg-red-50 border border-red-200 text-red-900 rounded-lg p-4 text-sm flex gap-3">
            <div className="text-lg">📢</div>
            <div>
              <span className="font-bold block">Immediate Dispatch Request</span>
              Calls take priority. For dispatch under 90 mins, dial <a href="tel:8663992885" className="underline font-bold text-red-700">866-399-2885</a>.
            </div>
          </div>
        )}

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-body-text mb-2" htmlFor="fullname">Full Name *</label>
          <input 
            type="text" 
            id="fullname" 
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
            placeholder="e.g. John Doe" 
            autoComplete="name" 
            required 
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-body-text mb-2" htmlFor="email">Email Address *</label>
            <input 
              type="email" 
              id="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="john@example.com" 
              autoComplete="email" 
              required 
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-body-text mb-2" htmlFor="phone">Phone Number *</label>
            <input 
              type="tel" 
              id="phone" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 000-0000" 
              autoComplete="tel" 
              required 
            />
          </div>
        </div>

        {/* Custom Select Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <label className="block text-xs font-bold uppercase tracking-wider text-body-text mb-2">Service Needed *</label>
          <div className="custom-dropdown">
            <button 
              type="button" 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="custom-dropdown-trigger"
            >
              <span>{serviceType || "Select Service Category"}</span>
              <svg className={`w-3.5 h-3.5 fill-[#0C1A2B] transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
              </svg>
            </button>
            
            {dropdownOpen && (
              <div className="custom-dropdown-options">
                {[
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
                ].map((item) => (
                  <div 
                    key={item}
                    onClick={() => {
                      setServiceType(item);
                      setDropdownOpen(false);
                    }}
                    className="custom-dropdown-option"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-body-text mb-2" htmlFor="message">Details & Scope</label>
          <textarea 
            id="message" 
            rows={3} 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us about your kitchen setup or emergency issue..."
          />
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`btn-primary w-full h-[52px] font-bold text-base mt-2 flex items-center justify-center gap-2 ${
            tab === "emergency" 
              ? "bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700" 
              : "bg-accent border-accent hover:bg-accent-hover hover:border-accent-hover"
          }`}
        >
          {isSubmitting ? "Processing..." : tab === "emergency" ? "Request Immediate Dispatch" : "Request Professional Quote"}
        </button>
      </form>
    </div>
  );
}