import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "central AC system in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional central ac system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/central-ac-system-vadodara" },
  openGraph: {
    title: "central AC system in Vadodara | VadodaraExperts",
    description: "Professional central ac system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/central-ac-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="central-ac-system-vadodara" />;
}
