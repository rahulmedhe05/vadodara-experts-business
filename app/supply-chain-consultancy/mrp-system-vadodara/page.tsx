import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "MRP system in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional mrp system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/mrp-system-vadodara" },
  openGraph: {
    title: "MRP system in Vadodara | VadodaraExperts",
    description: "Professional mrp system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/mrp-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mrp-system-vadodara" />;
}
