import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const HeroSection: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ 
        backgroundImage: "url('https://images.pexels.com/photos/6210774/pexels-photo-6210774.jpeg')" 
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-navy-500 bg-opacity-60"></div>
      
      <div className="container mx-auto px-4 z-10 py-24 md:py-0">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-script text-white mb-6">
              Shades of Cake
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
              Delicious custom cakes for all occasions. 
              Made with love, artistry, and the finest ingredients.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                variant="primary"
                size="lg"
                onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Our Menu
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:bg-opacity-20"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <a 
              href="#about" 
              className="text-white flex flex-col items-center"
            >
              <span className="mb-2">Scroll down</span>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="animate-bounce"
              >
                <path 
                  d="M12 5L12 19M12 19L19 12M12 19L5 12" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;