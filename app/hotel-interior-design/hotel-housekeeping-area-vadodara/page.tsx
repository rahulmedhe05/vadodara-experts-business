import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hotel-interior-design")!;

export const metadata: Metadata = {
  title: "hotel housekeeping area in Vadodara | Hotel Interior Design | VadodaraExperts",
  description: "Professional hotel housekeeping area services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hotel-interior-design/hotel-housekeeping-area-vadodara" },
  openGraph: {
    title: "hotel housekeeping area in Vadodara | VadodaraExperts",
    description: "Professional hotel housekeeping area services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hotel-interior-design/hotel-housekeeping-area-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hotel-housekeeping-area-vadodara" />;
}
