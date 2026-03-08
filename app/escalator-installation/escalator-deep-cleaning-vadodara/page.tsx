import { Metadata } from "next";
import KeywordPageTemplate from "@/components/KeywordPageTemplate";
import { getNicheBySlug } from "@/lib/data";

const niche = getNicheBySlug("escalator-installation")!;

export const metadata: Metadata = {
  title: "Escalator deep cleaning in Vadodara | Escalator Installation | VadodaraExperts",
  description: "Professional escalator deep cleaning services in Vadodara. Verified experts, affordable pricing, and fast service. Contact VadodaraExperts today.",
  alternates: { canonical: "https://vadodaraexperts.com/escalator-installation/escalator-deep-cleaning-vadodara" },
  openGraph: {
    title: "Escalator deep cleaning in Vadodara | VadodaraExperts",
    description: "Professional escalator deep cleaning services in Vadodara from verified experts.",
    url: "https://vadodaraexperts.com/escalator-installation/escalator-deep-cleaning-vadodara",
    siteName: "VadodaraExperts",
    locale: "en_IN",
    type: "website",
  },
};

export default function Page() {
  return <KeywordPageTemplate niche={niche} keyword="escalator-deep-cleaning-vadodara" />;
}
