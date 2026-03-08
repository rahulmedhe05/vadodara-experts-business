import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("real-estate-agents")!;

export const metadata: Metadata = {
  title: "IT office space in Vadodara | Real Estate Agents | VadodaraExperts",
  description: "Professional it office space services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/real-estate-agents/it-office-space-vadodara" },
  openGraph: {
    title: "IT office space in Vadodara | VadodaraExperts",
    description: "Professional it office space services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/real-estate-agents/it-office-space-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="it-office-space-vadodara" />;
}
