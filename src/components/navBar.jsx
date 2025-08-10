import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

function NavBar() {
  const [scroll, setScroll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll 
          ? "backdrop-blur-md bg-black/60 shadow-lg" 
          : "bg-gradient-to-b from-[#09090b] to-[#09090b]/80"
      }`}
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-xl sm:text-2xl text-white">Use</span>
          <span className="font-bold text-xl sm:text-2xl">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">{'{'}J</span>
            <span className="relative -bottom-1 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">J</span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">{`}`}</span>
          </span>
          <span className="font-bold text-xl sm:text-2xl text-white">Dev</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6 xl:gap-8 font-bold text-white/90">
          {navItems.map((item) => (
            <li key={item.label}>
              <a 
                href={item.href} 
                className="hover:text-blue-400 transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 text-white hover:text-blue-400 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? "max-h-96 opacity-100" 
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/90 backdrop-blur-md border-t border-gray-800">
          <ul className="py-4 px-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block py-3 px-4 text-white/90 hover:text-blue-400 hover:bg-gray-800/50 rounded-lg transition-all duration-300 font-medium"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Overlay para cerrar el menú en mobile */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}
    </nav>
  );
}

export default NavBar;