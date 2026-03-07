import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("fire-safety-systems")!;

export const metadata: Metadata = {
  title: "fixed temperature detector in Vadodara | Fire Safety Systems | VadodaraExperts",
  description: "Professional fixed temperature detector services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/fire-safety-systems/fixed-temperature-detector-vadodara" },
  openGraph: {
    title: "fixed temperature detector in Vadodara | VadodaraExperts",
    description: "Professional fixed temperature detector services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/fire-safety-systems/fixed-temperature-detector-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="fixed-temperature-detector-vadodara" />;
}
