"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos: string[] = [
    "1.png",
    "2.png",
    "3.svg",
    "4.png",
    "5.jpg",
    "6.png",
    "7.png",
    "8.png",
    "9.jpeg",
    "10.png",
    "11.png",
    "12.png",
    "13.png",
    "14.png",
    "15.png",
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
                className="flex w-fit"
                animate={{
                    x: direction === "right" ? ["-50%", "0%"] : ["0%", "-50%"],
                }}
                transition={{
                    repeat: Infinity,
                    duration: speed,
                    ease: "linear",
                }}
            >
                {/* Copy 1 */}
                <div className="flex gap-6 sm:gap-10 px-3 sm:px-5">
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
                <div className="flex gap-6 sm:gap-10 px-3 sm:px-5">
                    {logos.map((src, idx) => (
                        <div
                            key={`dup-${idx}`}
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

