import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-purifier-services")!;

export const metadata: Metadata = {
  title: "UV lamp price in Vadodara | Water Purifier Services | VadodaraExperts",
  description: "Professional uv lamp price services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-purifier-services/uv-lamp-price-vadodara" },
  openGraph: {
    title: "UV lamp price in Vadodara | VadodaraExperts",
    description: "Professional uv lamp price services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-purifier-services/uv-lamp-price-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="uv-lamp-price-vadodara" />;
}
