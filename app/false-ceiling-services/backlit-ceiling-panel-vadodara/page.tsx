import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "Backlit ceiling panel in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional backlit ceiling panel services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/backlit-ceiling-panel-vadodara" },
  openGraph: {
    title: "Backlit ceiling panel in Vadodara | VadodaraExperts",
    description: "Professional backlit ceiling panel services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/backlit-ceiling-panel-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="backlit-ceiling-panel-vadodara" />;
}
