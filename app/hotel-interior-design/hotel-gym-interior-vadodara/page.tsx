import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hotel-interior-design")!;

export const metadata: Metadata = {
  title: "hotel gym interior in Vadodara | Hotel Interior Design | VadodaraExperts",
  description: "Professional hotel gym interior services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hotel-interior-design/hotel-gym-interior-vadodara" },
  openGraph: {
    title: "hotel gym interior in Vadodara | VadodaraExperts",
    description: "Professional hotel gym interior services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hotel-interior-design/hotel-gym-interior-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hotel-gym-interior-vadodara" />;
}
