import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("retail-store-interior-design")!;

export const metadata: Metadata = {
  title: "track lighting retail in Vadodara | Retail Store Interior Design | VadodaraExperts",
  description: "Professional track lighting retail services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/retail-store-interior-design/track-lighting-retail-vadodara" },
  openGraph: {
    title: "track lighting retail in Vadodara | VadodaraExperts",
    description: "Professional track lighting retail services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/retail-store-interior-design/track-lighting-retail-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="track-lighting-retail-vadodara" />;
}
