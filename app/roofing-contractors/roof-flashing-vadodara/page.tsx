import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "roof flashing in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional roof flashing services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/roof-flashing-vadodara" },
  openGraph: {
    title: "roof flashing in Vadodara | VadodaraExperts",
    description: "Professional roof flashing services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/roof-flashing-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="roof-flashing-vadodara" />;
}
