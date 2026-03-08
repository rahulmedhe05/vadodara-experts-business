import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-construction")!;

export const metadata: Metadata = {
  title: "multi room audio in Vadodara | Smart Home Construction | VadodaraExperts",
  description: "Professional multi room audio services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-construction/multi-room-audio-vadodara" },
  openGraph: {
    title: "multi room audio in Vadodara | VadodaraExperts",
    description: "Professional multi room audio services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-construction/multi-room-audio-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multi-room-audio-vadodara" />;
}
