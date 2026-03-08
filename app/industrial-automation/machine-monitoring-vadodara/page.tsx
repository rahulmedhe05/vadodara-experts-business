import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "machine monitoring in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional machine monitoring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/machine-monitoring-vadodara" },
  openGraph: {
    title: "machine monitoring in Vadodara | VadodaraExperts",
    description: "Professional machine monitoring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/machine-monitoring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="machine-monitoring-vadodara" />;
}
