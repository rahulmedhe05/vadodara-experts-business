import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("supply-chain-consultancy")!;

export const metadata: Metadata = {
  title: "Last mile logistics in Vadodara | Supply Chain Consultancy | VadodaraExperts",
  description: "Professional last mile logistics services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/supply-chain-consultancy/last-mile-logistics-vadodara" },
  openGraph: {
    title: "Last mile logistics in Vadodara | VadodaraExperts",
    description: "Professional last mile logistics services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/supply-chain-consultancy/last-mile-logistics-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="last-mile-logistics-vadodara" />;
}
