import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("tanker-water-supply")!;

export const metadata: Metadata = {
  title: "Water tanker service in Vadodara | Tanker Water Supply | VadodaraExperts",
  description: "Professional water tanker service services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/tanker-water-supply/water-tanker-service-vadodara" },
  openGraph: {
    title: "Water tanker service in Vadodara | VadodaraExperts",
    description: "Professional water tanker service services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/tanker-water-supply/water-tanker-service-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-tanker-service-vadodara" />;
}
