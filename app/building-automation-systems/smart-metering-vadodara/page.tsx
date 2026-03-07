import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "smart metering in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional smart metering services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/smart-metering-vadodara" },
  openGraph: {
    title: "smart metering in Vadodara | VadodaraExperts",
    description: "Professional smart metering services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/smart-metering-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="smart-metering-vadodara" />;
}
