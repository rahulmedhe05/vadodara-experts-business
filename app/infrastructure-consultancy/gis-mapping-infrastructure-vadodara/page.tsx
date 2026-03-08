import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "GIS mapping infrastructure in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional gis mapping infrastructure services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/gis-mapping-infrastructure-vadodara" },
  openGraph: {
    title: "GIS mapping infrastructure in Vadodara | VadodaraExperts",
    description: "Professional gis mapping infrastructure services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/gis-mapping-infrastructure-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gis-mapping-infrastructure-vadodara" />;
}
