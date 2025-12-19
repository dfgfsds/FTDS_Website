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

export async function generateMetadata() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://ftdigitalsolutions.in/#organization",
        "name": "FT Digital Solutions",
        "url": "https://ftdigitalsolutions.in",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://ftdigitalsolutions.in/assets\img\logo-ftdigitalsolutions.jpg",
          "url": "https://ftdigitalsolutions.in/assets\img\logo-ftdigitalsolutions.jpg",
          "contentUrl": "https://ftdigitalsolutions.in/assets\img\logo-ftdigitalsolutions.jpg",
          "caption": "FT Digital Solutions",
          "inLanguage": "en-IN"
        },
        "sameAs": [
          "https://www.facebook.com/ftdigitalsolutionsagency/",
          "https://www.linkedin.com/in/ftdigitalsolutions/",
          "https://www.instagram.com/ftdigitalsolutions_agency/",
          "https://x.com/Ftdigitals48905"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91 87688 76897",
          "contactType": "Customer Service",
          "email": "info@ftdigitalsolutions.in",
          "areaServed": "IN",
          "availableLanguage": ["en", "ta"]
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Second Floor, North Side, 46, Giri Rd, Satyamurthy Nagar, T. Nagar",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600017",
          "addressCountry": "IN"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "WebSite",
        "@id": "https://ftdigitalsolutions.in/#website",
        "url": "https://ftdigitalsolutions.in",
        "name": "FT Digital Solutions",
        "alternateName": "FT Digital Solutions - Best Digital Marketing Agency in Chennai",
        "publisher": {
          "@id": "https://ftdigitalsolutions.in/#organization"
        },
        "inLanguage": "en-IN",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://ftdigitalsolutions.in/?s={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://ftdigitalsolutions.in/#webpage",
        "url": "https://ftdigitalsolutions.in/",
        "name": "Best Digital Marketing Agency in Chennai | FT Digital Solutions",
        "description":
          "FT Digital Solutions is the best digital marketing agency in Chennai offering SEO, PPC, content marketing, social media marketing, and AI-driven digital solutions for measurable ROI.",
        "datePublished": "2024-08-15T09:00:00+05:30",
        "dateModified": "2025-10-25T09:00:00+05:30",
        "about": {
          "@id": "https://ftdigitalsolutions.in/#organization"
        },
        "isPartOf": {
          "@id": "https://ftdigitalsolutions.in/#website"
        },
        "publisher": {
          "@id": "https://ftdigitalsolutions.in/#organization"
        },
        "inLanguage": "en-IN"
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://ftdigitalsolutions.in/#localbusiness",
        "name": "FT Digital Solutions",
        "url": "https://ftdigitalsolutions.in/",
        "telephone": "+91 87688 76897",
        "priceRange": "₹₹",
        "parentOrganization": {
          "@id": "https://ftdigitalsolutions.in/#organization"
        },
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Second Floor, North Side, 46, Giri Rd, Satyamurthy Nagar, T. Nagar",
          "addressLocality": "Chennai",
          "addressRegion": "Tamil Nadu",
          "postalCode": "600017",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "13.0484",
          "longitude": "80.24247"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday"
            ],
            "opens": "10:00",
            "closes": "19:00"
          }
        ],
        "inLanguage": "en-IN"
      }
    ]
  };

  return {
    title: "Best Digital Marketing Agency in Chennai | Digital Marketing Company",
    description:
      "FT Digital Solutions is the Best Digital Marketing agency in Chennai. Your trusted digital marketing company in Chennai for SEO, PPC, and social media.",
    alternates: {
      canonical: "https://ftdigitalsolutions.in",
    },
    openGraph: {
      title: "Best Digital Marketing Agency in Chennai | FT Digital Solutions",
      description:
        "Top digital marketing agency in Chennai offering SEO, PPC, and social media marketing services.",
      url: "https://ftdigitalsolutions.in",
      siteName: "FT Digital Solutions",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
    other: {
      "application/ld+json": JSON.stringify(schema),
    },
  };
}


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
