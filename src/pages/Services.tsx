import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Link } from 'react-router-dom';

const serviceCategories = [
  {
    id: 'hair',
    title: 'Hair Services',
    description: 'Transformative cuts, vibrant colors, and restorative treatments.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80',
    services: [
      { name: 'Haircut', price: 'From $80', desc: 'Precision cutting tailored to your face shape and lifestyle.' },
      { name: 'Hair Styling', price: 'From $65', desc: 'Elegant styling for any occasion, from sleek to voluminous.' },
      { name: 'Blow Dry', price: 'From $50', desc: 'A flawless blowout for a polished, long-lasting look.' },
      { name: 'Hair Spa', price: 'From $120', desc: 'Deep conditioning treatment to restore moisture and shine.' },
      { name: 'Hair Coloring', price: 'From $150', desc: 'Custom color formulation for vibrant, lasting results.' },
      { name: 'Highlights', price: 'From $180', desc: 'Strategic lightening to add dimension and movement.' },
      { name: 'Balayage', price: 'From $250', desc: 'Hand-painted highlights for a natural, sun-kissed effect.' },
      { name: 'Keratin Treatment', price: 'From $300', desc: 'Smoothing treatment to eliminate frizz and add shine.' },
      { name: 'Smoothening', price: 'From $280', desc: 'Long-lasting straight and smooth hair transformation.' },
      { name: 'Rebonding', price: 'From $350', desc: 'Permanent straightening for sleek, manageable hair.' },
      { name: 'Hair Botox', price: 'From $200', desc: 'Anti-aging treatment to repair damaged hair fibers.' },
      { name: 'Scalp Treatment', price: 'From $90', desc: 'Purifying treatment to promote a healthy scalp environment.' }
    ]
  },
  {
    id: 'makeup',
    title: 'Makeup Services',
    description: 'Flawless artistry for every occasion, from natural to glamorous.',
    image: 'https://i.pinimg.com/1200x/54/12/40/5412401f3802e65205a5c775bcaf7b50.jpg',
    services: [
      { name: 'Bridal Makeup', price: 'From $350', desc: 'Comprehensive bridal look including trial and day-of application.' },
      { name: 'HD Makeup', price: 'From $200', desc: 'High-definition makeup for flawless photography.' },
      { name: 'Party Makeup', price: 'From $150', desc: 'Glamorous looks tailored for evening events.' },
      { name: 'Engagement Makeup', price: 'From $250', desc: 'Radiant makeup designed for your special celebration.' },
      { name: 'Reception Makeup', price: 'From $250', desc: 'Elegant styling for post-wedding festivities.' },
      { name: 'Airbrush Makeup', price: 'From $280', desc: 'Lightweight, long-lasting coverage for a perfect finish.' },
      { name: 'Eye Makeup', price: 'From $80', desc: 'Focus on dramatic or subtle eye enhancement.' }
    ]
  },
  {
    id: 'skin',
    title: 'Skin Services',
    description: 'Advanced treatments for a radiant, youthful complexion.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
    services: [
      { name: 'Facial Treatments', price: 'From $120', desc: 'Customized facials addressing your specific skin concerns.' },
      { name: 'Cleanup', price: 'From $80', desc: 'Deep cleansing to remove impurities and refresh the skin.' },
      { name: 'Detan', price: 'From $90', desc: 'Treatment to reduce sun damage and even skin tone.' },
      { name: 'Anti-Aging Treatment', price: 'From $180', desc: 'Targeted therapies to reduce fine lines and improve elasticity.' },
      { name: 'Brightening Facial', price: 'From $150', desc: 'Illuminating treatment for a luminous, glowing complexion.' },
      { name: 'Acne Care Treatment', price: 'From $130', desc: 'Clarifying facial to soothe inflammation and clear breakouts.' },
      { name: 'Skin Polishing', price: 'From $160', desc: 'Microdermabrasion for smooth, refined skin texture.' }
    ]
  },
  {
    id: 'nails',
    title: 'Hand & Foot Care',
    description: 'Luxurious manicures and pedicures for ultimate relaxation.',
    image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=1200&q=80',
    services: [
      { name: 'Manicure', price: 'From $40', desc: 'Classic nail shaping, cuticle care, and polish.' },
      { name: 'Pedicure', price: 'From $55', desc: 'Relaxing foot soak, exfoliation, and nail care.' },
      { name: 'Spa Manicure', price: 'From $65', desc: 'Elevated manicure with exfoliating scrub and massage.' },
      { name: 'Spa Pedicure', price: 'From $85', desc: 'Luxurious pedicure including mask and extended massage.' },
      { name: 'Nail Art', price: 'From $20', desc: 'Custom designs to express your personal style.' },
      { name: 'Gel Nails', price: 'From $60', desc: 'Long-lasting, chip-resistant gel polish application.' },
      { name: 'Nail Extensions', price: 'From $90', desc: 'Acrylic or gel extensions for added length and strength.' }
    ]
  },
  {
    id: 'essentials',
    title: 'Beauty Essentials',
    description: 'The finishing touches for a polished, refined look.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=1200&q=80',
    services: [
      { name: 'Waxing', price: 'From $30', desc: 'Gentle hair removal for smooth, silky skin.' },
      { name: 'Rica Wax', price: 'From $45', desc: 'Premium Italian wax for sensitive skin types.' },
      { name: 'Threading', price: 'From $15', desc: 'Precise hair removal for facial areas.' },
      { name: 'Eyebrow Shaping', price: 'From $25', desc: 'Expert shaping to frame and enhance your features.' },
      { name: 'Upper Lip', price: 'From $15', desc: 'Quick and gentle hair removal.' },
      { name: 'Eyelash Extensions', price: 'From $120', desc: 'Semi-permanent lashes for added volume and length.' },
      { name: 'Head Massage', price: 'From $40', desc: 'Relaxing massage to relieve tension and promote circulation.' }
    ]
  }
];

export default function Services() {
  const [activeSection, setActiveSection] = useState(serviceCategories[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const sections = serviceCategories.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 200; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(serviceCategories[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Header height + padding
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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
            Menu of Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif text-charcoal mb-6"
          >
            Curated <span className="italic text-gold">Treatments</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-taupe text-lg max-w-2xl mx-auto"
          >
            Explore our comprehensive range of luxury beauty services, designed to enhance your natural elegance and provide a restorative experience.
          </motion.p>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-12 bg-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4 hidden lg:block">
              <div className="sticky top-32">
                <h3 className="font-serif text-2xl text-charcoal mb-6">Categories</h3>
                <ul className="space-y-4 border-l border-gray-200 pl-4">
                  {serviceCategories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => scrollToSection(category.id)}
                        className={`text-left w-full text-sm uppercase tracking-widest transition-colors duration-300 ${
                          activeSection === category.id
                            ? 'text-gold font-medium'
                            : 'text-taupe hover:text-charcoal'
                        }`}
                      >
                        {category.title}
                      </button>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-12 p-6 bg-charcoal text-warm-white text-center">
                  <h4 className="font-serif text-xl mb-4 text-gold">Ready to Book?</h4>
                  <p className="text-sm text-gray-400 mb-6">Secure your appointment with our expert stylists today.</p>
                  <Link
                    to="/contact"
                    className="inline-block w-full py-3 border border-gold text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-charcoal transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Navigation (Dropdown-like or horizontal scroll) */}
            <div className="lg:hidden overflow-x-auto pb-4 mb-8 border-b border-gray-200 hide-scrollbar">
              <div className="flex space-x-8 w-max px-2">
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => scrollToSection(category.id)}
                    className={`text-sm uppercase tracking-widest whitespace-nowrap pb-2 border-b-2 transition-colors duration-300 ${
                      activeSection === category.id
                        ? 'text-gold border-gold'
                        : 'text-taupe border-transparent hover:text-charcoal'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Services List */}
            <div className="lg:w-3/4 space-y-24">
              {serviceCategories.map((category) => (
                <div key={category.id} id={category.id} className="scroll-mt-32">
                  <div className="relative h-64 md:h-80 mb-10 overflow-hidden rounded-sm">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center">
                      <h2 className="text-4xl md:text-5xl font-serif text-ivory">{category.title}</h2>
                    </div>
                  </div>
                  
                  <p className="text-taupe text-lg mb-10 max-w-3xl">{category.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {category.services.map((service, index) => (
                      <motion.div
                        key={service.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
                        className="border-b border-gray-200 pb-6"
                      >
                        <div className="flex justify-between items-baseline mb-2">
                          <h4 className="text-lg font-serif text-charcoal">{service.name}</h4>
                          <span className="text-gold text-sm tracking-wider">{service.price}</span>
                        </div>
                        <p className="text-taupe text-sm leading-relaxed">{service.desc}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </PageTransition>
  );
}
