import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "shaft alignment in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional shaft alignment services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/shaft-alignment-vadodara" },
  openGraph: {
    title: "shaft alignment in Vadodara | VadodaraExperts",
    description: "Professional shaft alignment services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/shaft-alignment-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="shaft-alignment-vadodara" />;
}
