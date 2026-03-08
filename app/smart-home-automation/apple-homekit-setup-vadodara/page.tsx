import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Apple HomeKit setup in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional apple homekit setup services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/apple-homekit-setup-vadodara" },
  openGraph: {
    title: "Apple HomeKit setup in Vadodara | VadodaraExperts",
    description: "Professional apple homekit setup services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/apple-homekit-setup-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="apple-homekit-setup-vadodara" />;
}
