
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-wedding-cream/80 py-8 border-t border-wedding-blush/20">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="h-12 w-12 rounded-full border border-wedding-blush/50 flex items-center justify-center mb-3">
          <p className="font-playfair text-lg">K&W</p>
        </div>
        <p className="font-josefin tracking-widest">9.13.2025</p>
        
        <div className="mt-8 text-xs text-wedding-dark/60">
          <p>Created with love for Kolbie and Wyatt's special day</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
