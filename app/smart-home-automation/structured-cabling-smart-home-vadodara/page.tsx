import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Structured cabling smart home in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional structured cabling smart home services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/structured-cabling-smart-home-vadodara" },
  openGraph: {
    title: "Structured cabling smart home in Vadodara | VadodaraExperts",
    description: "Professional structured cabling smart home services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/structured-cabling-smart-home-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="structured-cabling-smart-home-vadodara" />;
}
