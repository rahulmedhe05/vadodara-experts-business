import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "Annual health checkup in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional annual health checkup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/annual-health-checkup-vadodara" },
  openGraph: {
    title: "Annual health checkup in Vadodara | VadodaraExperts",
    description: "Professional annual health checkup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/annual-health-checkup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="annual-health-checkup-vadodara" />;
}
