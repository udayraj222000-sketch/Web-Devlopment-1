import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { Check } from 'lucide-react';

const packages = [
  {
    name: 'The Essential Bride',
    price: '$850',
    description: 'A comprehensive package for the bride who desires classic elegance.',
    features: [
      'Pre-wedding consultation & trial (Hair & Makeup)',
      'Wedding day HD Makeup application',
      'Wedding day Hair styling',
      'Premium false lashes',
      'Dressing assistance (Dupatta/Veil setting)',
      'Touch-up kit for the day'
    ]
  },
  {
    name: 'The Signature Bride',
    price: '$1,250',
    description: 'Our most popular package, offering elevated luxury and extended services.',
    isPopular: true,
    features: [
      'Everything in Essential Package',
      'Airbrush Makeup upgrade',
      'Pre-wedding luxury facial (1 week prior)',
      'Spa Manicure & Pedicure',
      'Body polishing treatment',
      'On-location service (within 20 miles)'
    ]
  },
  {
    name: 'The Royal Makeover',
    price: '$2,500',
    description: 'The ultimate bridal experience, covering all events with unparalleled luxury.',
    features: [
      'Everything in Signature Package',
      'Makeup & Hair for 3 events (e.g., Engagement, Wedding, Reception)',
      'Complete pre-bridal skincare regimen (1 month)',
      'Hair Spa & Keratin treatment',
      'Bridal Nail Extensions & Art',
      'Dedicated stylist on standby for touch-ups'
    ]
  }
];

export default function Bridal() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-charcoal text-warm-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-50">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=80"
            alt="Bridal Beauty"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-gold text-sm tracking-[0.3em] uppercase mb-4"
          >
            Bridal & Packages
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            Your Perfect <span className="italic text-gold-light">Day</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Bespoke bridal beauty experiences designed to make you look and feel absolutely radiant as you walk down the aisle.
          </motion.p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-8">A Journey to Radiance</h2>
          <p className="text-taupe text-lg leading-relaxed mb-8">
            At Lumière, we understand that your wedding day is one of the most important moments of your life. Our dedicated bridal team works closely with you to design a look that perfectly complements your personal style, dress, and wedding theme.
          </p>
          <p className="text-taupe text-lg leading-relaxed">
            From months of preparatory skincare to the final touch of lipstick on the big day, we ensure a seamless, stress-free, and luxurious experience.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-24 bg-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-charcoal mb-4">Bridal Packages</h2>
            <p className="text-taupe">Curated experiences for every bride.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-white p-10 shadow-sm border ${
                  pkg.isPopular ? 'border-gold' : 'border-gray-100'
                } flex flex-col`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-charcoal px-4 py-1 text-xs font-bold tracking-widest uppercase">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-serif text-charcoal mb-2">{pkg.name}</h3>
                <div className="text-3xl font-serif text-gold mb-4">{pkg.price}</div>
                <p className="text-taupe text-sm mb-8 flex-grow">{pkg.description}</p>
                
                <ul className="space-y-4 mb-10">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-sm text-charcoal">
                      <Check className="w-5 h-5 text-gold mr-3 shrink-0" />
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-4 text-center text-sm font-medium tracking-widest uppercase transition-colors duration-300 ${
                    pkg.isPopular
                      ? 'bg-charcoal text-warm-white hover:bg-gold hover:text-charcoal'
                      : 'border border-charcoal text-charcoal hover:bg-charcoal hover:text-warm-white'
                  }`}
                >
                  Inquire Now
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Bridal & Groom */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/3] overflow-hidden mb-8">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80"
                  alt="Pre-Bridal Skincare"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-3xl font-serif text-charcoal mb-4">Pre-Bridal Rituals</h3>
              <p className="text-taupe leading-relaxed mb-6">
                Preparation is the key to a flawless wedding day glow. Our pre-bridal packages begin 1-3 months before your wedding, focusing on deep skin rejuvenation, hair repair, and overall relaxation.
              </p>
              <Link to="/contact" className="text-gold text-sm uppercase tracking-widest font-medium hover:text-charcoal transition-colors">
                Book Consultation &rarr;
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-[4/3] overflow-hidden mb-8">
                <img
                  src="https://i.pinimg.com/736x/73/db/00/73db008db2f61bf7e8801aa4985818af.jpg"
                  alt="Groom Grooming"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-3xl font-serif text-charcoal mb-4">Groom's Grooming</h3>
              <p className="text-taupe leading-relaxed mb-6">
                Elevated grooming experiences for the modern groom. From precision haircuts and beard styling to revitalizing facials and manicures, ensure you look as sharp as your suit.
              </p>
              <Link to="/contact" className="text-gold text-sm uppercase tracking-widest font-medium hover:text-charcoal transition-colors">
                View Groom Packages &rarr;
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
