import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Staircase construction in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional staircase construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/staircase-construction-vadodara" },
  openGraph: {
    title: "Staircase construction in Vadodara | VadodaraExperts",
    description: "Professional staircase construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/staircase-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="staircase-construction-vadodara" />;
}
