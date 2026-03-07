import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "multi split AC system in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional multi split ac system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/multi-split-ac-system-vadodara" },
  openGraph: {
    title: "multi split AC system in Vadodara | VadodaraExperts",
    description: "Professional multi split ac system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/multi-split-ac-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multi-split-ac-system-vadodara" />;
}
