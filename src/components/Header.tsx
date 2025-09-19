import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex items-center">
            {/* Logo */}
            <div className="text-emerald-700 font-bold text-2xl mr-2">
              EchoRank
            </div>
            <span className="hidden md:block text-xs text-gold-600 italic">
              Your Brand Echoing In AI Answers
            </span>
          </div>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#case-studies">Case Studies</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <div className="relative group">
            <button className="flex items-center text-gray-800 hover:text-emerald-700 font-medium">
              Resources
              <ChevronDownIcon className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10 invisible group-hover:visible transition-all opacity-0 group-hover:opacity-100">
              <a href="#blog" className="block px-4 py-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-700">
                Blog
              </a>
              <a href="#guides" className="block px-4 py-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-700">
                Guides
              </a>
              <a href="#webinars" className="block px-4 py-2 text-gray-800 hover:bg-emerald-50 hover:text-emerald-700">
                Webinars
              </a>
            </div>
          </div>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="hidden md:flex items-center">
          <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-2 rounded-md font-medium transition-colors">
            Start Your SEO Journey
          </button>
        </div>
        {/* Mobile menu button */}
        <button className="md:hidden flex items-center" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <XIcon className="h-6 w-6 text-gray-800" /> : <MenuIcon className="h-6 w-6 text-gray-800" />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink href="#features" onClick={() => setIsMenuOpen(false)}>
              Features
            </MobileNavLink>
            <MobileNavLink href="#case-studies" onClick={() => setIsMenuOpen(false)}>
              Case Studies
            </MobileNavLink>
            <MobileNavLink href="#pricing" onClick={() => setIsMenuOpen(false)}>
              Pricing
            </MobileNavLink>
            <MobileNavLink href="#blog" onClick={() => setIsMenuOpen(false)}>
              Blog
            </MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </MobileNavLink>
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-md font-medium transition-colors w-full">
              Start Your SEO Journey
            </button>
          </nav>
        </div>}
    </header>;
}
function NavLink({
  href,
  children
}) {
  return <a href={href} className="text-gray-800 hover:text-emerald-700 font-medium transition-colors">
      {children}
    </a>;
}
function MobileNavLink({
  href,
  onClick,
  children
}) {
  return <a href={href} className="text-gray-800 hover:text-emerald-700 font-medium text-lg transition-colors" onClick={onClick}>
      {children}
    </a>;
}