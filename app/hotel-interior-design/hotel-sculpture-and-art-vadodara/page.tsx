import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hotel-interior-design")!;

export const metadata: Metadata = {
  title: "hotel sculpture and art in Vadodara | Hotel Interior Design | VadodaraExperts",
  description: "Professional hotel sculpture and art services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hotel-interior-design/hotel-sculpture-and-art-vadodara" },
  openGraph: {
    title: "hotel sculpture and art in Vadodara | VadodaraExperts",
    description: "Professional hotel sculpture and art services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hotel-interior-design/hotel-sculpture-and-art-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hotel-sculpture-and-art-vadodara" />;
}
