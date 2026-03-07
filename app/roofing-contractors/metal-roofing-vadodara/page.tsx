import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "metal roofing in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional metal roofing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/metal-roofing-vadodara" },
  openGraph: {
    title: "metal roofing in Vadodara | VadodaraExperts",
    description: "Professional metal roofing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/metal-roofing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="metal-roofing-vadodara" />;
}
