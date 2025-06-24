import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CakeCategory from './CakeCategory';
import CupcakeCategory from './CupcakeCategory';
import SectionTitle from '../ui/SectionTitle';
import { cakesData, cupcakesData } from '../../data/cakes';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MenuSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const categories = [
    { id: 'sponge-cakes', label: 'Sponge Cakes' },
    { id: 'basic-butter-cakes', label: 'Basic Butter Cakes' },
    { id: 'rich-butter-cakes', label: 'Rich Butter Cakes' },
    { id: 'cupcakes', label: 'Cupcakes' },
  ];

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = categories.length - 1;
      if (nextIndex >= categories.length) nextIndex = 0;
      return nextIndex;
    });
  };

  return (
    <section id="menu" className="py-20 overflow-hidden bg-blush-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Our Menu"
          subtitle="Explore our delicious selection of cakes and cupcakes"
        />

        <div className="mb-8 flex justify-start md:justify-center space-x-4 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-thin scrollbar-thumb-primary-200">
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => {
                const newDirection = index > currentIndex ? 1 : -1;
                setDirection(newDirection);
                setCurrentIndex(index);
              }}
              className={`px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                currentIndex === index
                  ? 'text-primary-500 border-b-2 border-primary-500'
                  : 'text-gray-500 hover:text-primary-400'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="relative bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
          <p className="text-gray-600 mb-8 text-center font-light text-sm md:text-base">
            All our cakes come with standard whipped cream frosting and basic decorations.
            Custom designs and special requests available at additional cost.
          </p>

          <div className="relative h-[420px] sm:h-[500px] md:h-[600px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction > 0 ? 1000 : -1000 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -1000 : 1000 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="absolute w-full h-full"
              >
                {currentIndex === categories.length - 1 ? (
                  <CupcakeCategory cupcakes={cupcakesData} />
                ) : (
                  <CakeCategory category={cakesData[currentIndex]} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-between mt-4">
            <button
              className="p-2 bg-white shadow-lg rounded-full hover:bg-gray-50 transition-colors"
              onClick={() => paginate(-1)}
            >
              <ChevronLeft className="text-navy-500 w-4 h-4 md:w-5 md:h-5" />
            </button>
            <button
              className="p-2 bg-white shadow-lg rounded-full hover:bg-gray-50 transition-colors"
              onClick={() => paginate(1)}
            >
              <ChevronRight className="text-navy-500 w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        <div className="bg-blush-100 p-4 rounded-lg mt-8">
          <h4 className="font-light text-navy-500 mb-2">Special Orders</h4>
          <p className="text-gray-700 font-light text-sm md:text-base">
            For custom designs, wedding cakes, or special dietary requirements (gluten-free, sugar-free),
            please contact us directly to discuss your needs and get a personalized quote.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;