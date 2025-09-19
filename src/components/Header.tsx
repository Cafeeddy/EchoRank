import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-emerald-700">
              EchoRank
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-emerald-700 transition-colors">
              Services
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-emerald-700 transition-colors">
              Pricing
            </a>
            <a href="#case-studies" className="text-gray-700 hover:text-emerald-700 transition-colors">
              Case Studies
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-emerald-700 transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-700 transition-colors">
              Contact
            </a>
            <button className="bg-emerald-700 text-white px-6 py-2 rounded-md hover:bg-emerald-800 transition-colors">
              Get Started
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#services" className="text-gray-700 hover:text-emerald-700 transition-colors">
                Services
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-emerald-700 transition-colors">
                Pricing
              </a>
              <a href="#case-studies" className="text-gray-700 hover:text-emerald-700 transition-colors">
                Case Studies
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-emerald-700 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-700 hover:text-emerald-700 transition-colors">
                Contact
              </a>
              <button className="bg-emerald-700 text-white px-6 py-2 rounded-md hover:bg-emerald-800 transition-colors">
                Get Started
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
