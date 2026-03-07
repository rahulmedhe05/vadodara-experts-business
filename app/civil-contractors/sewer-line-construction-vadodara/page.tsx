import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Sewer line construction in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional sewer line construction services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/sewer-line-construction-vadodara" },
  openGraph: {
    title: "Sewer line construction in Vadodara | VadodaraExperts",
    description: "Professional sewer line construction services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/sewer-line-construction-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sewer-line-construction-vadodara" />;
}
