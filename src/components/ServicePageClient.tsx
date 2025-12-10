"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Minus, Plus } from "lucide-react";
import Link from "next/link";
import bannerImg from "../../public/assets/img/photo-vidoe-fdts.jpg";
import FeatureSection from "@/components/FeatureSection";
import ContactUs from "@/components/ContactUs";

interface ServicePageClientProps {
  data: any;
}

export default function ServicePageClient({ data: dataaa }: ServicePageClientProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref1,
    offset: ["start end", "end start"],
  });

  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["start end", "end start"],
  });
  
  const y1 = useTransform(scrollYProgress1, [0, 1], ["10%", "-20%"]);
  const y2 = useTransform(scrollYProgress2, [0, 1], ["10%", "-20%"]);

  return (
    <div>
      <div className="mt-36 mx-10 md:mx-20">
        <h2 className="w-[80%] text-4xl md:text-8xl 2xl:text-9xl font-thin">
          {dataaa?.pageTitle || "Service Title"}
        </h2>
        <Link href="/contact">
          <motion.button
            className="mt-6 cursor-pointer hidden md:block relative overflow-hidden md:flex items-center gap-3 px-6 py-3 text-black bg-white rounded-full transition-all"
            whileHover="hover"
            initial="initial"
            variants={{
              initial: { color: "#fff" },
              hover: { color: "#000" },
            }}
          >
            <motion.span
              className="relative z-10 2xl:text-lg"
              variants={{
                initial: { color: "#fff" },
                hover: { color: "#000" },
              }}
              transition={{ duration: 0.2, ease: "easeInOut", delay: 0.2 }}
            >
              Contact us
            </motion.span>

            <div className="relative w-10 h-10">
              <span className="absolute flex z-10 items-center justify-center w-10 h-10 bg-orange-500 text-black rounded-full">
                <motion.span
                  variants={{
                    initial: { x: 7, opacity: 1 },
                    hover: { x: 20, opacity: 0 },
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  ➝
                </motion.span>

                <motion.span
                  variants={{
                    initial: { x: -10, opacity: 0 },
                    hover: { x: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  ➝
                </motion.span>
              </span>
            </div>

            <motion.span
              className="absolute bg-orange-500 rounded-full z-0"
              style={{
                width: "35px",
                height: "35px",
                bottom: "30%",
                left: "70%",
                transform: "translate(-50%, 50%)",
              }}
              variants={{
                initial: { scale: 0 },
                hover: { scale: 20 },
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </motion.button>
        </Link>
        <div className="mt-6 text-3xl font-thin md:w-1/3">
          {dataaa?.pageTitle2}
        </div>
      </div>

      <div ref={ref1} className="relative w-[96%] md:w-[98%] h-screen m-2 md-mx-4 overflow-hidden mt-20 rounded-md">
        <motion.img
          src={dataaa?.sections?.[0]?.image?.url || bannerImg.src}
          alt={dataaa?.sections?.[0]?.image?.alt || "Banner"}
          className="absolute w-full h-full object-cover rounded-md"
          style={{ y: y1 }}
        />
      </div>

      {/* about service section */}
      <div className="flex flex-col md:flex-row w-full h-auto md:h-screen">
        <div className="w-full md:w-1/2 h-64 md:h-full">
          <img
            src={dataaa?.aboutImage}
            alt="Description"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-gray-100">
          <div className="text-center md:text-left space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {dataaa?.aboutTitle}
            </h1>
            {dataaa?.aboutSubTitle && (
              <h2 className="text-lg md:text-xl text-gray-600">
                {dataaa?.aboutSubTitle}
              </h2>
            )}
            <p className="text-base md:text-lg text-gray-800">
              {dataaa?.aboutDesc}
            </p>
          </div>
        </div>
      </div>

      {dataaa?.sections?.map((section: any, index: number) => (
        <FeatureSection key={index} title={section.title} data={section.data} />
      ))}

      <div ref={ref2} className="relative w-[96%] md:w-[98%] h-2/4 m-2 md-mx-4 overflow-hidden mt-20 rounded-md">
        <motion.img
          src={bannerImg.src}
          alt="Videography"
          className="absolute w-full h-1/3 object-cover rounded-md"
          style={{ y: y2 }}
        />
      </div>

      {dataaa?.faqs && dataaa?.faqs.length > 0 && (
        <div className="mx-4 py-12">
          <h2 className="text-xl font-semibold mb-6 ml-8">Frequently asked questions</h2>
          <div className="border-t border-gray-300">
            {dataaa?.faqs.map((faq: any, index: number) => (
              <div key={faq.id} className="border-b border-gray-300 py-8 px-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl ml-4 hidden md:block">{faq.id}</span>
                    <h3 className="text-2xl md:text-4xl ml-4 md:ml-20 w-[80%]">{faq.question}</h3>
                  </div>

                  <div>
                    <motion.button
                      className="relative cursor-pointer w-10 h-10 p-2 flex items-center justify-center rounded-full overflow-hidden transition-all duration-500"
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        initial={{ backgroundColor: "#f9a86d" }}
                        animate={{
                          backgroundColor: openIndex === index ? "rgb(0, 0, 0)" : "#f9a86d",
                          scale: 1,
                        }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                      />

                      <motion.div
                        initial={{ scale: 1, opacity: 1 }}
                        animate={{ scale: openIndex === index ? 0.6 : 1, opacity: openIndex === index ? 0.3 : 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute text-black"
                      >
                        <Plus size={16} />
                      </motion.div>

                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: openIndex === index ? 1.2 : 0, opacity: openIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="absolute text-white"
                      >
                        <Minus size={16} />
                      </motion.div>
                    </motion.button>
                  </div>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
                      className="pl-2 md:pl-10 mr-12 mt-3 text-gray-500 overflow-hidden text-lg ml-4 md:ml-28"
                    >
                      <p dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, "<br>") }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      )}

      <ContactUs />
    </div>
  );
}