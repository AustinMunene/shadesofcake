import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cake as CakeIcon, Menu, X } from 'lucide-react';
import Button from './ui/Button';

interface NavigationProps {
  transparent?: boolean;
}

const Navigation: React.FC<NavigationProps> = ({ transparent = true }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
  ];
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navClasses = scrolled || !transparent 
    ? 'bg-white shadow-md'
    : 'bg-transparent';
    
  const linkColor = scrolled || !transparent 
    ? 'text-navy-500 hover:text-primary-500'
    : 'text-white hover:text-primary-200';

  const toggleMenu = () => setIsOpen(!isOpen);
  
  return (
    <nav 
      className={`${navClasses} fixed w-full top-0 left-0 z-50 transition-all duration-300`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a 
            href="#home" 
            className="flex items-center"
          >
            <motion.div
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.2 }}
            >
              <CakeIcon className={scrolled || !transparent ? 'text-primary-500' : 'text-white'} size={32} />
            </motion.div>
            <span className={`ml-2 text-2xl font-script ${scrolled || !transparent ? 'text-navy-500' : 'text-white'}`}>
              Shades of Cake
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`${linkColor} font-medium transition-colors duration-200`}
              >
                {link.name}
              </a>
            ))}
            <Button 
              variant="primary" 
              size="sm"
              className="ml-4"
              onClick={() => window.location.href = '#contact'}
            >
              Order Now
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${scrolled || !transparent ? 'text-navy-500' : 'text-white'} focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white"
          >
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-navy-500 hover:text-primary-500 font-medium py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <Button
                  variant="primary"
                  className="mt-4 w-full"
                  onClick={() => {
                    window.location.href = '#contact';
                    setIsOpen(false);
                  }}
                >
                  Order Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;