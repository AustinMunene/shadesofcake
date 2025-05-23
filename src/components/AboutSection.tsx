import React from 'react';
import { motion } from 'framer-motion';
import { CakeIcon, Award, Clock, Heart } from 'lucide-react';
import AnimatedSection from './ui/AnimatedSection';
import SectionTitle from './ui/SectionTitle';

const AboutSection: React.FC = () => {
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

  return (
    <section id="about" className="py-20 bg-blush-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="About Us"
          subtitle="Creating Confectionery Delights; 
          We Specialize in Whipped Cream Celebration Cakes & Cupcakes For That Subtle Tooth"
        />

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <AnimatedSection className="lg:w-1/2">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6210746/pexels-photo-6210746.jpeg"
                alt="Baker decorating a cake"
                className="rounded-lg shadow-xl max-h-[500px] w-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
                <p className="text-navy-500 font-semibold text-lg">Baking since 2017</p>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:w-1/2" delay={0.2}>
            <h3 className="text-2xl font-semibold text-navy-500 mb-4">
              Our Cake Story
            </h3>
            <p className="text-gray-700 mb-6">
            Shades of Cake began in the warmth of my mother's kitchen, where the scent of fresh mandazis and traditional jiko-baked cakes filled the air. 
             My Mum gently encouraged me to be baking seriously - even when I wasn't sure what it meant for me. Turns out, it was exactly what I needed.
             What started as a few homemade treats has grown into a passion driven bakery rooted in love, tradition, and creativity.
            </p>
            <p className="text-gray-700 mb-8">
            At Shades of Cake, every bite tells a story - of family, heritage, and the joy of sharing something sweet.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-primary-100 p-3 rounded-full h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-500 mb-1">{feature.title}</h4>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;