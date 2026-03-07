import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "4 BHK flat for sale in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional 4 bhk flat for sale services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/4-bhk-flat-for-sale-vadodara" },
  openGraph: {
    title: "4 BHK flat for sale in Vadodara | VadodaraExperts",
    description: "Professional 4 bhk flat for sale services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/4-bhk-flat-for-sale-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="4-bhk-flat-for-sale-vadodara" />;
}
