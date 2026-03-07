import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("roofing-contractors")!;

export const metadata: Metadata = {
  title: "heat insulation roof in Vadodara | Roofing Contractors | VadodaraExperts",
  description: "Professional heat insulation roof services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/roofing-contractors/heat-insulation-roof-vadodara" },
  openGraph: {
    title: "heat insulation roof in Vadodara | VadodaraExperts",
    description: "Professional heat insulation roof services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/roofing-contractors/heat-insulation-roof-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heat-insulation-roof-vadodara" />;
}
