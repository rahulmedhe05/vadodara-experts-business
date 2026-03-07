import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("hvac-contractors")!;

export const metadata: Metadata = {
  title: "smoke extraction system in Vadodara | HVAC Contractors | VadodaraExperts",
  description: "Professional smoke extraction system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/hvac-contractors/smoke-extraction-system-vadodara" },
  openGraph: {
    title: "smoke extraction system in Vadodara | VadodaraExperts",
    description: "Professional smoke extraction system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/hvac-contractors/smoke-extraction-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smoke-extraction-system-vadodara" />;
}
