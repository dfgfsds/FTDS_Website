"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";
import ContactUs from "@/components/ContactUs";

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        service: '',
        message: ''
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const payload = {
            name: formData.name,
            email: formData.email,
            mobile: formData.number,
            services: formData.service,
            description: formData.message
        };

        try {
            const response = await axios.post('https://ftdsapi.ftdigitalsolutions.org/user/create/', payload);
            if (response?.data) {
                alert("Form submitted successfully!");
                setFormData({ name: '', email: '', number: '', service: '', message: '' });
            }
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Error submitting form. Please try again later.");
        }
    };

    return (
        <div>
            <h1 className="mt-40 text-5xl md:text-8xl my-4 ml-8">Get in touch</h1>

            <div className="mx-4 flex flex-col md:flex-row gap-10 p-6 mt-14">
                {/* Contact Info */}
                <div className="w-full md:w-1/2 text-gray-700">
                    <h2 className="text-3xl">
                        If you have any questions or you'd like to find out more about our services, please get in touch.
                    </h2>
                    <h3 className="font-semibold text-lg mt-4">Contact details:</h3>
                    <p className="mt-2">
                        <span className="font-semibold">Office address:</span><br />
                        Second Floor, North Side, 46 Giri Rd,<br />
                        Satyamurthy Nagar, T. Nagar,<br />
                        Chennai, Tamil Nadu,<br />
                        600001.
                    </p>
                    <p className="mt-4 font-semibold">Phone: +91 87688 7697</p>
                    <p className="mt-2 font-semibold">Email: info@ftdigitalsolutions.in</p>
                </div>

                {/* Contact Form */}
                <div className="w-full md:w-1/2">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-lg">Name*</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-4 border border-gray-300 rounded-lg mt-1"
                            />
                        </div>

                        <div>
                            <label className="block text-lg">Email*</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-4 border border-gray-300 rounded-lg mt-1"
                            />
                        </div>

                        <div>
                            <label className="block text-lg">Number*</label>
                            <input
                                type="number"
                                name="number"
                                value={formData.number}
                                onChange={handleChange}
                                required
                                className="w-full p-4 border border-gray-300 rounded-lg mt-1"
                            />
                        </div>

                        <div>
                            <label className="block text-lg">Service*</label>
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full p-4 border border-gray-300 rounded-lg mt-1"
                            >
                                <option value="" disabled>Select a service</option>
                                <option value="Web Development">Web Development</option>
                                <option value="App Development">App Development</option>
                                <option value="SEO Optimization">SEO Optimization</option>
                                <option value="Google Ads Marketing">Google Ads Marketing</option>
                                <option value="Facebook & Instagram Marketing">Facebook & Instagram Marketing</option>
                                <option value="Influencer Marketing">Influencer Marketing</option>
                                <option value="Bulk SMS Marketing">Bulk SMS Marketing</option>
                                <option value="Signage & Hoardings">Signage & Hoardings</option>
                                <option value="CMS Development">CMS Development</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-lg">Message*</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full p-4 border border-gray-300 rounded-lg mt-1"
                            />
                        </div>

                        {/* Motion Submit Button */}
                          <motion.button
                            type="submit"
                            className="mt-6 cursor-pointer relative overflow-hidden flex items-center gap-3 px-8 py-3 text-black bg-white rounded-full transition-all"
                            whileHover="hover"
                            initial="initial"
                            variants={{
                                initial: { color: "#fff" },
                                hover: { color: "#000" },
                            }}
                        >
                            <motion.span
                                className="relative z-10 2xl:text-lg"
                                variants={{
                                    initial: { color: "#fff" },
                                    hover: { color: "#000" },
                                }}
                                transition={{ duration: 0.2, ease: "easeInOut", delay: 0.3 }}
                            >
                                Submit
                            </motion.span>

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
                    </form>
                </div>
            </div>
            <ContactUs/>
        </div>
    );
}

export default Contact;
