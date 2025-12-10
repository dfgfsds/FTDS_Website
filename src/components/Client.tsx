"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos: string[] = [
  "BMC-logo-blue.svg",
  "OM SRI TARA-03.png",
  "ftdc logo-01.jpg",
  "self-tune-final-png.png",
  "tn computers-01.png",
  "chokurei tax partners logo 001-01.png",
  "1evolve logo b copy.png",
  "logo (1).jpeg",
  "6ba1968b-45e8-48a4-a99e-5d3970c2a189-removebg-preview.png",
  "LA Athulyam_Logo_File-01.png",
  "tosh-new.png",
  "milkpot Logo.png",
  "hayaLogo1.png",
  "ftdsHlogo.png",
];

function MarqueeRow({
    direction = "left",
    speed = 20,
}: {
    direction?: "left" | "right";
    speed?: number;
}) {
    return (
        <div className="overflow-hidden relative w-full py-3 sm:py-4">
            <motion.div
                className="flex gap-6 sm:gap-10"
                animate={{
                    x: direction === "right" ? ["-100%", "0%"] : ["0%", "-100%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration: speed,
                    ease: "linear",
                }}
                style={{ width: "200%" }} // make space for 2 sets
            >
                {/* Copy 1 */}
                <div className="flex gap-6 sm:gap-10 w-1/2">
                    {logos.map((src, idx) => (
                        <div
                            key={idx}
                            className="w-28 h-16 sm:w-36 sm:h-20 md:w-44 md:h-24 lg:w-48 lg:h-28 
              flex items-center justify-center 
              rounded-lg shadow-md bg-white p-2 sm:p-4 flex-shrink-0"
                        >
                            <img
                                src={`/assets/img/logos/${src}`}
                                alt="client logo"
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div>

                {/* Copy 2 */}
                {/* <div className="flex gap-6 sm:gap-10 w-1/2">
                    {logos.map((src, idx) => (
                        <div
                            key={`dup-${idx}`}
                            className="w-28 h-16 sm:w-36 sm:h-20 md:w-44 md:h-24 lg:w-48 lg:h-28 
              flex items-center justify-center 
              rounded-lg shadow-md bg-white p-2 sm:p-4 flex-shrink-0"
                        >
                            <img
                                src={src}
                                alt="client logo"
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    ))}
                </div> */}
            </motion.div>
        </div>
    );
}

export default function Client() {
    return (
        <div className="my-12 sm:my-20">
            <h3 className="text-xl sm:text-2xl md:text-4xl text-center font-semibold mb-6 sm:mb-10">
                Trusted by Leading Brands & Clients
            </h3>

            {/* Row 1: left → right */}
            <MarqueeRow direction="left" speed={40} />

            {/* Row 2: right → left */}
            <MarqueeRow direction="right" speed={40} />
        </div>
    );
}

