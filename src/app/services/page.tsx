"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

import photoVidoeImage from "../../../public/assets/img/services/photo-video-pro.jpg";
import googleImage from "../../../public/assets/img/services/google-ad-words.jpg";
import facebookInstaImage from "../../../public/assets/img/services/fa-in-mar.jpg";
import brandImage from "../../../public/assets/img/services/brand-design.jpg";
import seoImage from "../../../public/assets/img/services/seo-service.jpg";
import ondoorOutdoorImage from "../../../public/assets/img/services/indoor-outdoor.jpg";
import Appimg from "../../../public/assets/img/app.png";
import webimg from "../../../public/assets/img/ftds-web-development.jpg";
import { useEffect } from "react";

export default function Services() {
  const router = useRouter();

  const solutions = [
    { id: "01", title: "Web Development", link: "/service/best-web-development-company-in-chennai", img: webimg },
    { id: "02", title: "App Development", link: "/service/app-development-in-chennai", img: Appimg },
    { id: "03", title: "Google Ad Words", link: "/service/google-ads-marketing-company", img: googleImage },
    { id: "04", title: "Facebook & Instagram Marketing", link: "/service/facebook-instagram-marketing", img: facebookInstaImage },
    { id: "05", title: "Brand Design Services", link: "/service/branding-design-in-chennai", img: brandImage },
    { id: "06", title: "SEO Services", link: "/service/seo-services", img: seoImage },
    { id: "07", title: "Indoor & Outdoor Marketing", link: "/service/outdoor-media-in-chennai", img: ondoorOutdoorImage },
    { id: "08", title: "Photoshoot & Video Production", link: "/service/product-video-photoshoot", img: photoVidoeImage },
  ];

  const handleNavigate = (url: string) => {
    router.push(url);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="p-6 mt-24">
      <h1 className="text-4xl md:text-7xl my-4 ml-8">Our Solutions</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {solutions.map((solution) => (
          <div
            key={solution.id}
            className="relative group p-4 cursor-pointer"
            onClick={() => handleNavigate(solution.link)}
          >
            {/* Image */}
            <div className="rounded-md overflow-hidden">
              <Image
                src={solution.img}
                alt={solution.title}
                width={800}         // required
                height={600}        // required
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Arrow Button */}
            <div className="absolute bottom-24 right-8">
              <button className="bg-primaryColor-300 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:w-10 group-hover:h-10">
                <ArrowRight size={20} />
              </button>
            </div>

            {/* Title */}
            <div className="mt-2">
              <p className="text-3xl font-thin text-black">
                {solution.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
