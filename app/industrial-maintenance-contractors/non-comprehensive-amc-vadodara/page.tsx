import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-maintenance-contractors")!;

export const metadata: Metadata = {
  title: "non-comprehensive AMC in Vadodara | Industrial Maintenance Contractors | VadodaraExperts",
  description: "Professional non-comprehensive amc services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-maintenance-contractors/non-comprehensive-amc-vadodara" },
  openGraph: {
    title: "non-comprehensive AMC in Vadodara | VadodaraExperts",
    description: "Professional non-comprehensive amc services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-maintenance-contractors/non-comprehensive-amc-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="non-comprehensive-amc-vadodara" />;
}
