import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("civil-contractors")!;

export const metadata: Metadata = {
  title: "AAC block work in Vadodara | Civil Contractors | VadodaraExperts",
  description: "Professional aac block work services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/civil-contractors/aac-block-work-vadodara" },
  openGraph: {
    title: "AAC block work in Vadodara | VadodaraExperts",
    description: "Professional aac block work services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/civil-contractors/aac-block-work-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="aac-block-work-vadodara" />;
}
