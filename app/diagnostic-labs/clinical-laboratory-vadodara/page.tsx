import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "Clinical laboratory in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional clinical laboratory services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/clinical-laboratory-vadodara" },
  openGraph: {
    title: "Clinical laboratory in Vadodara | VadodaraExperts",
    description: "Professional clinical laboratory services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/clinical-laboratory-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="clinical-laboratory-vadodara" />;
}
