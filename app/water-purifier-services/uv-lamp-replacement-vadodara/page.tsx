import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "UV lamp replacement in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional uv lamp replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/uv-lamp-replacement-vadodara" },
  openGraph: {
    title: "UV lamp replacement in Vadodara | VadodaraExperts",
    description: "Professional uv lamp replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/uv-lamp-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="uv-lamp-replacement-vadodara" />;
}
