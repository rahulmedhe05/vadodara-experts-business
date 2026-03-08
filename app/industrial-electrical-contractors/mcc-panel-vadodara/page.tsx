import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-electrical-contractors")!;

export const metadata: Metadata = {
  title: "MCC panel in Vadodara | Industrial Electrical Contractors | VadodaraExperts",
  description: "Professional mcc panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-electrical-contractors/mcc-panel-vadodara" },
  openGraph: {
    title: "MCC panel in Vadodara | VadodaraExperts",
    description: "Professional mcc panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-electrical-contractors/mcc-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mcc-panel-vadodara" />;
}
