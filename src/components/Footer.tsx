import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#081321] py-12 px-6 border-t border-white/5 text-white/60 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <a href="/" className="hover:opacity-85 transition-opacity">
            <img 
              src="/media/images/logowhite.webp" 
              alt="Crossaire Logo" 
              width={240}
              height={46}
              className="h-9 w-auto object-contain" 
            />
          </a>
        </div>
        <p className="text-center md:text-left text-xs text-white/60">
          &copy; {new Date().getFullYear()} Crossaire. All rights reserved. Strictly conforming to NFPA Standard 96.
        </p>
        <div className="flex gap-5 items-center text-lg">
          <a href="https://www.facebook.com/people/CrossAire/61566989969821/#" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a href="https://x.com/realcrossaire" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="X (Twitter)">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.youtube.com/@realCrossAire" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="YouTube">
            <i className="fa-brands fa-youtube"></i>
          </a>
          <a href="https://www.tiktok.com/@realcrossaire" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors" aria-label="TikTok">
            <i className="fa-brands fa-tiktok"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}