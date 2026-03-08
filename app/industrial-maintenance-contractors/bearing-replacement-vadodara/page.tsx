import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "bearing replacement in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional bearing replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/bearing-replacement-vadodara" },
  openGraph: {
    title: "bearing replacement in Vadodara | VadodaraExperts",
    description: "Professional bearing replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/bearing-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="bearing-replacement-vadodara" />;
}
