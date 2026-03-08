import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "hot water plumbing in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional hot water plumbing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/hot-water-plumbing-vadodara" },
  openGraph: {
    title: "hot water plumbing in Vadodara | VadodaraExperts",
    description: "Professional hot water plumbing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/hot-water-plumbing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hot-water-plumbing-vadodara" />;
}
