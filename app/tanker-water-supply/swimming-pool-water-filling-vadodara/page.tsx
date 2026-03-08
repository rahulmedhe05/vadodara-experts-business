import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tanker-water-supply")!;

export const metadata: Metadata = {
  title: "Swimming pool water filling in Vadodara | Tanker Water Supply | VadodaraExperts",
  description: "Professional swimming pool water filling services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tanker-water-supply/swimming-pool-water-filling-vadodara" },
  openGraph: {
    title: "Swimming pool water filling in Vadodara | VadodaraExperts",
    description: "Professional swimming pool water filling services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tanker-water-supply/swimming-pool-water-filling-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="swimming-pool-water-filling-vadodara" />;
}
