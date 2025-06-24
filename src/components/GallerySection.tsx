import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import SectionTitle from './ui/SectionTitle';
import AnimatedSection from './ui/AnimatedSection';
import { galleryImages } from '../data/gallery';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageClick = (id: number) => {
    setSelectedImage(id);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set([...prev, id]));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="gallery" className="py-20 bg-blush-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Gallery"
          subtitle="A showcase of our delicious creations"
        />

        {/* Gallery Images */}
        {/* Mobile: Horizontal swipeable carousel */}
        <motion.div
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory sm:hidden pb-2 -mx-4 px-4"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              className="min-w-[80vw] max-w-xs snap-center group relative aspect-square overflow-hidden rounded-xl shadow-lg w-full flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleImageClick(image.id)}
            >
              {!loadedImages.has(image.id) && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-90"
                loading="lazy"
                onLoad={() => handleImageLoad(image.id)}
                variants={imageVariants}
                initial="hidden"
                animate={loadedImages.has(image.id) ? "visible" : "hidden"}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{image.alt}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tablet/Desktop: Grid layout */}
        <motion.div 
          className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              className="group relative aspect-square overflow-hidden rounded-xl shadow-lg w-full"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                onClick={() => handleImageClick(image.id)}
                className="w-full h-full cursor-pointer"
              >
                {!loadedImages.has(image.id) && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                )}
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:brightness-90"
                  loading="lazy"
                  onLoad={() => handleImageLoad(image.id)}
                  variants={imageVariants}
                  initial="hidden"
                  animate={loadedImages.has(image.id) ? "visible" : "hidden"}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-sm font-medium">{image.alt}</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl w-full mx-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
                  onClick={closeModal}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} className="text-white" />
                </motion.button>
                <motion.img
                  src={galleryImages.find(img => img.id === selectedImage)?.src}
                  alt={galleryImages.find(img => img.id === selectedImage)?.alt}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.p 
                  className="absolute bottom-4 left-4 text-white text-sm font-medium"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {galleryImages.find(img => img.id === selectedImage)?.alt}
                </motion.p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GallerySection;