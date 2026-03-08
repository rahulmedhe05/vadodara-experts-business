import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "Semen analysis in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional semen analysis services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/semen-analysis-vadodara" },
  openGraph: {
    title: "Semen analysis in Vadodara | VadodaraExperts",
    description: "Professional semen analysis services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/semen-analysis-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="semen-analysis-vadodara" />;
}
