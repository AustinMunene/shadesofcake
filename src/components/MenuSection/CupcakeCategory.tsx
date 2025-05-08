import React from 'react';
import { motion } from 'framer-motion';
import { CupcakeType } from '../../types';

interface CupcakeCategoryProps {
  cupcakes: CupcakeType;
}

const CupcakeCategory: React.FC<CupcakeCategoryProps> = ({ cupcakes }) => {
  return (
    <div className="h-full overflow-y-auto px-4">
      <h3 className="text-2xl font-light text-navy-500 mb-6 pb-2 border-b border-primary-200">
        Cupcakes
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-xl font-light text-navy-500 mb-4">Flavors</h4>
          <div className="grid grid-cols-2 gap-y-3">
            {cupcakes.flavors.map((flavor, index) => (
              <motion.div 
                key={index}
                className="flex items-center font-light"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <span className="w-1 h-1 bg-primary-500 rounded-full mr-2"></span>
                <span>{flavor}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xl font-light text-navy-500 mb-4">Quantity & Prices</h4>
          <motion.ul 
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
          >
            {cupcakes.pricing.map((price, index) => (
              <motion.li 
                key={index}
                className="flex justify-between items-center font-light"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <span>{price.quantity} cupcakes</span>
                <span>Ksh. {price.price.toLocaleString()}</span>
              </motion.li>
            ))}
          </motion.ul>
          <p className="mt-4 text-sm text-gray-600 font-light">
            * Customizations available upon request. Prices may vary for special designs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CupcakeCategory;