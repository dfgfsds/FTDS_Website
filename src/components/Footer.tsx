'use client';

import { ArrowRight, Youtube, Instagram, Facebook, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Footer = () => {
  const router = useRouter();

  const handleNavigate = (title: string) => {
    router.push(`/service/${title}`);
  };

  return (
    <footer className="bg-white text-black py-10">
      <div className="mx-auto px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Left Section */}
          <div className="space-y-4">
            <Image
              src="/assets/img/logo-ftdigitalsolutions-123.png"
              alt="FT Digital Solutions Logo"
              width={240}
              height={60}
              className="w-60 h-auto"
            />

            <p className="text-md">
              ftdigitalsolutions is a boutique digital marketing company & agency in Chennai offering integrated digital marketing services.
            </p>

            <div className="mt-10 md:text-left">
              <p className="text-lg font-medium leading-10">T.nagar, Chennai</p>
              <p className="text-lg font-medium leading-10">+91 87688 76897</p>
              <p className="text-lg text-gray-600 leading-10">info@ftdigitalsolutions.in</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 mt-6">
              <a href="https://www.youtube.com/@FTDigitalSolutionsAgency" target="_blank" rel="noopener noreferrer">
                <Youtube className="text-3xl text-red-600 hover:text-red-700" />
              </a>
              <a href="https://www.instagram.com/ftdigitalsolutions/" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-3xl text-pink-500 hover:text-pink-600" />
              </a>
              <a href="https://www.facebook.com/people/FT-digital-solutions/61570253102261/" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-3xl text-blue-600 hover:text-blue-700" />
              </a>
              <a href="https://www.linkedin.com/company/ft-digital-solutions/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-3xl text-blue-700 hover:text-blue-800" />
              </a>
            </div>
          </div>

          {/* Web Development Section */}
          <div>
            <h4 className="font-bold mb-2">Web Development & Social Media</h4>
            <ul className="text-gray-500 space-y-2">
              {[
                ['best-web-development-company-in-chennai', 'Web Design & Web Development'],
                ['best-ecommerce-development-company', 'E-Commerce Development'],
                ['app-development-in-chennai', 'App Development'],
                ['wordpress-development', 'WordPress Development'],
                ['responsive-website-design-in-chennai', 'Responsive Web Design'],
                ['website-maintenance-in-chennai', 'Website Maintenance'],
                ['website-redesign-in-chennai', 'Website Redesign'],
                ['cms-best-web-development-company-in-chennai', 'CMS Website Design'],
                ['digital-marketing', 'Digital Marketing'],
                ['social-media-marketing', 'Social Media Marketing'],
                ['google-ads-marketing-company', 'Google Ads Marketing'],
                ['facebook-instagram-marketing', 'Facebook & Instagram Marketing'],
                ['seo-services', 'SEO Services'],
                ['influencer-marketing-services', 'Influencer Marketing']
              ].map(([slug, label]) => (
                <li key={slug} className="cursor-pointer" onClick={() => handleNavigate(slug)}>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* Branding Section */}
          <div>
            <h4 className="font-bold mb-2">Branding & Marketing</h4>
            <ul className="text-gray-500 space-y-2">
              {[
                ['product-video-photoshoot', 'Product Video & Photoshoot'],
                ['signage-hoardings-services', 'Signage & Hoardings'],
                ['led-sign-board', 'LED Sign Board'],
                ['branding-design-in-chennai', 'Branding Design'],
                ['logo-design-in-chennai', 'Logo Design'],
                ['corporate-profile-in-chennai', 'Corporate Brochure Design'],
                ['print-media-in-chennai', 'Print Media'],
                ['outdoor-media-in-chennai', 'Outdoor Media and Marketing'],
                ['marketing-collaterals-design', 'Marketing Collaterals'],
                ['bulk-sms-marketing', 'Bulk SMS Marketing'],
                ['whatsapp-marketing', 'WhatsApp Marketing'],
                ['bulk-email-marketing', 'Bulk Email Marketing'],
                ['bulk-database', 'Bulk Database']
              ].map(([slug, label]) => (
                <li key={slug} className="cursor-pointer" onClick={() => handleNavigate(slug)}>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          {/* PR Section */}
          <div>
            <h4 className="font-bold mb-2">Public Relations</h4>
            <ul className="text-gray-500 space-y-2">
              {[
                ['political-pr-companies', 'Political PR'],
                ['political-election-campaign', 'Political Election Campaign'],
                ['media-relations', 'Media Relations'],
                ['celebrity-management-company-in-chennai', 'Celebrity Management'],
                ['event-management-company-in-chennai', 'Event Management'],
                ['crisis-and-preception-mangement', 'Crisis and Perception Management'],
                ['print-and-editorial-services', 'Print & Editorial'],
                ['digital-public-relations', 'Digital Public Relations']
              ].map(([slug, label]) => (
                <li key={slug} className="cursor-pointer" onClick={() => handleNavigate(slug)}>
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-10 pt-4 flex flex-col md:flex-row justify-between text-gray-500 text-sm">
          <p>Copyright © FT Digital Solutions 2025</p>
          <div className="flex space-x-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span>|</span>
            <Link href="/termsAndCondition">Terms And Condition</Link>
            <span>|</span>
            <Link href="/userDataDeletion">User Data Deletion</Link>
            <span>|</span>
            <a href="#" className="hover:underline">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
