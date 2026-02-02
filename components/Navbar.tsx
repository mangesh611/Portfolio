
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-beige/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold text-sapGreen tracking-tighter">
          M U<span className="text-sapGreen-light">.</span>
        </a>
        
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-sapGreen hover:text-sapGreen-light transition-colors duration-200 uppercase tracking-widest"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          {/* Mobile menu button could go here */}
          <div className="w-6 h-0.5 bg-sapGreen mb-1"></div>
          <div className="w-6 h-0.5 bg-sapGreen mb-1"></div>
          <div className="w-6 h-0.5 bg-sapGreen"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
