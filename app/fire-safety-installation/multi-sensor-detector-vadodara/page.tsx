import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-installation")!;

export const metadata: Metadata = {
  title: "multi sensor detector in Vadodara | Fire Safety Installation | VadodaraExperts",
  description: "Professional multi sensor detector services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-installation/multi-sensor-detector-vadodara" },
  openGraph: {
    title: "multi sensor detector in Vadodara | VadodaraExperts",
    description: "Professional multi sensor detector services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-installation/multi-sensor-detector-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="multi-sensor-detector-vadodara" />;
}
