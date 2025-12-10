"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import axios from "axios";
import { motion } from "framer-motion";
import popupImg from "../../public/assets/img/logo-ftdigitalsolutions-123.png";

const SubscribePopup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // Show popup after 8 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
    }, 8000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      mobile: number,
      services: service,
      description: message,
    };

    try {
      const response = await axios.post(
        "https://ftdsapi.ftdigitalsolutions.org/user/create/",
        payload
      );

      if (response?.data) {
        setIsOpen(false);
      }
    } catch (error) {
      console.error("Form submit failed:", error);
    }

    // Reset fields
    setName("");
    setEmail("");
    setNumber("");
    setService("");
    setMessage("");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="bg-white rounded-2xl shadow-lg w-full max-w-md mx-4 sm:mx-auto overflow-auto max-h-[95vh]"
      >
        <div className="relative">
          <button
            onClick={() => {
              setIsOpen(false);
              document.body.style.overflow = "auto";
            }}
            className="absolute top-2 right-4 text-black border border-black rounded-full p-1 z-50"
          >
            <X size={20} />
          </button>

          <Image
            src={popupImg}
            alt="FT Digital Solutions"
            className="w-auto mx-auto h-[60px] mt-2"
          />

          <form
            onSubmit={handleSubmit}
            className="px-4 py-2 flex flex-col bg-white justify-center space-y-4 max-h-[90vh]"
          >
            <h2 className="text-gray-900 mx-auto text-2xl font-bold mb-2">
              Request a FREE Call!
            </h2>

            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-500 px-4 py-2 rounded-md"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-500 px-4 py-2 rounded-md"
            />

            <input
              type="number"
              name="number"
              placeholder="Mobile"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="border border-gray-500 px-4 py-2 rounded-md"
            />

            <select
              name="service"
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="border border-gray-500 px-4 py-2 rounded-md"
            >
              <option value="" disabled>
                Select a service
              </option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="SEO Optimization">SEO Optimization</option>
              <option value="Google Ads Marketing">Google Ads Marketing</option>
              <option value="Facebook & Instagram Marketing">
                Facebook & Instagram Marketing
              </option>
              <option value="Influencer Marketing">Influencer Marketing</option>
              <option value="Bulk SMS Marketing">Bulk SMS Marketing</option>
              <option value="Signage & Hoardings">Signage & Hoardings</option>
              <option value="CMS Development">CMS Development</option>
            </select>

            <textarea
              name="message"
              placeholder="Enter your message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="border border-gray-500 px-4 py-2 rounded-md"
            />

            <button
              type="submit"
              className="relative flex items-center justify-center bg-black text-white px-6 py-2 mx-auto rounded-full overflow-hidden transition-all duration-500 group"
            >
              <span className="relative z-10 transition-all duration-300 group-hover:translate-x-[-10px]">
                Submit
              </span>
              <div className="absolute w-6 h-6 bg-primaryColor rounded-full flex items-center justify-center ml-16 scale-0 transition-transform duration-500 ease-out group-hover:scale-100 z-10">
                <ArrowRight
                  size={16}
                  className="text-white transition-transform duration-500 ease-out group-hover:translate-x-0 translate-x-[-10px]"
                />
              </div>
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SubscribePopup;
