import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("landscape-architecture")!;

export const metadata: Metadata = {
  title: "Residential complex landscape in Vadodara | Landscape Architecture | VadodaraExperts",
  description: "Professional residential complex landscape services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/landscape-architecture/residential-complex-landscape-vadodara" },
  openGraph: {
    title: "Residential complex landscape in Vadodara | VadodaraExperts",
    description: "Professional residential complex landscape services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/landscape-architecture/residential-complex-landscape-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="residential-complex-landscape-vadodara" />;
}
