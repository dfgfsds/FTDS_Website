import servicesData from "@/app/data/ServiceFiles.json";
import ServicePageClient from "@/components/ServicePageClient";

type ServicesDataType = typeof servicesData;
type ServiceSlug = keyof ServicesDataType;

export async function generateStaticParams() {
    return Object.keys(servicesData).map((slug) => ({ slug }));
}

export default async function ServicePage(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params;

    const key = (slug in servicesData ? slug : "default-content") as ServiceSlug;

    const data = servicesData[key];

    return <ServicePageClient data={data} />;
}
