import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "boiler water treatment in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional boiler water treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/boiler-water-treatment-vadodara" },
  openGraph: {
    title: "boiler water treatment in Vadodara | VadodaraExperts",
    description: "Professional boiler water treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/boiler-water-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boiler-water-treatment-vadodara" />;
}
