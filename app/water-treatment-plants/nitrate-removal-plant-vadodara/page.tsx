import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "nitrate removal plant in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional nitrate removal plant services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/nitrate-removal-plant-vadodara" },
  openGraph: {
    title: "nitrate removal plant in Vadodara | VadodaraExperts",
    description: "Professional nitrate removal plant services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/nitrate-removal-plant-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="nitrate-removal-plant-vadodara" />;
}
