'use client';

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ContactUs = () => {
  const router = useRouter();

  return (
    <section className="relative z-10 h-[500px] overflow-hidden bg-gradient-to-b from-orange-400 to-orange-200 py-16 px-8">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="text-center lg:text-left">
              <div className="mb-10 lg:mb-0">
                <h2 className="mt-0 mb-3 text-3xl font-bold leading-tight sm:text-4xl sm:leading-tight md:text-[40px] md:leading-tight text-black">
                  Get Started Today!
                </h2>
                <p className="w-full text-base font-medium leading-relaxed sm:text-lg sm:leading-relaxed text-black">
                  Ready to elevate your business? FT Digital Solutions offers expert web design and digital marketing solutions to enhance your brand and achieve your goals.
                </p>
              </div>

              {/* Button */}
              <motion.button
                className="mt-6 cursor-pointer relative overflow-hidden flex items-center gap-3 px-6 py-3 mr-auto text-black bg-white rounded-full shadow-md hover:shadow-lg transition-all"
                whileHover="hover"
                initial="initial"
                variants={{
                  initial: { color: "#000" },
                  hover: { color: "#fff" },
                }}
                onClick={() => router.push("/contact")}
              >
                <span className="relative z-10 text-black">Contact us</span>

                <div className="relative w-10 h-10">
                  <span className="absolute flex z-10 items-center justify-center w-10 h-10 bg-orange-400 text-black rounded-full">
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
                  className="absolute bg-orange-400 rounded-full z-0"
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

          {/* Right Side (currently empty) */}
          <div className="w-full px-4 lg:w-1/2 mr-auto" />
        </div>
      </div>

      {/* Background SVG Decorations */}
      <span className="absolute top-0 right-0 -z-10">
        <svg width="388" height="250" viewBox="0 0 388 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.05" d="M203 -28.5L0 250.5H881.5V-28.5H203Z" fill="url(#paint0_linear_971_6910)" />
          <defs>
            <linearGradient id="paint0_linear_971_6910" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse">
              <stop offset="0.520507" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <span className="absolute top-0 right-0 -z-10">
        <svg width="324" height="250" viewBox="0 0 324 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.05" d="M203 -28.5L0 250.5H881.5V-28.5H203Z" fill="url(#paint0_linear_971_6911)" />
          <defs>
            <linearGradient id="paint0_linear_971_6911" x1="60.5" y1="111" x2="287" y2="111" gradientUnits="userSpaceOnUse">
              <stop offset="0.520507" stopColor="white" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </span>

      <span className="absolute top-4 left-4 -z-10">
        <svg width="43" height="56" viewBox="0 0 43 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            {[...Array(4)].map((_, row) =>
              [...Array(4)].map((_, col) => (
                <circle
                  key={`${row}-${col}`}
                  cx={41 - 13.168 * row}
                  cy={1.49626 + 13.168 * col}
                  r="1.49626"
                  transform="rotate(90)"
                  fill="white"
                />
              ))
            )}
          </g>
        </svg>
      </span>
    </section>
  );
};

export default ContactUs;
