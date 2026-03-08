import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "3 BHK for rent in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional 3 bhk for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/3-bhk-for-rent-vadodara" },
  openGraph: {
    title: "3 BHK for rent in Vadodara | VadodaraExperts",
    description: "Professional 3 bhk for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/3-bhk-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="3-bhk-for-rent-vadodara" />;
}
