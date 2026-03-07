import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Building construction cost in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional building construction cost services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/building-construction-cost-vadodara" },
  openGraph: {
    title: "Building construction cost in Vadodara | VadodaraExperts",
    description: "Professional building construction cost services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/building-construction-cost-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="building-construction-cost-vadodara" />;
}
