import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "annual shutdown in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional annual shutdown services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/annual-shutdown-vadodara" },
  openGraph: {
    title: "annual shutdown in Vadodara | VadodaraExperts",
    description: "Professional annual shutdown services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/annual-shutdown-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="annual-shutdown-vadodara" />;
}
