import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "operation theatre HVAC in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional operation theatre hvac services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/operation-theatre-hvac-vadodara" },
  openGraph: {
    title: "operation theatre HVAC in Vadodara | VadodaraExperts",
    description: "Professional operation theatre hvac services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/operation-theatre-hvac-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="operation-theatre-hvac-vadodara" />;
}
