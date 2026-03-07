import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "cloud monitoring industrial in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional cloud monitoring industrial services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/cloud-monitoring-industrial-vadodara" },
  openGraph: {
    title: "cloud monitoring industrial in Vadodara | VadodaraExperts",
    description: "Professional cloud monitoring industrial services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/cloud-monitoring-industrial-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cloud-monitoring-industrial-vadodara" />;
}
