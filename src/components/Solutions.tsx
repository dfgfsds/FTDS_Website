'use client';

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Solutions() {
  const solutions = [
    { id: "01", title: "Web Development", link: '/service/best-web-development-company-in-chennai' },
    { id: "02", title: "App Development", link: '/service/app-development-in-chennai' },
    { id: "03", title: "Digital Marketing", link: '/service/digital-marketing' },
    { id: "04", title: "Social Media Marketing", link: '/service/social-media-marketing' },
    { id: "05", title: "Photoshoot and Video Production", link: '/service/product-video-photoshoot' },
    { id: "06", title: "Google Ad words", link: '/service/google-ads-marketing-company' },
    { id: "07", title: "Facebook & Instagram Marketing", link: '/service/facebook-instagram-marketing' },
    { id: "08", title: "Brand Design Services", link: '/service/branding-design-in-chennai' },
    { id: "09", title: "SEO Services", link: '/service/seo-services' },
    { id: "10", title: "Outdoor Marketing", link: '/service/outdoor-media-in-chennai' },
  ];

  return (
    <section className="mx-auto px-8 py-16">
      <div className="mt-10">
        <h2 className="text-xl md:text-4xl font-bold mb-4">What services we offer</h2>

        <div className="space-y-6">
          {solutions.map((solution, index) => (
            <Link href={solution.link} key={index}>
              <motion.div
                className="relative w-full grid grid-cols-[auto_1fr_auto] border-2 border-gray-300 md:border-b-2 md:border-0 md:rounded-none rounded-md px-4 py-6 cursor-pointer transition-transform duration-300 overflow-hidden mt-2"
                whileHover="hover"
                initial="initial"
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1 },
                }}
              >
                {/* Background hover animation */}
                <motion.span
                  className="absolute inset-0 bg-amber-600"
                  variants={{
                    initial: { opacity: 0, y: "100%" },
                    hover: { opacity: 1, y: "0%" },
                  }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />

                {/* ID */}
                <span className="relative z-10 text-2xl md:text-5xl hidden md:inline">
                  {solution.id}
                </span>

                {/* Title */}
                <span className="relative md:ml-40 lg:ml-56 z-10 font-aeonik text-2xl md:text-5xl">
                  {solution.title}
                </span>

                {/* Arrows */}
                <div className="relative w-10 h-10 flex items-center p-4 justify-center bg-amber-600 md:bg-transparent rounded-full ml-auto">
                  <motion.span
                    className="absolute"
                    variants={{
                      initial: { x: 0, opacity: 1 },
                      hover: { x: 30, opacity: 0 },
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
                  </motion.span>

                  <motion.span
                    className="absolute"
                    variants={{
                      initial: { x: -30, opacity: 0 },
                      hover: { x: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <ArrowRight className="w-8 h-8 md:w-12 md:h-12" strokeWidth={1.5} />
                  </motion.span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
