import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "Ceiling panel replacement in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional ceiling panel replacement services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/ceiling-panel-replacement-vadodara" },
  openGraph: {
    title: "Ceiling panel replacement in Vadodara | VadodaraExperts",
    description: "Professional ceiling panel replacement services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/ceiling-panel-replacement-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="ceiling-panel-replacement-vadodara" />;
}
