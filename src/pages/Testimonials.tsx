import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Isabella Rossi',
    role: 'Bridal Client',
    text: 'The team at Lumière made my wedding day absolutely perfect. From the initial consultation to the final touch-ups, their attention to detail was impeccable. I felt like royalty.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Sophia Chen',
    role: 'Regular Client',
    text: 'I have been coming here for my color and cuts for three years. Elena is a true artist. The salon atmosphere is so relaxing, it feels like a mini-vacation every time I visit.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Olivia Sterling',
    role: 'Skincare Client',
    text: 'The anti-aging facial treatments have completely transformed my skin texture. The estheticians are incredibly knowledgeable and use only the highest quality products.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Emma Thompson',
    role: 'Event Makeup',
    text: 'I booked them for a gala event, and the makeup was flawless. It lasted all night without feeling heavy. Highly recommend their airbrush services!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Mia Rodriguez',
    role: 'Hair Color Client',
    text: 'They fixed a terrible color job I got elsewhere. The balayage looks so natural and my hair feels healthier than ever thanks to their restorative treatments.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Charlotte Dubois',
    role: 'Bridal Client',
    text: 'My entire bridal party was pampered and looked stunning. The salon accommodated all 6 of us with ease and made the morning so special and stress-free.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1524504388218-f069f07ab78c?auto=format&fit=crop&w=400&q=80'
  }
];

export default function Testimonials() {
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
            Client Experiences
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif text-charcoal mb-6"
          >
            Words of <span className="italic text-gold">Praise</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-taupe text-lg max-w-2xl mx-auto"
          >
            Read what our valued clients have to say about their transformative experiences at Lumière.
          </motion.p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-24 bg-beige/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-10 shadow-sm relative group"
              >
                <Quote className="absolute top-8 right-8 w-12 h-12 text-gold/10 group-hover:text-gold/20 transition-colors" />
                
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h3 className="font-serif text-xl text-charcoal">{testimonial.name}</h3>
                    <p className="text-xs text-gold uppercase tracking-widest">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex text-gold mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-taupe leading-relaxed italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 bg-charcoal text-warm-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif mb-12">Recognized for Excellence</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-70">
            <div className="flex flex-col items-center">
              <span className="text-4xl font-serif text-gold mb-2">4.9</span>
              <span className="text-xs uppercase tracking-widest">Google Reviews</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-serif text-gold mb-2">10k+</span>
              <span className="text-xs uppercase tracking-widest">Happy Clients</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-serif text-gold mb-2">15+</span>
              <span className="text-xs uppercase tracking-widest">Industry Awards</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-serif text-gold mb-2">100%</span>
              <span className="text-xs uppercase tracking-widest">Satisfaction</span>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
