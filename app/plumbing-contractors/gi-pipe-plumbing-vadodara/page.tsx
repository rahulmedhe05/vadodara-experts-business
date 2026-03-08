import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "GI pipe plumbing in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional gi pipe plumbing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/gi-pipe-plumbing-vadodara" },
  openGraph: {
    title: "GI pipe plumbing in Vadodara | VadodaraExperts",
    description: "Professional gi pipe plumbing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/gi-pipe-plumbing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="gi-pipe-plumbing-vadodara" />;
}
