import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "column fabrication in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional column fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/column-fabrication-vadodara" },
  openGraph: {
    title: "column fabrication in Vadodara | VadodaraExperts",
    description: "Professional column fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/column-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="column-fabrication-vadodara" />;
}
