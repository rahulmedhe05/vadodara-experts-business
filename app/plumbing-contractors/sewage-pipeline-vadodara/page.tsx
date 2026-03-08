import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "sewage pipeline in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional sewage pipeline services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/sewage-pipeline-vadodara" },
  openGraph: {
    title: "sewage pipeline in Vadodara | VadodaraExperts",
    description: "Professional sewage pipeline services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/sewage-pipeline-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="sewage-pipeline-vadodara" />;
}
