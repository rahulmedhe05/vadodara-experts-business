import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Automated gate system in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional automated gate system services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/automated-gate-system-vadodara" },
  openGraph: {
    title: "Automated gate system in Vadodara | VadodaraExperts",
    description: "Professional automated gate system services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/automated-gate-system-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automated-gate-system-vadodara" />;
}
