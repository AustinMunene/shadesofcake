import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';
import SectionTitle from './ui/SectionTitle';
import Button from './ui/Button';

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  cakeType: string;
  occasion: string;
};

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // First, sign up the user
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: Math.random().toString(36).slice(-8), // Generate a random password
      });

      if (authError) throw authError;

      // Create profile
      const { error: profileError } = await supabase
        .from('profiles')
        .upsert({
          id: authData.user?.id,
          email: data.email,
          full_name: data.name,
        });

      if (profileError) throw profileError;

      // Create order
      const { error: orderError } = await supabase
        .from('orders')
        .insert({
          user_id: authData.user?.id,
          cake_type: data.cakeType,
          occasion: data.occasion,
          message: data.message,
        });

      if (orderError) throw orderError;

      alert('Thank you for your order! We will contact you soon.');
      reset();
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error submitting your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+254727376205',
      link: 'tel:+254727376205',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'emarubu@gmail.com',
      link: 'mailto:emarubu@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Sungura Road South C, Nairobi Area, Kenya',
      link: 'https://maps.app.goo.gl/DoXv3gnWiindTcKA7?g_st=com.google.maps.preview.copy',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: 'Mon-Sat: 9AM - 5PM',
      link: '#',
    },
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: 'Instagram',
      link: 'https://www.instagram.com/shades_of_cake_ke?igsh=ejRjN3ZleHFua3A1',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Contact Us"
          subtitle="Have questions or want to place an order? Reach out to us!"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h3 className="text-2xl font-semibold text-navy-500 mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="John Doe"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <span className="text-sm text-red-500">{errors.name.message}</span>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="your@email.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: 'Please enter a valid email',
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500">{errors.email.message}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="+254 7XX XXX XXX"
                    {...register('phone', { required: 'Phone number is required' })}
                  />
                  {errors.phone && (
                    <span className="text-sm text-red-500">{errors.phone.message}</span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="cakeType" className="block text-sm font-medium text-gray-700 mb-1">
                    Type of Cake
                  </label>
                  <select
                    id="cakeType"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.cakeType ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('cakeType', { required: 'Please select a cake type' })}
                  >
                    <option value="">Select a cake type</option>
                    <option value="sponge">Sponge Cake</option>
                    <option value="butter">Butter Cake</option>
                    <option value="rich">Rich Butter Cake</option>
                    <option value="cupcakes">Cupcakes</option>
                    <option value="custom">Custom Order</option>
                  </select>
                  {errors.cakeType && (
                    <span className="text-sm text-red-500">{errors.cakeType.message}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-1">
                    Occasion
                  </label>
                  <select
                    id="occasion"
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.occasion ? 'border-red-500' : 'border-gray-300'}`}
                    {...register('occasion')}
                  >
                    <option value="">Select an occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="wedding">Wedding</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="graduation">Graduation</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Tell us about your order or inquiry..."
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && (
                  <span className="text-sm text-red-500">{errors.message.message}</span>
                )}
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full mt-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-navy-500 mb-6">Get in Touch</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-primary-100 p-3 rounded-full">
                    <item.icon className="text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-500">{item.title}</h4>
                    <p className="text-gray-600">{item.details}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="bg-blush-100 p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-semibold text-navy-500 mb-4">Order Information</h4>
              <ul className="space-y-2 text-gray-700">
                <li>• Please place your orders at least 2 days in advance</li>
                <li>• Custom design orders require 3-5 days notice</li>
                <li>• Delivery available within Nairobi (additional fee applies)</li>
                <li>• Payment: 50% deposit required to confirm your order</li>
                <li>• We also offer cake tasting sessions by appointment</li>
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-navy-500 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialMedia.map((platform, index) => (
                  <a
                    key={index}
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full shadow hover:shadow-md transition-shadow"
                  >
                    <platform.icon className="text-primary-500" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;