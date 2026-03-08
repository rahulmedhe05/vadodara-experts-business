import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Furnished flat for rent in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional furnished flat for rent services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/furnished-flat-for-rent-vadodara" },
  openGraph: {
    title: "Furnished flat for rent in Vadodara | VadodaraExperts",
    description: "Professional furnished flat for rent services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/furnished-flat-for-rent-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="furnished-flat-for-rent-vadodara" />;
}
