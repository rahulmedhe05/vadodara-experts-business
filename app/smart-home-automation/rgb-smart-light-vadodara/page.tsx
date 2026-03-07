import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "RGB smart light in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional rgb smart light services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/rgb-smart-light-vadodara" },
  openGraph: {
    title: "RGB smart light in Vadodara | VadodaraExperts",
    description: "Professional rgb smart light services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/rgb-smart-light-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="rgb-smart-light-vadodara" />;
}
