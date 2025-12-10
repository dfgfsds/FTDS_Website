import servicesData from "../../../../data/ServiceFiles.json";
import ServicePageClient from "@/components/ServicePageClient";

export async function generateStaticParams() {
  // Get all service slugs from the JSON data
  const slugs = Object.keys(servicesData);
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  let data = servicesData[slug as keyof typeof servicesData];

  if (!data) {
    data = servicesData["default-content"];
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        <p>Service not found.</p>
      </div>
    );
  }

  return <ServicePageClient data={data} />;
}
