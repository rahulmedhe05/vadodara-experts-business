import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "plumbing inspection in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional plumbing inspection services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/plumbing-inspection-vadodara" },
  openGraph: {
    title: "plumbing inspection in Vadodara | VadodaraExperts",
    description: "Professional plumbing inspection services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/plumbing-inspection-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plumbing-inspection-vadodara" />;
}
