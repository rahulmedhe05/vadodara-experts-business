import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "terrace garden roofing in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional terrace garden roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/terrace-garden-roofing-vadodara" },
  openGraph: {
    title: "terrace garden roofing in Vadodara | VadodaraExperts",
    description: "Professional terrace garden roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/terrace-garden-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="terrace-garden-roofing-vadodara" />;
}
