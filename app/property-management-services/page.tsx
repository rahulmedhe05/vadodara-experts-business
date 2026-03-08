import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-management-services")!;

export const metadata: Metadata = {
  title: "Property Management Services in Vadodara | VadodaraExperts",
  description: "Find the best property management services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/property-management-services" },
  openGraph: {
    title: "Property Management Services in Vadodara | VadodaraExperts",
    description: "Find the best property management services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/property-management-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
