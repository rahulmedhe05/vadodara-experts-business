import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Apartment for sale in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional apartment for sale services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/apartment-for-sale-vadodara" },
  openGraph: {
    title: "Apartment for sale in Vadodara | VadodaraExperts",
    description: "Professional apartment for sale services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/apartment-for-sale-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="apartment-for-sale-vadodara" />;
}
