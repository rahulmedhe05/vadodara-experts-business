import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "Pap smear test in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional pap smear test services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/pap-smear-test-vadodara" },
  openGraph: {
    title: "Pap smear test in Vadodara | VadodaraExperts",
    description: "Professional pap smear test services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/pap-smear-test-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pap-smear-test-vadodara" />;
}
