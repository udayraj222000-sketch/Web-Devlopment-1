import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import PageTransition from '../components/PageTransition';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80', category: 'Interior', alt: 'Salon Interior' },
  { id: 2, src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80', category: 'Hair', alt: 'Hair Styling' },
  { id: 3, src: 'https://i.pinimg.com/736x/ba/fd/92/bafd92550e5b5bf3784ae6f6a4c9d981.jpg', category: 'Makeup', alt: 'Makeup Application' },
  { id: 4, src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80', category: 'Bridal', alt: 'Bridal Beauty' },
  { id: 5, src: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&w=800&q=80', category: 'Nails', alt: 'Nail Art' },
  { id: 6, src: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80', category: 'Skincare', alt: 'Facial Treatment' },
  { id: 7, src: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80', category: 'Hair', alt: 'Hair Coloring' },
  { id: 8, src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&w=800&q=80', category: 'Interior', alt: 'Styling Station' },
  { id: 9, src: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80', category: 'Skincare', alt: 'Skincare Products' },
  { id: 10, src: 'https://i.pinimg.com/736x/89/bf/ab/89bfab20f33b4a8b382718cdc6578944.jpg', category: 'Hair', alt: 'Haircut' },
  { id: 11, src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80', category: 'Interior', alt: 'Lounge Area' },
  { id: 12, src: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80', category: 'Bridal', alt: 'Bridal Hair' }
];

const categories = ['All', 'Interior', 'Hair', 'Makeup', 'Bridal', 'Skincare', 'Nails'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = filter === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

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
            Our Portfolio
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl font-serif text-charcoal mb-6"
          >
            Visual <span className="italic text-gold">Inspiration</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-taupe text-lg max-w-2xl mx-auto"
          >
            A glimpse into the transformative artistry and luxurious ambiance of Lumière.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 bg-beige/20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 text-sm tracking-widest uppercase transition-all duration-300 ${
                  filter === cat
                    ? 'bg-charcoal text-warm-white'
                    : 'bg-transparent text-charcoal border border-charcoal/20 hover:border-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative aspect-[4/5] overflow-hidden cursor-pointer bg-gray-100"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="text-white w-10 h-10" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4 md:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
