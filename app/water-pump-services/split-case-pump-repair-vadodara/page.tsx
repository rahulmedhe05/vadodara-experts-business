import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-pump-services")!;

export const metadata: Metadata = {
  title: "Split case pump repair in Vadodara | Water Pump Services | VadodaraExperts",
  description: "Professional split case pump repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-pump-services/split-case-pump-repair-vadodara" },
  openGraph: {
    title: "Split case pump repair in Vadodara | VadodaraExperts",
    description: "Professional split case pump repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-pump-services/split-case-pump-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="split-case-pump-repair-vadodara" />;
}
