import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("landscape-architecture")!;

export const metadata: Metadata = {
  title: "Water feature design in Vadodara | Landscape Architecture | VadodaraExperts",
  description: "Professional water feature design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/landscape-architecture/water-feature-design-vadodara" },
  openGraph: {
    title: "Water feature design in Vadodara | VadodaraExperts",
    description: "Professional water feature design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/landscape-architecture/water-feature-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-feature-design-vadodara" />;
}
