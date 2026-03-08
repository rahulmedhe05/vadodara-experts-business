import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "Water pipeline in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional water pipeline services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/water-pipeline-vadodara" },
  openGraph: {
    title: "Water pipeline in Vadodara | VadodaraExperts",
    description: "Professional water pipeline services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/water-pipeline-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="water-pipeline-vadodara" />;
}
