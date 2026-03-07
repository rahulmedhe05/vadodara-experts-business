import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "fan coil unit in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional fan coil unit services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/fan-coil-unit-vadodara" },
  openGraph: {
    title: "fan coil unit in Vadodara | VadodaraExperts",
    description: "Professional fan coil unit services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/fan-coil-unit-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fan-coil-unit-vadodara" />;
}
