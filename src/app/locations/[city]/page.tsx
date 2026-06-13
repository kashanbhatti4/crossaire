import React from "react";
import BookingForm from "@/components/BookingForm";

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params;
  const decodedCity = decodeURIComponent(city)
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="pt-32 pb-24 px-6 bg-white min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Local details */}
        <div className="lg:col-span-7">
          <span className="subtitle-badge">Certified Commercial Services</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary-text mb-6">
            Commercial Kitchen Exhaust & Hood Cleaning in <span className="text-accent">{decodedCity}</span>
          </h1>
          <p className="text-body-text text-lg leading-relaxed mb-8">
            Crossaire is the premier NFPA 96 certified partner for kitchen exhaust system cleaning in {decodedCity}. We provide expert cleaning down to bare metal for restaurant hoods, exhaust fans, ducts, and filters. Protect your facility and guarantee fire marshal compliance with our 24/7 commercial safety solutions.
          </p>
          
          <div className="flex flex-col gap-4 text-body-text font-medium">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 text-sm">✓</span>
              <span>NFPA 96 Compliance Certificate & Sticker Placed</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 text-sm">✓</span>
              <span>Complete Photo-Evidence Reports Provided</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 text-sm">✓</span>
              <span>Fully Licensed, Bonded, and $5M Liability Insured</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 text-sm">✓</span>
              <span>24/7 Overnight Service & Emergency Dispatch in MD, DC & VA</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-5 w-full">
          <div className="text-center mb-6 lg:hidden">
            <span className="text-sm font-bold text-accent">Book Service in {decodedCity}</span>
          </div>
          <BookingForm />
        </div>

      </div>
    </div>
  );
}
