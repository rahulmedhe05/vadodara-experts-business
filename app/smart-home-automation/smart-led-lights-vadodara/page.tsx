import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Smart LED lights in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional smart led lights services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/smart-led-lights-vadodara" },
  openGraph: {
    title: "Smart LED lights in Vadodara | VadodaraExperts",
    description: "Professional smart led lights services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/smart-led-lights-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-led-lights-vadodara" />;
}
