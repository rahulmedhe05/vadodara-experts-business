import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("property-documentation-services")!;

export const metadata: Metadata = {
  title: "Allotment letter in Vadodara | Property Documentation Services | VadodaraExperts",
  description: "Professional allotment letter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/property-documentation-services/allotment-letter-vadodara" },
  openGraph: {
    title: "Allotment letter in Vadodara | VadodaraExperts",
    description: "Professional allotment letter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/property-documentation-services/allotment-letter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="allotment-letter-vadodara" />;
}
