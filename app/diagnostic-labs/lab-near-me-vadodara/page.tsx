import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "Lab near me in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional lab near me services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/lab-near-me-vadodara" },
  openGraph: {
    title: "Lab near me in Vadodara | VadodaraExperts",
    description: "Professional lab near me services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/lab-near-me-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lab-near-me-vadodara" />;
}
