import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "high pressure cleaning in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional high pressure cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/high-pressure-cleaning-vadodara" },
  openGraph: {
    title: "high pressure cleaning in Vadodara | VadodaraExperts",
    description: "Professional high pressure cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/high-pressure-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="high-pressure-cleaning-vadodara" />;
}
