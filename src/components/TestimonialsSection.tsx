import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './ui/SectionTitle';
import { testimonials } from '../data/testimonials';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="What Our Customers Say"
          subtitle="Don't just take our word for it - hear from our satisfied customers"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className={`${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mr-1`}
                  />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="font-medium text-navy-500">{testimonial.name}</div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600">
            Want to share your experience with our cakes?{' '}
            <a href="#contact" className="text-primary-500 hover:underline">
              Leave a review
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;