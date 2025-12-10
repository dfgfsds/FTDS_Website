"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

function VideoBanner() {
  const router = useRouter();

  const [loading, setLoading] = useState(true);
  const [elevated, setElevated] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  // FIX: All sessionStorage logic moved inside useEffect (runs only in browser)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hasAnimated = sessionStorage.getItem("videoBannerAnimated");

    if (!hasAnimated) {
      const elevateTimer = setTimeout(() => setElevated(true), 0);
      const expandTimer = setTimeout(() => setExpanded(true), 800);

      sessionStorage.setItem("videoBannerAnimated", "true");

      return () => {
        clearTimeout(elevateTimer);
        clearTimeout(expandTimer);
      };
    } else {
      // If already animated in previous visit
      setElevated(true);
      setExpanded(true);
    }
  }, []);

  return (
    <div
      className={`relative w-full h-screen overflow-hidden ${elevated && expanded ? "bg-white" : "bg-transparent"
        }`}
    >
      {/* Background Video */}
      <div className="relative w-full h-full">
        <motion.video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ y: "100vh", scale: 0.4, opacity: 0, zIndex: 999, borderRadius: 2 }}
          animate={{
            y: elevated ? 0 : "100vh",
            scale: expanded ? 1 : elevated ? 1.05 : 0.4,
            opacity: 1,
            width: expanded ? "100vw" : "40vw",
            height: expanded ? "100vh" : "50vh",
            zIndex: loading ? 999 : 0,
            borderRadius: loading ? 10 : 0
          }}
          transition={{
            y: { duration: 1.6, ease: [0.25, 0.8, 0.25, 1] },
            scale: { duration: 0.8, delay: 0.8, ease: [0.4, 0.0, 0.2, 1] },
            width: { duration: 0.8, delay: 0.8, ease: [0.4, 0.0, 0.2, 1] },
            height: { duration: 0.8, delay: 0.8, ease: [0.4, 0.0, 0.2, 1] },
            opacity: { duration: 0.5, ease: "easeInOut" },
            zIndex: { duration: 0.1, delay: 1.5 },
            borderRadius: { duration: 0.5, delay: 0.8, ease: [0.4, 0.0, 0.2, 1] }
          }}
          style={{ transformOrigin: "center" }}
        >
          <source src="/assets/video/ftds-banner.mp4" type="video/mp4" />
        </motion.video>

        {/* Overlay */}
        <div
          className={`absolute top-0 left-0 w-full h-full opacity-35 z-[10] ${loading ? "bg-white" : "bg-black"
            }`}
        ></div>
      </div>

      {/* Hero Content */}
      {!loading && (
        <div className="absolute top-0 left-0 w-full h-full flex flex-col text-white p-6 ml-5 md:ml-8 md:mt-20 z-[20]">
          <motion.h1
            className="relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-tight max-w-7xl mt-24 md:mt-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          >
            Best Digital Marketing Company in
            <br />
            Chennai for ROI-Driven Growth
          </motion.h1>

          {/* CTA Button */}
          <div className="mt-6">
            <motion.button
              className="mt-6 md:flex hidden md:block relative overflow-hidden items-center gap-3 px-6 py-3 xl:px-8 xl:py-4 
              text-black bg-white rounded-full text-xl xl:text-2xl 2xl:text-3xl shadow-md hover:shadow-lg transition-all 
              opacity-0 translate-y-6 animate-fade-up"
              whileHover="hover"
              initial="initial"
              variants={{
                initial: { color: "#000" },
                hover: { color: "#fff" },
              }}
              onClick={() => router.push("/services")}
            >
              <span className="relative z-10 text-black">Our solutions</span>

              <div className="relative w-10 h-10">
                <span className="absolute flex z-10 items-center justify-center w-10 h-10 bg-primaryColor text-black rounded-full">
                  <motion.span
                    variants={{
                      initial: { x: 7, opacity: 1 },
                      hover: { x: 20, opacity: 0 },
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    ➝
                  </motion.span>
                  <motion.span
                    variants={{
                      initial: { x: -10, opacity: 0 },
                      hover: { x: 0, opacity: 1 },
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    ➝
                  </motion.span>
                </span>
              </div>

              <motion.span
                className="absolute bg-primaryColor rounded-full z-0"
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

          {/* Subtext */}
          <motion.div
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-6 max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
          >
            Helping brands grow with SEO, PPC, content, and social media solutions...
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default VideoBanner;
