import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hotel-interior-design")!;

export const metadata: Metadata = {
  title: "hotel chandelier selection in Vadodara | Hotel Interior Design | VadodaraExperts",
  description: "Professional hotel chandelier selection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hotel-interior-design/hotel-chandelier-selection-vadodara" },
  openGraph: {
    title: "hotel chandelier selection in Vadodara | VadodaraExperts",
    description: "Professional hotel chandelier selection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hotel-interior-design/hotel-chandelier-selection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hotel-chandelier-selection-vadodara" />;
}
