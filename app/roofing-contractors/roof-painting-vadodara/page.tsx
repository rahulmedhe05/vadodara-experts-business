import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "roof painting in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional roof painting services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/roof-painting-vadodara" },
  openGraph: {
    title: "roof painting in Vadodara | VadodaraExperts",
    description: "Professional roof painting services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/roof-painting-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roof-painting-vadodara" />;
}
