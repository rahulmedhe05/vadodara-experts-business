import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "plant maintenance contractor in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional plant maintenance contractor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/plant-maintenance-contractor-vadodara" },
  openGraph: {
    title: "plant maintenance contractor in Vadodara | VadodaraExperts",
    description: "Professional plant maintenance contractor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/plant-maintenance-contractor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="plant-maintenance-contractor-vadodara" />;
}
