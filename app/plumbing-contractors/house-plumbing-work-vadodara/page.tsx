import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("plumbing-contractors")!;

export const metadata: Metadata = {
  title: "house plumbing work in Vadodara | Plumbing Contractors | VadodaraExperts",
  description: "Professional house plumbing work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/plumbing-contractors/house-plumbing-work-vadodara" },
  openGraph: {
    title: "house plumbing work in Vadodara | VadodaraExperts",
    description: "Professional house plumbing work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/plumbing-contractors/house-plumbing-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="house-plumbing-work-vadodara" />;
}
