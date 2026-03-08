import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "septic tank plumbing in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional septic tank plumbing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/septic-tank-plumbing-vadodara" },
  openGraph: {
    title: "septic tank plumbing in Vadodara | VadodaraExperts",
    description: "Professional septic tank plumbing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/septic-tank-plumbing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="septic-tank-plumbing-vadodara" />;
}
