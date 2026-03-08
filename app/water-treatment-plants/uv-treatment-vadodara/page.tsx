import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("water-treatment-plants")!;

export const metadata: Metadata = {
  title: "UV treatment in Vadodara | Water Treatment Plants | VadodaraExperts",
  description: "Professional uv treatment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/water-treatment-plants/uv-treatment-vadodara" },
  openGraph: {
    title: "UV treatment in Vadodara | VadodaraExperts",
    description: "Professional uv treatment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/water-treatment-plants/uv-treatment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="uv-treatment-vadodara" />;
}
