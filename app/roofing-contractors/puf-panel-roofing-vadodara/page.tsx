import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "PUF panel roofing in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional puf panel roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/puf-panel-roofing-vadodara" },
  openGraph: {
    title: "PUF panel roofing in Vadodara | VadodaraExperts",
    description: "Professional puf panel roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/puf-panel-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="puf-panel-roofing-vadodara" />;
}
