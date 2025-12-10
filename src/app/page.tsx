import Client from "@/components/Client";
import HelpSection from "@/components/HelpSection";
import PartnersKeenSlider from "@/components/Partners";
import Partners from "@/components/Partners";
import Solutions from "@/components/Solutions";
import HeroSection from "@/components/Test";
import VideoBanner from "@/components/VideoBanner";
import Image from "next/image";
import PricingPlans from "./packages/Packages";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
   <>
   <VideoBanner />
   <Solutions/>
   <HelpSection/>
   <HeroSection/>
 <PartnersKeenSlider/>
 <Client/>
 <PricingPlans/>
 <ContactUs/>
 
   </>
  );
}
