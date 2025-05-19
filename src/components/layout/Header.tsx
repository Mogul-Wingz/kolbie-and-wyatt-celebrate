
import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Wedding Day', path: '/wedding-day' },
    { name: 'RSVP', path: '/rsvp' },
    { name: 'Vendors', path: '/vendors' },
    { name: 'Q+A', path: '/qa' },
    { name: 'Things To Do', path: '/things-to-do' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 md:py-6">
        {/* Desktop Header */}
        <div className="hidden md:flex flex-col items-center justify-center">
          <h1 className="font-playfair text-3xl mb-1">Kolbie + Wyatt</h1>
          <p className="text-sm font-josefin tracking-wider mb-6">September 13, 2025 • Hyde Park, UT</p>
          <p className="text-sm font-josefin mb-4 px-3 py-1 bg-wedding-sage/30 rounded-full">118 Days To Go!</p>
          
          <nav className="mt-4">
            <ul className="flex space-x-8 font-josefin text-sm tracking-wider">
              {links.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className={`relative pb-1 hover:text-wedding-sage transition-colors ${
                      location.pathname === link.path ? 'after:content-[""] after:block after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-wedding-sage' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile Header */}
        <div className="md:hidden flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="font-playfair text-xl">Kolbie + Wyatt</h1>
            <p className="text-xs font-josefin tracking-wider">September 13, 2025</p>
            <p className="text-xs font-josefin">118 Days To Go!</p>
          </div>
          
          <button 
            onClick={toggleMenu} 
            className="p-2 focus:outline-none"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 animate-fade-in">
            <nav>
              <ul className="flex flex-col space-y-4 font-josefin text-sm tracking-wider px-6">
                {links.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className={`block py-2 ${
                        location.pathname === link.path ? 'text-wedding-sage' : ''
                      }`}
                      onClick={closeMenu}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
