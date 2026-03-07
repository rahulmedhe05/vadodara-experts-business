import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("steel-structure-construction")!;

export const metadata: Metadata = {
  title: "steel handrail in Vadodara | Steel Structure Construction | VadodaraExperts",
  description: "Professional steel handrail services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/steel-structure-construction/steel-handrail-vadodara" },
  openGraph: {
    title: "steel handrail in Vadodara | VadodaraExperts",
    description: "Professional steel handrail services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/steel-structure-construction/steel-handrail-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="steel-handrail-vadodara" />;
}
