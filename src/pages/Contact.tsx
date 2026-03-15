import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        date: '',
        time: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-40 pb-20 bg-warm-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-gold text-sm tracking-[0.3em] uppercase mb-4"
          >
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif text-charcoal mb-6"
          >
            Book Your <span className="italic text-gold">Experience</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-taupe text-lg max-w-2xl mx-auto"
          >
            Reserve your time with our master stylists and therapists. We look forward to welcoming you to Lumière.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif text-charcoal mb-8">Salon Details</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal mb-2">Location</h3>
                    <p className="text-taupe leading-relaxed">
                      123 Luxury Avenue, Suite 400<br />
                      Beverly Hills, CA 90210
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <Phone className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal mb-2">Contact</h3>
                    <p className="text-taupe leading-relaxed">
                      +1 (555) 123-4567<br />
                      hello@lumieresalon.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm">
                    <Clock className="text-gold" size={24} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-charcoal mb-2">Hours</h3>
                    <ul className="text-taupe space-y-1">
                      <li>Monday - Friday: 9:00 AM - 8:00 PM</li>
                      <li>Saturday: 9:00 AM - 6:00 PM</li>
                      <li>Sunday: 10:00 AM - 4:00 PM</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Social & WhatsApp */}
              <div className="pt-8 border-t border-gray-200">
                <h3 className="font-serif text-xl text-charcoal mb-6">Connect With Us</h3>
                <div className="flex space-x-4 mb-8">
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-charcoal hover:text-gold hover:shadow-md transition-all">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-charcoal hover:text-gold hover:shadow-md transition-all">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-charcoal hover:text-gold hover:shadow-md transition-all">
                    <Twitter size={20} />
                  </a>
                </div>
                
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-[#25D366] text-white font-medium tracking-widest uppercase text-sm hover:bg-[#128C7E] transition-colors rounded-sm shadow-sm">
                  <MessageCircle className="mr-2" size={20} />
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            {/* Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 md:p-12 shadow-sm"
            >
              <h2 className="text-3xl font-serif text-charcoal mb-8">Request Appointment</h2>
              
              {submitStatus === 'success' ? (
                <div className="bg-green-50 border border-green-200 text-green-800 p-6 text-center">
                  <h3 className="font-serif text-2xl mb-2">Thank You!</h3>
                  <p>Your appointment request has been received. Our concierge will contact you shortly to confirm.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs uppercase tracking-widest text-charcoal mb-2">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-xs uppercase tracking-widest text-charcoal mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs uppercase tracking-widest text-charcoal mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs uppercase tracking-widest text-charcoal mb-2">Service Interested In *</label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent text-charcoal"
                    >
                      <option value="">Select a service...</option>
                      <option value="hair">Hair Styling & Color</option>
                      <option value="skin">Skincare & Facials</option>
                      <option value="makeup">Makeup Application</option>
                      <option value="bridal">Bridal Package</option>
                      <option value="nails">Nails & Spa</option>
                      <option value="other">Other / Consultation</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="date" className="block text-xs uppercase tracking-widest text-charcoal mb-2">Preferred Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="time" className="block text-xs uppercase tracking-widest text-charcoal mb-2">Preferred Time</label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent text-charcoal"
                      >
                        <option value="">Select time...</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 4PM)</option>
                        <option value="evening">Evening (4PM - 8PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs uppercase tracking-widest text-charcoal mb-2">Additional Notes</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gold transition-colors bg-transparent resize-none"
                      placeholder="Tell us about your specific needs..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-charcoal text-warm-white font-medium tracking-widest uppercase text-sm hover:bg-gold hover:text-charcoal transition-colors duration-300 disabled:opacity-70 disabled:cursor-not-allowed mt-8"
                  >
                    {isSubmitting ? 'Submitting...' : 'Request Appointment'}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    * This is a request. Our team will contact you to confirm the exact time and date.
                  </p>
                </form>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <MapPin size={48} className="mx-auto mb-4 opacity-50" />
            <p className="font-serif text-xl">Interactive Map Integration</p>
            <p className="text-sm">Google Maps embed goes here</p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
