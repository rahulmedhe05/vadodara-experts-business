import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("diagnostic-labs")!;

export const metadata: Metadata = {
  title: "Pre employment health check in Vadodara | Diagnostic Labs | VadodaraExperts",
  description: "Professional pre employment health check services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/diagnostic-labs/pre-employment-health-check-vadodara" },
  openGraph: {
    title: "Pre employment health check in Vadodara | VadodaraExperts",
    description: "Professional pre employment health check services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/diagnostic-labs/pre-employment-health-check-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="pre-employment-health-check-vadodara" />;
}
