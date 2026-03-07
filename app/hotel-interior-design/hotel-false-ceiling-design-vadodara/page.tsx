import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hotel-interior-design")!;

export const metadata: Metadata = {
  title: "hotel false ceiling design in Vadodara | Hotel Interior Design | VadodaraExperts",
  description: "Professional hotel false ceiling design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hotel-interior-design/hotel-false-ceiling-design-vadodara" },
  openGraph: {
    title: "hotel false ceiling design in Vadodara | VadodaraExperts",
    description: "Professional hotel false ceiling design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hotel-interior-design/hotel-false-ceiling-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hotel-false-ceiling-design-vadodara" />;
}
