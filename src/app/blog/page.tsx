// app/blog/page.tsx
"use client";

import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { articles } from "../../../lib/newsJson"; // move `newsJson` here
import ContactUs from "@/components/ContactUs";

const NewsSection = () => {
    const router = useRouter();

    const handleNewsView = (data: any) => {
        const slug = data.title.replace(/\s+/g, "-").toLowerCase();
        router.push(`/blog/${slug}`, { scroll: true });
        sessionStorage.setItem("blogData", JSON.stringify(data)); // Pass data via sessionStorage
    };

    return (
        <div>
        <div className="container">
            <h2 className="text-8xl font-medium ml-8 mt-52">Latest news</h2>
            <p className="text-gray-500 mt-4 ml-8 font-light">All the latest news and articles from FT Digital Solutions.</p>

            <div className="container mx-auto px-4 py-10 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {articles.map((article, index) => (
                        <div
                            onClick={() => handleNewsView(article)}
                            key={index}
                            className="group cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={article.image.src}
                                    alt={article.title}
                                    className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-4">
                                <p className="text-gray-500 text-sm">{article.date}</p>
                                <h3 className="text-lg font-semibold mt-2">{article.title}</h3>
                                <button className="mt-4 flex items-center justify-center relative w-12 h-12 rounded-full bg-amber-600 overflow-hidden transition-all duration-300 group">
                                    <ArrowRight size={20} className="absolute transition-transform duration-500 transform group-hover:translate-x-8" />
                                    <ArrowRight size={20} className="absolute transition-transform duration-500 transform -translate-x-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <ContactUs/>
        </div>

    );
};

export default NewsSection;
