import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "HDPE pipe plumbing in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional hdpe pipe plumbing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/hdpe-pipe-plumbing-vadodara" },
  openGraph: {
    title: "HDPE pipe plumbing in Vadodara | VadodaraExperts",
    description: "Professional hdpe pipe plumbing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/hdpe-pipe-plumbing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hdpe-pipe-plumbing-vadodara" />;
}
