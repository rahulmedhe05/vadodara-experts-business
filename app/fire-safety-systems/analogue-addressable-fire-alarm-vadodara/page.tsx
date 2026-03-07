import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "analogue addressable fire alarm in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional analogue addressable fire alarm services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/analogue-addressable-fire-alarm-vadodara" },
  openGraph: {
    title: "analogue addressable fire alarm in Vadodara | VadodaraExperts",
    description: "Professional analogue addressable fire alarm services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/analogue-addressable-fire-alarm-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="analogue-addressable-fire-alarm-vadodara" />;
}
