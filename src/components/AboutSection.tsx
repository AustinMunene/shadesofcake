import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CakeIcon, Award, Clock, Heart } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import SectionTitle from './ui/SectionTitle';

const AboutSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const features = [
    {
      icon: CakeIcon,
      title: 'Quality You Can Taste',
      description: 'We choose fresh, high quality ingredients because every bite should be as special as the moment it celebrates.',
    },
    {
      icon: Award,
      title: 'Thoutfully Baked, Just For You',
      description: 'Each cake is a personal creation, crafted with care and creativity by our small, passionate team.',
    },
    {
      icon: Clock,
      title: 'On-Time, Every Time',
      description: 'We know how important timing is. That is why we make sure your cake arrives fresh and ready when you need it.',
    },
    {
      icon: Heart,
      title: 'Baked with Heart',
      description: 'From the first mix to the final touch, we pour love and attention into every cake we make.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const featureVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.95 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 bg-blush-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <SectionTitle
            title="About Us"
            subtitle=" Shades of Cake began in the warmth of my mother’s kitchen, where the scent of fresh mandazis and traditional jiko-baked cakes filled the air. My mum gently encouraged me to take baking seriously—even when I wasn’t sure it was meant for me. Turns out, it was exactly what I needed.

What started as a few homemade treats has grown into a passion-driven bakery rooted in love, tradition, and creativity. At Shades of Cake, every bite tells a story—of family, heritage, and the joy of sharing something sweet."
          />
        </motion.div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 items-center">
          {/* Mobile: Simple unique content */}
          <div className="w-full md:hidden flex flex-col items-center mb-6">
            <CakeIcon className="w-12 h-12 text-primary-500 mb-2" />
            <span className="text-navy-500 font-semibold text-lg">Celebrating Every Moment</span>
          </div>
          {/* Desktop: Image and caption */}
          <AnimatedSection className="w-full lg:w-1/2 hidden md:block">
            <div className="relative w-full">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
              )}
              <motion.img
                src="https://i.imgur.com/ep1k5et.jpeg?1"
                alt="Baker decorating a cake"
                className="rounded-lg shadow-xl max-h-[400px] sm:max-h-[500px] w-full object-cover"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={imageLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={imageLoaded ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                transition={{ delay: 0.3 }}
              >
                <motion.p 
                  className="text-navy-500 font-semibold text-base md:text-lg"
                  initial={{ opacity: 0 }}
                  animate={imageLoaded ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  Baking since 2017
                </motion.p>
              </motion.div>
            </div>
          </AnimatedSection>

          <motion.div 
            className="w-full lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={featureVariants}
                  className="bg-white p-5 sm:p-6 rounded-lg shadow-md"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <feature.icon className="w-8 h-8 text-primary-500 mb-4" />
                  </motion.div>
                  <motion.h3 
                    className="text-base sm:text-lg font-semibold text-navy-500 mb-2"
                    variants={textVariants}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600 text-sm sm:text-base"
                    variants={textVariants}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;