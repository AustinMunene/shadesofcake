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
      title: 'Premium Ingredients',
      description: 'We use only the finest ingredients to create our cakes, ensuring the best taste and quality.',
    },
    {
      icon: Award,
      title: 'Expert Craftsmanship',
      description: 'Our experienced bakers bring creativity and precision to every cake we make.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'We ensure your order is delivered fresh and on time for your special occasion.',
    },
    {
      icon: Heart,
      title: 'Made with Love',
      description: 'Every cake is made with passion and attention to detail, just for you.',
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
            subtitle="Creating Confectionery Delights; 
            We Specialize in Whipped Cream Celebration Cakes & Cupcakes For That Subtle Tooth"
          />
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <AnimatedSection className="lg:w-1/2">
            <div className="relative">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
              )}
              <motion.img
                src="https://i.imgur.com/ep1k5et.jpeg?1"
                alt="Baker decorating a cake"
                className="rounded-lg shadow-xl max-h-[500px] w-full object-cover"
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={imageLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={imageLoaded ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.9 }}
                transition={{ delay: 0.3 }}
              >
                <motion.p 
                  className="text-navy-500 font-semibold text-lg"
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
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={featureVariants}
                  className="bg-white p-6 rounded-lg shadow-md"
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
                    className="text-lg font-semibold text-navy-500 mb-2"
                    variants={textVariants}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-gray-600"
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