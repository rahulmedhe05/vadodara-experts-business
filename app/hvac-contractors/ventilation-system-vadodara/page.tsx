import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "ventilation system in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional ventilation system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/ventilation-system-vadodara" },
  openGraph: {
    title: "ventilation system in Vadodara | VadodaraExperts",
    description: "Professional ventilation system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/ventilation-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ventilation-system-vadodara" />;
}
