/*
|-----------------------------------------
| setting up HomePage for the App
| @author: Toufiquer Rahman<toufiquer.0@gmail.com>
| @copyright: newinatall, April, 2025
|-----------------------------------------
*/

'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

 
const LandingPage = () => {
  const {
    title = 'সীমিত সময়ের অফার! ইবুক অ্যাক্সেস করুন এখনই!',
    subtitle = 'সীমিত সময়ের অফার! ইবুক অ্যাক্সেস করুন এখনই!',
    price = '199.00 টাকা',
    buttonText = 'অর্ডার দিন',
    timerText = '23 59 59',
    offerText = 'অফার শেষ হওয়ার আগে এখনই এক্সেস নিন!',
    reviewTitle = 'একঝলকে পাঠকের রিভিউ!',
    reviewText = 'ভাইজান! ই-বুক টা কিনলাই দেখেন এড এর খরচ আসলেই কমবে! অডিয়েন্স টারগেটিং ছাড়াও আরো নানান ধরণের টিপস আছে সব দিয়া দিছি।',
    productDetails = 'উদ্যোক্তা ও মার্কেটারদের বাস্তব সমস্যার কার্যকর সমাধান।',
    ctaText = 'মাত্র 199 টাকায়!',
  
} = { };
  const [hours, minutes, seconds] = timerText.split(' ');
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
      {/* Header Section */}
      <motion.header 
        className="bg-gradient-to-r from-purple-600 to-blue-500 text-white py-4 px-6 shadow-md"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="font-bold text-xl md:text-2xl">Bangla IT E-Book</h1>
          <div className="flex items-center space-x-2">
            <div className="bg-white text-purple-700 px-2 py-1 rounded font-mono">
              {hours}:{minutes}:{seconds}
            </div>
          </div>
        </div>
      </motion.header>
      
      {/* Hero Section */}
      <motion.section 
        className="container mx-auto py-8 px-4 md:py-16 md:px-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { 
            opacity: 1,
            transition: { 
              staggerChildren: 0.2 
            }
          }
        }}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left Column */}
          <div className="md:w-1/2">
            <motion.h2 
              className="text-2xl md:text-4xl font-bold text-purple-800 mb-4"
              variants={fadeInUp}
            >
              {title}
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-6"
              variants={fadeInUp}
            >
              {subtitle}
            </motion.p>
            
            <motion.div 
              className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8 rounded"
              variants={fadeInUp}
            >
              <p className="text-yellow-800">{offerText}</p>
            </motion.div>
            
            <motion.div variants={fadeInUp}>
              <p className="text-2xl font-bold text-purple-700 mb-2">{ctaText}</p>
              <motion.button 
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-8 py-3 rounded-lg text-lg font-bold shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {buttonText} {price}
              </motion.button>
            </motion.div>
          </div>
          
          {/* Right Column */}
          <motion.div 
            className="md:w-1/2"
            variants={fadeInUp}
          >
            <div className="bg-white p-4 rounded-lg shadow-xl">
              <div className="relative h-72 w-full">
                <Image 
                  src="/api/placeholder/400/320"
                  alt="E-book Cover"
                  fill
                  className="object-contain rounded"
                />
              </div>
              
              <div className="mt-4">
                <h3 className="font-bold text-xl text-gray-800">{productDetails}</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Review Section */}
      <motion.section 
        className="bg-white py-8 px-4 md:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-purple-800 mb-8">{reviewTitle}</h2>
          
          <motion.div 
            className="bg-purple-50 p-6 rounded-lg shadow-md max-w-2xl mx-auto"
            whileHover={{ scale: 1.02 }}
          >
            <p className="text-gray-700 text-lg italic">"{reviewText}"</p>
            <div className="mt-4 flex items-center">
              <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center">
                <span className="text-purple-700 font-bold">ক</span>
              </div>
              <div className="ml-3">
                <p className="font-semibold text-gray-800">করিম আহমেদ</p>
                <div className="flex text-yellow-400">
                  {[1, 2, 3, 4, 5].map(star => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Order Form Preview */}
      <motion.section 
        className="container mx-auto py-8 px-4 md:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4">
            <h3 className="font-bold text-xl">অর্ডার করতে আপনার কিছু তথ্য লাগবে</h3>
          </div>
          
          <div className="p-6">
            <div className="flex justify-between border-b pb-4 mb-4">
              <span className="font-semibold">Your Product</span>
              <span className="font-semibold">Your Order</span>
            </div>
            
            <div className="flex items-center mb-4">
              <div className="h-16 w-16 bg-gray-100 rounded mr-4"></div>
              <div>
                <p className="font-semibold">Product Title x 1</p>
                <p className="text-purple-700 font-bold">= {price}</p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>{price}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total</span>
                <span>{price}</span>
              </div>
            </div>
            
            <div className="mt-6">
              <p className="font-semibold mb-2">Select Payment Method</p>
              <div className="flex space-x-4">
                <div className="border rounded p-2 text-center flex-1">bKash</div>
                <div className="border rounded p-2 text-center flex-1">Nagad</div>
              </div>
            </div>
            
            <motion.button 
              className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded font-bold"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              অর্ডার কনফার্ম করুন
            </motion.button>
          </div>
        </div>
      </motion.section>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Bangla IT E-Book. সর্বস্বত্ব সংরক্ষিত।</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;