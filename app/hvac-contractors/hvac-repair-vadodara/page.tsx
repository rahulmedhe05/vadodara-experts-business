import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "HVAC repair in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional hvac repair services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/hvac-repair-vadodara" },
  openGraph: {
    title: "HVAC repair in Vadodara | VadodaraExperts",
    description: "Professional hvac repair services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/hvac-repair-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="hvac-repair-vadodara" />;
}
