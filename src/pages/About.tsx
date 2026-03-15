import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';

export default function About() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 bg-charcoal text-warm-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src="https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1920&q=80"
            alt="Salon Details"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="block text-gold text-sm tracking-[0.3em] uppercase mb-4"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-serif mb-6"
          >
            The Art of <span className="italic text-gold-light">Elegance</span>
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80"
                  alt="Stylist working"
                  className="w-full h-80 object-cover rounded-sm mt-8"
                  referrerPolicy="no-referrer"
                />
                <img
                  src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80"
                  alt="Salon interior details"
                  className="w-full h-80 object-cover rounded-sm"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-6">A Legacy of Beauty</h2>
              <p className="text-taupe leading-relaxed mb-6">
                Founded in 2015, Lumière was born from a singular vision: to create a sanctuary where luxury meets personalized care. We recognized a need for a salon experience that transcended the ordinary—a place where every detail, from the ambient lighting to the curated product lines, was designed with the client's ultimate comfort in mind.
              </p>
              <p className="text-taupe leading-relaxed mb-8">
                Over the years, we have cultivated a team of passionate artisans who view beauty not just as a service, but as an art form. Our commitment to continuous education ensures that we remain at the forefront of global beauty trends and techniques.
              </p>
              <div className="border-l-2 border-gold pl-6 py-2">
                <p className="font-serif text-xl text-charcoal italic">
                  "Our mission is to empower individuals by revealing their most authentic, radiant selves."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Our Philosophy</h2>
            <p className="text-taupe max-w-2xl mx-auto">The core principles that guide every interaction and service at Lumière.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Uncompromising Quality', desc: 'We partner exclusively with premium, sustainable brands that deliver exceptional results without compromising hair or skin health.' },
              { title: 'Bespoke Artistry', desc: 'We reject the "one-size-fits-all" approach. Every service begins with a thorough consultation to tailor the experience to your unique features.' },
              { title: 'Holistic Wellbeing', desc: 'We believe true beauty radiates from within. Our salon environment is crafted to provide a restorative escape from the bustling world.' }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-10 shadow-sm text-center"
              >
                <h3 className="text-xl font-serif text-charcoal mb-4">{value.title}</h3>
                <p className="text-taupe leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">Meet the Artisans</h2>
            <p className="text-taupe max-w-2xl mx-auto">Our master stylists and therapists bring decades of combined experience.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Elena Rostova', role: 'Creative Director & Master Colorist', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80' },
              { name: 'Marcus Chen', role: 'Lead Stylist', img: 'https://images.unsplash.com/photo-1503951914875-000d39629d38?auto=format&fit=crop&w=800&q=80' },
              { name: 'Sophia Laurent', role: 'Head of Skincare & Aesthetics', img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80' }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="overflow-hidden aspect-[3/4] mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-serif text-charcoal">{member.name}</h3>
                <p className="text-gold text-sm tracking-widest uppercase mt-2">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
