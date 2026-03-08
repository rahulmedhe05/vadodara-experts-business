import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("building-automation-systems")!;

export const metadata: Metadata = {
  title: "IAQ sensor in Vadodara | Building Automation Systems | VadodaraExperts",
  description: "Professional iaq sensor services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/building-automation-systems/iaq-sensor-vadodara" },
  openGraph: {
    title: "IAQ sensor in Vadodara | VadodaraExperts",
    description: "Professional iaq sensor services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/building-automation-systems/iaq-sensor-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="iaq-sensor-vadodara" />;
}
