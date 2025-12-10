import ContactUs from "@/components/ContactUs";
import PricingPlans from "../packages/Packages";

export default function PricingPage() {
  return (
    <div className="mt-24">
      {/* <h1 className="mt-40  text-4xl font-semibold mx-auto text-center ">Pricing</h1>
      <p className="mt-4 text-gray-600 text-center">Details about our pricing plans will be listed here.</p> */}
      <PricingPlans/>
      <ContactUs/>
    </div>
  );
}
