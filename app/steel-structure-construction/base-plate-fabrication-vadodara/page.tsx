import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "base plate fabrication in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional base plate fabrication services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/base-plate-fabrication-vadodara" },
  openGraph: {
    title: "base plate fabrication in Vadodara | VadodaraExperts",
    description: "Professional base plate fabrication services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/base-plate-fabrication-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="base-plate-fabrication-vadodara" />;
}
