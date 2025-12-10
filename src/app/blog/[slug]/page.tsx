import { articles } from "../../../../lib/newsJson";
import { slugify } from "../../../../lib/slugify";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import ContactUs from "@/components/ContactUs";

export async function generateStaticParams() {
    return articles.map((item) => ({
        slug: slugify(item.title),
    }));
}

export default function SingleNewsPage({ params }: { params: { slug: string } }) {
    const blog = articles.find(
        (item) => slugify(item.title) === params.slug
    );

    if (!blog) {
        return <div className="container mx-auto px-4 py-10 mt-32">No blog found.</div>;
    }

    return (
        <div>
            <div className="container mx-auto px-4 py-10 mt-32">
                <Link href="/blog" className="flex items-center text-primaryColor-400 mb-6">
                    <ArrowLeft size={20} className="mr-2" />
                    Back to News
                </Link>

                <div className="mt-6">
                    <img
                        src={blog.image.src}
                        alt={blog.title}
                        className="w-full h-80 object-cover rounded-lg shadow-lg"
                    />
                </div>

                <h1 className="text-5xl font-bold ml-4 mt-4">{blog.title}</h1>
                <p className="text-gray-500 mt-4 ml-4">{blog.date}</p>

                <div className="mt-6 text-lg leading-7 text-gray-700 md:w-[70%] mx-auto">
                    {blog.content.map((section: any, index: number) => {
                        if (section.tag === "ul") {
                            return (
                                <ul key={index} className="list-disc ml-6">
                                    {section.items.map((item: string, i: number) => (
                                        <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                                    ))}
                                </ul>
                            );
                        } else {
                            const Tag = section.tag;
                            return (
                                <Tag key={index} className="mt-4" dangerouslySetInnerHTML={{ __html: section.text }} />
                            );
                        }
                    })}
                </div>
            </div>

            <ContactUs />
        </div>
    );
}
