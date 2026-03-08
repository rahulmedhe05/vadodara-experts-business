import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("industrial-automation")!;

export const metadata: Metadata = {
  title: "remote monitoring system in Vadodara | Industrial Automation | VadodaraExperts",
  description: "Professional remote monitoring system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/industrial-automation/remote-monitoring-system-vadodara" },
  openGraph: {
    title: "remote monitoring system in Vadodara | VadodaraExperts",
    description: "Professional remote monitoring system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/industrial-automation/remote-monitoring-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="remote-monitoring-system-vadodara" />;
}
