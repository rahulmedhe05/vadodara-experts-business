import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "roof seepage repair in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional roof seepage repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/roof-seepage-repair-vadodara" },
  openGraph: {
    title: "roof seepage repair in Vadodara | VadodaraExperts",
    description: "Professional roof seepage repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/roof-seepage-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roof-seepage-repair-vadodara" />;
}
