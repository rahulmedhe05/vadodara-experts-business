import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "motor rewinding in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional motor rewinding services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/motor-rewinding-vadodara" },
  openGraph: {
    title: "motor rewinding in Vadodara | VadodaraExperts",
    description: "Professional motor rewinding services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/motor-rewinding-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="motor-rewinding-vadodara" />;
}
