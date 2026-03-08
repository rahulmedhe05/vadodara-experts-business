import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "Heart health package in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional heart health package services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/heart-health-package-vadodara" },
  openGraph: {
    title: "Heart health package in Vadodara | VadodaraExperts",
    description: "Professional heart health package services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/heart-health-package-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="heart-health-package-vadodara" />;
}
