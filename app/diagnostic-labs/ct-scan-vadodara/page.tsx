import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "CT scan in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional ct scan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/ct-scan-vadodara" },
  openGraph: {
    title: "CT scan in Vadodara | VadodaraExperts",
    description: "Professional ct scan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/ct-scan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ct-scan-vadodara" />;
}
