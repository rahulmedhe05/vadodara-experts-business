import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Boundary wall construction in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional boundary wall construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/boundary-wall-construction-vadodara" },
  openGraph: {
    title: "Boundary wall construction in Vadodara | VadodaraExperts",
    description: "Professional boundary wall construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/boundary-wall-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="boundary-wall-construction-vadodara" />;
}
