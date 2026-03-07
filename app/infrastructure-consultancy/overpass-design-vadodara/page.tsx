import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("infrastructure-consultancy")!;

export const metadata: Metadata = {
  title: "overpass design in Vadodara | Infrastructure Consultancy | VadodaraExperts",
  description: "Professional overpass design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/infrastructure-consultancy/overpass-design-vadodara" },
  openGraph: {
    title: "overpass design in Vadodara | VadodaraExperts",
    description: "Professional overpass design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/infrastructure-consultancy/overpass-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="overpass-design-vadodara" />;
}
