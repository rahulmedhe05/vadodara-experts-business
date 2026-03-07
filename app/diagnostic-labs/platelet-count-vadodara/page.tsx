import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "Platelet count in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional platelet count services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/platelet-count-vadodara" },
  openGraph: {
    title: "Platelet count in Vadodara | VadodaraExperts",
    description: "Professional platelet count services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/platelet-count-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="platelet-count-vadodara" />;
}
