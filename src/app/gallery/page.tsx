import React from "react";
import GalleryClient from "./GalleryClient";

export const metadata = {
  title: "Commercial Kitchen Hood Cleaning Gallery | Crossaire",
  description: "Explore before-and-after steam cleaning photos of commercial kitchen exhaust hoods, rooftop fans, and grease ducts serviced by Crossaire across MD, DC, and VA.",
  keywords: "kitchen hood cleaning gallery, before and after hood cleaning, exhaust fan cleaning photos, kitchen degreasing showcase",
};

export default function GalleryPage() {
  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Crossaire Commercial Kitchen Cleaning Gallery",
            "description": "Before-and-after steam cleaning transformations of commercial kitchen exhaust systems, canopies, ducts, and fans.",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Crossaire",
              "telephone": "866-399-2885",
              "image": "https://crossaire.vercel.app/media/images/logo.png"
            }
          })
        }}
      />
      <GalleryClient />
    </>
  );
}
