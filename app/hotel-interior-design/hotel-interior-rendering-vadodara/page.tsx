import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hotel-interior-design")!;

export const metadata: Metadata = {
  title: "hotel interior rendering in Vadodara | Hotel Interior Design | VadodaraExperts",
  description: "Professional hotel interior rendering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hotel-interior-design/hotel-interior-rendering-vadodara" },
  openGraph: {
    title: "hotel interior rendering in Vadodara | VadodaraExperts",
    description: "Professional hotel interior rendering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hotel-interior-design/hotel-interior-rendering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hotel-interior-rendering-vadodara" />;
}
