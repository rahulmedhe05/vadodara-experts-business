import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("chemical-manufacturing")!;

export const metadata: Metadata = {
  title: "Hire Chemical Manufacturing in Vadodara | Chemical Manufacturing | VadodaraExperts",
  description: "Professional hire chemical manufacturing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/chemical-manufacturing/hire-chemical-manufacturing-vadodara" },
  openGraph: {
    title: "Hire Chemical Manufacturing in Vadodara | VadodaraExperts",
    description: "Professional hire chemical manufacturing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/chemical-manufacturing/hire-chemical-manufacturing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hire-chemical-manufacturing-vadodara" />;
}
