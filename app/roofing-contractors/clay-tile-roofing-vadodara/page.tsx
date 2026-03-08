import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "clay tile roofing in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional clay tile roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/clay-tile-roofing-vadodara" },
  openGraph: {
    title: "clay tile roofing in Vadodara | VadodaraExperts",
    description: "Professional clay tile roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/clay-tile-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="clay-tile-roofing-vadodara" />;
}
