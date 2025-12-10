"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ArrowRight, CheckIcon, X } from "lucide-react";

export default function PricingPlans() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => setOpenIndex(openIndex === index ? null : index);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-8 mt-20 mb-12">
      <h2 className="text-center text-4xl font-extrabold mb-8 text-gold-400">
        Exclusive Pricing Plans
      </h2>
      <div className="border-t border-gray-300">
        <div className="border-b border-gray-300 py-8 px-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(0)}
          >
            <h3 className="text-[18px] md:text-3xl ml-4 md:ml-20">
              Digital Marketing Packages
            </h3>
            <motion.button
              className="relative w-10 h-10 p-2 flex items-center justify-center rounded-full overflow-hidden transition-all duration-500"
              onClick={(e) => {
                e.stopPropagation();
                toggleFAQ(0);
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ backgroundColor: "#f9a86d" }}
                animate={{
                  backgroundColor: openIndex === 0 ? "rgb(0, 0, 0)" : "#f9a86d",
                  scale: 1,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
              <motion.div
                initial={{ scale: 1, opacity: 1 }}
                animate={{
                  scale: openIndex === 0 ? 0.6 : 1,
                  opacity: openIndex === 0 ? 0.3 : 1,
                }}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute text-black"
              >
                <Plus size={16} />
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: openIndex === 0 ? 1.2 : 0,
                  opacity: openIndex === 0 ? 1 : 0,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute text-white"
              >
                <Minus size={16} />
              </motion.div>
            </motion.button>
          </div>

          <AnimatePresence>
            {openIndex === 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0, transition: { duration: 0.4 } }}
                className="pl-2 md:pl-10 mt-8 text-gray-500 overflow-hidden text-lg"
              >
                {/* Static Plan Cards Start */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Starter */}
                  <div className="p-8 rounded-2xl shadow-lg bg-gray-800 text-white">
                    <h2 className="text-2xl font-bold mb-2 text-center uppercase">Starter</h2>
                    <p className="text-3xl font-semibold text-center mb-2">₹2000/Mo</p>
                    {/* <p className="text-center text-sm  mb-4">₹160,000/Mo</p> */}
                    <div className="text-lg space-y-3">
                      <p><strong>Keywords Target:</strong> Up to 50</p>
                      <p><strong>Search Terms Tracking:</strong> 100</p>
                      <p><strong>ROI:</strong> Minimum 2X</p>
                      <p className="mt-4 font-semibold">Ideal for:</p>
                      <p>Growing Small Business / Single Location</p>
                      <p className="mt-4 font-semibold">ROI Factors:</p>
                      <p>Rankings + Traffic + Boost in Sales/Leads</p>
                    </div>
                  </div>
                  {/* Booster */}
                  <div className="p-8 rounded-2xl shadow-lg bg-amber-600 text-white">
                    <h2 className="text-2xl font-bold mb-2 text-center uppercase">Booster</h2>
                    <p className="text-3xl font-semibold text-center mb-2">₹3000/Mo</p>
                    {/* <p className="text-center text-md mb-4">₹250,000/Mo</p> */}
                    <div className="text-lg space-y-3">
                      <p><strong>Keywords Target:</strong> Up to 100</p>
                      <p><strong>Search Terms Tracking:</strong> 200</p>
                      <p><strong>ROI:</strong> Minimum 3X</p>
                      <p className="mt-4 font-semibold">Ideal for:</p>
                      <p>Lead-Based Businesses</p>
                      <p className="mt-4 font-semibold">ROI Factors:</p>
                      <p>Rankings + Traffic + Social Media Boost + 100 Leads Expected</p>
                    </div>
                  </div>
                  {/* Premium */}
                  <div className="p-8 rounded-2xl shadow-lg bg-gray-800 text-white">
                    <h2 className="text-2xl font-bold mb-2 text-center uppercase">Premium</h2>
                    <p className="text-3xl font-semibold text-center mb-2">₹5000/Mo</p>
                    {/* <p className="text-center text-sm  mb-4">₹4,20,000/Mo</p> */}
                    <div className="text-lg space-y-3">
                      <p><strong>Keywords Target:</strong> Up to 150</p>
                      <p><strong>Search Terms Tracking:</strong> 350</p>
                      <p><strong>ROI:</strong> Minimum 5X</p>
                      <p className="mt-4 font-semibold">Ideal for:</p>
                      <p>E-Commerce / Manufacturing Companies</p>
                      <p className="mt-4 font-semibold">ROI Factors:</p>
                      <p>
                        Rankings + Traffic + Boost in Social Media Presence + minimum 5X worth
                        business expected over the period of 6 months
                      </p>
                    </div>
                  </div>
                </div>
                {/* Static Plan Cards End */}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="border-b border-gray-300 py-8 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(1)}
        >
          <h3 className="text-[18px] md:text-3xl ml-4 md:ml-20">
            Pay Per Click Services
          </h3>
          <motion.button
            className="relative w-10 h-10 p-2 flex items-center justify-center rounded-full overflow-hidden transition-all duration-500"
            onClick={(e) => {
              e.stopPropagation();
              toggleFAQ(1);
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ backgroundColor: "#f9a86d" }}
              animate={{
                backgroundColor: openIndex === 1 ? "rgb(0, 0, 0)" : "#f9a86d",
                scale: 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: openIndex === 1 ? 0.6 : 1,
                opacity: openIndex === 1 ? 0.3 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-black"
              whileHover={{ rotate: 90 }}
            >
              <Plus size={16} />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: openIndex === 1 ? 1.2 : 0,
                opacity: openIndex === 1 ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-white"
            >
              <Minus size={16} />
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {openIndex === 1 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.4 } }}
              className="pl-2 md:pl-10 mt-8 text-gray-500 overflow-hidden text-lg"
            >
              {/* Static Plan Cards Start */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Basic Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-gray-800 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹1000<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Basic</p>
                  </div>
                  <div className="bg-gray-300 text-center py-4 font-semibold text-black">
                    Minimum Duration <br />3 Months
                  </div>
                  <div className="flex-1 bg-gray-800 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <span>Networks (Google Ads, Bing) : Any 1 </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Text Ads*</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Display Ads*</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Gmail Ads*</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Remarketing*</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Advanced Location Targeting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Advance Conversion Tracking : NO</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Competitor Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Keyword Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Landing Page Suggestion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>A/B Testing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Analytics Setup : Basic</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Report : Monthly</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Advanced Reports</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Dedicated Account Manager</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Support : Email & Chat</span>
                    </div>
                  </div>
                </div>

                {/* Pro Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-orange-400 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹2500<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Silver</p>
                  </div>
                  <div className="bg-gray-300 text-center py-4 font-semibold text-black">
                    Minimum Duration <br />3 Months
                  </div>
                  <div className="flex-1 bg-orange-400 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <span>Networks (Google Ads, Bing) : Both </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Text Ads*</span>
                    </div>
                    <div className="flex items-center gap-3">

                      <span>Display Ads* : 1 Set</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Gmail Ads*</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Remarketing*</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Advanced Location Targeting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Advance Conversion Tracking : Yes (Only On Google Ads)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Competitor Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Keyword Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Landing Page Suggestion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>A/B Testing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Analytics Setup : Basic</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Report : Monthly</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Advanced Reports</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Dedicated Account Manager</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Support : Email & Chat</span>
                    </div>
                  </div>
                </div>

                {/* Elite Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-gray-800 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹5000<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Gold</p>
                  </div>
                  <div className="bg-gray-300 text-center py-4 font-semibold text-black">
                    Minimum Duration <br />3 Months
                  </div>
                  <div className="flex-1 bg-gray-800 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <span>Networks (Google Ads, Bing) : Both </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Text Ads*</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Display Ads* : 2 Set</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Gmail Ads*</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Remarketing*</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Advanced Location Targeting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Advance Conversion Tracking : Yes (Analytics & Tag Manager)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Competitor Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Keyword Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Landing Page Suggestion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>A/B Testing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Analytics Setup : Advanced</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Report : Monthly</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Advanced Reports</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Dedicated Account Manager</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Support : Email & Chat</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Static Plan Cards End */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="border-b border-gray-300 py-8 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(2)}
        >
          <h3 className="text-[18px] md:text-3xl ml-4 md:ml-20">
            Mobile App & Web Development
          </h3>
          <motion.button
            className="relative w-10 h-10 p-2 flex items-center justify-center rounded-full overflow-hidden transition-all duration-500"
            onClick={(e) => {
              e.stopPropagation();
              toggleFAQ(2);
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ backgroundColor: "#f9a86d" }}
              animate={{
                backgroundColor: openIndex === 2 ? "rgb(0, 0, 0)" : "#f9a86d",
                scale: 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: openIndex === 2 ? 0.6 : 1,
                opacity: openIndex === 2 ? 0.3 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-black"
              whileHover={{ rotate: 90 }}
            >
              <Plus size={16} />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: openIndex === 2 ? 1.2 : 0,
                opacity: openIndex === 2 ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-white"
            >
              <Minus size={16} />
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {openIndex === 2 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.4 } }}
              className="pl-2 md:pl-10 mt-8 text-gray-500 overflow-hidden text-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Web Development */}
                <div className="p-8 rounded-2xl shadow-lg bg-gray-800 text-white">
                  <h2 className="text-2xl font-bold mb-4 text-center uppercase">Web Development</h2>
                  <ul className="text-lg space-y-3 list-disc pl-5">
                    <li>Static Website Development</li>
                    <li>Ecommerce Site</li>
                    <li>Custom CRM Development</li>
                    <li>Web Scrapping and Automation</li>
                  </ul>
                  <button className="bg-primaryColor-400 text-white font-bold py-3 rounded-xl w-full mt-6 hover:opacity-80 transition-all">
                    Explore Services
                  </button>
                </div>
                {/* Android and iOS Development */}
                <div className="p-8 rounded-2xl shadow-lg bg-amber-500 text-white">
                  <h2 className="text-2xl font-bold mb-4 text-center uppercase">Android & iOS Development</h2>
                  <ul className="text-lg space-y-3 list-disc pl-5">
                    <li>Native Android Development</li>
                    <li>Native iOS Development</li>
                    <li>Flutter Development</li>
                    <li>React Native Development</li>
                  </ul>
                  <button className="bg-gray-800 text-white font-bold py-3 rounded-xl w-full mt-6 hover:opacity-80 transition-all">
                    Explore Services
                  </button>
                </div>
                {/* Wordpress Development */}
                <div className="p-8 rounded-2xl shadow-lg bg-gray-800 text-white">
                  <h2 className="text-2xl font-bold mb-4 text-center uppercase">Wordpress Development</h2>
                  <ul className="text-lg space-y-3 list-disc pl-5">
                    <li>Static Wordpress Development</li>
                    <li>WooCommerce Development</li>
                    <li>CMS Development</li>
                    <li>Shopify Development</li>
                  </ul>
                  <button className="bg-primaryColor-400 text-white font-bold py-3 rounded-xl w-full mt-6 hover:opacity-80 transition-all">
                    Explore Services
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="border-b border-gray-300 py-8 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(3)}
        >
          <h3 className="text-[18px] md:text-3xl ml-4 md:ml-20">
            Social Media Marketing
          </h3>
          <motion.button
            className="relative w-10 h-10 p-2 flex items-center justify-center rounded-full overflow-hidden transition-all duration-500"
            onClick={(e) => {
              e.stopPropagation();
              toggleFAQ(3);
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ backgroundColor: "#f9a86d" }}
              animate={{
                backgroundColor: openIndex === 3 ? "rgb(0, 0, 0)" : "#f9a86d",
                scale: 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: openIndex === 3 ? 0.6 : 1,
                opacity: openIndex === 3 ? 0.3 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-black"
              whileHover={{ rotate: 90 }}
            >
              <Plus size={16} />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: openIndex === 3 ? 1.2 : 0,
                opacity: openIndex === 3 ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-white"
            >
              <Minus size={16} />
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {openIndex === 3 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.4 } }}
              className="pl-2 md:pl-10 mt-8 text-gray-500 overflow-hidden text-lg"
            >
              {/* Static Plan Cards Start */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Basic Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-gray-800 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹550<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Basic</p>
                  </div>
                  <div className="bg-gray-300 text-center py-4 font-semibold text-black">
                    Upto 2 Platforms
                  </div>
                  <div className="flex-1 bg-gray-800 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <span>No. of Creatives: 15</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Boosted Posts Per Month	: 3</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Boosted Post Budget (included): ₹100	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>IG REELS Included: 1	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Targeted Ad Creation:  2 Ads</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Profile Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Create Social Media Calendar</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Post Boosting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Advertisement Strategy</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Competitive Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Paid Campaign Suggestions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Vertical Content Creation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Profile Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Project Management Tool Tracking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Identify Business Goals</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Keyword Analysis & Target Market Research</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Advertisement Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Banner Creation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Ad Testing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Campaign Structure Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Remarketing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Detailed Monthly Reporting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Story ADs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Reel ADs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Catalogue ADs/ Shop ADs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Email, Chat, Phone</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Project Management Tool Tracking</span>
                    </div>
                  </div>
                </div>
                {/* Pro Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-orange-400 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹750<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Pro</p>
                  </div>
                  <div className="bg-orange-300 text-center py-4 font-semibold text-white">
                    Upto 3 Platforms
                  </div>
                  <div className="flex-1 bg-orange-400 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <span>No. of Creatives: 22</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Boosted Posts Per Month	: 8</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Boosted Post Budget (included): ₹150	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>IG REELS Included: 2	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Targeted Ad Creation:  4 Ads</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Profile Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Create Social Media Calendar</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Post Boosting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Advertisement Strategy</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Competitive Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Paid Campaign Suggestions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Vertical Content Creation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Profile Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Project Management Tool Tracking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Identify Business Goals</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Keyword Analysis & Target Market Research</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Advertisement Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Banner Creation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Ad Testing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Campaign Structure Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Remarketing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Detailed Monthly Reporting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Story ADs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Reel ADs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Catalogue ADs/ Shop ADs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Email, Chat, Phone</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Project Management Tool Tracking</span>
                    </div>
                  </div>
                </div>
                {/* Elite Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-gray-800 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹950<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Elite</p>
                  </div>
                  <div className="bg-gray-300 text-center py-4 font-semibold text-black">
                    Upto 4 Platforms
                  </div>
                  <div className="flex-1 bg-gray-800 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <span>No. of Creatives: 30</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Boosted Posts Per Month	: 10</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Boosted Post Budget (included): ₹250	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>IG REELS Included: 3	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Targeted Ad Creation:  6 Ads</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Profile Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Create Social Media Calendar</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Post Boosting</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Advertisement Strategy</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Competitive Analysis</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Paid Campaign Suggestions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Vertical Content Creation</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Profile Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Project Management Tool Tracking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Identify Business Goals</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Keyword Analysis & Target Market Research</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Advertisement Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Banner Creation</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Ad Testing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Campaign Structure Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Remarketing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Detailed Monthly Reporting</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Story ADs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Reel ADs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Catalogue ADs/ Shop ADs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Email, Chat, Phone</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Project Management Tool Tracking</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Static Plan Cards End */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="border-b border-gray-300 py-8 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(4)}
        >
          <h3 className="text-[18px] md:text-3xl ml-4 md:ml-20">
            Voice Search Optimization
          </h3>
          <motion.button
            className="relative w-10 h-10 p-2 flex items-center justify-center rounded-full overflow-hidden transition-all duration-500"
            onClick={(e) => {
              e.stopPropagation();
              toggleFAQ(4);
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ backgroundColor: "#f9a86d" }}
              animate={{
                backgroundColor: openIndex === 4 ? "rgb(0, 0, 0)" : "#f9a86d",
                scale: 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: openIndex === 4 ? 0.6 : 1,
                opacity: openIndex === 4 ? 0.3 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-black"
              whileHover={{ rotate: 90 }}
            >
              <Plus size={16} />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: openIndex === 4 ? 1.2 : 0,
                opacity: openIndex === 4 ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-white"
            >
              <Minus size={16} />
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {openIndex === 4 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.4 } }}
              className="pl-2 md:pl-10 mt-8 text-gray-500 overflow-hidden text-lg"
            >
              {/* Static Plan Cards Start */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Basic Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-gray-800 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹250<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Startup</p>
                  </div>
                  <div className="bg-gray-300 text-center py-4 font-semibold text-black">
                    <span>Keywords Plan: Upto 5</span>
                  </div>
                  <div className="flex-1 bg-gray-800 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> In-Depth Site Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Duplicate Content Check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Competition Analysis: 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Keyword Analysis & Long Tail Voice Search Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Baseline Ranking Check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span> Review Mobile UI/UX Issues</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Research Mobile Content Sections Layouts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Review CTA & Buttons on Mobile</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Mobile Friendly Test & Suggestions to Fix Possible Errors</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Featured Snippets Research & Recommendations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>FAQ Content/Topic Research & Page Creation Suggestion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Page Load Time Testing(Pingdom) & Suggest</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Existing Content Optimization As Per Voice Search</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Voice Schema Tag Implementation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Canonicalization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Heading & Sub-Heading Analysis As per Voice Search</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Internal Link Structuring & Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Robots.Txt Creation/Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Xml Sitemap/Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google Webmaster Tools Set Up (if not set up)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Desktop Page Speed Optimization*</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Image & Hyperlink Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Title & Meta Tags Optimization : Targeted Pages</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Website usability analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Google Webmasters Mobility Recommendations to Fix</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Address add to current website page[s]</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google Business Profile Setup & Verification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>GBP Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>NAP Syndication</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>GBP Image upload and Optimization (If Provided)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Blog Writing : 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Classified Writing : 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Article Writing : 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Blog Submission : 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Article Submission : 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Blog Promotion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Company Profile Listing: 5</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Classified Submissions	: 5</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Article Promotion	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Q & A Submissions : 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Competitor Link Analysis and Creation : 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Content Syndication : 4</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Voice Search Ranking Report </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>SEO Activity Reports </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Email, Chat, Phone </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Project Management Tool Tracking</span>
                    </div>
                  </div>
                </div>
                {/* Pro Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-orange-400 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹500<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Growth</p>
                  </div>
                  <div className="bg-orange-300 text-center py-4 font-semibold text-white">
                    <span>Keywords Plan: Upto 10</span>
                  </div>
                  <div className="flex-1 bg-orange-400 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> In-Depth Site Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Duplicate Content Check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Competition Analysis: 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Keyword Analysis & Long Tail Voice Search Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Baseline Ranking Check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Review Mobile UI/UX Issues</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Research Mobile Content Sections Layouts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Review CTA & Buttons on Mobile</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Mobile Friendly Test & Suggestions to Fix Possible Errors</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Featured Snippets Research & Recommendations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>FAQ Content/Topic Research & Page Creation Suggestion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Page Load Time Testing(Pingdom) & Suggest</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Existing Content Optimization As Per Voice Search</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Voice Schema Tag Implementation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Canonicalization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Heading & Sub-Heading Analysis As per Voice Search</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Internal Link Structuring & Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Robots.Txt Creation/Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Xml Sitemap/Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google Webmaster Tools Set Up (if not set up)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Desktop Page Speed Optimization*</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Image & Hyperlink Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Title & Meta Tags Optimization : Targeted Pages</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Website usability analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google Webmasters Mobility Recommendations to Fix</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Address add to current website page[s]</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google Business Profile Setup & Verification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>GBP Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>NAP Syndication</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>GBP Image upload and Optimization (If Provided)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Blog Writing : 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Classified Writing : 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Article Writing : 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Blog Submission : 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Article Submission : 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Blog Promotion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Company Profile Listing: 7</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Classified Submissions	: 8</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Article Promotion	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Q & A Submissions : 3</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Competitor Link Analysis and Creation : 5</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Content Syndication : 8</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Voice Search Ranking Report </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>SEO Activity Reports </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Email, Chat, Phone </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Project Management Tool Tracking</span>
                    </div>
                  </div>
                </div>
                {/* Elite Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-gray-800 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹700<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Premium</p>
                  </div>
                  <div className="bg-gray-300 text-center py-4 font-semibold text-black">
                    <span>Keywords Plan: Upto 20</span>
                  </div>
                  <div className="flex-1 bg-gray-800 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> In-Depth Site Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Duplicate Content Check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Competition Analysis: 3</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Keyword Analysis & Long Tail Voice Search Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Baseline Ranking Check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Review Mobile UI/UX Issues</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Research Mobile Content Sections Layouts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Review CTA & Buttons on Mobile</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Mobile Friendly Test & Suggestions to Fix Possible Errors</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Featured Snippets Research & Recommendations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>FAQ Content/Topic Research & Page Creation Suggestion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Page Load Time Testing(Pingdom) & Suggest</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Existing Content Optimization As Per Voice Search</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Voice Schema Tag Implementation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Canonicalization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Heading & Sub-Heading Analysis As per Voice Search</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Internal Link Structuring & Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Robots.Txt Creation/Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Xml Sitemap/Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google Webmaster Tools Set Up (if not set up)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Desktop Page Speed Optimization*</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Image & Hyperlink Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Title & Meta Tags Optimization : Targeted Pages</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Website usability analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google Webmasters Mobility Recommendations to Fix</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Address add to current website page[s]</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google Business Profile Setup & Verification</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>GBP Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>NAP Syndication</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>GBP Image upload and Optimization (If Provided)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Blog Writing : 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Classified Writing : 4</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Article Writing : 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Blog Submission : 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Article Submission : 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Blog Promotion :  5</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Company Profile Listing: 10</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Classified Submissions	: 12</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Article Promotion :  5	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Q & A Submissions : 4</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Competitor Link Analysis and Creation : 8</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Content Syndication : 10</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Voice Search Ranking Report </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>SEO Activity Reports </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Email, Chat, Phone </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Project Management Tool Tracking</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Static Plan Cards End */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="border-b border-gray-300 py-8 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(5)}
        >
          <h3 className="text-[18px] md:text-3xl ml-4 md:ml-20">
            Youtube Marketing Packages
          </h3>
          <motion.button
            className="relative w-10 h-10 p-2 flex items-center justify-center rounded-full overflow-hidden transition-all duration-500"
            onClick={(e) => {
              e.stopPropagation();
              toggleFAQ(5);
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ backgroundColor: "#f9a86d" }}
              animate={{
                backgroundColor: openIndex === 5 ? "rgb(0, 0, 0)" : "#f9a86d",
                scale: 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: openIndex === 5 ? 0.6 : 1,
                opacity: openIndex === 5 ? 0.3 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-black"
              whileHover={{ rotate: 90 }}
            >
              <Plus size={16} />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: openIndex === 5 ? 1.2 : 0,
                opacity: openIndex === 5 ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-white"
            >
              <Minus size={16} />
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {openIndex === 5 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.4 } }}
              className="pl-2 md:pl-10 mt-8 text-gray-500 overflow-hidden text-lg"
            >
              {/* Static Plan Cards Start */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Basic Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-gray-800 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹250<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Value</p>
                  </div>
                  <div className="bg-gray-300 text-center py-4 font-semibold text-black">
                    Minimum Duration <br />3 Months
                  </div>
                  <div className="flex-1 bg-gray-800 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>YouTube Channel Creation (If Not Setup)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Optimize YouTube Channel</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Branded Content Writing for YouTube Channel : 250 Words</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Video Channel Analysis (If Already Exist)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Existing Videos Analysis (If Already Exist)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>YouTube Keyword Research</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Baseline Ranking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>  Video Title Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Video Description Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Video Tags Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Channel Tags Optimization (One Time)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Suggestions for Video Cards and Other (Recommendations Only)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Suggestions for Video Embedding (Within the Website)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Increase YouTube Views* : 10%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Increase Vidoe Likes* : 10%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Increase Channel Subscribers* : 10%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Article Writing and Submission</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Blog Post Writing and Updation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Embedding Videos in Articles/Blogs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Social Sharing or Videos and Blog</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Q&As and Forums</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Embedding/Sharing Videos on Q&A</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Micro-Blogging</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Guest Post Writing and Updating</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Embedding/Sharing Videos in Guest Posts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Social Bookmarking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Video Submissions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Email & Chat</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Phone</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Project Management Tool Tracking</span>
                    </div>
                  </div>
                </div>
                {/* Pro Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-orange-400 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹500<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Standard</p>
                  </div>
                  <div className="bg-gray-300 text-center py-4 font-semibold text-black">
                    Minimum Duration <br />3 Months
                  </div>
                  <div className="flex-1 bg-orange-400 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> YouTube Channel Creation (If Not Setup)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Optimize YouTube Channel</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Branded Content Writing for YouTube Channel : 250 Words</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Video Channel Analysis (If Already Exist)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Existing Videos Analysis (If Already Exist)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>YouTube Keyword Research</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Baseline Ranking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>  Video Title Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Video Description Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Video Tags Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Channel Tags Optimization (One Time)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Suggestions for Video Cards and Other (Recommendations Only)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Suggestions for Video Embedding (Within the Website)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Increase YouTube Views* : 20%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Increase Vidoe Likes* : 20%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Increase Channel Subscribers* : 20%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Article Writing and Submission</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Blog Post Writing and Updation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Embedding Videos in Articles/Blogs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Social Sharing or Videos and Blog</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Q&As and Forums</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Embedding/Sharing Videos on Q&A</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Micro-Blogging</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Guest Post Writing and Updating</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Embedding/Sharing Videos in Guest Posts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Social Bookmarking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Video Submissions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Email & Chat</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Phone</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Project Management Tool Tracking</span>
                    </div>
                  </div>
                </div>
                {/* Elite Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-gray-800 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹750<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Premium</p>
                  </div>
                  <div className="bg-gray-300 text-center py-4 font-semibold text-black">
                    Minimum Duration <br />3 Months
                  </div>
                  <div className="flex-1 bg-gray-800 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>YouTube Channel Creation (If Not Setup)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Optimize YouTube Channel</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Branded Content Writing for YouTube Channel : 250 Words</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Video Channel Analysis (If Already Exist)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Existing Videos Analysis (If Already Exist)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>YouTube Keyword Research</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Baseline Ranking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>  Video Title Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Video Description Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Video Tags Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Channel Tags Optimization (One Time)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Suggestions for Video Cards and Other (Recommendations Only)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Suggestions for Video Embedding (Within the Website)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Increase YouTube Views* : 30%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Increase Vidoe Likes* : 30%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Increase Channel Subscribers* : 30%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Article Writing and Submission</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Blog Post Writing and Updation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Embedding Videos in Articles/Blogs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Social Sharing or Videos and Blog</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Q&As and Forums</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Embedding/Sharing Videos on Q&A</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Micro-Blogging</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Guest Post Writing and Updating</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Embedding/Sharing Videos in Guest Posts</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Social Bookmarking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Video Submissions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Email & Chat</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Phone</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Project Management Tool Tracking</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Static Plan Cards End */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="border-b border-gray-300 py-8 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(6)}
        >
          <h3 className="text-[18px] md:text-3xl ml-4 md:ml-20">
            Content Marketing Packages
          </h3>
          <motion.button
            className="relative w-10 h-10 p-2 flex items-center justify-center rounded-full overflow-hidden transition-all duration-500"
            onClick={(e) => {
              e.stopPropagation();
              toggleFAQ(6);
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ backgroundColor: "#f9a86d" }}
              animate={{
                backgroundColor: openIndex === 6 ? "rgb(0, 0, 0)" : "#f9a86d",
                scale: 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: openIndex === 6 ? 0.6 : 1,
                opacity: openIndex === 6 ? 0.3 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-black"
              whileHover={{ rotate: 90 }}
            >
              <Plus size={16} />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: openIndex === 6 ? 1.2 : 0,
                opacity: openIndex === 6 ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-white"
            >
              <Minus size={16} />
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {openIndex === 6 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.4 } }}
              className="pl-2 md:pl-10 mt-8 text-gray-500 overflow-hidden text-lg"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Web Development */}
                <div className="p-8 rounded-2xl shadow-lg bg-gray-800 text-white">
                  <div className="bg-gray-800 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹160<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Value</p>
                  </div>
                  <ul className="text-lg space-y-3 list-disc pl-5">
                    <li>2 Blogs Writing & Publishing</li>
                    <li>2 Article Writing & Publishing </li>
                    <li>DA 25-40</li>
                    <li>High Quality Image For Blogs</li>
                    <li>Blog: 300 Words Article: 500 Words Content</li>
                    <li>Turnaround Time – 5 Working Days</li>
                  </ul>
                  <button className="bg-primaryColor-400 text-white font-bold py-3 rounded-xl w-full mt-6 hover:opacity-80 transition-all">
                    Explore Services
                  </button>
                </div>
                {/* Android and iOS Development */}
                <div className="p-8 rounded-2xl shadow-lg bg-amber-500 text-white">
                  <div className="bg-orange-400 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹550<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">SILVER</p>
                  </div>
                  <ul className="text-lg space-y-3 list-disc pl-5">
                    <li>8 Blogs Writing & Publishing</li>
                    <li>8 Article Writing & Publishing </li>
                    <li>DA 25-55</li>
                    <li>High Quality Image For Blogs</li>
                    <li>Blog: 300 Words Article: 500 Words Content</li>
                    <li>Turnaround Time – 15 Working Days</li>
                  </ul>
                  <button className="bg-gray-800 text-white font-bold py-3 rounded-xl w-full mt-6 hover:opacity-80 transition-all">
                    Explore Services
                  </button>
                </div>
                {/* Wordpress Development */}
                <div className="p-8 rounded-2xl shadow-lg bg-gray-800 text-white">
                  <div className="bg-gray-800 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹999<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">GOLD</p>
                  </div>
                  <ul className="text-lg space-y-3 list-disc pl-5">
                    <li>15 Blogs Writing & Publishing</li>
                    <li>15 Article Writing & Publishing</li>
                    <li>DA 25-65</li>
                    <li>High Quality Image For Blogs</li>
                    <li>Blog: 300 Words Article: 500 Words Content</li>
                    <li>Turnaround Time – 25 Working Days</li>
                  </ul>
                  <button className="bg-primaryColor-400 text-white font-bold py-3 rounded-xl w-full mt-6 hover:opacity-80 transition-all">
                    Explore Services
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="border-b border-gray-300 py-8 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(7)}
        >
          <h3 className="text-[18px] md:text-3xl ml-4 md:ml-20">
            App Store Optimization Packages
          </h3>
          <motion.button
            className="relative w-10 h-10 p-2 flex items-center justify-center rounded-full overflow-hidden transition-all duration-500"
            onClick={(e) => {
              e.stopPropagation();
              toggleFAQ(4);
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ backgroundColor: "#f9a86d" }}
              animate={{
                backgroundColor: openIndex === 7 ? "rgb(0, 0, 0)" : "#f9a86d",
                scale: 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: openIndex === 7 ? 0.6 : 1,
                opacity: openIndex === 7 ? 0.3 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-black"
              whileHover={{ rotate: 90 }}
            >
              <Plus size={16} />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: openIndex === 7 ? 1.2 : 0,
                opacity: openIndex === 7 ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-white"
            >
              <Minus size={16} />
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {openIndex === 7 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.4 } }}
              className="pl-2 md:pl-10 mt-8 text-gray-500 overflow-hidden text-lg"
            >
              {/* Static Plan Cards Start */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Basic Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-gray-800 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹450<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Startup</p>
                  </div>
                  <div className="bg-gray-300 text-center py-4 font-semibold text-black">
                    <span> Duration of Plan: 6 Month</span>
                  </div>
                  <div className="flex-1 bg-gray-800 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <span>Platform : 1 (Android or IOS)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Initial Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Keyword Research</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Baseline App Ranking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Competitive Analysis : 1 Competitor</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Title Optimization with keywords</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Description Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Keywords Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Icon</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Type & Category Selection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Image Gallary Check & Suggestions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Ratings & Reviews</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Total App Downloads : 300</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Article Creation: 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Blog Creation: 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Classifieds Creation: 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Infographics Creation: 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Guest Post Creation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Review Posting/Start Rating: 5</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Local Classifieds Submissions	: 5</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>App Listing	: 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Business Listing Promotion	: 5</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Article Submission	: 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Article Promotions	: 5</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Blog Submission	: 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Blog Promotion	: 10</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Infographic Submission	: 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Forum Posting	: 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>App Link Promotion on Social Media Platforms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>App Video Promotion on Facebook*(Video Provided by Client)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Facebook App Install Ads*(Additional Cost)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>YouTube App Install Ads*(Additional Cost)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Analytics Report(ASO Tool Integrated Report)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Rank Reporting and Downloads Report</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Monthly Work Report</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Customer Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Email, Chat, Phone</span>
                    </div>

                  </div>
                </div>
                {/* Pro Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-orange-400 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹950<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Medium</p>
                  </div>
                  <div className="bg-orange-300 text-center py-4 font-semibold text-white">
                    <span> Duration of Plan: 6 Month</span>
                  </div>
                  <div className="flex-1 bg-orange-400 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <span>Platform : 1 2 (Android + IOS)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Initial Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Keyword Research</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Baseline App Ranking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Competitive Analysis : 2 Competitors</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Title Optimization with keywords</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Description Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Keywords Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Icon</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Type & Category Selection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Image Gallary Check & Suggestions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Ratings & Reviews</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Total App Downloads : 800</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Article Creation: 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Blog Creation: 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Classifieds Creation: 3</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Infographics Creation: 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Guest Post Creation : 1</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Review Posting/Start Rating: 10</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Local Classifieds Submissions	: 15</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>App Listing	: 5</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Business Listing Promotion	: 10</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Article Submission	: 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Article Promotions	: 10</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Blog Submission	: 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Blog Promotion	: 10</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Infographic Submission	: 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Forum Posting	: 3</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Link Promotion on Social Media Platforms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Video Promotion on Facebook*(Video Provided by Client)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Facebook App Install Ads*(Additional Cost)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>YouTube App Install Ads*(Additional Cost)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Analytics Report(ASO Tool Integrated Report)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Rank Reporting and Downloads Report</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Monthly Work Report</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Customer Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Email, Chat, Phone</span>
                    </div>

                  </div>
                </div>
                {/* Elite Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-gray-800 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹1500<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Growth</p>
                  </div>
                  <div className="bg-gray-300 text-center py-4 font-semibold text-black">
                    <span> Duration of Plan: 6 Month</span>
                  </div>
                  <div className="flex-1 bg-gray-800 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <span>Platform : 1 2 (Android + IOS)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Initial Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Keyword Research</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Baseline App Ranking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Competitive Analysis : 2 Competitors</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Title Optimization with keywords</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Description Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Keywords Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Icon</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Type & Category Selection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Image Gallary Check & Suggestions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Ratings & Reviews</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Total App Downloads : 1300</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Article Creation: 3</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Blog Creation: 3</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Classifieds Creation: 5</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Infographics Creation: 3</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Guest Post Creation : 2</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Review Posting/Start Rating: 15</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Local Classifieds Submissions	: 25</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>App Listing	: 7</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Business Listing Promotion	: 15</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Article Submission	: 3</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Article Promotions	: 15</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Blog Submission	: 3</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Blog Promotion	: 15</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Infographic Submission	: 3</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Forum Posting	: 5</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Link Promotion on Social Media Platforms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Video Promotion on Facebook*(Video Provided by Client)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Facebook App Install Ads*(Additional Cost)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>YouTube App Install Ads*(Additional Cost)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>App Analytics Report(ASO Tool Integrated Report)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Rank Reporting and Downloads Report</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Monthly Work Report</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Customer Support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Email, Chat, Phone</span>
                    </div>

                  </div>
                </div>
              </div>
              {/* Static Plan Cards End */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="border-b border-gray-300 py-8 px-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={() => toggleFAQ(8)}
        >
          <h3 className="text-[18px] md:text-3xl ml-4 md:ml-20">
            Conversion Rate Optimization (CRO)
          </h3>
          <motion.button
            className="relative w-10 h-10 p-2 flex items-center justify-center rounded-full overflow-hidden transition-all duration-500"
            onClick={(e) => {
              e.stopPropagation();
              toggleFAQ(8);
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full"
              initial={{ backgroundColor: "#f9a86d" }}
              animate={{
                backgroundColor: openIndex === 8 ? "rgb(0, 0, 0)" : "#f9a86d",
                scale: 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
            <motion.div
              initial={{ scale: 1, opacity: 1 }}
              animate={{
                scale: openIndex === 8 ? 0.6 : 1,
                opacity: openIndex === 8 ? 0.3 : 1,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-black"
              whileHover={{ rotate: 90 }}
            >
              <Plus size={16} />
            </motion.div>
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: openIndex === 8 ? 1.2 : 0,
                opacity: openIndex === 8 ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="absolute text-white"
            >
              <Minus size={16} />
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {openIndex === 8 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0, transition: { duration: 0.4 } }}
              className="pl-2 md:pl-10 mt-8 text-gray-500 overflow-hidden text-lg"
            >
              {/* Static Plan Cards Start */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Basic Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-gray-800 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹2000<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Starter</p>
                  </div>
                  <div className="bg-gray-300 text-center py-4 font-semibold text-black">
                    Keywords<br />150
                  </div>
                  <div className="flex-1 bg-gray-800 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> In-Depth Site Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Duplicate Content Check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Initial Rank Report</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Website structure check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Canonical check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Broken link check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Page load check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google Penalty Check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>W3C validation check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Internal structure check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Backlink/inbound links analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Online reputation check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Cross Browser Compatibility</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Keyword rank tracking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Sitemap check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Robots.txt check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>URL Structure analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Social Metrics analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Initial Phone Consultation : 15 minutes	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Keyword Research : 20	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Branded Keyword</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Competition Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Link building strategy</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google & Bing Webmaster Tools</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google analytics integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <X />
                      <span>Brand synchronization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>404 Page Creation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Conversion setup : 1 form</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Canonicalization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span> Content Optimization : Targeted Pages</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Website Page Load Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>HTML Code Clean-up Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Pages H tags optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Anchor Tag Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>URL Structure optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Header Tags Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Schema Mark-up Implementation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Robots.txt Creation/Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Image & Hyperlink Optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>HTML & XML Sitemap</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Web Pages Optimized : Targeted Pages</span>
                    </div>


                  </div>
                </div>
                {/* Pro Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-orange-400 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹3500<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Booster</p>
                  </div>
                  <div className="bg-gray-300 text-center py-4 font-semibold text-black">
                    Keywords<br />200
                  </div>
                  <div className="flex-1 bg-orange-400 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> In-Depth Site Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Duplicate Content Check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Initial Rank Report</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Website structure check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Canonical check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Broken link check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Page load check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google Penalty Check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>W3C validation check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Internal structure check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Backlink/inbound links analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Online reputation check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Cross Browser Compatibility</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Keyword rank tracking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Sitemap check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Robots.txt check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>URL Structure analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Social Metrics analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Initial Phone Consultation : 1 hour	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Keyword Research : 50	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Branded Keyword : for 3 brands</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Competition Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Link building strategy</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google & Bing Webmaster Tools</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google analytics integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Brand synchronization : for 3 brands</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>404 Page Creation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Conversion setup : 2 forms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Canonicalization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span> Content Optimization : 20</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Website Page Load Optimization: 20</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>HTML Code Clean-up Optimization : 20</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Pages H tags optimization : 20	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Anchor Tag Optimization : 20	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>URL Structure optimization : 20	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Header Tags Optimization : 20	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Schema Mark-up Implementation : 20	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Robots.txt Creation/Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Image & Hyperlink Optimization : 20</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>HTML & XML Sitemap</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Web Pages Optimized : 20</span>
                    </div>

                  </div>
                </div>
                {/* Elite Plan */}
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col">
                  <div className="bg-gray-800 text-center py-6">
                    <h3 className="text-4xl font-bold text-white">₹5000<span className="text-lg">/Mo</span></h3>
                    <p className="text-xl text-white mt-2">Premium</p>
                  </div>
                  <div className="bg-gray-300 text-center py-4 font-semibold text-black">
                    Keywords<br />250
                  </div>
                  <div className="flex-1 bg-gray-800 text-white p-6 space-y-6">
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> In-Depth Site Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Duplicate Content Check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Initial Rank Report</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Website structure check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Canonical check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Broken link check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Page load check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google Penalty Check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>W3C validation check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Internal structure check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Backlink/inbound links analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Online reputation check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Cross Browser Compatibility</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Keyword rank tracking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Sitemap check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Robots.txt check</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>URL Structure analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Social Metrics analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Initial Phone Consultation : 1+1 hours</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Keyword Research : 100	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Branded Keyword : for 5 brands</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Competition Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Link building strategy</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google & Bing Webmaster Tools</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Google analytics integration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Brand synchronization : for 5 brands</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>404 Page Creation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Conversion setup : 5 forms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span> Canonicalization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span> Content Optimization : 50</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Website Page Load Optimization: 50</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>HTML Code Clean-up Optimization : 50</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Pages H tags optimization : 50	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Anchor Tag Optimization : 50	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>URL Structure optimization : 50	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Header Tags Optimization : 50	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Schema Mark-up Implementation : 50	</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>Robots.txt Creation/Analysis</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Image & Hyperlink Optimization : 50</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckIcon />
                      <span>HTML & XML Sitemap</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>Web Pages Optimized : 50</span>
                    </div>


                  </div>
                </div>
              </div>
              {/* Static Plan Cards End */}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}


