// components/FeatureSection.tsx
import React from "react";
import { motion } from "framer-motion";

interface FeatureSectionProps {
  title: string;
  data: {
    id?: string | number;
    title: string;
    description: string;
    image?: string;
  }[];
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, data }) => {
  return (
    <section className="my-12">
      <h3 className="text-2xl md:text-5xl ml-8 md:ml-20 mt-20">{title}</h3>
      <div className="max-w-6xl mx-auto px-4 py-12 mt-4">
        <div className="grid md:grid-cols-1 gap-8">
          {data.map((item, idx) => (
            <div key={idx} className="flex flex-col md:flex-row items-center gap-6 border-b border-gray-300 pb-8 last:border-none">
           
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 20, damping: 5 }}
                viewport={{ once: true, amount: 0.4 }}
                className="w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">

                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="mt-4 w-full h-auto object-cover rounded"
                  />
                )}
              </motion.div>
                 <div className="flex-1 md:ml-60 text-center md:text-left">
                <div className="flex">
                  {/* <span className="text-black text-3xl font-semibold hidden md:block">
                    {feature.id}
                  </span> */}
                  <div className="ml-6">
                    <h2 className="text-3xl font-thin">{item.title}</h2>
                    <p className="text-gray-400 text-lg mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default FeatureSection;
