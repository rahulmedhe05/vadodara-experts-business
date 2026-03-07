import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "temperature monitoring in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional temperature monitoring services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/temperature-monitoring-vadodara" },
  openGraph: {
    title: "temperature monitoring in Vadodara | VadodaraExperts",
    description: "Professional temperature monitoring services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/temperature-monitoring-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="temperature-monitoring-vadodara" />;
}
