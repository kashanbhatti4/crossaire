import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Crossaire | Certified Commercial Kitchen Hood & Exhaust Cleaning",
  description: "Crossaire is your premier certified partner for commercial kitchen exhaust cleaning and NFPA 96 compliance. Available 24/7 in Maryland, Washington DC, and Virginia.",
  keywords: "kitchen hood cleaning, exhaust fan cleaning, commercial kitchen safety, NFPA 96 compliance, grease trap pumping",
  robots: "index, follow",
  openGraph: {
    title: "Crossaire | Certified Commercial Kitchen Hood & Exhaust Cleaning",
    description: "Get certified kitchen hood cleaning and exhaust maintenance. NFPA 96 compliant, fully insured, and available 24/7 in Maryland, Washington DC, and Virginia.",
    type: "website",
  },
  icons: {
    icon: "/media/images/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        <link 
          rel="preload" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" 
          as="style" 
          crossOrigin="anonymous" 
        />
        <link 
          id="font-awesome-css"
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" 
          media="print" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var link = document.getElementById('font-awesome-css');
                if (link) {
                  link.addEventListener('load', function() { this.media = 'all'; });
                  if (link.sheet) link.media = 'all';
                }
              })();
            `
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} ${inter.variable} font-sans min-h-screen antialiased text-primary-text bg-main-bg flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
