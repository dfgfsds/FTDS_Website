"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X, Plus, Minus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../public/assets/img/logo-ftdigitalsolutions.jpg";
import logoBg from "../../public/assets/img/logo-ftdigitalsolutions-bg.png";



const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState<number | null>(null);
    const [mobileSubDropdown, setMobileSubDropdown] = useState<number | null>(null);
    const router = useRouter();
    const pathname = usePathname()

    const menuItems = [
        { name: "Home", path: "/", dropdown: false },
        {
            name: "Our Services",
            path: "/services",
            dropdown: true,
            subMenuSections: [
                {
                    title: "Web Development",
                    items: [
                        { label: "Web Design & Web Development", value: "/service/best-web-development-company-in-chennai" },
                        { label: "E-Commerce Development", value: "/service/best-ecommerce-development-company" },
                        { label: "App Development", value: "/service/app-development-in-chennai" },
                        { label: "WordPress Development", value: "/service/wordpress-development" },
                        { label: "Responsive Web Design", value: "/service/responsive-website-design-in-chennai" },
                        { label: "Website Maintenance", value: "/service/website-maintenance-in-chennai" },
                        { label: "Website Redesign", value: "/service/website-redesign-in-chennai" },
                        { label: "CMS Website Design", value: "/service/cms-best-web-development-company-in-chennai" },
                    ],
                },
                {
                    title: "Branding & Marketing",
                    items: [
                        { label: "Digital Marketing", value: "/service/digital-marketing" },
                        { label: "Social Media Marketing", value: "/service/social-media-marketing" },
                        { label: "Google Ads Marketing", value: "/service/google-ads-marketing-agency" },
                        { label: "Facebook & Instagram Marketing", value: "/service/facebook-instagram-marketing-Agency" },
                        { label: "SEO Services", value: "/service/seo-services" },
                        { label: "Influencer Marketing", value: "/service/influencer-marketing" },
                        { label: "Product Video & Photoshoot", value: "/service/product-video-photoshoot" },
                        // working
                        { label: "Brand Design", value: "/service/branding-design-in-chennai" },
                        { label: "Logo Design", value: "/service/logo-design-in-chennai" },
                        { label: "Signage & Hoardings", value: "/service/signage-hoardings" },
                        { label: "LED Sign Board", value: "/service/led-sign-board" },
                        { label: "Branding Design Service", value: "/service/branding-design-service" },
                        { label: "Corporate Brochure Design", value: "/service/corporate-brochure-design" },
                        { label: "Print Media", value: "/service/print-media-in-chennai" },
                        { label: "Outdoor Media and Marketing", value: "/service/outdoor-media-in-chennai" },
                        { label: "Marketing Collaterals", value: "/service/marketing-collaterals-design" },
                    ],
                },
                {
                    title: "Public Relations",
                    items: [
                        { label: "Bulk Database", value: "/service/bulk-database" },
                        { label: "Bulk SMS Marketing", value: "/service/bulk-sms-marketing" },
                        { label: "WhatsApp Marketing", value: "/service/whatsapp-marketing" },
                        { label: "Bulk E-mail Marketing", value: "/service/bulk-email-marketing" },
                        { label: "Political Election Campaign", value: "/service/political-election-campaign" },
                        { label: "Media Relations", value: "/service/media-relations" },
                        { label: "Celebrity Management", value: "/service/celebrity-management" },
                        { label: "Project Release & Activation", value: "/service/project-release-activation" },
                        { label: "Crisis & Perception Management", value: "/service/crisis-perception-management" },
                        { label: "Print & Editorial Services", value: "/service/print-editorial-services" },
                        { label: "Digital Public Relations", value: "/service/digital-public-relations" },
                    ],
                },
                {
                    title: "PR SERVICES",
                    items: [
                        { label: "Photoshoot and Video Production", value: "/service/photography-videography-services" },
                        { label: "Google Ad Words", value: "/service/google-ads-marketing-agency" },
                        { label: "Facebook & Instagram Marketing", value: "/service/facebook-instagram-marketing-Agency" },
                        { label: "Brand Design Services", value: "/service/branding-design-in-chennai" },
                        { label: "SEO Services", value: "/service/seo-service" },
                        { label: "Indoor and Outdoor Marketing", value: "/service/indoor-outdoor-marketing" },
                        { label: "Political PR", value: "political-pr-companies" },
                        { label: "Political Election Campaign", value: "/service/political-election-campaign" },
                        { label: "Media Relations", value: "/service/media-relations" },
                        { label: "Celebrity Management", value: "/service/celebrity-management-company-in-chennai" },
                        { label: "Event Management", value: "/service/event-management-company-in-chennai" },
                        { label: "Crisis and Perception Management", value: "/service/crisis-&-preception Management" },
                        { label: "Print & Editorial", value: "/service/print-and-editorial-services" },
                        { label: "Digital Public Relations", value: "/service/digital-public-relations" },
                    ],
                },
            ],
        },
        { name: "About Us", path: "/about", dropdown: false },
        { name: "Blog", path: "/blog", dropdown: false },
        { name: "Pricing", path: "/pricing", dropdown: false, }

    ];


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setVisible(currentScrollY <= lastScrollY);
            setLastScrollY(currentScrollY);
            setScrolled(currentScrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    const handleNavigate = (slug: string) => {
        router.push(`/service/${slug}`);
        setIsDropdownOpen(false);
        setMenuOpen(false);
        setMobileDropdown(null);
        setMobileSubDropdown(null);
    };
    return (
        <div>
            <header className={`fixed w-full top-0 left-0 z-40 py-2 transition-all duration-300 ${scrolled || isDropdownOpen ? "bg-white shadow-md" : "bg-transparent"} ${visible ? "translate-y-0" : "-translate-y-full"}`}>
                <motion.nav initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 1.5 }}
                    className="container mx-auto py-2 px-6 md:px-24 flex justify-between items-center">
                    <Link href='/'>
                        {/* <h1 className={`text-lg md:hidden font-bold ${location.pathname === "/" ? (scrolled ? "text-black" : "text-white") : 'text-black'}`}>FT Digital Solutions</h1> */}
                        <Image src={pathname === "/" || pathname === "/index" || pathname === "/index.html" ? (scrolled ? logo : logoBg) : logo} className="h-14 w-48 md:h-20 md:w-64 " alt="Logo" />
                    </Link>
                    <ul className="hidden md:flex space-x-6">
                        {menuItems.map(({ name, path, dropdown }, index) => (
                            <li key={index} className="relative group" onMouseEnter={() => dropdown && setIsDropdownOpen(true)} onMouseLeave={() => !dropdown && setIsDropdownOpen(false)}>
                                <Link
                                    href={path}
                                    onClick={() => dropdown && setIsDropdownOpen(false)}
                                    className={`
    relative group
    ${pathname === "/" || pathname === "/index" || pathname === "/index.html"
                                            ? (scrolled || isDropdownOpen ? 'text-black underline-black' : 'text-white underline-white')
                                            : 'text-black underline-black'}
  `}
                                >
                                    {name}
                                </Link>
                                {dropdown && (
                                    <AnimatePresence>
                                        {isDropdownOpen && (
                                            <motion.div
                                                onMouseEnter={() => dropdown && setIsDropdownOpen(true)}
                                                onMouseLeave={() => dropdown && setIsDropdownOpen(false)}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }} // This ensures smooth exit animation
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="fixed top-[80px] left-0 w-full bg-white shadow-lg z-50 mt-6 "
                                            >
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-4">
                                                    <div className="ml-8">
                                                        <h4 className="font-bold mb-2 mt-4">Web Development</h4>
                                                        <ul className="text-gray-500 space-y-2">
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('best-web-development-company-in-chennai')}>Web Design & Web Development</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('best-ecommerce-development-company')}>E-Commerce Development</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('app-development-in-chennai')}>App Development</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('wordpress-development')}>WordPress Development</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('responsive-website-design-in-chennai')}>Responsive Web Design</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('website-maintenance-in-chennai')}>Website Maintenance</li>

                                                            <li className="cursor-pointer" onClick={() => handleNavigate('website-redesign-in-chennai')}>Website Redesign</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('cms-best-web-development-company-in-chennai')}>CMS Website Design</li>

                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold mb-2 mt-4">Marketing</h4>
                                                        <ul className="text-gray-500 space-y-2">
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('digital-marketing')}>Digital Marketing</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('social-media-marketing')}>Social Media Marketing</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('google-ads-marketing-company')}>Google Ads Marketing</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('facebook-instagram-marketing')}>Facebook & Instagram Marketing</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('seo-services')}>SEO Services</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('influencer-marketing-services')}>Influencer Marketing</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('product-video-photoshoot')}>Product Video & Photoshoot</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('signage-hoardings-services')}>Signage & Hoardings</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('led-sign-board')}>LED Sign Board</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('bulk-sms-marketing')}>Bulk SMS Marketing</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('whatsapp-marketing')}>WhatsApp Marketing</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('bulk-email-marketing')}>Bulk Email Marketing</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('bulk-database')}>Bulk Database</li>

                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold mb-2 mt-4">Designing</h4>
                                                        <ul className="text-gray-500 space-y-2">
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('branding-design-in-chennai')}>Branding Design</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('logo-design-in-chennai')}>Logo Design</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('corporate-profile-in-chennai')}>Corporate Brochure Design</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('print-media-in-chennai')}>Print Media</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('outdoor-media-in-chennai')}>Outdoor Media and Marketing</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('marketing-collaterals-design')}>Marketing Collaterals</li>

                                                        </ul>
                                                    </div>

                                                    <div>
                                                        <h4 className="font-bold mb-2 mt-4">PR SERVICES</h4>
                                                        <ul className="text-gray-500 space-y-2">
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('political-pr-companies')}>Political PR</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('political-election-campaign')}>Political Election Campaign</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('media-relations')}>Media Relations</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('celebrity-management-company-in-chennai')}>Celebrity Management</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('event-management-company-in-chennai')}>Event Management </li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('crisis-&-preception-mangement')}>Crisis and Perception Management</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('print-and-editorial-services')}>Print & Editorial</li>
                                                            <li className="cursor-pointer" onClick={() => handleNavigate('digital-public-relations')}>Digital Public Relations</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </li>
                        ))}

                    </ul>
                    <div className="hidden md:block">
                        <Link href="/contact">  <button className="relative cursor-pointer flex items-center justify-center bg-black text-white px-6 py-2 md:px-8 md:py-2 rounded-full overflow-hidden transition-all duration-500 group">
                            <span className="relative z-10 transition-all duration-300 group-hover:translate-x-[-10px]">
                                Contact
                            </span>
                            <div className="absolute w-6 h-6 bg-orange-500  rounded-full flex items-center justify-center scale-0 transition-transform duration-500 ease-out group-hover:scale-100 group-hover:right-3 right-4 z-10">
                                <ArrowRight size={16} className="text-black transition-transform duration-500 ease-out group-hover:translate-x-0 translate-x-[-10px]" />
                            </div>

                        </button>
                        </Link>
                    </div>
                    <button className="md:hidden focus:outline-none z-40 transition-colors duration-300" onClick={() => {
                        setMenuOpen(!menuOpen);
                        setMobileDropdown(null);
                    }}>
                        {menuOpen ? <X size={30} className="text-white" /> : <Menu className={`${pathname === "/" || pathname === "/index" || pathname === "/index.html" ? (scrolled ? "text-black" : "text-white") : 'text-black'}`} size={30} />}
                    </button>
                </motion.nav>


                <div className={`fixed top-0 text-2xl left-0 w-full text-white h-screen bg-black transform ${menuOpen ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out md:hidden flex flex-col items-center justify-center gap-6 p-6`}>
                    {menuItems.map(({ name, dropdown, subMenuSections, path }, index) => (
                        <div key={index} className="w-full py-2 border-b border-gray-300">
                            <button
                                className="flex justify-between w-full text-2xl font-semibold hover:text-blue-500"
                                onClick={() => setMobileDropdown(mobileDropdown === index ? null : index)}
                            >
                                <Link href={path} onClick={() => setMenuOpen(false)}>{name}</Link>
                                {dropdown && (
                                    mobileDropdown === index ? (
                                        <Minus className="transition-transform rotate-180" />
                                    ) : (
                                        <Plus className="transition-transform rotate-0" />
                                    )
                                )}
                            </button>

                            <AnimatePresence>
                                {dropdown && mobileDropdown === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        className="mt-2 w-full max-h-64 overflow-y-auto"
                                    >
                                        {subMenuSections?.map((section, sectionIndex) => (
                                            <div key={sectionIndex} className="mb-4">
                                                {/* Section Title with Toggle Button */}
                                                <button
                                                    className="flex justify-between w-full text-lg font-bold text-white hover:text-blue-500"
                                                    onClick={() => setMobileSubDropdown(mobileSubDropdown === sectionIndex ? null : sectionIndex)}
                                                >
                                                    {section.title}
                                                    {mobileSubDropdown === sectionIndex ? (
                                                        <Minus className="transition-transform rotate-180" />
                                                    ) : (
                                                        <Plus className="transition-transform rotate-0" />
                                                    )}
                                                </button>

                                                {/* Sub-dropdown for section */}
                                                <AnimatePresence>
                                                    {mobileSubDropdown === sectionIndex && (
                                                        <motion.ul
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.4, ease: "easeInOut" }}
                                                            className="pl-4 mt-2 space-y-2"
                                                        >
                                                            {section.items.map((item, itemIndex) => (
                                                                <li key={itemIndex} className="hover:text-blue-500 cursor-pointer">
                                                                    <Link className="text-sm" href={item.value} onClick={() => setMenuOpen(false)}>{item.label}</Link>
                                                                </li>
                                                            ))}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </header>
            {isDropdownOpen && <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30" onClick={() => setIsDropdownOpen(false)}></div>}
        </div>
    );
};

export default Navbar;
