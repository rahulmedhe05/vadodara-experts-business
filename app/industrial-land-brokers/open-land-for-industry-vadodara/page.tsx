import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-land-brokers")!;

export const metadata: Metadata = {
  title: "open land for industry in Vadodara | Industrial Land Brokers | VadodaraExperts",
  description: "Professional open land for industry services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-land-brokers/open-land-for-industry-vadodara" },
  openGraph: {
    title: "open land for industry in Vadodara | VadodaraExperts",
    description: "Professional open land for industry services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-land-brokers/open-land-for-industry-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="open-land-for-industry-vadodara" />;
}
