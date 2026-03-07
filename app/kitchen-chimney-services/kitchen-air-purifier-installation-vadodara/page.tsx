import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("kitchen-chimney-services")!;

export const metadata: Metadata = {
  title: "Kitchen air purifier installation in Vadodara | Kitchen Chimney Services | VadodaraExperts",
  description: "Professional kitchen air purifier installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/kitchen-chimney-services/kitchen-air-purifier-installation-vadodara" },
  openGraph: {
    title: "Kitchen air purifier installation in Vadodara | VadodaraExperts",
    description: "Professional kitchen air purifier installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/kitchen-chimney-services/kitchen-air-purifier-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="kitchen-air-purifier-installation-vadodara" />;
}
