import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chemical-manufacturing")!;

export const metadata: Metadata = {
  title: "Chemical Manufacturing Old Building in Vadodara | Chemical Manufacturing | VadodaraExperts",
  description: "Professional chemical manufacturing old building services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chemical-manufacturing/chemical-manufacturing-old-building-vadodara" },
  openGraph: {
    title: "Chemical Manufacturing Old Building in Vadodara | VadodaraExperts",
    description: "Professional chemical manufacturing old building services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chemical-manufacturing/chemical-manufacturing-old-building-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="chemical-manufacturing-old-building-vadodara" />;
}
