import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Outdoor speaker installation in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional outdoor speaker installation services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/outdoor-speaker-installation-vadodara" },
  openGraph: {
    title: "Outdoor speaker installation in Vadodara | VadodaraExperts",
    description: "Professional outdoor speaker installation services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/outdoor-speaker-installation-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="outdoor-speaker-installation-vadodara" />;
}
