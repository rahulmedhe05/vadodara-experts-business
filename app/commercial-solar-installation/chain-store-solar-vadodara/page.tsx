import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("commercial-solar-installation")!;

export const metadata: Metadata = {
  title: "chain store solar in Vadodara | Commercial Solar Installation | VadodaraExperts",
  description: "Professional chain store solar services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/commercial-solar-installation/chain-store-solar-vadodara" },
  openGraph: {
    title: "chain store solar in Vadodara | VadodaraExperts",
    description: "Professional chain store solar services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/commercial-solar-installation/chain-store-solar-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chain-store-solar-vadodara" />;
}
