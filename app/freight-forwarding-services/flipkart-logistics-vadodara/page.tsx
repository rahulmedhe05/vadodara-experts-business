import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("freight-forwarding-services")!;

export const metadata: Metadata = {
  title: "Flipkart logistics in Vadodara | Freight Forwarding Services | VadodaraExperts",
  description: "Professional flipkart logistics services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/freight-forwarding-services/flipkart-logistics-vadodara" },
  openGraph: {
    title: "Flipkart logistics in Vadodara | VadodaraExperts",
    description: "Professional flipkart logistics services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/freight-forwarding-services/flipkart-logistics-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="flipkart-logistics-vadodara" />;
}
