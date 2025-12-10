'use client';

import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import 'keen-slider/keen-slider.min.css';

interface Product {
  name: string;
  videoUrl: string;
  description?: string;
}

const PartnersKeenSlider: React.FC = () => {
  const products: Product[] = [
    {
      name: "Promo Video",
      videoUrl: "https://www.youtube.com/embed/6tJdEufXMBc?si=BNr3ZMs7irFKgyBh",
    },
    {
      name: "Service Overview",
      videoUrl: "https://www.youtube.com/embed/oo38S2y5tgo?si=vWsDVEnTE6vKScuh",
    },
    {
      name: "Service Overview 2",
      videoUrl: "https://www.youtube.com/embed/zncXLhtlLO8?si=YdByA0m3hoVus2CU",
    },
    {
      name: "Service Overview 3",
      videoUrl: "https://www.youtube.com/embed/k7GLE_VpT_8?si=YJuK5-n8iib0j1HX",
    },
    {
      name: "Service Overview 4",
      videoUrl: "https://www.youtube.com/embed/2eRPVk-NJUE?si=mI6M50l-CCca6HVT",
    },
    {
      name: "Service Overview 5",
      videoUrl: "https://www.youtube.com/embed/qdEPuhLtwnk?si=9PNdvY4xwx4xhiYQ",
    }
  ];

  const [pause, setPause] = useState(false);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 3,
      spacing: 15,
    },
    breakpoints: {
      "(max-width: 1800px)": {
        slides: { perView: 3, spacing: 15 }
      },
      "(max-width: 1440px)": {
        slides: { perView: 3, spacing: 12 }
      },
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 10 }
      },
      "(max-width: 768px)": {
        slides: { perView: 1, spacing: 5 }
      }
    },
    drag: true,
    // Auto play
    // Keen slider doesn’t have built-in autoplay, but you can simulate with setInterval
  });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (!pause && slider?.current) {
      timer = setTimeout(() => {
        slider.current?.next();
      }, 3000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [slider, pause]);

  return (
    <section className="px-4 md:px-10 lg:px-20 my-8">
      <h2 className="text-2xl font-semibold text-center my-12">Our Videos</h2>
      
      <div
        ref={sliderRef}
        className="keen-slider"
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="keen-slider__slide p-4"
            initial={{ scale: 1, opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="overflow-hidden rounded-lg shadow-lg group">
              <iframe
                width="100%"
                height="315"
                src={product.videoUrl}
                title={product.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
              {/* <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                {product.description && (
                  <p className="text-gray-500 text-sm">{product.description}</p>
                )}
              </div> */}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PartnersKeenSlider;
