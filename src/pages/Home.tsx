import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, Sparkles, ShieldCheck, Clock, Heart } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const services = [
  {
    title: 'Hair Styling & Color',
    description: 'Bespoke cuts, vibrant coloring, and restorative treatments tailored to your unique features.',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    link: '/services#hair'
  },
  {
    title: 'Luxury Skincare',
    description: 'Advanced facial treatments and skin rejuvenation using premium, results-driven products.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80',
    link: '/services#skin'
  },
  {
    title: 'Bridal Makeover',
    description: 'Flawless, long-lasting bridal beauty packages designed for your most important day.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
    link: '/bridal'
  }
];

const features = [
  { icon: Sparkles, title: 'Premium Products', desc: 'We exclusively use high-end, cruelty-free luxury brands.' },
  { icon: ShieldCheck, title: 'Hygiene Assured', desc: 'Impeccable sanitation standards for your peace of mind.' },
  { icon: Star, title: 'Expert Stylists', desc: 'Internationally trained professionals with years of experience.' },
  { icon: Heart, title: 'Personalized Care', desc: 'Tailored consultations to understand your unique beauty needs.' }
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury Salon Interior"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-charcoal/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="block text-gold-light text-sm md:text-base tracking-[0.3em] uppercase mb-6"
          >
            Welcome to Lumière
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-ivory mb-8 leading-tight"
          >
            Elevate Your Beauty With a <span className="italic text-gold-light">Luxury</span> Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-ivory/90 font-light max-w-2xl mx-auto mb-12"
          >
            Discover the ultimate destination for premium hair, skin, and bridal services in an atmosphere of pure elegance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link
              to="/contact"
              className="px-10 py-4 bg-gold text-charcoal font-medium tracking-widest uppercase text-sm hover:bg-ivory transition-colors duration-300 w-full sm:w-auto"
            >
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="px-10 py-4 border border-ivory text-ivory font-medium tracking-widest uppercase text-sm hover:bg-ivory hover:text-charcoal transition-colors duration-300 w-full sm:w-auto"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-ivory/70 text-xs tracking-widest uppercase mb-3">Scroll</span>
          <div className="w-[1px] h-12 bg-ivory/30 overflow-hidden">
            <motion.div
              animate={{ y: [0, 48, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-full h-1/2 bg-gold"
            />
          </div>
        </motion.div>
      </section>

      {/* Brand Introduction */}
      <section className="py-24 md:py-32 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8 leading-tight">
                Where Elegance Meets <br /><span className="italic text-gold">Expertise</span>
              </h2>
              <p className="text-taupe text-lg leading-relaxed mb-8">
                At Lumière, we believe that beauty is an art form. Our salon is a sanctuary designed for those who seek perfection, relaxation, and transformation. From the moment you step through our doors, you'll experience a level of service that goes beyond the ordinary.
              </p>
              <p className="text-taupe text-lg leading-relaxed mb-10">
                Our master stylists and beauty therapists are dedicated to enhancing your natural radiance using only the finest luxury products available globally.
              </p>
              <Link to="/about" className="inline-flex items-center text-charcoal font-medium tracking-widest uppercase text-sm hover:text-gold transition-colors group">
                Discover Our Story
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=1000&q=80"
                  alt="Salon Experience"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-8 shadow-xl max-w-xs hidden md:block">
                <p className="font-serif text-2xl text-charcoal italic mb-2">"The epitome of luxury beauty."</p>
                <div className="flex text-gold mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-xs text-taupe uppercase tracking-wider">— Vogue Beauty</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-24 bg-charcoal text-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-gold text-sm tracking-[0.2em] uppercase mb-4 block">Our Offerings</span>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">Signature Services</h2>
            <p className="text-gray-400 text-lg">Curated beauty experiences designed to rejuvenate, transform, and elevate your natural elegance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[3/4] mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                </div>
                <h3 className="text-2xl font-serif mb-3 group-hover:text-gold transition-colors">{service.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>
                <Link to={service.link} className="inline-flex items-center text-sm uppercase tracking-widest hover:text-gold transition-colors">
                  Explore <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-6">The Lumière Difference</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-gold">
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-serif text-charcoal mb-4">{feature.title}</h3>
                  <p className="text-taupe leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bridal Highlight */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1920&q=80"
            alt="Bridal Beauty"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-charcoal/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <span className="text-gold-light text-sm tracking-[0.3em] uppercase mb-6 block">Bridal Excellence</span>
          <h2 className="text-4xl md:text-6xl font-serif text-ivory mb-8 leading-tight">
            Your Perfect Day,<br />Flawlessly Executed
          </h2>
          <p className="text-lg text-ivory/90 font-light mb-12 max-w-2xl mx-auto">
            Our bridal specialists create breathtaking looks that last from the first photo to the final dance. Discover our bespoke bridal packages.
          </p>
          <Link
            to="/bridal"
            className="inline-block px-10 py-4 bg-transparent border border-gold text-gold font-medium tracking-widest uppercase text-sm hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            View Bridal Packages
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-charcoal mb-8">Ready for Your Transformation?</h2>
          <p className="text-taupe text-lg mb-10">
            Book your appointment today and step into a world of luxury and refined beauty.
          </p>
          <Link
            to="/contact"
            className="inline-block px-12 py-5 bg-charcoal text-warm-white font-medium tracking-widest uppercase text-sm hover:bg-gold transition-colors duration-300 shadow-lg"
          >
            Book Your Visit
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
