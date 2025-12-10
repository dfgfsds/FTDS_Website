'use client';

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const HelpSection: React.FC = () => {
  const items: string[] = [
    "discovery",
    "strategy",
    "implementation",
    "measurement",
    "reporting",
    "scaling",
  ];
  
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const textRefs = useRef<Record<string, HTMLParagraphElement | null>>({});
  const [textWidths, setTextWidths] = useState<Record<string, number>>({});

  useEffect(() => {
    const newTextWidths: Record<string, number> = {};
    Object.keys(textRefs.current).forEach((key) => {
      if (textRefs.current[key]) {
        newTextWidths[key] = textRefs.current[key]!.offsetWidth;
      }
    });
    setTextWidths(newTextWidths);
  }, [selectedIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Images from public folder
  const images: Record<string, string> = {
    discovery: "/assets/img/how_we/1.webp",
    strategy: "/assets/img/how_we/2.webp",
    implementation: "/assets/img/how_we/3.webp",
    measurement: "/assets/img/how_we/4.webp",
    reporting: "/assets/img/how_we/5.webp",
    scaling: "/assets/img/how_we/6.webp",
  };

  const content: Record<string, { title: string; description: string }> = {
    discovery: {
      title: "1. Discovery & Audit",
      description:
        "We start with a deep dive: your business, competitors, audience, and current digital presence. We audit your site, traffic, keyword footprint, content and backlink profile.",
    },
    strategy: {
      title: "2. Strategy & Roadmap",
      description:
        "Based on insights, we build a customised roadmap covering SEO, PPC, content, social, CRO, and brand. Priorities and phases are clearly outlined.",
    },
    implementation: {
      title: "3. Implementation & Execution",
      description:
        "Our teams execute in parallel: content creation, technical fixes, campaigns, and outreach. We test, optimise, and iterate.",
    },
    measurement: {
      title: "4. Measurement & Optimization",
      description:
        "We track performance constantly. Metrics guide us to refine ad spend, tweak SEO, adjust content, fix bottlenecks.",
    },
    reporting: {
      title: "5. Reporting & Collaboration",
      description:
        "You get monthly reports, dashboards, insights, and strategic reviews. We work collaboratively - your feedback, combined with our expertise, shapes the path.",
    },
    scaling: {
      title: "6. Scaling & Growth",
      description:
        "As performance improves, we scale successful campaigns, double down on winning strategies, and expand into new growth areas.",
    },
  };

  return (
    <div className="flex flex-col md:flex-row mx-4 my-8 h-auto md:h-screen items-center gap-8">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={items[selectedIndex]}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="w-full h-56 md:h-screen rounded-lg overflow-hidden relative"
          >
            <Image
              src={images[items[selectedIndex]]}
              alt={items[selectedIndex]}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
              priority
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-12">
        <span className="text-2xl md:text-3xl my-8 font-semibold ">How We Work</span>
        <p className="text-base text-gray-600 mb-6">
          We follow a structured methodology to deliver results reliably:
        </p>

        {/* Step Navigation */}
        <div className="space-y-6">
          {items.map((item, index) => (
            <div
              key={item}
              className="relative cursor-pointer"
              onClick={() => setSelectedIndex(index)}
            >
              <p
                ref={(el:any) => (textRefs.current[item] = el)}
                className={`inline-block transition-colors ${
                  selectedIndex === index ? "text-black" : "text-gray-400"
                }`}
              >
                <span className="text-3xl md:text-5xl 2xl:text-6xl font-medium">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </span>
              </p>

              {/* Underline */}
              {selectedIndex === index && (
                <div className="relative mt-2">
                  <span
                    className="absolute left-0 h-1 bg-gray-300 w-full"
                    style={{ width: textWidths[item] || 0 }}
                  />
                  <motion.span
                    className="absolute left-0 h-1 bg-black"
                    initial={{ width: "0%" }}
                    animate={{ width: `${textWidths[item] || 0}px` }}
                    transition={{ duration: 3, ease: "linear" }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={items[selectedIndex]}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="text-xl font-semibold">
                {content[items[selectedIndex]].title}
              </div>
              <p className="text-lg font-normal text-gray-500 mt-2">
                {content[items[selectedIndex]].description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default HelpSection;
