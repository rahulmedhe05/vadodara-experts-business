import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Warehouse for rent in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional warehouse for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/warehouse-for-rent-vadodara" },
  openGraph: {
    title: "Warehouse for rent in Vadodara | VadodaraExperts",
    description: "Professional warehouse for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/warehouse-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="warehouse-for-rent-vadodara" />;
}
