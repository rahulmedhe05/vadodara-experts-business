import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "MRI scan in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional mri scan services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/mri-scan-vadodara" },
  openGraph: {
    title: "MRI scan in Vadodara | VadodaraExperts",
    description: "Professional mri scan services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/mri-scan-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="mri-scan-vadodara" />;
}
