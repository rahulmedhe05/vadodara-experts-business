import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "pipe insulation HVAC in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional pipe insulation hvac services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/pipe-insulation-hvac-vadodara" },
  openGraph: {
    title: "pipe insulation HVAC in Vadodara | VadodaraExperts",
    description: "Professional pipe insulation hvac services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/pipe-insulation-hvac-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pipe-insulation-hvac-vadodara" />;
}
