import React from 'react';
import { motion } from 'framer-motion';
import { CakeType } from '../../types';

interface CakeCategoryProps {
  category: CakeType;
}

const CakeCategory: React.FC<CakeCategoryProps> = ({ category }) => {
  return (
    <div className="h-full overflow-y-auto px-4">
      <h3 className="text-2xl font-light text-navy-500 mb-6 pb-2 border-b border-primary-200">
        {category.category}
      </h3>

      {category.flavors.map((flavorSection, index) => (
        <div key={index} className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-light text-navy-500 mb-4">Flavors</h4>
              <motion.ul 
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
              >
                {flavorSection.flavors.map((flavor, flavorIndex) => (
                  <motion.li 
                    key={flavorIndex}
                    className="flex items-center font-light"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="w-1 h-1 bg-primary-500 rounded-full mr-2"></span>
                    <span>{flavor}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div>
              <h4 className="text-xl font-light text-navy-500 mb-4">Sizes & Prices</h4>
              <motion.ul 
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
              >
                {flavorSection.sizes.map((size, sizeIndex) => (
                  <motion.li 
                    key={sizeIndex}
                    className="flex justify-between items-center font-light"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span>{size.size}</span>
                    <span>Ksh. {size.price.toLocaleString()}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CakeCategory;