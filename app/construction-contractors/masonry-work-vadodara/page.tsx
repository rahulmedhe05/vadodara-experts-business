import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("construction-contractors")!;

export const metadata: Metadata = {
  title: "Masonry work in Vadodara | Construction Contractors | VadodaraExperts",
  description: "Professional masonry work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/construction-contractors/masonry-work-vadodara" },
  openGraph: {
    title: "Masonry work in Vadodara | VadodaraExperts",
    description: "Professional masonry work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/construction-contractors/masonry-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="masonry-work-vadodara" />;
}
