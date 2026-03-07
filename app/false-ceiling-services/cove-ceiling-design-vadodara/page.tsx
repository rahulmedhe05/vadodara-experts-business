import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("false-ceiling-services")!;

export const metadata: Metadata = {
  title: "Cove ceiling design in Vadodara | False Ceiling Services | VadodaraExperts",
  description: "Professional cove ceiling design services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/false-ceiling-services/cove-ceiling-design-vadodara" },
  openGraph: {
    title: "Cove ceiling design in Vadodara | VadodaraExperts",
    description: "Professional cove ceiling design services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/false-ceiling-services/cove-ceiling-design-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="cove-ceiling-design-vadodara" />;
}
