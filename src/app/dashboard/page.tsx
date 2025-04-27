'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';


interface ContentData {
  title: string;
  subtitle: string;
  price: string;
  buttonText: string;
  timerText: string;
  offerText: string;
  reviewTitle: string;
  reviewText: string;
  productDetails: string;
  ctaText: string;
}

const Dashboard: React.FC = () => {
  const [content, setContent] = useState<ContentData>({
    title: 'সীমিত সময়ের অফার! ইবুক অ্যাক্সেস করুন এখনই!',
    subtitle: 'সীমিত সময়ের অফার! ইবুক অ্যাক্সেস করুন এখনই!',
    price: '199.00 টাকা',
    buttonText: 'অর্ডার দিন',
    timerText: '23 59 59',
    offerText: 'অফার শেষ হওয়ার আগে এখনই এক্সেস নিন!',
    reviewTitle: 'একঝলকে পাঠকের রিভিউ!',
    reviewText: 'ভাইজান! ই-বুক টা কিনলাই দেখেন এড এর খরচ আসলেই কমবে! অডিয়েন্স টারগেটিং ছাড়াও আরো নানান ধরণের টিপস আছে সব দিয়া দিছি।',
    productDetails: 'উদ্যোক্তা ও মার্কেটারদের বাস্তব সমস্যার কার্যকর সমাধান।',
    ctaText: 'মাত্র 199 টাকায়!',
  });
  
  const [imageUrl, setImageUrl] = useState<string>('/api/placeholder/400/320');
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContent(prev => ({
      ...prev,
      [name]: value
    }));
    setIsSaved(false);
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && e.target.result) {
          setImageUrl(e.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
    setIsSaved(false);
  };
  
  const handleSave = () => {
    // Here you would typically send this data to your backend
    console.log('Saving content:', content);
    console.log('Image URL:', imageUrl);
    
    // Show success message
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };
  
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">ল্যান্ডিং পেজ ড্যাশবোর্ড</h1>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">পাঠ্য সামগ্রী পরিবর্তন করুন</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">শিরোনাম</label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={content.title}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">উপশিরোনাম</label>
                    <input
                      type="text"
                      name="subtitle"
                      id="subtitle"
                      value={content.subtitle}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700">মূল্য</label>
                    <input
                      type="text"
                      name="price"
                      id="price"
                      value={content.price}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="buttonText" className="block text-sm font-medium text-gray-700">বাটন টেক্সট</label>
                    <input
                      type="text"
                      name="buttonText"
                      id="buttonText"
                      value={content.buttonText}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="timerText" className="block text-sm font-medium text-gray-700">টাইমার টেক্সট</label>
                    <input
                      type="text"
                      name="timerText"
                      id="timerText"
                      value={content.timerText}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="offerText" className="block text-sm font-medium text-gray-700">অফার সংক্রান্ত টেক্সট</label>
                    <input
                      type="text"
                      name="offerText"
                      id="offerText"
                      value={content.offerText}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="ctaText" className="block text-sm font-medium text-gray-700">CTA টেক্সট</label>
                    <input
                      type="text"
                      name="ctaText"
                      id="ctaText"
                      value={content.ctaText}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">পণ্য এবং রিভিউ সামগ্রী</h2>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="productDetails" className="block text-sm font-medium text-gray-700">পণ্য বিবরণ</label>
                    <textarea
                      name="productDetails"
                      id="productDetails"
                      rows={3}
                      value={content.productDetails}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="reviewTitle" className="block text-sm font-medium text-gray-700">রিভিউ শিরোনাম</label>
                    <input
                      type="text"
                      name="reviewTitle"
                      id="reviewTitle"
                      value={content.reviewTitle}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700">রিভিউ টেক্সট</label>
                    <textarea
                      name="reviewText"
                      id="reviewText"
                      rows={3}
                      value={content.reviewText}
                      onChange={handleChange}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700">কভার ইমেজ</label>
                    <div className="mt-1 flex items-center">
                      <div className="h-32 w-32 overflow-hidden rounded border border-gray-300">
                        <img src={imageUrl} alt="Cover Preview" className="h-full w-full object-cover" />
                      </div>
                      <label htmlFor="cover-upload" className="ml-5 cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                        <span>ইমেজ আপলোড করুন</span>
                        <input
                          id="cover-upload"
                          name="cover-upload"
                          type="file"
                          className="sr-only"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-end">
              <button
                type="button"
                onClick={() => setIsPreviewOpen(!isPreviewOpen)}
                className="mr-3 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
              >
                {isPreviewOpen ? 'প্রিভিউ বন্ধ করুন' : 'প্রিভিউ দেখুন'}
              </button>
              <motion.button
                type="button"
                onClick={handleSave}
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                সংরক্ষণ করুন
              </motion.button>
            </div>
            
            {isSaved && (
              <motion.div
                className="mt-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                পরিবর্তনগুলো সফলভাবে সংরক্ষিত হয়েছে!
              </motion.div>
            )}
          </div>
        </div>
        
        {isPreviewOpen && (
          <motion.div 
            className="mt-8 border rounded-lg overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-indigo-600 text-white px-4 py-3 flex justify-between items-center">
              <h3 className="text-lg font-medium">লাইভ প্রিভিউ</h3>
              <button
                type="button"
                onClick={() => setIsPreviewOpen(false)}
                className="text-white hover:text-indigo-100"
              >
                ✕
              </button>
            </div>
            <div className="bg-white p-4 max-h-96 overflow-auto">
              <div className="bg-gradient-to-r from-purple-600 to-blue-500 text-white p-4 rounded-t-lg">
                <h2 className="text-xl font-bold">{content.title}</h2>
                <p>{content.subtitle}</p>
              </div>
              <div className="p-4 border-x border-b rounded-b-lg mb-4">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-indigo-600 font-bold">{content.ctaText}</p>
                  <div className="bg-yellow-100 px-3 py-1 rounded text-yellow-800 text-sm">
                    {content.timerText}
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{content.offerText}</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-800">{content.productDetails}</p>
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded">
                    {content.buttonText} {content.price}
                  </button>
                </div>
              </div>
              
              <div className="mt-4 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-gray-800 mb-2">{content.reviewTitle}</h3>
                <p className="text-gray-600 italic">"{content.reviewText}"</p>
              </div>
            </div>
          </motion.div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;