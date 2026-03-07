import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-valuation-services")!;

export const metadata: Metadata = {
  title: "Property Valuation Services in Vadodara | VadodaraExperts",
  description: "Find the best property valuation services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/property-valuation-services" },
  openGraph: {
    title: "Property Valuation Services in Vadodara | VadodaraExperts",
    description: "Find the best property valuation services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/property-valuation-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
