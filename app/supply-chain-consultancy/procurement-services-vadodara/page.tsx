import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Procurement services in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional procurement services services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/procurement-services-vadodara" },
  openGraph: {
    title: "Procurement services in Vadodara | VadodaraExperts",
    description: "Professional procurement services services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/procurement-services-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="procurement-services-vadodara" />;
}
