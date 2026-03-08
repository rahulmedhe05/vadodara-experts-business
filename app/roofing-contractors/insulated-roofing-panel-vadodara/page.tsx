import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "insulated roofing panel in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional insulated roofing panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/insulated-roofing-panel-vadodara" },
  openGraph: {
    title: "insulated roofing panel in Vadodara | VadodaraExperts",
    description: "Professional insulated roofing panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/insulated-roofing-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="insulated-roofing-panel-vadodara" />;
}
