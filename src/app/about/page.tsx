'use client';

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ContactUs from "@/components/ContactUs";

// You can put your images in /public/assets/img/
const aboutImage2 = "/assets/img/about-img-ftdigitalsolutions.webp";
const aboutImage = "/assets/img/lan-about.jpg";
const aboutBanner = "/assets/img/banner-about.jpg";

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <h2 className="mt-40 w-[80%] text-4xl md:text-7xl my-4 ml-9 md:ml-20">About Us</h2>

      <section className="pt-20 bg-white">
        <div className="container md:w-11/12 mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <Image
                src={aboutImage2}
                alt="FT Digital Solutions"
                width={700}
                height={500}
                className="rounded-full w-full h-[65vh] object-cover"
              />
            </div>

            {/* Content Section */}
            <div>
              <span className="text-sm uppercase font-semibold text-primary tracking-wide">
                About FT Digital Solutions
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 text-black leading-snug">
                We’re An ROI Driven Digital Marketing Agency in Chennai, Tamil Nadu
              </h1>
              <h3 className="text-lg sm:text-xl font-medium text-gray-700 mt-3">
                We make the world see you…
              </h3>
              <p className="mt-5 text-base text-gray-600">
                FT Digital Solutions is a dedicated and well established company based in Chennai, Tamil Nadu, with 15+ years of experience in the field of Digital Marketing, PR services, Web Designing and Development.
              </p>
              <p className="mt-5 text-base text-gray-600">
                We have an excellent team of experienced professionals each of whom are knowledgeable in their specified field of PR service, Digital Marketing and Web Designing & Development...
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <p className="text-base text-gray-600">
                    Our Web Development team consists of the most creative bunch of designers that provide quality design, on time delivery and resourceful...
                  </p>
                </div>
                <div>
                  <p className="text-base text-gray-600">
                    Our Digital marketing team comprises the best of the best in the field. Our main aim is to strengthen your market presence...
                  </p>
                </div>
              </div>

              <p className="mt-6 text-base text-gray-600">
                FT Digital Solutions PR services rank among the best in the industry...
              </p>
            </div>
          </div>
        </div>

        {/* About PR Services */}
        <div className="mx-auto max-w-7xl my-20 px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
            <div>
              <div className="max-w-lg md:max-w-none">
                <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  Digital Marketing and PR Service
                </h2>
                <h4 className="text-xl font-semibold text-gray-900 sm:text-2xl">
                  A one-stop destination to meet all your digital needs
                </h4>
                <p className="mt-4 text-gray-700">
                  We at FT Digital Solutions help guide and support you in establishing a firm presence in the digital world...
                </p>
                <p className="mt-4 text-gray-700">
                  We have always kept ourselves up-to-date in the latest trends and tools in communication and public relations...
                </p>
              </div>
            </div>
            <div>
              <Image
                src="https://www.buildmyorm.com/assets/userassets/USER822125/postImages/digital-pr-services-for-businesses.jpeg"
                alt="Digital PR Services"
                width={700}
                height={500}
                className="rounded w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Parallax Banner */}
      <div className="mb-20">
        <motion.div style={{ y: yImage }} className="inset-0 w-full h-full" ref={ref}>
          <Image
            src={aboutBanner}
            alt="FT Digital Solutions Banner"
            width={1200}
            height={600}
            className="w-full h-full object-cover m-3 rounded-md"
          />
        </motion.div>
      </div>

      {/* Why Choose Us */}
      <section className="flex flex-col lg:flex-row items-center justify-between gap-10 px-6 lg:px-20 py-12">
        <div className="lg:w-1/2">
          <div className="why-choose-us-content mb-10 px-4 md:px-8 lg:px-16 py-8 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why should you choose us</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              FT Digital Solutions values client satisfaction and trust the most...
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Transparent', desc: 'We communicate openly and clearly at every stage.' },
                { title: 'Proactive', desc: 'We believe in proactive service—offering newsletters, surveys, etc.' },
                { title: 'Affordable', desc: 'Competitive pricing that fits your budget.' },
                { title: 'Flexible', desc: 'Adaptable solutions for specific requirements.' },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4 items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:w-1/2 flex justify-center">
          <Image
            src={aboutImage}
            alt="EV Charging"
            width={700}
            height={500}
            className="w-full h-auto max-w-lg rounded-lg shadow-md object-cover"
          />
        </div>
      </section>

    <ContactUs/>
    </div>
  );
};

export default About;
