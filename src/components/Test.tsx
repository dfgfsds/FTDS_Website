'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const ref = useRef(null);
  const router = useRouter();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax transformations
  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);

  return (
    <section ref={ref} className="relative w-full h-[60vh] overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: yImage }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="relative w-full h-full m-3 rounded-md overflow-hidden">
          <Image
            src="/assets/img/bg-ftds1.jpg"
            alt="Ft Digital Solutions"
            fill
            className="object-cover rounded-md"
            priority
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-50 rounded-md" />
        </div>
      </motion.div>

      {/* Overlay Text & Button */}
      <div className="absolute inset-0 flex flex-col justify-end px-4">
        <div className="flex mb-10 justify-between flex-col md:flex-row">
          <motion.h1
            style={{ y: yText }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white text-3xl md:text-4xl xl:text-5xl font-medium leading-tight max-w-3xl ml-8"
          >
            We at FT Digital Solutions offer expert solutions to take you to the next level.
          </motion.h1>

          <div>
            <motion.button
              className="mt-6 cursor-pointer relative overflow-hidden flex items-center gap-3 px-6 py-3 text-black bg-white rounded-full shadow-md hover:shadow-lg transition-all"
              whileHover="hover"
              initial="initial"
              variants={{
                initial: { color: "#000" },
                hover: { color: "#fff" },
              }}
              onClick={() => router.push("/services")}
            >
              <span className="relative z-10 text-black">Our solutions</span>

              {/* Arrow Animation */}
              <div className="relative w-10 h-10">
                <span className="absolute flex z-10 items-center justify-center w-10 h-10 bg-amber-600 text-black rounded-full">
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
                className="absolute bg-amber-600 rounded-full z-0"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
