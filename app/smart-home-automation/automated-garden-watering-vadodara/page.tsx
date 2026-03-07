import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("smart-home-automation")!;

export const metadata: Metadata = {
  title: "Automated garden watering in Vadodara | Smart Home Automation | VadodaraExperts",
  description: "Professional automated garden watering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/smart-home-automation/automated-garden-watering-vadodara" },
  openGraph: {
    title: "Automated garden watering in Vadodara | VadodaraExperts",
    description: "Professional automated garden watering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/smart-home-automation/automated-garden-watering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="automated-garden-watering-vadodara" />;
}
