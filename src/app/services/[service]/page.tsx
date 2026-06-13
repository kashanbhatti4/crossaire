import React from "react";
import BookingForm from "@/components/BookingForm";

interface PageProps {
  params: Promise<{
    service: string;
  }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { service } = await params;
  const decodedService = decodeURIComponent(service)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Service details */}
        <div className="lg:col-span-7">
          <span className="subtitle-badge">Certified Commercial Services</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary-text mb-6">
            Commercial <span className="text-accent">{decodedService}</span>
          </h1>
          <p className="text-body-text text-lg leading-relaxed mb-8">
            Crossaire is a leading provider of expert commercial kitchen solutions, specializing in {decodedService}. Our highly trained and certified technicians are fully equipped to deliver deep cleaning, compliance audits, and system repairs that guarantee operations compliance and optimal kitchen safety.
          </p>
          
          <div className="flex flex-col gap-4 text-body-text font-medium">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 text-sm">✓</span>
              <span>NFPA 96 & Local Code Compliant Service Standards</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 text-sm">✓</span>
              <span>Professional Technicians Certified in Modern Safety Protocols</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 text-sm">✓</span>
              <span>Full compliance stickers, before/after photo documentation</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 text-sm">✓</span>
              <span>Available 24/7/365 across Maryland, Washington DC & Virginia</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-5 w-full">
          <div className="text-center mb-6 lg:hidden">
            <span className="text-sm font-bold text-accent">Request Quote for {decodedService}</span>
          </div>
          <BookingForm />
        </div>

      </div>
    </div>
  );
}
