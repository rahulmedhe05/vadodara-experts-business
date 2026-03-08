import { Metadata } from "next";
import NichePageTemplate from "@/components/NichePageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Property Documentation Services in Vadodara | VadodaraExperts",
  description: "Find the best property documentation services in Vadodara. Verified experts, affordable pricing, and fast service. Book now on VadodaraExperts.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services" },
  openGraph: {
    title: "Property Documentation Services in Vadodara | VadodaraExperts",
    description: "Find the best property documentation services in Vadodara. Verified experts, affordable pricing.",
    url: "https://vadodaraexperts.com/property-documentation-services",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <NichePageTemplate niche={niche} />;
}
