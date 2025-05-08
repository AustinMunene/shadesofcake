import React from 'react';
import { CakeIcon, Heart, Instagram, MessageCircle, GitBranch as BrandTiktok } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const cakeCategories = [
    { name: 'Sponge Cakes', href: '#menu' },
    { name: 'Basic Butter Cakes', href: '#menu' },
    { name: 'Rich Butter Cakes', href: '#menu' },
    { name: 'Cupcakes', href: '#menu' },
    { name: 'Custom Cakes', href: '#contact' },
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: 'Instagram',
      link: 'https://www.instagram.com/shades_of_cake_ke?igsh=ejRjN3ZleHFua3A1',
    },
    {
      icon: BrandTiktok,
      name: 'TikTok',
      link: 'https://tiktok.com',
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      link: 'https://wa.me/message/2C7FUB3NHTYRA1',
    },
  ];

  return (
    <footer className="bg-navy-500 text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Logo & About */}
          <div>
            <div className="flex items-center mb-4">
              <CakeIcon className="text-primary-400" size={32} />
              <span className="ml-2 text-2xl font-light text-white">Shades of Cake</span>
            </div>
            <p className="text-gray-300 mb-4 font-light">
              Delicious custom cakes for all your special occasions. Made with love and the finest ingredients.
            </p>
            <p className="text-gray-300 font-light">
              <strong className="font-normal">Location:</strong> Nairobi, Kenya<br />
              <strong className="font-normal">Business Hours:</strong> Mon-Sat: 9AM - 5PM<br />
              <strong className="font-normal">Phone:</strong> +254727376205
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light mb-4 text-primary-300">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-300 hover:text-primary-300 transition-colors font-light">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Cake Categories */}
          <div>
            <h4 className="text-lg font-light mb-4 text-primary-300">Cake Categories</h4>
            <ul className="space-y-2">
              {cakeCategories.map((category) => (
                <li key={category.name}>
                  <a href={category.href} className="text-gray-300 hover:text-primary-300 transition-colors font-light">
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left font-light">
            &copy; {currentYear} Shades of Cake. All rights reserved.
          </p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="text-gray-400 font-light">Made with</span>
            <Heart className="mx-1 text-primary-400" size={16} />
            <span className="text-gray-400 font-light">in Nairobi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;