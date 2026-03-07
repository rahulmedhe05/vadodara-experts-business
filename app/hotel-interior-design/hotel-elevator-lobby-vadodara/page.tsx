import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hotel-interior-design")!;

export const metadata: Metadata = {
  title: "hotel elevator lobby in Vadodara | Hotel Interior Design | VadodaraExperts",
  description: "Professional hotel elevator lobby services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hotel-interior-design/hotel-elevator-lobby-vadodara" },
  openGraph: {
    title: "hotel elevator lobby in Vadodara | VadodaraExperts",
    description: "Professional hotel elevator lobby services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hotel-interior-design/hotel-elevator-lobby-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hotel-elevator-lobby-vadodara" />;
}
