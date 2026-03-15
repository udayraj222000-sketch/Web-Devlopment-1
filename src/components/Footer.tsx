import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl tracking-widest uppercase text-gold">Lumière</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevating beauty through luxury experiences. Our expert stylists and premium products ensure you leave feeling confident and radiant.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-xl tracking-wider mb-6">Explore</h3>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-gold transition-colors text-sm uppercase tracking-wider">Our Story</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-gold transition-colors text-sm uppercase tracking-wider">Services</Link></li>
              <li><Link to="/bridal" className="text-gray-400 hover:text-gold transition-colors text-sm uppercase tracking-wider">Bridal Packages</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-gold transition-colors text-sm uppercase tracking-wider">Gallery</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-gold transition-colors text-sm uppercase tracking-wider">Testimonials</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-xl tracking-wider mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-gold shrink-0 mt-0.5" />
                <span>123 Luxury Avenue, Suite 400<br />Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={18} className="text-gold shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={18} className="text-gold shrink-0" />
                <span>hello@lumieresalon.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-xl tracking-wider mb-6">Hours</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Mon - Fri</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Saturday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-800 pb-2">
                <span>Sunday</span>
                <span>10:00 AM - 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 tracking-wider">
          <p>&copy; {new Date().getFullYear()} Lumière Luxury Salon & Spa. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="#" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
