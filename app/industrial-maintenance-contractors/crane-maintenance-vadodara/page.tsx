import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "crane maintenance in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional crane maintenance services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/crane-maintenance-vadodara" },
  openGraph: {
    title: "crane maintenance in Vadodara | VadodaraExperts",
    description: "Professional crane maintenance services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/crane-maintenance-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="crane-maintenance-vadodara" />;
}
