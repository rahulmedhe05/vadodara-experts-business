import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "lift monitoring system in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional lift monitoring system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/lift-monitoring-system-vadodara" },
  openGraph: {
    title: "lift monitoring system in Vadodara | VadodaraExperts",
    description: "Professional lift monitoring system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/lift-monitoring-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="lift-monitoring-system-vadodara" />;
}
