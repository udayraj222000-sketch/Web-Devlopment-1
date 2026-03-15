import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Twitter } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Bridal', path: '/bridal' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  const navBg = isScrolled || !isHome ? 'bg-warm-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent';
  const textColor = isScrolled || !isHome ? 'text-charcoal' : 'text-ivory';
  const logoColor = isScrolled || !isHome ? 'text-charcoal' : 'text-ivory';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link to="/" className={`font-serif text-3xl tracking-widest uppercase ${logoColor} transition-colors duration-300`}>
            Lumière
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors duration-300 ${
                  location.pathname === link.path ? 'text-gold' : textColor
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`px-6 py-3 border text-sm font-medium tracking-widest uppercase transition-all duration-300 ${
                isScrolled || !isHome
                  ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-warm-white'
                  : 'border-ivory text-ivory hover:bg-ivory hover:text-charcoal'
              }`}
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${textColor}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-24 left-0 right-0 bg-warm-white shadow-lg border-t border-gray-100 md:hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg font-serif tracking-widest uppercase ${
                    location.pathname === link.path ? 'text-gold' : 'text-charcoal'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="text-lg font-serif tracking-widest uppercase text-charcoal"
              >
                Book Appointment
              </Link>
              <div className="flex space-x-6 pt-6 border-t border-gray-200">
                <a href="#" className="text-charcoal hover:text-gold transition-colors"><Instagram size={20} /></a>
                <a href="#" className="text-charcoal hover:text-gold transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-charcoal hover:text-gold transition-colors"><Twitter size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
