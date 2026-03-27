import { useState, useEffect } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50 );
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[1000] py-6 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md !py-4 shadow-sm' : 'bg-transparent'}`}>
      <div className="container flex justify-between items-center px-6 mx-auto">
        <div className={`flex items-center gap-2 no-underline ${isScrolled ? 'text-primary' : 'text-white'}`}>
          <Building2 className="w-8 h-8 text-secondary" />
          <span className="text-xl font-bold tracking-tight">Dubey Constructions</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className={`font-medium no-underline transition-colors duration-200 text-[0.95rem] hover:!text-secondary ${isScrolled ? 'text-primary' : 'text-white'}`}>
              {link.name}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-white bg-secondary hover:bg-[#E0851A] hover:-translate-y-0.5 shadow-md shadow-secondary/20 transition-all border-none text-base">Get Consultation</a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className={`block md:hidden bg-transparent border-none cursor-pointer ${isScrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overview */}
      <div className={`absolute top-full left-0 w-full z-100  bg-white  text-white   p-6 flex-col gap-4 shadow-md transition-all duration-300 transform origin-top ${isMobileMenuOpen ? 'flex clip-path-menu-open' : 'flex clip-path-menu-closed'}`}>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="block py-2 text-dark font-medium border-b border-gray-200 last:border-b-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
        <a 
          href="#contact" 
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold text-white bg-secondary mt-2 shadow-md"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Get Consultation
        </a>
      </div>
    </nav>
  );
}
