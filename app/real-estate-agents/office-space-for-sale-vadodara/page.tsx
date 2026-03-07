import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "Office space for sale in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional office space for sale services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/office-space-for-sale-vadodara" },
  openGraph: {
    title: "Office space for sale in Vadodara | VadodaraExperts",
    description: "Professional office space for sale services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/office-space-for-sale-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="office-space-for-sale-vadodara" />;
}
