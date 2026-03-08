import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "roof gutter in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional roof gutter services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/roof-gutter-vadodara" },
  openGraph: {
    title: "roof gutter in Vadodara | VadodaraExperts",
    description: "Professional roof gutter services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/roof-gutter-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roof-gutter-vadodara" />;
}
