import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "annual maintenance contract in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional annual maintenance contract services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/annual-maintenance-contract-vadodara" },
  openGraph: {
    title: "annual maintenance contract in Vadodara | VadodaraExperts",
    description: "Professional annual maintenance contract services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/annual-maintenance-contract-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="annual-maintenance-contract-vadodara" />;
}
