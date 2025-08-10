import React from "react";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="relative bg-[#09090b] py-6 md:py-8 lg:py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Copyright centrado */}
        <div className="text-center">
          <p className="text-sm md:text-base text-gray-400 font-medium">
            Copyright © 
            <span className="mx-1 text-white font-semibold">{currentYear}</span>
            by 
            <a
              href="https://github.com/JADER124"
              className="ml-1 text-blue-400 hover:text-blue-300 underline underline-offset-2 hover:underline-offset-4 transition-all duration-300 font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Jader Lopez
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;