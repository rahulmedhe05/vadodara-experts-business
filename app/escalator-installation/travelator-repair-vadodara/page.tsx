import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("escalator-installation")!;

export const metadata: Metadata = {
  title: "Travelator repair in Vadodara | Escalator Installation | VadodaraExperts",
  description: "Professional travelator repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/escalator-installation/travelator-repair-vadodara" },
  openGraph: {
    title: "Travelator repair in Vadodara | VadodaraExperts",
    description: "Professional travelator repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/escalator-installation/travelator-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="travelator-repair-vadodara" />;
}
